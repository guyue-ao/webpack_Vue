<template>
<div>
  <mt-button style='width:100%' type='primary' @click='test'>
    你好
  </mt-button>
</div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {

  methods:{
    test(){
      Toast({
        message: '提示',
        position: 'bottom',
        duration: 5000
      });
    }
  },
 

  data(){
    return {
      
    }
  },
 
  

}
</script>

<style scoped>

</style>