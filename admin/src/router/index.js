import Vue from 'vue'
import Router from 'vue-router'
import adminUser from '@/components/adminUser'
import adminRole from '@/components/adminRole'
import frontUser from '@/components/frontUser'
import sign from '@/components/sign'
import orderList from '@/components/orderList'
import treeList from '@/components/treeList'
import errSms from '@/components/errSms'
import blackList from '@/components/blackList'
import operatorList from '@/components/operatorList'
import sensitiveList from '@/components/sensitiveList'
import smsTaskList from '@/components/smsTaskList'
import taskRecord from '@/components/taskRecord'

import channelDelay from '@/components/statChannelDelay'
import verificationCode from '@/components/statVerificationCode'
import errorType from '@/components/statErrorType'
import gatewayDelay from '@/components/statGatewayDelay'
import province from '@/components/statProvince'
import channelCheck from '@/components/statChannelCheck'
import clientCheck from '@/components/statClientCheck'
import compare from '@/components/statCompare'

import shortList from '@/components/shortList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      // component: compare
      redirect: {name: 'admin'}
    },
    {
      path: '/order/list',
      name: 'orderList',
      component: orderList
    },
    {
      path: '/tree/list',
      name: 'treeList',
      component: treeList
    },
    {
      path: '/sys/errsms',
      name: 'errsms',
      component: errSms
    },

    {
      path: '/sys/errsms',
      name: 'errsms',
      component: errSms
    },
    {
      path: '/sys/operator',
      name: 'operator',
      component: operatorList
    },
    {
      path: '/sys/sensitive',
      name: 'sensitive',
      component: sensitiveList
    },
    {
      path: '/sys/blacklist',
      name: 'blacklist',
      component: blackList
    },

    {path: '/user', name: 'user', redirect: {name: 'admin'}},
    {
      path: '/user/admin',
      name: 'admin',
      component: adminUser
    },
    {
      path: '/user/role',
      name: 'role',
      component: adminRole
    },
    {
      path: '/user/front',
      name: 'front',
      component: frontUser
    },
    {
      path: '/user/sign',
      name: 'sign',
      component: sign
    },

    {
      path: '/smstask',
      name: 'smstask',
      component: smsTaskList
    },

    {
      path: '/taskrecord',
      name: 'taskrecord',
      component: taskRecord
    },

    { path: '/stat', name: 'stat', redirect: {name: 'channeldelay'} },
    {
      path: '/stat/channeldelay',
      name: 'channeldelay',
      component: channelDelay
    },
    {
      path: '/stat/vcode',
      name: 'vcode',
      component: verificationCode
    },
    {
      path: '/stat/errtype',
      name: 'errtype',
      component: errorType
    },
    {
      path: '/stat/gateway',
      name: 'gateway',
      component: gatewayDelay
    },
    {
      path: '/stat/province',
      name: 'province',
      component: province
    },
    /* {
      path: '/stat/channelcheck',
      name: 'channelcheck',
      component: channelCheck
    },
    {
      path: '/stat/clientcheck',
      name: 'clientcheck',
      component: clientCheck
    },
    {
      path: '/stat/compare',
      name: 'compare',
      component: compare
    } */
    { path: '/finance', name: 'finance', redirect: {name: 'channeldelay'} },
    {
      path: '/finance/channelcheck',
      name: 'channelcheck',
      component: channelCheck
    },
    {
      path: '/finance/clientcheck',
      name: 'clientcheck',
      component: clientCheck
    },

    {
      path: '/short',
      name: 'short',
      component: shortList
    }
  ]
})

