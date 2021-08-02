<template>
  <ul>
    <!-- <li>id:{{$route.params.id}}</li> -->
    <li>id:{{id}}</li>
    <li>title:{{detail.title}}</li>
    <li>content:{{detail.content}}</li>
  </ul>
</template>

<script>
const allMessageDetail=[
  {id:1,title:'message001',content:'message content001'},
  {id:5,title:'message005',content:'message content005'},
  {id:9,title:'message009',content:'message content009'},
]
export default {
  props:['id'],
  data(){
    return {
      detail:{},
    }
  },
  mounted(){
    setTimeout(() => {
      //获取当前的id
      const id=this.$route.params.id*1;
      const detail=allMessageDetail.find(detail=>{
        return detail.id===id
      });
      this.detail=detail;
    }, 1000);
  },
  /**
   * 路由组件对象是在第一次请求对应路径时才创建
   * 从一个路由组件离开，路由组件死亡，在进入需要重新创建
   * 当在同一个路由路径上做切换（只是改变了参数），当前路由组件对象直接复用
   * 同一个组件对象mounted（）只执行一次
   */

  watch:{
    '$route'(to,from){//当请求参数发生改变时，内部指定了新的$router
    //对路由变化做出响应
      setTimeout(() => {
        //获取当前的id
        const id=this.id*1;
        const detail=allMessageDetail.find(detail=>{
          return detail.id===id
        });
        this.detail=detail;
      }, 1000);
    }
  }
}
</script>

<style>

</style>