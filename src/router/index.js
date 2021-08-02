/**
 * 路由器对象模块
 * 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News.vue'
import Message from '../pages/message.vue'
import MessageDetail from '../pages/messageDetail.vue'
//声明使用vue插件 只要是vue的插件都要进行声明
Vue.use(VueRouter)
export default new VueRouter({
  mode:'history',//去除url中的#号
  //应用中所有的路由
  routes:[
    //路由配置
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',//path 最左边的/代表项目的根路径
      component:Home,
      children:[//注册子路由
        {
          path:'/home/news',
          component:News
        },
        {
          path:'/home/message',
          component:Message,
          children:[
            {
              name:'detail',
              path:'/home/message/messagedetail/:id',//动态路由
              component:MessageDetail,
              //props:true, //内部将自动接收的params参数以标签属性传入路由组件
               props:(route)=>({id:route.params.id,name:route.query.name}),//函数返回的对象中的属性都会以标签属性传入路由组件
            }
          ]
        },
        {
          path:'',
          redirect:'/home/news'
        }

      ]
    },
    {
      path:'/',
      component:About
    },
    
  ]
})