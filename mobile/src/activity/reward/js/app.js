angular.module('reward', ['credit', 'ionic', 'rewardControllers', 'rewardFactory'])

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
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    })
    $urlRouterProvider.otherwise('/')
  })

angular.module('rewardFactory', [])

  .factory('RewardService', function (Domain, $http, Platform, $location, $httpParamSerializerJQLike) {
    return {
      register: function (params) {
        var url = Domain.resolveUrl('http://credit.dahubao.com/credit-info/user-offer-reward')
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(params),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data
        })
      }
    }
  })

angular.module('rewardControllers', [])

  .controller('HomeController', function ($scope, RewardService, $ionicLoading, $location, Popup, Platform) {
    $scope.notApp = !Platform.isApp
    $scope.isShow = false;

    (function (params) {
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
      angular.extend(defaults, params)
      // console.log(JSON.stringify(obj))
      if (typeof (nativeMethod) !== 'undefined') {
        nativeMethod.shareMethod(JSON.stringify(defaults))
      }
    }({
      'share_title': '现金卡重金招募区域代理人！',
      'share_body': '5000万赏金虚位以待，寻找与众不同的你，I want you！',
      'share_url': 'https://h5.dahubao.com/activity/reward/index.html',
      'share_logo': 'http://h5.dahubao.com/activity/reward/img/share.png',
      'type': '1'
    }))
    let tag = $location.$$search.tag;

    $scope.close = function () {
      $scope.isShow = false
    }

    $scope.hold = function (text) {
      if (typeof nativeMethod !== 'undefined' && nativeMethod.copyTextMethod) {
        nativeMethod.copyTextMethod('{"text":"' + text + '","tip":"复制成功!"}')
      }
      return false
    }
    $scope.submit = function (myForm, user) {
      // console.log(myForm,user)
      if (myForm.name.$error.required) {
        Popup.alert('请输入姓名')
        return
      }

      if (myForm.phone.$error.required) {
        Popup.alert('请输入手机号')
        return
      }

      if (!myForm.phone.$valid) {
        Popup.alert('手机号错误')
        return
      }

      if (myForm.text.$error.required) {
        Popup.alert('请输入留言')
        return
      }

      tag && (user.tag = tag);

      RewardService.register(user).then(function (data) {
        // console.log(data)
        if (data.code != 0) {
          Popup.alert(data.message)
          return
        }

        $scope.content = data.message.replace('\n', '<br/>')
        $scope.isShow = true
      })
    }
  })
