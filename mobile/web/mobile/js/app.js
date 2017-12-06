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
      template: '<div ng-show="isShow" ng-click="download()" class="download-popup">                   <a href="" class="close" ng-click="close($event)"></a>                   <img alt="" src="//h5.dahubao.com/credit/img/download-logo.png"/>                   <div><p>\u4e0b\u8f7d\u5373\u4eab\u6781\u901f\u501f\u6b3e<br/>\u88ab\u62d2\u6700\u9ad8\u8d54\u507f<i>50\u5143</i></p></div>                 </div>',
      link: function (scope, element, attrs) {
        scope.isShow = !Platform.isApp;
        scope.close = function ($event) {
          $event.stopPropagation();
          scope.isShow = false;
        };
        scope.download = function () {
          window.location = 'https://credit.dahubao.com/download-app.html';
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
        title: '=',
        isHref: '=',
        isShow: '=',
        isError: '=',
        sendHandler: '&'
      },
      template: '<div class="popup" id="defray" ng-show="isShow">                  <div class="overlay"></div>                  <div class="dialog pay">                    <span class="close" ng-click="close()"></span>                    <h2>{{title}}</h2>                    <p class="clearfix">                      <i></i> <i></i> <i></i> <i></i> <i></i> <i></i>                      <input type="tel" value="" autofocus>                    </p>                    <p ng-show="isError" class="error-tips">\u5bc6\u7801\u9519\u8bef</p>                    <a ng-show="isHref" nav-direction="forward" href="#/my/findpaypassword?state=loan">\u5fd8\u8bb0\u5bc6\u7801?</a>                  </div>                </div>',
      link: function (scope, element, attrs) {
        scope.close = function () {
          scope.isShow = false;
        };
        scope.$watch('isShow', function (val) {
          if (val) {
            $timeout(function () {
              scope.isError = false;
              $('#defray .error-tips').text('\u5bc6\u7801\u9519\u8bef');
              $('#defray input').val('');
              $('#defray i').removeClass('point');
              $('#defray input').focus();
            }, 0);
          }
        });
        scope.$watch(function () {
          return element;
        }, function (elements) {
          $('#defray div.overlay').click(function (e) {
            e.stopPropagation();
            $('#defray input').blur();
          });
          var interval = null;
          $('#defray p').click(function (event) {
            $('#defray input').focus();
          });
          $('#defray input').focus(function () {
            var interval = setInterval(function () {
                if (document.activeElement.nodeName == 'INPUT') {
                  var top = $('#defray .dialog').position.top;
                  if (top <= 0) {
                    return;
                  }
                  document.body.scrollTop = 0;
                  $('#defray .dialog').animate({
                    top: 0,
                    marginTop: 0
                  }, 100);
                } else {
                  $('#defray .dialog').attr('style', '');
                  if (interval) {
                    clearInterval(interval);
                    interval = null;
                  }
                }
              }, 200);
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
        h5: $location.$$protocol + '://' + $location.$$host + '/h5/mobile/web/',
        h: $location.$$protocol + '://' + $location.$$host + ':8000/'
      };
    if (m !== null) {
      if (m[1] === 'h5') {
        domain = {
          credit: $location.$$protocol + '://credit.dahubao.com/',
          api: $location.$$protocol + '://api.dahubao.com/',
          h5: $location.$$protocol + '://h5.dahubao.com/',
          h: $location.$$protocol + '://h.dahubao.com/'
        };
      }
      if (m[1] === 'pre-h5') {
        domain = {
          credit: $location.$$protocol + '://pre-credit.dahubao.com/',
          api: $location.$$protocol + '://pre-api.dahubao.com/',
          h5: $location.$$protocol + '://pre-h5.dahubao.com/',
          h: $location.$$protocol + '://pre-h.dahubao.com/'
        };
      }
      if (m[1] === 'test-h5') {
        domain = {
          credit: $location.$$protocol + '://test-credit.dahubao.com/',
          api: $location.$$protocol + '://test-api.dahubao.com/',
          h5: $location.$$protocol + '://test-h5.dahubao.com/',
          h: $location.$$protocol + '://test-h.dahubao.com/'
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
          if (response.data.code !== undefined && response.data.code == -99999) {
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
          // m版请求标识
          if (!/\.html/.test(config.url)) {
          }
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
]).filter('private', function () {
  return function (str) {
    if (!str)
      return '';
    str = '' + str;
    return str.substring(0, str.length - 4) + '****';
  };
}).filter('toBig', function () {
  return function (num) {
    num = num + '';
    for (var i = num.length - 1; i >= 0; i--) {
      num = num.replace(',', '');
      // 替换num中的“,”
      num = num.replace(' ', '');
    }
    if (isNaN(num)) {
      // 验证输入的字符是否为数字
      // alert('请检查小写金额是否正确')
      return;
    }
    // 字符处理完毕后开始转换，采用前后两部分分别转换
    var part = String(num).split('.');
    var newchar = '';
    // 小数点前进行转化
    for (i = part[0].length - 1; i >= 0; i--) {
      if (part[0].length > 10) {
        // alert('位数过大，无法计算')
        return '';
      }
      // 若数量超过拾亿单位，提示
      var tmpnewchar = '';
      var perchar = part[0].charAt(i);
      switch (perchar) {
      case '0':
        tmpnewchar = '\u96f6' + tmpnewchar;
        break;
      case '1':
        tmpnewchar = '\u58f9' + tmpnewchar;
        break;
      case '2':
        tmpnewchar = '\u8d30' + tmpnewchar;
        break;
      case '3':
        tmpnewchar = '\u53c1' + tmpnewchar;
        break;
      case '4':
        tmpnewchar = '\u8086' + tmpnewchar;
        break;
      case '5':
        tmpnewchar = '\u4f0d' + tmpnewchar;
        break;
      case '6':
        tmpnewchar = '\u9646' + tmpnewchar;
        break;
      case '7':
        tmpnewchar = '\u67d2' + tmpnewchar;
        break;
      case '8':
        tmpnewchar = '\u634c' + tmpnewchar;
        break;
      case '9':
        tmpnewchar = '\u7396' + tmpnewchar;
        break;
      }
      switch (part[0].length - i - 1) {
      case 0:
        break;
      case 1:
        if (perchar != 0)
          tmpnewchar = tmpnewchar + '\u62fe';
        break;
      case 2:
        if (perchar != 0)
          tmpnewchar = tmpnewchar + '\u4f70';
        break;
      case 3:
        if (perchar != 0)
          tmpnewchar = tmpnewchar + '\u4edf';
        break;
      case 4:
        tmpnewchar = tmpnewchar + '\u4e07';
        break;
      case 5:
        if (perchar != 0)
          tmpnewchar = tmpnewchar + '\u62fe';
        break;
      case 6:
        if (perchar != 0)
          tmpnewchar = tmpnewchar + '\u4f70';
        break;
      case 7:
        if (perchar != 0)
          tmpnewchar = tmpnewchar + '\u4edf';
        break;
      case 8:
        tmpnewchar = tmpnewchar + '\u5104';
        break;
      case 9:
        tmpnewchar = tmpnewchar + '\u62fe';
        break;
      }
      newchar = tmpnewchar + newchar;
    }
    // 替换所有无用汉字，直到没有此类无用的数字为止
    while (newchar.search('\u96f6\u96f6') != -1 || newchar.search('\u96f6\u5104') != -1 || newchar.search('\u5104\u4e07') != -1 || newchar.search('\u96f6\u4e07') != -1) {
      newchar = newchar.replace('\u96f6\u5104', '\u5104');
      newchar = newchar.replace('\u5104\u4e07', '\u5104');
      newchar = newchar.replace('\u96f6\u4e07', '\u4e07');
      newchar = newchar.replace('\u96f6\u96f6', '\u96f6');
    }
    // 替换以“一十”开头的，为“十”
    if (newchar.indexOf('\u58f9\u62fe') == 0) {
      newchar = newchar.substr(1);
    }
    // 替换以“零”结尾的，为“”
    if (newchar.lastIndexOf('\u96f6') == newchar.length - 1) {
      newchar = newchar.substr(0, newchar.length - 1);
    }
    return newchar;
  };
});
angular.module('_config', []).factory('Env', function () {
  return { env: 'pro' };
});
angular.module('mobile', [
  '_config',
  'credit',
  'rzModule',
  'ionic',
  'mobileControllers',
  'mobileFactory',
  'ionicPicker',
  'radialIndicator',
  'ngFileUpload'
]).run([
  '$ionicPlatform',
  '$rootScope',
  function ($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function () {
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
    $rootScope.$on('$stateChangeStart', function () {
      var cancel = document.querySelector('.picker-tools-button.cancel-button');
      cancel && cancel.click();
    });
  }
]).config([
  '$locationProvider',
  '$httpProvider',
  '$compileProvider',
  '$stateProvider',
  '$urlRouterProvider',
  '$ionicConfigProvider',
  function ($locationProvider, $httpProvider, $compileProvider, $stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.tabs.style('standard');
    $ionicConfigProvider.navBar.alignTitle('center');
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|http?|wap2app|schemekdlc|kdlc.app.launch):/);
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push('HttpInterceptor');
    $stateProvider.state('test', {
      url: '/test',
      templateUrl: 'templates/test.html',
      controller: 'TestController'
    }).state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginController'
    }).state('login-next', {
      url: '/login-next',
      templateUrl: 'templates/login-next.html',
      controller: 'LoginNextController',
      params: {
        phone: null,
        redirectUrl: null,
        appMarket: null,
        invite_code: null
      }
    }).state('reset-password', {
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
    }).state('loan', {
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
    }).state('tab', {
      url: '',
      abstract: true,
      templateUrl: 'templates/tabs.html',
      controller: 'TabController'
    }).state('tab.home', {
      url: '/',
      views: {
        'tab-view': {
          templateUrl: 'templates/home.html',
          controller: 'HomeController'
        }
      }
    }).state('tab.repayment', {
      url: '/repayment',
      views: {
        'tab-view': {
          templateUrl: 'templates/repayment.html',
          controller: 'RepaymentController'
        }
      }
    }).state('tab.my', {
      url: '/my',
      views: {
        'tab-view': {
          templateUrl: 'templates/my.html',
          controller: 'MyController'
        }
      }
    }).state('orders', {
      url: '/my/orders',
      templateUrl: 'templates/my/orders.html',
      controller: 'ordersController'
    }).state('certification', {
      url: '/my/certification',
      templateUrl: 'templates/my/certification.html',
      controller: 'CertificationController',
      params: { origin: null }
    }).state('information', {
      url: '/my/certification/information',
      templateUrl: 'templates/my/information.html',
      controller: 'InformationController',
      params: {
        position: '',
        address: '',
        lng: '',
        lat: ''
      }
    }).state('contacts', {
      url: '/my/certification/contacts',
      templateUrl: 'templates/my/contacts.html',
      controller: 'ContactsController'
    }).state('bank', {
      url: '/my/certification/bank',
      templateUrl: 'templates/my/bank.html',
      controller: 'BankController'
    }).state('card', {
      url: '/my/card',
      templateUrl: 'templates/my/card.html',
      controller: 'CardController'
    }).state('position', {
      url: '/my/certification/information/position',
      templateUrl: 'templates/my/position.html',
      controller: 'PositionController'
    }).state('paypassword', {
      url: '/my/paypassword',
      templateUrl: 'templates/my/paypassword.html',
      controller: 'PayPasswordController',
      params: { state: '' }
    }).state('findpaypassword', {
      url: '/my/findpaypassword',
      templateUrl: 'templates/my/findpaypassword.html',
      controller: 'FindPayPasswordController',
      params: { state: '' }
    }).state('setpaypassword', {
      url: '/my/setpaypassword',
      templateUrl: 'templates/my/setpaypassword.html',
      controller: 'SetPayPasswordController',
      params: {
        state: '',
        phone: '',
        code: ''
      }
    }).state('zhimaVerify', {
      url: '/my/certification/zhima-verify',
      templateUrl: 'templates/my/zhima-verify.html',
      controller: 'zhimaVerifyController'
    }).state('zhima', {
      url: '/my/certification/zhima',
      templateUrl: 'templates/my/zhima.html'
    }).state('findwechat', {
      url: '/findwechat',
      templateUrl: 'templates/findwechat.html'
    }).state('helpcenter', {
      url: '/my/helpcenter',
      templateUrl: 'templates/my/helpcenter.html',
      controller: 'HelpCenterController'
    }).state('helpdetail', {
      url: '/my/helpcenter/detail',
      templateUrl: 'templates/my/helpdetail.html',
      controller: 'HelpDetailController',
      params: {
        block: null,
        id: null
      }
    }).state('agreement', {
      url: '/agreement',
      templateUrl: 'templates/agreements/platform2.html',
      controller: 'AgreementController'
    }).state('agreement2', {
      url: '/agreement/2',
      templateUrl: 'templates/agreements/platform2.html',
      controller: 'AgreementController'
    }).state('agreement3', {
      url: '/agreement/3',
      templateUrl: 'templates/agreements/platform3.html',
      controller: 'AgreementController'
    }).state('agree-loan', {
      url: '/agreement/loan',
      templateUrl: 'templates/agreements/loan.html',
      controller: 'AgreementController'
    }).state('agree-auth', {
      url: '/agreement/auth',
      templateUrl: 'templates/agreements/auth.html',
      controller: 'AgreementController'
    });
    $urlRouterProvider.otherwise('/');
  }
]);
angular.module('mobileControllers', []).controller('TabController', [
  'Domain',
  function (Domain) {
  }
]).controller('LoanController', [
  '$window',
  'Platform',
  '$timeout',
  '$location',
  '$stateParams',
  'Popup',
  '$rootScope',
  '$scope',
  'MobileService',
  '$ionicLoading',
  '$ionicViewSwitcher',
  '$state',
  function ($window, Platform, $timeout, $location, $stateParams, Popup, $rootScope, $scope, MobileService, $ionicLoading, $ionicViewSwitcher, $state) {
    if (!$stateParams.money) {
      if (!$window.localStorage.getItem('money')) {
        $ionicViewSwitcher.nextDirection('forward');
        $state.go('tab.home');
        return;
      }
      $stateParams.money = $window.localStorage.getItem('money');
      $stateParams.period = $window.localStorage.getItem('period');
      $stateParams.card_type = $window.localStorage.getItem('card_type');
      $stateParams.item = JSON.parse($window.localStorage.getItem('item'));
      $window.localStorage.removeItem('money');
      $window.localStorage.removeItem('period');
      $window.localStorage.removeItem('item');
      $window.localStorage.removeItem('card_type');
    }
    $scope.item = $stateParams.item;
    $scope.item.tips = $scope.item.tips.replace(/(\d+\.?\d+)/g, '<b>$1</b>');
    $scope.isAgress = true;
    $scope.isHref = $scope.item.real_pay_pwd_status === 1 ? true : false;
    $scope.passwordTitle = $scope.item.real_pay_pwd_status === 1 ? '\u8bf7\u8f93\u5165\u4ea4\u6613\u5bc6\u7801' : '\u8bf7\u8bbe\u7f6e\u4ea4\u6613\u5bc6\u7801';
    $scope.onAgree = function () {
      $scope.isAgress = !$scope.isAgress;
    };
    $scope.onHref = function ($event) {
      $event.stopPropagation();
      $window.localStorage.setItem('money', $stateParams.money);
      $window.localStorage.setItem('period', $stateParams.period);
      $window.localStorage.setItem('card_type', $stateParams.card_type);
      $window.localStorage.setItem('item', JSON.stringify($stateParams.item));
      location.href = $scope.item.protocol_url;
    };
    $scope.isPicker = false;
    $scope.ticket = '\u4e0d\u4f7f\u7528\u5238';
    $scope.selectIndex = -1;
    //没有选中的
    $scope.showPicker = function () {
      if ($scope.item.coupon_total <= 0)
        return;
      $scope.isPicker = true;
      $scope.pickerAction = 'picker-ticket-action';
    };
    $scope.closePicker = function () {
      $timeout(function () {
        $scope.isPicker = false;
      }, 300);
      $scope.pickerAction = '';
    };
    $scope.notPicker = function () {
      $scope.ticket = '\u4e0d\u4f7f\u7528\u5238';
      $scope.selectedTicketClass = '';
      $scope.closePicker();
      $scope.selectIndex = -1;
      //没选择券
      loadLoan();
    };
    var loadLoan = function () {
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
      var loan = {
          'period': $stateParams.period,
          'money': $stateParams.money,
          'card_type': $stateParams.card_type
        };
      if ($scope.selectIndex >= 0 && $scope.selectIndex < $scope.item.coupon_list.length) {
        loan['coupon_id'] = $scope.item.coupon_list[$scope.selectIndex].coupon_id;
      }
      MobileService.getConfirmLoan(loan).then(function (data) {
        $ionicLoading.hide();
        if (data.code !== 0) {
          Popup.alert(data.message);
          return;
        }
        if (data.code === 0) {
          $scope.item = data.data.item;
          $scope.item.tips = $scope.item.tips.replace(/(\d+\.?\d+)/g, '<b>$1</b>');
          //选择券请求计算返回，券列表第一个是选中的，所以selectIndex = 0
          if ($scope.selectIndex !== -1) {
            $scope.selectIndex = 0;
            $scope.ticket = $scope.item.coupon_list[0].str_amount;
          }
        }
      });
    };
    $scope.selectPicker = function (coupon, index) {
      $scope.selectIndex = index;
      $scope.closePicker();
      $scope.ticket = coupon.str_amount;
      $scope.selectedTicketClass = 'selected-ticket-class';
      loadLoan();
    };
    $scope.confirm = function () {
      $scope.isShow = true;
    };
    var oldPass = null;
    var setPassword = function (password) {
      if ($scope.passwordTitle === '\u8bf7\u8bbe\u7f6e\u4ea4\u6613\u5bc6\u7801') {
        $timeout(function () {
          oldPass = password;
          $scope.passwordTitle = '\u8bf7\u786e\u8ba4\u4ea4\u6613\u5bc6\u7801';
          $('#defray input').val('');
          $('#defray i').removeClass('point');
        }, 0);
        return;
      }
      if (password !== oldPass) {
        $('#defray .error-tips').text('\u4e24\u6b21\u8f93\u5165\u4ea4\u6613\u5bc6\u7801\u4e0d\u540c\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165');
        $timeout(function () {
          $scope.error = true;
        }, 0);
        return;
      }
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
      MobileService.setPayPassword({ 'password': password }).then(function (response) {
        $ionicLoading.hide();
        if (response.code == -1) {
          Popup.alert(response.message);
          return;
        } else {
          $scope.isHref = true;
          $scope.passwordTitle = '\u8bf7\u8f93\u5165\u4ea4\u6613\u5bc6\u7801';
          $scope.isShow = false;
          Popup.alert('\u4ea4\u6613\u5bc6\u7801\u8bbe\u7f6e\u6210\u529f', function () {
            $scope.isShow = true;
          });
        }
      });
    };
    var confirmLoan = function (password) {
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
      var loan = {
          'period': $stateParams.period,
          'money': $scope.item.money,
          'card_type': $stateParams.card_type
        };
      loan.pay_password = password;
      loan.order_other = 2;
      if ($scope.selectIndex >= 0 && $scope.selectIndex < $scope.item.coupon_list.length) {
        loan['coupon_id'] = $scope.item.coupon_list[0].coupon_id;
      }
      MobileService.applyLoan(loan).then(function (data) {
        $ionicLoading.hide();
        if (data.code === 3) {
          $scope.error = true;
          return;
        }
        if (data.code === 2) {
          Popup.alert(data.message, function () {
            $state.go('paypassword', { state: 'loan' });
          });
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
    };
    $scope.applyLoan = function (password) {
      $scope.isHref ? confirmLoan(password) : setPassword(password);
    };
  }
]).controller('zhimaVerifyController', [
  'Popup',
  '$location',
  '$state',
  '$scope',
  '$ionicLoading',
  function (Popup, $location, $state, $scope, $ionicLoading) {
    var param = $location.$$search;
    if (/^(https?:\/\/)/.test(param.url)) {
      window.location.href = param.url;
    } else {
      Popup.alert('\u4eb2\uff0c\u8bf7\u5148\u586b\u5199\u4e2a\u4eba\u4fe1\u606f\u54e6~', function () {
        if (navigator.userAgent.indexOf('kdkj') >= 0) {
          window.nativeMethod && window.nativeMethod.returnNativeMethod('{"type" : "0"}');
          return;
        }
      });
    }
  }
]).controller('PayPasswordController', [
  '$scope',
  '$ionicLoading',
  '$ionicViewSwitcher',
  '$state',
  'Popup',
  '$stateParams',
  'MobileService',
  'Domain',
  '$location',
  function ($scope, $ionicLoading, $ionicViewSwitcher, $state, Popup, $stateParams, MobileService, Domain, $location) {
    $scope.active = false;
    $scope.data = {
      phone: 0,
      verify: 0,
      loaded: 0
    };
    $scope.form = {};
    var state = $location.$$search.state || $stateParams.state || 'certification';
    // setPayPassword
    $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
    MobileService.getMyInfo().then(function (response) {
      $scope.data = response.data.item;
      $scope.data.verify = $scope.data.verify_info.real_pay_pwd_status;
      $ionicLoading.hide();
    });
    $scope.save = function (form) {
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
      var type = 'setPayPassword';
      var data = {};
      if ($scope.data.verify) {
        type = 'changePayPassword';
        data.old_pwd = form.old_pwd;
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
                window.location.href = Domain.resolveUrl('http://h.shanxiancard.com/certification');
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
  }
]).controller('FindPayPasswordController', [
  '$scope',
  '$location',
  '$stateParams',
  '$ionicViewSwitcher',
  '$state',
  'Popup',
  '$ionicLoading',
  '$q',
  '$interval',
  'MobileService',
  function ($scope, $location, $stateParams, $ionicViewSwitcher, $state, Popup, $ionicLoading, $q, $interval, MobileService) {
    $scope.active = false;
    $scope.form = {
      type: 'find_pay_pwd',
      code: '',
      phone: '',
      realname: '',
      id_card: ''
    };
    var state = $location.$$search.state || $stateParams.state || 'certification';
    $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
    MobileService.getBaseInformation().then(function (response) {
      $scope.data = response.data.item;
      $scope.form.phone = $scope.data.phone;
      // fill data
      // $scope.form.id_card = $scope.data.id_number;
      // $scope.form.realname = $scope.data.name;
      $scope.data.phone = function () {
        return $scope.data.phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
      }();
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
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
      MobileService.verifyResetPayPassword(form).then(function (response) {
        $ionicLoading.hide();
        if (response.code == -1) {
          Popup.alert(response.message);
          return;
        } else {
          $ionicViewSwitcher.nextDirection('forward');
          $state.go('setpaypassword', {
            state: state,
            phone: form.phone,
            code: form.code
          });
        }
      });
    };
    $scope.sendCodeLock = false;
    $scope.sendCodeFirstSend = false;
    $scope.sendCodeFirstText = '\u83b7\u53d6\u9a8c\u8bc1\u7801';
    $scope.sendCodeText = $scope.sendCodeFirstText;
    $scope.sendCodeTimer = undefined;
    $scope.sendVerifyCode = function () {
      if (!$scope.sendCodeLock) {
        $scope.sendCodeLock = true;
        $scope.sendCodeFirstSend = true;
        $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
        MobileService.sendVerifyCode($scope.form).then(function (response) {
          $ionicLoading.hide();
          countdown().then(function () {
            $scope.sendCodeText = '\u91cd\u65b0\u83b7\u53d6';
            $scope.sendCodeLock = false;
          });
        });
      }
    };
    function countdown() {
      var deferred = $q.defer();
      var count = 60;
      $scope.sendCodeText = [
        count,
        '\u79d2'
      ].join('');
      $scope.sendCodeTimer = $interval(function () {
        if (count <= 1) {
          $scope.sendCodeTimer && $interval.cancel($scope.sendCodeTimer);
          deferred.resolve();
        }
        $scope.sendCodeText = [
          --count,
          '\u79d2'
        ].join('');
      }, 1000);
      return deferred.promise;
    }
  }
]).controller('SetPayPasswordController', [
  '$scope',
  'Popup',
  '$state',
  'Domain',
  '$ionicViewSwitcher',
  '$stateParams',
  '$ionicLoading',
  'MobileService',
  function ($scope, Popup, $state, Domain, $ionicViewSwitcher, $stateParams, $ionicLoading, MobileService) {
    $scope.active = false;
    $scope.form = {};
    var param = $stateParams;
    if (param.phone == '' && param.code == '') {
      Popup.alert('\u7f3a\u5c11\u53c2\u6570', function () {
        $ionicViewSwitcher.nextDirection('back');
        $state.go('findpaypassword', { state: param.state });
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
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
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
              window.location.href = Domain.resolveUrl('http://z.haiqutrip.com/certification');
            } else {
              $ionicViewSwitcher.nextDirection('back');
              $state.go(state);
            }
          });
        }
      });
    };
  }
]).filter('removeProtocol', function () {
  return function (url) {
    return url ? url.replace(/^(https?):/, '') : url;
  };
}).directive('noResult', function () {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    templateUrl: 'templates/common/noresult.html'
  };
}).directive('ngState', [
  '$ionicViewSwitcher',
  '$state',
  function ($ionicViewSwitcher, $state) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        angular.element(element).on('click', function () {
          $ionicViewSwitcher.nextDirection('forward');
          $state.go(attrs.ngState);
        });
      }
    };
  }
]);
angular.module('mobileFactory', []).factory('MobileService', [
  'Env',
  'Domain',
  'Platform',
  '$http',
  '$location',
  '$ionicPopup',
  '$httpParamSerializerJQLike',
  function (Env, Domain, Platform, $http, $location, $ionicPopup, $httpParamSerializerJQLike) {
    var root_url = Env.env == 'pro' ? '//z.haiqutrip.com/' : '//118.31.187.187/frontend/web/';
    function $post(url, data) {
      return $http({
        method: 'POST',
        url: url,
        data: $httpParamSerializerJQLike(data),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
      }).then(function (response) {
        return response.data;
      });
    }
    return {
      homeVdsStatistics: function () {
        var url = Domain.resolveUrl(root_url + 'default/get-invite-code');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      getHomeData: function () {
        var url = Domain.resolveUrl(root_url + 'credit-app/multi-index');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      confirmKnow: function (data) {
        var url = Domain.resolveUrl(root_url + 'credit-loan/confirm-failed-loan');
        return $post(url, data);
      },
      getConfirmLoan: function (data) {
        var url = Domain.resolveUrl(root_url + 'credit-loan/get-confirm-loan');
        return $post(url, data);
      },
      applyLoan: function (data) {
        var url = Domain.resolveUrl(root_url + 'credit-loan/apply-loan');
        return $post(url, data);
      },
      getMyLoan: function () {
        var url = Domain.resolveUrl(root_url + 'credit-loan/get-my-loan');
        return $post(url, data);
      },
      regGetCode: function (data) {
        var url = Domain.resolveUrl(root_url + 'user/check-user-register');
        return $post(url, data);
      },
      login: function (data) {
        var url = Domain.resolveUrl(root_url + 'user/login');
        return $post(url, data);
      },
      getCompanyList: function () {
        var url = Domain.resolveUrl(root_url + 'user/get-cooperation-company');
        return $post(url, {});
      },
      register: function (data) {
        var url = data.appMarket ? root_url + 'user/register?appMarket=' + data.appMarket : root_url + 'user/register';
        return $post(url, data);
      },
      getCode: function (data) {
        var url = Domain.resolveUrl(root_url + 'user/reset-pwd-code');
        data.type = 'find_pwd';
        return $post(url, data);
      },
      getCaptcha: function (data) {
        var url = Domain.resolveUrl(root_url + 'user/refresh-captcha');
        data.type = 'captcha-login-reg';
        return $post(url, data);
      },
      refreshCaptcha: function (type) {
        var url = Domain.resolveUrl(root_url + 'user/get-image-captcha?type=' + (type || 1));
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      checkGetCaptcha: function (data) {
        var url = Domain.resolveUrl(root_url + 'user/check-captcha-send-message');
        return $post(url, data);
      },
      checkResetPwdCode: function (data) {
        var url = Domain.resolveUrl(root_url + 'user/check-reset-password-code');
        return $post(url, data);
      },
      resetPassword: function (data) {
        var url = Domain.resolveUrl(root_url + 'user/reset-password');
        return $post(url, data);
      },
      getVerification: function () {
        var url = Domain.resolveUrl(root_url + 'shx-card/get-verification-info');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      getBaseInformation: function () {
        var url = Domain.resolveUrl(root_url + 'credit-info/get-person-info');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      getInformation: function () {
        var url = Domain.resolveUrl(root_url + 'shx-card/get-person-info');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      setInformation: function (data) {
        var url = Domain.resolveUrl(root_url + 'shx-card/save-person-info');
        return $post(url, data);
      },
      setParsonInformation: function (data) {
        var url = Domain.resolveUrl(root_url + 'credit-info/save-person-info');
        return $post(url, data);
      },
      getContacts: function () {
        var url = Domain.resolveUrl(root_url + 'shx-card/get-contacts');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      setContacts: function (data) {
        var url = Domain.resolveUrl(root_url + 'shx-card/save-contacts');
        return $post(url, data);
      },
      getBankCard: function (data) {
        var url = Domain.resolveUrl(root_url + 'shx-card/get-bank-card');
        return $post(url, data);
      },
      addBankCard: function (data) {
        var url = Domain.resolveUrl(root_url + 'shx-card/add-bank-card');
        return $post(url, data);
      },
      bindBankCard: function (data) {
        var url = Domain.resolveUrl(root_url + 'shx-card/do-bind-card');
        return $post(url, data);
      },
      getBankCardCode: function (data) {
        var url = Domain.resolveUrl(root_url + 'bank-card/get-code');
        return $post(url, data);
      },
      getOrders: function (data) {
        var url = Domain.resolveUrl(root_url + 'credit-loan/get-my-orders');
        return $post(url, data);
      },
      getMyInfo: function () {
        var url = Domain.resolveUrl(root_url + 'user/get-info');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      setPayPassword: function (data) {
        var url = Domain.resolveUrl(root_url + 'user/set-paypassword');
        return $post(url, data);
      },
      changePayPassword: function (data) {
        var url = Domain.resolveUrl(root_url + 'user/change-paypassword');
        return $post(url, data);
      },
      sendVerifyCode: function (data) {
        var url = Domain.resolveUrl(root_url + 'user/reset-pwd-code');
        return $post(url, data);
      },
      verifyResetPayPassword: function (data) {
        var url = Domain.resolveUrl(root_url + 'user/verify-reset-password');
        return $post(url, data);
      },
      resetPayPassword: function (data) {
        var url = Domain.resolveUrl(root_url + 'user/reset-pay-password');
        return $post(url, data);
      },
      setPayPassword: function (data) {
        var url = Domain.resolveUrl(root_url + 'user/set-paypassword');
        return $post(url, data);
      },
      logout: function () {
        var url = Domain.resolveUrl(root_url + 'user/logout');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      bindWechat: function () {
        var url = Domain.resolveUrl(root_url + 'user/bind-wx');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      getLoanContract: function (data) {
        var url = Domain.resolveUrl(root_url + 'user/get-contact-info');
        return $post(url, data);
      }
    };
  }
]);
angular.module('mobileControllers').controller('AgreementController', [
  '$ionicSlideBoxDelegate',
  '$location',
  '$ionicPopup',
  'Popup',
  '$ionicViewSwitcher',
  '$state',
  '$ionicScrollDelegate',
  '$rootScope',
  '$location',
  'Platform',
  'Domain',
  '$scope',
  '$ionicLoading',
  '$timeout',
  '$ionicSlideBoxDelegate',
  'Popup',
  'MobileService',
  function ($ionicSlideBoxDelegate, $location, $ionicPopup, Popup, $ionicViewSwitcher, $state, $ionicScrollDelegate, $rootScope, $location, Platform, Domain, $scope, $ionicLoading, $timeout, $ionicSlideBoxDelegate, Popup, MobileService) {
    $rootScope.currentPage = 'current-home-page';
    $scope.pullingTips = '\u95ea\u7535\u5ba1\u6838\uff0c\u73b0\u91d1\u901f\u8fbe';
    $scope.cIndex = 0;
    $scope.dIndex = 0;
    var ord_id = $location.search().ord_id;
    MobileService.getLoanContract({
      out_order_id: ord_id,
      type: 1
    }).then(function (response) {
      $scope.data = response.data || {};
      if ($scope.data.loan_time) {
        $scope.data.date = $scope.data.loan_time.split(' ')[0];
      }
      console.log($scope.data);
      if ($scope.data.plan_repayment_time) {
        $scope.data.repay_date = $scope.data.plan_repayment_time.split(' ')[0];
        console.log($scope.data.repay_date);
      }
    });  /*
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
     */
  }
]);
angular.module('mobileControllers').controller('BankController', [
  '$scope',
  'Popup',
  '$state',
  '$location',
  '$timeout',
  '$ionicViewSwitcher',
  '$ionicLoading',
  'MobileService',
  function ($scope, Popup, $state, $location, $timeout, $ionicViewSwitcher, $ionicLoading, MobileService) {
    var query = $location.$$search;
    // $scope.linealData = [{type: 0, name: '请选择'}];
    $scope.form = {
      list: [{
          type: 0,
          name: '\u8bf7\u9009\u62e9'
        }],
      lock: false
    };
    $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
    MobileService.getBankCard().then(function (response) {
      $ionicLoading.hide();
      if (response.code != 0) {
        Popup.alert(response.message);
        return;
      }
      var data = response.data;
      if (data && data.item) {
        var item = data.item;  // if(item.is_can_change == 0){
                               //   $scope.form.lock = true;
                               // }
                               // if(item.lineal_mobile && item.lineal_name && item.lineal_relation &&
                               //   item.other_mobile && item.other_name && item.other_relation){
                               //   $scope.form.lock = true;
                               // }
      }
      $scope.form = $.extend(true, $scope.form, data);
      $scope.form.card_default = $scope.form.list[0];
      $scope.sendDisabled = false;
      $scope.codeText = '\u53d1\u9001\u9a8c\u8bc1\u7801';
    });
    var setup = function (m, l) {
      $timeout(function () {
        $scope.codeText = m + '\u79d2\u540e\u91cd\u8bd5';
        if (m) {
          setup(--m, 1000);
        } else {
          $scope.codeText = '\u91cd\u65b0\u53d1\u9001';
          $scope.sendDisabled = false;
        }
      }, l);
    };
    $scope.sendCode = function () {
      // console.log($stateParams.phone)
      var phone = $scope.form.mobile;
      if (!/^1\d{10}$/.test(phone)) {
        Popup.alert('\u624b\u673a\u53f7\u683c\u5f0f\u4e0d\u5bf9');
        return;
      }
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
      MobileService.getBankCardCode({
        phone: phone,
        source: 'shanxianka'
      }).then(function (data) {
        $ionicLoading.hide();
        if (data.code !== 0) {
          Popup.alert(data.message);
          return;
        }
        $scope.sendDisabled = true;
        setup(60);
      });
    };
    $scope.save = function (form) {
      form.bank_id = form.card_default.bank_id || '';
      var data = {
          phone: form.mobile,
          card_no: form.card_no,
          bank_id: form.bank_id,
          code: form.v_code
        };
      if (!data.phone || data.phone.length != 11) {
        Popup.alert('\u94f6\u884c\u624b\u673a\u9884\u7559\u53f7\u7801\u683c\u5f0f\u9519\u8bef');
        return;
      }
      if (!data.card_no || !/^(\d{16}|\d{19})$/.test(data.card_no)) {
        Popup.alert('\u94f6\u884c\u5361\u53f7\u53ea\u80fd16\u621619\u4f4d\u6570\u5b57');
        return;
      }
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
      MobileService.addBankCard(data).then(function (response) {
        $ionicLoading.hide();
        Popup.alert(response.message, function () {
          if (response.code != 0)
            return;
          $state.go('certification');
        });
      });
    };
  }
]);
angular.module('mobileControllers').controller('CardController', [
  '$scope',
  'Popup',
  '$state',
  '$location',
  '$timeout',
  '$ionicViewSwitcher',
  '$ionicLoading',
  'MobileService',
  function ($scope, Popup, $state, $location, $timeout, $ionicViewSwitcher, $ionicLoading, MobileService) {
    var query = $location.$$search;
    // $scope.linealData = [{type: 0, name: '请选择'}];
    $scope.form = {
      list: [{
          type: 0,
          name: '\u8bf7\u9009\u62e9'
        }],
      lock: false
    };
    $scope.visible = false;
    $scope.bindText = '\u786e\u5b9a\u7ed1\u5361';
    $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
    MobileService.getBankCard().then(function (response) {
      $ionicLoading.hide();
      if (response.code != 0) {
        Popup.alert(response.message);
        return;
      }
      var data = response.data;
      if (data && data.item && data.item.length > 0) {
        $scope.visible = true;
        $scope.bindText = '\u91cd\u65b0\u7ed1\u5361';
        $scope.card_info = data.item[0];  // if(item.is_can_change == 0){
                                          //   $scope.form.lock = true;
                                          // }
                                          // if(item.lineal_mobile && item.lineal_name && item.lineal_relation &&
                                          //   item.other_mobile && item.other_name && item.other_relation){
                                          //   $scope.form.lock = true;
                                          // }
      }
      $scope.form = $.extend(true, $scope.form, data);
      $scope.form.card_default = $scope.form.list[0];
      $scope.sendDisabled = false;
      $scope.codeText = '\u53d1\u9001\u9a8c\u8bc1\u7801';
    });
    var setup = function (m, l) {
      $timeout(function () {
        $scope.codeText = m + '\u79d2\u540e\u91cd\u8bd5';
        if (m) {
          setup(--m, 1000);
        } else {
          $scope.codeText = '\u91cd\u65b0\u53d1\u9001';
          $scope.sendDisabled = false;
        }
      }, l);
    };
    $scope.sendCode = function () {
      // console.log($stateParams.phone)
      var phone = $scope.form.mobile;
      if (!/^1\d{10}$/.test(phone)) {
        Popup.alert('\u624b\u673a\u53f7\u683c\u5f0f\u4e0d\u5bf9');
        return;
      }
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
      MobileService.getBankCardCode({
        phone: phone,
        source: 'shanxianka'
      }).then(function (data) {
        $ionicLoading.hide();
        if (data.code !== 0) {
          Popup.alert(data.message);
          return;
        }
        $scope.sendDisabled = true;
        setup(60);
      });
    };
    $scope.save = function (form) {
      // 重新绑卡
      if ($scope.visible) {
        $scope.visible = false;
        $scope.bindText = '\u786e\u5b9a\u7ed1\u5361';
        return;
      }
      // 确定绑卡
      form.bank_id = form.card_default.bank_id || '';
      var data = {
          phone: form.mobile,
          card_no: form.card_no,
          bank_id: form.bank_id,
          code: form.v_code,
          skipValidateCaptcha: 1,
          skipCheckCardRecord: 1
        };
      if (!data.card_no || !/^(\d{16}|\d{19})$/.test(data.card_no)) {
        Popup.alert('\u94f6\u884c\u5361\u53f7\u53ea\u80fd16\u621619\u4f4d\u6570\u5b57');
        return;
      }
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
      MobileService.bindBankCard(data).then(function (response) {
        $ionicLoading.hide();
        Popup.alert(response.message, function () {
          if (response.code != 0)
            return;
          $state.go('certification');
        });
      });
    };
  }
]);
angular.module('mobileControllers').controller('CertificationController', [
  'Platform',
  'Domain',
  '$rootScope',
  '$scope',
  'Popup',
  '$ionicViewSwitcher',
  '$location',
  '$ionicLoading',
  '$ionicViewSwitcher',
  '$state',
  '$ionicLoading',
  '$state',
  'MobileService',
  function (Platform, Domain, $rootScope, $scope, Popup, $ionicViewSwitcher, $location, $ionicLoading, $ionicViewSwitcher, $state, $ionicLoading, $state, MobileService) {
    // location.href = Domain.resolveUrl('https://h.dahubao.com/mobile/certification');
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
        Popup.alert('\u4eb2\uff0c\u8bf7\u5148\u586b\u5199\u4e2a\u4eba\u4fe1\u606f\u54e6~', function () {
        });
        return;
      }
    };
    $scope.doRefresh = function () {
      $scope.items = [];
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
      MobileService.getVerification().then(function (response) {
        var disable = [
            2,
            12,
            7,
            9,
            13,
            14
          ];
        var verify = [
            3,
            4,
            8,
            5
          ];
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
          } else if (tag === 4) {
            items[i].url = '#/my/certification/bank';
            response.data.is_new_user == 1 && (items[i].url += '?new_user=1');
          }
          /*else if ([8].indexOf(tag) >= 0) {
            (!items[i].url && items[i].first_url) && (items[i].url = items[i].first_url);
          }*/
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
              temps[i] += ('?url=' + temps[3]).replace(/\#/g, '%23');
            } else if (i == 3) {
              temps[i] += '?url=' + temps[4].replace(/\#/g, '%23');
            }
          }
          for (var i in $scope.items) {
            var tag = $scope.items[i].tag;
            if (tag == 4) {
              $scope.items[i].url += '?url=' + temps[3].replace(/\#/g, '%23');
            } else if (tag == 5) {
              $scope.items[i].url += '?url=' + temps[4].replace(/\#/g, '%23');
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
  }
]);
angular.module('mobileControllers').controller('ContactsController', [
  '$scope',
  'Popup',
  '$state',
  '$location',
  '$ionicViewSwitcher',
  '$ionicLoading',
  'MobileService',
  function ($scope, Popup, $state, $location, $ionicViewSwitcher, $ionicLoading, MobileService) {
    var query = $location.$$search;
    // $scope.linealData = [{type: 0, name: '请选择'}];
    $scope.form = {
      lineal_list: [{
          type: 0,
          name: '\u8bf7\u9009\u62e9'
        }],
      other_list: [{
          type: 0,
          name: '\u8bf7\u9009\u62e9'
        }],
      lock: false
    };
    $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
    MobileService.getContacts().then(function (response) {
      $ionicLoading.hide();
      if (response.code != 0) {
        Popup.alert(response.message);
        return;
      }
      var data = response.data;
      if (data && data.item) {
        var item = data.item;  // if(item.is_can_change == 0){
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
        Popup.alert('\u76f4\u7cfb\u4eb2\u5c5e\u624b\u673a\u53f7\u7801\u683c\u5f0f\u9519\u8bef');
        return;
      }
      if (data.mobile_spare && data.mobile_spare.length != 11) {
        Popup.alert('\u5176\u4ed6\u8054\u7cfb\u4eba\u624b\u673a\u53f7\u7801\u683c\u5f0f\u9519\u8bef');
        return;
      }
      MobileService.setContacts(data).then(function (response) {
        $ionicLoading.hide();
        Popup.alert(response.message, function () {
          if (response.code != 0)
            return;
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
  }
]);
angular.module('mobileControllers').controller('HelpCenterController', [
  '$scope',
  '$ionicViewSwitcher',
  '$state',
  function ($scope, $ionicViewSwitcher, $state) {
    $scope.list = [
      {
        name: '\u8ba4\u8bc1\u76f8\u5173',
        val: [
          {
            name: '\u4e3a\u4ec0\u4e48\u4f1a\u8bfb\u53d6\u8054\u7cfb\u4eba\u5931\u8d25\uff1f',
            id: '5'
          },
          {
            name: '\u5982\u4f55\u66f4\u6362\u6536\u6b3e\u94f6\u884c\u5361\uff1f',
            id: '8'
          },
          {
            name: '\u624b\u673a\u8fd0\u8425\u5546\u8ba4\u8bc1\u5931\u8d25\u7684\u539f\u56e0\u6709\u54ea\u4e9b\uff1f',
            id: '12'
          }
        ]
      },
      {
        name: '\u501f\u6b3e\u76f8\u5173',
        val: [
          {
            name: '\u5ba1\u6838\u901a\u8fc7\u540e\u591a\u4e45\u6253\u6b3e\uff1f',
            id: '7'
          },
          {
            name: '\u5ba1\u6838\u88ab\u62d2\u7edd\u7684\u539f\u56e0\u4e00\u822c\u6709\u54ea\u4e9b\uff1f',
            id: '8'
          },
          {
            name: '\u5982\u4f55\u63d0\u5347\u4fe1\u7528\u989d\u5ea6\uff1f',
            id: '9'
          }
        ]
      },
      {
        name: '\u8fd8\u6b3e\u76f8\u5173',
        val: [
          {
            name: '\u6bcf\u79cd\u65b9\u5f0f\u9700\u8981\u591a\u4e45\u66f4\u65b0\u8fd8\u6b3e\u72b6\u6001\uff1f',
            id: '2'
          },
          {
            name: '\u5982\u4f55\u8fdb\u884c\u652f\u4ed8\u5b9d\u8fd8\u6b3e\uff1f',
            id: '7'
          },
          {
            name: '\u903e\u671f\u8fd8\u80fd\u7533\u8bf7\u7eed\u671f\u670d\u52a1\u5417\uff1f',
            id: '12'
          }
        ]
      },
      {
        name: '\u8d39\u7528\u76f8\u5173',
        val: [
          {
            name: '\u501f\u6b3e\u8d39\u7528\u5982\u4f55\u6536\u53d6\uff1f',
            id: '1'
          },
          {
            name: '\u903e\u671f\u8d39\u7528\u5982\u4f55\u6536\u53d6\uff1f',
            id: '2'
          },
          {
            name: '\u7eed\u671f\u8d39\u7528\u5982\u4f55\u6536\u53d6\uff1f',
            id: '3'
          }
        ]
      }
    ];
    $scope.detail = function (block, id) {
      var params = {
          block: block,
          id: id
        };
      $ionicViewSwitcher.nextDirection('forward');
      $state.go('helpdetail', params);
    };
  }
]);
angular.module('mobileControllers').controller('HelpDetailController', [
  '$scope',
  '$state',
  '$stateParams',
  function ($scope, $state, $stateParams) {
    $scope.block = $stateParams.block === null ? 0 : $stateParams.block;
    $scope.id = $stateParams.id || 1;
    console.log($stateParams);
  }
]).directive('showHelpDetail', [
  '$ionicViewSwitcher',
  '$state',
  function ($ionicViewSwitcher, $state) {
    return {
      restrict: 'A',
      scope: true,
      controller: [
        '$scope',
        function ($scope) {
          $scope.showTarget = function (element, block, detail) {
            var wrap = element[0];
            var ps = wrap.querySelectorAll('p');
            for (var i = 0; i < ps.length; i++) {
              ps[i].style.display = 'none';
            }
            var block_ul = wrap.querySelectorAll('ul')[block];
            var target_li = block_ul.querySelectorAll('li')[detail];
            var target_p = target_li.querySelector('p');
            target_p.style.display = 'block';
          };
        }
      ],
      link: function (scope, element, attrs) {
        scope.showTarget(element, scope.block, scope.id - 1);
        element.bind('click', function (e) {
          var wrap = element[0];
          var ps = wrap.querySelectorAll('p');
          for (var i = 0; i < ps.length; i++) {
            ps[i].style.display = 'none';
          }
          var target_p = e.target.querySelector('p');
          target_p.style.display = 'block';
        });
      }
    };
  }
]);
angular.module('mobileControllers').controller('HomeController', [
  '$ionicSlideBoxDelegate',
  '$ionicPopup',
  'Popup',
  '$ionicViewSwitcher',
  '$state',
  '$ionicScrollDelegate',
  '$rootScope',
  '$location',
  'Platform',
  'Domain',
  '$scope',
  '$ionicLoading',
  '$timeout',
  '$ionicSlideBoxDelegate',
  'Popup',
  'MobileService',
  function ($ionicSlideBoxDelegate, $ionicPopup, Popup, $ionicViewSwitcher, $state, $ionicScrollDelegate, $rootScope, $location, Platform, Domain, $scope, $ionicLoading, $timeout, $ionicSlideBoxDelegate, Popup, MobileService) {
    $rootScope.currentPage = 'current-home-page';
    $scope.pullingTips = '\u652f\u85aa\u5b9d\uff0c\u5e94\u6025\u597d';
    $scope.cIndex = 0;
    $scope.dIndex = 0;
    /*
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
     */
    if (!$rootScope.awaken && Platform.isIos) {
    }
    if (Platform.isWeixin) {
    }
    $scope.onKnow = function (data) {
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
      MobileService.confirmKnow({ id: data.id }).then(function (result) {
        $ionicLoading.hide();
        if (result.code === 0) {
          location.href = data.active_url;
        } else {
          Popup.alert(result.message);
        }
      });
    };
    $scope.showTips = function () {
      $ionicPopup.alert({
        template: '\u7efc\u5408\u8d39\u7528=\u9884\u652f\u5229\u606f+\u670d\u52a1\u8d39+\u4fe1\u606f\u8ba4\u8bc1\u8d39\uff0c\u7efc\u5408\u8d39\u7528\u5c06\u5728\u501f\u6b3e\u65f6\u4e00\u6b21\u6027\u6263\u9664',
        okText: '\u6211\u77e5\u9053\u4e86',
        okType: 'button-credit'
      });
    };
    //申请借款
    $scope.apply = function (data) {
      $ionicViewSwitcher.nextDirection('forward');
      // _hmt.push(['_trackEvent', 'm版首页', '点击马上申请']);
      if (data.verify_loan_pass === 0) {
        $state.go('certification', { origin: 'home' });
        return;
      }
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
      var day = data.amount_days.days[$scope.dIndex];
      var loan = {
          'period': day,
          'money': $scope.sliderAmount.value,
          'card_type': data.card_type
        };
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
      var length = $scope.data.item.card[$scope.cIndex].amount_days.amounts.length;
      var amount = $scope.data.item.card[$scope.cIndex].amount_days.amounts[length - 1];
      var ratio = interest / amount;
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
          return value + '\u5143';
        },
        onChange: costHandler
      }
    };
    var resetAmount = function (isUpdate) {
      var amounts = $scope.data.item.card[$scope.cIndex].amount_days.amounts;
      $scope.sliderAmount.options.floor = amounts[0] / 100;
      isUpdate || ($scope.sliderAmount.value = amounts[amounts.length - 1] / 100);
      costHandler();
    };
    $scope.slideHasChanged = function (index) {
      console.log(index);
      $scope.cIndex = index;
      resetAmount();
    };
    $scope.switchDay = function (index) {
      $scope.dIndex = index;
      resetAmount(true);
    };
    var handler = function (data) {
      if (data.code != 0) {
        Popup.alert(data.message);
        return;
      }
      $scope.data = data.data;
      $scope.verify_class = $scope.data.item.card[$scope.cIndex]['verify_pass_credit'] ? '#icon-yirenzheng-copy' : '#icon-yirenzhengsvg--copy';
      console.log($scope.verify_class);
      // mock scroll
      $scope.data.user_loan_log_list = ['\u534e\u4ed4\u501f\u6b3e2000\u5143'];
      //console.log(data.data)
      $ionicSlideBoxDelegate.update();
      resetAmount();
    };
    $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
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
  }
]);
angular.module('mobileControllers').controller('InformationController', [
  '$scope',
  'Domain',
  '$location',
  'Popup',
  'Upload',
  '$ionicViewSwitcher',
  '$state',
  '$ionicLoading',
  'MobileService',
  '$location',
  '$stateParams',
  function ($scope, Domain, $location, Popup, Upload, $ionicViewSwitcher, $state, $ionicLoading, MobileService, $location, $stateParams) {
    var query = $location.$$search;
    $scope.new_user = query.new_user;
    if (query.new_user == undefined) {
      $scope.upload = function (file, type, name) {
        // 1:身份证,2:学历证明,3:工作证明,4:薪资证明,5:资产证明,6:工牌照片,7:个人名片,8:银行卡或者信用卡,9:好房贷房产证,10:人脸识别,11:身份证正面,12:身份证反面,100:其它证明
        if (type === 0)
          return;
        $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
        lrz(file, { width: 640 }).then(function (data) {
          file.upload = Upload.upload({
            url: Domain.resolveUrl('http://z.haiqutrip.com/picture/upload-file'),
            data: {
              type: type,
              attach: data.base64,
              ocrtype: 1
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
          }).then(function (response) {
            response.data.data && response.data.data.item && ($scope.form[name] = response.data.data.item.url);
            $ionicLoading.hide();
            Popup.alert(response.data.message);
          });
        });
      };
      $scope.files = {};
      $scope.$watch('files.faces', function (file) {
        if (file != null) {
          $scope.upload(file, 10, 'face_recognition_picture');
        }
      });
      $scope.$watch('files.idNumberFront', function (file) {
        console.log(file);
        if (file != null) {
          $scope.upload(file, 11, 'id_number_z_picture');
        }
      });
      $scope.$watch('files.idNumberBack', function (file) {
        if (file != null) {
          $scope.upload(file, 12, 'id_number_f_picture');
        }
      });
      $scope.form = {
        degrees_all: [{
            degrees: 0,
            name: '\u8bf7\u9009\u62e9'
          }],
        degrees_default: null,
        company_worktype_list: [{
            work_type: 0,
            name: '\u8bf7\u9009\u62e9'
          }],
        worktype_default: null
      };
    }
    $scope.$watch('file', function (aaa) {
      if ($scope.file != null) {
        console.log(aaa);
      }
    });
    $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
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
      console.log(form);
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
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
          if (response.code != 0)
            return;
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
  }
]);
angular.module('mobileControllers').controller('LoginController', [
  '$filter',
  '$location',
  '$rootScope',
  '$scope',
  '$state',
  'Popup',
  '$ionicViewSwitcher',
  '$ionicLoading',
  'MobileService',
  function ($filter, $location, $rootScope, $scope, $state, Popup, $ionicViewSwitcher, $ionicLoading, MobileService) {
    $scope.next = function (form) {
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
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
          };
        $scope.form = null;
        //1000已注册用户
        if (data.data === 1) {
          $state.go('login-next', params);
          return;
        }
        //0未注册用户
        if (data.data === 0) {
          /*
          if (data.data.item) {
            params.codeImg = $filter('removeProtocol')(data.data.item)
          }
          */
          // 预先获取验证码
          MobileService.getCaptcha({ type: 'captcha-login-reg' }).then(function (data) {
            if (data.code == 0 && data.data.item) {
              params.codeImg = $filter('removeProtocol')(data.data.item);
            }
            params.isRegister = true;
            $state.go('reset-password', params);
          });
        }
      });
    };
  }
]);
angular.module('mobileControllers').controller('LoginNextController', [
  'Domain',
  '$stateParams',
  '$location',
  '$rootScope',
  '$scope',
  '$state',
  'Popup',
  '$ionicViewSwitcher',
  '$ionicLoading',
  'MobileService',
  function (Domain, $stateParams, $location, $rootScope, $scope, $state, Popup, $ionicViewSwitcher, $ionicLoading, MobileService) {
    console.log($stateParams);
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
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
      form.username = $stateParams.phone;
      MobileService.login(form).then(function (data) {
        $ionicLoading.hide();
        $scope.form = null;
        if (data.code === 0) {
          if ($stateParams.redirectUrl) {
            location.href = $stateParams.redirectUrl;
            return;
          }
          $state.go('tab.home');  // $location.replace(); //clear last history route
                                  // location.href = Domain.resolveUrl('https://h5.dahubao.com')
        } else {
          Popup.alert(data.message);
        }
      });
    };
  }
]);
angular.module('mobileControllers').controller('MyController', [
  '$rootScope',
  '$scope',
  '$location',
  'Popup',
  '$ionicLoading',
  '$ionicViewSwitcher',
  '$state',
  'radialIndicatorInstance',
  'MobileService',
  function ($rootScope, $scope, $location, Popup, $ionicLoading, $ionicViewSwitcher, $state, radialIndicatorInstance, MobileService) {
    $rootScope.currentPage = 'current-my-page';
    $scope.verify = function (event) {
      if ($scope.verify_info && $scope.verify_info.real_verify_status === 0) {
        event.preventDefault();
        Popup.alert('\u4eb2\uff0c\u8bf7\u5148\u586b\u5199\u4e2a\u4eba\u4fe1\u606f\u54e6~', function () {
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
      barColor: '#feef01',
      barWidth: 64,
      initValue: 0,
      percentage: true,
      frameTime: 3,
      radius: 205
    };
    $scope.logout = function () {
      Popup.confirm({
        title: '<br/>\u60a8\u786e\u5b9a\u8981\u9000\u51fa\u767b\u5f55\u561b\uff1f',
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
      });
    };
    $scope.doRefresh = function () {
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
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
        radialIndicatorInstance['amount'].animate(($scope.credit_info.card_unused_amount || 100000) / $scope.credit_info.card_amount * 100 || 0);
        $scope.$broadcast('scroll.refreshComplete');
      });
    };
    $scope.doRefresh();
  }
]);
angular.module('mobileControllers').controller('ordersController', [
  '$rootScope',
  '$scope',
  'Popup',
  '$ionicLoading',
  'MobileService',
  function ($rootScope, $scope, Popup, $ionicLoading, MobileService) {
    $rootScope.currentPage = 'current-my-page';
    $scope.pullingTips = '\u79d1\u6280\u8ba9\u91d1\u878d\u66f4\u7b80\u5355';
    $scope.items = [];
    $scope.doRefresh = function () {
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
      MobileService.getOrders().then(function (response) {
        $ionicLoading.hide();
        if (response.code != 0) {
          Popup.alert(response.message);
          return;
        }
        if (response.data && response.data.item && response.data.item.length) {
          $scope.items = response.data.item;
        } else {
          $scope.items = false;
        }
        $scope.$broadcast('scroll.refreshComplete');
      });
    };
    $scope.doRefresh();
  }
]);
angular.module('mobileControllers').controller('RepaymentController', [
  '$state',
  '$rootScope',
  '$scope',
  'MobileService',
  '$ionicLoading',
  function ($state, $rootScope, $scope, MobileService, $ionicLoading) {
    $rootScope.currentPage = 'current-repayment-page';
    var handler = function (data) {
      console.log(data);
      if (data.code === 0) {
        $scope.item = data.data.item;
      }
    };
    $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
    MobileService.getOrders().then(function (data) {
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
  }
]);
angular.module('mobileControllers').controller('ResetPasswordController', [
  '$filter',
  '$window',
  '$stateParams',
  '$rootScope',
  '$scope',
  '$timeout',
  'MobileService',
  '$ionicLoading',
  '$state',
  'Popup',
  '$location',
  function ($filter, $window, $stateParams, $rootScope, $scope, $timeout, MobileService, $ionicLoading, $state, Popup, $location) {
    if (!$stateParams.phone || !/^1\d{10}$/.test($stateParams.phone)) {
      if ($window.localStorage.getItem('phone')) {
        $stateParams.phone = $window.localStorage.getItem('phone');
        $stateParams.isRegister = $window.localStorage.getItem('isRegister');
        $stateParams.invite_code = $window.localStorage.getItem('invite_code');
        $window.localStorage.removeItem('phone');
        $window.localStorage.removeItem('invite_code');
        $window.localStorage.removeItem('isRegister');
      } else {
        $state.go('login');
        return;
      }
    }
    // $stateParams.phone = 12312345679
    // $stateParams.isRegister = true
    $scope.companyList = [{
        company_name: '\u8bf7\u9009\u62e9\u516c\u53f8',
        id: ''
      }];
    $scope.isRegister = $stateParams.isRegister;
    MobileService.getCompanyList().then(function (data) {
      $scope.companyList.shift();
      $scope.companyList = $scope.companyList.concat(data.data);
    });
    $scope.codeText = '\u53d1\u9001\u9a8c\u8bc1\u7801';
    $scope.sendDisabled = false;
    $scope.isAgress = true;
    $scope.codeImg = null;
    $scope.codeError = false;
    $scope.onAgree = function () {
      $scope.isAgress = !$scope.isAgress;
    };
    $scope.onHref = function ($event) {
      $event.stopPropagation();
      $window.localStorage.setItem('phone', $stateParams.phone);
      $window.localStorage.setItem('isRegister', $stateParams.isRegister);
      $window.localStorage.setItem('invite_code', $stateParams.invite_code);
      location.href = '//api.dahubao.com/page/detail?id=535';
    };
    var setup = function (m, l) {
      $timeout(function () {
        $scope.codeText = m + '\u79d2\u540e\u91cd\u8bd5';
        if (m) {
          setup(--m, 1000);
        } else {
          $scope.codeText = '\u91cd\u65b0\u53d1\u9001';
          $scope.sendDisabled = false;
        }
      }, l);
    };
    $scope.sendCode = function () {
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
      // console.log($stateParams.phone)
      var method = $stateParams.isRegister ? 'getCaptcha' : 'getCode';
      MobileService[method]({ phone: $stateParams.phone }).then(function (data) {
        $ionicLoading.hide();
        if (data.code !== 0) {
          Popup.alert(data.message);
          return;
        }
        if (data.data.item) {
          $scope.codeImg = $filter('removeProtocol')(data.data.item);
        } else {
          $scope.sendDisabled = true;
          setup(60);
        }
      });
    };
    $scope.refresh = function () {
      // $stateParams.isRegister ? 1 : 2
      var method = $stateParams.isRegister ? 'getCaptcha' : 'getCode';
      MobileService[method]({ phone: $stateParams.phone }).then(function (data) {
        if (data.code === 0) {
          $scope.codeImg = $filter('removeProtocol')(data.data.item);
          $scope.codeError = false;
          document.getElementById('verifyForm').reset();
        } else {
          Popup.alert(data.message);
        }
      });
    };
    $scope.verifyCode = function (verify) {
      verify.phone = $stateParams.phone;
      var method = $stateParams.isRegister ? 'checkGetCaptcha' : 'checkResetPwdCode';
      if (!$stateParams.isRegister) {
        verify.type = 'find_pwd';
      } else {
        verify.captcha_code = verify.captcha;
      }
      MobileService[method](verify).then(function (data) {
        if (data.code === -1) {
          Popup.alert(data.message);
          return;
        }
        if (data.code === -3) {
          $scope.codeError = true;
          return;
        }
        if (data.code === 0) {
          document.getElementById('verifyForm').reset();
          $scope.codeImg = null;
          $scope.codeError = false;
          $scope.sendDisabled = true;
          setup(60);
        }
      });
    };
    //重置密码处理
    var handler = function (form) {
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
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
          $location.replace();  //clear last history route
        }
      });
    };
    var method = $stateParams.isRegister ? 'register' : 'resetPassword';
    if ($stateParams.isRegister) {
      $stateParams.source = 51;
      if ($stateParams.codeImg) {
        $scope.codeImg = $filter('removeProtocol')($stateParams.codeImg);
      } else {
        $scope.sendDisabled = true;
        setup(60);
      }
    }
    $scope.reset = function (form) {
      $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
      angular.extend(form, $stateParams);
      if (form['company'] && form['company']['id']) {
        form['company_id'] = form['company']['id'];
      }
      MobileService[method](form).then(function (data) {
        $ionicLoading.hide();
        $scope.form = null;
        if (data.code !== 0) {
          Popup.alert(data.message);
          return;
        }
        if (data.code === 0) {
          $state.go('login-next', $stateParams);
          $location.replace();  //clear last history route
        }
      });
    };
  }
]);