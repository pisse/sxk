angular.module('ionic')
  .directive('kdPane', function () {
    return {
      restrict: 'E',
      link: function (scope, element) {
        element.addClass('pane')
        element.addClass('kd-pane')
      }
    }
  })

angular.module('credit', [])
  .directive('downloadPopup', function (Platform, $timeout) {
    return {
      restrict: 'E',
      scope: {},
      replace: true,
      template: '<div ng-show="isShow" ng-click="download()" class="download-popup">\
                   <a href="" class="close" ng-click="close($event)"></a>\
                   <img alt="" src="//h5.xianjincard.com/credit/img/download-logo.png"/>\
                   <div><p>下载即享极速借款<br/>被拒最高赔偿<i>50元</i></p></div>\
                 </div>',
      link: function (scope, element, attrs) {
        scope.isShow = !Platform.isApp
        scope.close = function ($event) {
          $event.stopPropagation()
          scope.isShow = false
        }
        scope.download = function () {
          window.location = 'https://credit.xianjincard.com/download-app.html'
        }
      }
    }
  })
  .directive('popupPassword', function ($timeout) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        title: '=',
        isHref: '=',
        isShow: '=',
        isError: '=',
        sendHandler: '&'
      },
      template: '<div class="popup" id="defray" ng-show="isShow">\
                  <div class="overlay"></div>\
                  <div class="dialog pay">\
                    <span class="close" ng-click="close()"></span>\
                    <h2>{{title}}</h2>\
                    <p class="clearfix">\
                      <i></i> <i></i> <i></i> <i></i> <i></i> <i></i>\
                      <input type="tel" value="" autofocus>\
                    </p>\
                    <p ng-show="isError" class="error-tips">密码错误</p>\
                    <a ng-show="isHref" nav-direction="forward" href="#/my/findpaypassword?state=loan">忘记密码?</a>\
                  </div>\
                </div>',
      link: function (scope, element, attrs) {
        scope.close = function () {
          scope.isShow = false
        }
        scope.$watch('isShow', function (val) {
          if (val) {
            $timeout(function () {
              scope.isError = false
              $('#defray .error-tips').text('密码错误')
              $('#defray input').val('')
              $('#defray i').removeClass('point')
              $('#defray input').focus()
            }, 0)
          }
        })
        scope.$watch(function () {
          return element
        }, function (elements) {
          $('#defray div.overlay').click(function(e){
            e.stopPropagation();
            $('#defray input').blur()
          })
          var interval = null
          $('#defray p').click(function (event) {
            $('#defray input').focus()
          })
          $('#defray input').focus(function () {
            var interval = setInterval(function () {
              if (document.activeElement.nodeName == 'INPUT') {
                var top = $('#defray .dialog').position.top
                if (top <= 0) {
                  return;
                }
                document.body.scrollTop = 0
                $('#defray .dialog').animate({top: 0, marginTop: 0}, 100)
              } else {
                $('#defray .dialog').attr('style', '')
                if (interval) {
                  clearInterval(interval)
                  interval = null
                }
              }
            }, 200)
          })
          $('#defray input').bind('input', function (event) {
            var val = $(this).val()
            $('#defray i').removeClass('point')
            $('#defray i').slice(0, val.length).addClass('point')
            scope.isError = false
            scope.$apply()
            if (val.length >= 6) {
              $(this).val(val.slice(0, 6))
              scope.sendHandler({password: $(this).val()})
            }
          })
        })
      }
    }
  })
  .directive('textScroll', function ($timeout) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        items: '=',
        interval: '='
      },
      template: '<ul class="text-scroll"><li ng-repeat="item in items track by $index">{{item}}</li></ul>',
      link: function (scope, element, attrs) {
        scope.$watch('items', function (val) {
          if (val) {
            scope.items.push(scope.items[0])
          }
        })

        scope.$watch(function () {
          return element[0].children[0]
        }, function (elem) {
          try {
            var l = element[0].children.length
            var h = elem.offsetHeight
            var i = 0
            var t = scope.interval || 1000
            var setup = function () {
              i++
              if (i >= l) {
                i = 1
                element.css('top', 0)
              }
              $(element).animate({
                'top': -h * i
              })
            }
            setInterval(setup, t)
          } catch (e) {}
        })
      }
    }
  })

  .factory('Domain', function ($location) {
    var host = $location.$$host
    var reg = /(?:http(?:s)?:\/\/)?(?:www\.)?(.*?)\./
    var regR = /https?:\/\/(?:[^/]+\.)?([^./]+\.(?:com))(?:$|\/)/
    var m = host.match(reg)

    var domain = {
      credit: $location.$$protocol + '://' + $location.$$host + '/credit/web/',
      api: $location.$$protocol + '://' + $location.$$host + '/frontend/web/',
      h5: $location.$$protocol + '://' + $location.$$host + '/h5/mobile/web/',
      h: $location.$$protocol + '://' + $location.$$host + ':8000/'
    }

    if (m !== null) {
      if (m[1] === 'h5') {
        domain = {
          credit: $location.$$protocol + '://credit.xianjincard.com/',
          api: $location.$$protocol + '://api.xianjincard.com/',
          h5: $location.$$protocol + '://h5.xianjincard.com/',
          h: $location.$$protocol + '://h.xianjincard.com/'
        }
      }

      if (m[1] === 'pre-h5') {
        domain = {
          credit: $location.$$protocol + '://pre-credit.xianjincard.com/',
          api: $location.$$protocol + '://pre-api.xianjincard.com/',
          h5: $location.$$protocol + '://pre-h5.xianjincard.com/',
          h: $location.$$protocol + '://pre-h.xianjincard.com/'
        }
      }

      if (m[1] === 'test-h5') {
        domain = {
          credit: $location.$$protocol + '://test-credit.xianjincard.com/',
          api: $location.$$protocol + '://test-api.xianjincard.com/',
          h5: $location.$$protocol + '://test-h5.xianjincard.com/',
          h: $location.$$protocol + '://test-h.xianjincard.com/'
        }
      }

      if (host == '192.168.39.214') {
        domain = {
          credit: $location.$$protocol + '://' + $location.$$host + '/kdkj/credit/web/',
          api: $location.$$protocol + '://' + $location.$$host + '/kdkj/frontend/web/',
          h5: $location.$$protocol + '://' + $location.$$host + '/kdkj/h5/mobile/web/'
        }
      }

      if (host == '121.42.12.69') {
        domain = {
          credit: $location.$$protocol + '://' + $location.$$host + '/koudai/kdkj/credit/web/',
          api: $location.$$protocol + '://' + $location.$$host + '/koudai/kdkj/frontend/web/',
          h5: $location.$$protocol + '://' + $location.$$host + '/koudai/kdkj/h5/mobile/web/'
        }
      }
    }

    return {
      resolveUrl: function (url) {
        var arr = url.match(reg)
        if (domain[arr[1]]) {
          return url.replace(regR, domain[arr[1]])
        }
        return url.replace(/^https?/, $location.$$protocol)
      },
      domain: domain
    }
  })

  .factory('Platform', function ($location) {
    function param (name) {
      // Check if param is set in url#hash
      if ($location.search()[name] !== void 0) {
        return $location.seach()[name]
      }
      // Otherwise check url params
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
        results = regex.exec(location.search)
      return results === null ? void 0 : decodeURIComponent(results[1].replace(/\+/g, ' '))
    }
    var u = navigator.userAgent
    var versions = u.split('/')
    return {
      getParamByName: param,
      appVersion: versions[versions.length - 1],
      isApp: u.indexOf('kdxj') === -1 ? false : true,
      isAndroid: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, // android终端
      isIos: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端])
      isWeixin: u.indexOf('MicroMessenger') > -1, // 是否微信 （2015-01-22新增）
      isQQ: u.match(/\sQQ/i) == ' qq' // 是否QQ
    }
  })

  .factory('Popup', function ($ionicPopup) {
    function alert (message, callback) {
      $ionicPopup.alert({
        title: '提示',
        template: message,
        okText: '确定',
        okType: 'button-credit'
      }).then(function (res) {
        if (typeof callback === 'function') callback()
      })
    }

    var confirm = function (data) {
      $ionicPopup.confirm({
        title: data.title || '确认',
        template: data.content,
        cancelText: '取消',
        cancelType: 'button-credit-gray',
        okText: '确定',
        okType: 'button-credit'
      }).then(function (res) {
        if (typeof data.callback === 'function') {
          data.callback(res)
        }
        if (res) {
          if (typeof data.ok === 'function') {
            data.ok()
          }
        } else {
          if (typeof data.cance === 'function') {
            data.cance()
          }
        }
      })
    }

    return {
      alert: alert,
      confirm: confirm
    }
  })

  .factory('HttpInterceptor', function ($q, $injector) {
    var httpInterceptor = {
      'responseError': function (response) {
        return $q.reject(response)
      },
      'response': function (response) {
        // 服务器错误
        if (response.status !== 200) {
          var Popup = $injector.get('Popup')
          var $ionicLoading = $injector.get('$ionicLoading')
          $ionicLoading.hide()
          Popup.alert('请求不成功')
          return $q.reject(response)
        }
        // 接口异常
        if (response.data.code !== undefined && response.data.code == -2) {
          // console.log(response.data)
          var Popup = $injector.get('Popup')
          var $ionicLoading = $injector.get('$ionicLoading')
          $ionicLoading.hide()
          Popup.alert(response.data.message, function () {
            var $state = $injector.get('$state')
            $state.go('login')
          })
          return $q.reject(response)
        }
        // console.log('http interceptor response', response);
        return response
      },
      'request': function (config) {
        // m版请求标识
        if (!/\.html/.test(config.url)) {
          // config.url += /\?/.test(config.url) ? '&userOrigin=m' : '?userOrigin=m'
        }
        return config
      },
      'requestError': function (config) {
        return $q.reject(config)
      }
    }
    return httpInterceptor
  })

  .filter('isEmpty', function () {
    var bar
    return function (obj) {
      for (bar in obj) {
        if (obj.hasOwnProperty(bar)) {
          return false
        }
      }
      return true
    }
  })

  .filter('trusted', function ($sce) {
    return function (html) {
      return $sce.trustAsHtml(html)
    }
  })

angular.module("mobileControllers", [])
  .controller("TestController", function($scope) {
    $scope.test = "abc";
  })
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
      var url = Domain.resolveUrl('http://api.xianjincard.com/act/kd-share-profit')
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

angular.module('crossYear', ['credit', 'ionic', 'CrossYearControllers', 'CrossYearFactory'])

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

  $stateProvider.state('team', {
    url: '/',
    templateUrl: 'templates/team.html',
    controller: 'TeamController'
  })
  $urlRouterProvider.otherwise('/')
})

angular.module('CrossYearFactory', [])

.factory('TeamService', function (Domain, $http, Platform, $location, $httpParamSerializerJQLike) {
  return {
    getData: function (sign) {
      var url = Domain.resolveUrl('http://credit.xianjincard.com/jigsaw-puzzle/puzzle?sign=' + sign)
      return $http.get(url).then(function (response) {
        return response.data
      })
    },
    getCode: function (phone) {
      var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/send-invite-code')
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
    reRegister: function (phone, code) {
      var activity_id = 'jigsaw'
      var url = Domain.resolveUrl('http://credit.xianjincard.com/jigsaw-puzzle/re-register?appMarket=' + activity_id)
      return $http({
        method: 'POST',
        url: url,
        data: $httpParamSerializerJQLike({phone: phone, code: code}),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(function (response) {
        return response.data
      })
    },
    luckDraw: function (sign) {
      var url = Domain.resolveUrl('http://credit.xianjincard.com/jigsaw-puzzle/puzzle?sign=' + sign)
      return $http({
        method: 'POST',
        url: url,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(function (response) {
        return response.data
      })
    },
    createJigsaw: function () {
      var url = Domain.resolveUrl('http://credit.xianjincard.com/jigsaw-puzzle/create-jigsaw')
      return $http({
        method: 'POST',
        url: url,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(function (response) {
        return response.data
      })
    }
  }
})

angular.module('CrossYearControllers', [])

.controller('TeamController', function ($scope, TeamService, $ionicLoading, $state, $timeout, $interval, Popup, Domain) {
  $scope.firstJigsaw = true      // true表示首次拼图,显示输入手机的dialog
  $scope.diglogFlag = 1
  $scope.codeText = '获取验证码'
  $scope.sendDisabled = false
  $scope.codeFlag = false
  $scope.callFriend = false
  $scope.binding = true
  $scope.imageFlag = false

  $scope.teamData = {}
  $scope.jigData = {'name': 'XXXX'}
  $scope.prizeData = {}

  $scope.timeHours = '00'
  $scope.timeMins = '00'
  $scope.timeSecs = '00'
  $scope.finalHours = '00'
  $scope.finalMins = '00'
  $scope.finalSecs = '00'
  $scope.sumPeople = 0
  $scope.sumJigsaw = 4
  var loadingFlag = 1    // 首次加载数据

  function getUrlParam (name) {
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

  $scope.sign = getUrlParam()

  $scope.jigsaw = {
    'one': '',
    'two': '',
    'three': '',
    'four': ''
  }

  var setTime = function (time, l) {
    $timeout(function () {
      var now = time * 1000
      timeConversion(now)
      time = time + 1
      setTime(time, 1000)
    }, l)
  }

  var timeConversion = function (time) {
    $scope.timeHours = parseInt((time / 1000) / 3600) + ''
    var mins = time - ($scope.timeHours * 1000 * 3600)
    $scope.timeMins = parseInt(mins / 60000) + ''
    $scope.timeSecs = parseInt((mins % 60000) / 1000) + ''
    if ($scope.timeHours.length == 1) {
      $scope.timeHours = '0' + $scope.timeHours
    }
    if ($scope.timeMins.length == 1) {
      $scope.timeMins = '0' + $scope.timeMins
    }
    if ($scope.timeSecs.length == 1) {
      $scope.timeSecs = '0' + $scope.timeSecs
    }
  }

  var puzzleJigsaw = function (pics) {
    for (var i in pics) {
      if (pics[i] == 1) {
        $scope.jigsaw.one = '1'
      }
      if (pics[i] == 2) {
        $scope.jigsaw.two = '2'
      }
      if (pics[i] == 3) {
        $scope.jigsaw.three = '3'
      }
      if (pics[i] == 4) {
        $scope.jigsaw.four = '4'
      }
    }
  }

  var getData = function () {
    if (loadingFlag == 1) {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    }
    TeamService.getData($scope.sign['sign']).then(function (data) {
      if (loadingFlag == 1) {
        $ionicLoading.hide()
      }
      $scope.teamData = data
      if ($scope.teamData.code == 1) {
        $scope.sumJigsaw = 4
        $scope.jigData = data.data.jig_data
        if ($scope.jigData.img == '' || $scope.jigData.img == null) {
          $scope.imageFlag = false
        } else {
          $scope.imageFlag = true
        }
        if ($scope.jigData.use_time != 0 && $scope.jigData.total_time == 0) {
          setTime($scope.jigData.use_time)
        } else if ($scope.jigData.total_time != 0) {
          timeConversion($scope.jigData.total_time * 1000)
        }
        if ($scope.teamData.data.is_own == 1) {
          $scope.callFriend = true
        } else {
          $scope.callFriend = false
        }
        $scope.sumPeople = $scope.teamData.data.lists.length
        $scope.sumJigsaw = $scope.sumJigsaw - $scope.teamData.data.pics.length
        puzzleJigsaw($scope.teamData.data.pics)
        if ($scope.sumJigsaw == 0) {
          $('.card-overlay').css('display', 'none')
          $('.jigsawComplete').css('display', 'block')
          $('.help').css('visibility', 'hidden')
          $('.jigsawComplete').addClass('jigsawCompleteAnimation')
          $scope.finalHours = $scope.timeHours
          $scope.finalMins = $scope.timeMins
          $scope.finalSecs = $scope.timeSecs
        }
        if (loadingFlag == 1) {
          if ($scope.teamData.data.validate.code == -10) {
            $scope.errorMessage = '本活动已结束，请关注平台其他活动'
            $scope.firstJigsaw = false
            $scope.diglogFlag = 6
            $('.popup-message').css('display', 'block')
          } else if ($scope.teamData.data.validate.code == -11) {
            $scope.errorMessage = '活动12月28日开启，敬请期待'
            $scope.firstJigsaw = false
            $scope.diglogFlag = 6
            $('.popup-message').css('display', 'block')
          }
          loadingFlag = 2
        }
      } else if ($scope.teamData.code == -1) {
        var sharl_url = 'http://h5.xianjincard.com/activity/cross-year-two/index.html?sign=' + $scope.sign['sign']
        var sharl_url_domain = Domain.resolveUrl(sharl_url)
        var url = 'http://credit.xianjincard.com/wx/user-auth-template?redirectUrl=' + sharl_url_domain
        var wx_url = Domain.resolveUrl(url)
        window.location.href = wx_url
        loadingFlag = 2
      } else {
        $scope.firstJigsaw = false
        $scope.diglogFlag = 6
        $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
        loadingFlag = 2
        $('.popup-message').css('display', 'block')
      }
    })
  }

  getData()
  $interval(function () {
    getData()
  }, 20000)

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

  $scope.showRule = function () {
    var url = 'http://h5.xianjincard.com/activity/cross-year/index.html'
    var forward_url = Domain.resolveUrl(url)
    window.location.href = forward_url
  }

  $scope.closePop = function () {
    $('.popup').css('display', 'none')
  }

  $scope.startJigsaw = function () {
    $scope.firstJigsaw = true
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    TeamService.createJigsaw().then(function (data) {
      $ionicLoading.hide()
      if (data.code == 1) {
        if (data.data.validate.code == -10) {
          $scope.errorMessage = '本活动已结束，请关注平台其他活动'
          $scope.firstJigsaw = false
          $scope.diglogFlag = 6
          $('.popup-message').css('display', 'block')
        } else if (data.data.validate.code == -11) {
          $scope.errorMessage = '活动12月28日开启，敬请期待'
          $scope.firstJigsaw = false
          $scope.diglogFlag = 6
          $('.popup-message').css('display', 'block')
        } else {
          var url = 'http://h5.xianjincard.com/activity/cross-year-two/index.html?sign=' + data.data.sign
          var forward_url = Domain.resolveUrl(url)
          window.location.href = forward_url
        }
      } else if (data.code == -1) {
        $scope.binding = false
        $('.popup-message').css('display', 'block')
      } else {
        $scope.firstJigsaw = false
        $scope.diglogFlag = 6
        $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
        $('.popup-message').css('display', 'block')
      }
    })
  }

  $scope.bindingWx = function (form) {
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    TeamService.reRegister(form.phone, form.code).then(function (data) {
      $ionicLoading.hide()
      if (data.code == 1) {
        $scope.firstJigsaw = false
        $scope.diglogFlag = 5
        $('.popup-message').css('display', 'block')
      } else if (data.code == -1) {
        $scope.codeFlag = true
      } else {
        $scope.firstJigsaw = false
        $scope.diglogFlag = 6
        $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
        $('.popup-message').css('display', 'block')
      }
    })
  }

  $scope.callHelp = function () {
    var validate_code = $scope.teamData.data.validate.code
    if (validate_code == 1) {
      $('.popup-share').css('display', 'block')
    } else if (validate_code == -10) {
      $scope.errorMessage = '本活动已结束，请关注平台其他活动'
      $scope.firstJigsaw = false
      $scope.diglogFlag = 6
      $('.popup-message').css('display', 'block')
    } else {
      $scope.errorMessage = '活动12月28日开启，敬请期待'
      $scope.firstJigsaw = false
      $scope.diglogFlag = 6
      $('.popup-message').css('display', 'block')
    }
  }

  $scope.drawCard = function () {
    $scope.binding = true
    var wx_info = $scope.teamData.data.wx_info
    var validate_code = $scope.teamData.data.validate.code
    if (validate_code == 1) {
      if (wx_info.phone != '' || wx_info.uid != 0) {
        $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
        TeamService.luckDraw($scope.sign['sign']).then(function (data) {
          $ionicLoading.hide()
          $scope.firstJigsaw = false
          if (data.code == 1) {
            if (data.data.amount != '0') {
              $scope.diglogFlag = 1
              $scope.prizeData.pic = data.data.pic
              $scope.prizeData.amount = data.data.amount
              getData()
            } else {
              $scope.diglogFlag = 3
              $scope.prizeData.pic = data.data.pic
              getData()
            }
            $('.popup-message').css('display', 'block')
          } else if (data.code == 2) {
            $('.popup-message').css('display', 'block')
            $scope.diglogFlag = 2
          } else if (data.code == -22) {
            $('.popup-message').css('display', 'block')
            $scope.diglogFlag = 4
          } else {
            $scope.diglogFlag = 6
            $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
            $('.popup-message').css('display', 'block')
          }
        })
      } else {
        $scope.firstJigsaw = true
        $('.popup-message').css('display', 'block')
      }
    } else if (validate_code == -10) {
      $scope.errorMessage = '本活动已结束，请关注平台其他活动'
      $scope.firstJigsaw = false
      $scope.diglogFlag = 6
      $('.popup-message').css('display', 'block')
    } else {
      $scope.errorMessage = '活动12月28日开启，敬请期待'
      $scope.firstJigsaw = false
      $scope.diglogFlag = 6
      $('.popup-message').css('display', 'block')
    }
  }

  $scope.receiveRed = function (form) {
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    TeamService.reRegister(form.phone, form.code).then(function (data) {
      $scope.register = data
      if ($scope.register.code == 1) {
        TeamService.luckDraw($scope.sign['sign']).then(function (data) {
          $ionicLoading.hide()
          $scope.firstJigsaw = false
          $('.popup-message').css('display', 'none')
          if (data.code == 1) {
            if (data.data.amount != '0') {
              $scope.diglogFlag = 1
              $scope.prizeData.pic = data.data.pic
              $scope.prizeData.amount = data.data.amount
              getData()
            } else {
              $scope.diglogFlag = 3
              $scope.prizeData.pic = data.data.pic
              getData()
            }
            $('.popup-message').css('display', 'block')
          } else if (data.code == 2) {
            $('.popup-message').css('display', 'block')
            $scope.diglogFlag = 2
          } else if (data.code == -22) {
            $('.popup-message').css('display', 'block')
            $scope.diglogFlag = 4
          } else {
            $scope.diglogFlag = 6
            $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
            $('.popup-message').css('display', 'block')
          }
        })
      } else if ($scope.register.code == -1) {
        $ionicLoading.hide()
        $scope.firstJigsaw = true
        $scope.codeFlag = true
      } else {
        $ionicLoading.hide()
        $scope.firstJigsaw = false
        $scope.diglogFlag = 6
        $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
        $('.popup-message').css('display', 'block')
      }
    })
  }

  $scope.lookDrawRed = function () {
    var clickedAt = +new Date()
    window.location.href = 'https://api.xianjincard.com/download-app.html'
  }

  $scope.setCode = function () {
    $scope.codeFlag = false
  }

  $scope.getCode = function (phone) {
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    TeamService.getCode(phone).then(function (data) {
      $ionicLoading.hide()
      if (data.code == 0) {
        $scope.sendDisabled = true
        setup(60)
      } else {
        Popup.alert(data.message)
      }
    })
  }
})

angular.module('crossYear', ['credit', 'ionic', 'CrossYearControllers', 'CrossYearFactory'])

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

angular.module('CrossYearFactory', [])

.factory('CrossYearService', function (Domain, $http, Platform, $location) {
  return {
    getData: function () {
      var url = Domain.resolveUrl('http://credit.xianjincard.com/jigsaw-puzzle/activate')
      return $http.get(url).then(function (response) {
        return response.data
      })
    },
    createJigsaw: function () {
      var url = Domain.resolveUrl('http://credit.xianjincard.com/jigsaw-puzzle/create-jigsaw')
      return $http({
        method: 'POST',
        url: url,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(function (response) {
        return response.data
      })
    }
  }
})
/* .factory('TeamService', function(Domain, $http, Platform, $location, $httpParamSerializerJQLike) {
    return {
        getData: function(sign) {
            var url = Domain.resolveUrl('http://credit.xianjincard.com/jigsaw-puzzle/puzzle?sign=' + sign);
            return $http.get(url).then(function(response){
                return response.data;
            });
        },
        getCode: function(phone) {
            var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/send-invite-code');
            return $http({
                method: 'POST',
                url: url,
                data: $httpParamSerializerJQLike({phone:phone}),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            }).then(function(response) {
                return response.data;
            });
        },
        reRegister: function(phone,code) {
            var activity_id = 'jigsaw';
            var url = Domain.resolveUrl('http://credit.xianjincard.com/jigsaw-puzzle/re-register?appMarket=' + activity_id);
            console.log(url);
            return $http({
                method: 'POST',
                url: url,
                data: $httpParamSerializerJQLike({phone:phone,code:code}),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            }).then(function(response) {
                return response.data;
            });
        },
        luckDraw: function(sign) {
            var url = Domain.resolveUrl('http://credit.xianjincard.com/jigsaw-puzzle/puzzle?sign=' + sign);
            return $http({
                method: 'POST',
                url: url,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            }).then(function(response) {
                return response.data;
            });
        },
        createJigsaw: function() {
            var url = Domain.resolveUrl('http://credit.xianjincard.com/jigsaw-puzzle/create-jigsaw');
            return $http({
                method: 'POST',
                url: url,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            }).then(function(response) {
                return response.data;
            });
        }
    };
}); */

angular.module('CrossYearControllers', [])

.controller('HomeController', function ($scope, CrossYearService, $ionicLoading, $state, Platform, Domain) {
  $scope.homeData = {}
  $scope.rankingFlag = false
  $scope.popupRuleFlag = true
  $scope.sign = ''
  $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
  CrossYearService.getData().then(function (data) {
    $ionicLoading.hide()
    if (data.code !== 1) {
      $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
      $('.popup-error').css('display', 'block')
      return
    }
    if (data.data.validate.code == -10) {
      $scope.errorMessage = '本活动已结束，请关注平台其他活动'
      $('.popup-error').css('display', 'block')
    } else if (data.data.validate.code == -11) {
      $scope.errorMessage = '活动12月28日开启，敬请期待'
      $('.popup-error').css('display', 'block')
    }
    $scope.homeData = data.data
  })

  $scope.showRule = function () {
    $('.popup-rule').css('display', 'block')
  }

  $scope.closeRule = function () {
    $('.popup-rule').css('display', 'none')
  }

  $scope.closePop = function () {
    $('.popup').css('display', 'none')
  }

  $scope.initiateJigsaw = function () {
    if ($scope.homeData.is_login == 0) {
      $scope.popupRuleFlag = false
      $('.popup-message').css('display', 'block')
    } else {
      $scope.popupRuleFlag = true
      $('.popup-message').css('display', 'block')
    }
  }

  $scope.login = function () {
    if (Platform.isApp ? true : false) {
      $('.popup').css('display', 'none')
      window.location.href = 'koudaikj://app.launch/login/applogin'
    } else {
      $('.popup').css('display', 'none')
      var login_url = 'http://h5.xianjincard.com/mobile/index.html#/login?appMarket=jigsaw&redirect_url='
      var url = Domain.resolveUrl(login_url)
      window.location.href = url + encodeURIComponent(location.href)
    }
  }

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

  var startJigsaw = function (sign, e) {
    if (Platform.isApp ? true : false) {
      e.preventDefault()
      var share_url = 'http://h5.xianjincard.com/activity/cross-year-two/index.html?sign=' + sign
      var share_url_domain = Domain.resolveUrl(share_url)
      var url = 'http://credit.xianjincard.com/wx/user-auth-template?redirectUrl=' + encodeURIComponent(share_url_domain)
      var wx_url = Domain.resolveUrl(url)
      var img_url = Domain.resolveUrl('http://h5.xianjincard.com/activity/cross-year/img/cross-year-21.png')
      nativeShare('帮我抽个奖，挺急的，在线等！', '紧急求助！速度帮我完成拼图，和我一起赢取8888元现金！', wx_url, img_url, 0)
    } else {
      var url = 'http://h5.xianjincard.com/activity/cross-year-two/index.html?sign=' + sign
      var forward_url = Domain.resolveUrl(url)
      window.location.href = forward_url
    }
  }

  $('#startJigsaw').click(function (e) {
    if ($scope.sign == '' || $scope.sign == null) {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
      CrossYearService.createJigsaw().then(function (data) {
        $ionicLoading.hide()
        if (data.code == 1) {
          startJigsaw(data.data.sign, e)
          $scope.sign = data.data.sign
        } else if (data.code == -10) {
          $scope.errorMessage = '本活动已结束，请关注平台其他活动'
          $('.popup-message').hide()
          $('.popup-error').css('display', 'block')
        } else if (data.code == -11) {
          $scope.errorMessage = '活动12月28日开启，敬请期待'
          $('.popup-message').hide()
          $('.popup-error').css('display', 'block')
        } else {
          $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
          $('.popup-message').hide()
          $('.popup-error').css('display', 'block')
        }
      })
    } else {
      startJigsaw($scope.sign, e)
    }
  })
})

/* .controller("TeamController", function($scope, TeamService, $ionicLoading, $state, $timeout, $interval, Popup, Domain){
    $scope.firstJigsaw = true;      //true表示首次拼图,显示输入手机的dialog
    $scope.diglogFlag = 1;
    $scope.codeText = "获取验证码";
    $scope.sendDisabled = false;
    $scope.codeFlag = false;
    $scope.callFriend = false;
    $scope.binding = true;
    $scope.imageFlag = false;

    $scope.teamData = {};
    $scope.jigData = {"name":"XXXX"};
    $scope.prizeData = {};

    $scope.timeHours = "00";
    $scope.timeMins = "00";
    $scope.timeSecs = "00";
    $scope.finalHours = "00";
    $scope.finalMins = "00";
    $scope.finalSecs = "00";
    $scope.sumPeople = 0;
    $scope.sumJigsaw = 4;
    var loadingFlag = 1;    //首次加载数据

    function getUrlParam(name) {
        var requestParameters = new Object();

        var url= window.location.href;
        var urlArr = url.split('?');
        if(urlArr[1]){
            var urlParameters = urlArr[1].split('#')[0];
            if (urlParameters.indexOf('?') == -1)
            {
                var parameters = decodeURI(urlParameters);
                parameterArray = parameters.split('&');
                for (var i = 0; i < parameterArray.length; i++) {
                    requestParameters[parameterArray[i].split('=')[0]] = (parameterArray[i].split('=')[1]);
                }
            }
        }
        return requestParameters;
    }

    $scope.sign = getUrlParam();

    $scope.jigsaw = {
        "one" : "",
        "two" : "",
        "three" : "",
        "four" : ""
    };

    var setTime = function(time,l) {
        $timeout(function(){
            var now = new Date() - time*1000;
            timeConversion(now);
            setTime(time,1000);
        },l);
    }

    var timeConversion = function(time){
        $scope.timeHours = parseInt((time/1000)/3600)+"";
        var mins = time - ($scope.timeHours * 1000 * 3600);
        $scope.timeMins = parseInt(mins/60000)+"";
        $scope.timeSecs = parseInt((mins%60000)/1000)+"";
        if($scope.timeHours.length == 1) {
            $scope.timeHours = "0" + $scope.timeHours;
        }
        if($scope.timeMins.length == 1) {
            $scope.timeMins = "0" + $scope.timeMins;
        }
        if($scope.timeSecs.length == 1) {
            $scope.timeSecs = "0" + $scope.timeSecs;
        }
    }

    var puzzleJigsaw = function(pics) {
        for(var i in pics) {
            if(pics[i] == 1) {
                $scope.jigsaw.one = "1";
            }
            if(pics[i] == 2) {
                $scope.jigsaw.two = "2";
            }
            if(pics[i] == 3) {
                $scope.jigsaw.three = "3";
            }
            if(pics[i] == 4) {
                $scope.jigsaw.four = "4";
            }
        }
    }

   var getData = function() {
        if(loadingFlag == 1) {
            $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
        }
        TeamService.getData($scope.sign['sign']).then(function(data){
            if(loadingFlag == 1) {
                $ionicLoading.hide();
            }
            $scope.teamData = data;
            if($scope.teamData.code == 1) {
                $scope.sumJigsaw = 4;
                $scope.jigData = data.data.jig_data;
                if("" == $scope.jigData.img  || null == $scope.jigData.img) {
                    $scope.imageFlag = false;
                } else {
                    $scope.imageFlag = true;
                }
                if($scope.jigData.start_time != 0 && $scope.jigData.total_time == 0) {
                    setTime($scope.jigData.start_time);
                } else if($scope.jigData.total_time != 0) {
                    timeConversion($scope.jigData.total_time * 1000);
                }
                if($scope.teamData.data.is_own == 1) {
                    $scope.callFriend = true;
                } else {
                    $scope.callFriend = false;
                }
                $scope.sumPeople = $scope.teamData.data.lists.length;
                $scope.sumJigsaw = $scope.sumJigsaw - $scope.teamData.data.pics.length;
                puzzleJigsaw($scope.teamData.data.pics);
                if($scope.sumJigsaw == 0) {
                    $(".card-overlay").css("display", "none");
                    $(".jigsawComplete").css("display", "block");
                    $(".help").css("visibility", "hidden");
                    $(".jigsawComplete").addClass("jigsawCompleteAnimation");
                    $scope.finalHours = $scope.timeHours;
                    $scope.finalMins = $scope.timeMins;
                    $scope.finalSecs = $scope.timeSecs;
                }
                if(loadingFlag == 1) {
                    if($scope.teamData.data.validate.code == -10) {
                        $scope.errorMessage = "本活动已结束，请关注平台其他活动";
                        $scope.firstJigsaw = false;
                        $scope.diglogFlag = 6;
                        $(".popup-message").css("display", "block");
                    } else if($scope.teamData.data.validate.code == -11) {
                        $scope.errorMessage = "活动12月28日开启，敬请期待";
                        $scope.firstJigsaw = false;
                        $scope.diglogFlag = 6;
                        $(".popup-message").css("display", "block");
                    }
                    loadingFlag = 2;
                }
            } else if($scope.teamData.code == -1) {
                var sharl_url = "http://h5.xianjincard.com/activity/cross-year/index.html?sign=" + $scope.sign['sign'] + "%23/team";
                var sharl_url_domain = Domain.resolveUrl(sharl_url);
                var url = "http://credit.xianjincard.com/wx/user-auth-template?redirectUrl=" + sharl_url_domain ;
                var wx_url = Domain.resolveUrl(url);
                alert(wx_url);
                window.location.href = wx_url;
                loadingFlag = 2;
            }
            else {
                $scope.firstJigsaw = false;
                $scope.diglogFlag = 6;
                $scope.errorMessage = data.message || "服务器繁忙，请稍候重试";
                loadingFlag = 2;
                $(".popup-message").css("display", "block");
            }
        });
    }

    getData();
    $interval(function(){
        getData();
    },20000);

    var setup = function (m,l) {
      $timeout(function(){
        $scope.codeText = m + "秒后重试";
        if(m){
          setup(--m,1000);
        }else{
          $scope.codeText = '重新发送';
          $scope.sendDisabled = false;
        }
      },l);
    };

    $scope.showRule = function() {
        $state.go('home');
    }

    $scope.closePop = function() {
        $(".popup").css("display", "none");
    }

    $scope.startJigsaw = function() {
        $scope.firstJigsaw = true;
        $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
        TeamService.createJigsaw().then(function(data){
            $ionicLoading.hide();
            if(data.code == 1) {
                if(data.data.validate.code == -10) {
                    $scope.errorMessage = "本活动已结束，请关注平台其他活动";
                    $scope.firstJigsaw = false;
                    $scope.diglogFlag = 6;
                    $(".popup-message").css("display", "block");
                } else if(data.data.validate.code == -11) {
                    $scope.errorMessage = "活动12月28日开启，敬请期待";
                    $scope.firstJigsaw = false;
                    $scope.diglogFlag = 6;
                    $(".popup-message").css("display", "block");
                } else {
                    var url = "http://h5.xianjincard.com/activity/cross-year/index.html?sign=" + data.data.sign + "#/team";
                    var forward_url = Domain.resolveUrl(url)
                    window.location.href = forward_url;
                }
            } else if(data.code == -1) {
                $scope.binding = false;
                $(".popup-message").css("display", "block");
            } else {
                $scope.firstJigsaw = false;
                $scope.diglogFlag = 6;
                $scope.errorMessage = data.message || "服务器繁忙，请稍候重试";
                $(".popup-message").css("display", "block");
            }
        });
    }

    $scope.bindingWx = function(form) {
        $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
        TeamService.reRegister(form.phone,form.code).then(function(data){
            $ionicLoading.hide();
            if(data.code == 1) {
                $scope.firstJigsaw = false;
                $scope.diglogFlag = 5;
                $(".popup-message").css("display", "block");
            } else if(data.code == -1) {
                $scope.codeFlag = true;
            } else {
                $scope.firstJigsaw = false;
                $scope.diglogFlag = 6;
                $scope.errorMessage = data.message || "服务器繁忙，请稍候重试";
                $(".popup-message").css("display", "block");
            }
        });
    }

    $scope.callHelp = function() {
        var validate_code = $scope.teamData.data.validate.code;
        if(validate_code == 1) {
            $(".popup-share").css("display", "block");
        } else if(validate_code == -10) {
            $scope.errorMessage = "本活动已结束，请关注平台其他活动";
            $scope.firstJigsaw = false;
            $scope.diglogFlag = 6;
            $(".popup-message").css("display", "block");
        } else {
            $scope.errorMessage = "活动12月28日开启，敬请期待";
            $scope.firstJigsaw = false;
            $scope.diglogFlag = 6;
            $(".popup-message").css("display", "block");
        }
    }

    $scope.drawCard = function() {
        $scope.binding = true;
        var wx_info = $scope.teamData.data.wx_info;
        var validate_code = $scope.teamData.data.validate.code;
        if(validate_code == 1) {
            if("" != wx_info.phone || wx_info.uid != 0) {
                $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
                TeamService.luckDraw($scope.sign['sign']).then(function(data){
                    $ionicLoading.hide();
                    $scope.firstJigsaw = false;
                    if(data.code == 1) {
                        if(data.data.amount != '0') {
                            $scope.diglogFlag = 1;
                            $scope.prizeData.pic = data.data.pic;
                            $scope.prizeData.amount = data.data.amount;
                            getData();
                        } else {
                            $scope.diglogFlag = 3;
                            $scope.prizeData.pic = data.data.pic;
                            getData();
                        }
                        $(".popup-message").css("display", "block");
                    } else if(data.code == 2) {
                        $(".popup-message").css("display", "block");
                        $scope.diglogFlag = 2;
                    } else if(data.code == -22) {
                        $(".popup-message").css("display", "block");
                        $scope.diglogFlag = 4;
                    } else {
                        $scope.diglogFlag = 6;
                        $scope.errorMessage = data.message || "服务器繁忙，请稍候重试";
                        $(".popup-message").css("display", "block");
                    }
                });
            } else {
                $scope.firstJigsaw = true;
                $(".popup-message").css("display", "block");
            }
        } else if(validate_code == -10) {
            $scope.errorMessage = "本活动已结束，请关注平台其他活动";
            $scope.firstJigsaw = false;
            $scope.diglogFlag = 6;
            $(".popup-message").css("display", "block");
        } else {
            $scope.errorMessage = "活动12月28日开启，敬请期待";
            $scope.firstJigsaw = false;
            $scope.diglogFlag = 6;
            $(".popup-message").css("display", "block");
        }
    }

    $scope.receiveRed = function(form) {
        $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
        TeamService.reRegister(form.phone,form.code).then(function(data){
            $scope.register = data;
            if($scope.register.code == 1) {
                TeamService.luckDraw($scope.sign['sign']).then(function(data){
                    $ionicLoading.hide();
                    $scope.firstJigsaw = false;
                    $(".popup-message").css("display", "none");
                    if(data.code == 1) {
                        if(data.data.amount != '0') {
                            $scope.diglogFlag = 1;
                            $scope.prizeData.pic = data.data.pic;
                            $scope.prizeData.amount = data.data.amount;
                            getData();
                        } else {
                            $scope.diglogFlag = 3;
                            $scope.prizeData.pic = data.data.pic;
                            getData();
                        }
                        $(".popup-message").css("display", "block");
                    } else if(data.code == 2) {
                        $(".popup-message").css("display", "block");
                        $scope.diglogFlag = 2;
                    } else if(data.code == -22) {
                        $(".popup-message").css("display", "block");
                        $scope.diglogFlag = 4;
                    }  else {
                        $scope.diglogFlag = 6;
                        $scope.errorMessage = data.message || "服务器繁忙，请稍候重试";
                        $(".popup-message").css("display", "block");
                    }
                });
            } else if($scope.register.code == -1) {
                $ionicLoading.hide();
                $scope.firstJigsaw = true;
                $scope.codeFlag = true;
            } else {
                $ionicLoading.hide();
                $scope.firstJigsaw = false;
                $scope.diglogFlag = 6;
                $scope.errorMessage = data.message || "服务器繁忙，请稍候重试";
                $(".popup-message").css("display", "block");
            }
        });
    }

    $scope.lookDrawRed = function() {
        var clickedAt = +new Date;
        window.location.href = "https://api.xianjincard.com/download-app.html";
    }

    $scope.setCode = function() {
        $scope.codeFlag = false;
    }

    $scope.getCode = function(phone) {
        $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
        TeamService.getCode(phone).then(function(data) {
            $ionicLoading.hide();
            if(data.code == 0) {
                $scope.sendDisabled = true;
                setup(60);
            } else {
                Popup.alert(data.message);
            }
        });
    }
}); */

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
            window.location = 'https://credit.xianjincard.com/download-app.html'
          }
        }, 500)
      }, 500)
    }
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
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-info/user-offer-reward')
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
      'share_url': 'https://h5.xianjincard.com/activity/reward/index.html',
      'share_logo': 'http://h5.xianjincard.com/activity/reward/img/share.png',
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

angular.module('mobile', ['credit', 'rzModule', 'ionic', 'mobileControllers', 'mobileFactory', 'ionicPicker', 'radialIndicator', 'ngFileUpload'])

  .run(function ($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function () {
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
    $rootScope.$on('$stateChangeStart', function () {
      var cancel = document.querySelector('.picker-tools-button.cancel-button');
      cancel && cancel.click();
    })
  })

  .config(function ($locationProvider, $httpProvider, $compileProvider, $stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position("bottom");
    $ionicConfigProvider.tabs.style("standard");
    $ionicConfigProvider.navBar.alignTitle("center");

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|http?|wap2app|schemekdlc|kdlc.app.launch):/);
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push('HttpInterceptor');

    $stateProvider
      .state('test', {
        url: '/test',
        templateUrl: 'templates/test.html',
        controller: 'TestController'
      })
      .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginController'
    })
      .state('login-next', {
        url: '/login-next',
        templateUrl: 'templates/login-next.html',
        controller: 'LoginNextController',
        params: {
          phone: null,
          redirectUrl: null,
          appMarket: null,
          invite_code: null
        }
      })
      .state('reset-password', {
      url: '/reset-password',
      templateUrl: 'templates/reset-password.html',
      controller: 'ResetPasswordController',
      params: {
        phone: null,
        codeImg: null,
        redirectUrl: null,
        isRegister: false,
        appMarket: null,
        invite_code: null
      }
    })
      .state('loan', {
      url: '/loan',
      cache: false,
      templateUrl: 'templates/loan.html',
      controller: 'LoanController',
      params: {
        money: null,
        period: null,
        item: null,
        card_type: 1,
        source: false
      }
    })
      .state('tab', {
      url: '',
      abstract: true,
      templateUrl: 'templates/tabs.html',
      controller: 'TabController'
    })
      .state('tab.home', {
      url: '/',
      views: {
        'tab-view': {
          templateUrl: 'templates/home.html',
          controller: 'HomeController'
        }
      }
    })
      .state('tab.repayment', {
      url: '/repayment',
      views: {
        'tab-view': {
          templateUrl: 'templates/repayment.html',
          controller: 'RepaymentController'
        }
      }
    })
      .state('tab.my', {
      url: '/my',
      views: {
        'tab-view': {
          templateUrl: 'templates/my.html',
          controller: 'MyController'
        }
      }
    })
      .state('orders', {
        url: '/my/orders',
        templateUrl: 'templates/my/orders.html',
        controller: 'ordersController'
      })
      .state('certification', {
        url: '/my/certification',
        templateUrl: 'templates/my/certification.html',
        controller: 'CertificationController',
        params: {
          origin: null
        }
      })
      .state('information', {
        url: '/my/certification/information',
        templateUrl: 'templates/my/information.html',
        controller: 'InformationController',
        params: {
          position: '',
          address: '',
          lng: '',
          lat: ''
        }
      })
      .state('contacts', {
        url: '/my/certification/contacts',
        templateUrl: 'templates/my/contacts.html',
        controller: 'ContactsController'
      })
      .state('position', {
        url: '/my/certification/information/position',
        templateUrl: 'templates/my/position.html',
        controller: 'PositionController'
      })
      .state('paypassword', {
        url: '/my/paypassword',
        templateUrl: 'templates/my/paypassword.html',
        controller: 'PayPasswordController',
        params: {
          state: ''
        }
      })
      .state('findpaypassword', {
      url: '/my/findpaypassword',
      templateUrl: 'templates/my/findpaypassword.html',
      controller: 'FindPayPasswordController',
      params: {
        state: ''
      }
    })
      .state('setpaypassword', {
        url: '/my/setpaypassword',
        templateUrl: 'templates/my/setpaypassword.html',
        controller: 'SetPayPasswordController',
        params: {
          state: '',
          phone: '',
          code: ''
        }
      })
      .state('zhimaVerify', {
        url: '/my/certification/zhima-verify',
        templateUrl: 'templates/my/zhima-verify.html',
        controller: 'zhimaVerifyController'
      })
      .state('zhima', {
        url: '/my/certification/zhima',
        templateUrl: 'templates/my/zhima.html'
      })
      .state('findwechat', {
      url: '/findwechat',
      templateUrl: 'templates/findwechat.html'
    });

    $urlRouterProvider.otherwise("/");
  });

angular.module("mobileControllers", [])
  .controller("TabController", function (Domain) {
    location.href = Domain.resolveUrl('https://h.xianjincard.com/mobile')
  })
  .controller("LoginController", function ($filter, $location, $rootScope, $scope, $state, Popup, $ionicViewSwitcher, $ionicLoading, MobileService) {
    $scope.next = function (form) {

      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});

      MobileService.regGetCode(form).then(function (data) {
        $ionicLoading.hide();

        if (data.code == -1) {
          Popup.alert(data.message);
          return;
        }

        var params = {
          phone: $scope.form.phone,
          redirectUrl: $location.search().redirect_url,
          appMarket: $location.search().appMarket,
          invite_code: $location.search().inviteCode
        }

        $scope.form = null;

        //1000已注册用户
        if (data.code === 1000) {
          $state.go('login-next', params)
          return
        }

        //0未注册用户
        if (data.code === 0) {
          if (data.data.item) {
            params.codeImg = $filter('removeProtocol')(data.data.item)
          }
          params.isRegister = true;
          $state.go('reset-password', params)
        }

      });
    };
  })
  .controller("LoginNextController", function (Domain, $stateParams, $location, $rootScope, $scope, $state, Popup, $ionicViewSwitcher, $ionicLoading, MobileService) {
    if (!$stateParams.phone || !/^1\d{10}$/.test($stateParams.phone)) {
      $state.go('login');
      return;
    }

    $scope.resetPassword = function () {
      $ionicViewSwitcher.nextDirection('forward');
      $state.go('reset-password', $stateParams);
    };

    $scope.phone = $stateParams.phone.toString().replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');

    $scope.submit = function (form) {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});

      form.username = $stateParams.phone;
      MobileService.login(form).then(function (data) {
        $ionicLoading.hide();
        $scope.form = null;

        if (data.code === 0) {
          if ($stateParams.redirectUrl) {
            location.href = $stateParams.redirectUrl
            return
          }
          // $state.go('tab.home');
          // $location.replace(); //clear last history route
          location.href = Domain.resolveUrl('https://h.xianjincard.com/mobile')
        } else {
          Popup.alert(data.message);
        }

      });
    };
  })
  .controller('ResetPasswordController', function ($filter, $window, $stateParams, $rootScope, $scope, $timeout, MobileService, $ionicLoading, $state, Popup, $location) {
    if (!$stateParams.phone || !/^1\d{10}$/.test($stateParams.phone)) {
      if ($window.localStorage.getItem('phone')) {
        $stateParams.phone = $window.localStorage.getItem('phone')
        $stateParams.isRegister = $window.localStorage.getItem('isRegister')
        $stateParams.invite_code = $window.localStorage.getItem('invite_code')
        $window.localStorage.removeItem('phone')
        $window.localStorage.removeItem('invite_code')
        $window.localStorage.removeItem('isRegister')
      } else {
        $state.go('login');
        return;
      }
    }

    // $stateParams.phone = 12312345679
    // $stateParams.isRegister = true

    $scope.codeText = '发送验证码'
    $scope.sendDisabled = false
    $scope.isAgress = true
    $scope.codeImg = null
    $scope.codeError = false

    $scope.onAgree = function () {
      $scope.isAgress = !$scope.isAgress;
    }

    $scope.onHref = function ($event) {
      $event.stopPropagation()
      $window.localStorage.setItem('phone', $stateParams.phone)
      $window.localStorage.setItem('isRegister', $stateParams.isRegister)
      $window.localStorage.setItem('invite_code', $stateParams.invite_code)
      location.href = '//api.xianjincard.com/page/detail?id=535'
    }

    var setup = function (m, l) {
      $timeout(function () {
        $scope.codeText = m + "秒后重试";
        if (m) {
          setup(--m, 1000);
        } else {
          $scope.codeText = '重新发送';
          $scope.sendDisabled = false;
        }
      }, l)
    }
    $scope.sendCode = function () {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
      // console.log($stateParams.phone)
      var method = $stateParams.isRegister ? 'regGetCode' : 'getCode'
      MobileService[method]({phone: $stateParams.phone}).then(function (data) {
        $ionicLoading.hide();
        if (data.code !== 0) {
          Popup.alert(data.message);
          return
        }

        if (data.data.item) {
          $scope.codeImg = $filter('removeProtocol')(data.data.item)
        } else {
          $scope.sendDisabled = true;
          setup(60);
        }

      })
    };

    $scope.refresh = function () {
      var type = $stateParams.isRegister ? 1 : 2
      MobileService.refreshCaptcha(type).then(function (data) {
        if (data.code === 0) {
          $scope.codeImg = $filter('removeProtocol')(data.data.item)
          $scope.codeError = false
          document.getElementById('verifyForm').reset()
        } else {
          Popup.alert(data.message);
        }
      })
    }

    $scope.verifyCode = function (verify) {
      verify.phone = $stateParams.phone
      var method = $stateParams.isRegister ? 'checkGetCaptcha' : 'checkResetPwdCode'
      if (!$stateParams.isRegister) {
        verify.type = 'find_pwd'
      }
      MobileService[method](verify).then(function (data) {
        if (data.code === -1) {
          Popup.alert(data.message)
          return
        }

        if (data.code === -3) {
          $scope.codeError = true
          return
        }

        if (data.code === 0) {
          document.getElementById('verifyForm').reset()
          $scope.codeImg = null
          $scope.codeError = false
          $scope.sendDisabled = true
          setup(60)
        }
      })
    }

    //重置密码处理
    var handler = function (form) {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
      angular.extend(form, $stateParams);

      MobileService.resetPassword(form).then(function (data) {
        $ionicLoading.hide();
        $scope.form = null;

        if (data.code !== 0) {
          Popup.alert(data.message);
          return;
        }

        if (data.code === 0) {
          $state.go('login-next', $stateParams);
          $location.replace(); //clear last history route
        }
      })
    }

    var method = $stateParams.isRegister ? 'register' : 'resetPassword';
    if ($stateParams.isRegister) {
      $stateParams.source = 51

      if ($stateParams.codeImg) {
        $scope.codeImg = $filter('removeProtocol')($stateParams.codeImg)
      } else {
        $scope.sendDisabled = true
        setup(60)
      }
    }

    $scope.reset = function (form) {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
      angular.extend(form, $stateParams);

      MobileService[method](form).then(function (data) {
        $ionicLoading.hide();
        $scope.form = null;

        if (data.code !== 0) {
          Popup.alert(data.message);
          return;
        }

        if (data.code === 0) {
          $state.go('login-next', $stateParams);
          $location.replace(); //clear last history route
        }
      })
    };

  })
  .controller("HomeController", function ($ionicSlideBoxDelegate, $ionicPopup, Popup, $ionicViewSwitcher, $state, $ionicScrollDelegate, $rootScope, $location, Platform, Domain, $scope, $ionicLoading, $timeout, $ionicSlideBoxDelegate, Popup, MobileService) {
    $rootScope.currentPage = "current-home-page";
    $scope.pullingTips = '科技让金融更简单';
    $scope.cIndex = 0
    $scope.dIndex = 0

    MobileService.homeVdsStatistics().then(function (data) {
      if (data.code == 0) {
        if (window._vds) {
          window._vds.push(['setCS1', 'inviteCode', data.data.invite_code]);
          return
        }
        var _vds = _vds || [];
        window._vds = _vds;
        (function () {
          _vds.push(['setAccountId', '8fd2500ba4956d6d']);
          _vds.push(['enableHT', true]);
          _vds.push(['setCS1', 'inviteCode', data.data.invite_code]);
          (function () {
            var vds = document.createElement('script');
            vds.type = 'text/javascript';
            vds.async = true;
            vds.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dn-growing.qbox.me/vds.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(vds, s);
          })();
        })();
      }
    })

    if (!$rootScope.awaken && Platform.isIos) {
      $rootScope.awaken = true;
      window.location.href = Platform.isAndroid ? 'xianjincard://com.kdlc.mcc/openapp' : 'xjbk915164674://';
    }

    if (Platform.isWeixin) {
      MobileService.bindWechat().then(function (data) {
        if (data.code == -1001) {
          window.location.href = Domain.resolveUrl('http://credit.xianjincard.com/wx/user-auth-template?redirectUrl=' + window.location.href)
          return;
        }
      });
    }

    $scope.onKnow = function (data) {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
      MobileService.confirmKnow({id: data.id}).then(function (result) {
        $ionicLoading.hide()
        if (result.code === 0) {
          location.href = data.active_url
        } else {
          Popup.alert(result.message);
        }
      })
    }

    $scope.showTips = function () {
      $ionicPopup.alert({
        template: "综合费用=借款利息+居间服务费+信息认证费，综合费用将在借款时一次性扣除",
        okText: '我知道了',
        okType: 'button-credit'
      })
    };
    //申请借款
    $scope.apply = function (data) {
      $ionicViewSwitcher.nextDirection('forward');
      _hmt.push(['_trackEvent', 'm版首页', '点击马上申请']);

      if (data.verify_loan_pass === 0) {
        $state.go('certification', {origin: 'home'});
        return;
      }

      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})

      var day = data.amount_days.days[$scope.dIndex]
      var loan = {
        'period': day,
        'money': $scope.sliderAmount.value,
        'card_type': data.card_type
      }

      MobileService.getConfirmLoan(loan).then(function (data) {
        $ionicLoading.hide();
        if (data.code !== 0) {
          Popup.alert(data.message);
          return;
        }
        if (data.code === 0) {
          loan.item = data.data.item;
          $state.go('loan', loan);
        }
      });
    };

    var costHandler = function () {
      var interest = $scope.data.item.card[$scope.cIndex].amount_days.interests[$scope.dIndex];
      var length = $scope.data.item.card[$scope.cIndex].amount_days.amounts.length
      var amount = $scope.data.item.card[$scope.cIndex].amount_days.amounts[length - 1]
      var ratio = interest / amount
      $scope.cost = $scope.sliderAmount.value * ratio;
      $scope.amount = $scope.sliderAmount.value - $scope.cost;
    };

    $scope.sliderAmount = {
      value: 1000,
      options: {
        floor: 200,
        step: 100,
        showSelectionBar: true,
        translate: function (value) {
          return value + '元';
        },
        onChange: costHandler
      }
    };

    var resetAmount = function (isUpdate) {
      var amounts = $scope.data.item.card[$scope.cIndex].amount_days.amounts;
      $scope.sliderAmount.options.floor = amounts[0] / 100;
      isUpdate || ($scope.sliderAmount.value = amounts[amounts.length - 1] / 100)

      costHandler()
    }

    $scope.slideHasChanged = function (index) {
      console.log(index)
      $scope.cIndex = index
      resetAmount()
    }

    $scope.switchDay = function (index) {
      $scope.dIndex = index
      resetAmount(true)
    }

    var handler = function (data) {
      if (data.code != 0) {
        Popup.alert(data.message);
        return;
      }

      $scope.data = data.data;
      //console.log(data.data)

      $ionicSlideBoxDelegate.update()

      resetAmount()
    };

    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    MobileService.getHomeData().then(function (data) {
      $ionicLoading.hide();
      handler(data);
    });

    $scope.doRefresh = function () {
      MobileService.getHomeData().then(function (data) {
        handler(data);
        $scope.$broadcast('scroll.refreshComplete');
      });
    };
  })
  .controller('LoanController', function ($window, Platform, $timeout, $location, $stateParams, Popup, $rootScope, $scope, MobileService, $ionicLoading, $ionicViewSwitcher, $state) {
    if (!$stateParams.money) {
      if (!$window.localStorage.getItem('money')) {
        $ionicViewSwitcher.nextDirection('forward');
        $state.go('tab.home');
        return;
      }
      $stateParams.money = $window.localStorage.getItem('money')
      $stateParams.period = $window.localStorage.getItem('period')
      $stateParams.card_type = $window.localStorage.getItem('card_type')
      $stateParams.item = JSON.parse($window.localStorage.getItem('item'))
      $window.localStorage.removeItem('money')
      $window.localStorage.removeItem('period')
      $window.localStorage.removeItem('item')
      $window.localStorage.removeItem('card_type')
    }

    $scope.item = $stateParams.item;
    $scope.item.tips = $scope.item.tips.replace(/(\d+\.?\d+)/g, "<b>$1</b>")

    $scope.isAgress = true
    $scope.isHref = $scope.item.real_pay_pwd_status === 1 ? true : false;
    $scope.passwordTitle = $scope.item.real_pay_pwd_status === 1 ? '请输入交易密码' : '请设置交易密码'

    $scope.onAgree = function () {
      $scope.isAgress = !$scope.isAgress
    }

    $scope.onHref = function ($event) {
      $event.stopPropagation()
      $window.localStorage.setItem('money', $stateParams.money)
      $window.localStorage.setItem('period', $stateParams.period)
      $window.localStorage.setItem('card_type', $stateParams.card_type)
      $window.localStorage.setItem('item', JSON.stringify($stateParams.item))
      location.href = $scope.item.protocol_url
    }
    $scope.isPicker = false
    $scope.ticket = "不使用券"
    $scope.selectIndex = -1 //没有选中的
    $scope.showPicker = function () {
      if ($scope.item.coupon_total <= 0) return
      $scope.isPicker = true
      $scope.pickerAction = 'picker-ticket-action'
    }
    $scope.closePicker = function () {
      $timeout(function () {
        $scope.isPicker = false
      }, 300)
      $scope.pickerAction = ''
    }
    $scope.notPicker = function () {
      $scope.ticket = "不使用券"
      $scope.selectedTicketClass = ''
      $scope.closePicker()
      $scope.selectIndex = -1 //没选择券
      loadLoan()
    }

    var loadLoan = function () {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
      var loan = {
        'period': $stateParams.period,
        'money': $stateParams.money,
        'card_type': $stateParams.card_type
      };
      if ($scope.selectIndex >= 0 && $scope.selectIndex < $scope.item.coupon_list.length) {
        loan['coupon_id'] = $scope.item.coupon_list[$scope.selectIndex].coupon_id
      }
      MobileService.getConfirmLoan(loan).then(function (data) {
        $ionicLoading.hide();
        if (data.code !== 0) {
          Popup.alert(data.message);
          return;
        }
        if (data.code === 0) {
          $scope.item = data.data.item
          $scope.item.tips = $scope.item.tips.replace(/(\d+\.?\d+)/g, "<b>$1</b>")
          //选择券请求计算返回，券列表第一个是选中的，所以selectIndex = 0
          if ($scope.selectIndex !== -1) {
            $scope.selectIndex = 0
            $scope.ticket = $scope.item.coupon_list[0].str_amount
          }
        }
      });
    }

    $scope.selectPicker = function (coupon, index) {
      $scope.selectIndex = index
      $scope.closePicker()
      $scope.ticket = coupon.str_amount
      $scope.selectedTicketClass = 'selected-ticket-class'
      loadLoan()
    }

    $scope.confirm = function () {
      $scope.isShow = true;
    };

    var oldPass = null
    var setPassword = function (password) {
      if ($scope.passwordTitle === '请设置交易密码') {
        $timeout(function () {
          oldPass = password
          $scope.passwordTitle = '请确认交易密码'
          $('#defray input').val('')
          $('#defray i').removeClass('point')
        }, 0)
        return
      }

      if (password !== oldPass) {
        $('#defray .error-tips').text('两次输入交易密码不同，请重新输入')
        $timeout(function () {
          $scope.error = true
        }, 0)
        return
      }

      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
      MobileService.setPayPassword({'password': password}).then(function (response) {
        $ionicLoading.hide();
        if (response.code == -1) {
          Popup.alert(response.message);
          return;
        } else {
          $scope.isHref = true
          $scope.passwordTitle = '请输入交易密码'
          $scope.isShow = false
          Popup.alert('交易密码设置成功', function () {
            $scope.isShow = true
          });
        }
      });
    }
    var confirmLoan = function (password) {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
      var loan = {
        'period': $stateParams.period,
        'money': $scope.item.money,
        'card_type': $stateParams.card_type
      };
      loan.pay_password = password
      loan.order_other = 2
      if ($scope.selectIndex >= 0 && $scope.selectIndex < $scope.item.coupon_list.length) {
        loan['coupon_id'] = $scope.item.coupon_list[0].coupon_id
      }

      MobileService.applyLoan(loan).then(function (data) {
        $ionicLoading.hide();
        if (data.code === 3) {
          $scope.error = true;
          return;
        }

        if (data.code === 2) {
          Popup.alert(data.message, function () {
            $state.go('paypassword', {state: 'loan'});
          })
          return;
        }

        if (data.code === 0) {
          if (!Platform.isWeixin) {
            $state.go('findwechat');
            $location.replace();
          } else {
            $state.go('tab.home');
          }
        }
      });
    }
    $scope.applyLoan = function (password) {
      $scope.isHref ? confirmLoan(password) : setPassword(password)
    };
  })
  .controller('zhimaVerifyController', function (Popup, $location, $state, $scope, $ionicLoading) {
    var param = $location.$$search;
    if (/^(https?:\/\/)/.test(param.url)) {
      window.location.href = param.url;
    } else {
      Popup.alert('亲，请先填写个人信息哦~', function () {
        if (navigator.userAgent.indexOf('kdkj') >= 0) {
          window.nativeMethod && window.nativeMethod.returnNativeMethod('{"type" : "0"}')
          return;
        }
      });
    }
  })
  .controller("RepaymentController", function ($state, $rootScope, $scope, MobileService, $ionicLoading) {
    $rootScope.currentPage = "current-repayment-page";

    var handler = function (data) {
      if (data.code === 0) {
        $scope.item = data.data.item;
      }
    };

    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    MobileService.getMyLoan().then(function (data) {
      $ionicLoading.hide();
      $scope.$broadcast('scroll.refreshComplete');
      handler(data);
    });

    $scope.doRefresh = function () {
      MobileService.getMyLoan().then(function (data) {
        $scope.$broadcast('scroll.refreshComplete');
        handler(data);
      });
    };
  })
  .controller("MyController", function ($rootScope, $scope, $location, Popup, $ionicLoading, $ionicViewSwitcher, $state, radialIndicatorInstance, MobileService) {
    $rootScope.currentPage = "current-my-page";
    $scope.verify = function (event) {
      if ($scope.verify_info && $scope.verify_info.real_verify_status === 0) {
        event.preventDefault();
        Popup.alert('亲，请先填写个人信息哦~', function () {
          $ionicViewSwitcher.nextDirection('forward');
          $state.go('certification');
        });
        return;
      }
    };
    $scope.credit_info = {
      card_amount: 0,
      card_unused_amount: 0
    };
    $scope.indicatorOption = {
      displayNumber: false,
      barColor: '#4ab6fa',
      barWidth: 64,
      initValue: 0,
      percentage: true,
      frameTime: 3,
      radius: 205
    };
    $scope.logout = function () {
      Popup.confirm({
        title: '<br/>您确定要退出登录嘛？',
        ok: function () {
          MobileService.logout().then(function (response) {
            if (response.code != 0) {
              Popup.alert(response.message);
              return;
            }
            $state.go('login');
            $location.replace();
          });
        }
      })
    }
    $scope.doRefresh = function () {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
      MobileService.getMyInfo().then(function (response) {
        $ionicLoading.hide();
        if (response.code != 0) {
          Popup.alert(response.message);
          return;
        }
        for (var i in response.data.item) {
          $scope[i] = response.data.item[i];
        }
        $scope.card_info && ($scope.card_info.format = $scope.card_info.bank_name + '(' + $scope.card_info.card_no_end + ')');
        radialIndicatorInstance['amount'].animate($scope.credit_info.card_unused_amount / $scope.credit_info.card_amount * 100 || 0);
        $scope.$broadcast('scroll.refreshComplete');
      });
    };
    $scope.doRefresh();

  })
  .controller('ordersController', function ($rootScope, $scope, Popup, $ionicLoading, MobileService) {
    $rootScope.currentPage = "current-my-page";
    $scope.pullingTips = '科技让金融更简单';
    $scope.items = [];
    $scope.doRefresh = function () {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
      MobileService.getOrders().then(function (response) {
        $ionicLoading.hide();
        if (response.code != 0) {
          Popup.alert(response.message);
          return;
        }
        if (response.data && response.data.item && response.data.item.length) {
          $scope.items = response.data.item
        } else {
          $scope.items = false;
        }
        $scope.$broadcast('scroll.refreshComplete');
      });
    };
    $scope.doRefresh();
  })
  .controller('CertificationController', function (Platform, Domain, $rootScope, $scope, Popup, $ionicViewSwitcher, $location, $ionicLoading, $ionicViewSwitcher, $state, $ionicLoading, $state, MobileService) {
    location.href = Domain.resolveUrl('https://h.xianjincard.com/mobile/certification');
    var $query = $location.$$search;
    if ($query.success == 1) {
      MobileService.getConfirmLoan({
        money: 1000,
        period: 14,
        card_type: 1
      }).then(function (response) {
        if (response.code != 0) {
          Popup.alert(response.message);
          return;
        }
        window.localStorage.removeItem('links');
        $state.go('loan', {
          money: 1000,
          period: 14,
          item: response.data.item,
          source: Platform.isWeixin ? true : false
        });
      });
    }
    $scope.verify = function (event) {
      if ($scope.real_verify_status === 0) {
        event.preventDefault();
        Popup.alert('亲，请先填写个人信息哦~', function () {
          // $ionicViewSwitcher.nextDirection('forward');
          // $state.go('information');
        });
        return;
      }
    };
    $scope.doRefresh = function () {
      $scope.items = [];
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
      MobileService.getVerification().then(function (response) {
        var disable = [2, 12, 7, 9, 13, 14];
        var verify = [3, 4, 8, 5];
        var query = {};

        function format(data) {
          var temp = [];
          for (var i in data) {
            temp.push(i + '=' + data[i]);
          }
          return '?' + temp.join('&');
        }

        var items = response.data.item.list || [];
        var temps = [];
        for (var i in items) {
          var tag = items[i].tag;
          if (tag === 1) {
            items[i].url = '#/my/certification/information';
            response.data.is_new_user == 1 && (items[i].url += '?new_user=1');
          } else if (tag === 3) {
            items[i].url = '#/my/certification/contacts';
            response.data.is_new_user == 1 && (items[i].url += '?new_user=1');
          } else if ([4, 8].indexOf(tag) >= 0) {
            (!items[i].url && items[i].first_url) && (items[i].url = items[i].first_url);
          }
          if (verify.indexOf(tag) >= 0) {
            items[i].verify = 1;
          }
          if (!(disable.indexOf(tag) >= 0)) {
            $scope.items.push(items[i]);
          }
          temps.push(items[i].url);
        }
        temps.push(window.location.href + '?success=1');
        if (!!response.data.is_new_user) {
          for (var i in temps) {
            if (i == 2) {
              temps[i] += ('?url=' + temps[3]).replace(/\#/g, '%23')
            } else if (i == 3) {
              temps[i] += '?url=' + temps[4].replace(/\#/g, '%23')
            }
          }
          for (var i in $scope.items) {
            var tag = $scope.items[i].tag;
            if (tag == 4) {
              $scope.items[i].url += '?url=' + temps[3].replace(/\#/g, '%23')
            } else if (tag == 5) {
              $scope.items[i].url += '?url=' + temps[4].replace(/\#/g, '%23')
            }
          }
        }

        window.localStorage.setItem('links', JSON.stringify(temps));
        // if(response.data.is_new_user == 1){
        //   query.new_user = 1;
        //   for(var i in $scope.items){
        //     if($scope.items[i].status == 0){
        //       query.url = encodeURIComponent($scope.items[i].url);
        //       $scope.items[i].url += format(query); 
        //       break;
        //     }
        //   }
        // }

        $scope.real_verify_status = response.data.item.real_verify_status || 0;
        $ionicLoading.hide();
        $scope.$broadcast('scroll.refreshComplete');
      });
    };
    $scope.doRefresh();
  })
  .controller('InformationController', function ($scope, Domain, $location, Popup, Upload, $ionicViewSwitcher, $state, $ionicLoading, MobileService, $location, $stateParams) {
    var query = $location.$$search;
    $scope.new_user = query.new_user;
    if (query.new_user == undefined) {
      $scope.upload = function (file, type, name) {
        // 1:身份证,2:学历证明,3:工作证明,4:薪资证明,5:资产证明,6:工牌照片,7:个人名片,8:银行卡或者信用卡,9:好房贷房产证,10:人脸识别,11:身份证正面,12:身份证反面,100:其它证明
        if (type === 0) return;
        $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
        lrz(file, {
          width: 640
        }).then(function (data) {
          file.upload = Upload.upload({
            url: Domain.resolveUrl('http://credit.xianjincard.com/picture/upload-file'),
            data: {
              type: type,
              attach: data.base64,
              ocrtype: 1
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          }).then(function (response) {
            (response.data.data && response.data.data.item) && ($scope.form[name] = response.data.data.item.url);
            $ionicLoading.hide();
            Popup.alert(response.data.message);
          });
        })

      }
      $scope.$watch('faces', function (file) {
        if (file != null) {
          $scope.upload(file, 10, 'face_recognition_picture');
        }
      });
      $scope.$watch('idNumberFront', function (file) {
        if (file != null) {
          $scope.upload(file, 11, 'id_number_z_picture');
        }
      });
      $scope.$watch('idNumberBack', function (file) {
        if (file != null) {
          $scope.upload(file, 12, 'id_number_f_picture');
        }
      });
      $scope.form = {
        degrees_all: [{degrees: 0, name: '请选择'}],
        degrees_default: null,
        company_worktype_list: [{work_type: 0, name: '请选择'}],
        worktype_default: null,
      };
    }
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
    MobileService.getInformation().then(function (response) {
      $ionicLoading.hide();
      if (response.code != 0) {
        Popup.alert(response.message);
        return;
      }
      var data = response.data;
      // var params = $stateParams;
      // if(params.position == 1 && params.address && params.lng && params.lat){
      //   data.item.address_distinct = params.address;
      //   data.item.longitude = params.lng;
      //   data.item.latitude = params.lat;
      // }
      $scope.form = $.extend(true, $scope.form, data.item);
      if (query.new_user == 1) {
        for (var i in $scope.form.degrees_all) {
          if ($scope.form.degrees_all[i].degrees === $scope.form.degrees) {
            $scope.form.degrees_default = $scope.form.degrees_all[i];
            break;
          }
        }
        for (var i in $scope.form.company_worktype_list) {
          if ($scope.form.company_worktype_list[i].work_type === $scope.form.company_worktype_id) {
            $scope.form.worktype_default = $scope.form.company_worktype_list[i];
            break;
          }
        }
      }
    });
    $scope.save = function (form) {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
      if (!!query.new_user) {
        var type = 'setInformation';
      } else {
        var type = form.real_verify_status ? 'setParsonInformation' : 'setInformation';
        form.degrees = form.degrees_default.degrees || 0;
        form.work_type = form.worktype_default.work_type || 0;
      }
      MobileService[type](form).then(function (response) {
        $ionicLoading.hide();
        Popup.alert(response.message, function () {
          if (response.code != 0) return;
          if (query.new_user == 1) {
            var links = JSON.parse(window.localStorage.getItem('links'));
            window.location.href = links[1];
          } else {
            $ionicViewSwitcher.nextDirection('back');
            $state.go('certification');
            $location.replace();
          }
        });
        return;
      });
    };
  })
  .controller('ContactsController', function ($scope, Popup, $state, $location, $ionicViewSwitcher, $ionicLoading, MobileService) {
    var query = $location.$$search;
    // $scope.linealData = [{type: 0, name: '请选择'}];
    $scope.form = {
      lineal_list: [{type: 0, name: '请选择'}],
      other_list: [{type: 0, name: '请选择'}],
      lock: false
    };
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
    MobileService.getContacts().then(function (response) {
      $ionicLoading.hide();
      if (response.code != 0) {
        Popup.alert(response.message);
        return;
      }
      var data = response.data;
      if (data && data.item) {
        var item = data.item;
        // if(item.is_can_change == 0){
        //   $scope.form.lock = true;
        // }
        // if(item.lineal_mobile && item.lineal_name && item.lineal_relation &&
        //   item.other_mobile && item.other_name && item.other_relation){
        //   $scope.form.lock = true;
        // }
      }
      $scope.form = $.extend(true, $scope.form, data.item);
      for (var i in $scope.form.lineal_list) {
        if ($scope.form.lineal_list[i].type === $scope.form.lineal_relation) {
          $scope.form.lineal_default = $scope.form.lineal_list[i];
          break;
        }
      }
      for (var i in $scope.form.other_list) {
        if ($scope.form.other_list[i].type === $scope.form.other_relation) {
          $scope.form.other_default = $scope.form.other_list[i];
          break;
        }
      }
    });
    $scope.save = function (form) {
      form.lineal_relation = form.lineal_default.type || '';
      form.other_relation = form.other_default.type || '';
      var data = {
        type: form.lineal_relation,
        name: form.lineal_name,
        mobile: form.lineal_mobile,
        relation_spare: form.other_relation,
        name_spare: form.other_name,
        mobile_spare: form.other_mobile
      };
      if (data.mobile_spare && data.mobile.length != 11) {
        Popup.alert('直系亲属手机号码格式错误');
        return;
      }
      if (data.mobile_spare && data.mobile_spare.length != 11) {
        Popup.alert('其他联系人手机号码格式错误');
        return;
      }
      MobileService.setContacts(data).then(function (response) {
        $ionicLoading.hide();
        Popup.alert(response.message, function () {
          if (response.code != 0) return;
          if (query.new_user == 1) {
            var links = JSON.parse(window.localStorage.getItem('links'));
            window.location.href = links[2] + '?url=' + links[4].replace(/\#/g, '%23');
          } else {
            $ionicViewSwitcher.nextDirection('back');
            $state.go('certification');
            $location.replace();
          }
        });
      });
    };
  })
  .controller('PayPasswordController', function ($scope, $ionicLoading, $ionicViewSwitcher, $state, Popup, $stateParams, MobileService, Domain, $location) {
    $scope.active = false;
    $scope.data = {
      phone: 0,
      verify: 0,
      loaded: 0
    };
    $scope.form = {};
    var state = $location.$$search.state || $stateParams.state || 'certification';
    // setPayPassword
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
    MobileService.getMyInfo().then(function (response) {
      $scope.data = response.data.item;
      $scope.data.verify = $scope.data.verify_info.real_pay_pwd_status;
      $ionicLoading.hide();
    });
    $scope.save = function (form) {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
      var type = 'setPayPassword';
      var data = {};
      if ($scope.data.verify) {
        type = 'changePayPassword';
        data.old_pwd = form.old_pwd
        data.new_pwd = form.new_pwd;
      } else {
        data.password = form.new_pwd;
      }
      MobileService[type](data).then(function (response) {
        $ionicLoading.hide();
        if (response)
          Popup.alert(response.message, function () {
            if (response.code >= 0) {
              if (/^(https?|\/\/)/.test(state)) {
                window.location.href = state;
              } else if (state == 'certification') {
                window.location.href = Domain.resolveUrl('http://h.xianjincard.com/mobile/certification');
              } else {
                $ionicViewSwitcher.nextDirection('back');
                $state.go(state);
              }
            }
          });

        return;
      });
    };
    $scope.checkout = function (form) {
      var match = /^\d{6,}$/;
      if ($scope.data.verify) {
        if (match.test(form.old_pwd)) {
          $scope.active = true;
        } else {
          $scope.active = false;
        }
      }
      if (match.test(form.new_pwd) && form.new_pwd === form.confirm_pwd) {
        $scope.active = true;
      } else {
        $scope.active = false;
      }
    };
  })
  .controller('FindPayPasswordController', function ($scope, $location, $stateParams, $ionicViewSwitcher, $state, Popup, $ionicLoading, $q, $interval, MobileService) {
    $scope.active = false;
    $scope.form = {
      type: 'find_pay_pwd',
      code: '',
      phone: '',
      realname: '',
      id_card: ''
    };
    var state = $location.$$search.state || $stateParams.state || 'certification';

    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
    MobileService.getBaseInformation().then(function (response) {
      $scope.data = response.data.item;
      $scope.form.phone = $scope.data.phone;

      // fill data
      // $scope.form.id_card = $scope.data.id_number;
      // $scope.form.realname = $scope.data.name;


      $scope.data.phone = (function () {
        return $scope.data.phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
      }());
      $ionicLoading.hide();
    });
    $scope.checkout = function (form) {
      if (form.id_card.length >= 15 && form.code.length >= 4 && form.realname) {
        $scope.active = true;
      } else {
        $scope.active = false;
      }
    };
    $scope.save = function (form) {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
      MobileService.verifyResetPayPassword(form).then(function (response) {
        $ionicLoading.hide();
        if (response.code == -1) {
          Popup.alert(response.message);
          return;
        } else {
          $ionicViewSwitcher.nextDirection('forward');
          $state.go('setpaypassword', {state: state, phone: form.phone, code: form.code});
        }
      });
    };

    $scope.sendCodeLock = false;
    $scope.sendCodeFirstSend = false;
    $scope.sendCodeFirstText = '获取验证码';
    $scope.sendCodeText = $scope.sendCodeFirstText;
    $scope.sendCodeTimer = undefined;
    $scope.sendVerifyCode = function () {
      if (!$scope.sendCodeLock) {
        $scope.sendCodeLock = true;
        $scope.sendCodeFirstSend = true;
        $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
        MobileService.sendVerifyCode($scope.form).then(function (response) {
          $ionicLoading.hide();
          countdown().then(function () {
            $scope.sendCodeText = '重新获取';
            $scope.sendCodeLock = false;
          });
        });
      }
    }
    function countdown() {
      var deferred = $q.defer();
      var count = 60;
      $scope.sendCodeText = [count, '秒'].join('');
      $scope.sendCodeTimer = $interval(function () {
        if (count <= 1) {
          $scope.sendCodeTimer && $interval.cancel($scope.sendCodeTimer);
          deferred.resolve();
        }
        $scope.sendCodeText = [--count, '秒'].join('');
      }, 1000);
      return deferred.promise;
    }
  })
  .controller('SetPayPasswordController', function ($scope, Popup, $state, Domain, $ionicViewSwitcher, $stateParams, $ionicLoading, MobileService) {
    $scope.active = false;
    $scope.form = {};
    var param = $stateParams;
    if (param.phone == '' && param.code == '') {
      Popup.alert('缺少参数', function () {
        $ionicViewSwitcher.nextDirection('back');
        $state.go('findpaypassword', {state: param.state});
      });
    } else {
      $scope.form.phone = param.phone;
      $scope.form.code = param.code;
    }
    $scope.checkout = function (form) {
      if (/^\d{6,}/.test(form.new_pwd) && form.new_pwd === form.confirm_pwd) {
        $scope.active = true;
      } else {
        $scope.active = false;
      }
    };
    $scope.save = function (form) {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
      form.password = form.new_pwd;
      MobileService.resetPayPassword(form).then(function (response) {
        $ionicLoading.hide();
        if (response.code == -1) {
          Popup.alert(response.message);
          return;
        } else {
          Popup.alert(response.message, function () {
            var state = param.state || 'certification';
            if (/^(https?|\/\/)/.test(state)) {
              window.location.href = state;
            } else if (state == 'certification') {
              window.location.href = Domain.resolveUrl('http://h.xianjincard.com/mobile/certification');
            } else {
              $ionicViewSwitcher.nextDirection('back');
              $state.go(state);
            }
          })
        }
      });
    }
  })
  .filter('removeProtocol', function () {
    return function (url) {
      return url ? url.replace(/^(https?):/, '') : url;
    }
  })
  // .controller('PositionController', function($scope, Popup, $ionicLoading, $ionicViewSwitcher, $state, $q){
  //   $scope.loaded = false;
  //   $scope.noShowMore = false;
  //   $scope.noMoreItemsAvailable = false;
  //   viewport().then(function(){
  //     $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
  //     var map = new AMap.Map('amap', {
  //       dragEnable: true,
  //       resizeEnable: true
  //     });
  //     var geolocation = undefined;
  //     var marker = undefined;
  //     var timer;
  //     var cache = {};
  //     map.on('complete', function(){
  //       $ionicLoading.hide();
  //     });
  //     map.on('mapmove', function(){
  //       if(marker && marker.setPosition){
  //         marker.setPosition(map.getCenter());
  //       }
  //     });
  //     map.on('moveend', function(){
  //       if(!geolocation) return;
  //       timer && clearTimeout(timer);
  //       timer = setTimeout(function(){
  //         var center = map.getCenter();
  //         var data = {position: center};
  //         nearSearch.apply(undefined, [data]);
  //       }, 300);
  //     });
  //     map.plugin('AMap.Geolocation', function(){
  //       geolocation = new AMap.Geolocation({
  //         enableHighAccuracy: true,
  //         timeout: 10000,
  //         maximumAge: 0,
  //         convert: true,
  //         showButton: true,
  //         buttonOffset: new AMap.Pixel(10, 20),
  //         buttonPosition: 'LB',
  //         showMarker: true,
  //         showCircle: true,
  //         panToLocation: true,
  //         zoomToAccuracy: true
  //       });
  //       map.addControl(geolocation);
  //       geolocation.getCurrentPosition();
  //       AMap.event.addListener(geolocation, 'complete', complete);
  //       AMap.event.addListener(geolocation, 'error', error);
  //     });
  //     function complete(data){
  //       !marker && (marker = new AMap.Marker({
  //         position: data.position,
  //         zIndex: 2000,
  //         map: map
  //       }));
  //       nearSearch.apply(undefined, [data]);
  //     }
  //     function error(data){
  //       Popup.alert(data.message, function(){
  //         $state.go('information', {});
  //       });

  //     }
  //     var cache = {};
  //     var searchTimer;
  //     function nearSearch(amap){
  //       // $scope.pois = data.pois;
  //       AMap.service(['AMap.PlaceSearch'], function(){
  //         var reload = true;
  //         var index = cache.pageIndex || 1;
  //         if(amap.position && cache && amap.position.lng === cache.lng && amap.position.lat === cache.lat){
  //           ++index;
  //           reload = false;
  //         }
  //         var scroll = $('.scroll');
  //         var search = new AMap.PlaceSearch({
  //           pageIndex: index,
  //           pageSize: cache.pageSize || 20,
  //           // map: map
  //         });
  //         var center = new AMap.LngLat(amap.position.lng, amap.position.lat);
  //         search.searchNearBy('', center, 200, function(status, result){
  //           $scope.$apply(function(){
  //             var data = result.poiList || undefined;
  //             if(!data) return;
  //             cache = {
  //               count: data.count,
  //               pageIndex: data.pageIndex,
  //               pageSize: data.pageSize,
  //               lat: amap.position.lat,
  //               lng: amap.position.lng
  //             };
  //             if(reload){
  //               scroll.css({
  //                 'transform': 'translate3d(0px, 0px, 0px) scale(1)'
  //               })
  //               $scope.pois = data.pois;
  //             }else{
  //               for(var i in data.pois) $scope.pois.push(data.pois[i]);
  //             }
  //             if(data.pageIndex < Math.ceil(data.count / data.pageSize)){
  //               $scope.noMoreItemsAvailable = true;
  //             }else{
  //               $scope.noShowMore = true;
  //               $scope.noMoreItemsAvailable = false;
  //             }
  //             searchTimer && clearTimeout(searchTimer);
  //             searchTimer = setTimeout(function(){
  //               $scope.$broadcast('scroll.infiniteScrollComplete');
  //             }, 300);
  //           });
  //         });
  //       });
  //     }
  //     $scope.position = function(poi){
  //       $ionicViewSwitcher.nextDirection('back');
  //       $state.go('information', {
  //         position: 1,
  //         lng: poi.location.lng,
  //         lat: poi.location.lat,
  //         address: poi.name
  //       });
  //     }
  //     $scope.loadMoreData = function(){
  //       map && setTimeout(function(){
  //         var data = {position: map.getCenter()};
  //         data && nearSearch.apply(undefined, [data]);
  //       }, 150);
  //     }
  //   });

  //   function viewport(){
  //     var deferred = $q.defer();
  //     var element = $('meta[name=viewport]');
  //     var content = element.attr('content');
  //     var attrs = content.split(',');
  //       var temps = [];
  //       for(var i in attrs){
  //         var data = attrs[i].split('=');
  //         $.isNumeric(data[1]) && (data[1] = 1);
  //         temps.push(data.join('='));
  //       }
  //     $scope.$on('$ionicView.enter', function(){
  //       element.attr('content', temps.join(','));
  //     });
  //     $scope.$on('$ionicView.afterEnter', function(){
  //       setTimeout(function(){
  //         deferred.resolve();
  //       }, 300);
  //     });
  //     return deferred.promise;
  //   }
  // })
  .directive('noResult', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'templates/common/noresult.html'
    };
  })
  .directive('ngState', function ($ionicViewSwitcher, $state) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        angular.element(element).on('click', function () {
          $ionicViewSwitcher.nextDirection('forward');
          $state.go(attrs.ngState);
        });
      }
    };
  });

angular.module('mobileFactory', [])

  .factory('MobileService', function(Domain, Platform, $http, $location, $ionicPopup, $httpParamSerializerJQLike) {
    return {
      homeVdsStatistics: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/activity/default/get-invite-code');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      getHomeData: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-app/multi-index');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      confirmKnow: function(data) {
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-loan/confirm-failed-loan');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      getConfirmLoan: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-loan/get-confirm-loan');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      applyLoan: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-loan/apply-loan');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      getMyLoan: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-loan/get-my-loan');
        return $http({
          method: 'POST',
          url: url,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      regGetCode: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/reg-get-code');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      login: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/login');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      register: function(data){
        var url = data.appMarket ? 'http://credit.xianjincard.com/credit-user/register?appMarket=' + data.appMarket
          : 'http://credit.xianjincard.com/credit-user/register';
        return $http({
          method: 'POST',
          url: Domain.resolveUrl(url),
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      getCode: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/reset-pwd-code');
        data.type = 'find_pwd'
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      refreshCaptcha: function(type){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/refresh-captcha?type=' + (type || 1));
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      checkGetCaptcha: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/check-get-captcha');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      checkResetPwdCode: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/check-reset-password-code');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      resetPassword: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/reset-password');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      getVerification: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/golden/credit-card/get-verification-info');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      getBaseInformation: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-info/get-person-info');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      getInformation: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-card/get-person-info');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      setInformation: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-card/save-person-info');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      setParsonInformation: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-info/save-person-info');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      getContacts: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-card/get-contacts');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      setContacts: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-card/save-contacts');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      getOrders: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-loan/get-my-orders');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      getMyInfo: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/get-info');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      setPayPassword: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/set-paypassword');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      changePayPassword: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/change-paypassword');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      sendVerifyCode: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/reset-pwd-code');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      verifyResetPayPassword: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/verify-reset-password');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      resetPayPassword: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/reset-pay-password');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      setPayPassword: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/set-paypassword');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      logout: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/logout');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      bindWechat: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/bind-wx');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      }
    };
  });
