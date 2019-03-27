<template>
  <div class="login">
    <el-breadcrumb>
      <el-breadcrumb-item to='/main'>首页</el-breadcrumb-item>
      <el-breadcrumb-item >菜品管理</el-breadcrumb-item>
      <el-breadcrumb-item >菜品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-tabs type='border-card'>
      <el-tab-pane v-for="(c,i) in dishList" :key='i'>
          <span slot="label" >
            <el-badge :value="c.dishList.length" >{{c.cname}}</el-badge>
          </span>

          <el-row>
            <el-col :xs="12" :md="6" :lg="4" :xl="3" v-for='(d,j) in c.dishList' :key="j">
              <!-- <xfn-dish :data="d"></xfn-dish> -->
              {{d.title}}
              <img :src="require('../assets/img/dish/'+d.imgUrl)" style="max-width:100%"/>
            </el-col>
          </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  data(){
    return {
      dishList:[ ]
    }
  },
 created(){
    // 异步获取菜品列表
    var url=this.$store.state.globalSettings.apiUrl+'/admin/dish'
    this.$axios.get(url).then(({data})=>{
      this.dishList=data
      // console.log(this.dishList)
    }).catch((err)=>{
      console.log(err)
    })
  }
}
</script>
<style lang="scss">
  .el-badge__content.is-fixed{
    top: 10px !important;
    right: 3px ;
  }
</style>