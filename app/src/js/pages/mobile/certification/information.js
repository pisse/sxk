/* eslint-disable */
import React, {Component, createClass} from 'react';
import {List, InputItem, Button, Picker, Toast, ImagePicker} from 'antd-mobile';
import {createForm} from 'rc-form';
import Upload from 'rc-upload';
import classnames from 'classnames';
import 'scss/mobile/information.component.scss';
import request from 'common/request';
import {resolveUrl as url, redirect} from 'utils';

const title = '个人信息';
const READY_TEXT = '正在准备数据';
const LOAED_TEXT = '提额至300元';
const COMPLETED_TEXT = '保存';

const upload = {
    name: 'attach',
    action: url('http://credit.xianjincard.com/picture/upload-file'),
    component: 'div',
    withCredentials: true,
    beforeUpload(file){
        console.log(file);
    },
    onError(error){
        Toast.fail('图片上传失败，请重试');
    }
};

const uploadSelfieProps = Object.assign(upload, {
    data: {
        type: 10
    }
});

class Information extends Component{
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
        let {step, loaded, formatPickerData, route, hideSteps} = this.props;
        let {buttonText} = this.state;
        let {router} = this.context;

        step(0);
        // loaded();
        // todo: 离开视图
        // router.setRouteLeaveHook(route, this.routerWillLeave);

        request('credit-card/get-person-info').then(response => {
            let {
                // 姓名
                name,
                // 身份证号码
                id_number,
                // 学历选中
                degrees: education,
                // 学历列表
                degrees_all: educations,
                // 现居地址
                address,
                address_distinct: street,
                // 居住时长选中
                live_period: liveTime,
                // 居住时长列表
                live_time_type_all: liveTimes,
                // 婚姻状况选中
                marriage,
                // 婚姻状况列表
                marriage_all: marriages,
                verify_loan_pass,
                real_verify_status: disabled
            } = response.data.item;
            verify_loan_pass && hideSteps();
            loaded();

            educations && educations.map(formatPickerData);
            marriages && marriages.map(formatPickerData);
            liveTimes && liveTimes.map(formatPickerData);
            buttonText = !!!disabled ? LOAED_TEXT : COMPLETED_TEXT;
            this.setState({
                name,
                id_number,
                education: education ? [education] : null,
                educations,
                address,
                street,
                marriage: marriage ? [marriage] : null,
                marriages,
                liveTime: liveTime ? [liveTime] : null,
                liveTimes,
                disabled,
                buttonText,
                loaded: 1
            });
        });
    }
    upload(name, files, type, index){
        console.log(files);
        this.setState({
            [name] : files
        });
    }
    submit(){
        let {nextStepLink, route, middleware} = this.props;
        let {getFieldInstance, getFieldsValue, validateFields} = this.props.form;
        validateFields({force: false}, (errors, values) => {
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
                let {name, id_number, education, address, street: address_distinct, marriage, liveTime} = getFieldsValue();

                if(lock){
                    this.setState({lock: 0, loaded: 0, loading: 1});

                    let start = Date.now();
                    request.post('credit-card/save-person-info', {
                        name,
                        id_number,
                        degrees: education ? education[0] : null,
                        address,
                        address_distinct,
                        marriage: marriage ? marriage[0] : null,
                        live_time_type: liveTime ? liveTime[0] : null
                    }).then(response => {
                        let end = Date.now();
                        let timeout = 0;
                        if(end - start < 1000) timeout = 1000;
                        if(end - start > 1000) timeout = 0;
                        let {message} = response;
                        setTimeout(() => {
                            Toast.success(message, 1.5, () => {
                                buttonText = COMPLETED_TEXT;
                                setTimeout(() => nextStepLink(route));
                            });
                            this.setState({lock: 1, loaded: 1, loading: 0, disabled: 1, COMPLETED_TEXT});
                        }, timeout);
                    }).catch(middleware.bind(this));
                }
            }
        });
    }
    render(){
        let {form: {getFieldProps, getFieldsError, isFieldsTouched}, label} = this.props;
        let errors = getFieldsError();
        let {
            name,
            selfie = [],
            id_card_front = [],
            id_card_back = [],
            id_number,
            education,
            educations,
            address,
            street,
            marriage,
            marriages,
            liveTime,
            liveTimes,
            buttonText,
            lock,
            loading,
            loaded,
            disabled,
            verify_loan_pass
        } = this.state;
        let editable = !loading && loaded && lock
        return (
            <div className='information'>
                <List>
                    <div className='upload'>
                        <List.Item extra={
                            <div className='selfie'>
                                <Upload {...uploadSelfieProps}/>
                            </div>
                        } arrow='empty'>{label('自拍照')}</List.Item>
                        <List.Item extra={
                            <div className='id_card'>
                                <div className='id_card_front'>
                                    <ImagePicker files={id_card_front} onChange={this.upload.bind(this, 'id_card_front')}/>
                                </div>
                                <div className='id_card_back'>
                                    <ImagePicker files={id_card_back} onChange={this.upload.bind(this, 'id_card_back')}/>
                                </div>
                            </div>
                        } arrow='empty'>{label('身份证')}</List.Item>
                    </div>
                    <InputItem
                    editable={editable}
                    placeholder='姓名'
                    {...getFieldProps('name', {
                        initialValue: name,
                        rules: [{
                            required: true,
                            message: '姓名不能为空'
                        }, {
                            pattern: /[\u4e00-\u9fa5]+/,
                            message: '请输入正确的姓名'
                        }]
                    })}>
                        {label('姓名')}
                    </InputItem>
                    <InputItem
                    clear
                    editable={editable}
                    placeholder='身份证'
                    {...getFieldProps('id_number', {
                        initialValue: id_number,
                        rules: [{
                            required: true,
                            message: '身份证不能为空'
                        }, {
                            min: 15,
                            max: 18,
                            message: '身份证长度错误'
                        }]
                    })}>
                        {label('身份证')}
                    </InputItem>
                    {!verify_loan_pass && (
                        <div>
                            <Picker
                            cols={1}
                            disabled={!editable}
                            data={educations}
                            {...getFieldProps('education', {
                                initialValue: education,
                                rules: [{
                                    required: true,
                                    message: '请选择学历'
                                }]
                            })}>
                                <List.Item arrow='horizontal'>{label('学历')}</List.Item>
                            </Picker>
                            <InputItem
                            editable={editable}
                            placeholder='现居地址'
                            {...getFieldProps('address', {
                                initialValue: address,
                                rules: [{
                                    required: true,
                                    message: '现居地址不能为空'
                                }]
                            })}>
                                {label('现居地址')}
                            </InputItem>
                            <InputItem
                            editable={editable}
                            className='street'
                            placeholder='填写具体街道门牌号'
                            {...getFieldProps('street', {
                                initialValue: street,
                                rules: [{
                                    required: true,
                                    message: '街道门牌号不能为空'
                                }]
                            })}></InputItem>
                            <Picker
                            cols={1}
                            disabled={!editable}
                            data={marriages}
                            {...getFieldProps('marriage', {
                                initialValue: marriage,
                                rules: [{
                                    required: true,
                                    message: '请选择婚姻状况'
                                }]
                            })}>
                                <List.Item arrow='horizontal'>婚姻状况</List.Item>
                            </Picker>
                            <Picker
                            cols={1}
                            disabled={!editable}
                            data={liveTimes}
                            {...getFieldProps('liveTime', {
                                initialValue: liveTime,
                                rules: [{
                                    required: true,
                                    message: '请选择居住时长'
                                }]
                            })}>
                                <List.Item arrow='horizontal'>居住时长</List.Item>
                            </Picker>
                        </div>
                    )}
                    
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

export default createForm()(Information);