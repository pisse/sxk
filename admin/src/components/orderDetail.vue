<template>
  <div class="main order-detail">
    <div class="filter-box">
      <v-input :formData="filterForm" :opt="orderid"></v-input>
      <div class="btn-right-wrap">
        <el-button size="small" type="primary" @click="search" :loading="isLoading">筛选</el-button>
      </div>
    </div>


    <el-container direction="vertical" class="loan-detail">
      <el-header>借款详情页</el-header>
      <el-container>
        <el-aside width="100px">借款详情</el-aside>
        <el-container>
          <el-main>
            <el-row>
              <el-col :span="5"><div class="grid-content grid-title">用户ID：</div></el-col>
              <el-col :span="7"><div class="grid-content">{{orderData.user_id}}</div></el-col>
              <el-col :span="5"><div class="grid-content grid-title">订单号：</div></el-col>
              <el-col :span="7"><div class="grid-content">{{orderData.id}}</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="5"><div class="grid-content grid-title">借款金额：</div></el-col>
              <el-col :span="7"><div class="grid-content">{{orderData.money_amount/100}}</div></el-col>
              <el-col :span="5"><div class="grid-content grid-title">应还款日：</div></el-col>
              <el-col :span="7"><div class="grid-content">{{orderData.plan_fee_time}} </div></el-col>
            </el-row>
            <el-row>
              <el-col :span="5"><div class="grid-content grid-title">申请时间：</div></el-col>
              <el-col :span="7"><div class="grid-content">{{orderData.created_at * 1000 | toDate }}</div></el-col>
              <el-col :span="5"><div class="grid-content grid-title">借款利息：</div></el-col>
              <el-col :span="7"><div class="grid-content">{{orderData.plan_fee_time}}</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="5"><div class="grid-content grid-title">应还时间：</div></el-col>
              <el-col :span="7"><div class="grid-content">{{currentRepay.plan_repayment_time * 1000 | toDate}}</div></el-col>
              <el-col :span="5"><div class="grid-content grid-title">逾期开始时间：</div></el-col>
              <el-col :span="7"><div class="grid-content">{{currentRepay.plan_fee_time * 1000 | toDate}}</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="5"><div class="grid-content grid-title">实际还款时间：</div></el-col>
              <el-col :span="7"><div class="grid-content">{{currentRepay.true_repayment_time * 1000 | toDate }}</div></el-col>
              <el-col :span="5"><div class="grid-content grid-title">实际还款金额：</div></el-col>
              <el-col :span="7"><div class="grid-content">{{currentRepay.true_total_money / 100}}</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="5"><div class="grid-content grid-title">服务费：</div></el-col>
              <el-col :span="7"><div class="grid-content">{{orderData.counter_fee/100 }}</div></el-col>
              <el-col :span="5"><div class="grid-content grid-title">逾期天数：</div></el-col>
              <el-col :span="7"><div class="grid-content">{{orderData.overdue_day}}</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="5"><div class="grid-content grid-title">借款时间：</div></el-col>
              <el-col :span="7"><div class="grid-content">{{orderData.loan_time * 1000 | toDate }}</div></el-col>
              <el-col :span="5"><div class="grid-content grid-title">借款期限：</div></el-col>
              <el-col :span="7"><div class="grid-content">{{orderData.loan_term}}</div></el-col>
            </el-row>
          </el-main>
        </el-container>
      </el-container>

    </el-container>

    <br>

    <el-container direction="vertical" class="loan-detail">
      <el-header>个人信息详情页</el-header>
      <el-container>
        <el-aside width="100px">个人详情</el-aside>
        <el-container>
          <el-main>
            <el-row>
              <el-col :span="2"><div class="grid-content grid-title">用户ID：</div></el-col>
              <el-col :span="3"><div class="grid-content">{{userInfo.id}}</div></el-col>
              <el-col :span="2"><div class="grid-content grid-title ">姓名：</div></el-col>
              <el-col :span="4"><div class="grid-content">{{userInfo.name}}</div></el-col>

              <el-col :span="2"><div class="grid-content grid-title">身份证号：</div></el-col>
              <el-col :span="4"><div class="grid-content">{{userInfo.id_number}}</div></el-col>
              <el-col :span="3"><div class="grid-content grid-title">联系方式：</div></el-col>
              <el-col :span="4"><div class="grid-content">{{userInfo.phone}}</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="2"><div class="grid-content grid-title">出生日期：</div></el-col>
              <el-col :span="3"><div class="grid-content">{{userInfo.birthday}}</div></el-col>
              <el-col :span="2"><div class="grid-content grid-title">性别：</div></el-col>
              <el-col :span="4"><div class="grid-content">{{userInfo.sex}}</div></el-col>

              <el-col :span="2"><div class="grid-content grid-title">年龄：</div></el-col>
              <el-col :span="4"><div class="grid-content">{{userInfo.age}}</div></el-col>
              <el-col :span="3"><div class="grid-content grid-title">身份证地址：</div></el-col>
              <el-col :span="4"><div class="grid-content">{{userInfo.addr}}</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="2"><div class="grid-content grid-title">学历：</div></el-col>
              <el-col :span="3"><div class="grid-content">{{userInfo.edu}}</div></el-col>
              <el-col :span="2"><div class="grid-content grid-title">婚姻：</div></el-col>
              <el-col :span="4"><div class="grid-content">{{userInfo.marriage}}</div></el-col>

              <el-col :span="2"><div class="grid-content grid-title">常用地址：</div></el-col>
              <el-col :span="4"><div class="grid-content">{{userInfo.addr}}</div></el-col>
              <el-col :span="3"><div class="grid-content grid-title">账号申请时间：</div></el-col>
              <el-col :span="4"><div class="grid-content">{{userInfo.time}}</div></el-col>
            </el-row>
            <el-row class="picture">
              <el-col :span="2"><div class="grid-content grid-title">身份证：</div></el-col>
              <el-col :span="22"><div class="grid-content">
                <img :src="item.url" alt="" v-for="(item, idx) in pictures" :key="idx">
              </div></el-col>
            </el-row>
          </el-main>
        </el-container>
      </el-container>

    </el-container>

    <br>

    <el-container direction="vertical" class="history-detail">
      <el-header>历史借款信息</el-header>
          <el-main>
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

          </el-main>
    </el-container>


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

var DataFormat = 'YYYY-MM-DD HH:MM:ss'

import Services from 'common/js/services.js'

export default {
  mixins: [_base, _pagination],
  name: 'front',
  data () {
    return {
      modifyType: '1',
      dialogUserModifyVisible: false,
      isModifyLoading: false,
      orderid: {
        name: '订单号',
        key: 'order_id',
        placeHolder: '请输入订单号'
      },
      filterForm: {
        order_id: ''
      },
      userForm: {
        user_id: '',
        extno: '',
        sign: '',
        id: ''
      },
      columns: [
        {key: 'order_id', title: '订单号'},
        {key: 'money_amount', title: '借款金额'},
        {key: 'counter_fee', title: '服务费'},
        {key: 'order_time', title: '订单时间'},
        {key: 'order_status_text', title: '订单状态'},
        {key: 'overdue_day', title: '逾期天数'},
        {key: 'plan_fee_time', title: '应还款日'},
        {key: 'repayment_time', title: '还款时间'},
        {key: 'true_total_money', title: '还款金额', formatter: (row, column) => { return row[column['property']] / 100 }}
      ],
      userRules: {
        user_id: [
          { required: true, message: '用户账号不能为空', trigger: 'blur' }
        ]
      },
      tableData: [],
      orderData: {},
      userInfo: {},
      repaymentInfo: [],
      pictures: []
    }
  },
  filters: {
    toDate (timestamp) {
      return moment(timestamp).format(DataFormat)
    }
  },
  computed: {
    currentRepay () {
      let ord_id = this.orderData.id
      let repeyment = this.repaymentInfo.filter((item, idx) => {
        return item.order_id == ord_id
      })
      console.log(repeyment)
      return repeyment && repeyment.length && repeyment[0] || {}
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
      let param = {
        order_id: this.filterForm.order_id || this.$route.params.detail
      }
      this.requestPost(Services.orderDetail, param, (remoteData) => {
        this.orderData = remoteData.data && remoteData.data.order_data || {}
        this.userInfo = remoteData.data && remoteData.data.user || {}
        this.pictures = remoteData.data && remoteData.data.user_picture || {}
        let tableData = remoteData.data && remoteData.data.history_order_data || {}
        this.repaymentInfo = remoteData.data && remoteData.data.order_repayment || []
        this.tableData = []
        for (let key in tableData) {
          this.tableData.push(tableData[key])
        }
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
      this.requestPost(Services.orderDetail, {order_id: rowData['id']}, (remoteData) => {
        console.log(remoteData)
      })
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
  .order-detail
    >.el-container
      border: 1px solid #D3DCE6
      min-width: 1200px
    .el-header, .el-footer
      background-color: #e5e9f2
      color: #333
      text-align: center
      line-height: 60px

    .grid-title
      font-weight bold

    .el-row
      &:first-child
        border-top: 1px solid #d3dce6
      border-left: 1px solid #d3dce6
      // border-radius: 4px;
      .el-col
        border-right: 1px solid #d3dce6
        border-bottom: 1px solid #d3dce6
      &.picture
        .grid-content
          height: 100px
          line-height 100px
          img
            height: 100%
            padding: 10px
    .bg-purple-dark
      background: #99a9bf;

    .bg-purple
      background: #d3dce6;

    .bg-purple-light
      background: #e5e9f2;

    .grid-content
      min-height: 30px;
      line-height:30px;
      padding-left: 15px

    .loan-detail
      .el-aside
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 160px;

  .user-dialog
    .el-input__inner
      width: 200px

</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
