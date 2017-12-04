angular.module("mobileControllers")
  .controller('InformationController', function ($scope, Domain, $location, Popup, Upload, $ionicViewSwitcher, $state, $ionicLoading, MobileService, $location, $stateParams) {
    var query = $location.$$search;
    $scope.new_user = query.new_user;
    if (query.new_user == undefined) {
      $scope.upload = function (file, type, name) {
        // 1:身份证,2:学历证明,3:工作证明,4:薪资证明,5:资产证明,6:工牌照片,7:个人名片,8:银行卡或者信用卡,9:好房贷房产证,10:人脸识别,11:身份证正面,12:身份证反面,100:其它证明
        if (type === 0) return;

        $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
        lrz(file, {
          width: 640
        }).then(function (data) {
          file.upload = Upload.upload({
            url: Domain.resolveUrl('http://z.haiqutrip.com/frontend/web/picture/upload-file'),
            data: {
              type: type,
              attach: data.base64,
              ocrtype: 1
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          }).then(function (response) {
            (response.data.data && response.data.data.item) && ($scope.form[name] = response.data.data.item.url);
            $ionicLoading.hide();
            Popup.alert(response.data.message);
          });
        })

      }
      $scope.files = {}
      $scope.$watch('files.faces', function (file) {
        if (file != null) {
          $scope.upload(file, 10, 'face_recognition_picture');
        }
      });
      $scope.$watch('files.idNumberFront', function (file) {
        console.log(file)
        if (file != null) {
          $scope.upload(file, 11, 'id_number_z_picture');
        }
      });
      $scope.$watch('files.idNumberBack', function (file) {
        if (file != null) {
          $scope.upload(file, 12, 'id_number_f_picture');
        }
      });
      $scope.form = {
        degrees_all: [{degrees: 0, name: '请选择'}],
        degrees_default: null,
        company_worktype_list: [{work_type: 0, name: '请选择'}],
        worktype_default: null,
      };
    }

    $scope.$watch('file', function (aaa) {
      if ($scope.file != null) {
        console.log(aaa)
      }
    });
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
    MobileService.getInformation().then(function (response) {
      $ionicLoading.hide();
      if (response.code != 0) {
        Popup.alert(response.message);
        return;
      }
      var data = response.data;
      // var params = $stateParams;
      // if(params.position == 1 && params.address && params.lng && params.lat){
      //   data.item.address_distinct = params.address;
      //   data.item.longitude = params.lng;
      //   data.item.latitude = params.lat;
      // }
      $scope.form = $.extend(true, $scope.form, data.item);
      if (query.new_user == 1) {
        for (var i in $scope.form.degrees_all) {
          if ($scope.form.degrees_all[i].degrees === $scope.form.degrees) {
            $scope.form.degrees_default = $scope.form.degrees_all[i];
            break;
          }
        }
        for (var i in $scope.form.company_worktype_list) {
          if ($scope.form.company_worktype_list[i].work_type === $scope.form.company_worktype_id) {
            $scope.form.worktype_default = $scope.form.company_worktype_list[i];
            break;
          }
        }
      }
    });
    $scope.save = function (form) {
      console.log(form)
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
      if (!!query.new_user) {
        var type = 'setInformation';
      } else {
        var type = form.real_verify_status ? 'setParsonInformation' : 'setInformation';
        form.degrees = form.degrees_default.degrees || 0;
        form.work_type = form.worktype_default.work_type || 0;
      }
      MobileService[type](form).then(function (response) {
        $ionicLoading.hide();
        Popup.alert(response.message, function () {
          if (response.code != 0) return;
          if (query.new_user == 1) {
            var links = JSON.parse(window.localStorage.getItem('links'));
            window.location.href = links[1];
          } else {
            $ionicViewSwitcher.nextDirection('back');
            $state.go('certification');
            $location.replace();
          }
        });
        return;
      });
    };
  })