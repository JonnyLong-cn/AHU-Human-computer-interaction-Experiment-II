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
        <el-form-item label="学号" :label-width="formLabelWidth">
          <el-input v-model="form.id" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="课程编号" :label-width="formLabelWidth">
          <el-input v-model="form.scourseId" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="成绩" :label-width="formLabelWidth">
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
      <el-table-column prop="id" label="学号" width="120"></el-table-column>
      <el-table-column prop="scourseId" label="课程编号" width="100"></el-table-column>
      <el-table-column prop="scourseName" label="课程名称" width="150"></el-table-column>
      <el-table-column prop="core" label="成绩" width="150"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          id: 'Y01814110',
          scourseId: '10001',
          scourseName: '大学英语',
          core: '98'
        },
        {
          id: 'Y01814110',
          scourseId: '10002',
          scourseName: '软件工程',
          core: '90'
        },
        {
          id: 'E01814284',
          scourseId: '10003',
          scourseName: '数据结构',
          core: '87'
        },
        {
          id: 'E01814284',
          scourseId: '10004',
          scourseName: '编译原理',
          core: '95'
        },
        {
          id: 'E01814284',
          scourseId: '10008',
          scourseName: '计算机图形学实验',
          core: '88'
        }
      ],
      dialogFormVisible: false,
      formLabelWidth: '100px',
      form: {
        id: '',
        scourseId: '',
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
      this.$prompt('请输入学号或课程编号', '查询', {
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
