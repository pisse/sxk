<template>
  <div class="main">
    <div class="filter-box">
      <v-input :formData="filterForm" :opt="word"></v-input>
      <div class="btn-right-wrap">
        <el-button size="small" type="primary" @click="search" :loading="isLoading">筛选</el-button>
      </div>
    </div>

    <el-row :gutter="18" class="table-header">
      <el-col :span="2" :offset="18"><el-button size="small" @click="downloadTemplate"><i class="iconfont icon-download"></i>下载模板</el-button></el-col>
      <el-col :span="2" ><el-button icon="upload2"  size="small" @click="dialogUploadVisible=true">导入</el-button></el-col>
      <el-col :span="2" ><el-button icon="plus" size="small" @click="modifyType=1;dialogModifyVisible=true">新建</el-button></el-col>
    </el-row>

    <el-table
            v-loading="isLoading"
            :data="tableData"
            style="width: 100%"
            :row-class-name="tableRowClassName">

     <!-- <el-table-column
              type="index"
              label="序号"
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
          <!--<el-button @click.prevent="onEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>-->
          <el-button @click.prevent="onToggleStatus(scope.$index, scope.row)" type="text" size="small">{{statusText(scope.row)}}</el-button>
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

    <el-dialog :title="modifyType==1 ? '新建敏感词': '修改敏感词'" v-model="dialogModifyVisible" size="small" custom-class="modify-dialog" @close="reset('userModify')">
      <el-form :model="form" :rules="formRules" ref="userModify"  v-loading="isModifyLoading">

        <el-form-item v-if="item.isAdd !== false" :key="idx" v-for="(item, idx) in columns" :label="item.title" label-width="100px" :prop="item.key">
          <el-input size="small" v-model="form[item.key]" auto-complete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogModifyVisible = false">取 消</el-button>
        <el-button type="primary" @click="validate('userModify')">确 定</el-button>
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
  mixins: [_base, _upload, _pagination],
  name: 'errSms',
  data () {
    return {
      modifyType: '1',
      dialogModifyVisible: false,
      isModifyLoading: false,
      uploadName: '敏感词导入',
      uploadUrl: Services.sensitiveUpload,
      word: {
        name: '敏感词',
        key: 'word',
        placeHolder: '请输入敏感词'
      },
      filterForm: {
        word: ''
      },
      form: {
        id: '',
        word: '',
        remark: ''
      },
      formRules: {
        word: [
          { required: true, message: '敏感词不能为空', trigger: 'blur' }
        ]
      },
      columns: [{key: 'id', title: 'ID', isAdd: false}, {key: 'word', title: '敏感词'}, {key: 'remark', title: '备注', width: '180px'},
        {key: 'operator_name', title: '更新人', isAdd: false}, {key: 'status_name', title: '状态', isAdd: false},
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
      this.requestPost(Services.sensitiveList, params, (remoteData) => {
        this.tableData = remoteData && remoteData.data.list || []
        this.total = parseInt(remoteData.data.total)
      })
    },
    validate (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.modifyType == 1) {
            this.AddOperator(formName)
          } else {
            this.EditOperator(formName)
          }
        } else {
          return false
        }
      })
    },
    reset (formName) {
      this.$refs[formName].resetFields()
    },
    AddOperator (formName) {
      this.requestPost(Services.sensitiveAdd, this.form, (remoteData) => {
        this.dialogModifyVisible = false
        this.$refs[formName].resetFields()
        this.getList()
        this.$message({
          message: '添加成功'
        }, 'isModifyLoading')
      })
    },
    statusText (row) {
      return row.status == '1' ? '失效' : '生效'
    },
    onToggleStatus (idx, rowData) {
      let text = rowData.status == '1' ? '失效' : '生效'
      let status = rowData.status == '1' ? '0' : '1'
      this.$confirm('确认要' + text + '此敏感词吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.requestPost(Services.sensitiveCheck, {
          status: status,
          id: rowData.id
        }, (remoteData) => {
          this.getList()
          this.$message({
            message: '修改成功'
          })
        })
      })
    },
    tableRowClassName (row, index) {
      return ''
    },
    downloadTemplate () {
      location.href = 'http://sms.q1069.com/file/template/sensitive_words.csv'
    },
    onDetail () {},
    onEdit (idx, rowData) {
      this.modifyType = 2
      this.dialogModifyVisible = true
      this.$nextTick(() => {
        for (let key in this.form) {
          this.form[key] = rowData[key]
        }
        this.form['id'] = rowData['id']
      })
    },
    onDelete (idx, rowData) {
      this.$confirm('确认要删除此敏感词吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.request(Services.sensitiveDel, {
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
.modify-dialog
  .el-input__inner
    width: 200px

</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
