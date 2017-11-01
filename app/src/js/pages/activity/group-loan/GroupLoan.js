import React from 'react'
import Scroll from './Scroll'
import Content from './Content'
import Popup from '../components/Popup'
import Toast from '../../../components/Toast'
import { platform, login, get } from 'utils'
import 'scss/activity/group-loan.component.scss'

const appMarket = 'GroupLoan'
export default class GroupLoan extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    document.title = '周末团借'
  }

  open () {
    Popup.alert(Content.showHtml(1), 'popup')
    Popup.click('a.click', () => { login(appMarket) })
  }

  join () {

  }

  look () {

  }

  render () {
    const h1 = !platform.isApp ? <h1>现金卡周末团借第一弹</h1> : <h1><b>张先生</b>团已有<b>X</b>人</h1>
    const h2 = !platform.isApp ? '' : <h2>三五成群，拉帮结派，组团享优惠</h2>
    const open = !platform.isApp ? <a className='open' onClick={this.open.bind(this)}>我要开团</a> : <a className='open' onClick={this.join.bind(this)}>我要参团</a>
    const look = !platform.isApp ? <a className='look' onClick={this.look.bind(this)}>查看我的团</a> : <a className='look'>我要开团</a>

    return (
      <div className='transition-group'>
        <div className='group-loan'>
          <header className={`${!platform.isApp ? '' : 'notInApp'}`}>
            <i className='rabbit1' />
            <i className='rabbit2' />
            <i className='rabbit3' />
            {h1}
            <Scroll />
            {h2}
          </header>
          <div className='content clearfix'>
            <div className='balloon clearfix'>
              <div className='balloon1'>
                <i />
                <p>用户申请借款后点击我要开团即可开团。当团队人数≥5人时，开团人即获7天免息券1张</p>
              </div>
              <div className='balloon2'>
                <i />
                <p>活动结束前，团队人数≥5人的参团用户，除开团人外均可获得5天免息券1张</p>
              </div>
            </div>
            {open}
            {look}
          </div>
          <div className='rule'>
            <h3>活动规则</h3>
            <p><span>一</span>活动时间：2017年4月22日10:00——4月23日24:00</p>
            <p><span>二</span>活动对象：平台所有用户</p>
            <p><span>三</span>开团规则：申请借款后点击我要开团，即为开团成功</p>
            <p><span>四</span>参团规则：通过开团人链接注册/登录的用户，点击我要参团，即为参团成功</p>
            <p><span>五</span>查看奖励：<b>活动结束前团队人数≥5人（含开团人），开团人获7天免息券1张，团队成员获5天免息券1张。</b>奖励发放至APP-【我的】-【优惠券】中，请注意查收，券使用有效期：从发放之日起15天内</p>
            <p><span>六</span>活动期间，每人仅可参与1个团</p>
            <p><span>七</span>本活动与平台邀请活动奖励同享</p>
            <p><span>八</span>本活动最终解释权归现金卡所有，与Apple.Inc无关</p>
          </div>
        </div>
      </div>
    )
  }
}
