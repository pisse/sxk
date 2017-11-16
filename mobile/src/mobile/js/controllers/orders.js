angular.module("mobileControllers")
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