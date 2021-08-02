import Vue from 'vue'
// import {Button} from 'mint-ui'
import App from './App.vue'
import store from './vuex/store.js'



//创建一个全局的用于绑定事件监听和分发事件的对象：Global Event Bus 全局事件总线
//事件总线对象就是一个vm
// 将其挂载到Vue的原型对象上，所有组件对象就都可以看到这个事件总线对象
//所有组件对象的原型对象都是一个vm对象==>Vue原型对象是组件对象的原型链上的对象
// Vue.prototype.$golbalEventBus=new Vue();
//注册全局组件
// Vue.componet('App',App)


Vue.config.productionTip=false;//不显示不是生产环境提示
new Vue({
  
  el:'#root',
  //注册局部组件
  components:{//注册组件(后面才能写组件标签)
    App:App,
    
  },
  template:'<App/>',
  //router:router,//所有组件都能通过$router属性看到router对象，所有组件都有了一个代表当前路由的data数据：$route
  store,//所有的组件对象都能看到一个指定store属性：$store
})
