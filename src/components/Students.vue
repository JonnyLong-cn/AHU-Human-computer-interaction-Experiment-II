<template>
  <div>
    <el-input v-model="input" placeholder="请输入学号查询" style="width:200px"></el-input>
    <el-button @click="handleClick()" type="success" class="btn">查询</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="学号" width="100"></el-table-column>
      <el-table-column prop="name" label="姓名" width="100"></el-table-column>
      <el-table-column prop="sex" label="性别" width="80"></el-table-column>
      <el-table-column prop="age" label="年龄" width="80"></el-table-column>
      <el-table-column prop="birth" label="籍贯" width="120"></el-table-column>
      <el-table-column prop="politicalStatus" label="政治面貌" width="120"></el-table-column>
      <el-table-column prop="time" label="入学时间" width="120"></el-table-column>
      <el-table-column prop="phone" label="联系电话" width="120"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text">查看</el-button>
          <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="text">删除</el-button>
          <!-- dialog部分 -->
          <el-dialog title="可修改信息" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="籍贯" :label-width="formLabelWidth">
                <el-input v-model="form.birth" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="政治面貌" :label-width="formLabelWidth">
                <el-input v-model="form.politicalStatus" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="联系电话" :label-width="formLabelWidth">
                <el-input v-model="form.phone" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="openCancel()">取 消</el-button>
                <el-button type="primary" @click="openCorrect()">确 定</el-button>
              </div>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          id: 'E01814284',
          name: '林黛玉',
          sex: '女',
          age: '20',
          birth: '安徽省合肥市',
          politicalStatus: '党员',
          time: '2020/11/13',
          phone: '13764789836'
        },
        {
          id: 'E01814426',
          name: '薛宝钗',
          sex: '女',
          age: '21',
          birth: '安徽省合肥市',
          politicalStatus: '党员',
          time: '2018/11/12',
          phone: '13664784636'
        },
        {
          id: 'A01816547',
          name: '史湘云',
          sex: '女',
          age: '17',
          birth: '安徽省阜阳市',
          politicalStatus: '共青团员',
          time: '2020/11/12',
          phone: '13764784636'
        },
        {
          id: 'B01816537',
          name: '贾探春',
          sex: '女',
          age: '19',
          birth: '江苏省南京市',
          politicalStatus: '党员',
          time: '2019/11/12',
          phone: '13764784636'
        },
        {
          id: 'Y01816547',
          name: '贾迎春',
          sex: '女',
          age: '20',
          birth: '江苏省南京市',
          politicalStatus: '共青团员',
          time: '2020/11/12',
          phone: '13764784636'
        }
      ],
      input: '',
      dialogFormVisible: false,
      formLabelWidth: '120px',
      form: {
        id: '',
        name: '',
        sex: '',
        age: '',
        birth: '',
        politicalStatus: '',
        time: '',
        phone: ''
      }
    }
  },
  methods: {
    handleClick (row) {
      this.$alert(`
      <h3>学号：${row.id}</h3>
      <h3>姓名：${row.name}</h3>
      <h3>性别：${row.sex}</h3>
      <h3>年龄：${row.age}</h3>
      <h3>籍贯：${row.birth}</h3>
      <h3>政治面貌：${row.politicalStatus}</h3>
      <h3>入学时间：${row.time}</h3>
      <h3>联系电话：${row.phone}</h3>
      `, '信息详情', {
        dangerouslyUseHTMLString: true
      })
    },
    handleEdit (row) {
      this.form = row
      this.dialogFormVisible = true
    },
    openCorrect () {
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
          type: 'error',
          message: '取消本次操作!'
        })
      })
      this.dialogFormVisible = false
    },
    openCancel () {
      this.$message({
        type: 'error',
        message: '取消本次操作!'
      })
      this.dialogFormVisible = false
    }
  }
}
</script>

<style>
.btn{
  margin-left: 20px;
}
</style>
