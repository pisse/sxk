/* eslint-disable */
import React, {Component, createClass} from 'react';
import {List, InputItem, Button, Picker, Toast} from 'antd-mobile';
import {createForm} from 'rc-form';
import classnames from 'classnames';
import 'scss/mobile/bank.component.scss';
import request from 'common/request';
import {redirect, hrefNative as native, platform} from 'utils';

const title = '个人信息';
const READY_TEXT = '正在准备数据';
const LOAED_TEXT = '提额至700元';
const COMPLETED_TEXT = '保存';

const VERIFY_INIT_TEXT = '获取验证码';
const VERIFY_WAITING_TEXT = '%s秒重新获取';
const VERIFY_RETRY_TEXT = '重新获取';

let timer;
function countdown(number){
    let {verify} = this.state;
    verify.text = VERIFY_WAITING_TEXT.replace(/\%s/, number);
    this.setState({verify});
}

function verifyCode(){
    let {lock, loading, text} = this.state.verify;
    return (
        <Button
        type='primary'
        loading={loading}
        disabled={!lock}
        onClick={this.sendVerifyCode.bind(this)}>{text}</Button>
    );
}

class Bank extends Component{
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }
    state = {
        lock: true,
        // 数据加载完毕
        loaded: false,
        // request loading
        loading: false,
        verify: {
            lock: true,
            loading: false,
            text: VERIFY_INIT_TEXT
        },
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
        step(2);

        request('credit-card/get-bank-card').then(response => {
            let {name, item, list: banks, real_verify_status: disabled, verify_loan_pass} = response.data;
            verify_loan_pass && hideSteps();
            loaded();
            banks && banks.map(formatPickerData);
            buttonText = !!!disabled ? LOAED_TEXT : COMPLETED_TEXT;
            this.setState({
                name,
                bank: item[0],
                banks,
                disabled,
                buttonText,
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
                let {lock, status, buttonText} = this.state;
                let {bank_id, bank_card_number: card_no, phone, code} = getFieldsValue();
                if(lock){
                    this.setState({lock: 0, loaded: 0, loading: 1});

                    let start = Date.now();
                    request.post('credit-card/add-bank-card', {
                        card_no,
                        bank_id: bank_id[0],
                        phone,
                        code
                    }).then(response => {
                        let end = Date.now();
                        let timeout = 0;
                        if(end - start < 1000) timeout = 1000;
                        if(end - start > 1000) timeout = 0;
                        let {message} = response;
                        setTimeout(() => {
                            Toast.success(message, 1.5, () => {
                                buttonText = COMPLETED_TEXT;
                                if(platform.isApp){
                                    native(12);
                                }else{
                                    setTimeout(nextStepLink(route));
                                }
                            });
                            this.setState({lock: 1, loaded: 1, loading: 0, disabled: 1, COMPLETED_TEXT});
                        }, timeout);
                    }).catch(middleware.bind(this));
                    
                }
                
            }
        });
    }
    sendVerifyCode(){
        let count = 5;
        let {verify} = this.state;
        let {getFieldValue, getFieldInstance, getFieldError, isFieldTouched} = this.props.form;

        let phone = getFieldValue('phone');
        let field = getFieldError('phone');
        if((!field && !isFieldTouched('phone')) || (field && field.length)){
            Toast.offline(field ? field.join('') : '银行预留手机号不能为空', 1.5, () => {
                let {refs: element} = getFieldInstance('phone');
                if(element && element.input){
                    element.input.focus();
                }
            });
            return;
        }
        verify.lock = false;
        verify.loading = true;
        this.setState({verify});

        let start = Date.now();
        request.post('credit-card/get-code', {
            phone
        }).then(response => {
            let end = Date.now();
            let timeout = 0;
            if(end - start < 1000) timeout = 1000;
            if(end - start > 1000) timeout = 0;
            setTimeout(() => {
                verify.loading = false;
                this.setState({verify});

                countdown.apply(this, [count]);
                timer = setInterval(() => {
                    countdown.apply(this, [--count]);
                    if(!!!count){
                        timer && clearInterval(timer);
                        verify.lock = 1;
                        verify.text = VERIFY_RETRY_TEXT;
                        this.setState({verify});
                    }
                }, 1000);
            }, timeout);
        });
    }
    render(){
        let {form: {getFieldProps}, label} = this.props;
        let {
            lock,
            loaded,
            loading,
            disabled,
            name,
            bank = {},
            banks,
            buttonText,
            verify
        } = this.state;
        let editable = !loading && loaded && lock && !disabled;
        return (
            <div className='bank'>
                <List renderHeader={() => '请填写银行卡信息'}>
                    <InputItem value={name} editable={false}>{label('持卡人')}</InputItem>
                    <Picker
                    cols={1}
                    disabled={!editable}
                    data={banks}
                    {...getFieldProps('bank_id', {
                        initialValue: bank.bank_id,
                        rules: [{
                            required: true,
                            message: '请选择银行'
                        }]
                    })}>
                        <List.Item arrow='horizontal'>{label('选择银行')}</List.Item>
                    </Picker>
                    <InputItem
                    type='number'
                    editable={editable}
                    placeholder='请输入银行卡号'
                    {...getFieldProps('bank_card_number', {
                        initialValue: bank.card_no,
                        rules: [{
                            required: true,
                            message: '银行卡号不能为空'
                        }, {
                            pattern: /^(\d{16}|\d{19})$/,
                            message: '银行卡号只能16或19位数字'
                        }]
                    })}>{label('银行卡号')}</InputItem>
                    <InputItem
                    type='number'
                    editable={editable && verify.lock}
                    placeholder='请输入银行预留手机号'
                    {...getFieldProps('phone', {
                        initialValue: bank.phone,
                        rules: [{
                            required: true,
                            message: '银行预留手机号不能为空'
                        }, {
                            len: 11,
                            message: '请输入正确的银行预留手机号'
                        }]
                    })}>{label('手机号')}</InputItem>
                    <InputItem
                    className='verify_code'
                    extra={verifyCode.apply(this)}
                    editable={editable}
                    placeholder='请输入验证码'
                    {...getFieldProps('code', {
                        rules: [{
                            required: true,
                            message: '验证码不能为空'
                        }]
                    })}>{label('验证码')}</InputItem>
                </List>
                <Button
                type='primary'
                // disabled={!lock || disabled || loading}
                loading={loading}
                className={classnames({
                    'button-submit': true,
                    'button-round': true,
                    'button-loading': !loaded,
                    'button-disabled': disabled
                })}
                onClick={this.submit.bind(this)}>{buttonText}</Button>
                <div className='security'>银行级数据加密防护</div>
            </div>
        )
    }
};

export default createForm()(Bank);