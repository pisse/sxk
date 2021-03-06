angular.module('mobileFactory', [])

  .factory('MobileService', function(Env, Domain, Platform, $http, $location, $ionicPopup, $httpParamSerializerJQLike) {

    var root_url = Env.env == 'pro' ? '//h5.dahubao.com/' : '//120.55.61.62/frontend/web/'

    function $post(url, data) {
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
    }

    return {
      homeVdsStatistics: function(){
        var url = Domain.resolveUrl('http://credit.shanxiancard.com/activity/default/get-invite-code');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      getHomeData: function(){
        var url = Domain.resolveUrl(root_url +  'credit-app/multi-index');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      confirmKnow: function(data) {
        var url = Domain.resolveUrl('http://credit.shanxiancard.com/credit-loan/confirm-failed-loan');
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
        var url = Domain.resolveUrl(root_url +  'credit-loan/get-confirm-loan');
        return $post(url, data);
      },
      applyLoan: function(data){
        var url = Domain.resolveUrl('http://credit.shanxiancard.com/credit-loan/apply-loan');
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
        var url = Domain.resolveUrl('http://credit.shanxiancard.com/credit-loan/get-my-loan');
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
        var url = Domain.resolveUrl(root_url +  'user/login');
        return $post(url, data);
      },
      register: function(data){
        var url = data.appMarket ? 'http://credit.shanxiancard.com/credit-user/register?appMarket=' + data.appMarket
          : root_url +  'user/register';
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
        var url = Domain.resolveUrl(root_url +  'user/reset-pwd-code');
        data.type = 'find_pwd';
        return $post(url, data);
      },
      getCaptcha: function(data){
        var url = Domain.resolveUrl(root_url +  'user/refresh-captcha');
        data.type = 'captcha-login-reg';
        return $post(url, data);
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
        var url = Domain.resolveUrl(root_url +  'user/check-reset-password-code');
        return $post(url, data);
      },
      resetPassword: function(data){
        var url = Domain.resolveUrl(root_url +  'user/reset-password');
        return $post(url, data);
      },
      getVerification: function(){
        var url = Domain.resolveUrl(root_url +  'shx-card/get-verification-info');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      getBaseInformation: function(){
        var url = Domain.resolveUrl('http://credit.shanxiancard.com/credit-info/get-person-info');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      getInformation: function(){
        var url = Domain.resolveUrl(root_url + 'shx-card/get-person-info');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      setInformation: function(data){
        var url = Domain.resolveUrl(root_url + 'shx-card/save-person-info');
        return $post(url, data);
      },
      setParsonInformation: function(data){
        var url = Domain.resolveUrl('http://credit.shanxiancard.com/credit-info/save-person-info');
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
        var url = Domain.resolveUrl(root_url + 'shx-card/get-contacts');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      setContacts: function(data){
        var url = Domain.resolveUrl(root_url + 'shx-card/save-contacts');
        return $post(url, data);
      },
      getBankCard: function (data) {
        var url = Domain.resolveUrl(root_url + 'shx-card/get-bank-card');
        return $post(url, data);
      },
      addBankCard: function (data) {
        var url = Domain.resolveUrl(root_url + 'shx-card/add-bank-card');
        return $post(url, data);
      },
      bindBankCard: function (data) {
        var url = Domain.resolveUrl(root_url + 'shx-card/do-bind-card');
        return $post(url, data);
      },
      getBankCardCode: function (data) {
        var url = Domain.resolveUrl(root_url + 'bank-card/get-code');
        return $post(url, data);
      },
      getOrders: function(data){
        var url = Domain.resolveUrl(root_url + 'credit-loan/get-my-orders');
        return $post(url, data);
      },
      getMyInfo: function(){
        var url = Domain.resolveUrl(root_url +  'user/get-info');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      setPayPassword: function(data){
        var url = Domain.resolveUrl('http://credit.shanxiancard.com/credit-user/set-paypassword');
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
        var url = Domain.resolveUrl('http://credit.shanxiancard.com/credit-user/change-paypassword');
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
        var url = Domain.resolveUrl('http://credit.shanxiancard.com/credit-user/reset-pwd-code');
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
        var url = Domain.resolveUrl('http://credit.shanxiancard.com/credit-user/verify-reset-password');
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
        var url = Domain.resolveUrl('http://credit.shanxiancard.com/credit-user/reset-pay-password');
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
        var url = Domain.resolveUrl('http://credit.shanxiancard.com/credit-user/set-paypassword');
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
        var url = Domain.resolveUrl(root_url +  'user/logout');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      bindWechat: function(){
        var url = Domain.resolveUrl('http://credit.shanxiancard.com/credit-user/bind-wx');
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },
      getLoanContract: function(data) {
        var url = Domain.resolveUrl(root_url +  'user/get-contact-info');
        return $post(url, data);
      }
    };
  });
