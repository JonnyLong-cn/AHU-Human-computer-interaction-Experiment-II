<template>
  <div>
    <h3>账户基本信息：</h3>
    <img src="../assets/logo.png" alt="faf" class="picture">
    <el-form label-width="80px" ref="formRef" :model="tableData">
      <el-form-item label="账户">
        <el-input v-model="tableData.account_name"></el-input>
      </el-form-item>
      <el-form-item label="工号">
        <el-input v-model="tableData.account_id"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="tableData.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="tableData.email"></el-input>
      </el-form-item>
      <el-row type="flex" justify="end">
        <el-button type="primary" round @click="open">保存修改</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account_id: '',
      tableData: {
        account_name: 'admin',
        account_id: '10086',
        phone: '13813819438',
        email: 'chinajonnylong@163.com'
      }
    }
  },
  methods: {
    open () {
      this.$confirm('此操作将永久修改账户信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '修改成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消修改'
        })
      })
    }
  }
}
</script>
<style>
.picture{
  margin-left: 50px;
}
</style>
