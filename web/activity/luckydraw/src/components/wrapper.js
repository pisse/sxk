import React, {Component} from 'react';
import {Carousel, Modal, Flex} from 'antd-mobile';
import {PRIZES, MOCKS} from 'common/config';
// import DrawResults from 'components/drawresults';
import request from 'common/request';

const alert = Modal.alert;

export default class Wrapper extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            used: 0,
            visible: {
                participateRules: 0,
                panel1: 0,
                panel2: 0,
                message: 0,
                record: 0,
                login: 0
            },
            drawin: 0,
            message: undefined,
            record: []
        };
        this.onShow = (name) => {
            let state = {visible: {}};
                state.visible[name] = 1;
            this.setState(state);
        };
        this.onClose = (name) => {
            let state = {visible: {}};
                state.visible[name] = 0;
            this.setState(state);
        };
        let lock = true;
        let callback = undefined;
        this.start = () => {
            if(lock && this.state.drawin === 0){
                lock = !lock;
                request(`http://credit.xianjincard.com/credit-info/get-spring-festival`)
                .then(response => response.json())
                .then(response => {
                    lock = !lock;
                    if(response.code === -2){
                        this.login(response.message);
                        return;
                    }
                    if(response.code === 0){
                        this.setState({
                            drawin: 1,
                            count: +response.also || 0,
                            used: +response.use || 0
                        });
                        setTimeout(() => {
                            let message = (<p dangerouslySetInnerHTML={{__html: response.message.replace(/\\n/, `<br/>`)}}/>);
                            this.message(message);
                            callback = () => {
                                this.setState({
                                    drawin: 0
                                });
                            };
                        }, 400);
                    }else{
                        this.message(response.message);
                        
                    }
                }).catch(response => {
                    this.message(response.message);
                });;
            }
        };
        this.message = (message) => {
            this.setState({
                visible: {
                    message: 1
                },
                message
            });
        };
        this.onMessage = () => {
            this.onMessageClose();
            callback && callback.apply(undefined);
            callback = undefined;
        };
        this.onMessageClose = () => {
            let state = {visible: {message: 0}};
            this.state.drawin && (state.drawin = 0);
            this.setState(state);
        };
        let recordLock = true;
        this.onRecord = () => {
            if(recordLock){
                recordLock = false;
                request(`http://credit.xianjincard.com/credit-info/select-spring-festival`)
                .then(response => response.json())
                .then(response => {
                    recordLock = true;
                    if(response.code === -2){
                        this.login(response.message);
                        return;
                    }
                    if(response.code === 0){
                        if(response.data[0].length){
                            this.setState({
                                visible: {
                                    record: 1
                                },
                                record: response.data[0]
                            });
                        }else{
                            this.message(`请点击金蛋，砸开你的新年好运！`);
                        }
                    }else{
                        this.message(response.message);
                    }
                }).catch(response => {
                    this.message(response.message);
                });;
            }
        };
        this.login = (message) => {
            this.setState({
                visible: {
                    login: 1
                },
                message
            });
        };
        this.onLogin = () => {
            if(navigator.userAgent.indexOf('kdxj') >= 0){
                window.location.href = `koudaikj://app.launch/login/applogin`;
            } else {
                window.location.href =`http://credit.xianjincard.com/credit-web/open-app`;
            }
            this.onClose('login');
        };
    }
    componentWillMount(){
        request(`http://credit.xianjincard.com/credit-info/spring-festival`)
        .then(response => response.json())
        .then(response => {
            if(response.code === 0){
                this.setState({
                    count: +response.message || 0,
                    used: +response.use || 0
                });
            }else{
                this.message(response.message);
            }
        }).catch(response => {
            this.message(response.message);
        });
    }
    render(){
        return (
            <div className='wrapper'>
                <div className='main'>
                    <div className='participate-rules-button' onClick={this.onShow.bind(this, `participateRules`)}></div>
                    <div className='title'></div>
                    <Flex justify='center' className='participate-date'>
                        <span>活动时间:2017.1.18-1.27</span>
                    </Flex>
                    <Carousel className='drawresults' autoplayInterval={3000} dots={false} swiping={false} easing='easeInQuad' autoplay infinite vertical>
                        {
                            MOCKS.map((data, index) => (
                                <div className='drawitems' key={index}>
                                    恭喜<span>{data.phone}</span>
                                    获得<span>{data.prize}</span>
                                </div>
                            ))
                        }
                    </Carousel>
                    <Flex justify='center' className='surplus-number'>
                        客官，您累计共有<span>{this.state.count}</span>次机会，已砸<span>{this.state.used}</span>次
                    </Flex>
                    {
                        // <Flex justify='center' className='surplus-number'>
                        //     客官，您今天还能砸<span>{this.state.count}个金蛋</span>
                        // </Flex>
                    }
                    <div className={`egg-wrapper ${this.state.drawin ? 'active' : ''}`} onClick={this.start}>
                        {this.state.drawin ? (
                            <div>
                            <div className='egg-crack'></div>
                            <div className='ornament'></div>
                            <div className='hammer-after'></div>
                            </div>
                        ) : (
                            <div>
                            <div className='egg'></div>
                            <div className='hammer'></div>
                            </div>
                        )}
                    </div>
                    <Flex className='prizes' align='top'>
                        {
                            PRIZES.map((prize, index) => (
                                <Flex.Item key={index} className={'prize prize-' + prize.id}>
                                    <div className={`picture picture-${prize.id}`}/>
                                    <span dangerouslySetInnerHTML={{__html: prize.name}}></span>
                                </Flex.Item>
                            ))
                        }
                    </Flex>
                    <div className='record' onClick={this.onRecord}>我的中奖记录</div>
                </div>
                <div className='panels'>
                    <div className='panel panel-1'>
                        <div className='date'>活动时间: 2017.01.21 - 01.27</div>
                        <div className='title'></div>
                        <div className='description'>
                            <p>续期不担心</p>
                            <p>时长加倍费用更省</p>
                        </div>
                        <div className='details' onClick={this.onShow.bind(this, `panel1`)}>查看详情</div>
                        <div className='picture'/>
                    </div>
                    <div className='panel panel-2'>
                        <div className='date'>活动时间: 2017.01.21 - 02.03</div>
                        <div className='title'></div>
                        <div className='description'>
                            <p>人性化平台</p>
                            <p>一年365天都能借款</p>
                        </div>
                        <div className='details' onClick={this.onShow.bind(this, `panel2`)}>查看详情</div>
                        <div className='picture'/>
                    </div>
                    <div className='panel panel-3'>
                        <div className='date'>活动时间: 2017.01.16 - 02.16</div>
                        <div className='title'></div>
                        <div className='description'>
                            <p>慢就赔 拒就赔</p>
                            <p>最高赔付100元</p>
                        </div>
                        <a className='details' href='http://h5.xianjincard.com/activity/compensate/index.html'>查看详情</a>
                        <div className='picture'/>
                    </div>
                </div>
                <Modal
                className='modal-primary'
                title='参与规则'
                transparent
                onClose={this.onClose.bind(this, `participateRules`)}
                visible={this.state.visible.participateRules}>
                    <div className='modal-primary-egg'></div>
                    <div className='modal-primary-content'>
                        <ul>
                            <h5>如何获取砸金蛋机会：</h5>
                            <li>活动期间，每人第一次登录有一次砸金蛋机会</li>
                            <li>个人申请借款即有一次砸金蛋机会</li>
                            <li>邀请好友首次申请借款或放款成功即有一次砸金蛋机会</li>
                            <li>机会可以累加，活动结束剩余机会作废</li>
                        </ul>
                        <ul>
                            <h5>如何领取奖励：</h5>
                            <li>抵扣券奖励于获奖后24小时内发放，请至“我的”-“我的优惠”中查看领取，所有券有效期25天</li>
                            <li>免费体检券请关注微信公众号“shanzhenhealth”，点击进入“善诊”选择体检套餐，点“立即下单”，在“输入善诊口令”处输入「现金卡送健康」；即可免费领取，预约截止至2017年1月31日，体检截止日期2017年2月28日</li>
                            <li>获得实物奖的用户，活动结束后3个工作日内客服人员将与您联系，确认发放方式</li>
                        </ul>
                        <p className='right-to-interpret'>本活动最终解释权归现金卡所有，与苹果公司无关</p>
                    </div>
                </Modal>
                <Modal
                className='modal-primary'
                title='参与规则'
                transparent
                maskClosable={true}
                onClose={this.onClose.bind(this, `panel1`)}
                visible={this.state.visible.panel1}>
                    <div className='modal-primary-content'>
                        <ul>
                            <li>时长加倍：活动期间可一次续期14天</li>
                            <li>费用更省：过去续期14天需要收两次的服务费，现在只收取一次，相当于打5折</li>
                            <li>具体操作：打开“我的”-“借款记录”-“借款详情”-点击申请续期</li>
                        </ul>
                    </div>
                </Modal>
                <Modal
                className='modal-primary'
                title='参与规则'
                transparent
                maskClosable={true}
                onClose={this.onClose.bind(this, `panel2`)}
                visible={this.state.visible.panel2}>
                    <div className='modal-primary-content'>
                        <ul>
                            <li>春节假期期间可24小时正常申请借款</li>
                            <li>因银行放假，故节日放款可能出现延迟，望用户周知</li>
                        </ul>
                    </div>
                </Modal>
                <Modal
                className='modal-primary modal-primary-message'
                title={this.state.message}
                transparent
                maskClosable={true}
                onClose={this.onMessageClose}
                visible={this.state.visible.message}>
                    <div className='modal-primary-egg'></div>
                    <a onClick={this.onMessage} className='am-modal-button'>朕知道了</a>
                </Modal>
                <Modal
                className='modal-primary'
                title='我的中奖记录'
                transparent
                maskClosable={true}
                onClose={this.onClose.bind(this, `record`)}
                visible={this.state.visible.record}>
                    <div className='modal-primary-content'>
                        <div className='modal-primary-record'>
                        {this.state.record.map((data, index) => (
                            <div key={index}>
                                <span>{data.time}</span>
                                <span>{data.title}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                </Modal>
                <Modal
                className='modal-primary modal-primary-message'
                title={this.state.message}
                transparent
                maskClosable={true}
                onClose={this.onClose.bind(this, `login`)}
                visible={this.state.visible.login}>
                    <div className='modal-primary-egg'></div>
                    <a onClick={this.onLogin} className='am-modal-button'>马上登录</a>
                </Modal>
            </div>
        )
    }
};
