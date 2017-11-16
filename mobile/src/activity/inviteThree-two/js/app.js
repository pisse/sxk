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

  $stateProvider.state('share', {
    url: '/',
    templateUrl: 'templates/share.html',
    controller: 'InviteThreeShareController'
  })
  $urlRouterProvider.otherwise('/')
})

angular.module('InviteThreeFactory', [])

.factory('InviteThreeShareService', function (Domain, $http, Platform, $location, $httpParamSerializerJQLike) {
  return {
    getData: function (inviteCode) {
      var url = Domain.resolveUrl('http://credit.dahubao.com/credit-invite/get-user-info?invite_code=' + inviteCode)
      return $http.get(url).then(function (response) {
        return response.data
      })
    },
    getCode: function (phone) {
      var url = Domain.resolveUrl('http://credit.dahubao.com/credit-user/reg-get-code')
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
      var url = Domain.resolveUrl('http://credit.dahubao.com/credit-user/register?appMarket=' + activity_id)
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

.controller('InviteThreeShareController', function ($scope, InviteThreeShareService, $ionicLoading, $state, Platform, Domain, $timeout) {
  _hmt.push(['_trackPageview', '/activityInviteThreeShareTwo'])

  $scope.codeText = '获取验证码'
  $scope.errorMessage = ''
  $scope.shareData = {}
  $scope.score = Math.round(Math.random() * 20) + 70
  $scope.percentage = $scope.score + 5 + Math.round(Math.random() * 4)

  var regTel = /^1(3|4|5|7|8)\d{9}$/

  $('.other label i').show()

  $scope.agreeAgreement = function () {
    if (!$('.other label i').is(':visible')) {
      $('.other label i').show()
    } else {
      $('.other label i').hide()
    }
  }

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
            window.location = 'https://credit.dahubao.com/download-app.html'
          }
        }, 500)
      }, 500)
    }
  }

  $scope.downloadApp = function () {
    $('.popup').hide()
    if (Platform.isAndroid && !Platform.isWeixin) {
      window.location.href = 'dahubao://com.kdlc.mcc/openapp'
      appAndroidlink()
    } else if (Platform.isIos && !Platform.isWeixin) {
      window.location.href = 'https://itunes.apple.com/app/id1156410247?mt=8'
      appIoslink()
    } else {
      window.location.href = 'https://api.dahubao.com/download-app.html'
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

  $scope.submitTest = function (form) {
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
      if (!$('.other label i').is(':visible')) {
        $scope.errorMessage = '请选择同意《现金白卡使用协议》'
        $('.popup-error').show()
        return false
      }
    }
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    InviteThreeShareService.register(form, encodeURIComponent(invite_code.invite_code)).then(function (data) {
      $ionicLoading.hide()
      if (data.code === 0) {
        $('.popup-intimacy').show()
      } else {
        $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
        $('.popup-error').show()
      }
    })
  }

  $scope.receive = function () {
    $('.popup').hide()
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    $timeout(function () {
      $ionicLoading.hide()
      $('.popup-red').show()
    }, 1000)
  }

  $scope.close = function () {
    $('.popup').hide()
  }
})
