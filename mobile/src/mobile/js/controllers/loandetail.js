angular.module("mobileControllers")
  .controller("LoanDetailController", function ($ionicSlideBoxDelegate, $stateParams, $location, $ionicPopup, $ionicViewSwitcher, $state, $ionicScrollDelegate, $rootScope, $location, Platform, Domain, $scope, $ionicLoading, $timeout, $ionicSlideBoxDelegate, Popup, MobileService) {
    $rootScope.currentPage = "current-loandetail-page";
    $scope.pullingTips = '闪电审核，现金速达';

    console.log($stateParams)
    if (!$stateParams.loan_id) {
      return
    }
    $scope.keys = [{
      key: 'money_amount',
      name: '借款金额'
    }, {
      key: 'true_money_amount',
      name: '实际到账'
    }, {
      key: 'service_fee',
      name: '服务费用'
    }, {
      key: 'loan_interests',
      name: '利息'
    }, {
      key: 'counter_fee',
      name: '抵扣金额'
    }, {
      key: 'loan_term',
      name: '借款期限'
    }, {
      key: 'order_time',
      name: '申请日期'
    }, {
      key: 'bank_info',
      name: '收款银行'
    }, {
      key: '',
      name: '资金提供方'
    }];
    $scope.repaykeys = [
      {
        key: '',
        name: '还款总金额'
      }, {
        key: '',
        name: '待还金额'
      }, {
        key: '',
        name: '待还金额'
      }, {
        key: '',
        name: '最迟还款日期'
      }, {
        key: '',
        name: '实际还款日期'
      }];

    MobileService.loanDetail({id: $stateParams.loan_id}).then(function (data) {
      $scope.data = data.data;
    });
  })