import Vue from 'vue'
import App from './App.vue'

import './base.css'
//注册全局组件
// Vue.componet('App',App)
Vue.config.productionTip=false;//不显示不是生产环境提示
new Vue({
  el:'#root',
  //注册局部组件
  components:{//注册组件(后面才能写组件标签)
    App:App,
    
  },
  template:'<App/>'
})
