angular.module("mobileControllers")
  .controller('CertificationController', function (Platform, Domain, $rootScope, $scope, Popup, $ionicViewSwitcher, $location, $ionicLoading, $ionicViewSwitcher, $state, $ionicLoading, $state, MobileService) {
    // location.href = Domain.resolveUrl('https://h.dahubao.com/mobile/certification');

    var $query = $location.$$search;
    if ($query.success == 1) {
      MobileService.getConfirmLoan({
        money: 1000,
        period: 14,
        card_type: 1
      }).then(function (response) {
        if (response.code != 0) {
          Popup.alert(response.message);
          return;
        }
        window.localStorage.removeItem('links');
        $state.go('loan', {
          money: 1000,
          period: 14,
          item: response.data.item,
          source: Platform.isWeixin ? true : false
        });
      });
    }
    $scope.verify = function (event) {
      if ($scope.real_verify_status === 0) {
        event.preventDefault();
        Popup.alert('亲，请先填写个人信息哦~', function () {
          // $ionicViewSwitcher.nextDirection('forward');
          // $state.go('information');
        });
        return;
      }
    };
    $scope.doRefresh = function () {
      $scope.items = [];
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
      MobileService.getVerification().then(function (response) {
        var disable = [2, 12, 7, 9, 13, 14];
        var verify = [3, 4, 8, 5];
        var query = {};

        function format(data) {
          var temp = [];
          for (var i in data) {
            temp.push(i + '=' + data[i]);
          }
          return '?' + temp.join('&');
        }

        var items = response.data.item.list || [];
        var temps = [];
        for (var i in items) {
          var tag = items[i].tag;
          if (tag === 1) {
            items[i].url = '#/my/certification/information';
            response.data.is_new_user == 1 && (items[i].url += '?new_user=1');
          } else if (tag === 3) {
            items[i].url = '#/my/certification/contacts';
            response.data.is_new_user == 1 && (items[i].url += '?new_user=1');
          } else if (tag === 4) {
            items[i].url = '#/my/certification/bank';
            response.data.is_new_user == 1 && (items[i].url += '?new_user=1');
          } else if ([8].indexOf(tag) >= 0) {
            (!items[i].url && items[i].first_url) && (items[i].url = items[i].first_url);
          }
          if (verify.indexOf(tag) >= 0) {
            items[i].verify = 1;
          }
          if (!(disable.indexOf(tag) >= 0)) {
            $scope.items.push(items[i]);
          }
          temps.push(items[i].url);
        }
        temps.push(window.location.href + '?success=1');
        if (!!response.data.is_new_user) {
          for (var i in temps) {
            if (i == 2) {
              temps[i] += ('?url=' + temps[3]).replace(/\#/g, '%23')
            } else if (i == 3) {
              temps[i] += '?url=' + temps[4].replace(/\#/g, '%23')
            }
          }
          for (var i in $scope.items) {
            var tag = $scope.items[i].tag;
            if (tag == 4) {
              $scope.items[i].url += '?url=' + temps[3].replace(/\#/g, '%23')
            } else if (tag == 5) {
              $scope.items[i].url += '?url=' + temps[4].replace(/\#/g, '%23')
            }
          }
        }

        window.localStorage.setItem('links', JSON.stringify(temps));
        // if(response.data.is_new_user == 1){
        //   query.new_user = 1;
        //   for(var i in $scope.items){
        //     if($scope.items[i].status == 0){
        //       query.url = encodeURIComponent($scope.items[i].url);
        //       $scope.items[i].url += format(query);
        //       break;
        //     }
        //   }
        // }

        $scope.real_verify_status = response.data.item.real_verify_status || 0;
        $ionicLoading.hide();
        $scope.$broadcast('scroll.refreshComplete');
      });
    };
    $scope.doRefresh();
  })