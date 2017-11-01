angular.module('inviteThree', ['credit', 'ionic', 'InviteThreeControllers', 'InviteThreeFactory'])

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
    controller: 'InviteThreeHomeController'
  })
    .state('share', {
      url: '/',
      templateUrl: 'templates/share.html',
      controller: 'InviteThreeShareController'
    })
  $urlRouterProvider.otherwise('/')
})

angular.module('InviteThreeFactory', [])

.factory('InviteThreeHomeService', function (Domain, $http, Platform, $location) {
  return {
    getInviteCode: function () {
      var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-invite/get-user-invite-code')
      return $http.get(url).then(function (response) {
        return response.data
      })
    },
    getInviteUrl: function (invite_url) {
      var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-invite/get-short-url?url=' + invite_url)
      return $http.get(url).then(function (response) {
        return response.data
      })
    }
  }
})
  .factory('InviteThreeShareService', function (Domain, $http, Platform, $location, $httpParamSerializerJQLike) {
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

angular.module('InviteThreeControllers', [])

.controller('InviteThreeHomeController', function ($scope, InviteThreeHomeService, $ionicLoading, $state, Platform, Domain, $timeout) {
  $scope.errorMessage = ''
  $scope.loginMessage = ''

  var version_arr = Platform.appVersion.split('.')
  var version = parseInt(version_arr[0] + version_arr[1] + version_arr[2], 10)

  _hmt.push(['_trackPageview', '/activityInviteThree'])

  if (Platform.isApp ? true : false) {
    $('.invite-home').css('margin-top', 0)
  } else {
    $('.invite-home').css('margin-top', '1.9733333333rem')
  }

  $('.home-download').find('.close').click(function () {
    $('.invite-home').css('margin-top', '0')
  })

  $('.invite-reward, .friends-reward, .invite-skill').click(function () {
    $('.invite-reward, .friends-reward, .invite-skill').removeClass('active')
    $(this).addClass('active')
  })

  $('.invite-reward').click(function () {
    $('.friends-reward-content').removeClass('content-active')
    $('.invite-skill-content').removeClass('content-active')
    $('.friends-reward-content').addClass('content-right')
    $('.invite-skill-content').addClass('content-right')
    $timeout(function () {
      $('.invite-reward-content').show()
      $('.friends-reward-content').hide()
      $('.invite-skill-content').hide()
      $('.invite-reward-content').removeClass('content-left')
      $('.invite-reward-content').addClass('content-active')
    }, 300)
  })

  $('.friends-reward').click(function () {
    if ($('.invite-reward-content').hasClass('content-active')) {
      $('.invite-reward-content').removeClass('content-active')
      $('.invite-reward-content').addClass('content-left')
      $timeout(function () {
        $('.invite-reward-content').hide()
        $('.friends-reward-content').show()
        $('.friends-reward-content').removeClass('content-right')
        $('.friends-reward-content').addClass('content-active')
      }, 300)
    }
    if ($('.invite-skill-content').hasClass('content-active')) {
      $('.friends-reward-content').removeClass('content-right')
      $('.invite-skill-content').removeClass('content-active')
      $('.invite-skill-content').addClass('content-right')
      $timeout(function () {
        $('.invite-skill-content').hide()
        $('.friends-reward-content').show()
        $('.friends-reward-content').removeClass('content-left')
        $('.friends-reward-content').addClass('content-active')
      }, 500)
    }
  })

  $('.invite-skill').click(function () {
    $('.invite-reward-content').removeClass('content-active')
    $('.friends-reward-content').removeClass('content-active')
    $('.invite-reward-content').addClass('content-left')
    $('.friends-reward-content').addClass('content-left')
    $timeout(function () {
      $('.invite-reward-content').hide()
      $('.friends-reward-content').hide()
      $('.invite-skill-content').show()
      $('.invite-skill-content').removeClass('content-right')
      $('.invite-skill-content').addClass('content-active')
    }, 300)
  })

  var nativeShare = function (title, body, url, logo, type, platform, extend, callback, is_upload) {
    var type = type > 0 ? type : 0
    var platform = platform ? platform : 'WEIXIN,WEIXIN_CIRCLE,QQ,QZONE,SMS_INVITE,SINA'
    if (Platform.isAndroid && version < 143) {
      platform = ''
    }
    var extend = extend ? extend : ''
    var callback = callback ? callback : ''
    var is_upload = is_upload ? 0 : 1
    if (typeof (nativeMethod) !== 'undefined') {
      return nativeMethod.shareMethod('{"share_title":"' + title + '","share_body":"' + body + '","share_url":"' + url + '","share_logo":"' + logo + '","type":"' + type + '","platform":"' + platform + '","extend":"' + extend + '","callback":"' + callback + '","is_upload":"' + is_upload + '"}')
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

  $scope.Share = function (share) {
    if (code == -1) {
      $scope.loginMessage = '登录后才可邀请哦！'
      $('.popup-login').show()
      return false
    } else if (code == -10) {
      $ionicLoading.hide()
      $scope.errorMessage = '本活动已结束，请关注平台其他活动'
      $('.popup-error').show()
      return false
    } else if (code == -11) {
      $ionicLoading.hide()
      $scope.errorMessage = '本次邀请活动2月7日0:00开启哦！'
      $('.popup-error').show()
      return false
    }
    if (Platform.isApp ? true : false) {
      if (Platform.isAndroid) {
        if (version > 142) {
          var url = 'http://h5.xianjincard.com/activity/invite/index.html?invite_code=' + $scope.inviteData.data.invite_code
          var share_url = Domain.resolveUrl(url)
          var share_img_url = Domain.resolveUrl('http://h5.xianjincard.com/activity/invite/img/invite-share-logo.png')
          nativeShare('送你一个10元红包', '通过我的邀请注册，1分钟认证，30分钟到账，被拒还有现金赔偿！', share_url, share_img_url, 2, share, '', '', 0)
        } else {
          $('.popup-old').show()
        }
      } else {
        if (version > 143) {
          var url = 'http://h5.xianjincard.com/activity/invite/index.html?invite_code=' + $scope.inviteData.data.invite_code
          var share_url = Domain.resolveUrl(url)
          var share_img_url = Domain.resolveUrl('http://h5.xianjincard.com/activity/invite/img/invite-share-logo.png')
          nativeShare('送你一个10元红包', '通过我的邀请注册，1分钟认证，30分钟到账，被拒还有现金赔偿！', share_url, share_img_url, 2, share, '', '', 0)
        } else {
          $('.popup-old').show()
        }
      }
    } else {
      $('.popup-share').show()
    }
  }

  $scope.copyText = function (text) {
    if (typeof (nativeMethod) !== 'undefined') {
      return nativeMethod.copyTextMethod('{"text":"' + text + '","tip":"复制成功!"}')
    }
  }

  $scope.showRule = function () {
    $('.popup-rule').show()
  }

  $scope.closeRule = function () {
    $('.popup-rule').hide()
  }

  $scope.close = function () {
    $('.popup').hide()
  }

  $scope.lookAward = function () {
    if (code == -1) {
      $scope.loginMessage = '登录后才可以查看奖励哦！'
      $('.popup-login').show()
      return false
    } else if (code == -10) {
      $ionicLoading.hide()
      $scope.errorMessage = '本活动已结束，请关注平台其他活动'
      $('.popup-error').show()
      return false
    } else if (code == -11) {
      $ionicLoading.hide()
      $scope.errorMessage = '本次邀请活动2月7日0:00开启哦！'
      $('.popup-error').show()
      return false
    }
    var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-invite/invite-rebates-apply-cash')
    window.location.href = url
  }

  var getInviteCode = function () {
    var invite_url = Domain.resolveUrl('http://h5.xianjincard.com/activity/invite/index.html?invite_code=')
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    InviteThreeHomeService.getInviteCode().then(function (data) {
      code = data.code
      if (code == 1) {
        $scope.inviteData = data
        invite_url = invite_url + $scope.inviteData.data.invite_code
        InviteThreeHomeService.getInviteUrl(encodeURIComponent(invite_url)).then(function (data) {
          $ionicLoading.hide()
          $scope.inviteUrl = data
        })
      } else if (code == -1) {
        $ionicLoading.hide()
        $scope.loginMessage = '登录后才可邀请哦！'
        $('.popup-login').show()
      } else if (code == -10) {
        $ionicLoading.hide()
        $scope.errorMessage = '本活动已结束，请关注平台其他活动'
        $('.popup-error').show()
      } else if (code == -11) {
        $ionicLoading.hide()
        $scope.errorMessage = '本次邀请活动2月7日0:00开启哦！'
        $('.popup-error').show()
      } else {
        $ionicLoading.hide()
        $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
        $('.popup-error').show()
      }
    })
  }
  getInviteCode()

  $scope.inviteFriend = function () {
    if (code == -1) {
      $scope.loginMessage = '登录后才可邀请哦！'
      $('.popup-login').show()
      return false
    } else if (code == -10) {
      $ionicLoading.hide()
      $scope.errorMessage = '本活动已结束，请关注平台其他活动'
      $('.popup-error').show()
      return false
    } else if (code == -11) {
      $ionicLoading.hide()
      $scope.errorMessage = '本次邀请活动2月7日0:00开启哦！'
      $('.popup-error').show()
      return false
    }
    if (Platform.isApp ? true : false) {
      var url = 'http://h5.xianjincard.com/activity/invite/index.html?invite_code=' + $scope.inviteData.data.invite_code
      var share_url = Domain.resolveUrl(url)
      var share_img_url = Domain.resolveUrl('http://h5.xianjincard.com/activity/invite/img/invite-share-logo.png')
      nativeShare('送你一个10元红包', '通过我的邀请注册，1分钟认证，30分钟到账，被拒还有现金赔偿！', share_url, share_img_url, 0, '', '', '', 0)
    } else {
      $('.popup-share').show()
    }
  }

  $scope.login = function () {
    if (code == -10) {
      $ionicLoading.hide()
      $scope.errorMessage = '本活动已结束，请关注平台其他活动'
      $('.popup-error').show()
      return false
    } else if (code == -11) {
      $ionicLoading.hide()
      $scope.errorMessage = '本次邀请活动2月7日0:00开启哦！'
      $('.popup-error').show()
      return false
    }
    if (Platform.isApp ? true : false) {
      $('.popup').hide()
      window.location.href = 'koudaikj://app.launch/login/applogin'
    } else {
      $('.popup').hide()
      var login_url = 'http://h5.xianjincard.com/mobile/index.html#/login?redirect_url='
      var url = Domain.resolveUrl(login_url)
      window.location.href = url + encodeURIComponent(location.href)
    }
  }

  $scope.longPress = function () {
    var text = $('#red').text()
    if (typeof ($scope.inviteUrl) !== 'undefined') {
      text = text + $scope.inviteUrl.data.short_url
    }
    $scope.copyText(text)
  }

  $scope.downloadApp = function () {
    $('.popup').hide()
    if (Platform.isAndroid && !Platform.isWeixin) {
      window.location.href = 'https://credit.xianjincard.com/download-app.html'
      appAndroidlink()
    } else if (Platform.isIos && !Platform.isWeixin) {
      window.location.href = 'https://itunes.apple.com/app/id1156410247?mt=8'
      appIoslink()
    } else {
      window.location.href = 'https://api.xianjincard.com/download-app.html'
    }
  }
})
.controller('InviteThreeShareController', function ($scope, InviteThreeShareService, $ionicLoading, $state, Platform, Domain, $interval, $timeout) {
  $scope.rollData = {'data': [{'logo_url': 'http://wx.qlogo.cn/mmopen/WB8odsdxBaABCCJnJfqSmpDqKiaE4S4xHduJqu6eaDDlRDse2O5CJPHgNr8D9WzppvLXgUz28EJIaEWee7rticvdm9pkSUhuoH/0', 'name': '飘零的花朵'}, {'logo_url': 'http://wx.qlogo.cn/mmopen/JZAnwtfjE9gmQkOwlmFo9SiaZzsRlxfHh6nCnPyIg8h8MQ8CAPzzibEMXicjp8lIVE3Rn38s5NOXeYEh4FTwaQMfXxwB8j5IGiaG/0', 'name': '桃子'}, {'logo_url': 'http://wx.qlogo.cn/mmopen/Q3auHgzwzM7UoY3IicGBjgRc7yYS273ribLNM6kSJ36unk6SjlCciciawOVqNm053FReDIfRZKW6AicBWXibeYYBvCxg/0', 'name': '雨笙敲敲'}, {'logo_url': 'http://wx.qlogo.cn/mmopen/PiajxSqBRaEKLZ2ibwxyItHV8uXgT2DrGicPI1p0Uw9tcMibYOO1CsOO8Uuw9hUwNVgpKia6QXy506o6Qb2IrQyfrTw/0', 'name': '从前有座山'}, {'logo_url': 'http://wx.qlogo.cn/mmopen/ajNVdqHZLLBUN5Sp60SXRichfibrR63bsbsmIQFPEQzeGsaeBFTkS88grTNYick7esWRnTNXTWl2O2ou6nYPfuevqr2kxId5nUj6ibF4xNBIu6Q/0', 'name': '瘦嘟嘟'}, {'logo_url': 'http://wx.qlogo.cn/mmopen/WB8odsdxBaAhjyib9JFypUE0XSxVcVyIcv5XapvQiaKibzc7rR8P3LbmEOicGZDibrLfwNHXuUBW0EH5kST9K8kfO9NibcHwpzS7Fx/0', 'name': '回忆的那个人'}, {'logo_url': 'http://wx.qlogo.cn/mmopen/JZAnwtfjE9gmQkOwlmFo9ZicrYXngc8MMMebAB7Af6wicc1WACcJ7ODkOYF9WfiaibGsKTYLKKnFdV58KXia9luEcNwSibGOyNP2Te/0', 'name': '一半 眼线'}, {'logo_url': 'http://wx.qlogo.cn/mmopen/eytJa9K5jkpFbapudcQlAJtGrqiaFyAZHqM1qYaIuYEH7OibSLpaOnQy2LGNdia9LlorztZAH7Kl2Y8uoYvG4HcCbf18p93CVOH/0', 'name': '云朵的Bella'}, {'logo_url': 'http://wx.qlogo.cn/mmopen/JZAnwtfjE9jpia0YNm9ujBV6R8iaWpxOvTU4qBlVc8pbnnVhRiak1rp3icos3ZFWKmicALxFb6WUjLiaRKRmKyiateqLU2CUtXbJOE3/0', 'name': '雨落倾城'}, {'logo_url': 'http://wx.qlogo.cn/mmopen/icicI9MPSy2wuljEIfBdyHFYwZYxe0Ljib5ddVM7Gj6YJpuX9aIWvnZHPdccoIg3fV4sUON4Tkprar31P6Y80AibT43Xf7b0Z2z9/0', 'name': '红太狼'}]}

  _hmt.push(['_trackPageview', '/activityInviteThreeShare'])

  // 打乱数组
  var shuffle = function (a) {
    var len = a.length
    for (var i = 0; i < len - 1; i++) {
      var index = parseInt(Math.random() * (len - i))
      var temp = a[index]
      a[index] = a[len - i - 1]
      a[len - i - 1] = temp
    }
  }

  shuffle($scope.rollData.data)

  var removeRedFlag = 1
  var regTel = /^1(3|4|5|7|8)\d{9}$/
  $scope.codeText = '获取验证码'
  $scope.shareData = {}
  $scope.errorMessage = ''

  $timeout(function () {
    var $ul = $('.news_li')
    var $li = $('.news_li li').eq(0)
    var h = $li.height()
    var l = $('li', $ul).length
    $ul.append($('li', $ul).eq(0).clone())
    var i = 0

    $interval(function () {
      i++
      if (i > l) {
        i = 1
        $ul.css('top', 0)
      }
      $ul.animate({
        top: -h * i
      })
    }, 3000)
  }, 2000)

  var getUrlParam = function () {
    var requestParameters = {}

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

  var getData = function () {
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    InviteThreeShareService.getData(encodeURIComponent(invite_code.invite_code)).then(function (data) {
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

  $scope.getCode = function (phone, password) {
    if (phone === '' || phone === undefined) {
      $scope.errorMessage = '请输入手机号码'
      $('.popup-error').show()
      return false
    }
    if (!regTel.test(phone)) {
      $scope.errorMessage = '请输入正确的手机号码'
      $('.popup-error').show()
      return false
    }
    if (password === '' || password === undefined) {
      $scope.errorMessage = '请设置登录密码'
      $('.popup-error').show()
      return false
    }
    if (password.length < 6) {
      $scope.errorMessage = '请设置6位以上的登录密码'
      $('.popup-error').show()
      return false
    }
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    InviteThreeShareService.getCode(phone).then(function (data) {
      $ionicLoading.hide()
      if (data.code == 1000) {
        $('.popup-login').show()
      } else if (data.code === 0) {
        setup(60)
      } else {
        $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
        $('.popup-error').show()
      }
    })
  }

  $scope.downloadApp = function () {
    $('.popup').hide()
    if (Platform.isAndroid && !Platform.isWeixin) {
      window.location.href = 'xianjincard://com.kdlc.mcc/openapp'
      appAndroidlink()
    } else if (Platform.isIos && !Platform.isWeixin) {
      window.location.href = 'https://itunes.apple.com/app/id1156410247?mt=8'
      appIoslink()
    } else {
      window.location.href = 'https://api.xianjincard.com/download-app.html'
    }
  }

  $scope.removeRed = function (form) {
    if (form === undefined) {
      $scope.errorMessage = '请输入手机号码'
      $('.popup-error').show()
      return false
    } else {
      if (form.phone === '' || form.phone === undefined) {
        $scope.errorMessage = '请输入手机号码'
        $('.popup-error').show()
        return false
      }
      if (!regTel.test(form.phone)) {
        $scope.errorMessage = '请输入正确的手机号码'
        $('.popup-error').show()
        return false
      }
      if (form.password === '' || form.password === undefined) {
        $scope.errorMessage = '请设置登录密码'
        $('.popup-error').show()
        return false
      }
      if (form.password.length < 6) {
        $scope.errorMessage = '请设置6位以上的登录密码'
        $('.popup-error').show()
        return false
      }
      if (form.code === '' || form.code === undefined) {
        $scope.errorMessage = '验证码不能为空'
        $('.popup-error').show()
        return false
      }
    }
    if (removeRedFlag) {
      removeRedFlag = 0
      $('.remove-red').addClass('remove-red-animation')
      $timeout(function () {
        $('.remove-red').removeClass('remove-red-animation')
        removeRedFlag = 1
      }, 1500)
    }
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    InviteThreeShareService.register(form, encodeURIComponent(invite_code.invite_code)).then(function (data) {
      $ionicLoading.hide()
      if (data.code === 0) {
        $('.popup-load').show()
      } else {
        $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
        $('.popup-error').show()
      }
    })
  }

  $scope.close = function () {
    $('.popup').hide()
  }
})
