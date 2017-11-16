<template>
  <div class="main">
    <div class="filter-box">
      <v-input :formData="filterForm" :opt="task_id"></v-input>
      <br>
      <v-input :formData="filterForm" :opt="activity_id"></v-input>

      <!--<date-picker :formData="filterForm"  type="datetime" :opt="dataRange" dateFormat="yyyy-MM-dd HH:mm:ss"></date-picker>
      <br>-->
      <!--<v-select :formData="filterForm" ref="status" :opt="status"></v-select>-->

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
                    >
      </el-table-column>

      <el-table-column
          fixed="right"
          label="操作"
          width="80px">
        <template slot-scope="scope">
          <el-button @click.prevent="onDetail(scope.$index, scope.row)" type="text" size="small">查看</el-button>
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

    <el-dialog title="访问明细" :visible.sync="dialogFormVisible" size="large" custom-class="detail-dialog">
      <el-table :data="detailList">
        <!--<el-table-column property="id" label="ID" width="50"></el-table-column>-->
        <el-table-column property="ip" label="IP" width="200"></el-table-column>
        <el-table-column property="time" label="访问时间" width="180"></el-table-column>
        <el-table-column property="activity_id" label="活动ID" width="100"></el-table-column>
        <el-table-column property="activity_title" label="活动名称"></el-table-column>
        <el-table-column property="activity_long_url" label="长链"></el-table-column>
        <el-table-column property="activity_short_url" label="短链"></el-table-column>
      </el-table>

      <div class="mt15">
        <el-pagination
            @size-change="handleDialogSizeChange"
            @current-change="handleDialogCurrentChange"
            :current-page="dialogPage"
            :page-size="dialogSize"
            layout="total, prev, pager, next, jumper"
            :total="dialogTotal">
        </el-pagination>
      </div>

    </el-dialog>

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
      task_id: {
        name: '任务ID',
        key: 'task_id',
        placeHolder: '请输入任务ID'
      },
      activity_id: {
        name: '活动ID',
        key: 'activity_id',
        placeHolder: '请输入活动ID'
      },
      status: {
        name: '发送状态',
        key: 'status',
        value: 'all',
        items: [
          {label: '全部', val: '100'},
          {label: '发送失败', val: '-3'},
          {label: '任务生成失败', val: '-2'},
          {label: '不通过', val: '-1'},
          {label: '待审核', val: '0'},
          {label: '通过', val: '1'},
          {label: '任务生成中', val: '2'},
          {label: '发送中', val: '3'},
          {label: '发送成功', val: '4'},
          {label: '部分发送成功', val: '5'}
        ]
      },
      detailActivityId: '',
      dialogFormVisible: false,
      detailList: [],
      dialogPage: 1,
      dialogSize: 20,
      dialogTotal: 0,
      dataRange: {
        name: '起止时间',
        keyStart: 'start_time',
        keyEnd: 'end_time',
        desc: '可查询三个月内记录'
      },
      filterForm: {
        task_id: '',
        activity_id: ''
        // start_time: moment().subtract(7, 'days').format(dateFormat),
        // end_time: moment().subtract(0, 'days').format(dateFormat)
      },
      columns: [{key: 'task_id', title: '任务ID'}, {key: 'activity_id', title: '活动ID'}, {key: 'activity_title', title: '活动名称'},
        {key: 'send_message', width: '250px', title: '信息内容'}, {key: 'created_at', title: '创建时间', width: '160px'},
        {key: 'activity_long_url', title: '活动长链'}, {key: 'activity_short_url', title: '活动短链'}
      ],
      tableData: []
    }
  },
  watch: {
    currentPage () {
      this.getList()
    },
    dialogPage () {
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
      // params['start_time'] = moment(params['start_time']).format(dateFormat)
      // params['end_time'] = moment(params['end_time']).format(dateFormat)
      params['page'] = this.currentPage
      this.request(Services.shortUrlList, params, (remoteData) => {
        this.tableData = remoteData && remoteData.data || []
        this.total = parseInt(remoteData.total)
      })
    },
    statusText (row) {
      return row.status
    },
    tableRowClassName (row, index) {
      return ''
    },
    onDetail (idx, rowData) {
      this.detailActivityId = rowData.activity_id
      this.getDialogList()
    },
    getDialogList () {
      let params = {
        activty_id: this.detailActivityId,
        page: this.dialogPage
      }
      // console.log(params)
      this.request(Services.shortUrlDetail, params, (remoteData) => {
        this.dialogFormVisible = true
        this.detailList = remoteData && remoteData.data || []
        this.dialogTotal = parseInt(remoteData.total)
      })
    },
    handleDialogSizeChange (val) {
      // console.log(`每页 ${val} 条`)
    },
    handleDialogCurrentChange (val) {
      this.dialogPage = val
      // console.log(`当前页: ${val}`)
    },
    onEdit (idx, rowData) {
      this.modifyType = 2
      this.dialogModifyVisible = true
      this.$nextTick(() => {
        for (let key in this.form) {
          this.form[key] = rowData[key]
        }
        this.form['id'] = rowData['id']
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


.el-dialog--large
  &.detail-dialog
    max-width : 1200px


</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
