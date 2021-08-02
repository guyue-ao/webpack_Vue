<template>
 <div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo='addTodo'/>
      <list :todos='todos' :deleteTodo='deleteTodo' :updateTodo='updateTodo'/>
      <Footer :todos='todos' :clearCompletedTodos='clearCompletedTodos'  :checkAll='checkAll'/>
      
      
    </div>
  </div>
  <!-- <Blogs/> -->
</div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
// import Blogs from './components/Blogs.vue'
export default {//配置对象

  data(){
    return{
      todos:[
        
      ]
    }
  },

  methods:{
    addTodo(todo){
      this.todos.unshift(todo)
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    },
    clearCompletedTodos(){
      this.todos=this.todos.filter((todo,index)=> !todo.completed)
    },
    checkAll(isCheckAll){
        this.todos.forEach(todo=> todo.completed=isCheckAll)
    },
    updateTodo(todo,isCheck){
      todo.component=isCheck
    }
  },
  mounted(){

    setTimeout(() => {
      this.todos=JSON.parse(localStorage.getItem('todos_key') || '[]')
    }, 10);
  },
  components:{
    
    Header,
    List,
    Footer,
    // Blogs,
  },
  watch:{
    todos:{
      deep:true,//深度监视（本身和内部所有层次的数据）
      handler(value){//value 是最新的todos值
      // 将todos保存到local中
      localStorage.setItem('todos_key',JSON.stringify(value));//里面是一个key  value
        
      }
    }
  }
  
};
</script>


<style scoped>
  .todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>