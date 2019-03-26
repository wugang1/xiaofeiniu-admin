<template>
  <div class="xfn-category-list">
    <el-breadcrumb>
      <el-breadcrumb-item to='/main'>首页</el-breadcrumb-item>
      <el-breadcrumb-item >菜品类别管理</el-breadcrumb-item>
      <el-breadcrumb-item >类别列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-button type='primary'>添加新的菜品类别</el-button>
    <br>
    <br>
    <el-table :data='categoryList' stripe border>
      <el-table-column label='编号' prop='cid'></el-table-column>
      <el-table-column label='名称' prop='cname'></el-table-column>
      <el-table-column label='操作' >
        <template slot-scope="{row,$index}">
          <el-button type='success' icon="el-icon-edit" size="mini" @click='updateCategory(row,$index)'>修改</el-button>
          <el-button type='danger' icon="el-icon-delete" size="mini" @click='deleteCategory(row,$index)'>删除</el-button>
        </template>
       
      </el-table-column>
    </el-table>

  </div>
</template>
<script>
export default {
  data(){
    return{
      categoryList:[]
    }
  },
  mounted(){
    var url =this.$store.state.globalSettings.apiUrl+'/admin/category'
    this.$axios.get(url).then((res)=>{
        this.categoryList=res.data
    }).catch((err)=>{
        console.log(err)
    })
  },
  methods:{
    deleteCategory(c,i){
      console.log(c)
      console.log(i)
    },
    updateCategory(c,i){
      console.log(c)
      console.log(i)
    }
  }
}
</script>
