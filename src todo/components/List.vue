<template>
  <div>
    <ul class="todo-main">
        <Item v-for="(todo,index) in todos" :key='index' 
        :todo='todo' :deleteTodo='deleteTodo' :index='index'
        :updateTodo='updateTodo'
        />
        
    </ul>
  </div>
</template>

<script>
import Item from './item.vue'
export default {
  
  

 components:{
   Item,
 },
//  声明接收属性:属性名 ==>组件对象多了一个todos属性
props:['todos','deleteTodo','updateTodo']
};
</script>

<style  scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>