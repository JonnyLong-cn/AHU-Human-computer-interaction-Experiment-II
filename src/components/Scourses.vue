<template>
  <div>
    <div class="btn">
      <el-button @click="searchClick" type="primary" icon="el-icon-search">查询</el-button>
      <el-button @click="addClick" type="primary" icon="el-icon-circle-plus-outline">添加</el-button>
      <el-button @click="changeClick" type="primary" icon="el-icon-edit">修改</el-button>
      <el-button @click="deleteClick" type="danger" icon="el-icon-delete">删除</el-button>
    </div>
    <el-dialog title="请输入添加的课程信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="课程编号" :label-width="formLabelWidth">
          <el-input v-model="form.id" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="授课教师" :label-width="formLabelWidth">
          <el-input v-model="form.teacher" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="课程名称" :label-width="formLabelWidth">
          <el-input v-model="form.scourseName" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="课程学分" :label-width="formLabelWidth">
          <el-input v-model="form.core" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelClick()">取 消</el-button>
        <el-button type="primary" @click="correctClick()">确 定</el-button>
      </div>
    </el-dialog>
    <el-table ref="scourseTable" :data="tableData" border style="width: 100%" @selection-change="tableSelection">
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column prop="id" label="课程编号" width="100"></el-table-column>
      <el-table-column prop="teacher" label="授课教师" width="100"></el-table-column>
      <el-table-column prop="scourseName" label="课程名称" width="150"></el-table-column>
      <el-table-column prop="core" label="课程学分" width="80"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          id: '10001',
          teacher: 'Hellen',
          scourseName: '大学英语',
          core: '3.0'
        },
        {
          id: '10002',
          teacher: 'Jack',
          scourseName: '软件工程',
          core: '3.0'
        },
        {
          id: '10003',
          teacher: 'Jack',
          scourseName: '数据结构',
          core: '3.0'
        },
        {
          id: '10004',
          teacher: 'Alice',
          scourseName: '编译原理',
          core: '3'
        },
        {
          id: '10005',
          teacher: 'Alice',
          scourseName: '编译原理实验',
          core: '1'
        },
        {
          id: '10005',
          teacher: 'Alice',
          scourseName: 'Java程序设计',
          core: '2'
        },
        {
          id: '10007',
          teacher: 'Lily',
          scourseName: '计算机图形学',
          core: '1.5'
        },
        {
          id: '10008',
          teacher: 'Lily',
          scourseName: '计算机图形学实验',
          core: '0.5'
        }
      ],
      dialogFormVisible: false,
      formLabelWidth: '100px',
      form: {
        id: '',
        teacher: '',
        scourseName: '',
        core: ''
      },
      multipleSelection: []
    }
  },
  methods: {
    correctClick () {
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
    cancelClick () {
      this.$message({
        type: 'error',
        message: '取消本次操作!'
      })
      this.dialogFormVisible = false
    },
    searchClick () {
      this.$prompt('请输入课程编号', '查询', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '查询成功，结果如下'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消查询操作'
        })
      })
    },
    addClick () {
      this.dialogFormVisible = true
    },
    changeClick () {
      if (this.multipleSelection.length === 0) {
        console.log('为空')
        this.$message({
          type: 'error',
          message: '您必须选中一行!'
        })
      } else {
        this.dialogFormVisible = true
        this.form = this.multipleSelection[0]
      }
    },
    deleteClick () {
      if (this.multipleSelection.length === 0) {
        console.log('为空')
        this.$message({
          type: 'error',
          message: '您必须选中一行!'
        })
      } else {
        this.$confirm('此操作将永久删除信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'error',
            message: '取消本次操作!'
          })
        })
      }
      this.dialogFormVisible = false
    },
    tableSelection (val) {
      this.multipleSelection = val
      console.log(val)
    }
  }
}
</script>

<style>
.btn{
  margin-left: 0;
  margin-bottom: 20px;
}
</style>
