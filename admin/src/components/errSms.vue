<template>
  <div class="main">
    <div class="filter-box">
      <v-input :formData="filterForm" :opt="code"></v-input>
      <br>
      <v-input :formData="filterForm" :opt="code_message"></v-input>
      <div class="btn-right-wrap">
        <el-button size="small" type="primary" @click="search" :loading="isLoading">筛选</el-button>
      </div>
    </div>

    <el-row :gutter="18" class="table-header">
      <el-col :span="2" :offset="18"><el-button size="small" @click="downloadTemplate"><i class="iconfont icon-download"></i>下载模板</el-button></el-col>
      <el-col :span="2" ><el-button icon="upload2"  size="small" @click="dialogUploadVisible=true">导入</el-button></el-col>
      <el-col :span="2" ><el-button icon="plus" size="small" @click="modifyType=1;dialogUserModifyVisible=true">新建</el-button></el-col>
    </el-row>

    <el-table
            v-loading="isLoading"
            :data="tableData"
            style="width: 100%"
            :row-class-name="tableRowClassName">
<!--
      <el-table-column
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
          <el-button @click.prevent="onEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click.prevent="onDelete(scope.$index, scope.row)" type="text" size="small">删除</el-button>
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

    <el-dialog :title="modifyType==1 ? '新建错误类型': '修改错误类型'" v-model="dialogUserModifyVisible" size="tiny" custom-class="user-dialog" @close="reset('errsmsModify')">
      <el-form :model="errForm" :rules="errSmsRules" ref="errsmsModify"  v-loading="isModifyLoading">
        <el-form-item label="错误码" label-width="100px" prop="code">
          <el-input size="small" v-model="errForm.code" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="错误信息" label-width="100px" prop="code_message">
          <el-input size="small" v-model="errForm.code_message" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" label-width="100px" prop="remark">
          <el-input size="small" v-model="errForm.remark" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogUserModifyVisible = false">取 消</el-button>
        <el-button type="primary" @click="userValidate('errsmsModify')">确 定</el-button>
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
  name: 'errSms',
  data () {
    return {
      modifyType: '1',
      dialogUserModifyVisible: false,
      isModifyLoading: false,
      uploadName: '错误信息导入',
      uploadUrl: Services.errUpload,
      code: {
        name: '错误码',
        key: 'code',
        placeHolder: '请输入错误码'
      },
      code_message: {
        name: '错误信息',
        key: 'code_message',
        placeHolder: '请输入错误信息'
      },
      filterForm: {
        code: '',
        code_message: ''
      },
      errForm: {
        code: '',
        code_message: '',
        remark: '',
        id: ''
      },
      errSmsRules: {
        code: [
          { required: true, message: '错误码不能为空', trigger: 'blur' }
        ],
        code_message: [
          { required: true, message: '错误信息不能为空', trigger: 'blur' }
        ]
      },
      columns: [{key: 'id', title: 'ID'}, {key: 'code', title: '错误码'}, {key: 'code_message', title: '错误信息'},
        {key: 'remark', title: '备注', width: '200px'}, {key: 'status', title: '状态'}, {key: 'operator_name', title: '更新人'},
        {key: 'updated_at', title: '更新时间', width: '180px'}, {key: 'created_at', title: '创建时间', width: '180px'}],
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
      this.requestPost(Services.errList, params, (remoteData) => {
        this.tableData = remoteData && remoteData.data.list || []
        // this.pageSize = remoteData.page_size
        this.total = parseInt(remoteData.data.total)
      })
    },
    userValidate (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.modifyType == 1) {
            this.AddErrSms(formName)
          } else {
            this.EditErrSms(formName)
          }
        } else {
          return false
        }
      })
    },
    reset (formName) {
      this.$refs[formName].resetFields()
    },
    AddErrSms (formName) {
      this.requestPost(Services.errAdd, this.errForm, (remoteData) => {
        this.dialogUserModifyVisible = false
        this.$refs[formName].resetFields()
        this.getList()
        this.$message({
          message: '添加成功'
        }, 'isModifyLoading')
      })
    },
    EditErrSms (formName) {
      let params = {}
      Object.assign(params, this.errForm)

      this.requestPost(Services.errModify, params, (remoteData) => {
        this.dialogUserModifyVisible = false
        this.$refs[formName].resetFields()
        this.getList()
        this.$message({
          message: '修改成功'
        })
      }, 'isModifyLoading')
    },
    tableRowClassName (row, index) {
      return ''
    },
    downloadTemplate () {
      location.href = 'http://sms.q1069.com/file/template/error.csv'
    },
    onDetail () {},
    onEdit (idx, rowData) {
      this.modifyType = 2
      this.dialogUserModifyVisible = true
      this.$nextTick(() => {
        this.errForm.remark = rowData.remark
        this.errForm.code = rowData.code
        this.errForm.code_message = rowData.code_message
        this.errForm.id = rowData.id
      })
    },
    onDelete (dx, rowData) {
      this.$confirm('确认要删除此记录吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.request(Services.errDel, {
          id: rowData.id
        }, (remoteData) => {
          this.getList()
          this.$message({
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
.user-dialog
  .el-input__inner
    width: 200px


</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
