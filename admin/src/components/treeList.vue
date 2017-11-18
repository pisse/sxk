<template>
  <div class="main">
    <div class="filter-box">
      <v-input :formData="filterForm" :opt="account"></v-input>
      <br>
      <v-input :formData="filterForm" :opt="user_id"></v-input>
      <br>
      <v-input :formData="filterForm" :opt="phone"></v-input>
      <br>
      <v-input :formData="filterForm" :opt="sign"></v-input>
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
        <el-table-column
            prop="id"
            label="ID">
        </el-table-column>
        <el-table-column
            prop="name"
            label="名称">
        </el-table-column>

        <el-table-column
            prop="tree_root"
            label="是否决策树">
        </el-table-column>
        <el-table-column
            prop="expression"
            label="表达式">
        </el-table-column>
        <el-table-column
            prop="type"
            label="特征类型">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="150">
          <template slot-scope="scope">
            <el-button @click="onDelete" type="text" size="small">删除</el-button>
            <el-button @click.prevent="onEdit(scope.$index, scope.row)" type="text" size="small">修改</el-button>
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

    <el-dialog :title="modifyType==1 ? '新建特征': '修改特征'" :visible.sync="dialogUserModifyVisible" width="40%" custom-class="user-dialog" @close="reset('userModify')">
      <el-form :model="userForm" :rules="userRules" ref="userModify"  v-loading="isModifyLoading">
        <el-form-item label="名称" label-width="100px" prop="name">
          <el-input size="small" v-model="userForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="方法名称" label-width="100px" prop="url">
          <el-input size="small" v-model="userForm.url" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="默认值" label-width="100px" prop="result">
          <el-input size="small" v-model="userForm.result" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="类型" label-width="100px" prop="type">
          <el-radio-group v-model="userForm.type">
            <el-radio label="0">基础</el-radio>
            <el-radio label="1">扩展</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="扩展类型" label-width="100px" prop="extend_type">
          <el-radio-group v-model="userForm.extend_type">
            <el-radio label="0">表达式</el-radio>
            <el-radio label="1">映射</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否是决策树" label-width="100px" prop="tree_root">
          <el-switch on-text="" off-text="" v-model="userForm.tree_root"></el-switch>
        </el-form-item>
        <el-form-item label="表达式" label-width="100px" prop="expression">
          <el-input size="small" v-model="userForm.expression" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogUserModifyVisible = false">取 消</el-button>
        <el-button type="primary" @click="userValidate('userModify')">确 定</el-button>
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
        name: '用户名',
        key: 'username',
        placeHolder: '请输入账号'
      },
      user_id: {
        name: '用户ID',
        key: 'user_id',
        placeHolder: '请输入用户ID'
      },
      phone: {
        name: '手机号',
        key: 'phone',
        placeHolder: '请输入手机号'
      },
      sign: {
        name: '签名',
        key: 'sign',
        placeHolder: '请输入签名'
      },
      filterForm: {
        username: '',
        user_id: '',
        phone: '',
        sign: ''
      },
      userForm: {
        rule_id: '',
        name: '',
        url: '',
        result: '',
        type: '0',
        extend_type: '1',
        tree_root: '',
        expression: ''
      },
      userRules: {
        name: [
          { required: true, message: '名称不能为空', trigger: 'blur' }
        ],
        url: [
          { required: true, message: '方法名称不能为空', trigger: 'blur' }
        ]
      },
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
      this.requestPost(Services.treeList, this.filterForm, (remoteData) => {
        this.tableData = remoteData && remoteData.data.list || []
        this.total = parseInt(remoteData.data.total)
      })
    },
    userValidate (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.modifyType == 1) {
            this.AddRule(formName)
          } else {
            this.EditRule(formName)
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
    AddRule (formName) {
      let params = {}
      Object.assign(params, this.userForm)
      params['tree_root'] = params['tree_root'] + 0
      this.requestPost(Services.treeAdd, params, (remoteData) => {
        this.dialogUserModifyVisible = false
        this.$refs[formName].resetFields()
        this.getList()
        this.$message({
          message: '添加成功'
        }, 'isModifyLoading')
      })
    },
    EditRule (formName) {
      let params = {}
      Object.assign(params, this.userForm)
      params['tree_root'] = params['tree_root'] + 0

      this.requestPost(Services.treeModify, params, (remoteData) => {
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
    onDetail (idx, rowData) {
      this.requestPost(Services.orderDetail, {order_id: rowData['id']}, (remoteData) => {
        console.log(remoteData)
      })
    },
    onEdit (idx, rowData) {
      this.modifyType = 2
      this.dialogUserModifyVisible = true
      this.$nextTick(() => {
        this.userForm.rule_id = rowData.id
        this.userForm.name = rowData.name
        this.userForm.url = rowData.url
        this.userForm.extend_type = rowData.extend_type
        this.userForm.type = rowData.type
        this.userForm.expression = rowData.expression
        this.userForm.tree_root = !!rowData.tree_root
      })
    },
    onDelete (idx, rowData) {
      this.$confirm('确认要删除此决策树吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.requestPost(Services.treeDelete, {
          rule_id: rowData.id
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
