angular.module('invite', ['credit', 'ionic', 'InviteControllers', 'InviteFactory'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.StatusBar) {
      StatusBar.styleDefault()
    }
  })
})

.config(function ($httpProvider, $compileProvider, $stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom')
  $ionicConfigProvider.tabs.style('standard')
  $ionicConfigProvider.navBar.alignTitle('center')

  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|http?|wap2app|schemekdlc|kdlc.app.launch):/)
  $httpProvider.defaults.withCredentials = true
  $httpProvider.interceptors.push('HttpInterceptor')

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'InviteHomeController'
  })
    .state('share', {
      url: '/',
      templateUrl: 'templates/share.html',
      controller: 'InviteShareController'
    })
  $urlRouterProvider.otherwise('/')
})

angular.module('InviteFactory', [])

.factory('InviteHomeService', function (Domain, $http, Platform, $location) {
  return {
    getData: function () {
      var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-invite/invite-act')
      return $http.get(url).then(function (response) {
        return response.data
      })
    }
  }
})
  .factory('InviteShareService', function (Domain, $http, Platform, $location, $httpParamSerializerJQLike) {
    return {
      getData: function (inviteCode) {
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-invite/get-user-info?invite_code=' + inviteCode)
        return $http.get(url).then(function (response) {
          return response.data
        })
      },
      getCode: function (phone) {
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/reg-get-code')
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike({phone: phone}),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data
        })
      },
      register: function (form, inviteCode) {
        var activity_id = 'inviteThree'  // 活动appMarket
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/register?appMarket=' + activity_id)
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike({phone: form.phone, password: form.password, code: form.code, source: 21, invite_code: inviteCode}),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data
        })
      }
    }
  })

angular.module('InviteControllers', [])

.controller('InviteHomeController', function ($scope, InviteHomeService, $ionicLoading, $state, Platform, Domain, $interval, $timeout) {
  $scope.homeData = {'count': 0}
  $scope.errorMessage = ''
  var code = 0

  _hmt.push(['_trackPageview', '/activityInvite'])

  var getRandomColor = function () { // 获取随机颜色
    return '#' + (function (h) {
      return new Array(7 - h.length).join('0') + h
    })((Math.random() * 0x1000000 << 0).toString(16))
  }

  var unique = function (arr) {  // 数组去重
    var res = []
    var o = {}
    for (var i = 0; i < arr.length; i++) {
      if (!o[arr[i]]) {
        res.push(arr[i])
        o[arr[i]] = 1
      }
    }
    return res
  }

  var init_barrage = function (length) {
    var top = 0
    $('.mask div').show().each(function (i, d) {
      if ($(d).is(':animated')) return
      var left = $('.mask').width()
      var height = $('.mask').height() - $(this).height() / 2
      var spacing = (height / length)
      top += spacing
      if (top > height) {
        top = spacing
      }
      $(this).css({
        left: left * (Math.random() / 2 + 1),
        top: top - spacing,
        color: getRandomColor()
      })
      var time = 12500
      if ($(this).index()) {
        time = (Math.round(Math.random()) + 12) * 1000 - Math.random() * 800
      }
      $(this).animate({
        left: '-' + left * 1.2 + 'px'
      }, time, function () {
        $(this).remove()
      })
    })
  }

  var getData = function () {
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    InviteHomeService.getData().then(function (data) {
      $ionicLoading.hide()
      code = data.code
      barrage()
      if (code == 1) {
        $scope.homeData = data.data
      } else if (code == -10) {
        $scope.errorMessage = '本活动已结束，请关注平台其他活动'
        $('.popup-error').show()
      } else if (code == -11) {
        $scope.errorMessage = '本次邀请活动1月6日0:00开启哦！'
        $('.popup-error').show()
      } else if (code == -1) {
        $scope.homeData = data.data
        if (undefined == $scope.homeData.count) {
          $scope.homeData.count = 0
        }
      } else {
        $scope.errorFlag = true
        $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
        $('.popup-error').show()
      }
    })
  }
  getData()

    /**
   * 调用原生分享
   * @param title 分享标题
   * @param body 分享内容
   * @param url 分享url
   * @param logo 分享logo
   * @param type 0|1，0直接分享，1右上角出现分享按钮
   * @returns
   */
  var nativeShare = function (title, body, url, logo, type) {
    var type = type == 1 ? 1 : 0
    if (undefined != nativeMethod && nativeMethod) {
      return nativeMethod.shareMethod('{"share_title":"' + title + '","share_body":"' + body + '","share_url":"' + url + '","share_logo":"' + logo + '","type":"' + type + '"}')
    } else {
      return false
    }
  }

  var appIoslink = function () {
    return function () {
      var clickedAt = +new Date()
      setTimeout(function () {
        !window.document.webkitHidden && setTimeout(function () {
          if (+new Date() - clickedAt < 2000) {
            window.location = 'https://itunes.apple.com/us/app/xian-jin-bai-ka-you-shen-fen/id1156410247?mt=8'
          }
        }, 500)
      }, 500)
    }
  }

  var appAndroidlink = function () {
    return function () {
      var clickedAt = +new Date()
      setTimeout(function () {
        !window.document.webkitHidden && setTimeout(function () {
          if (+new Date() - clickedAt < 2000) {
            window.location = 'https://credit.xianjincard.com/download-app.html'
          }
        }, 500)
      }, 500)
    }
  }

  $('#invite').click(function (e) {
    if (Platform.isApp ? true : false) {
      if (code == 1) {
        e.preventDefault()
        var url = 'http://h5.xianjincard.com/activity/invite/index.html?invite_code=' + $scope.homeData.invite_code
        var share_url = Domain.resolveUrl(url)
        var img_url = Domain.resolveUrl('http://h5.xianjincard.com/activity/invite/img/invite-share-logo.png')
        nativeShare('送你一个新年红包', '通过我的邀请注册，1分钟认证，20分钟到账，被拒还有赔偿！', share_url, img_url, 0)
      } else if (code == -1) {
        $('.popup-login').show()
      } else if (code == -10) {
        $scope.errorMessage = '本活动已结束，请关注平台其他活动'
        $('.popup-error').show()
      } else if (code == -11) {
        $scope.errorMessage = '本次邀请活动1月6日0:00开启哦！'
        $('.popup-error').show()
      }
    } else {
      window.location.href = 'https://api.xianjincard.com/download-app.html'
    }
  })

  $scope.lookAward = function () {
    if (Platform.isApp ? true : false) {
      if (code == -1) {
        $('.popup-lookAward').show()
      } else if (code == -11) {
        $scope.errorMessage = '本次邀请活动1月6日0:00开启哦！'
        $('.popup-error').show()
      } else {
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-invite/invite-rebates-apply-cash')
        window.location.href = url
      }
    } else {
      var browser = {
        versions: (function () {
          var u = navigator.userAgent, app = navigator.appVersion
          return {// 移动终端浏览器版本信息
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 // android终端或uc浏览器
          }
        }()),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
      }
      if (browser.versions.ios === true) {
        window.location.href = 'https://itunes.apple.com/app/id1156410247?mt=8' // 紧急更换一下活动
        appIoslink()
      } else if (browser.versions.android === true) {
        window.location.href = 'xianjincard://com.kdlc.mcc/openapp'
        appAndroidlink()
      } else {
        window.location.href = 'https://api.xianjincard.com/download-app.html'
      }
    }
  }

  $scope.showRule = function () {
    $('.popup-rule').show()
  }

  $scope.closeRule = function () {
    $('.popup-rule').hide()
  }

  $scope.closePop = function () {
    $('.popup').hide()
  }

  $scope.login = function () {
    $('.popup').hide()
    window.location.href = 'koudaikj://app.launch/login/applogin'
  }

  var barrage = function () {
    var arr_unconventional = ['老司机，带带我', 'Word天，邀请这么多', '原来我的朋友圈都是土豪，不差钱', '呵呵呵呵…………', '邀请So easy', '我的春节红包谁要帮我邀', '邀啊邀，邀到外婆桥', '缺钱的有点多', '天天领钱，都不想上班了', '妈妈再也不用担心我没钱了', '先定一个小目标，邀请100个', '我不是为了邀请，我是为了缺钱的兄弟', '邀or不邀，这不是个问题', '看在钱的份上，能不能再多邀一个', '我的朋友圈都被我刷屏了', '没钱找现金卡借', '一卡在手，天下我有', '没有人让我邀，蓝瘦香菇', '邀请达人快来教教宝宝', '我要每天都霸屏', '这是我的地盘，看我的', '一不小心，邀请的有点多', '邀邀邀，切克now', '跟我一起说“邀”', '原来这个世界这么多人缺钱'],
      // 非常规弹幕
      arr_unconventional_rand = ['分我点人啊，我快到100了', '厉害了我的哥，已经拿到1000元', '才邀请就发现已经邀请了5个', '朋友圈、QQ群都是我的邀请', '微博贴吧全是我的邀请'],
      // 非常规弹幕排名弹幕
      arr_simulation = ['恭喜用户158****1261获得108元奖励', '恭喜用户138****7261获得238元奖励', '恭喜用户170****3821获得68元奖励', '恭喜用户151****4587获得88元奖励', '恭喜用户137****1654获得108元奖励', '恭喜用户159****5481获得128元奖励', '恭喜用户150****8544获得88元奖励', '恭喜用户189****4215获得68元奖励', '恭喜用户158****4212获得48元奖励', '恭喜用户139****6481获得68元奖励', '恭喜用户171****3216获得48元奖励', '恭喜用户180****5697获得88元奖励', '恭喜用户159****9254获得68元奖励', '恭喜用户139****5461获得68元奖励', '恭喜用户158****2651获得48元奖励', '恭喜用户188****9874获得68元奖励', '恭喜用户186****6623获得48元奖励', '恭喜用户138****8567获得48元奖励', '恭喜用户139****9422获得48元奖励', '恭喜用户158****1315获得88元奖励', '恭喜用户151****6548获得68元奖励', '恭喜用户158****3165获得48元奖励', '恭喜用户181****6541获得68元奖励', '恭喜用户188****1876获得88元奖励', '恭喜用户150****9112获得88元奖励', '恭喜用户188****5913获得48元奖励', '恭喜用户189****5915获得68元奖励', '恭喜用户138****3481获得108元奖励', '恭喜用户159****3226获得48元奖励', '恭喜用户151****8971获得48元奖励' ],
      // 模拟排名假数据
      arr_rand = [],
      // 排名真数据
      arr = [],
      arr_middle = [],
      arr_final = []
    var length = Math.round(Math.random() * 4) + 1,
      length_simulation = 30
    var label = null

    if (code == -11) {
      arr = arr_unconventional
    } else {
      if (undefined == $scope.homeData.rand) {
        arr = arr_unconventional.concat(arr_simulation, arr_unconventional_rand)
      } else {
        for (var i in $scope.homeData.rand) {
          arr_rand.push('恭喜用户' + $scope.homeData.rand[i].user_phone + '获得' + $scope.homeData.rand[i].total + '元奖励')
        }
        arr = arr_unconventional.concat(arr_unconventional_rand, arr_rand, arr_simulation.slice(0, length_simulation - $scope.homeData.rand.length - 1))
      }
    }

    if (length < 3) {
      length = 4
    }
    for (var n = 0; n < length; n++) {
      var random = Math.round(Math.random() * (arr.length - 1))
      arr_middle[n] = arr[random]
    }
    arr_final = unique(arr_middle)
    for (var j in arr_final) {
      var lable = $("<div style='top:0px;opacity:1;font-size: 0.4rem'>" + arr_final[j] + '</div>')
      $('.mask').append(lable.show())
    }
    init_barrage(arr_final.length)
  }

  $interval(barrage, 3000)
})
.controller('InviteShareController', function ($scope, InviteShareService, $ionicLoading, $state, Platform, Domain, $timeout, Popup) {
  $scope.codeText = '获取验证码'
  $scope.codeFlag = false
  $scope.shareData = {}
  $scope.errorMessage = ''

  _hmt.push(['_trackPageview', '/activityInviteShare'])

  $('.other label i').show()
  var getUrlParam = function () {
    var requestParameters = new Object()

    var url = window.location.href
    var urlArr = url.split('?')
    if (urlArr[1]) {
      var urlParameters = urlArr[1].split('#')[0]
      if (urlParameters.indexOf('?') == -1) {
        var parameters = decodeURI(urlParameters)
        parameterArray = parameters.split('&')
        for (var i = 0; i < parameterArray.length; i++) {
          requestParameters[parameterArray[i].split('=')[0]] = (parameterArray[i].split('=')[1])
        }
      }
    }
    return requestParameters
  }

  var invite_code = getUrlParam()

  var getData = function () {
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    InviteShareService.getData(encodeURIComponent(invite_code.invite_code)).then(function (data) {
      $ionicLoading.hide()
      if (data.code == 1) {
        $scope.shareData = data.data
      } else {
        $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
        $('.popup-code').show()
      }
    })
  }
  getData()

  var setup = function (m, l) {
    $timeout(function () {
      $scope.codeText = m + '秒后重试'
      if (m) {
        setup(--m, 1000)
      } else {
        $scope.codeText = '重新发送'
        $scope.sendDisabled = false
      }
    }, l)
  }

  $scope.setCode = function () {
    $scope.codeFlag = false
  }

  $scope.getCode = function (phone) {
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    InviteShareService.getCode(phone).then(function (data) {
      $ionicLoading.hide()
      if (data.code == 1000) {
        $('.popup-register').show()
      } else {
        $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
        $('.popup-code').show()
      }
    })
    $scope.sendDisabled = true
    setup(60)
  }

  $scope.downloadApp = function () {
    window.location.href = 'https://api.xianjincard.com/download-app.html'
  }

  $scope.register = function (form) {
    if (!$('.other label i').is(':visible')) {
      $scope.errorMessage = '请选择同意《现金白卡使用协议》'
      $('.popup-code').show()
      return
    }
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    InviteShareService.register(form, encodeURIComponent(invite_code.invite_code)).then(function (data) {
      $ionicLoading.hide()
      if (data.code == 0) {
        $('.popup-success').show()
      } else {
        $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
        $('.popup-code').show()
      }
    })
  }

  $scope.agreeAgreement = function () {
    if (!$('.other label i').is(':visible')) {
      $('.other label i').show()
    } else {
      $('.other label i').hide()
    }
  }

  $scope.closePop = function () {
    $('.popup-share').hide()
  }
})
