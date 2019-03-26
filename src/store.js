import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 多组件公用的公共存储仓库
export default new Vuex.Store({
  // 公共数据读取方式：this.$store.state.adminName
  // 公共数据读取方式：this.$store.state.globalSettings
  
  state: {
    adminName:'', //当前登录的管理员名 
    globalSettings:{//项目的全局设置信息
        apiUrl:'http://127.0.0.1:8090'//初始的默认值
    }
  },
  // 公共数据修改方法：this.$store.commit("setAdminName","boss")
  // 公共数据修改方法：this.$store.commit("setAdminName",{...})
  mutations: {//控制数据的进化（即修改state），类似于组件对象中的methods-用mutations修改数据可以保证数据的“响应式”
      setAdminName(state,value){
        state.adminName=value
      },
      setGlobalSettings(state,value){
        state.globalSettings=value
      }
  },
  actions: {

  }
})
