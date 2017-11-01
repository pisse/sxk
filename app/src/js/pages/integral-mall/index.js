import React, {Component} from 'react';
import {Carousel, ListView, Toast} from 'antd-mobile';
import {login, share} from 'utils';
import request from './request';
import 'scss/integral-mall/index.component.scss';

let title = '金币商城';
let page = 1;
let size = 15;
let lock = true;

export default class CashBonus extends Component{
    constructor(props){
        super(props);
        let data = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.data = {};
        this.state = {
            gallerys: [],
            dataSource: data.cloneWithRows({}),
            loading: 1,
            loaded: 0,
            empty: 0
        };
    }
    componentDidMount(){
        document.title = title;
        let {dataSource, loading, loaded} = this.state;
        Toast.loading(undefined, 0);
        request(`credit-gold/goods-list`).then(response => {
            Toast.hide();
            let {coupon: items} = response.data;
            let data = {};
            if(!items.length){
                this.setState({
                    empty: 1,
                    loaded: 1
                });
                return;
            }
            items.map((item, index) => {
                let ii = page * items.length + index;
                data[ii] = item;
            });
            items.length < size && (loading = 0);
            this.data = {...this.data, ...data};
            page++;
            this.setState({
                gallerys: [{
                    image: require('../../../assets/img/integral-mall/upload/1.png'),
                    link: ''
                }],
                dataSource: dataSource.cloneWithRows(this.data),
                loading,
                loaded: 1
            });
        }).catch(this.middleware.bind(this));
    }
    middleware(response){
        let {code, message} = response;
        let type = 'info';

        Toast.hide();
        if([-1000, -1004].indexOf(code) >= 0){
            type = 'fail';
        }else if([-1003].indexOf(code) >= 0){
            type = 'offline';
        }else if(-1001 === code){
            login();
            return;
        }
        this.setState({
            loaded: 1
        });
        Toast[type](message, 1.5);
        setTimeout(() => {
            lock = !lock;
        }, 1500);
    }
    onEndReached(){
        let {loading, dataSource} = this.state;
        // if(lock && loading){
        //     lock = !lock;
        //     request(`credit-gold/goods-list?page=${page}`).then(response => {
        //         let {coupon: items} = response.data;
        //         let data = {};
        //         if(!items.length){
        //             this.setState({
        //                 loading: 0
        //             });
        //             return;
        //         }
        //         items.map((item, index) => {
        //             let ii = page * items.length + index;
        //             data[ii] = item;
        //         });
        //         this.data = {...this.data, ...data};
        //         this.setState({
        //             money,
        //             dataSource: dataSource.cloneWithRows(this.data),
        //         });
        //         page++;
        //         lock = !lock;
        //     }).catch(this.middleware.bind(this));
        // }
    }
    detailed(id = 0){
        // if(!id) return;
        window.location.href = `integral-mall/details?id=${id}`;
    }
    render(){
        let {gallerys, dataSource, loading, loaded, empty} = this.state;
        let row = data => {
            let {id, name, price, default_img: image, status} = data;
            let style = image ? {
                backgroundImage: `url(${image})`
            } : {}
            return (
                <li>
                    <div className='card' onClick={this.detailed.bind(this, id)}>
                        <div className='cover' style={style}/>
                        <div className='details'>
                            <h5>{name}</h5>
                            <p>
                                <span className='active'>{price}金币</span>
                                <span className={`${status ? 'active' : ''}`}>
                                    {status ? '抢购中' : '已抢完'}
                                </span>
                            </p>
                        </div>
                    </div>
                </li>
            );
        };
        return (
            <div className={`wrapper wrapper-integral-mall ${loaded ? 'loaded' : ''}`}>
                {
                    gallerys.length === 1 && (
                        <div className='carousel'>
                            {
                                gallerys.map((gallery, index) => (
                                    <a key={index} className='slider-link' href='javascript:;'>
                                        <img src={gallery.image}/>
                                    </a>
                                ))
                            }
                        </div>
                    )
                }
                {
                    gallerys.length > 1 && (
                        <Carousel
                        className='carousel'
                        autoplay={true}
                        infinite>
                            {
                                gallerys.map((gallery, index) => (
                                    <a key={index} className='slider-link' href='javascript:;'>
                                        <img src={gallery.image}/>
                                    </a>
                                ))
                            }
                        </Carousel>
                    )
                }
                <div className='title'>优惠券兑换</div>
                <div className={`content ${loaded ? 'loaded': ''}`}>
                    {!empty ? <ListView
                    dataSource={dataSource}
                    renderFooter={() => <div style={{padding: 30, textAlign: 'center'}}>
                        {loading ? '加载中...' : ''}
                    </div>}
                    pageSize={10}
                    renderRow={row}
                    scrollRenderAheadDistance={333}
                    scrollEventThrottle={100}
                    onEndReached={this.onEndReached.bind(this)}
                    onEndReachedThreshold={100}
                    renderBodyComponent={() => <ul/>}
                    /> : <div className='empty'>暂无数据</div>}
                </div>
            </div>
        );
    }
};