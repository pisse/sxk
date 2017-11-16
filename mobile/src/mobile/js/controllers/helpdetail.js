angular.module("mobileControllers")
  .controller('HelpDetailController', function ($scope, $state, $stateParams) {
    $scope.block = $stateParams.block === null ? 0 : $stateParams.block;
    $scope.id = $stateParams.id || 1;
    console.log($stateParams)
  })
  .directive('showHelpDetail', function ($ionicViewSwitcher, $state) {
    return {
      restrict: 'A',
      scope: true,
      controller: function($scope) {
        $scope.showTarget = function (element, block, detail) {
          var wrap = element[0];
          var ps = wrap.querySelectorAll('p');
          for(var i=0; i<ps.length; i++){
            ps[i].style.display = 'none';
          }
          var block_ul = wrap.querySelectorAll('ul')[block];
          var target_li = block_ul.querySelectorAll('li')[detail];
          var target_p = target_li.querySelector('p');
          target_p.style.display = 'block';
        }
      },
      link: function (scope, element, attrs) {
        scope.showTarget(element, scope.block, scope.id-1)

        element.bind('click', function(e){
          var wrap = element[0];
          var ps = wrap.querySelectorAll('p');
          for(var i=0; i<ps.length; i++){
            ps[i].style.display = 'none';
          }
          var target_p = e.target.querySelector('p');
          target_p.style.display = 'block';
        })
      }
    };
  });