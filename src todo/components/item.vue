<template>
  <li :style="{background:bgColor}" @mouseenter='handleEnter(true)' @mouseleave='handleEnter(false)'>
    <label>
      <input type="checkbox" v-model="isComplete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click='deleteItem' >删除</button>
  </li>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  props:{//声明属性的属性名和属性值的类型
    todo:Object,
    // deleteTodo:Function,
    index:Number,
    // updateTodo:Function,
  },

  data(){
    return{
      isShow:false,
      bgColor:'white',
      
    }
  },
  methods:{
    handleEnter(isEnter){
      if(isEnter){
        this.bgColor="blue";
        this.isShow=true;
      }else{
        this.bgColor='white';
        this.isShow=false
      }
    },
    deleteItem(){
      if(window.confirm('确认删除？')){
        // this.deleteTodo(this.index)
        //通过golbalEventBus分发事件
        this.$golbalEventBus.$emit('deleteTodo',this.index)
      }
    },
    

  },
  computed:{
    isComplete:{
      get(){
        return this.todo.completed
      },
      set(value){
        // this.updateTodo(this.todo,value)
        //第一个参数是名称  第二个参数是一个data数据
        PubSub.publish('updateTodo',{todo:this.todo,isCheck:value})
      }
    }
  }
};
</script>

<style  scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li button{
  float: right;
  margin-top: 3px;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
</style>