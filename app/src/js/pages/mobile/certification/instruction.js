/* eslint-disable */
import React, {Component} from 'react';
import {Card, List, Flex, Icon, Slider} from 'antd-mobile';
import classnames from 'classnames';
import 'scss/mobile/instruction.component.scss';
import request from 'common/request';


const title = '分数说明';
const Item = List.Item;
const Brief = Item.Brief;

let marks = {
    0: 0,
    40: 40,
    80: 80,
    120: 120,
    160: 160,
    200: 200
};

export default class Instruction extends Component{
    state = {
        loaded: 0
    }
    constructor(props){
        super(props);
    }
    componentDidMount(){
        document.title = title;
        let {slider} = this.refs;
        if(slider){
            let handle = slider.querySelector('.am-slider-handle');
            let score = document.createElement('span');
                score.innerText = '50分';
                handle.appendChild(score);
        }
        this.setState({
            loaded: 1
        });
    }
    render(){
        let {loaded} = this.state;
        return (
            <div className={classnames({'wrapper wrapper-mobile': true, loaded})}>
                <div className='instruction'>
                    <div className='rank'>
                        <div className='title'>我的分数排名</div>
                        <div className='slider' ref='slider'><Slider max={200} marks={marks} step={1} defaultValue={90} tipFormatter={null}/></div>
                        <div className='exceed'>您的认证分超越了 30% 的小伙伴</div>
                    </div>
                    <List>
                        <Item multipleLine>
                           认证分是什么？<Brief>认证分是根据您在现金卡平台提交的认证资料，对您的信用水平做出的综合评估。</Brief>
                        </Item>
                        <Item multipleLine>
                           获得认证分有什么好处？<Brief>认证分越高，表明您的信用越好，可以享受更多权益。</Brief>
                        </Item>
                        <Item multipleLine>
                           如何获得认证分<Brief>提供的资料越完整，越真实，获得的认证分越高。</Brief>
                        </Item>
                    </List>
                </div>
            </div>
        );
    }
}