<template>
  <div class="main login">

    <div class="login-container">
      <div class="form-view"  v-loading="isloading">
        <div class="form-status">登录</div>

        <el-form :model="ruleForm" :rules="rules" ref="loginForm" label-width="60px" class="demo-ruleForm">
          <el-form-item label="账号" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" @keyup.13.native="submitForm('loginForm')"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .login-container
    width: 400px
    margin: 0 auto
    padding: 40px 0;
    .el-button--primary
      background-color :#48576a
      &:hover, &:active, &:focus
        background-color :#324157
    .form-view
      padding: 0 37px;
      text-align :center
      border-top: 3px solid #324157;
      background-color: white;
      box-shadow: 0 0 10px lightgrey;
      border-radius: 2px;
      position: relative;
      overflow: hidden
      .el-form-item
        border:1px solid rgb(191, 203, 217);
        .el-input__inner
          border: none
       .el-button
        width: 100%
        margin-bottom: 30px;
      .form-status
        padding: 20px 0;
        font-size: 18px;

</style>
<script type="text/ecmascript-6">
  import Vue from 'vue'
  import ElementUI from 'element-ui'

  Vue.use(ElementUI)

  import Services from 'common/js/services.js'

  export default {
    data () {
      return {
        isloading: false,
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '不能为空', trigger: 'change' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.submit()
          } else {
            return false
          }
        })
      },
      submit () {
        this.isloading = true
        this.$http.jsonp(Services.userAdminLogin, {
          params: this.ruleForm
        }).then((res) => {
          res = res.json()
          return res
        }).then((remoteData) => {
          this.isloading = false
          if (remoteData.code === 0) {
            window.location.href = './index.html'
          } else {
            this.$alert('用户名或密码不正确', '', {
              type: 'error'
            })
          }
        })
      }
    },
    components: {
    }
  }
</script>
