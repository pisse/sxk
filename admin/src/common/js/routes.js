/**
 * Created by Administrator on 2017/5/7.
 */
let Routes = {
  user: {
    name: '用户管理',
    children: {
      front: {name: '前台用户'},
      admin: {name: '后台用户'},
      role: {name: '角色管理'},
      sign: {name: '用户签名'}
    }
  },
  sys: {
    name: '系统设置',
    children: {
      errsms: {name: '错误信息'},
      operator: {name: '运营商'},
      blacklist: {name: '黑名单'},
      sensitive: {name: '敏感信息'}
    }
  },

  /* errsms: {
    name: '错误信息'
  },
  operator: {
    name: '运营商'
  },
  blacklist: {
    name: '黑名单'
  },
  sensitive: {
    name: '敏感信息'
  }, */

  smstask: {
    name: '短信任务'
  },
  taskrecord: {
    name: '任务明细'
  },
  short: {
    name: '短链分析'
  },
  stat: {
    name: '运营分析',
    children: {
      channeldelay: {name: '通道延迟'},
      vcode: {name: '验证码发送'},
      errtype: {name: '错误明细'},
      gateway: {name: '网关延迟'},
      province: {name: '分省数据'},
      channelcheck: {name: '通道对账'},
      clientcheck: {name: '客户对账'}
      // compare: {name: '数据对比'}
    }
  },
  finance: {
    name: '财务统计',
    children: {
      channelcheck: {name: '通道对账'},
      clientcheck: {name: '客户对账'}
      // compare: {name: '数据对比'}
    }
  }
}

export default Routes
