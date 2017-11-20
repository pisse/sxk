angular.module("mobileControllers")
  .controller("AgreementController", function ($ionicSlideBoxDelegate, $location, $ionicPopup, Popup, $ionicViewSwitcher, $state, $ionicScrollDelegate, $rootScope, $location, Platform, Domain, $scope, $ionicLoading, $timeout, $ionicSlideBoxDelegate, Popup, MobileService) {
    $rootScope.currentPage = "current-home-page";
    $scope.pullingTips = '闪电审核，现金速达';
    $scope.cIndex = 0
    $scope.dIndex = 0

    var ord_id = $location.search().ord_id ;
    MobileService.getLoanContract({out_order_id: ord_id, type: 1}).then(function (response) {
      $scope.data = response.data || {}
      if ($scope.data.loan_time ) {
        $scope.data.date = $scope.data.loan_time.split(' ')[0]
      }
      console.log($scope.data)
      if ($scope.data.plan_repayment_time ) {
        $scope.data.repay_date = $scope.data.plan_repayment_time.split(' ')[0]
        console.log($scope.data.repay_date)
      }
    });

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

  })