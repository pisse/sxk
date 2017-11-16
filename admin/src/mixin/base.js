/**
 * Created by Administrator on 2017/5/18.
 */
import Vue from 'vue'

var base = {
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    showLoading (loadingKey) {
      if (loadingKey) {
        this[loadingKey] = true
      } else {
        this.isLoading = true
      }
    },
    closeLoading (loadingKey) {
      if (loadingKey) {
        this[loadingKey] = false
      } else {
        this.isLoading = false
      }
    },
    requestPost (url, data, callback, loadingKey) {
      Vue.http.options.emulateJSON = true
      this.showLoading(loadingKey)
      this.$http.post(url, data, {
        credentials: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then((res) => {
        res = res.json()
        return res
      }).then((remoteData) => {
        this.closeLoading(loadingKey)
        // 登录态失效
        if (remoteData.code === -99999) {
          this.reLogin()
        }
        if (remoteData.code === 0) {
          callback.call(this, remoteData)
        } else {
          this.$message({
            type: 'error',
            message: remoteData.message
          })
        }
      }).catch((e) => {
        console.log(e)
      })
    },
    request (url, data, callback, loadingKey) {
      this.showLoading(loadingKey)
      this.$http.jsonp(url, {
        params: data
      }).then((res) => {
        res = res.json()
        return res
      }).then((remoteData) => {
        this.closeLoading(loadingKey)
        // 登录态失效
        if (remoteData.code === -99999) {
          this.reLogin()
        }
        if (remoteData.code === 0) {
          callback.call(this, remoteData)
        } else {
          this.$message({
            type: 'error',
            message: remoteData.message
          })
        }
      })
    },
    reLogin () {
      setTimeout(() => {
        location.href = './login.html'
      }, 1500)
    }
  }
}

export default base
