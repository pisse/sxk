import React, {Component} from 'react';
import {Flex} from 'antd-mobile';
import {PRIZES} from 'common/config';

export default class Prizes extends Component{
    render(){
        return (
            <div className='prizes'>
                <Flex>
                    {
                        PRIZES.map((prize, index) => (
                            <Flex.Item key={index} className='prize'>
                                <div className='picture' style={{backgroundImage: `url(${prize.image})`}}/>
                                <span dangerouslySetInnerHTML={{__html: prize.name}}></span>
                            </Flex.Item>
                        ))
                    }
                </Flex>
            </div>
        )
    }
};