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
      .state('bank', {
        url: '/my/certification/bank',
        templateUrl: 'templates/my/bank.html',
        controller: 'BankController'
      })
      .state('card', {
        url: '/my/card',
        templateUrl: 'templates/my/card.html',
        controller: 'CardController'
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
      })
      .state('helpcenter', {
        url: '/my/helpcenter',
        templateUrl: 'templates/my/helpcenter.html',
        controller: 'HelpCenterController',
      })
      .state('helpdetail', {
        url: '/my/helpcenter/detail',
        templateUrl: 'templates/my/helpdetail.html',
        controller: 'HelpDetailController',
        params: {
          block: null,
          id: null
        }
      })

    $urlRouterProvider.otherwise("/");
  });

angular.module("mobileControllers", [])
  .controller("TabController", function (Domain) {
    //location.href = Domain.resolveUrl('https://h5.dahubao.com/')
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
              window.location.href = Domain.resolveUrl('http://h.shanxiancard.com/certification');
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
