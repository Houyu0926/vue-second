
<template>
  {{page}}
  <avue-crud :data="data"
             :option="option"
             v-model:page="page"
             @size-change="sizeChange"
             @current-change="currentChange"></avue-crud>
</template>

<script>
export default {
  data () {
    return {
      page: {
        currentPage: 1,
        total: 0,
        layout: "total,pager,prev, next",
        background: false,
        pageSize: 10
      },
      data: [],
      option: {
        align: 'center',
        menuAlign: 'center',
        column: [
          {
            label: '姓名',
            prop: 'name'
          },
          {
            label: '性别',
            prop: 'sex'
          }
        ]
      }
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.page.total = 30
      if (this.page.currentPage === 1) {
        this.data = [
          {
            id: 1,
            name: '张三',
            sex: '男'
          }, {
            id: 2,
            name: '李四',
            sex: '女'
          }
        ]
      } else if (this.page.currentPage === 2) {
        this.data = [
          {
            id: 3,
            name: '王五',
            sex: '女'
          }, {
            id: 4,
            name: '赵六',
            sex: '女'
          }
        ]
      } if (this.page.currentPage === 1) {
        this.data = [
          {
            id: 1,
            name: '张三',
            sex: '男'
          }, {
            id: 2,
            name: '李四',
            sex: '女'
          }
        ]
      } else if (this.page.currentPage === 2) {
        this.data = [
          {
            id: 3,
            name: '王五',
            sex: '女'
          }, {
            id: 4,
            name: '赵六',
            sex: '女'
          }
        ]
      }
    },
    sizeChange (val) {
      this.page.currentPage = 1
      this.page.pageSize = val
      this.getList()
      this.$message.success('行数' + val)
    },
    currentChange (val) {
      this.page.currentPage = val
      this.getList()
      this.$message.success('页码' + val)
    }
  }
}
</script>