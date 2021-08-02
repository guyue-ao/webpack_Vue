<template>
  <div>
    <ul>
      <li v-for="(m,index) in message" :key='m.id'>
        <!-- <router-link to="'/home/message/detail/' + m.id">{{m.title}}</router-link> -->
        <!-- <router-link :to="`/home/message/messagedetail/${m.id}`">{{m.title}}</router-link> -->
        <router-link :to="{name:'detail',params:{id:m.id}}">{{m.title}}</router-link>
        ------<button @click="pushShow(m.id)">push查看</button>
        ------<button @click='replaceShow(m.id)'>replace查看</button>
      </li>
    </ul>
    <button @click='back'>返回</button>
  <hr/>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message:[]
    }
  },
  mounted(){
    //模拟发送请求
    setTimeout(() => {
      const messages=[
        {id:1,title:'n1'},
        {id:5,title:'n5'},
        {id:9,title:'n9'},
      ]
      this.message=messages
    }, 1000);
  },
  methods:{
    pushShow(id){
      //编程式路由导航（跳转）
      // this.$router.push(`/home/message/messagedetail/${id}`);
      this.$router.push({name:'detail',params:{id}});
      
    },
    replaceShow(id){
      //编程式路由导航（跳转）
      // this.$router.replace(`/home/message/messagedetail/${id}`);
      this.$router.replace({name:'detail',params:{id}});
    },
    back(){
      this.$router.back()
    }
  }
}
</script>

<style>

</style>