/* eslint-disable */
import React, {Component} from 'react';
import {Modal, Grid, Carousel} from 'antd-mobile';
import classnames from 'classnames';
import {redirect, login} from 'utils';
import 'scss/mobile/certification.component.scss';
import request from 'common/request';

import Gauge from './gauge';

const title = '认证中心';

export default class Certification extends Component {
    state = {
        loaded: 0
    }
    constructor(props){
        super(props);
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
            }
            return Promise.resolve(response);
        }, error => {
            return Promise.reject(error);
        });
    }
    componentDidMount(){
        document.title = title;
        request('v2/credit-card/get-verification-info').then(response => {
            let {item: {
                header,
                list,
                list_name,
            }, verify_loan_pass: is_basics_verify} = response.data;
            // url format
            list && list.map(data => {
                switch(data.tag){
                    case 1:
                        data.url = '/mobile/certification/information';
                        break;
                    case 3:
                        data.url = '/mobile/certification/contacts';
                        break;
                    case 4:
                        data.url = '/mobile/certification/bank';
                        break;
                    case 5:
                        data.url = '/mobile/certification/operator';
                        break;
                }
            });
            if(!!!is_basics_verify){
                let basics = [1, 3, 4, 5];
                for(let i in list){
                    let {tag: id, url: link, status} = list[i];
                    if(basics.indexOf(id) >= 0 && !!!status && link){
                        redirect.replace(link);
                        break;
                    }
                }
            }else{
                let verifys = [];
                for(let i in list_name){
                    let data = list_name[i];
                    let children = [];
                    list && list.map(data => {
                        i == data.type && children.push(data);
                    });
                    verifys.push({
                        label: data.title,
                        children
                    })
                }
                this.setState({
                    header,
                    verifys,
                    is_basics_verify,
                    loaded: 1
                });
                setTimeout(() => {
                    let {verify_score: data} = header;
                    let gauge = new Gauge({
                        element: this.refs.credit,
                        value: 0,
                        value_max: data.max
                    });
                    gauge.render();
                    setTimeout(() => {
                        gauge.update(data.score);
                    }, 500);
                });
            }
        }).catch(response => response);
        
    }
    render(){
        let {wrapper = {clientWidth: 0}} = this.refs;
        let {header = {}, verifys, loaded} = this.state;
        let item = (data, index) => {
            let {title: text, data: value, logo: icon, url: link, status} = data;
            let style = {
                height: wrapper.clientWidth / 4
            };
            let click = () => {
                if(!!!link) return;
                if(/^(https?|\/\/)/.test(link)){
                    window.location.href = link;
                }else{
                    redirect.push(link);
                }
            };
            return (
                <div className={classnames({
                    'am-grid-item-contain': true,
                    active: !!status
                })} style={style} onClick={click}>
                    <div className='am-grid-icon' style={{backgroundImage: `url(${icon})`}}></div>
                    <div className='am-grid-text'>{text}</div>
                    {value && (<div className='corner-mark'>
                        <span>{value}</span>
                    </div>)}
                </div>
            );
        };
        return (
            <div ref='wrapper' className={classnames({'wrapper wrapper-mobile': true, loaded})}>
                <div className='authentication'>
                    <div className='header'>
                        <div className='instruction' onClick={() => {
                            redirect.push('/mobile/certification/instruction');
                        }}>分数说明</div>
                        <div className='tips'>{header.title}</div>
                        <Carousel>
                            <div className='credit'>
                                <canvas ref='credit' data-value='60' data-max-value='120'/>
                            </div>
                            <div className='credit-line'>
                                <div>
                                    <p>{header.data}</p>
                                    <span>我的额度</span>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    {verifys && verifys.map((verify, index) => (
                        <div key={index} className='verifys'>
                            <div className='title' dangerouslySetInnerHTML={{__html: verify.label}}></div>
                            {verify.children && <Grid data={verify.children} renderItem={item}/>}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
};