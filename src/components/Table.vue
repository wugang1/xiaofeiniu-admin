<template>
  <div class="xfn-table-info">
    <el-card shadow='hover'>
      <div class='xfn-table' :style='{background:getTableColor(data.status)}'>{{data.tid}}号桌:{{data.status|tableStatus}}</div>
      <el-button type='success' plain size="mini" @click='showTableDetail'>详情</el-button>
      <el-button type="danger" plain size="mini">修改</el-button>
    </el-card>
    <!-- 桌台详情对话框 -->
    <el-dialog :title='data.tid+"号桌台详情"' :visible='dialogTableDetailVisible' :before-close='colseDialogTableDetail' >
      <!-- 对话框主体 -->
        <el-tabs type='border-card' @tab-click='makeQRCode'>
          <el-tab-pane label="桌台状态">状态...</el-tab-pane>
          <el-tab-pane label="二维码" > 
            <img :src="qrcodeData" >
          </el-tab-pane>
        </el-tabs>
      <!-- 对话框尾部 -->
      <div slot='footer'>
        <el-button type="primary" @click="dialogTableDetailVisible=false">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
      dialogTableDetailVisible:false,
      qrcodeData:''
    }
  },
  props:['data'],
  methods:{
    makeQRCode(){
      
      // 创建二维码-注意此方法不能再当前组件的mounted中调用，应为绘图必须的canvas在el-dialog中，对话框在组件加载时并不在Dom树上
      var qrcode=require('qrcode')
      
      // 每个桌子对应的URL应该形如：
      // http://127.0.0.1:8092/#/3  5  8
      var tableUrl=this.$store.state.globalSettings.appUrl+'/#/'+this.data.tid
      // 把绘制得到的图片二进制数据转换为Base64编码的字符串
      qrcode.toDataURL(tableUrl,{
        width:300,
        errorCorrectionLexel:'H'
      },(err,url)=>{
          this.qrcodeData=url
        })
    },
    getTableColor(status){
      if(status==1){
        return '#67C23A'
      }
      else if(status==2){
        return '#E6A23C'
      }
      else if(status==3){
        return '#F56C6C'
      }else{
        return '#909399'
      }
    },
    showTableDetail(){
      // console.log(this.data) 当前桌子的数据
      this.dialogTableDetailVisible=true

    },
    colseDialogTableDetail(){
      this.dialogTableDetailVisible=false
    }
  }
}
</script>

<style lang='scss'>
  .xfn-table-info{
    padding:3px;
    text-align: center;
    .xfn-table{
      width:90%;
      height:120px;
      line-height: 120px;
      margin: 5px auto;
      border:1px solid #aaa;
      box-shadow:3px 4px 5px #666;
      border-radius: 50%;
    }
  }
</style>
