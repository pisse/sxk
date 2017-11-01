export default {
  path: 'activity',
  childRoutes: [
    /* {
      path: 'gift',
      transaction: 'from-left',
      getComponent (location, callback) {
        require.ensure([], function (require) {
          callback(null, require('pages/activity/gift/Gift'))
        })
      }
    },
    {
      path: 'freetrips',
      transaction: 'from-left',
      indexRoute: [
        {
          transition: 'from-left',
          getComponent (location, callback) {
            require.ensure([], function (require) {
              callback(null, require('pages/activity/freetrips/Freetrips'))
            })
          }
        }
      ],
      childRoutes: [
        {
          path: 'tour',
          transition: 'from-right',
          getComponent (location, callback) {
            require.ensure([], function (require) {
              callback(null, require('pages/activity/freetrips/Freeluddite'))
            })
          }
        }
      ]
    },
    {
      path: 'women',
      transaction: 'from-left',
      indexRoute: [
        {
          transition: 'from-left',
          getComponent (location, callback) {
            require.ensure([], function (require) {
              callback(null, require('pages/activity/women/Women'))
            })
          }
        }
      ],
      childRoutes: [
        {
          path: 'tour',
          transition: 'from-right',
          getComponent (location, callback) {
            require.ensure([], function (require) {
              callback(null, require('pages/activity/women/WomenShare'))
            })
          }
        }
      ]
    }, */
    {
      path: 'invite',
      transaction: 'from-left',
      indexRoute: [
        {
          transition: 'from-left',
          getComponent (location, callback) {
            require.ensure([], function (require) {
              callback(null, require('pages/activity/invite/Invite'))
            })
          }
        }
      ],
      childRoutes: [
        {
          path: 'reward',
          transition: 'from-right',
          getComponent (location, callback) {
            require.ensure([], function (require) {
              callback(null, require('pages/activity/invite/Reward'))
            })
          }
        },
        {
          path: 'share',
          transition: 'from-right',
          getComponent (location, callback) {
            require.ensure([], function (require) {
              callback(null, require('pages/activity/invite/Share'))
            })
          }
        }
      ]
    },
    {
      path: 'eggs',
      transaction: 'from-left',
      indexRoute: [
        {
          transition: 'from-left',
          getComponent (location, callback) {
            require.ensure([], function (require) {
              callback(null, require('pages/activity/eggs/index'))
            })
          }
        }
      ]
    },
    {
      path: 'share',
      transaction: 'from-left',
      getComponent (location, callback) {
        require.ensure([], function (require) {
          callback(null, require('pages/activity/share/Share'))
        })
      }
    },
    {
      path: 'cash-gift',
      transaction: 'from-left',
      getComponent (location, callback) {
        require.ensure([], function (require) {
          callback(null, require('pages/activity/cash-gift/index'))
        })
      }
    },
    {
      path: 'interest-free',
      indexRoute: [
        {
          transaction: 'from-left',
          getComponent (location, callback) {
            require.ensure([], function (require) {
              callback(null, require('pages/activity/interest-free/index'))
            })
          }
        }
      ],
      childRoutes: [
        {
          path: 'share',
          transition: 'from-right',
          getComponent (location, callback) {
            require.ensure([], function (require) {
              callback(null, require('pages/activity/interest-free/Share'))
            })
          }
        }
      ]
    },
    {
      path: 'turntable',
      transaction: 'from-left',
      getComponent (location, callback) {
        require.ensure([], function (require) {
          callback(null, require('pages/activity/turntable/Turntable'))
        })
      }
    },
    {
      path: 'thursday-freeinterest',
      transaction: 'from-left',
      getComponent (location, callback) {
        require.ensure([], function (require) {
          callback(null, require('pages/activity/thursday-freeinterest'))
        })
      }
    },
    /* {
      path: 'fool',
      transaction: 'from-left',
      getComponent (location, callback) {
        require.ensure([], function (require) {
          callback(null, require('pages/activity/fool/Fool'))
        })
      }
    }, */
    {
      path: 'gold',
      transaction: 'from-left',
      getComponent (location, callback) {
        require.ensure([], function (require) {
          callback(null, require('pages/activity/experience-gold/Gold'))
        })
      }
    },
    {
      path: 'half-price',
      transaction: 'from-left',
      getComponent (location, callback) {
        require.ensure([], function (require) {
          callback(null, require('pages/activity/half-price'))
        })
      }
    },
    {
      path: 'ios-entry',
      transaction: 'from-left',
      getComponent (location, callback) {
        require.ensure([], function (require) {
          callback(null, require('pages/activity/ios-entry/index'))
        })
      }
    },
    {
      path: 'notback',
      transaction: 'from-left',
      getComponent (location, callback) {
        require.ensure([], function (require) {
          callback(null, require('pages/activity/notback/notBack'))
        })
      }
    },
    {
      path: 'birthday',
      transaction: 'from-left',
      getComponent (location, callback) {
        require.ensure([], function (require) {
          callback(null, require('pages/activity/birthday/birthday'))
        })
      }
    },
    {
      path: 'group-loan',
      transaction: 'from-left',
      getComponent (location, callback) {
        require.ensure([], function (require) {
          callback(null, require('pages/activity/group-loan/GroupLoan'))
        })
      }
    }
  ]
}
