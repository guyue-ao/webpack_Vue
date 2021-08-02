<template>
 <div>
   <p>
     点击了{{count}} 多少次，count 是{{evenOrOdd}}
   </p>
   <button @click='increment'>+</button>
   <button @click='decrement'>-</button>
   <button @click='incrementIfOdd'>increment if odd</button>
   <button @click='incrementAsync'>increment async</button>
 </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'Vuex'
/**
 * 1.state 包含所有的state数据的对象
 * 2.getters 包含所有的getter计算属性的对象
 * 3.dispatch(actionName,data)
 * 4.commit(commitName,data)
 */

export default {

  mounted(){
    console.log(this.$store);
  },
 
 methods:{
  //  increment(){
  //     this.$store.commit('INCREMENT')
  //  },
  //  decrement(){
  //     this.$store.commit('DECREMENT')
     
  //  },
  //  incrementIfOdd(){
  //     this.$store.dispatch('incrementIfOdd')
  //  },
  //  incrementAsync(){
  //    this.$store.dispatch('incrementAsync')
  //  }
  ...mapActions(['incrementIfOdd','incrementAsync']),
  ...mapMutations({
    increment:'INCREMENT',
    decrement:'DECREMENT'
  })
 },
 computed:{
  // count(){
  //   return this.$store.state.count
  // }
  ...mapState(['count']),
  ...mapGetters(['evenOrOdd'])
 }

  
 
  

}
</script>

<style scoped>

</style>