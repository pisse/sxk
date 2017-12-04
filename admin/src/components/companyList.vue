<template>
  <div class="main">
    <div class="filter-box">
      <v-input :formData="filterForm" :opt="account"></v-input>
      <br>
      <v-input :formData="filterForm" :opt="name"></v-input>
      <div class="btn-right-wrap">
        <el-button size="small" type="primary" @click="search" :loading="isLoading">筛选</el-button>
      </div>
    </div>

    <el-row :gutter="20" class="table-header">
      <el-col :span="2" :offset="20">&nbsp;<!--<el-button size="small"><i class="iconfont icon-download"></i>下载</el-button>--></el-col>
      <el-col :span="2" ><el-button icon="plus" size="small" @click="modifyType=1;dialogUserModifyVisible=true">新建</el-button></el-col>
    </el-row>

    <div class="table-wrap">
      <el-table
          v-loading="isLoading"
          stripe
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName">
        <!--  <el-table-column
                  type="index"
                  width="50">
          </el-table-column>-->
        <el-table-column v-for="(column, idx) in columns" :key="idx"
                         :prop="column.key"
                         :label="column.title"
                         :width="column.width"
                         :formatter="column.formatter"
        >
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="150">
          <template slot-scope="scope">
            <!--<el-button @click="onDetail" type="text" size="small">查看</el-button>-->
            <el-button @click.prevent="onEdit(scope.$index, scope.row)" type="text" size="small">修改</el-button>
            <el-button @click.prevent="onApprove(scope.$index, scope.row)" type="text" size="small">{{ scope.row.status == '1' ? '解除':'通过' }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

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

    <el-dialog :title="modifyType==1 ? '新建公司': '修改公司'" :visible.sync="dialogUserModifyVisible" width="40%" custom-class="user-dialog" @close="reset('userModify')">
      <el-form :model="form" :rules="formRules" ref="userModify"  v-loading="isModifyLoading">
        <el-form-item label="公司代码" label-width="100px" prop="company_code">
          <el-input size="small" v-model="form.company_code" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司名称" label-width="100px" prop="company_name">
          <el-input size="small" v-model="form.company_name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" label-width="100px" prop="company_tel">
          <el-input size="small" v-model="form.company_tel" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司地址" label-width="100px" prop="company_address">
          <el-input size="small" v-model="form.company_address" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogUserModifyVisible = false">取 消</el-button>
        <el-button type="primary" @click="formValidate('userModify')">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import vInput from './filters/vInput'
import _base from '../mixin/base.js'
import _pagination from '../mixin/pagination.js'

import Services from 'common/js/services.js'

export default {
  mixins: [_base, _pagination],
  name: 'front',
  data () {
    return {
      modifyType: '1',
      dialogUserModifyVisible: false,
      isModifyLoading: false,
      account: {
        name: '公司代码',
        key: 'company_code',
        placeHolder: '请输入代码'
      },
      name: {
        name: '公司名称',
        key: 'company_name',
        placeHolder: '请输入用户ID'
      },
      filterForm: {
        company_code: '',
        company_name: '',
        company_tel: '',
        company_address: '',
        status: '100'
      },
      form: {
        id: '',
        company_code: '',
        company_name: '',
        company_tel: '',
        company_address: ''
      },
      formRules: {
        company_code: [
          { required: true, message: '公司代码不能为空', trigger: 'blur' }
        ],
        company_name: [
          { required: true, message: '公司名称不能为空', trigger: 'blur' }
        ],
        company_tel: [
          { required: true, message: '公司联系电话不能为空', trigger: 'blur' }
        ],
        company_address: [
          { required: true, message: '公司地址不能为空', trigger: 'blur' }
        ]
      },
      columns: [
        {key: 'company_name', title: '公司名称'},
        {key: 'company_code', title: '公司代码'},
        {key: 'company_tel', title: '联系电话'},
        {key: 'company_address', title: '公司地址'}
      ],
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
      this.requestPost(Services.companyList, this.filterForm, (remoteData) => {
        this.tableData = remoteData && remoteData.data.list || []
        this.total = parseInt(remoteData.data.total)
      })
    },
    formValidate (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.modifyType == 1) {
            this.AddNew(formName)
          } else {
            this.EditItem(formName)
          }
        } else {
          return false
        }
      })
    },
    reset (formName) {
      console.log('reset')
      this.$refs[formName].resetFields()
    },
    AddNew (formName) {
      this.requestPost(Services.companyAdd, this.form, (remoteData) => {
        this.dialogUserModifyVisible = false
        this.$refs[formName].resetFields()
        this.getList()
        this.$message({
          message: '添加成功'
        }, 'isModifyLoading')
      })
    },
    EditItem (formName) {
      let params = {}
      Object.assign(params, this.form)
      // params['id'] = params['id']

      this.requestPost(Services.companyModify, params, (remoteData) => {
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
    onEdit (idx, rowData) {
      this.modifyType = 2
      this.dialogUserModifyVisible = true
      this.$nextTick(() => {
        this.form.id = rowData.id
        this.form.company_name = rowData.company_name
        this.form.company_tel = rowData.company_tel
        this.form.company_code = rowData.company_code
        this.form.company_address = rowData.company_address
      })
    },
    onApprove (idx, rowData) {
      if (rowData['status'] == 3) {
        return
      }
      let text = rowData['status'] == 1 ? '确认要解除此公司吗？' : '确认要通过此公司吗？'
      let status = rowData['status'] == 1 ? '0' : '1'
      this.$confirm(text, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.requestPost(Services.companyOperate, {
          id: rowData.id,
          status: status
        }, (remoteData) => {
          this.getList()
          this.$message({
            message: '操作成功'
          })
        })
      })
    },
    onDelete (idx, rowData) {
      this.$confirm('确认要删除此签名吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.requestPost(Services.signDel, {
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
