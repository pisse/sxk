import React from 'react'
import ReactDOM from 'react-dom'
import {Modal, Icon, RefreshControl, ListView, Carousel, Button} from 'antd-mobile'
import {get, post, redirect, login, resolveUrl} from 'utils'
import Toast from 'components/Toast'
import Slider from '../components/Slider'
import 'scss/mobile/loan.home.component.scss'

const alert = Modal.alert
const currency = function (value, bit = 2) {
  return value.toFixed(bit).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
}
export default class Loan extends React.Component {
  constructor (props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })

    this.data = {
      is_login: 0,
      item: {
        card: [{
          card_type: 1,
          card_validity: '',
          card_verify_step: '',
          card_title: '',
          card_subtitle: '',
          card_amount: 0,
          amount_days: {
            amount_text: '',
            amounts: [0],
            days: [0],
            interests: [0],
            interests_text: ''
          }
        }]
      },
      user_loan_log_list: ['尾号5552成功借款500元，申请至放款耗时15分钟']
    }
    this.state = {
      dataSource: dataSource.cloneWithRows([this.data]),
      refreshing: false,
      amount: 0,
      dayIndex: 0,
      cardIndex: 0,
      fee: null
    }
  }
  componentDidMount () {
    document.title = '现金卡'
    this.setState({refreshing: true})
    // this.fetchData()
    // console.log(ReactDOM.findDOMNode(this))
  }
  fetchData () {
    get('http://credit.xianjincard.com/credit-app/multi-index').then((result) => {
      if (result.data.code !== 0) {
        Toast.info(result.data.message, 2)
        return
      }

      this.data = result.data.data
      // let card = JSON.parse(JSON.stringify(data.item.card[0]))
      // card.card_title = '现金白卡'
      // card.card_type = 1
      // card.amount_days.days = [7, 14]
      // card.amount_days.interests = ['9000', '12000']
      // this.data.item.card.push(card)

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows([this.data]),
        refreshing: false
      })
    })
  }
  fetchFee () {
    const card = this.data.item.card[this.state.cardIndex]
    const max = card.amount_days.amounts[card.amount_days.amounts.length - 1] / 100
    const params = {
      money: this.state.amount || max,
      period: card.amount_days.days[this.state.dayIndex],
      card_type: card.card_type
    }
    console.log(params)
    post('http://credit.xianjincard.com/credit-app/credit-fee-detail', params).then((result) => {
      console.log(result)
      if (result.data.code !== 0) {
        Toast.info(result.data.message, 2)
        return
      }
      this.setState({fee: result.data.data})
    })
  }
  onRefresh () {
    this.setState({refreshing: true})
    this.fetchData()
  }
  selected (index) {
    this.setState({cardIndex: index})
  }
  onChange (value) {
    this.setState({amount: value})
  }
  onClick (i) {
    this.setState({dayIndex: i})
  }
  info () {
   // alert('提 示', this.data.item.card_open_tip, [{text: '确 定'}])
    this.fetchFee()
  }
  closeFee () {
    this.setState({fee: null})
  }
  createLoan (data) {
    if (this.data.is_login !== 1) {
      alert('登录', '你还没有登录，请先登录', [
        { text: '确 定', onPress: () => login() }
      ])
      return
    }
    if (data.verify_loan_pass !== 1) {
      redirect.push('/mobile/certification')
      return
    }
    const max = data.amount_days.amounts[data.amount_days.amounts.length - 1] / 100
    redirect.push(`/mobile/loan/${data.card_type}/${data.amount_days.days[this.state.dayIndex]}/${this.state.amount || max}`)
    // redirect.push({pathname: `/mobile/loan/${data.card_type}/${data.amount_days.days[this.state.dayIndex]}/${this.state.amount || max}`, query: {...data}})
    // console.log(this.data)
    // this.confirmLoan({card_type: data.card_type, period: data.amount_days.days[this.state.dayIndex], money: (this.state.amount || max)})
  }
  confirmLoan (params) {
    Toast.loading('加载中...')
    post('http://credit.xianjincard.com/credit-loan/get-confirm-loan', params).then((result) => {
      Toast.hide()
      // 不能再借
      if (result.data.code === -1) {
        alert('提示', result.data.message, [{text: '确 定'}])
        return
      }
      if (result.data.code !== 0) {
        Toast.info(result.data.message, 2)
        return
      }
      redirect.push(`/mobile/loan/${params.card_type}/${params.period}/${params.money}`)
    })
  }
  createSlider (data) {
    const mix = parseInt(data.amounts[0] / 100)
    const max = parseInt(data.amounts[data.amounts.length - 1] / 100)
    return (
      <div>
        <Slider orientation="horizontal" onChange={this.onChange.bind(this)} defaultValue={max} step={100} min={mix} max={max} withBars={true}/>
        <p class="slider-range"><span>{mix}元</span><span>{max}元</span></p>
      </div>
    )
  }
  create (result) {
    const data = result.amount_days
    const max = parseInt(data.amounts[data.amounts.length - 1]) / 100
    const interest = data.interests[this.state.dayIndex] / 100 / max
    const cost = ((this.state.amount || max) * interest)
    const button = data.days.map((v, i) => <Button class={this.state.dayIndex === i && 'active'} key={i} onClick={this.onClick.bind(this, i)} type="primary">{v}天</Button>)
    return (
      <div class="content">
        {data.amounts.length > 1 && this.createSlider(data)}
        <div class="day"><span>{button}</span><span>借款时间</span></div>
        <p><span>到帐金额</span><span class="amount">{data.amount_text || currency((this.state.amount || max) - cost)}</span></p>
        <p><span onClick={this.info.bind(this)}>综合费用<i>!</i></span><span class="amount">{data.interests_text || currency(cost)}</span></p>
        <Button onClick={this.createLoan.bind(this, result)} class="btn" type="primary">马上申请</Button>
      </div>
    )
  }
  repayment (data) {
    return (
      <div class="content repayment">
        <h3>{data.span_repayment_money}</h3>
        <h1>{data.repayment_money}</h1>
        <div>
          <p><span>{data.span_fee_time}</span><span>{data.plan_fee_time}</span></p>
          <p><span>{data.span_loan_amount}</span><span>{data.loan_amount}</span></p>
          <p><span>{data.span_order_time}</span><span>{data.order_time}</span></p>
          <a href={data.loan_detail_url}>我要还款</a>
        </div>
      </div>
    )
  }
  steps (data) {
    return (
      <div class="repayment-list">
        <ul>
          {data.lists.map((v, i) => <li key={i} class={i === 0 && 'do'}><h1>{v.title}</h1><p>{v.body}</p></li>)}
      </ul>
        </div>
    )
  }
  card (card, i) {
    return (
      <div key={i} class={card.card_type === 2 ? 'wrap gold-card' : 'wrap'}>
        <h1>{card.card_title}</h1>
        <div class="credit">
          <p class="title">{card.card_subtitle}</p>
          <h2>{card.card_title}</h2>
          <p class="quota">信用额度 (元)</p>
          <div class="number"><img alt="" src={`/assets/img/mobile/loan/card-heart-${card.card_type}.png`}/><h3 class={card.amount_title && 'amount-title'}>{card.amount_title || card.card_amount / 100}</h3></div>
          <p class="credit-number">{card.card_no}</p>
          <div class="info"><a href={card.amount_sub_url || resolveUrl('http://h5.xianjincard.com/mobile/index.html#/login?redirect_url=' + encodeURIComponent(location.href))}>{card.amount_sub_title}</a><span>{card.card_validity}</span></div>
        </div>
      </div>
    )
  }
  createFee (fee) {
    return (
      <div class="popup-fee" onClick={this.closeFee.bind(this)}>
        <div class="fee">
          <h2>{fee.title}</h2>
          <ul>
            {fee.item.map((v, i) => <li key={i}><span>{v.text}</span><span>{v.fee}</span></li>)}
            <li><span>{fee.total.text}</span><span>{fee.total.fee}</span></li>
          </ul>
          <Button class="btn" onClick={this.closeFee.bind(this)}>{fee.button}</Button>
          <p>{fee.tip}</p>
        </div>
      </div>
    )
  }
  render () {
    const row = (rowData, sectionID, rowID) => {
      return (
        <div class="loan-home" key={rowID}>
          <Carousel dots={rowData.item.card.length > 1} autoplay={false} selectedIndex={0} afterChange={this.selected.bind(this)}>
            {rowData.item.card.map((v, i) => this.card(v, i))}
          </Carousel>
          <Carousel className="carousel" dots={false} dragging={false} swiping={false} autoplay infinite vertical >
            {rowData.user_loan_log_list.length > 0 && rowData.user_loan_log_list.map((v, i) => {
              return <div key={i}>{v}</div>
            })}
          </Carousel>
          {!rowData.item.card[this.state.cardIndex]['repayment_infos'] && !rowData.item.card[this.state.cardIndex]['loan_infos'] && rowData.item.card[this.state.cardIndex] && this.create(rowData.item.card[this.state.cardIndex])}
          {rowData.item.card[this.state.cardIndex]['loan_infos'] && this.steps(rowData.item.card[this.state.cardIndex]['loan_infos'])}
          {rowData.item.card[this.state.cardIndex]['repayment_infos'] && this.repayment(rowData.item.card[this.state.cardIndex]['repayment_infos'])}
        </div>
      )
    }
    return (
      <div>
        {this.state.fee && this.createFee(this.state.fee)}
        <ListView
          class='xjk-refresh'
          dataSource={this.state.dataSource}
          renderRow={row}
          initialListSize={5}
          pageSize={5}
          scrollRenderAheadDistance={200}
          scrollEventThrottle={20}
          style={{height: document.documentElement.clientHeight}}
          refreshControl={
              <RefreshControl
                  refreshing={this.state.refreshing}
                  icon={[<div key="0" className="am-refresh-control-pull"> <Icon type="arrow-down"/><span>科技让金融更简单</span></div>, <div key="1" className="am-refresh-control-release"> <Icon type="arrow-up"/><span>科技让金融更简单</span></div>]}
            distanceToRefresh={40 * window.lib.flexible.dpr}
            onRefresh={this.onRefresh.bind(this)}/>
          }/>
        </div>
    )
  }
}
