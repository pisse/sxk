import { browserHistory, hashHistory } from 'react-router'
import axios from 'axios'
import qs from 'qs'

let Uri = (function () {
  var hostname = location.hostname
  var reg = /(?:http(?:s)?:\/\/)?(?:www\.)?(.*?)\./
  var regR = /https?:\/\/(?:[^/]+\.)?([^./]+\.(?:com))(?:$|\/)/
  var m = hostname.match(reg)
  var host = location.hostname

  var domain = {
    credit: '//' + host + '/credit/web/',
    api: '//' + host + '/frontend/web/',
    h5: '//' + host + '/h5/mobile/web/',
    h: '//' + host + '/',
    m: '//' + host + '/mobile/web/'
  }

  // 根据二级域名重置domain
  if (m !== null) {
    if (m[1] === 'h') {
      domain = {
        credit: location.protocol + '//credit.dahubao.com/',
        api: location.protocol + '//api.dahubao.com/',
        h5: location.protocol + '//h5.dahubao.com/',
        m: location.protocol + '//m.dahubao.com/'
      }
    }

    if (m[1] === 'pre-h') {
      domain = {
        credit: location.protocol + '//pre-credit.dahubao.com/',
        api: location.protocol + '//pre-api.dahubao.com/',
        h5: location.protocol + '//pre-h5.dahubao.com/',
        h: location.protocol + '//pre-h.dahubao.com/',
        m: location.protocol + '//pre-m.dahubao.com/'
      }
    }

    if (m[1] === 'test-h') {
      domain = {
        credit: location.protocol + '//test-credit.dahubao.com/',
        api: location.protocol + '//test-api.dahubao.com/',
        h5: location.protocol + '//test-h5.dahubao.com/mobile/web/',
        h: location.protocol + '//test-h.dahubao.com/',
        m: location.protocol + '//test-m.dahubao.com/'
      }
    }

    if (hostname === '192.168.39.214') {
      domain = {
        credit: location.protocol + '//' + location.hostname + '/kdkj/credit/web/',
        api: location.protocol + '//' + location.hostname + '/kdkj/frontend/web/',
        h5: location.protocol + '//' + location.hostname + '/kdkj/h5/mobile/web/',
        m: location.protocol + '//' + location.hostname + '/kdkj/mobile/web/'
      }
    }
  } else {
    domain = {
      credit: location.protocol + '//credit.xianjincard.com/',
      api: location.protocol + '//api.xianjincard.com/',
      h5: location.protocol + '//h5.xianjincard.com/',
      m: location.protocol + '//m.xianjincard.com/'
    }
  }

  return {
    resolveUrl: function (url) {
      var arr = url.match(reg)
      if (domain[arr[1]]) {
        return url.replace(regR, domain[arr[1]])
      }
    },
    domain: domain
  }
}())

export const redirect = process.env.NODE_ENV === `debug` ? hashHistory : browserHistory
export const resolveUrl = (url) => { return Uri.resolveUrl(url) }

export const platform = (function () {
  const u = navigator.userAgent
  const versions = u.split('/')
  return {
    isApp: u.indexOf('kdxj') !== -1,
    isAndroid: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, // android终端
    isIos: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
    isWeixin: u.indexOf('MicroMessenger') > -1, // 是否微信 （2015-01-22新增）
    isQQ: u.match(/\sQQ/i) === 'qq', // 是否QQ
    version: versions[versions.length - 1]
  }
}())

export function share (key) {
  const script = document.createElement('script')
  script.src = '//res.wx.qq.com/open/js/jweixin-1.0.0.js'
  script.onload = () => {
    const script = document.createElement('script')
    script.src = resolveUrl('https://credit.dahubao.com/activity/default/wx-share?key=' + key)
    document.body.appendChild(script)
  }
  document.body.appendChild(script)
}
/*
  {
  'share_title': '重金招募区域代理人！',
  'share_body': '5000万赏金虚位以待，寻找与众不同的你，I want you！',
  'share_url': 'https://h5.dahubao.com/activity/reward/index.html',
  'share_logo': 'http://h5.dahubao.com/activity/reward/img/share.png',
  'type': '1'
  }
  */
export function partake (params) {
  var defaults = {
    'share_title': '',
    'share_body': '',
    'share_url': '',
    'share_logo': '',
    'type': '0',
    'platform': 'WEIXIN,WEIXIN_CIRCLE,QQ,QZONE,SMS_INVITE,SINA',
    'callback': '',
    'is_upload': '1'
  }
  Object.assign(defaults, params)
  window.nativeMethod && window.nativeMethod.shareMethod(JSON.stringify(defaults))
}

export function census () {
  createCount('//hm.baidu.com/hm.js?cb70b7ef18da057ea52aaf3b53609ec2')

  window._vds = window._vds || []
  window._vds.push(['setAccountId', '8fd2500ba4956d6d'])
  createCount('//dn-growing.qbox.me/vds.js')
}

function createCount (url) {
  const script = document.createElement('script')
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

export function login (source = null, inviteCode = null, url) {
  let redirectUrl = url || location.href
  let u = platform.isApp ? 'koudaikj://app.launch/login/applogin' : resolveUrl('http://h5.dahubao.com/mobile/index.html#/login?redirect_url=' + encodeURIComponent(redirectUrl))
  if (source !== null && !platform.isApp) {
    u += `&appMarket=${source}`
  }
  if (inviteCode !== null && !platform.isApp) {
    u += `&inviteCode=${inviteCode}`
  }
  location.href = u
}

export function get (url) {
  return axios.get(resolveUrl(url))
}
/*
  url: http://api.dahubao.com/accumulation-fund/check-login
  params: {a:1, b:2}
*/
export function post (url, params) {
  return axios.post(resolveUrl(url), qs.stringify(params))
}

export function copy (text, tips = '复制成功!') {
  window.nativeMethod && window.nativeMethod.copyTextMethod('{"text":"' + text + '","tip":"' + tips + '"}')
}

export function forwardApp () {
  if (platform.isAndroid && !platform.isWeixin) {
    window.location.href = 'https://credit.dahubao.com/download-app.html'
    return
  }
  if (platform.isIos && !platform.isWeixin) {
    window.location.href = 'https://itunes.apple.com/app/id1156410247?mt=8'
    return
  }
  window.location.href = 'https://api.dahubao.com/download-app.html'
}

export function hrefNative (type) {
  const params = {'type': type}
  window.nativeMethod && window.nativeMethod.returnNativeMethod(JSON.stringify(params))
  //  window.nativeMethod && window.nativeMethod.returnNativeMethod('{"type" : "0"}')
}

// 退出webview
export function back () {
  hrefNative(0)
}

// 跳转首页
export function goHome () {
  if (!platform.isApp) {
    location.href = resolveUrl('http://h5.dahubao.com/mobile')
    return
  }
  hrefNative(4)
}

// 找回交易密码
export function retrievePassword () {
  if (platform.isApp) {
    hrefNative(2)
  } else {
    location.href = resolveUrl('https://h5.dahubao.com/mobile/index.html#/my/findpaypassword?state=loan')
  }
}
