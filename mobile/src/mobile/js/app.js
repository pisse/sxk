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
