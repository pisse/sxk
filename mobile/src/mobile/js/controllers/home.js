angular.module("mobileControllers")
  .controller("HomeController", function ($ionicSlideBoxDelegate, $ionicPopup, Popup, $ionicViewSwitcher, $state, $ionicScrollDelegate, $rootScope, $location, Platform, Domain, $scope, $ionicLoading, $timeout, $ionicSlideBoxDelegate, Popup, MobileService) {
    $rootScope.currentPage = "current-home-page";
    $scope.pullingTips = '支薪宝，应急好';
    $scope.cIndex = 0
    $scope.dIndex = 0

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
      //$rootScope.awaken = true;
      //window.location.href = Platform.isAndroid ? 'shanxiancard://com.kdlc.mcc/openapp' : 'xjbk915164674://';
    }

    if (Platform.isWeixin) {
      /*MobileService.bindWechat().then(function (data) {
        if (data.code == -1001) {
          window.location.href = Domain.resolveUrl('http://credit.shanxiancard.com/wx/user-auth-template?redirectUrl=' + window.location.href)
          return;
        }
      });*/
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
        template: "综合费用=预支利息+服务费+信息认证费，综合费用将在借款时一次性扣除",
        okText: '我知道了',
        okType: 'button-credit'
      })
    };
    //申请借款
    $scope.apply = function (data) {
      $ionicViewSwitcher.nextDirection('forward');
      // _hmt.push(['_trackEvent', 'm版首页', '点击马上申请']);

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
      // mock scroll
      $scope.data.user_loan_log_list = ['华仔借款2000元']
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