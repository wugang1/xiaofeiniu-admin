<template>
  <div class="login">
    <h1>添加菜品</h1>
    <el-form label-width="100px">
      <el-form-item label="菜品图片">
        <el-upload :action="uploadAction" class="xfn-uploader" :on-success="doUploadSucc" name="dishImg">
          <img v-if='imageUrl' :src="imageUrl">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imageUrl:'',//要显示的预览图地址
      uploadAction:this.$store.state.globalSettings.apiUrl+'/admin/dish/image' ,//可处理文件上传的API
      formData:{
        title:'',
        imgUrl:'',//菜品图片在服务器上的随机文件名称
        price:'',
        detail:'',
        categoryId:''
      }
    }
  },
  methods:{
    doUploadSucc(res,file){
      // 文件上传成功后，客户端得到响应消息之后的处理函数
      //res:服务器端返回的响应消息
      // file:从INPUT【type=file】中读取的第一个上传的文件对象
      this.formData.imgUrl=res.fileName
      this.imageUrl=URL.createObjectURL(file.raw)
      // 把上传的文件编码为DataURL字符串
      console.log(res)
    }
  }
}
</script>
<style lang="scss">
  .xfn-uploader{
    .el-upload{
      border:1px dotted #aaa;
      border-radius:3px;
      cursor: pointer;
      width:250px;
      height:177px;
      overflow: hidden;
      &:hover{
        border-color: #409EFF
      }
    }
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px !important;
    text-align: center;
  }
</style>