angular.module('koudaiday', ['credit', 'ionic', 'koudaidayControllers', 'koudaidayFactory'])

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

angular.module('koudaidayFactory', [])

.factory('KoudaidayService', function (Domain, $http, Platform, $location) {
  return {
    fundUrl: Platform.isApp ? (Platform.isIos ? 'kdlc.app.launch://?skip_code=20104' : Platform.isAndroid ? 'schemekdlc://?skip_code=20104' : '') : 'http://m.koudailc.com',
    getLoginUrl: function () {
      var loginUrl = Domain.resolveUrl('http://m.koudailc.com/user/user-login?redirect_url=' + $location.$$absUrl)
      return Platform.isApp ? 'wap2app://app.launch/login/applogin' : loginUrl.replace('#', '%23')
    },
    getData: function () {
      var url = Domain.resolveUrl('http://api.dahubao.com/act/kd-share-profit')
      return $http.get(url).then(function (response) {
        return response.data
      })
    }
  }
})

angular.module('koudaidayControllers', [])

.controller('HomeController', function ($scope, KoudaidayService, $ionicLoading) {
  var strtime = '2016/07/26 00:00:00'
  var target = new Date(strtime).getTime()
  var current = new Date().getTime()
  var index = (current >= target) ? 1 : 0

  $scope.url = {
    fundUrl: KoudaidayService.fundUrl,
    loginUrl: KoudaidayService.getLoginUrl()
  }

  KoudaidayService.getData().then(function (data) {
    $scope.data = data
  })
})
