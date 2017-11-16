angular.module("mobileControllers")
  .controller('HelpCenterController', function ($scope, $ionicViewSwitcher, $state) {
    $scope.list = [
      {
        name: '认证相关',
        val: [
          {name: '为什么会读取联系人失败？', id: '5'},
          {name: '如何更换收款银行卡？', id: '8'},
          {name: '手机运营商认证失败的原因有哪些？', id: '12'}
        ]
      },
      {
        name: '借款相关',
        val: [
          {name: '审核通过后多久打款？', id: '7'},
          {name: '审核被拒绝的原因一般有哪些？', id: '8'},
          {name: '如何提升信用额度？', id: '9'}
        ]
      },
      {
        name: '还款相关',
        val: [
          {name: '每种方式需要多久更新还款状态？', id: '2'},
          {name: '如何进行支付宝还款？', id: '7'},
          {name: '逾期还能申请续期服务吗？', id: '12'}
        ]
      },
      {
        name: '费用相关',
        val: [
          {name: '借款费用如何收取？', id: '1'},
          {name: '逾期费用如何收取？', id: '2'},
          {name: '续期费用如何收取？', id: '3'}
        ]
      },
    ];

    $scope.detail = function(block, id){
      var params = {
        block: block,
        id: id
      };
      $ionicViewSwitcher.nextDirection('forward');
      $state.go('helpdetail', params)
    }
  })