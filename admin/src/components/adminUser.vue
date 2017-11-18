<template>
  <div class="main">
    <div class="filter-box">
      <v-input :formData="filterForm" :opt="account"></v-input>
      <br>
      <v-input :formData="filterForm" :opt="user_id"></v-input>
      <br>
      <v-input :formData="filterForm" :opt="phone"></v-input>
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
          :data="tableData"
          stripe
          :row-class-name="tableRowClassName">
        <el-table-column
            prop="id"
            label="用户ID">
        </el-table-column>
        <el-table-column
            prop="username"
            label="用户名">
        </el-table-column>
        <el-table-column
            prop="phone"
            label="电话">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="180px">
          <template slot-scope="scope">
            <!--<el-button @click="onDetail" type="text" size="small">查看</el-button>-->
            <el-button @click.prevent="onEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click.prevent="onDelete(scope.$index, scope.row)" type="text" size="small">删除</el-button>
            <!--<el-button @click.prevent="onEditPermission(scope.$index, scope.row)" type="text" size="small">角色编辑</el-button>-->
            <!--<el-button @click.prevent="onDelete" type="text" size="small">删除</el-button>-->
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

    <el-dialog :title="modifyType==1 ? '新建用户': '修改用户'" :visible.sync="dialogUserModifyVisible" width="40%" custom-class="user-dialog" @close="reset('userModify')">
      <el-form :model="userForm" :rules="userRules" ref="userModify"  v-loading="isModifyLoading">
        <el-form-item label="用户名" label-width="100px" prop="username">
          <el-input size="small" v-model="userForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="100px" prop="password">
          <el-input type="password" size="small" v-model="userForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" label-width="100px" prop="pwd2">
          <el-input type="password" size="small" v-model="userForm.pwd2" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" label-width="100px" prop="phone">
          <el-input v-model="userForm.phone" size="small" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogUserModifyVisible = false">取 消</el-button>
        <el-button type="primary" @click="userValidate('userModify')">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="编辑权限" :visible.sync="dialogPermissionModifyVisible" width="40%" custom-class="modify-dialog" @close="reset('roleModify')">
      <el-form :model="roleForm" :rules="roleRules" ref="roleModify"  v-loading="isModifyLoading">
        <el-form-item label="用户名" label-width="100px" prop="username">
          <el-input size="small" disabled v-model="roleForm.username" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="角色选择" label-width="100px" class="permission-select" prop="role">
          <template v-for="(group, idx) in groups" v-if="roles[idx]">
            <!--<el-checkbox :indeterminate="group.isIndeterminate " v-model="group.checkAll" @change="handleCheckAllChange(group)">{{group.label}}</el-checkbox>-->
            <el-tag type="gray">{{group}}</el-tag>
            <el-checkbox-group v-model="roleForm.role">
              <el-checkbox :label="index"  name="role" v-for="(role, index) in roles[idx]" :key="index">{{role.title}}</el-checkbox>
            </el-checkbox-group>
          </template>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogPermissionModifyVisible = false">取 消</el-button>
        <el-button type="primary" @click="roleValidate('roleModify')">确 定</el-button>
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
  name: 'admin',
  data () {
    var validatePass = (rule, value, callback) => {
      if (this.modifyType == '1' && !value) {
        callback(new Error('请输入密码'))
      } else {
        if (!this.userForm.pwd2) {
          this.$refs.userModify.validateField('pwd2')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      console.log(value)
      if (this.modifyType == '1' && !value) {
        callback(new Error('请输入密码'))
      } else if (value !== this.userForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      modifyType: '1',
      dialogUserModifyVisible: false,
      dialogPermissionModifyVisible: false,
      groups: {},
      roles: {},
      roleForm: {
        username: '',
        user_id: '',
        role: []
      },
      roleRules: {},
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
      filterForm: {
        username: '',
        user_id: '',
        phone: ''
      },
      userForm: {
        user_id: '',
        username: '',
        password: '',
        pwd2: '',
        phone: ''
      },
      userRules: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        pwd2: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '手机号码不能为空', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
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
    getList (page) {
      let params = Object.assign({}, this.filterForm)
      params['page'] = this.currentPage
      this.requestPost(Services.userAdminList, params, (remoteData) => {
        this.tableData = remoteData && remoteData.data.list || []
        this.total = parseInt(remoteData.data.total)
      })
    },
    userValidate (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.modifyType == 1) {
            this.AddUser(formName)
          } else {
            this.EditUser(formName)
          }
        } else {
          return false
        }
      })
    },
    reset (formName) {
      this.$refs[formName].resetFields()
    },
    AddUser (formName) {
      let params = {
        username: this.userForm.username,
        phone: this.userForm.phone,
        password: this.userForm.password || ''
      }
      this.requestPost(Services.userAdminAdd, params, (remoteData) => {
        this.dialogUserModifyVisible = false
        this.$refs[formName].resetFields()
        this.getList()
        this.$message({
          type: 'success',
          message: '添加成功'
        }, 'isModifyLoading')
      })
    },
    EditUser (formName) {
      let params = {
        user_id: this.userForm.id,
        username: this.userForm.username,
        phone: this.userForm.phone,
        password: this.userForm.password || ''
      }
      this.requestPost(Services.userAdminModify, params, (remoteData) => {
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
    onDetail () {},
    onEdit (idx, rowData) {
      this.modifyType = 2
      this.dialogUserModifyVisible = true
      this.$nextTick(() => {
        Object.assign(this.userForm, rowData)
      })
    },
    onDelete (idx, rowData) {
      this.$confirm('确认要删除用户' + rowData.username + '吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.request(Services.userAdminDel, {
          user_id: rowData.id
        }, (remoteData) => {
          this.getList()
          this.$message({
            type: 'success',
            message: '删除成功'
          })
        })
      })
    },
    modifyPermission (formName) {
      let params = {
        user_id: this.roleForm.user_id,
        role: this.roleForm.role.join()
      }
      this.requestPost(Services.userAdminPermissionModify, params, (remoteData) => {
        this.dialogPermissionModifyVisible = false
        // this.getList()
        this.$message({
          type: 'success',
          message: '编辑成功'
        })
      })
    },
    roleValidate (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.modifyPermission(formName)
        } else {
          return false
        }
      })
    },
    onEditPermission (idx, rowData) {
      this.roleForm.username = rowData.username
      this.roleForm.user_id = rowData.id
      this.requestPost(Services.userAdminPermissionGet, {user_id: rowData.id}, (remoteData) => {
        this.dialogPermissionModifyVisible = true
        rowData.user_role = remoteData.data.user_role
        this.roles = remoteData.data.roles
        this.groups = remoteData.data.group_data
        this.roleForm.role = remoteData.data.user_role || []
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
