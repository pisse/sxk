angular.module("mobileControllers")
  .controller("LoginNextController", function (Domain, $stateParams, $location, $rootScope, $scope, $state, Popup, $ionicViewSwitcher, $ionicLoading, MobileService) {

    console.log($stateParams)
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
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});

      form.username = $stateParams.phone;
      MobileService.login(form).then(function (data) {
        $ionicLoading.hide();
        $scope.form = null;

        if (data.code === 0) {
          if ($stateParams.redirectUrl) {
            location.href = $stateParams.redirectUrl
            return
          }
          $state.go('tab.home');
          // $location.replace(); //clear last history route
          // location.href = Domain.resolveUrl('https://h5.dahubao.com')
        } else {
          Popup.alert(data.message);
        }

      });
    };
  })
