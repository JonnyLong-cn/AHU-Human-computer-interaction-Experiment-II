<template>
  <div>
    <el-form label-width="120px" :model="passwordForm">
      <el-form-item label="输入旧密码">
        <el-input v-model="passwordForm.password" type="password" style="width:200px"></el-input>
      </el-form-item>
      <el-form-item label="输入新密码">
        <el-input v-model="passwordForm.newpassword" type="password" style="width:200px"></el-input>
      </el-form-item>
      <el-form-item label="再次输入新密码">
        <el-input v-model="passwordForm.newpassword2" type="password" style="width:200px"></el-input>
      </el-form-item>
      <div class="btn">
        <el-button type="primary" round @click="open">保存修改</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      passwordForm: {
        password: '',
        newpassword: '',
        newpassword2: ''
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
        if (this.passwordForm.password !== '123456') {
          this.$message({
            type: 'error',
            message: '旧密码输入错误'
          })
        } else if (this.passwordForm.newpassword === this.passwordForm.newpassword2) {
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          const myNotification = new Notification('注意', {
            body: '修改账户密码成功'
          })
          myNotification.onclick = () => {
            console.log('通知被点击')
          }
        } else {
          this.$message({
            type: 'warning',
            message: '两次输入的密码不相同'
          })
        }
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
.btn{
  position: relative;
  margin: 0;
}
</style>
