angular.module('mobileFactory', [])

  .factory('MobileService', function(Domain, Platform, $http, $location, $ionicPopup, $httpParamSerializerJQLike) {

    var root_url = 'http://120.55.61.62/frontend/web/'

    return {
      homeVdsStatistics: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/activity/default/get-invite-code');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      getHomeData: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-app/multi-index');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      confirmKnow: function(data) {
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-loan/confirm-failed-loan');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      getConfirmLoan: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-loan/get-confirm-loan');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      applyLoan: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-loan/apply-loan');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      getMyLoan: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-loan/get-my-loan');
        return $http({
          method: 'POST',
          url: url,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      regGetCode: function(data){
        var url = Domain.resolveUrl(root_url +  'user/check-user-register');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      login: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/login');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      register: function(data){
        var url = data.appMarket ? 'http://credit.xianjincard.com/credit-user/register?appMarket=' + data.appMarket
          : 'http://credit.xianjincard.com/credit-user/register';
        return $http({
          method: 'POST',
          url: Domain.resolveUrl(url),
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      getCode: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/reset-pwd-code');
        data.type = 'find_pwd'
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      getCaptcha: function(data){
        var url = Domain.resolveUrl(root_url +  'user/refresh-captcha');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      refreshCaptcha: function(type){
        var url = Domain.resolveUrl(root_url +  'user/get-image-captcha?type=' + (type || 1));
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      checkGetCaptcha: function(data){
        var url = Domain.resolveUrl(root_url +  'user/check-captcha-send-message');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      checkResetPwdCode: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/check-reset-password-code');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      resetPassword: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/reset-password');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function(response) {
          return response.data;
        });
      },
      getVerification: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/golden/credit-card/get-verification-info');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      getBaseInformation: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-info/get-person-info');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      getInformation: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-card/get-person-info');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      setInformation: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-card/save-person-info');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      setParsonInformation: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-info/save-person-info');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      getContacts: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-card/get-contacts');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      setContacts: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-card/save-contacts');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      getOrders: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-loan/get-my-orders');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      getMyInfo: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/get-info');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      setPayPassword: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/set-paypassword');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      changePayPassword: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/change-paypassword');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      sendVerifyCode: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/reset-pwd-code');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      verifyResetPayPassword: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/verify-reset-password');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      resetPayPassword: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/reset-pay-password');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      setPayPassword: function(data){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/set-paypassword');
        return $http({
          method: 'POST',
          url: url,
          data: $httpParamSerializerJQLike(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      logout: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/logout');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      bindWechat: function(){
        var url = Domain.resolveUrl('http://credit.xianjincard.com/credit-user/bind-wx');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      }
    };
  });
