import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'


/*插件和全局对象的设置 */
Vue.use(ElementUI) //注册ElementUI
Vue.prototype.$axios=axios//把axios设置为有Vue组件实例的成员属性，以后可以使用this.$axios使用异步请求功能
Vue.config.productionTip = false
/*全局过滤器的创建 */
Vue.filter('date',(val)=>{
  // 把bigint转换为yyyy-mm-dd
    var date=new Date(val)
    var yy=date.getFullYear()
    var mm=date.getMonth()+1
    mm=mm>9? mm:"0"+mm
    var dd=date.getDate()
    dd=dd>9? dd:"0"+dd
    return yy+'-'+mm+'-'+dd
})
Vue.filter('datetime',(val)=>{
  // 把bigint转换为yyyy-mm-dd hh:mm:ss
  var date=new Date(val)
  var yy=date.getFullYear()
  var mm=date.getMonth()+1
  mm=mm>9? mm:"0"+mm
  var dd=date.getDate()
  dd=dd>9? dd:"0"+dd
  var hh=date.getHours()
  hh=hh>9? hh:"0"+hh
  var mi=date.getMinutes()
  mi=hh>9? mi:"0"+mi
  var ss=date.getSeconds()
  ss=ss>9? ss:"0"+ss
  return yy+'-'+mm+'-'+dd+' '+hh+':'+mi+":"+ss
})
Vue.filter('currency',(val)=>{
  // 把int 转换为￥xx.yy
 return "￥"+val.toFixed(2)
})

Vue.filter('tableStatus',(val)=>{
    if(val==1){
      return '空闲'
    }else if(val==2){
      return '预定'
    }else if(val==3){
      return '占用'
    }else{
      return '其他'
    }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
