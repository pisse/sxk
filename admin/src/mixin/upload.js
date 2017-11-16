/**
 * Created by Administrator on 2017/5/18.
 */
import Vue from 'vue'

var base = {
  data () {
    return {
      uploadName: '',
      uploadUrl: '',
      dialogUploadVisible: false,
      fileList: []
    }
  },
  methods: {
    handleBeforeUpload (file) {
      if (/\.(csv|txt)$/.test(file.name)) {
        return true
      } else {
        this.$alert('只能上传csv, txt文件', '上传失败')
        return false
      }
    },
    handleSuccessUpload (res, file, fileList) {
      if (res.code == 0) {
        this.$message({
          type: 'success',
          message: res.message
        })
        this.dialogUploadVisible = false
        this.fileList = []
        this.getList()
      }
    },
    submitUpload () {
      this.$refs.upload.submit()
    },
    getList () {}
  }
}

export default base
