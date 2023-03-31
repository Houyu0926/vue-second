<template>
  <avue-crud :data="data"
             :option="option"
             @refresh-change="refreshChange"
             @row-save="rowSave"
             @row-update="rowUpdate"
             @row-del="rowDel"></avue-crud>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          id: 1,
          name: '张三',
          sex: '男'
        }, {
          id: 2,
          name: '李四',
          sex: '女'
        }
      ],
      option: {
        column: [
          {
            label: '姓名',
            prop: 'name'
          }, {
            label: '性别',
            prop: 'sex'
          }
        ]
      },
    };
  },
  methods: {
    refreshChange () {
      this.$message.success('刷新回调');
    },
    rowSave (form, done, loading) {
      form.id = new Date().getTime();
      this.$message.success('模拟网络请求')
      setTimeout(() => {
        this.$message.success('关闭按钮等待');
        loading();
      }, 1000)
      setTimeout(() => {
        this.$message.success('新增数据' + JSON.stringify(form));
        done(form);
      }, 2000)
    },
    rowDel (form, index, done) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        done(form)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => { });
    },
    rowUpdate (form, index, done, loading) {
      this.$message.success('模拟网络请求')
      setTimeout(() => {
        this.$message.success('关闭按钮等待');
        loading();
      }, 1000)
      setTimeout(() => {
        this.$message.success('编辑数据' + JSON.stringify(form) + '数据序号' + index);
        done(form);
      }, 2000)
    },
  }
}
</script>