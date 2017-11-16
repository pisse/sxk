<template>
  <div class="main">
    <div class="filter-box">
      <v-input :formData="filterForm" :opt="channel"></v-input>
      <br>
      <date-picker :formData="filterForm"  type="date" :opt="dataRange" dateFormat="yyyy-MM-dd"></date-picker>
      <div class="btn-right-wrap">
        <el-button size="small" type="primary" @click="search" :loading="isLoading">筛选</el-button>
      </div>
    </div>

<!--
    <el-row :gutter="20" class="table-header">
      <el-col :span="2" :offset="20">&nbsp;&lt;!&ndash;<el-button size="small"><i class="iconfont icon-download"></i>下载</el-button>&ndash;&gt;</el-col>
      &lt;!&ndash;<el-col :span="2" ><el-button icon="plus" size="small" @click="modifyType=1;dialogUserModifyVisible=true">新建</el-button></el-col>&ndash;&gt;
    </el-row>

    <el-table
        v-loading="isLoading"
        :data="tableData"
        stripe
        :row-class-name="tableRowClassName">
      &lt;!&ndash; <el-table-column
           type="index"
           width="50">
       </el-table-column>&ndash;&gt;
      <el-table-column
          fixed
          prop="date"
          width="120"
          label="日期">
      </el-table-column>
      <el-table-column
          prop="op_id"
          label="通道ID">
      </el-table-column>

      <el-table-column
          v-for="(item, idx) in columns"
          :prop="item"
          :label="item">
      </el-table-column>

      &lt;!&ndash; <el-table-column
           fixed="right"
           label="操作"
           width="100px">
         <template scope="scope">
           &lt;!&ndash;<el-button @click="onDetail" type="text" size="small">查看</el-button>&ndash;&gt;
           <el-button @click.prevent="onEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
           &lt;!&ndash;<el-button @click.prevent="onDelete" type="text" size="small">删除</el-button>&ndash;&gt;
         </template>
       </el-table-column>&ndash;&gt;
    </el-table>
-->


    <div class="highcharts-container" >
      <el-radio-group v-model="type" @change="typeChange">
        <el-radio-button label="success">成功数</el-radio-button>
        <el-radio-button label="total">总数</el-radio-button>
      </el-radio-group>
      <div id="chartWrap"></div>
    </div>


    <!--<div class="mt15">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next, jumper"
          :total="total">
      </el-pagination>
    </div>-->

  </div>
</template>

<script>
  import vInput from './filters/vInput'
  import datePicker from './filters/datePicker'
  import _base from '../mixin/base.js'
  import _pagination from '../mixin/pagination.js'
  import _statistic from '../mixin/statistic.js'
  import moment from 'moment'

  import Services from 'common/js/services.js'

  const dateFormat = 'YYYY-MM-DD'

  export default {
    mixins: [_base, _pagination, _statistic],
    name: 'channelDelay',
    data () {
      return {
        type: 'total',
        channel: {
          name: '通道',
          key: 'op_id',
          placeHolder: '请输入通道id'
        },
        dataRange: {
          name: '对比时间',
          keyStart: 'start_time',
          keyEnd: 'end_time',
          desc: '可查询三个月内记录'
        },
        filterForm: {
          op_id: '',
          start_time: moment().subtract(2, 'days').format(dateFormat),
          end_time: moment().subtract(1, 'days').format(dateFormat)
        },
        columns: [],
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
        params['start_time'] = moment(params['start_time']).format(dateFormat)
        params['end_time'] = moment(params['end_time']).format(dateFormat)
        params['page'] = this.currentPage
        this.requestPost(Services.compare, params, (remoteData) => {
          this.format(remoteData.data || [])
        })
      },
      typeChange (val) {
        this.getList()
      },
      format (data) {
        let ret = {
          ele: 'chartWrap',
          title: '',
          categories: [],
          series: [],
          height: 500,
          yFormat: '{value}条',
          tickInterval: 6
        }

        for (var date in data) {
          let temp = data[date]
          let lineObj = {
            name: date + (this.type == 'total' ? '(总数)' : '(成功数)'),
            data: []
          }
          let skey = this.type == 'total' ? 'record_total' : 'success_total'
          for (var key in temp) {
            ret['categories'].push(key)
            lineObj['data'].push(temp[key][skey])
          }
          ret.series.push(lineObj)
        }

        this.drawLine(ret)
      }
    },
    components: {
      vInput, datePicker
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .user-dialog
    .el-input__inner
      width: 200px
  .highcharts-container
    text-align :right
    .el-radio-group
      margin-right : 15px
      margin-bottom : 10px

</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
