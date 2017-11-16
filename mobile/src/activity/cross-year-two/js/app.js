angular.module('crossYear', ['credit', 'ionic', 'CrossYearControllers', 'CrossYearFactory'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.StatusBar) {
      StatusBar.styleDefault()
    }
  })
})

.config(function ($httpProvider, $compileProvider, $stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom')
  $ionicConfigProvider.tabs.style('standard')
  $ionicConfigProvider.navBar.alignTitle('center')

  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|http?|wap2app|schemekdlc|kdlc.app.launch):/)
  $httpProvider.defaults.withCredentials = true
  $httpProvider.interceptors.push('HttpInterceptor')

  $stateProvider.state('team', {
    url: '/',
    templateUrl: 'templates/team.html',
    controller: 'TeamController'
  })
  $urlRouterProvider.otherwise('/')
})

angular.module('CrossYearFactory', [])

.factory('TeamService', function (Domain, $http, Platform, $location, $httpParamSerializerJQLike) {
  return {
    getData: function (sign) {
      var url = Domain.resolveUrl('http://credit.dahubao.com/jigsaw-puzzle/puzzle?sign=' + sign)
      return $http.get(url).then(function (response) {
        return response.data
      })
    },
    getCode: function (phone) {
      var url = Domain.resolveUrl('http://credit.dahubao.com/credit-user/send-invite-code')
      return $http({
        method: 'POST',
        url: url,
        data: $httpParamSerializerJQLike({phone: phone}),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(function (response) {
        return response.data
      })
    },
    reRegister: function (phone, code) {
      var activity_id = 'jigsaw'
      var url = Domain.resolveUrl('http://credit.dahubao.com/jigsaw-puzzle/re-register?appMarket=' + activity_id)
      return $http({
        method: 'POST',
        url: url,
        data: $httpParamSerializerJQLike({phone: phone, code: code}),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(function (response) {
        return response.data
      })
    },
    luckDraw: function (sign) {
      var url = Domain.resolveUrl('http://credit.dahubao.com/jigsaw-puzzle/puzzle?sign=' + sign)
      return $http({
        method: 'POST',
        url: url,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(function (response) {
        return response.data
      })
    },
    createJigsaw: function () {
      var url = Domain.resolveUrl('http://credit.dahubao.com/jigsaw-puzzle/create-jigsaw')
      return $http({
        method: 'POST',
        url: url,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(function (response) {
        return response.data
      })
    }
  }
})

angular.module('CrossYearControllers', [])

.controller('TeamController', function ($scope, TeamService, $ionicLoading, $state, $timeout, $interval, Popup, Domain) {
  $scope.firstJigsaw = true      // true表示首次拼图,显示输入手机的dialog
  $scope.diglogFlag = 1
  $scope.codeText = '获取验证码'
  $scope.sendDisabled = false
  $scope.codeFlag = false
  $scope.callFriend = false
  $scope.binding = true
  $scope.imageFlag = false

  $scope.teamData = {}
  $scope.jigData = {'name': 'XXXX'}
  $scope.prizeData = {}

  $scope.timeHours = '00'
  $scope.timeMins = '00'
  $scope.timeSecs = '00'
  $scope.finalHours = '00'
  $scope.finalMins = '00'
  $scope.finalSecs = '00'
  $scope.sumPeople = 0
  $scope.sumJigsaw = 4
  var loadingFlag = 1    // 首次加载数据

  function getUrlParam (name) {
    var requestParameters = new Object()

    var url = window.location.href
    var urlArr = url.split('?')
    if (urlArr[1]) {
      var urlParameters = urlArr[1].split('#')[0]
      if (urlParameters.indexOf('?') == -1) {
        var parameters = decodeURI(urlParameters)
        parameterArray = parameters.split('&')
        for (var i = 0; i < parameterArray.length; i++) {
          requestParameters[parameterArray[i].split('=')[0]] = (parameterArray[i].split('=')[1])
        }
      }
    }
    return requestParameters
  }

  $scope.sign = getUrlParam()

  $scope.jigsaw = {
    'one': '',
    'two': '',
    'three': '',
    'four': ''
  }

  var setTime = function (time, l) {
    $timeout(function () {
      var now = time * 1000
      timeConversion(now)
      time = time + 1
      setTime(time, 1000)
    }, l)
  }

  var timeConversion = function (time) {
    $scope.timeHours = parseInt((time / 1000) / 3600) + ''
    var mins = time - ($scope.timeHours * 1000 * 3600)
    $scope.timeMins = parseInt(mins / 60000) + ''
    $scope.timeSecs = parseInt((mins % 60000) / 1000) + ''
    if ($scope.timeHours.length == 1) {
      $scope.timeHours = '0' + $scope.timeHours
    }
    if ($scope.timeMins.length == 1) {
      $scope.timeMins = '0' + $scope.timeMins
    }
    if ($scope.timeSecs.length == 1) {
      $scope.timeSecs = '0' + $scope.timeSecs
    }
  }

  var puzzleJigsaw = function (pics) {
    for (var i in pics) {
      if (pics[i] == 1) {
        $scope.jigsaw.one = '1'
      }
      if (pics[i] == 2) {
        $scope.jigsaw.two = '2'
      }
      if (pics[i] == 3) {
        $scope.jigsaw.three = '3'
      }
      if (pics[i] == 4) {
        $scope.jigsaw.four = '4'
      }
    }
  }

  var getData = function () {
    if (loadingFlag == 1) {
      $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    }
    TeamService.getData($scope.sign['sign']).then(function (data) {
      if (loadingFlag == 1) {
        $ionicLoading.hide()
      }
      $scope.teamData = data
      if ($scope.teamData.code == 1) {
        $scope.sumJigsaw = 4
        $scope.jigData = data.data.jig_data
        if ($scope.jigData.img == '' || $scope.jigData.img == null) {
          $scope.imageFlag = false
        } else {
          $scope.imageFlag = true
        }
        if ($scope.jigData.use_time != 0 && $scope.jigData.total_time == 0) {
          setTime($scope.jigData.use_time)
        } else if ($scope.jigData.total_time != 0) {
          timeConversion($scope.jigData.total_time * 1000)
        }
        if ($scope.teamData.data.is_own == 1) {
          $scope.callFriend = true
        } else {
          $scope.callFriend = false
        }
        $scope.sumPeople = $scope.teamData.data.lists.length
        $scope.sumJigsaw = $scope.sumJigsaw - $scope.teamData.data.pics.length
        puzzleJigsaw($scope.teamData.data.pics)
        if ($scope.sumJigsaw == 0) {
          $('.card-overlay').css('display', 'none')
          $('.jigsawComplete').css('display', 'block')
          $('.help').css('visibility', 'hidden')
          $('.jigsawComplete').addClass('jigsawCompleteAnimation')
          $scope.finalHours = $scope.timeHours
          $scope.finalMins = $scope.timeMins
          $scope.finalSecs = $scope.timeSecs
        }
        if (loadingFlag == 1) {
          if ($scope.teamData.data.validate.code == -10) {
            $scope.errorMessage = '本活动已结束，请关注平台其他活动'
            $scope.firstJigsaw = false
            $scope.diglogFlag = 6
            $('.popup-message').css('display', 'block')
          } else if ($scope.teamData.data.validate.code == -11) {
            $scope.errorMessage = '活动12月28日开启，敬请期待'
            $scope.firstJigsaw = false
            $scope.diglogFlag = 6
            $('.popup-message').css('display', 'block')
          }
          loadingFlag = 2
        }
      } else if ($scope.teamData.code == -1) {
        var sharl_url = 'http://h5.dahubao.com/activity/cross-year-two/index.html?sign=' + $scope.sign['sign']
        var sharl_url_domain = Domain.resolveUrl(sharl_url)
        var url = 'http://credit.dahubao.com/wx/user-auth-template?redirectUrl=' + sharl_url_domain
        var wx_url = Domain.resolveUrl(url)
        window.location.href = wx_url
        loadingFlag = 2
      } else {
        $scope.firstJigsaw = false
        $scope.diglogFlag = 6
        $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
        loadingFlag = 2
        $('.popup-message').css('display', 'block')
      }
    })
  }

  getData()
  $interval(function () {
    getData()
  }, 20000)

  var setup = function (m, l) {
    $timeout(function () {
      $scope.codeText = m + '秒后重试'
      if (m) {
        setup(--m, 1000)
      } else {
        $scope.codeText = '重新发送'
        $scope.sendDisabled = false
      }
    }, l)
  }

  $scope.showRule = function () {
    var url = 'http://h5.dahubao.com/activity/cross-year/index.html'
    var forward_url = Domain.resolveUrl(url)
    window.location.href = forward_url
  }

  $scope.closePop = function () {
    $('.popup').css('display', 'none')
  }

  $scope.startJigsaw = function () {
    $scope.firstJigsaw = true
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    TeamService.createJigsaw().then(function (data) {
      $ionicLoading.hide()
      if (data.code == 1) {
        if (data.data.validate.code == -10) {
          $scope.errorMessage = '本活动已结束，请关注平台其他活动'
          $scope.firstJigsaw = false
          $scope.diglogFlag = 6
          $('.popup-message').css('display', 'block')
        } else if (data.data.validate.code == -11) {
          $scope.errorMessage = '活动12月28日开启，敬请期待'
          $scope.firstJigsaw = false
          $scope.diglogFlag = 6
          $('.popup-message').css('display', 'block')
        } else {
          var url = 'http://h5.dahubao.com/activity/cross-year-two/index.html?sign=' + data.data.sign
          var forward_url = Domain.resolveUrl(url)
          window.location.href = forward_url
        }
      } else if (data.code == -1) {
        $scope.binding = false
        $('.popup-message').css('display', 'block')
      } else {
        $scope.firstJigsaw = false
        $scope.diglogFlag = 6
        $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
        $('.popup-message').css('display', 'block')
      }
    })
  }

  $scope.bindingWx = function (form) {
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    TeamService.reRegister(form.phone, form.code).then(function (data) {
      $ionicLoading.hide()
      if (data.code == 1) {
        $scope.firstJigsaw = false
        $scope.diglogFlag = 5
        $('.popup-message').css('display', 'block')
      } else if (data.code == -1) {
        $scope.codeFlag = true
      } else {
        $scope.firstJigsaw = false
        $scope.diglogFlag = 6
        $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
        $('.popup-message').css('display', 'block')
      }
    })
  }

  $scope.callHelp = function () {
    var validate_code = $scope.teamData.data.validate.code
    if (validate_code == 1) {
      $('.popup-share').css('display', 'block')
    } else if (validate_code == -10) {
      $scope.errorMessage = '本活动已结束，请关注平台其他活动'
      $scope.firstJigsaw = false
      $scope.diglogFlag = 6
      $('.popup-message').css('display', 'block')
    } else {
      $scope.errorMessage = '活动12月28日开启，敬请期待'
      $scope.firstJigsaw = false
      $scope.diglogFlag = 6
      $('.popup-message').css('display', 'block')
    }
  }

  $scope.drawCard = function () {
    $scope.binding = true
    var wx_info = $scope.teamData.data.wx_info
    var validate_code = $scope.teamData.data.validate.code
    if (validate_code == 1) {
      if (wx_info.phone != '' || wx_info.uid != 0) {
        $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
        TeamService.luckDraw($scope.sign['sign']).then(function (data) {
          $ionicLoading.hide()
          $scope.firstJigsaw = false
          if (data.code == 1) {
            if (data.data.amount != '0') {
              $scope.diglogFlag = 1
              $scope.prizeData.pic = data.data.pic
              $scope.prizeData.amount = data.data.amount
              getData()
            } else {
              $scope.diglogFlag = 3
              $scope.prizeData.pic = data.data.pic
              getData()
            }
            $('.popup-message').css('display', 'block')
          } else if (data.code == 2) {
            $('.popup-message').css('display', 'block')
            $scope.diglogFlag = 2
          } else if (data.code == -22) {
            $('.popup-message').css('display', 'block')
            $scope.diglogFlag = 4
          } else {
            $scope.diglogFlag = 6
            $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
            $('.popup-message').css('display', 'block')
          }
        })
      } else {
        $scope.firstJigsaw = true
        $('.popup-message').css('display', 'block')
      }
    } else if (validate_code == -10) {
      $scope.errorMessage = '本活动已结束，请关注平台其他活动'
      $scope.firstJigsaw = false
      $scope.diglogFlag = 6
      $('.popup-message').css('display', 'block')
    } else {
      $scope.errorMessage = '活动12月28日开启，敬请期待'
      $scope.firstJigsaw = false
      $scope.diglogFlag = 6
      $('.popup-message').css('display', 'block')
    }
  }

  $scope.receiveRed = function (form) {
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    TeamService.reRegister(form.phone, form.code).then(function (data) {
      $scope.register = data
      if ($scope.register.code == 1) {
        TeamService.luckDraw($scope.sign['sign']).then(function (data) {
          $ionicLoading.hide()
          $scope.firstJigsaw = false
          $('.popup-message').css('display', 'none')
          if (data.code == 1) {
            if (data.data.amount != '0') {
              $scope.diglogFlag = 1
              $scope.prizeData.pic = data.data.pic
              $scope.prizeData.amount = data.data.amount
              getData()
            } else {
              $scope.diglogFlag = 3
              $scope.prizeData.pic = data.data.pic
              getData()
            }
            $('.popup-message').css('display', 'block')
          } else if (data.code == 2) {
            $('.popup-message').css('display', 'block')
            $scope.diglogFlag = 2
          } else if (data.code == -22) {
            $('.popup-message').css('display', 'block')
            $scope.diglogFlag = 4
          } else {
            $scope.diglogFlag = 6
            $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
            $('.popup-message').css('display', 'block')
          }
        })
      } else if ($scope.register.code == -1) {
        $ionicLoading.hide()
        $scope.firstJigsaw = true
        $scope.codeFlag = true
      } else {
        $ionicLoading.hide()
        $scope.firstJigsaw = false
        $scope.diglogFlag = 6
        $scope.errorMessage = data.message || '服务器繁忙，请稍候重试'
        $('.popup-message').css('display', 'block')
      }
    })
  }

  $scope.lookDrawRed = function () {
    var clickedAt = +new Date()
    window.location.href = 'https://api.dahubao.com/download-app.html'
  }

  $scope.setCode = function () {
    $scope.codeFlag = false
  }

  $scope.getCode = function (phone) {
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'})
    TeamService.getCode(phone).then(function (data) {
      $ionicLoading.hide()
      if (data.code == 0) {
        $scope.sendDisabled = true
        setup(60)
      } else {
        Popup.alert(data.message)
      }
    })
  }
})
