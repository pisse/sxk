<template>
  <div class="main">
    <div class="filter-box">
      <v-input :formData="filterForm" :opt="prefix"></v-input>
      <br>
      <v-input :formData="filterForm" :opt="province"></v-input>
      <br>
      <v-input :formData="filterForm" :opt="isp"></v-input>
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

    <!--  <el-table-column
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
          <el-button @click.prevent="onEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
          <!--<el-button @click.prevent="onDelete" type="text" size="small">删除</el-button>-->
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

    <el-dialog :title="modifyType==1 ? '新建运营商': '修改运营商'" v-model="dialogModifyVisible" size="small" custom-class="modify-dialog" @close="reset('userModify')">
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
  mixins: [_base, _pagination, _upload],
  name: 'errSms',
  data () {
    return {
      modifyType: '1',
      dialogModifyVisible: false,
      isModifyLoading: false,
      uploadName: '运营商导入',
      uploadUrl: Services.operatorUpload,
      prefix: {
        name: '前缀',
        key: 'prefix',
        placeHolder: '请输入前缀'
      },
      province: {
        name: '省份',
        key: 'province',
        placeHolder: '请输入省份'
      },
      isp: {
        name: '提供商',
        key: 'isp',
        placeHolder: '请输入提供商'
      },
      filterForm: {
        prefix: '',
        province: '',
        isp: ''
      },
      form: {
        id: '',
        prefix: '',
        phone: '',
        province: '',
        city: '',
        isp: '',
        post_code: '',
        city_code: '',
        area_code: '',
        types: ''
      },
      formRules: {
        prefix: [
          { required: true, message: '前缀不能为空', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '手机号不能为空', trigger: 'blur' }
        ],
        province: [
          { required: true, message: '省份不能为空', trigger: 'blur' }
        ],
        city: [
          { required: true, message: '城市不能为空', trigger: 'blur' }
        ],
        isp: [
          { required: true, message: '提供商不能为空', trigger: 'blur' }
        ],
        post_code: [
          { required: true, message: '邮编不能为空', trigger: 'blur' }
        ]
      },
      columns: [{key: 'id', title: 'ID', isAdd: false}, {key: 'prefix', title: '前缀'}, {key: 'province', title: '省份'},
        {key: 'phone', title: '手机号'}, {key: 'city', title: '城市'}, {key: 'isp', title: '提供商'},
        {key: 'post_code', title: '邮编'}, {key: 'city_code', title: '城市编码'}, {key: 'area_code', title: '区域编码'},
        {key: 'types', title: '网络类型'}, {key: 'operator_name', title: '更新人', isAdd: false}, {key: 'status', title: '状态', isAdd: false},
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
      this.requestPost(Services.operatorList, params, (remoteData) => {
        this.tableData = remoteData && remoteData.data.list || []
        this.pageSize = remoteData.page_size
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
      this.requestPost(Services.operatorAdd, this.form, (remoteData) => {
        this.dialogModifyVisible = false
        this.$refs[formName].resetFields()
        this.getList()
        this.$message({
          message: '添加成功'
        }, 'isModifyLoading')
      })
    },
    EditOperator (formName) {
      let params = {}
      Object.assign(params, this.form)

      this.requestPost(Services.operatorModify, params, (remoteData) => {
        this.dialogModifyVisible = false
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
      location.href = 'http://sms.q1069.com/file/template/mobile_operator.csv'
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
