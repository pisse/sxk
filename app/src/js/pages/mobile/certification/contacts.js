/* eslint-disable */
import React, {Component, createClass} from 'react';
import {List, InputItem, Button, Picker, Toast} from 'antd-mobile';
import {createForm} from 'rc-form';
import classnames from 'classnames';
import 'scss/mobile/bank.component.scss';
import request from 'common/request';
import {redirect} from 'utils';

const title = '紧急联系人';
const READY_TEXT = '正在准备数据';
const LOAED_TEXT = '提额至300元';
const COMPLETED_TEXT = '保存';

class Contacts extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }
    state = {
        lock: true,
        // 数据加载完毕
        loaded: false,
        // request loading
        loading: false,
        // 按钮文案
        buttonText: READY_TEXT
    }
    constructor(props){
        super(props);
    }
    componentDidMount(){
        document.title = title;
        let {step, loaded, formatPickerData, middleware, hideSteps, route} = this.props;
        let {buttonText} = this.state;
        let {router} = this.context;
        step(1);

        request('credit-card/get-contacts').then(response => {
            let {
                // 是否已认证
                is_can_change,
                // 直系亲属姓名
                lineal_name,
                // 直系亲属手机号
                lineal_mobile,
                // 直系亲属联系人选中
                lineal_relation,
                // 直系亲属关系列表
                lineal_list: lineals,
                // 其他联系人关系列表
                other_list: others,
                // 其他联系人姓名
                other_name,
                // 其他联系人手机号
                other_mobile,
                // 其他联系人选中
                other_relation,
                verify_loan_pass,
                real_verify_status: disabled
            } = response.data.item;
            verify_loan_pass && hideSteps();
            loaded();

            lineals && lineals.map(formatPickerData.bind(this));
            others && others.map(formatPickerData.bind(this));

            // disabled = !disabled;
            buttonText = !!!disabled ? LOAED_TEXT : COMPLETED_TEXT;
            this.setState({
                buttonText,
                disabled,
                lineal: [lineal_relation],
                lineals,
                lineal_name,
                lineal_mobile,
                other: [other_relation],
                others,
                other_name,
                other_mobile,
                loaded: 1
            });
        }).catch(middleware.bind(this));
    }
    submit(){
        let {nextStepLink, route, middleware} = this.props;
        let {getFieldInstance, getFieldsValue, validateFields} = this.props.form;
        validateFields((errors, values) => {
            if(errors){
                for(let i in errors){
                    let input = errors[i];
                    input.errors && input.errors.map(error => {
                        Toast.offline(error.message, 1.5, () => {
                            let element = getFieldInstance(error.field);
                            if(element && element.refs && element.refs.input){
                                let {input} = element.refs;
                                setTimeout(input.focus());
                            }
                        });
                    });
                    break;
                }
            }else{
                let {lock, buttonText} = this.state;
                let {lineal, lineal_name, lineal_mobile, other, other_name, other_mobile} = getFieldsValue();
                if(lock){
                    this.setState({lock: 0, loaded: 0, loading: 1});

                    let start = Date.now();
                    request.post('credit-card/save-contacts', {
                        type: lineal[0],
                        name: lineal_name,
                        mobile: lineal_mobile,
                        relation_spare: other[0],
                        name_spare: other_name,
                        mobile_spare: other_mobile,
                    }).then(response => {
                        let end = Date.now();
                        let timeout = 0;
                        if(end - start < 1000) timeout = 1000;
                        if(end - start > 1000) timeout = 0;
                        let {message} = response;
                        setTimeout(() => {
                            Toast.success(message, 1.5, () => {
                                buttonText = COMPLETED_TEXT;
                                setTimeout(nextStepLink(route));
                            });
                            this.setState({lock: 1, loaded: 1, loading: 0, COMPLETED_TEXT});
                        }, timeout);
                    }).catch(middleware.bind(this));
                    
                }
                
            }
        });
    }
    render(){
        let {form: {getFieldProps}, label} = this.props;
        let {
            lock,
            loaded,
            loading,
            disabled,
            lineal,
            lineals,
            lineal_name,
            lineal_mobile,
            other,
            others,
            other_name,
            other_mobile,
            buttonText
        } = this.state;
        let editable = !loading && loaded && lock
        return (
            <div className='contacts'>
                <List renderHeader={() => '直系亲属联系人'}>
                    <Picker
                    cols={1}
                    disabled={!editable}
                    data={lineals}
                    {...getFieldProps('lineal', {
                        initialValue: lineal,
                        rules: [{
                            required: true,
                            message: '请选择直系亲属联系人关系'
                        }]
                    })}>
                        <List.Item arrow='horizontal'>{label('关系')}</List.Item>
                    </Picker>
                    <InputItem
                    editable={editable}
                    placeholder='请输入姓名'
                    {...getFieldProps('lineal_name', {
                        initialValue: lineal_name,
                        rules: [{
                            required: true,
                            message: '直系亲属联系人姓名不能为空'
                        }]
                    })}>{label('姓名')}</InputItem>
                    <InputItem
                    type='number'
                    editable={editable}
                    placeholder='请输入联系方式'
                    {...getFieldProps('lineal_mobile', {
                        initialValue: lineal_mobile,
                        rules: [{
                            required: true,
                            message: '直系亲属联系人手机号码不能为空'
                        }, {
                            len: 11,
                            message: '请输入正确的直系亲属联系人手机号码'
                        }]
                    })}>{label('联系方式')}</InputItem>
                </List>
                <List renderHeader={() => '其他联系人'}>
                    <Picker
                    cols={1}
                    disabled={!editable}
                    data={others}
                    {...getFieldProps('other', {
                        initialValue: other,
                        rules: [{
                            required: true,
                            message: '请选择其他联系人关系'
                        }]
                    })}>
                        <List.Item arrow='horizontal'>{label('关系')}</List.Item>
                    </Picker>
                    <InputItem
                    editable={editable}
                    placeholder='请输入姓名'
                    {...getFieldProps('other_name', {
                        initialValue: other_name,
                        rules: [{
                            required: true,
                            message: '其他联系人姓名不能为空'
                        }]
                    })}>{label('姓名')}</InputItem>
                    <InputItem
                    type='number'
                    editable={editable}
                    placeholder='请输入联系方式'
                    {...getFieldProps('other_mobile', {
                        initialValue: other_mobile,
                        rules: [{
                            required: true,
                            message: '其他联系人手机号码不能为空'
                        }, {
                            len: 11,
                            message: '请输入正确的其他联系人手机号码'
                        }]
                    })}>{label('联系方式')}</InputItem>
                </List>
                <Button
                type='primary'
                // disabled={!lock || disabled || loading}
                loading={loading}
                className={classnames({
                    'button-submit': true,
                    'button-round': true,
                    'button-loading': !loaded,
                    // 'button-disabled': disabled
                })}
                onClick={this.submit.bind(this)}>{buttonText}</Button>
                <div className='security'>银行级数据加密防护</div>
            </div>
        )
    }
};

export default createForm()(Contacts);