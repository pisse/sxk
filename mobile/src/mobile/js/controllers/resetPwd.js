angular.module("mobileControllers")
  .controller('ResetPasswordController', function ($filter, $window, $stateParams, $rootScope, $scope, $timeout, MobileService, $ionicLoading, $state, Popup, $location) {
    if (!$stateParams.phone || !/^1\d{10}$/.test($stateParams.phone)) {
      if ($window.localStorage.getItem('phone')) {
        $stateParams.phone = $window.localStorage.getItem('phone')
        $stateParams.isRegister = $window.localStorage.getItem('isRegister')
        $stateParams.invite_code = $window.localStorage.getItem('invite_code')
        $window.localStorage.removeItem('phone')
        $window.localStorage.removeItem('invite_code')
        $window.localStorage.removeItem('isRegister')
      } else {
        $state.go('login');
        return;
      }
    }

    // $stateParams.phone = 12312345679
    // $stateParams.isRegister = true

    $scope.companyList = [{company_name: '请选择公司', id: ''}]
    $scope.isRegister = $stateParams.isRegister
    MobileService.getCompanyList().then(function (data) {
      $scope.companyList.shift()
      $scope.companyList = $scope.companyList.concat(data.data)
    });

    $scope.codeText = '发送验证码'
    $scope.sendDisabled = false
    $scope.isAgress = true
    $scope.codeImg = null
    $scope.codeError = false

    $scope.onAgree = function () {
      $scope.isAgress = !$scope.isAgress;
    }

    $scope.onHref = function ($event) {
      $event.stopPropagation()
      $window.localStorage.setItem('phone', $stateParams.phone)
      $window.localStorage.setItem('isRegister', $stateParams.isRegister)
      $window.localStorage.setItem('invite_code', $stateParams.invite_code)
      location.href = '//api.dahubao.com/page/detail?id=535'
    }

    var setup = function (m, l) {
      $timeout(function () {
        $scope.codeText = m + "秒后重试";
        if (m) {
          setup(--m, 1000);
        } else {
          $scope.codeText = '重新发送';
          $scope.sendDisabled = false;
        }
      }, l)
    }
    $scope.sendCode = function () {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
      // console.log($stateParams.phone)
      var method = $stateParams.isRegister ? 'getCaptcha' : 'getCode'
      MobileService[method]({phone: $stateParams.phone}).then(function (data) {
        $ionicLoading.hide();
        if (data.code !== 0) {
          Popup.alert(data.message);
          return
        }

        if (data.data.item) {
          $scope.codeImg = $filter('removeProtocol')(data.data.item)
        } else {
          $scope.sendDisabled = true;
          setup(60);
        }

      })
    };

    $scope.refresh = function () {
      // $stateParams.isRegister ? 1 : 2
      var method = $stateParams.isRegister ? 'getCaptcha' : 'getCode'
      MobileService[method]({phone: $stateParams.phone}).then(function (data) {
        if (data.code === 0) {
          $scope.codeImg = $filter('removeProtocol')(data.data.item)
          $scope.codeError = false
          document.getElementById('verifyForm').reset()
        } else {
          Popup.alert(data.message);
        }
      })
    }

    $scope.verifyCode = function (verify) {
      verify.phone = $stateParams.phone
      var method = $stateParams.isRegister ? 'checkGetCaptcha' : 'checkResetPwdCode'
      if (!$stateParams.isRegister) {
        verify.type = 'find_pwd'
      } else {
        verify.captcha_code = verify.captcha
      }
      MobileService[method](verify).then(function (data) {
        if (data.code === -1) {
          Popup.alert(data.message)
          return
        }

        if (data.code === -3) {
          $scope.codeError = true
          return
        }

        if (data.code === 0) {
          document.getElementById('verifyForm').reset()
          $scope.codeImg = null
          $scope.codeError = false
          $scope.sendDisabled = true
          setup(60)
        }
      })
    }

    //重置密码处理
    var handler = function (form) {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
      angular.extend(form, $stateParams);

      MobileService.resetPassword(form).then(function (data) {
        $ionicLoading.hide();
        $scope.form = null;

        if (data.code !== 0) {
          Popup.alert(data.message);
          return;
        }

        if (data.code === 0) {
          $state.go('login-next', $stateParams);
          $location.replace(); //clear last history route
        }
      })
    }

    var method = $stateParams.isRegister ? 'register' : 'resetPassword';
    if ($stateParams.isRegister) {
      $stateParams.source = 51

      if ($stateParams.codeImg) {
        $scope.codeImg = $filter('removeProtocol')($stateParams.codeImg)
      } else {
        $scope.sendDisabled = true
        setup(60)
      }
    }

    $scope.reset = function (form) {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
      angular.extend(form, $stateParams);

      if (form['company'] && form['company']['id']){
        form['company_id'] = form['company']['id']
      }
      MobileService[method](form).then(function (data) {
        $ionicLoading.hide();
        $scope.form = null;

        if (data.code !== 0) {
          Popup.alert(data.message);
          return;
        }

        if (data.code === 0) {
          $state.go('login-next', $stateParams);
          $location.replace(); //clear last history route
        }
      })
    };

  })