<template>
  <div id="app">
    <side-menu></side-menu>

    <v-header></v-header>

    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

import SideMenu from '../components/side'
import header from '../components/header'
export default {
  name: 'app',
  components: {
    SideMenu, vHeader: header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    background-color #fdfdfd
  #app
    height: 100%
    min-width: 1200px;
    max-width: 1400px;
    position : relative
    padding-left: 210px
  .main
    position: relative
    padding-top: 80px
    padding-bottom : 50px
    padding-bottom : 30px

</style>
