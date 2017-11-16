angular.module("mobileControllers")
  .controller('ContactsController', function ($scope, Popup, $state, $location, $ionicViewSwitcher, $ionicLoading, MobileService) {
    var query = $location.$$search;
    // $scope.linealData = [{type: 0, name: '请选择'}];
    $scope.form = {
      lineal_list: [{type: 0, name: '请选择'}],
      other_list: [{type: 0, name: '请选择'}],
      lock: false
    };
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
    MobileService.getContacts().then(function (response) {
      $ionicLoading.hide();
      if (response.code != 0) {
        Popup.alert(response.message);
        return;
      }
      var data = response.data;
      if (data && data.item) {
        var item = data.item;
        // if(item.is_can_change == 0){
        //   $scope.form.lock = true;
        // }
        // if(item.lineal_mobile && item.lineal_name && item.lineal_relation &&
        //   item.other_mobile && item.other_name && item.other_relation){
        //   $scope.form.lock = true;
        // }
      }
      $scope.form = $.extend(true, $scope.form, data.item);
      for (var i in $scope.form.lineal_list) {
        if ($scope.form.lineal_list[i].type === $scope.form.lineal_relation) {
          $scope.form.lineal_default = $scope.form.lineal_list[i];
          break;
        }
      }
      for (var i in $scope.form.other_list) {
        if ($scope.form.other_list[i].type === $scope.form.other_relation) {
          $scope.form.other_default = $scope.form.other_list[i];
          break;
        }
      }
    });
    $scope.save = function (form) {
      form.lineal_relation = form.lineal_default.type || '';
      form.other_relation = form.other_default.type || '';
      var data = {
        type: form.lineal_relation,
        name: form.lineal_name,
        mobile: form.lineal_mobile,
        relation_spare: form.other_relation,
        name_spare: form.other_name,
        mobile_spare: form.other_mobile
      };
      if (data.mobile_spare && data.mobile.length != 11) {
        Popup.alert('直系亲属手机号码格式错误');
        return;
      }
      if (data.mobile_spare && data.mobile_spare.length != 11) {
        Popup.alert('其他联系人手机号码格式错误');
        return;
      }
      MobileService.setContacts(data).then(function (response) {
        $ionicLoading.hide();
        Popup.alert(response.message, function () {
          if (response.code != 0) return;
          if (query.new_user == 1) {
            var links = JSON.parse(window.localStorage.getItem('links'));
            window.location.href = links[2] + '?url=' + links[4].replace(/\#/g, '%23');
          } else {
            $ionicViewSwitcher.nextDirection('back');
            $state.go('certification');
            $location.replace();
          }
        });
      });
    };
  })