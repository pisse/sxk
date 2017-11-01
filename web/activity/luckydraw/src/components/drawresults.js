import React, {Component} from 'react';
import {Carousel} from 'antd-mobile';
import {PRIZES, OPERATORS} from 'common/config';

export default class DrawResults extends Component{
    constructor(props){
        super(props);
        this.state = {
            data
        };
    }
    render(){
        return (
            <Carousel className='drawresults' dots={false} swiping={false} easing='easeInQuad' autoplay infinite vertical>
                {
                    data.map((item, index) => (
                        <div className='drawitems' key={index}>
                            恭喜<span>{item.phone}</span>
                            获得<span>{item.prize}</span>
                        </div>
                    ))
                }
            </Carousel>
        )
    }
};

const data = [{
    phone: `158****2131`,
    prize: `爱奇艺会员`
},{
    phone: `156****9482`,
    prize: `抵扣券`
},{
    phone: `158****3941`,
    prize: `永久提额`
},{
    phone: `156****4681`,
    prize: `现金红包`
},{
    phone: `181****1366`,
    prize: `永久提额`
},{
    phone: `181****5343`,
    prize: `抵扣券`
},{
    phone: `182****5636`,
    prize: `现金红包`
},{
    phone: `151****7795`,
    prize: `现金红包`
},{
    phone: `157****7356`,
    prize: `现金红包`
},{
    phone: `173****3798`,
    prize: `永久提额`
},{
    phone: `178****9481`,
    prize: `永久提额`
},{
    phone: `173****3478`,
    prize: `苹果电脑一台`
},{
    phone: `156****8884`,
    prize: `永久提额`
},{
    phone: `156****9553`,
    prize: `现金红包`
},{
    phone: `182****1368`,
    prize: `抵扣券`
},{
    phone: `152****2271`,
    prize: `抵扣券`
},{
    phone: `159****1681`,
    prize: `现金红包`
},{
    phone: `186****5598`,
    prize: `现金红包`
},{
    phone: `178****6721`,
    prize: `现金红包`
},{
    phone: `157****7997`,
    prize: `抵扣券`
},{
    phone: `181****9962`,
    prize: `抵扣券`
},{
    phone: `173****5826`,
    prize: `现金红包`
},{
    phone: `183****1998`,
    prize: `现金红包`
},{
    phone: `183****1724`,
    prize: `现金红包`
},{
    phone: `153****2136`,
    prize: `现金红包`
},{
    phone: `188****7669`,
    prize: `现金红包`
},{
    phone: `152****1315`,
    prize: `抵扣券`
},{
    phone: `153****8539`,
    prize: `现金红包`
},{
    phone: `184****5982`,
    prize: `现金红包`
},{
    phone: `153****2348`,
    prize: `现金红包`
},{
    phone: `184****1965`,
    prize: `现金红包`
},{
    phone: `177****2583`,
    prize: `现金红包`
},{
    phone: `158****1516`,
    prize: `现金红包`
},{
    phone: `178****7927`,
    prize: `现金红包`
},{
    phone: `187****8337`,
    prize: `现金红包`
},{
    phone: `184****3346`,
    prize: `iPhone7 128G`
},{
    phone: `152****4517`,
    prize: `现金红包`
},{
    phone: `173****5891`,
    prize: `现金红包`
},{
    phone: `189****9934`,
    prize: `现金红包`
},{
    phone: `159****3413`,
    prize: `现金红包`
},{
    phone: `156****3169`,
    prize: `现金红包`
},{
    phone: `151****9465`,
    prize: `现金红包`
},{
    phone: `176****6436`,
    prize: `现金红包`
},{
    phone: `185****8138`,
    prize: `现金红包`
},{
    phone: `152****5869`,
    prize: `现金红包`
},{
    phone: `182****7221`,
    prize: `永久提额`
},{
    phone: `178****9256`,
    prize: `现金红包`
},{
    phone: `159****8467`,
    prize: `现金红包`
},{
    phone: `181****8971`,
    prize: `现金红包`
},{
    phone: `187****1752`,
    prize: `永久提额`
},{
    phone: `182****7454`,
    prize: `现金红包`
},{
    phone: `183****6154`,
    prize: `现金红包`
},{
    phone: `156****6353`,
    prize: `永久提额`
},{
    phone: `189****1962`,
    prize: `现金红包`
},{
    phone: `176****3937`,
    prize: `现金红包`
},{
    phone: `189****1699`,
    prize: `现金红包`
},{
    phone: `152****4861`,
    prize: `现金红包`
},{
    phone: `158****2875`,
    prize: `现金红包`
},{
    phone: `155****7667`,
    prize: `现金红包`
},{
    phone: `182****6277`,
    prize: `现金红包`
},{
    phone: `158****2842`,
    prize: `现金红包`
},{
    phone: `177****9843`,
    prize: `现金红包`
},{
    phone: `184****9191`,
    prize: `现金红包`
},{
    phone: `155****5354`,
    prize: `爱奇艺会员`
},{
    phone: `181****7532`,
    prize: `现金红包`
},{
    phone: `185****6831`,
    prize: `现金红包`
},{
    phone: `159****6392`,
    prize: `现金红包`
},{
    phone: `181****3873`,
    prize: `现金红包`
},{
    phone: `176****9931`,
    prize: `现金红包`
},{
    phone: `157****2792`,
    prize: `现金红包`
},{
    phone: `176****2893`,
    prize: `现金红包`
},{
    phone: `182****2447`,
    prize: `现金红包`
},{
    phone: `173****7881`,
    prize: `现金红包`
},{
    phone: `151****6117`,
    prize: `现金红包`
},{
    phone: `177****1788`,
    prize: `现金红包`
},{
    phone: `178****9989`,
    prize: `现金红包`
},{
    phone: `173****9367`,
    prize: `现金红包`
},{
    phone: `156****6387`,
    prize: `现金红包`
},{
    phone: `155****1252`,
    prize: `现金红包`
},{
    phone: `159****1741`,
    prize: `现金红包`
},{
    phone: `151****3992`,
    prize: `现金红包`
},{
    phone: `155****5152`,
    prize: `现金红包`
},{
    phone: `155****2489`,
    prize: `现金红包`
},{
    phone: `153****8154`,
    prize: `现金红包`
},{
    phone: `157****3143`,
    prize: `现金红包`
},{
    phone: `176****2712`,
    prize: `现金红包`
},{
    phone: `152****2886`,
    prize: `现金红包`
},{
    phone: `155****6441`,
    prize: `爱奇艺会员`
},{
    phone: `176****3299`,
    prize: `现金红包`
},{
    phone: `158****2144`,
    prize: `永久提额`
},{
    phone: `182****4679`,
    prize: `现金红包`
},{
    phone: `186****8128`,
    prize: `现金红包`
},{
    phone: `188****2365`,
    prize: `爱奇艺会员`
},{
    phone: `176****5398`,
    prize: `现金红包`
},{
    phone: `178****9342`,
    prize: `现金红包`
},{
    phone: `178****8716`,
    prize: `永久提额`
},{
    phone: `186****1973`,
    prize: `现金红包`
},{
    phone: `176****3564`,
    prize: `iPhone7 128G`
},{
    phone: `182****2924`,
    prize: `现金红包`
},{
    phone: `176****4542`,
    prize: `永久提额`
}];