/* eslint-disable */
import React, {Component} from 'react';
import {Steps, Modal, Toast} from 'antd-mobile';
import classnames from 'classnames';
import 'scss/mobile/certification-layout.component.scss';
import request from 'common/request';
import {login, redirect, platform} from 'utils';

let steps = [{
    name: 'information',
    title: '个人信息',
    description: '200元',
    link: '/mobile/certification/information'
}, {
    name: 'contacts',
    title: '紧急联系人',
    description: '300元',
    link: '/mobile/certification/contacts'
}, {
    name: 'bank',
    title: '收款银行',
    description: '700元',
    link: '/mobile/certification/bank'
}, {
    name: 'operator',
    title: '手机运营商',
    description: '1000元',
    link: '/mobile/certification/operator'
}];

let Step = Steps.Step;

export default class CertificationLayout extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible: 1,
            current: 0,
            loaded: 0
        };
        request.interceptors.response.use(response => {
            let {code, message} = response;
            if(code == -2){
                Modal.alert('提 示', message, [{
                    text: '确 定',
                    onPress(){
                        login();
                    }
                }])
                return Promise.reject(response);
            }else if([0, -2].indexOf(code) == -1){
                return Promise.reject(response);
            }
            return Promise.resolve(response);
        }, error => {
            return Promise.reject(error);
        });
    }
    componentDidMount(){
        if(platform.isApp){
            this.hideSteps.bind(this)();
        }
    }
    middleware(response){
        let {code, message} = response;
        Toast.hide();
        if([0, -2].indexOf(code) == -1){
            Toast.fail(message, 1.5);
        }
        setTimeout(() => {
            this.setState({lock: 1, loaded: 1, loading: 0});
        });
    }
    step(current = 0){
        this.setState({
            current
        });
    }
    hideSteps(){
        this.setState({visible: 0})
    }
    loaded(){
        this.setState({
            loaded: 1
        });
    }
    label(name){
        if(name && name.length < 4){
            name = name.split('').map(value => {
                return `<span>${value}</span>`;
            }).join('');
        }
        return <p className='label' dangerouslySetInnerHTML={{__html: name}}/>;
    }
    nextStepLink(route){
        let {path} = route;
        let url;
        for(let i = 0;i < steps.length;i++){
            let {name, link} = steps[i];
            let next = steps[i + 1];
            if(name == path && next){
                url = next.link;
                break;
            }
        }
        if(url){
            redirect.replace(url)
        }else if(route.path == 'operator'){
            redirect.push('mobile/loan/1/14/1000');
        }
    }
    formatPickerData(data){
        data.label = data.name || data.bank_name;
        data.value = data.type || data.degrees || data.live_time_type || data.marriage || data.bank_id;
    }
    render(){
        let {visible, current, loaded} = this.state;
        return (
            <div className={classnames({'wrapper wrapper-mobile wrapper-mobile-certification': true, loaded})}>
                {visible ? (
                    <Steps className='am-steps-certification' current={current} direction='horizontal'>
                        {steps.map((step, index) => (
                            <Step key={index} title={step.title} description={step.description}/>
                        ))}
                    </Steps>
                ) : ''}
                {React.cloneElement(this.props.children, {
                    step: this.step.bind(this),
                    loaded: this.loaded.bind(this),
                    label: this.label,
                    formatPickerData: this.formatPickerData,
                    middleware: this.middleware,
                    nextStepLink: this.nextStepLink,
                    hideSteps: this.hideSteps.bind(this)
                })}
            </div>
        );
    }
};
