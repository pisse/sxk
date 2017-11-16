<template>
  <div class="header">
    <div class="nav-wrap">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(route, idx) in breads" :to="{name: route.path}" :key="idx">{{route.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="user">
      <span class="username"><i class="iconfont icon-user"></i>&nbsp;&nbsp;您好</span>
      <span @click.prevent="confirm" class="logout"><i class="iconfont icon-logout1"></i></span>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .header
    position :absolute
    height: 60px
    left: 210px
    right: 0
    line-height : 60px
    padding : 0 20px 0 10px
    z-index : 1
    font-size : 14px
    .nav-wrap
      display : inline-block
    .user
      float: right
      span
        cursor : pointer
      .username
        margin-right : 30px
</style>
<script type="text/ecmascript-6">
  import _base from '../mixin/base.js'
  import Services from 'common/js/services.js'
  import Routes from 'common/js/routes.js'

  export default {
    mixins: [_base],
    data () {
      return {
        breads: []
      }
    },
    created () {
      this.setWatch()
    },
    methods: {
      setWatch () {
        this.$watch('$route.path', (v, o) => {
          this.updateBread(v)
        })
      },
      updateBread (path) {
        let pathname = this.$route.path.split('/')
        let routeMaps = Routes
        let breads = []
        pathname.forEach((v, i) => {
          if (v != '') {
            breads.push({
              path: v,
              title: routeMaps[v]['name']
            })
            if (routeMaps[v]['children']) {
              routeMaps = routeMaps[v]['children']
            }
          }
        })
        this.breads = breads
      },
      confirm () {
        this.$confirm('确认退出管理后台?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.logout()
        })
      },
      logout () {
        this.$http.jsonp(Services.userAdminLoginOut, {
        }).then((res) => {
          res = res.json()
          return res
        }).then((remoteData) => {
          if (remoteData.code === 0) {
            window.location.href = './login.html'
          }
        })
      }
    },
    components: {
    }
  }
</script>
