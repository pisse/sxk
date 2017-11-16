<template>
  <div class="main">
    <div class="filter-box">
      <v-input :formData="filterForm" :opt="user_id"></v-input>&nbsp;&nbsp;&nbsp;
      <v-input :formData="filterForm" :opt="task_id"></v-input>
      <br>
      <v-input :formData="filterForm" :opt="phone"></v-input>&nbsp;&nbsp;&nbsp;
      <v-input :formData="filterForm" :opt="content"></v-input>
      <br>
      <date-picker :formData="filterForm"  type="datetime" :opt="dataRange" dateFormat="yyyy-MM-dd HH:mm:ss"></date-picker>
      <br>
      <v-select :formData="filterForm" ref="status" :opt="status"></v-select>

      <div class="btn-right-wrap">
        <el-button size="small" type="primary" @click="search" :loading="isLoading">筛选</el-button>
      </div>
    </div>

    <el-row :gutter="18" class="table-header">
      <el-col :span="2" :offset="18">&nbsp;<!--<el-button size="small"><i class="iconfont icon-download"></i>下载</el-button>--></el-col>
      <!--<el-col :span="2" ><el-button icon="upload2" size="small" >导入</el-button></el-col>
      <el-col :span="2" ><el-button icon="plus" size="small" @click="modifyType=1;dialogModifyVisible=true">新建</el-button></el-col>-->
    </el-row>

    <el-table
        v-loading="isLoading"
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName">

      <!--<el-table-column
              type="index"
              label="序号"
              width="50">
      </el-table-column>-->

      <el-table-column v-for="(column, idx) in columns" :key="idx"
                       :prop="column.key"
                       :label="column.title"
                       :width="column.width"
                       :formatter="column.formatter"
      >
      </el-table-column>

      <!--<el-table-column
          fixed="right"
          label="操作"
          width="120">
        <template scope="scope">
          &lt;!&ndash;<el-button @click="onDetail" type="text" size="small">查看</el-button>&ndash;&gt;
          &lt;!&ndash;<el-button @click.prevent="onEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>&ndash;&gt;
          <div v-if="scope.row.status=='待审核'">
            <el-button @click.prevent="onPass(scope.$index, scope.row)" type="text" size="small">通过</el-button>
            <el-button @click.prevent="onReject(scope.$index, scope.row)" type="text" size="small">不通过</el-button>
          </div>


          &lt;!&ndash;<el-button @click.prevent="onDelete" type="text" size="small">删除</el-button>&ndash;&gt;
        </template>
      </el-table-column>-->
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

  </div>
</template>

<script>
  import vInput from './filters/vInput'
  import datePicker from './filters/datePicker'
  import vSelect from './filters/vSelect.vue'
  import _base from '../mixin/base.js'
  import _pagination from '../mixin/pagination.js'

  import moment from 'moment'

  import Services from 'common/js/services.js'
  const dateFormat = 'YYYY-MM-DD HH:mm:ss'

  export default {
    mixins: [_base, _pagination],
    name: 'errSms',
    data () {
      return {
        modifyType: '1',
        dialogModifyVisible: false,
        isModifyLoading: false,
        user_id: {
          name: '用户ID',
          key: 'user_id',
          placeHolder: '请输入用户ID'
        },
        content: {
          name: '短信内容',
          key: 'content',
          placeHolder: '请输入短信内容'
        },
        phone: {
          name: '手机号',
          key: 'phone',
          placeHolder: '请输入手机号'
        },
        task_id: {
          name: '任务ID',
          key: 'task_id',
          placeHolder: '请输入任务ID'
        },
        status: {
          name: '状态',
          key: 'result_type',
          value: 'all',
          items: [
            {label: '全部', val: '100'},
            {label: '成功', val: '0'},
            {label: '黑名单', val: '1'},
            {label: ' 其他错误', val: '2'},
            {label: ' 最近已发送', val: '3'}
          ]
        },
        dataRange: {
          name: '起止时间',
          keyStart: 'start_time',
          keyEnd: 'end_time',
          desc: '可查询三个月内记录'
        },
        filterForm: {
          task_id: '',
          user_id: '',
          phone: '',
          content: '',
          result_type: '100',
          start_time: moment().subtract(7, 'days').hour(0).minute(0).second(0).format(dateFormat),
          end_time: moment().subtract(0, 'days').hour(23).minute(59).second(59).format(dateFormat)
        },
        columns: [{key: 'id', title: 'ID', isAdd: false}, {key: 'user_id', title: '用户ID'},
          {key: 'send_message', width: '200px', title: '信息内容', formatter: (row, column) => { return decodeURIComponent(row[column['property']]) }},
          {key: 'task_id', title: '任务ID'}, {key: 'ap_mid', title: 'AP_MID'}, {key: 'message', title: '错误信息'}, {key: 'phone', title: '手机号'},
          {key: 'result_type_text', title: '状态', isAdd: false},
          {key: 'created_at', title: '提交时间', width: '160px', isAdd: false}],
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
        params['start_time'] = moment(params['start_time']).format(dateFormat)
        params['end_time'] = moment(params['end_time']).format(dateFormat)
        params['page'] = this.currentPage
        this.request(Services.taskRecord, params, (remoteData) => {
          this.tableData = remoteData && remoteData.data || []
          this.total = parseInt(remoteData.total)
        })
      },
      statusText (row) {
        return row.status
      },
      onPass (idx, rowData) {
        this.$confirm('确认要通过此发送任务吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.requestPost(Services.smstaskCheck, {
            status: 1,
            id: rowData.id
          }, (remoteData) => {
            this.getList()
            this.$message({
              message: '审核成功'
            })
          })
        })
      },
      onReject (idx, rowData) {
        this.$prompt('请输入拒绝理由', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          this.requestPost(Services.smstaskCheck, {
            remark: value,
            status: -1,
            id: rowData.id
          }, (remoteData) => {
            this.getList()
            this.$message({
              message: '审核成功'
            })
          })
        })
      },
      tableRowClassName (row, index) {
        return ''
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
      vInput, datePicker, vSelect
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .modify-dialog
    .el-input__inner
      width: 200px

</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
