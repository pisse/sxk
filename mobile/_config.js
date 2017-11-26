angular.module('_config', [])
  .factory('Env', function () {
    return {
      env: '@@__ENV__'
    }
  })
