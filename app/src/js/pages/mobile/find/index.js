/* eslint-disable */
import React, {Component} from 'react';
import {Card, List, Flex, Icon, Carousel} from 'antd-mobile';
import classnames from 'classnames';
import 'scss/mobile/find.component.scss';
import request from 'common/request';

const title = '发现';
const subject = (options) => {
    let {title, subtitle, extra = '更多', link} = options;
    let click = () => {
        typeof link === 'function' && link();
        /^(https?|\/\/)/.test(link) && (window.location.href = link);
    };
    return (
        <List className='subject'>
            <List.Item extra={extra} arrow='horizontal' onClick={click}>
                {title}
                {subtitle && (<span>{subtitle}</span>)}
            </List.Item>
        </List>
    );
};
// {interestType == 0 ? '年' : interestType == 1 ? '月' : interestType == 2 ? '日' : '/'}
export default class Find extends Component {
    state = {
        initialHeight: 200,
        loaded: 0
    }
    constructor(props){
        super(props);
    }
    componentDidMount(){
        document.title = title;
        request('notice/discovery-channel').then(response => {
            let {item: guides, personal: entries, card: cards, channel: channels, article: articles, carousel: carousels} = response.data;
            setTimeout(() => {
                this.setState({
                    guides,
                    entries,
                    carousels,
                    cards,
                    channels,
                    articles,
                    loaded: 1
                })
            })
        });
    }
    render(){
        let {guides, entries, cards, channels, carousels, articles, loaded} = this.state;
        let Guide = (guide, index) => {
            let {button: text, url, img} = guide;
            let click = () => {
                url && (window.location.href = url);
            };
            return (
                <Flex.Item key={index} onClick={click}>
                    <div>
                        <div className='icon' style={{backgroundImage: 'url(' + img + ')'}}/>
                        <p>{text}</p>
                    </div>
                </Flex.Item>
            );
        };
        let Entrie = (entrie, index) => {
            let {button: text, content, url, img} = entrie;
            let click = () => {
                url && (window.location.href = url);
            };
            return (
                <Flex.Item key={index} onClick={click}>
                    <div>
                        <p>{text}</p>
                        <span>{content}</span>
                    </div>
                    <div className='icon' style={{backgroundImage: 'url(' + img + ')'}}/>
                </Flex.Item>
            );
        };
        const carouselStyle = this.state.initialHeight ? {height: this.state.initialHeight} : {};
        return (
            <div className={classnames({'wrapper wrapper-mobile': true, loaded})}>
                {guides && <Flex className='guides'>{guides.map(Guide)}</Flex>}
                {entries && <Flex className='entries'>{entries.map(Entrie)}</Flex>}
                {carousels && (
                    <div className='activitys'>
                        <Carousel selectedIndex={1} autoplay={true} infinite>
                            {carousels.map((data, index) => (
                                <a key={index} href={data.url} style={carouselStyle}>
                                    {data.title && (<h6>{data.title}</h6>)}
                                    <img src={data.carousel} onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({
                                            initialHeight: null,
                                        });
                                    }}/>
                                </a>
                            ))}
                        </Carousel>
                    </div>
                )}
                {(channels && channels.data) && (
                    <div>
                        {subject({
                            title: channels.header.title,
                            subtitle: channels.header.content,
                            link: channels.header.moreUrl
                        })}
                        {channels.data && (
                            <List className='diversion'>
                                {channels.data.map((data, index) => (
                                    <List.Item key={index} thumb={data.img_url} arrow='horizontal' onClick={() => {
                                        data.href && (window.location.href = data.href);
                                    }}>
                                        {data.title}
                                        <div className='description'>
                                            <List.Item.Brief>{data.sub_title}</List.Item.Brief>
                                        </div>
                                        <div className='params'>
                                            <List.Item.Brief>
                                                <p>
                                                    参考{data.interest_type == 0 ? '年' : data.interest_type == 1 ? '月' : data.interest_type == 2 ? '日' : '/'}利率：
                                                    <span>{data.loan_apr}</span>
                                                </p>
                                                <p>
                                                    最高额度：
                                                    <span>{data.max_amount}</span>
                                                </p>
                                            </List.Item.Brief>
                                        </div>
                                    </List.Item>
                                ))}
                            </List>
                        )}
                    </div>
                )}

                {(cards && cards.data) && (
                    <div className='banks'>
                        {subject({
                            title: cards.header.title,
                            subtitle: cards.header.content,
                            link: cards.header.moreUrl
                        })}
                        {cards.data.map((data, index) => (
                            <Card key={index} full>
                                <Card.Header title={data.title}/>
                                <Card.Body>
                                    <div className='am-card-thumb' style={{backgroundImage: 'url(' + data.img + ')'}}/>
                                    <div className='details'>
                                        <p>取现额度: 信用额度的50%</p>
                                        <p>免息期: {data.free}</p>
                                        <p>发卡组织: {data.organization}</p>
                                        <div className='button-apply' onClick={() => {
                                            data.url && (window.location.href = data.url);
                                        }}>立即申请</div>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                )}
                {(articles && false) && (
                    <List className='articles'>
                        {articles.map((data, index) => (
                            <List.Item key={index} thumb={data.img_url}>
                                <h6>{data.title}</h6>
                                <List.Item.Brief>
                                    <div className='preview'>+{data.see}</div>
                                </List.Item.Brief>
                            </List.Item>
                        ))}
                    </List>
                )}
            </div>
        )
    }
};