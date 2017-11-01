angular.module('ionic').directive('kdPane', function () {
  return {
    restrict: 'E',
    link: function (scope, element) {
      element.addClass('pane');
      element.addClass('kd-pane');
    }
  };
});
angular.module('credit', []).directive('downloadPopup', [
  'Platform',
  '$timeout',
  function (Platform, $timeout) {
    return {
      restrict: 'E',
      scope: {},
      replace: true,
      template: '<div ng-show="isShow" ng-click="download()" class="download-popup">                   <a href="" class="close" ng-click="close($event)"></a>                   <img alt="" src="//h5.xianjincard.com/credit/img/download-logo.png"/>                   <div><p>\u4e0b\u8f7d\u5373\u4eab\u6781\u901f\u501f\u6b3e<br/>\u88ab\u62d2\u6700\u9ad8\u8d54\u507f<i>50\u5143</i></p></div>                 </div>',
      link: function (scope, element, attrs) {
        scope.isShow = !Platform.isApp;
        scope.close = function ($event) {
          $event.stopPropagation();
          scope.isShow = false;
        };
        scope.download = function () {
          window.location = 'https://credit.xianjincard.com/download-app.html';
        };
      }
    };
  }
]).directive('popupPassword', [
  '$timeout',
  function ($timeout) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        isShow: '=',
        isError: '=',
        sendHandler: '&'
      },
      template: '<div class="popup" id="defray" ng-show="isShow">                  <div class="overlay"></div>                  <div class="dialog pay">                    <span class="close" ng-click="close()"></span>                    <h2>\u8bf7\u8f93\u5165\u4ea4\u6613\u5bc6\u7801</h2>                    <p class="clearfix">                      <i></i> <i></i> <i></i> <i></i> <i></i> <i></i>                      <input type="tel" value="" autofocus>                    </p>                    <p ng-show="isError" class="error-tips">\u5bc6\u7801\u9519\u8bef</p>                    <a nav-direction="forward" href="#/my/findpaypassword?state=loan">\u5fd8\u8bb0\u5bc6\u7801?</a>                  </div>                </div>',
      link: function (scope, element, attrs) {
        scope.close = function () {
          scope.isShow = false;
        };
        scope.$watch('isShow', function (val) {
          if (val) {
            $timeout(function () {
              $('#defray input').focus();
            }, 0);
          }
        });
        scope.$watch(function () {
          return element;
        }, function (elements) {
          var interval = null;
          $('#defray p').click(function (event) {
            $('#defray input').focus();
          });
          $('#defray input').focus(function () {
            var interval = setInterval(function () {
                if (document.activeElement.nodeName == 'INPUT') {
                  // console.log('input')
                  $('#defray .dialog').css({
                    top: 0,
                    marginTop: 0
                  });
                } else {
                  $('#defray .dialog').attr('style', '');
                  if (interval) {
                    clearInterval(interval);
                    interval = null;
                  }
                }
              }, 500);
          });
          $('#defray input').bind('input', function (event) {
            var val = $(this).val();
            $('#defray i').removeClass('point');
            $('#defray i').slice(0, val.length).addClass('point');
            scope.isError = false;
            scope.$apply();
            if (val.length >= 6) {
              $(this).val(val.slice(0, 6));
              scope.sendHandler({ password: $(this).val() });
            }
          });
        });
      }
    };
  }
]).directive('textScroll', [
  '$timeout',
  function ($timeout) {
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
            scope.items.push(scope.items[0]);
          }
        });
        scope.$watch(function () {
          return element[0].children[0];
        }, function (elem) {
          try {
            var l = element[0].children.length;
            var h = elem.offsetHeight;
            var i = 0;
            var t = scope.interval || 1000;
            var setup = function () {
              i++;
              if (i >= l) {
                i = 1;
                element.css('top', 0);
              }
              $(element).animate({ 'top': -h * i });
            };
            setInterval(setup, t);
          } catch (e) {
          }
        });
      }
    };
  }
]).factory('Domain', [
  '$location',
  function ($location) {
    var host = $location.$$host;
    var reg = /(?:http(?:s)?:\/\/)?(?:www\.)?(.*?)\./;
    var regR = /https?:\/\/(?:[^\/]+\.)?([^.\/]+\.(?:com))(?:$|\/)/;
    var m = host.match(reg);
    var domain = {
        credit: $location.$$protocol + '://' + $location.$$host + '/credit/web/',
        api: $location.$$protocol + '://' + $location.$$host + '/frontend/web/',
        h5: $location.$$protocol + '://' + $location.$$host + '/h5/mobile/web/'
      };
    if (m !== null) {
      if (m[1] === 'h5') {
        domain = {
          credit: $location.$$protocol + '://credit.xianjincard.com/',
          api: $location.$$protocol + '://api.xianjincard.com/',
          h5: $location.$$protocol + '://h5.xianjincard.com/'
        };
      }
      if (m[1] === 'pre-h5') {
        domain = {
          credit: $location.$$protocol + '://pre-credit.xianjincard.com/',
          api: $location.$$protocol + '://pre-api.xianjincard.com/',
          h5: $location.$$protocol + '://pre-h5.xianjincard.com/'
        };
      }
      if (m[1] === 'test-h5') {
        domain = {
          credit: $location.$$protocol + '://test-credit.xianjincard.com/',
          api: $location.$$protocol + '://test-api.xianjincard.com/',
          h5: $location.$$protocol + '://test-h5.xianjincard.com/'
        };
      }
      if (host == '192.168.39.214') {
        domain = {
          credit: $location.$$protocol + '://' + $location.$$host + '/kdkj/credit/web/',
          api: $location.$$protocol + '://' + $location.$$host + '/kdkj/frontend/web/',
          h5: $location.$$protocol + '://' + $location.$$host + '/kdkj/h5/mobile/web/'
        };
      }
      if (host == '121.42.12.69') {
        domain = {
          credit: $location.$$protocol + '://' + $location.$$host + '/koudai/kdkj/credit/web/',
          api: $location.$$protocol + '://' + $location.$$host + '/koudai/kdkj/frontend/web/',
          h5: $location.$$protocol + '://' + $location.$$host + '/koudai/kdkj/h5/mobile/web/'
        };
      }
    }
    return {
      resolveUrl: function (url) {
        var arr = url.match(reg);
        if (domain[arr[1]]) {
          return url.replace(regR, domain[arr[1]]);
        }
        return url.replace(/^https?/, $location.$$protocol);
      },
      domain: domain
    };
  }
]).factory('Platform', [
  '$location',
  function ($location) {
    function param(name) {
      // Check if param is set in url#hash
      if ($location.search()[name] !== void 0) {
        return $location.seach()[name];
      }
      // Otherwise check url params
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'), results = regex.exec(location.search);
      return results === null ? void 0 : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
    var u = navigator.userAgent;
    var versions = u.split('/');
    return {
      getParamByName: param,
      appVersion: versions[versions.length - 1],
      isApp: u.indexOf('kdxj') === -1 ? false : true,
      isAndroid: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
      isIos: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      isWeixin: u.indexOf('MicroMessenger') > -1,
      isQQ: u.match(/\sQQ/i) == ' qq'
    };
  }
]).factory('Popup', [
  '$ionicPopup',
  function ($ionicPopup) {
    function alert(message, callback) {
      $ionicPopup.alert({
        title: '\u63d0\u793a',
        template: message,
        okText: '\u786e\u5b9a',
        okType: 'button-credit'
      }).then(function (res) {
        if (typeof callback === 'function')
          callback();
      });
    }
    var confirm = function (data) {
      $ionicPopup.confirm({
        title: data.title || '\u786e\u8ba4',
        template: data.content,
        cancelText: '\u53d6\u6d88',
        cancelType: 'button-credit-gray',
        okText: '\u786e\u5b9a',
        okType: 'button-credit'
      }).then(function (res) {
        if (typeof data.callback === 'function') {
          data.callback(res);
        }
        if (res) {
          if (typeof data.ok === 'function') {
            data.ok();
          }
        } else {
          if (typeof data.cance === 'function') {
            data.cance();
          }
        }
      });
    };
    return {
      alert: alert,
      confirm: confirm
    };
  }
]).factory('HttpInterceptor', [
  '$q',
  '$injector',
  function ($q, $injector) {
    var httpInterceptor = {
        'responseError': function (response) {
          return $q.reject(response);
        },
        'response': function (response) {
          // 服务器错误
          if (response.status !== 200) {
            var Popup = $injector.get('Popup');
            var $ionicLoading = $injector.get('$ionicLoading');
            $ionicLoading.hide();
            Popup.alert('\u8bf7\u6c42\u4e0d\u6210\u529f');
            return $q.reject(response);
          }
          // 接口异常
          if (response.data.code !== undefined && response.data.code == -2) {
            // console.log(response.data)
            var Popup = $injector.get('Popup');
            var $ionicLoading = $injector.get('$ionicLoading');
            $ionicLoading.hide();
            Popup.alert(response.data.message, function () {
              var $state = $injector.get('$state');
              $state.go('login');
            });
            return $q.reject(response);
          }
          // console.log('http interceptor response', response);
          return response;
        },
        'request': function (config) {
          return config;
        },
        'requestError': function (config) {
          return $q.reject(config);
        }
      };
    return httpInterceptor;
  }
]).filter('isEmpty', function () {
  var bar;
  return function (obj) {
    for (bar in obj) {
      if (obj.hasOwnProperty(bar)) {
        return false;
      }
    }
    return true;
  };
}).filter('trusted', [
  '$sce',
  function ($sce) {
    return function (html) {
      return $sce.trustAsHtml(html);
    };
  }
]);
angular.module('reward', [
  'credit',
  'ionic',
  'rewardControllers',
  'rewardFactory'
]).run([
  '$ionicPlatform',
  function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  }
]).config([
  '$httpProvider',
  '$compileProvider',
  '$stateProvider',
  '$urlRouterProvider',
  '$ionicConfigProvider',
  function ($httpProvider, $compileProvider, $stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.tabs.style('standard');
    $ionicConfigProvider.navBar.alignTitle('center');
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|http?|wap2app|schemekdlc|kdlc.app.launch):/);
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push('HttpInterceptor');
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    });
    $urlRouterProvider.otherwise('/');
  }
]);
angular.module('rewardFactory', []).factory('RewardService', [
  'Domain',
  '$http',
  'Platform',
  '$location',
  '$httpParamSerializerJQLike',
  function (Domain, $http, Platform, $location, $httpParamSerializerJQLike) {
    return {
      register: function (params) {
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-info/user-offer-reward');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(params),
          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
        }).then(function (response) {
          return response.data;
        });
      }
    };
  }
]);
angular.module('rewardControllers', []).controller('HomeController', [
  '$scope',
  'RewardService',
  '$ionicLoading',
  '$location',
  'Popup',
  'Platform',
  function ($scope, RewardService, $ionicLoading, $location, Popup, Platform) {
    $scope.notApp = !Platform.isApp;
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
        };
      angular.extend(defaults, params);
      // console.log(JSON.stringify(obj))
      if (typeof nativeMethod !== 'undefined') {
        nativeMethod.shareMethod(JSON.stringify(defaults));
      }
    }({
      'share_title': '\u73b0\u91d1\u5361\u91cd\u91d1\u62db\u52df\u533a\u57df\u4ee3\u7406\u4eba\uff01',
      'share_body': '5000\u4e07\u8d4f\u91d1\u865a\u4f4d\u4ee5\u5f85\uff0c\u5bfb\u627e\u4e0e\u4f17\u4e0d\u540c\u7684\u4f60\uff0cI want you\uff01',
      'share_url': 'https://h5.xianjincard.com/activity/reward/index.html',
      'share_logo': 'http://h5.xianjincard.com/activity/reward/img/share.png',
      'type': '1'
    }));
    let tag = $location.$$search.tag;
    $scope.close = function () {
      $scope.isShow = false;
    };
    $scope.hold = function (text) {
      if (typeof nativeMethod !== 'undefined' && nativeMethod.copyTextMethod) {
        nativeMethod.copyTextMethod('{"text":"' + text + '","tip":"\u590d\u5236\u6210\u529f!"}');
      }
      return false;
    };
    $scope.submit = function (myForm, user) {
      // console.log(myForm,user)
      if (myForm.name.$error.required) {
        Popup.alert('\u8bf7\u8f93\u5165\u59d3\u540d');
        return;
      }
      if (myForm.phone.$error.required) {
        Popup.alert('\u8bf7\u8f93\u5165\u624b\u673a\u53f7');
        return;
      }
      if (!myForm.phone.$valid) {
        Popup.alert('\u624b\u673a\u53f7\u9519\u8bef');
        return;
      }
      if (myForm.text.$error.required) {
        Popup.alert('\u8bf7\u8f93\u5165\u7559\u8a00');
        return;
      }
      tag && (user.tag = tag);
      RewardService.register(user).then(function (data) {
        // console.log(data)
        if (data.code != 0) {
          Popup.alert(data.message);
          return;
        }
        $scope.content = data.message.replace('\n', '<br/>');
        $scope.isShow = true;
      });
    };
  }
]);