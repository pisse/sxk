angular.module("mobileControllers")
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
      barColor: '#f5d314',
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
        radialIndicatorInstance['amount'].animate(($scope.credit_info.card_unused_amount || 100000) / $scope.credit_info.card_amount * 100 || 0);
        $scope.$broadcast('scroll.refreshComplete');
      });
    };
    $scope.doRefresh();
  })