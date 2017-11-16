<template>
  <div class="main">
    <!--<div class="filter-box">
      <v-input :formData="filterForm" :opt="title"></v-input>
      <br>
      <v-input :formData="filterForm" :opt="name"></v-input>
      <div class="btn-right-wrap">
        <el-button size="small" type="primary" @click="search" :loading="isLoading">筛选</el-button>
      </div>
    </div>-->

    <el-row :gutter="18" class="table-header">
      <el-col :span="2" :offset="20">&nbsp;<!--<el-button size="small"><i class="iconfont icon-download"></i>下载</el-button>--></el-col>
      <!--<el-col :span="2" ><el-button icon="upload2"  size="small" @click="dialogUploadVisible=true">导入</el-button></el-col>-->
      <el-col :span="2" ><el-button icon="plus" size="small" @click="modifyType=1;dialogModifyVisible=true">新建</el-button></el-col>
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
      <!--<el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next, jumper"
          :total="total">
      </el-pagination>-->
    </div>

    <el-dialog :title="modifyType==1 ? '新建角色': '编辑角色'" v-model="dialogModifyVisible" size="small" custom-class="modify-dialog" @close="reset('roleModify')">
      <el-form :model="roleForm" :rules="roleRules" ref="roleModify"  v-loading="isModifyLoading">
        <el-form-item label="名称" label-width="100px" prop="title">
          <el-input size="small" v-model="roleForm.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="标识" label-width="100px" prop="name">
          <el-input size="small" v-model="roleForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" label-width="100px" prop="desc">
          <el-input size="small" v-model="roleForm.desc" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="权限组" prop="group" label-width="100px">
          <el-select v-model="roleForm.group" placeholder="请选择权限组">
            <el-option :label="item" :value="idx" v-for="(item, idx) in permissionGroup" :key="idx"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="权限选择" label-width="100px" class="permission-select" prop="permissions">
          <template v-for="(group, idx) in permissionsList">
            <!--<el-checkbox :indeterminate="group.isIndeterminate " v-model="group.checkAll" @change="handleCheckAllChange(group)">{{group.label}}</el-checkbox>-->
            <el-tag type="gray">{{group.label}}</el-tag>
            <el-checkbox-group v-model="roleForm.permissions">
              <el-checkbox :label="permission.route"  name="permissions" v-for="(permission, index) in group.actions" :key="index">{{permission.title}}</el-checkbox>
            </el-checkbox-group>
          </template>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogModifyVisible = false">取 消</el-button>
        <el-button type="primary" @click="roleValidate('roleModify')">确 定</el-button>
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
        title: {
          name: '角色名',
          key: 'title',
          placeHolder: '请输入角色名'
        },
        name: {
          name: '标识',
          key: 'name',
          placeHolder: '请输入标识名'
        },
        filterForm: {
          code: '',
          code_message: ''
        },
        permissionsList: {},
        permissionGroup: {},
        roleForm: {
          permissions: [],
          name: '',
          title: '',
          desc: '',
          group: ''
        },
        roleRules: {
          name: [
            { required: true, message: '标识名不能为空', trigger: 'blur' }
          ],
          title: [
            { required: true, message: '角色名不能为空', trigger: 'blur' }
          ],
          group: [
            { required: true, message: '请选择权限组', trigger: 'change' }
          ],
          permissions: [
            { type: 'array', required: true, message: '请至少选择一种权限', trigger: 'change' }
          ]
        },
        columns: [{key: 'id', title: 'ID'}, {key: 'name', title: '标识'}, {key: 'title', title: '名称'},
          {key: 'desc', title: '描述'},
          {key: 'created_user', title: '创建人', width: '180px'}, {key: 'created_at', title: '创建时间', width: '180px'}],
        tableData: []
      }
    },
    created () {
      this.getList()
      this.getAllPermissions()
    },
    methods: {
      search () {
        this.getList()
      },
      getAllPermissions () {
        this.requestPost(Services.permissionList, this.filterForm, (remoteData) => {
          this.permissionGroup = remoteData.data.groups
          this.permissionsList = remoteData.data.permissions || {}
        })
      },
      handleCheckAllChange (group) {},
      getList () {
        this.requestPost(Services.roleList, {}, (remoteData) => {
          this.tableData = remoteData && remoteData.data || []
          // this.pageSize = remoteData.page_size
          this.total = parseInt(remoteData.data.total)
        })
      },
      roleValidate (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.modifyType == 1) {
              this.AddRole(formName)
            } else {
              this.EditRole(formName)
            }
          } else {
            return false
          }
        })
      },
      reset (formName) {
        console.log(formName)
        this.$refs[formName].resetFields()
      },
      AddRole (formName) {
        let params = {
          // permissions: JSON.stringify(this.roleForm.permissions),
          permissions: this.roleForm.permissions,
          name: this.roleForm.name,
          title: this.roleForm.title,
          desc: this.roleForm.desc,
          groups: this.roleForm.group
        }
        this.requestPost(Services.roleAdd, params, (remoteData) => {
          this.dialogModifyVisible = false
          this.$refs[formName].resetFields()
          this.getList()
          this.$message({
            type: 'success',
            message: '添加成功'
          }, 'isModifyLoading')
        })
      },
      EditRole (formName) {
        let params = {}
        Object.assign(params, this.roleForm)
        // params['permissions'] = JSON.stringify(params['permissions'])

        this.requestPost(Services.roleModify, params, (remoteData) => {
          this.dialogModifyVisible = false
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
      onEdit (idx, rowData) {
        this.modifyType = 2
        this.requestPost(Services.permissionList, {role_id: rowData.id}, (remoteData) => {
          this.dialogModifyVisible = true
          this.$nextTick(() => {
            Object.assign(this.roleForm, rowData)
            this.roleForm.permissions = typeof remoteData.data.permissionChecks == 'string' ? JSON.parse(remoteData.data.permissionChecks) : (remoteData.data.permissionChecks || [])
            this.roleForm.group = remoteData.data.choose_role.groups + ''
          })
        })
      },
      onDelete (dx, rowData) {
        this.$confirm('确认要删除角色' + rowData.title + '吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.requestPost(Services.roleDel, {
            role_id: rowData.id
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
  .modify-dialog
    .el-input__inner
      width: 200px
    .el-checkbox-group
      border-bottom : 1px solid rgb(242,242,242)
      margin-bottom: 10px;
      .el-checkbox+.el-checkbox
        margin-left : 0px
      .el-checkbox
        margin-right : 15px
    .permission-select
      position : relative
      .el-form-item__content
        position : static
        max-height : 200px
        overflow : auto
      .el-form-item__error
        left: 100px
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
