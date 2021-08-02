<template>
<div>
  <p v-if="!repName">loding....</p>
  <p v-else>
    根据要求：
    <a :href="repUrl">{{repName}}</a>
  </p>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      repName:"",
      repUrl:""
    }
  },

  mounted(){
    axios.get(`https://api.github.com/search/repositories`,{
      params:{
        q:'v',
        sort:'stars'
      }
    })
    .then(response=>{
      const result=response.data;
      const {name,html_url}=result.items[0];
      this.repName=name;
      this.repUrl=html_url;
    })
    .catch(error=>{
      console.log(error.message);
    })
  }

}
</script>

<style scoped>

</style>>

</style>