<template>
  <div class="main">
    <div class="filter-box">
      <v-input :formData="filterForm" :opt="phone"></v-input>
      <div class="btn-right-wrap">
        <el-button size="small" type="primary" @click="search" :loading="isLoading">筛选</el-button>
      </div>
    </div>

    <el-row :gutter="20" class="table-header">
      <el-col :span="2" :offset="18"><el-button size="small" @click="downloadTemplate"><i class="iconfont icon-download"></i>下载模板</el-button></el-col>
      <el-col :span="2" ><el-button icon="upload2"  size="small" @click="dialogUploadVisible=true">导入</el-button></el-col>
      <el-col :span="2" ><el-button icon="plus" size="small" @click="modifyType=1;dialogBlackModifyVisible=true">新建</el-button></el-col>
    </el-row>

    <el-table
            v-loading="isLoading"
            :data="tableData"
            style="width: 100%"
            :row-class-name="tableRowClassName">
     <!-- <el-table-column
              label="序号"
              type="index"
              width="50">
      </el-table-column>-->

      <el-table-column v-for="(column, idx) in columns" :key="idx"
                       :prop="column.key"
                       :label="column.title"
                       :width="column.width"
      >
      </el-table-column>

      <el-table-column
              fixed="right"
              label="操作"
              width="100">
        <template slot-scope="scope">
          <!--<el-button @click="onDetail" type="text" size="small">查看</el-button>-->
          <el-button @click.prevent="onToggleStatus(scope.$index, scope.row)" type="text" size="small">{{statusText(scope.row)}}</el-button>
          <!--<el-button  @click.prevent="onDelete" type="text" size="small">删除</el-button>-->
        </template>
      </el-table-column>
    </el-table>

    <div class="mt15">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next, jumper"
          :total="total">
      </el-pagination>
    </div>

    <el-dialog :title="modifyType==1 ? '新建黑名单': '修改黑名单'" v-model="dialogBlackModifyVisible" size="tiny" custom-class="black-dialog" @close="reset('userModify')">
      <el-form :model="blackForm" :rules="blackRules" ref="userModify"  v-loading="isModifyLoading">
        <el-form-item label="手机号" label-width="100px" prop="mobile">
          <el-input size="small" v-model="blackForm.mobile" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" label-width="100px" prop="remark">
          <el-input size="small" v-model="blackForm.remark" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogBlackModifyVisible = false">取 消</el-button>
        <el-button type="primary" @click="userValidate('userModify')">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog :title="uploadName" v-model="dialogUploadVisible" custom-class="upload-dialog">

      <div class="upload-wrap">
        <el-upload
            ref="upload"
            class="upload-file"
            :action="uploadUrl"
            with-credentials
            :before-upload="handleBeforeUpload"
            :on-success="handleSuccessUpload"
            :auto-upload="false"
            :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能csv,txt文件，且不超过50M</div>
        </el-upload>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogUploadVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitUpload()">开始上传</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import vInput from './filters/vInput'
import _base from '../mixin/base.js'
import _upload from '../mixin/upload.js'
import _pagination from '../mixin/pagination.js'

import Services from 'common/js/services.js'

export default {
  mixins: [_base, _pagination, _upload],
  name: 'front',
  data () {
    return {
      modifyType: '1',
      dialogBlackModifyVisible: false,
      isModifyLoading: false,
      uploadName: '黑名单导入',
      uploadUrl: Services.blackListUpload,
      phone: {
        name: '手机号',
        key: 'phone',
        placeHolder: '请输入手机号'
      },
      filterForm: {
        phone: ''
      },
      blackForm: {
        mobile: '',
        remark: '',
        id: ''
      },
      blackRules: {
        mobile: [
          { required: true, message: '手机号不能为空', trigger: 'blur' }
        ]
      },
      columns: [{key: 'id', title: 'ID', isAdd: false}, {key: 'mobile', title: '手机号'}, {key: 'remark', title: '备注', width: '200px'},
        {key: 'status_name', title: '状态'},
        {key: 'updated_at', title: '更新时间', width: '180px', isAdd: false}, {key: 'created_at', title: '创建时间', width: '180px', isAdd: false}],
      tableData: []
    }
  },
  watch: {
    currentPage () {
      this.getList()
    }
  },
  created () {
    this.getList()
  },
  methods: {
    search () {
      this.getList()
    },
    getList () {
      let params = Object.assign({}, this.filterForm)
      params['page'] = this.currentPage
      this.requestPost(Services.blackList, params, (remoteData) => {
        this.tableData = remoteData && remoteData.data.list || []
        // this.pageSize = remoteData.page_size
        this.total = parseInt(remoteData.data.total)
      })
    },
    statusText (row) {
      return row.status == '1' ? '失效' : '生效'
    },
    userValidate (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.modifyType == 1) {
            this.AddBlacklist(formName)
          } else {
            this.EditBlacklist(formName)
          }
        } else {
          return false
        }
      })
    },
    reset (formName) {
      this.$refs[formName].resetFields()
    },
    AddBlacklist (formName) {
      this.requestPost(Services.blackListAdd, this.blackForm, (remoteData) => {
        this.dialogBlackModifyVisible = false
        this.$refs[formName].resetFields()
        this.getList()
        this.$message({
          type: 'success',
          message: '添加成功'
        }, 'isModifyLoading')
      })
    },
    EditBlacklist (formName) {
      let params = {}
      Object.assign(params, this.blackForm)

      this.requestPost(Services.blackListModify, params, (remoteData) => {
        this.dialogBlackModifyVisible = false
        this.$refs[formName].resetFields()
        this.getList()
        this.$message({
          type: 'success',
          message: '修改成功'
        })
      }, 'isModifyLoading')
    },
    downloadTemplate () {
      location.href = 'http://sms.q1069.com/file/template/black.csv'
    },
    tableRowClassName (row, index) {
      return ''
    },
    handleClick () {
      console.log(1)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      console.log(`当前页: ${val}`)
    },
    onDetail () {},
    onToggleStatus (idx, rowData) {
      let text = rowData.status == '1' ? '失效' : '生效'
      let status = rowData.status == '1' ? '0' : '1'
      this.$confirm('确认要' + text + '此黑名单吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.requestPost(Services.blackListCheck, {
          status: status,
          id: rowData.id
        }, (remoteData) => {
          this.getList()
          this.$message({
            type: 'success',
            message: '修改成功'
          })
        })
      })
    },
    onDelete () {
      this.$confirm('确认要删除此用户吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.request(Services.userAdminList, {
        }, (remoteData) => {
          this.getContactList()
          this.$message({
            type: 'success',
            message: '删除成功'
          })
        })
      })
    }
  },
  components: {
    vInput
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.black-dialog
  .el-input__inner
    width: 200px

</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
