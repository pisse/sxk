angular.module("mobileControllers")
  .controller("LoginController", function ($filter, $location, $rootScope, $scope, $state, Popup, $ionicViewSwitcher, $ionicLoading, MobileService) {
    $scope.next = function (form) {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});

      MobileService.regGetCode(form).then(function (data) {
        $ionicLoading.hide();

        if (data.code == -1) {
          Popup.alert(data.message);
          return;
        }

        var params = {
          phone: $scope.form.phone,
          redirectUrl: $location.search().redirect_url,
          appMarket: $location.search().appMarket,
          invite_code: $location.search().inviteCode
        }

        $scope.form = null;

        //1000已注册用户
        if (data.code === 1000) {
          $state.go('login-next', params)
          return
        }

        //0未注册用户
        if (data.code === 0) {
          /*
          if (data.data.item) {
            params.codeImg = $filter('removeProtocol')(data.data.item)
          }
          */
          // 预先获取验证码
          MobileService.getCaptcha({type: 'captcha-login-reg'}).then(function (data) {
            if (data.code == 0 && data.data.item) {
              params.codeImg = $filter('removeProtocol')(data.data.item)
            }
            params.isRegister = true;
            $state.go('reset-password', params)
          })
        }
      });
    };
  })