<template>
  <el-container>
    <el-header>
        <el-menu background-color="#393D49" text-color="#fff" active-text-color="#409eff" router :default-active="$router.path" mode="horizontal">
        <!-- <el-menu-item index="/main/project">系统管理</el-menu-item> -->
        <el-submenu index="/main">
          <template slot="title">系统管理</template>
          <el-menu-item index="/main/project">账户信息</el-menu-item>
          <el-menu-item index="/main/password">修改密码</el-menu-item>
        </el-submenu>
        <el-menu-item index="/main/students">学生信息基本管理</el-menu-item>
        <el-menu-item index="/main/scourses">课程基本信息管理</el-menu-item>
        <el-menu-item index="/main/cores">学生成绩管理</el-menu-item>
      </el-menu>
      <el-button type="primary" @click="loginOut" class="loginout-button">退出</el-button>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
</el-container>
</template>

<script>
export default {
  methods: {
    loginOut () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  background-color: #393D49;
  font-size: 20px;
}
</style>
