import Layout from 'pages/mobile/Layout'
import {withTransition} from 'react-router-transitions'
import CertificationLayout from 'pages/mobile/certification/layout'

export default {
  path: '/mobile',
  component: withTransition(Layout),
  indexRoute: {onEnter: (nextState, replace) => replace('/mobile/loan')},
  childRoutes: [
    {
      path: 'loan',
      getComponent (location, callback) {
        require.ensure([], function (require) {
          callback(null, require('pages/mobile/loan'))
        })
      }
    },
    {
      path: 'certification',
      indexRoute: [{
        getComponent (location, callback) {
          require.ensure([], function (require) {
            callback(null, require('pages/mobile/certification'))
          })
        }
      }],
      childRoutes: [
        {
          path: 'instruction',
          transition: 'from-right',
          getComponent (location, callback) {
            require.ensure([], function (require) {
              callback(null, require('pages/mobile/certification/instruction'))
            })
          }
        }, {
          component: CertificationLayout,
          transition: 'from-right',
          childRoutes: [
            {
              path: 'information',
              transaction: 'from-right',
              getComponent (location, callback) {
                require.ensure([], function (require) {
                  callback(null, require('pages/mobile/certification/information'))
                })
              }
            }, {
              path: 'contacts',
              transaction: 'from-right',
              getComponent (location, callback) {
                require.ensure([], function (require) {
                  callback(null, require('pages/mobile/certification/contacts'))
                })
              }
            }, {
              path: 'bank',
              transaction: 'from-right',
              getComponent (location, callback) {
                require.ensure([], function (require) {
                  callback(null, require('pages/mobile/certification/bank'))
                })
              }
            }, {
              path: 'operator',
              transaction: 'from-right',
              getComponent (location, callback) {
                require.ensure([], function (require) {
                  callback(null, require('pages/mobile/certification/operator'))
                })
              }
            }
          ]
        }
      ]
    },
    {
      path: 'find',
      getComponent (location, callback) {
        require.ensure([], function (require) {
          callback(null, require('pages/mobile/find'))
        })
      }
    },
    {
      path: 'me',
      getComponent (location, callback) {
        require.ensure([], function (require) {
          callback(null, require('pages/mobile/me'))
        })
      }
    },
    {
      path: '',
      childRoutes: [
        {
          path: 'loan/:card_type/:period/:money(/:coupon_id)',
          transition: 'from-bottom',
          getComponent (location, callback) {
            require.ensure([], function (require) {
              callback(null, require('pages/mobile/misc/Loan'))
            })
          }
        },
        {
          path: 'coupon',
          transition: 'from-left',
          getComponent (location, callback) {
            require.ensure([], function (require) {
              callback(null, require('pages/mobile/misc/Coupon'))
            })
          }
        },
        {
          path: 'order',
          transition: 'from-left',
          getComponent (location, callback) {
            require.ensure([], function (require) {
              callback(null, require('pages/mobile/misc/Order'))
            })
          }
        }
      ]
    }
  ]
}
