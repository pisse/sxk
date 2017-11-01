angular.module('ionic')
  .directive('kdPane', function () {
    return {
      restrict: 'E',
      link: function (scope, element) {
        element.addClass('pane')
        element.addClass('kd-pane')
      }
    }
  })

angular.module('credit', [])
  .directive('downloadPopup', function (Platform, $timeout) {
    return {
      restrict: 'E',
      scope: {},
      replace: true,
      template: '<div ng-show="isShow" ng-click="download()" class="download-popup">\
                   <a href="" class="close" ng-click="close($event)"></a>\
                   <img alt="" src="//h5.xianjincard.com/credit/img/download-logo.png"/>\
                   <div><p>下载即享极速借款<br/>被拒最高赔偿<i>50元</i></p></div>\
                 </div>',
      link: function (scope, element, attrs) {
        scope.isShow = !Platform.isApp
        scope.close = function ($event) {
          $event.stopPropagation()
          scope.isShow = false
        }
        scope.download = function () {
          window.location = 'https://credit.xianjincard.com/download-app.html'
        }
      }
    }
  })
  .directive('popupPassword', function ($timeout) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        title: '=',
        isHref: '=',
        isShow: '=',
        isError: '=',
        sendHandler: '&'
      },
      template: '<div class="popup" id="defray" ng-show="isShow">\
                  <div class="overlay"></div>\
                  <div class="dialog pay">\
                    <span class="close" ng-click="close()"></span>\
                    <h2>{{title}}</h2>\
                    <p class="clearfix">\
                      <i></i> <i></i> <i></i> <i></i> <i></i> <i></i>\
                      <input type="tel" value="" autofocus>\
                    </p>\
                    <p ng-show="isError" class="error-tips">密码错误</p>\
                    <a ng-show="isHref" nav-direction="forward" href="#/my/findpaypassword?state=loan">忘记密码?</a>\
                  </div>\
                </div>',
      link: function (scope, element, attrs) {
        scope.close = function () {
          scope.isShow = false
        }
        scope.$watch('isShow', function (val) {
          if (val) {
            $timeout(function () {
              scope.isError = false
              $('#defray .error-tips').text('密码错误')
              $('#defray input').val('')
              $('#defray i').removeClass('point')
              $('#defray input').focus()
            }, 0)
          }
        })
        scope.$watch(function () {
          return element
        }, function (elements) {
          $('#defray div.overlay').click(function(e){
            e.stopPropagation();
            $('#defray input').blur()
          })
          var interval = null
          $('#defray p').click(function (event) {
            $('#defray input').focus()
          })
          $('#defray input').focus(function () {
            var interval = setInterval(function () {
              if (document.activeElement.nodeName == 'INPUT') {
                var top = $('#defray .dialog').position.top
                if (top <= 0) {
                  return;
                }
                document.body.scrollTop = 0
                $('#defray .dialog').animate({top: 0, marginTop: 0}, 100)
              } else {
                $('#defray .dialog').attr('style', '')
                if (interval) {
                  clearInterval(interval)
                  interval = null
                }
              }
            }, 200)
          })
          $('#defray input').bind('input', function (event) {
            var val = $(this).val()
            $('#defray i').removeClass('point')
            $('#defray i').slice(0, val.length).addClass('point')
            scope.isError = false
            scope.$apply()
            if (val.length >= 6) {
              $(this).val(val.slice(0, 6))
              scope.sendHandler({password: $(this).val()})
            }
          })
        })
      }
    }
  })
  .directive('textScroll', function ($timeout) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        items: '=',
        interval: '='
      },
      template: '<ul class="text-scroll"><li ng-repeat="item in items track by $index">{{item}}</li></ul>',
      link: function (scope, element, attrs) {
        scope.$watch('items', function (val) {
          if (val) {
            scope.items.push(scope.items[0])
          }
        })

        scope.$watch(function () {
          return element[0].children[0]
        }, function (elem) {
          try {
            var l = element[0].children.length
            var h = elem.offsetHeight
            var i = 0
            var t = scope.interval || 1000
            var setup = function () {
              i++
              if (i >= l) {
                i = 1
                element.css('top', 0)
              }
              $(element).animate({
                'top': -h * i
              })
            }
            setInterval(setup, t)
          } catch (e) {}
        })
      }
    }
  })

  .factory('Domain', function ($location) {
    var host = $location.$$host
    var reg = /(?:http(?:s)?:\/\/)?(?:www\.)?(.*?)\./
    var regR = /https?:\/\/(?:[^/]+\.)?([^./]+\.(?:com))(?:$|\/)/
    var m = host.match(reg)

    var domain = {
      credit: $location.$$protocol + '://' + $location.$$host + '/credit/web/',
      api: $location.$$protocol + '://' + $location.$$host + '/frontend/web/',
      h5: $location.$$protocol + '://' + $location.$$host + '/h5/mobile/web/',
      h: $location.$$protocol + '://' + $location.$$host + ':8000/'
    }

    if (m !== null) {
      if (m[1] === 'h5') {
        domain = {
          credit: $location.$$protocol + '://credit.xianjincard.com/',
          api: $location.$$protocol + '://api.xianjincard.com/',
          h5: $location.$$protocol + '://h5.xianjincard.com/',
          h: $location.$$protocol + '://h.xianjincard.com/'
        }
      }

      if (m[1] === 'pre-h5') {
        domain = {
          credit: $location.$$protocol + '://pre-credit.xianjincard.com/',
          api: $location.$$protocol + '://pre-api.xianjincard.com/',
          h5: $location.$$protocol + '://pre-h5.xianjincard.com/',
          h: $location.$$protocol + '://pre-h.xianjincard.com/'
        }
      }

      if (m[1] === 'test-h5') {
        domain = {
          credit: $location.$$protocol + '://test-credit.xianjincard.com/',
          api: $location.$$protocol + '://test-api.xianjincard.com/',
          h5: $location.$$protocol + '://test-h5.xianjincard.com/',
          h: $location.$$protocol + '://test-h.xianjincard.com/'
        }
      }

      if (host == '192.168.39.214') {
        domain = {
          credit: $location.$$protocol + '://' + $location.$$host + '/kdkj/credit/web/',
          api: $location.$$protocol + '://' + $location.$$host + '/kdkj/frontend/web/',
          h5: $location.$$protocol + '://' + $location.$$host + '/kdkj/h5/mobile/web/'
        }
      }

      if (host == '121.42.12.69') {
        domain = {
          credit: $location.$$protocol + '://' + $location.$$host + '/koudai/kdkj/credit/web/',
          api: $location.$$protocol + '://' + $location.$$host + '/koudai/kdkj/frontend/web/',
          h5: $location.$$protocol + '://' + $location.$$host + '/koudai/kdkj/h5/mobile/web/'
        }
      }
    }

    return {
      resolveUrl: function (url) {
        var arr = url.match(reg)
        if (domain[arr[1]]) {
          return url.replace(regR, domain[arr[1]])
        }
        return url.replace(/^https?/, $location.$$protocol)
      },
      domain: domain
    }
  })

  .factory('Platform', function ($location) {
    function param (name) {
      // Check if param is set in url#hash
      if ($location.search()[name] !== void 0) {
        return $location.seach()[name]
      }
      // Otherwise check url params
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
        results = regex.exec(location.search)
      return results === null ? void 0 : decodeURIComponent(results[1].replace(/\+/g, ' '))
    }
    var u = navigator.userAgent
    var versions = u.split('/')
    return {
      getParamByName: param,
      appVersion: versions[versions.length - 1],
      isApp: u.indexOf('kdxj') === -1 ? false : true,
      isAndroid: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, // android终端
      isIos: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端])
      isWeixin: u.indexOf('MicroMessenger') > -1, // 是否微信 （2015-01-22新增）
      isQQ: u.match(/\sQQ/i) == ' qq' // 是否QQ
    }
  })

  .factory('Popup', function ($ionicPopup) {
    function alert (message, callback) {
      $ionicPopup.alert({
        title: '提示',
        template: message,
        okText: '确定',
        okType: 'button-credit'
      }).then(function (res) {
        if (typeof callback === 'function') callback()
      })
    }

    var confirm = function (data) {
      $ionicPopup.confirm({
        title: data.title || '确认',
        template: data.content,
        cancelText: '取消',
        cancelType: 'button-credit-gray',
        okText: '确定',
        okType: 'button-credit'
      }).then(function (res) {
        if (typeof data.callback === 'function') {
          data.callback(res)
        }
        if (res) {
          if (typeof data.ok === 'function') {
            data.ok()
          }
        } else {
          if (typeof data.cance === 'function') {
            data.cance()
          }
        }
      })
    }

    return {
      alert: alert,
      confirm: confirm
    }
  })

  .factory('HttpInterceptor', function ($q, $injector) {
    var httpInterceptor = {
      'responseError': function (response) {
        return $q.reject(response)
      },
      'response': function (response) {
        // 服务器错误
        if (response.status !== 200) {
          var Popup = $injector.get('Popup')
          var $ionicLoading = $injector.get('$ionicLoading')
          $ionicLoading.hide()
          Popup.alert('请求不成功')
          return $q.reject(response)
        }
        // 接口异常
        if (response.data.code !== undefined && response.data.code == -2) {
          // console.log(response.data)
          var Popup = $injector.get('Popup')
          var $ionicLoading = $injector.get('$ionicLoading')
          $ionicLoading.hide()
          Popup.alert(response.data.message, function () {
            var $state = $injector.get('$state')
            $state.go('login')
          })
          return $q.reject(response)
        }
        // console.log('http interceptor response', response);
        return response
      },
      'request': function (config) {
        // m版请求标识
        if (!/\.html/.test(config.url)) {
          // config.url += /\?/.test(config.url) ? '&userOrigin=m' : '?userOrigin=m'
        }
        return config
      },
      'requestError': function (config) {
        return $q.reject(config)
      }
    }
    return httpInterceptor
  })

  .filter('isEmpty', function () {
    var bar
    return function (obj) {
      for (bar in obj) {
        if (obj.hasOwnProperty(bar)) {
          return false
        }
      }
      return true
    }
  })

  .filter('trusted', function ($sce) {
    return function (html) {
      return $sce.trustAsHtml(html)
    }
  })
