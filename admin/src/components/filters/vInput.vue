<template>
  <div class="search-bar constant-cpt">
    <span class="bar-name">{{opt.name}}:</span>
    <div class="input-wrap">{{opt.value}}
      <el-input size="small" @focus="onFocus" @blur="onBlur" v-model="formData[opt['key']]"  :on-icon-click="handleIconClick" :icon="opt.icon" :placeholder="opt.placeHolder ? opt.placeHolder : '请输入内容'"></el-input>
    </div>
    <div class="validator-cpt" v-show="isError">
      <div class="validator-cpt-tip error">
        {{this.errMsg}}
      </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .search-bar
    .input-wrap
      display : inline-block
      min-width : 200px
</style>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        isError: false,
        errMsg: ''
      }
    },
    props: {
      opt: {
        type: Object,
        default: function () {
          return {}
        }
      },
      formData: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleIconClick () {
        this.$emit('icon_click')
      },
      onFocus () {
        this.isError = false
        this.errMsg = ''
      },
      onBlur () {
        if (this.opt.rules) {
          for (let i = 0; i < this.opt.rules.length; i++) {
            let rule = this.opt.rules[i]
            let val = this.formData[this.opt['key']]
            if (rule.required && val === '') {
              this.isError = true
              this.errMsg = rule.message
              break
            }
            if (rule.phone && val !== '' && !/^1[34578]\d{9}$/.test(val)) {
              this.isError = true
              this.errMsg = rule.message
              break
            }
          }
        }
      }
    },
    components: {
    }
  }
</script>
