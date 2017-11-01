import {useTransitions, withTransition} from 'react-router-transitions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {applyRouterMiddleware, Router, hashHistory, browserHistory} from 'react-router'
import Layout from '../pages/Layout'
import activityRoute from './activity'
import employerRoute from './employer'
import mobileRoute from './mobile'

import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'

export const routerTransition = applyRouterMiddleware(
  useTransitions({
    TransitionGroup: ReactCSSTransitionGroup,
    onShow (prevState, nextState, replaceTransition) {
      // console.log('onShow',nextState.children.props.route.transition)
      replaceTransition({
        transitionName: `transition-group-show-${nextState.children.props.route.transition}`,
        transitionEnterTimeout: 800,
        transitionLeaveTimeout: 200
      })
    },
    onDismiss (prevState, nextState, replaceTransition) {
      // console.log('onDismiss', nextState.children.props.route.transition)
      replaceTransition({
        transitionName: `transition-group-show-${nextState.children.props.route.transition}`,
        transitionEnterTimeout: 800,
        transitionLeaveTimeout: 200
      })
    },
    defaultTransition: {
      transitionName: 'transition-group-show-from-right',
      transitionEnterTimeout: 800,
      transitionLeaveTimeout: 200
    }}))

export const rootRoute = [mobileRoute, {
  path: '/',
  component: withTransition(Layout),
//  indexRoute: {onEnter: (nextState, replace) => replace('/mobile/loan')},
  childRoutes: [
    {
      path: 'security',
      transition: 'from-left',
      indexRoute: [{
        transition: 'from-left',
        getComponent (location, callback) {
          require.ensure([], function (require) {
            callback(null, require('../pages/security/SecurityList'))
          })
        }
      }],
      childRoutes: [{
        path: 'certification',
        transition: 'from-up',
        getComponent (location, callback) {
          require.ensure([], function (require) {
            callback(null, require('../pages/security/SecurityCertification'))
          })
        }
      }]
    },
    {
      path: 'fund',
      transition: 'from-left',
      indexRoute: [{
        transition: 'from-left',
        getComponent (location, callback) {
          require.ensure([], function (require) {
            callback(null, require('../pages/fund/FundList'))
          })
        }
      }],
      childRoutes: [{
        path: 'certification',
        transition: 'from-right',
        getComponent (location, callback) {
          require.ensure([], function (require) {
            callback(null, require('../pages/fund/FundCertification'))
          })
        }
      }]
    },
    activityRoute,
    employerRoute,
    {
      path: 'signin', // 金币签到
      indexRoute: [{
        getComponent (location, callback) {
          require.ensure([], function (require) {
            callback(null, require('pages/signin/index'))
          })
        }
      }],
      childRoutes: [{
        path: 'detailed',
        getComponent (location, callback) {
          require.ensure([], function (require) {
            callback(null, require('pages/signin/detailed'))
          })
        }
      }]
    },
    {
      path: 'misc',
      childRoutes: [{
        path: 'flow', // 流量引入
        transaction: 'from-left',
        getComponent (location, callback) {
          require.ensure([], function (require) {
            callback(null, require('pages/misc/flow'))
          })
        }
      }, {
        path: 'business', // 官网招募合作
        transaction: 'from-left',
        getComponent (location, callback) {
          require.ensure([], function (require) {
            callback(null, require('pages/misc/business'))
          })
        }
      }]
    },
    {
      path: 'cash-bonus', // 现金红包
      indexRoute: [{
        getComponent (location, callback) {
          require.ensure([], function (require) {
            callback(null, require('pages/cash-bonus/index'))
          })
        }
      }],
      childRoutes: [{
        path: 'withdrawal', // 提现
        transaction: 'from-left',
        getComponent (location, callback) {
          require.ensure([], function (require) {
            callback(null, require('pages/cash-bonus/withdrawal'))
          })
        }
      }]
    },
    {
      path: 'integral-mall', // 积分商城
      indexRoute: [{
        transaction: 'from-left',
        getComponent (location, callback) {
          require.ensure([], function (require) {
            callback(null, require('pages/integral-mall/index'))
          })
        }
      }],
      childRoutes: [{
        path: 'details', // 查看详情
        transaction: 'from-left',
        getComponent (location, callback) {
          require.ensure([], function (require) {
            callback(null, require('pages/integral-mall/details'))
          })
        }
      }]
    }
  ]
}]

if (process.env.NODE_ENV !== `production`) {
  rootRoute[1].childRoutes.push({
    path: 'test',
    transition: 'from-up',
    indexRoute: [
      {
        transition: 'from-up',
        getComponent (location, callback) {
          require.ensure([], function (require) {
            callback(null, require('../pages/Test'))
          })
        }
      }
    ]
  })
}

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router routes={rootRoute} history={process.env.NODE_ENV === `debug` ? hashHistory : browserHistory} render={routerTransition}/>
      </Provider>
    )
  }
}
