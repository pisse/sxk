/**
 * Created by Administrator on 2017/5/18.
 */
import Vue from 'vue'

var base = {
  data () {
    return {
      total: 0,
      pageSize: 20,
      currentPage: 1
    }
  },
  methods: {
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      console.log(`当前页: ${val}`)
    }
  }
}

export default base
