angular.module("mobileControllers")
  .controller('ordersController', function ($rootScope, $ionicViewSwitcher, $state, $scope, Popup, $ionicLoading, MobileService) {
    $rootScope.currentPage = "current-my-page";
    $scope.pullingTips = '科技让金融更简单';
    $scope.items = [];
    $scope.goDetail = function (id) {
      $ionicViewSwitcher.nextDirection('forward');
      $state.go('loandetail', {loan_id: id});
    }
    $scope.doRefresh = function () {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
      MobileService.getOrders().then(function (response) {
        $ionicLoading.hide();
        if (response.code != 0) {
          Popup.alert(response.message);
          return;
        }
        if (response.data && response.data.item && response.data.item.length) {
          var items = response.data.item || [];
          var re = /.+id=(\d+)$/;
          for( var i=0; i< items.length; i++ ){
            var match = re.exec( items[i]['url']);
            items[i]['loan_id'] = match && match[1] || '';
          }
          $scope.items = response.data.item
        } else {
          $scope.items = false;
        }
        $scope.$broadcast('scroll.refreshComplete');
      });
    };
    $scope.doRefresh();
  })