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
      <el-col :span="2" ><!--<el-button icon="plus" size="small" @click="modifyType=1;dialogUserModifyVisible=true">新建</el-button>--></el-col>
    </el-row>

    <div class="table-wrap">
      <el-table
            v-loading="isLoading"
            :data="tableData"
            style="width: 100%"
            :row-class-name="tableRowClassName">
      <!--<el-table-column
              label="序号"
              type="index"
              width="80px">
      </el-table-column>
-->
      <el-table-column v-for="(column, idx) in columns" :key="idx"
                       :prop="column.key"
                       :label="column.title"
                       :width="column.width"
      >
      </el-table-column>

      <el-table-column
              fixed="right"
              label="操作"
              width="300">
        <template slot-scope="scope">
          <!--<el-button @click.prevent="onresetPwd(3,scope.$index, scope.row)" type="text" size="small">修改登录密码</el-button>-->
          <!--<el-button @click.prevent="onresetPwd(4,scope.$index, scope.row)" type="text" size="small">修改发送密码</el-button>-->
          <!--<el-button @click.prevent="onMassSet(scope.$index, scope.row)" type="text" size="small">群发显示设置</el-button>
          <el-button @click.prevent="onStatisticSet(scope.$index, scope.row)" type="text" size="small">按发送状态统计账单</el-button>-->
          <!--<el-button @click.prevent="onEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click.prevent="onDelete(scope.$index, scope.row)" type="text" size="small">删除</el-button>-->
          <el-button @click.prevent="onShowDetail(scope.$index, scope.row)" type="text" size="small">详细</el-button>
          <el-button @click.prevent="onShowLoanLimit(scope.$index, scope.row)" type="text" size="small">额度</el-button>
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

    <el-dialog :title="modifyType==1 ? '新建用户': modifyType==2 ? '修改用户' : modifyType==3 ? '修改登录密码': modifyType==4 ? '修改发送密码': modifyType==5 ? '群发菜单显示设置' : '按发送状态统计账单'"
               :visible.sync="dialogUserModifyVisible" width="40%" custom-class="user-dialog" @close="reset('userModify')">
      <el-form :model="userForm" :rules="userRules" ref="userModify"  v-loading="isModifyLoading">

        <template v-if="modifyType==3">
          <el-form-item label="原登录密码" label-width="120px" prop="old_pwd">
            <el-input type="password" size="small" v-model="userForm.old_pwd" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="新登录密码" label-width="120px" prop="password">
            <el-input type="password" size="small" v-model="userForm.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认登录密码" label-width="120px" prop="pwd2">
            <el-input type="password" size="small" v-model="userForm.pwd2" auto-complete="off"></el-input>
          </el-form-item>
        </template>

        <template v-else-if="modifyType==4">
          <el-form-item label="原发送密码" label-width="120px" prop="old_pwd">
            <el-input type="password" size="small" v-model="userForm.old_pwd" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="新发送密码" label-width="120px" prop="password">
            <el-input type="password" size="small" v-model="userForm.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认发送密码" label-width="120px" prop="pwd2">
            <el-input type="password" size="small" v-model="userForm.pwd2" auto-complete="off"></el-input>
          </el-form-item>
        </template>

        <template v-else-if="modifyType==5">
          <el-form-item label="是否显示群发菜单" :label-width="label_width" prop="is_send_mass">
            <el-switch on-text="" off-text="" v-model="userForm.is_send_mass"></el-switch>
          </el-form-item>
        </template>

        <template v-else-if="modifyType==6">
          <el-form-item label="是否按发送状态统计账单" :label-width="label_width" prop="show_msg_statist">
            <el-switch on-text="" off-text="" v-model="userForm.show_msg_statist"></el-switch>
          </el-form-item>
        </template>

        <template v-else-if="modifyType==1">
          <el-form-item label="用户ID" :label-width="label_width" prop="user_id">
            <el-input size="small" v-model="userForm.user_id" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户名" :label-width="label_width" prop="username">
            <el-input size="small" v-model="userForm.username" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="主账号ID" :label-width="label_width" prop="parent_id">
            <el-input size="small" v-model="userForm.parent_id" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="SP_ID" :label-width="label_width" prop="sp_id">
            <el-input size="small" v-model="userForm.sp_id" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号" :label-width="label_width" prop="phone">
            <el-input v-model="userForm.phone" size="small" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="关联手机号" :label-width="label_width" prop="relation_phone">
            <el-input v-model="userForm.relation_phone" size="small" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="发送密码" :label-width="label_width" prop="password">
            <el-input type="password" size="small" v-model="userForm.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认发送密码" :label-width="label_width" prop="pwd2">
            <el-input type="password" size="small" v-model="userForm.pwd2" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="是否需要验证码登录" :label-width="label_width" prop="is_captcha">
            <el-switch on-text="" off-text="" v-model="userForm.is_captcha"></el-switch>
          </el-form-item>
        </template>

        <template v-else-if="modifyType==2">
          <el-form-item label="用户ID" :label-width="label_width" prop="user_id">
            <el-input size="small" v-model="userForm.user_id" auto-complete="off" disabled></el-input>
          </el-form-item>
          <el-form-item label="用户名" :label-width="label_width" prop="username">
            <el-input size="small" v-model="userForm.username" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="主账号ID" :label-width="label_width"prop="parent_id">
            <el-input size="small" v-model="userForm.parent_id" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号" :label-width="label_width" prop="phone">
            <el-input v-model="userForm.phone" size="small" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="关联手机号" :label-width="label_width" prop="relation_phone">
            <el-input v-model="userForm.relation_phone" size="small" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="是否需要验证码登录" :label-width="label_width" prop="is_captcha">
            <el-switch on-text="" off-text="" v-model="userForm.is_captcha"></el-switch>
          </el-form-item>
        <!--  <el-form-item label="发送密码" label-width="100px" prop="password">
            <el-input type="password" size="small" v-model="userForm.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认发送密码" label-width="100px" prop="pwd2">
            <el-input type="password" size="small" v-model="userForm.pwd2" auto-complete="off"></el-input>
          </el-form-item>-->
        </template>

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
    var validatePass = (rule, value, callback) => {
      if (this.modifyType == '2') {
        callback()
        return
      }
      // 新建需要输入密码， 修改可以为空
      if (this.modifyType == '1' && !value) {
        callback(new Error('请输入密码'))
      } else if (this.modifyType === '3' && value !== '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.userForm.pwd2 !== '') {
          this.$refs.userModify.validateField('pwd2')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (this.modifyType == '2') {
        callback()
        return
      }
      if (this.modifyType === '1' && !value) {
        callback(new Error('请再次输入密码'))
      } else if (this.modifyType === '3' && value !== '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.userForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
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
      parent_id: {
        name: '主账号ID',
        key: 'parent_id',
        placeHolder: '请输入主账号ID'
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
      label_width: '150px',
      userForm: {
        is_captcha: false,
        is_send_mass: 0,
        show_msg_statist: 0,
        user_id: '',
        parent_id: '',
        sp_id: '',
        username: '',
        old_pwd: '',
        password: '',
        pwd2: '',
        phone: '',
        relation_phone: ''
      },
      userRules: {
        old_pwd: [
          { required: true, message: '原密码不能为空', trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        pwd2: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '手机号码不能为空', trigger: 'blur' }
        ],
        sp_id: [
          { required: true, message: 'SP_ID不能为空', trigger: 'blur' }
        ],
        user_id: [
          { required: true, message: '用户ID不能为空', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ]
      },
      columns: [{key: 'id', title: '用户ID', isAdd: false}, {key: 'username', title: '用户名'}, {key: 'phone', title: '电话'},
        {key: 'name', title: '姓名'}],
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
      this.requestPost(Services.userFrontList, this.filterForm, (remoteData) => {
        this.tableData = remoteData && remoteData.data.list || []
        // this.pageSize = remoteData.page_size
        this.total = parseInt(remoteData.data.total)
      })
    },
    userValidate (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.modifyType == 1) {
            this.AddUser(formName)
          } else if (this.modifyType == 2) {
            this.EditUser(formName)
          } else if (this.modifyType == 5) {
            this.ResetMass(formName)
          } else if (this.modifyType == 6) {
            this.setStatisticType(formName)
          } else {
            this.resetPwd(formName)
          }
        } else {
          return false
        }
      })
    },
    reset (formName) {
      // console.log('reset')
      this.$refs[formName].resetFields()
    },
    AddUser (formName) {
      let params = {
        id: this.userForm['user_id'],
        parent_id: this.userForm['parent_id'],
        sp_id: this.userForm['sp_id'],
        username: this.userForm['username'],
        send_password: this.userForm['password'],
        phone: this.userForm['phone'],
        relation_phone: this.userForm['relation_phone'],
        is_captcha: this.userForm['is_captcha'] ? 1 : 0
      }
      this.requestPost(Services.userFrontAdd, params, (remoteData) => {
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
        user_id: this.userForm['user_id'],
        phone: this.userForm['phone'],
        relation_phone: this.userForm['relation_phone'],
        sp_id: this.userForm['sp_id'],
        username: this.userForm['username'],
        parent_id: this.userForm['parent_id'],
        is_captcha: this.userForm['is_captcha'] ? 1 : 0
      }
      this.requestPost(Services.userFrontModify, params, (remoteData) => {
        this.dialogUserModifyVisible = false
        this.$refs[formName].resetFields()
        this.getList()
        this.$message({
          type: 'success',
          message: '修改成功'
        })
      }, 'isModifyLoading')
    },
    resetPwd (formName) {
      let params = {
        user_id: this.userForm['user_id'],
        old_pwd: this.userForm['old_pwd'],
        new_pwd: this.userForm['password']
      }
      let url = this.modifyType == 3 ? Services.userFrontPwd : Services.userFrontSendPwd
      this.requestPost(url, params, (remoteData) => {
        this.dialogUserModifyVisible = false
        this.$refs[formName].resetFields()
        this.getList()
        this.$message({
          type: 'success',
          message: '修改成功'
        })
      }, 'isModifyLoading')
    },
    tableRowClassName (row, index) {
      return ''
    },
    onShowDetail (idx, rowData) {
      this.requestPost(Services.userDetail, {user_id: rowData['id']}, (remoteData) => {
        console.log(remoteData)
      })
    },
    onShowLoanLimit (idx, rowData) {
      this.requestPost(Services.userLoanLimit, {user_id: rowData['id']}, (remoteData) => {
        console.log(remoteData)
      })
    },
    ResetMass (formName) {
      let params = {
        user_id: this.userForm['user_id'],
        is_send_mass: !this.userForm['is_send_mass'] + 0
      }
      this.requestPost(Services.userSendMass, params, (remoteData) => {
        this.dialogUserModifyVisible = false
        this.$refs[formName].resetFields()
        this.getList()
        this.$message({
          type: 'success',
          message: '修改成功'
        })
      }, 'isModifyLoading')
    },
    setStatisticType (formName) {
      let params = {
        user_id: this.userForm['user_id'],
        show_msg_statist: this.userForm['show_msg_statist'] + 0
      }
      this.requestPost(Services.userStatisticType, params, (remoteData) => {
        this.dialogUserModifyVisible = false
        this.$refs[formName].resetFields()
        this.getList()
        this.$message({
          type: 'success',
          message: '修改成功'
        })
      }, 'isModifyLoading')
    },
    onMassSet (idx, rowData) {
      this.modifyType = 5
      this.dialogUserModifyVisible = true
      this.$nextTick(() => {
        Object.assign(this.userForm, rowData)
        this.userForm['user_id'] = rowData['id']
        this.userForm['is_send_mass'] = rowData['is_send_mass'] == '0'
      })
    },
    onStatisticSet (idx, rowData) {
      this.modifyType = 6
      this.dialogUserModifyVisible = true
      this.$nextTick(() => {
        Object.assign(this.userForm, rowData)
        this.userForm['user_id'] = rowData['id']
        this.userForm['show_msg_statist'] = rowData['show_msg_statist'] == '1'
      })
    },
    onEdit (idx, rowData) {
      this.modifyType = 2
      this.dialogUserModifyVisible = true
      this.$nextTick(() => {
        Object.assign(this.userForm, rowData)
        this.userForm['user_id'] = rowData['id']
        this.userForm['is_captcha'] = rowData['is_captcha'] == '需要'
      })
    },
    onresetPwd (type, idx, rowData) {
      this.modifyType = type
      this.dialogUserModifyVisible = true
      this.$nextTick(() => {
        this.userForm['user_id'] = rowData['id']
      })
    },
    onDelete (idx, rowData) {
      this.$confirm('确认要删除用户' + rowData.username + '吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.request(Services.userFrontDel, {
          user_id: rowData.id
        }, (remoteData) => {
          this.getList()
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
.user-dialog
  .el-input__inner
    width: 200px

</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
