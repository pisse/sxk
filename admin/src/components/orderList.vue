<template>
  <div class="main">
    <div class="filter-box">
      <v-input :formData="filterForm" :opt="user_id"></v-input>
      <br>
      <v-input :formData="filterForm" :opt="phone"></v-input>
      <br>
      <v-input :formData="filterForm" :opt="status"></v-input>
      <br>
      <v-input :formData="filterForm" :opt="orderid"></v-input>
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
            <el-button @click.prevent="onDetail(scope.$index, scope.row)" type="text" size="small">明细</el-button>
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

    <el-dialog :title="modifyType==1 ? '新建签名': '修改签名'" v-model="dialogUserModifyVisible" size="tiny" custom-class="user-dialog" @close="reset('userModify')">
      <el-form :model="userForm" :rules="userRules" ref="userModify"  v-loading="isModifyLoading">
        <el-form-item label="用户ID" label-width="100px" prop="user_id">
          <el-input size="small" v-model="userForm.user_id" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="签名" label-width="100px" prop="sign">
          <el-input size="small" v-model="userForm.sign" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="扩展码" label-width="100px" prop="extno">
          <el-input size="small" v-model="userForm.extno" auto-complete="off"></el-input>
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
import moment from 'moment'

var DataFormat = 'YYYY-MM-DD HH:mm:ss'

import Services from 'common/js/services.js'

export default {
  mixins: [_base, _pagination],
  name: 'front',
  data () {
    return {
      modifyType: '1',
      dialogUserModifyVisible: false,
      isModifyLoading: false,
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
      status: {
        name: '状态',
        key: 'sign',
        placeHolder: '请输入状态'
      },
      orderid: {
        name: '订单号',
        key: 'order_id',
        placeHolder: '请输入订单号'
      },
      filterForm: {
        user_id: '',
        phone: '',
        status: '100',
        order_id: ''
      },
      userForm: {
        user_id: '',
        extno: '',
        sign: '',
        id: ''
      },
      columns: [
        {key: 'id', title: '订单号'},
        {key: 'user_id', title: '用户ID'},
        {key: 'user_name', title: '姓名'},
        {key: 'phone', title: '手机号'},
        // {key: 'card_title', title: '是否是老用户'},
        {key: 'money_amount', title: '借款金额（元）', width: '120', formatter: (row, column) => { return row[column['property']] / 100 }},
        // {key: 'id', title: '借款项目'},
        {key: 'loan_term', title: '借款期限'},
        // {key: 'id', title: '公司名称'},
        // {key: 'id', title: '是否服务费后置'},
        {key: 'sub_order_type_text', title: '申请来源'},
        {key: 'created_at', title: '申请时间', formatter: (row, column) => { return moment(row[column['property']] * 1000).format(DataFormat) }},
        {key: 'plan_fee_time', title: '应还时间', formatter: (row, column) => { return row[column['property']] && moment(row[column['property']] * 1000).format(DataFormat) }},
        {key: 'status_text', title: '状态'}
        // {key: 'id', title: '资方'},
      ],
      userRules: {
        user_id: [
          { required: true, message: '用户账号不能为空', trigger: 'blur' }
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
      this.requestPost(Services.orderList, this.filterForm, (remoteData) => {
        let data = remoteData && remoteData.data.list || []
        this.tableData = data.map((item, idx) => {
          let one = Object.assign({}, item.order_data)
          let user = item.loan_person_data || {}
          one['user_id'] = user['id']
          one['user_name'] = user['name']
          one['phone'] = user['phone']
          one['id_number'] = user['id_number']
          return one
        })
        this.total = parseInt(remoteData.data.total)
      })
    },
    userValidate (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.modifyType == 1) {
            this.AddSign(formName)
          } else {
            this.EditSign(formName)
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
    AddSign (formName) {
      this.requestPost(Services.signAdd, this.userForm, (remoteData) => {
        this.dialogUserModifyVisible = false
        this.$refs[formName].resetFields()
        this.getList()
        this.$message({
          message: '添加成功'
        }, 'isModifyLoading')
      })
    },
    EditSign (formName) {
      let params = {}
      Object.assign(params, this.userForm)
      params['user_id'] = params['id']

      this.requestPost(Services.signModify, params, (remoteData) => {
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
      this.$router.push({ name: 'orderDetail', params: {detail: rowData['id']} })
      /*
      this.requestPost(Services.orderDetail, {order_id: rowData['id']}, (remoteData) => {
        console.log(remoteData)
      })
      */
    },
    onEdit (idx, rowData) {
      this.modifyType = 2
      this.dialogUserModifyVisible = true
      this.$nextTick(() => {
        this.userForm.sign = rowData.sign
        this.userForm.id = rowData.id
        this.userForm.user_id = rowData.user_id
        this.userForm.extno = rowData.extno
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
