/* eslint-disable */
import React, {Component, createClass} from 'react';
import {List, InputItem, Button, Picker, Toast, Checkbox} from 'antd-mobile';
import {createForm} from 'rc-form';
import classnames from 'classnames';
import 'scss/mobile/operators.component.scss';
import request from 'common/request';
import {resolveUrl as url, redirect, hrefNative as native, platform} from 'utils';

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

const title = '手机运营商';
const READY_TEXT = '正在准备数据';
const LOAED_TEXT = '立刻激活额度';
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

class Operator extends Component{
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }
    state = {
        lock: true,
        // 数据加载完毕
        loaded: false,
        // request loading
        loading: false,
        agree: 1,
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
        try{
            document.domain = 'xianjincard.com';
        }catch(e){};
        let {step, loaded, formatPickerData, middleware, nextStepLink, hideSteps, route} = this.props;
        let {buttonText} = this.state;
        let {router} = this.context;
        let {operator} = this.refs;
        step(3);
        window.operatorSuccess = () => {
            alert('success');
            if(platform.isApp){
                native(12);
            }else{
                setTimeout(nextStepLink(route));
            }
        }
        {
            let step = document.body.querySelector('.am-steps');
            let stepHeight = step.scrollHeight + step.style.marginTop + step.style.marginBottom
            operator.width = document.body.scrollWidth;
            operator.height = document.body.scrollHeight - stepHeight;
        }

        request('credit-card/get-jxk-verify-info').then(response => {
            let {status, phone, disabled, verify_loan_pass} = response.data;
            verify_loan_pass && hideSteps();
            loaded();
            buttonText = !!!disabled ? LOAED_TEXT : COMPLETED_TEXT;
            this.setState({
                phone,
                status,
                disabled,
                buttonText,
                loaded: 1
            });
        }).catch(middleware.bind(this));
    }
    submit(){
        let {nextStepLink, route} = this.props;
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
                let {service_password} = getFieldsValue();
                if(lock){
                    this.setState({lock: 0, loaded: 0, loading: 1});
                    let start = Date.now();
                    request.post('credit-info/post-service-code', {
                        p: service_password
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
                            this.setState({lock: 1, loaded: 1, loading: 0, disabled: 1, COMPLETED_TEXT});
                        }, timeout);
                    });
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
            phone,
            status,
            agree,
            buttonText,
            verify
        } = this.state;
        let editable = !loading && loaded && lock;
        return (
            <div className='operator'>
                <iframe ref='operator' src={url('http://credit.xianjincard.com/credit-web/verification-jxl')}/>
                
            </div>
        )
    }
};

export default createForm()(Operator);