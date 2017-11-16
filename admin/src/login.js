/**
 * Created by Administrator on 2017/5/7.
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import Login from './entry/login'

Vue.use(VueResource)

import 'element-ui/lib/theme-chalk/index.css'
import 'common/stylus/index.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  template: '<Login/>',
  components: { Login }
})
