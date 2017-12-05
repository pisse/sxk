angular.module("mobileControllers")
  .controller("RepaymentController", function ($state, $rootScope, $scope, MobileService, $ionicLoading) {
    $rootScope.currentPage = "current-repayment-page";

    var handler = function (data) {
      console.log(data)
      if (data.code === 0) {
        $scope.item = data.data.item;
      }
    };

    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
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
  })