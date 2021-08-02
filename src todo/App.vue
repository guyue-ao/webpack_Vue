<template>
 <div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <!--<Header @addTodo='addTodo'/>--> <!-- 给当前Header对象绑定自定义事件监听-->
      <Header ref='header'/> 
      <list 
        :todos='todos' 
        :deleteTodo='deleteTodo' 
        :updateTodo='updateTodo'
      />
      <Footer 
        :todos='todos' 
        :clearCompletedTodos='clearCompletedTodos'  
        :checkAll='checkAll'
      >
      <input type="checkbox" v-model="isCheckAll" slot='left'/>
      <span slot='min'>
        <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
      </span>
      <button class="btn btn-danger" v-show="completeSize>0" @click='clearCompletedTodos' slot="right">清除已完成任务</button>
      
      </Footer>
      
      
    </div>
  </div>
  <!-- <Blogs/> -->
</div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
import Pubsub from 'pubsub-js'
// import Blogs from './components/Blogs.vue'
export default {//配置对象

  data(){
    return{
      todos:[]
    }
  },
   computed:{
    completeSize(){
      return this.todos.reduce((preTotal,todo,index)=>{return preTotal + (todo.completed ? 1 : 0)},0)
    },
    isCheckAll:{
      get(){
      return this.todos.length === this.completeSize && this.completeSize > 0 //读取属性值就会自动调用对应的getter方法
    },
    set(value){
      this.checkAll(value)
    }
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
      todo.completed=isCheck
    }
  },
  beforeDestroy(){//在组件销毁前，移出自定义监听
    this.$refs.header.$off('addTodo');
    this.$golbalEventBus.$off('deleteTodo')
  },
  mounted(){
    //给事件Header绑定事件监听
    this.$refs.header.$on('addTodo',this.addTodo);
    // 通过golbalEventBus来绑定事件监听
    this.$golbalEventBus.$on('deleteTodo',this.deleteTodo)
    
    Pubsub.subscribe('updateTodo', (msg,{todo,isCheck}) =>{
      this.updateTodo(todo,isCheck)
    })
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
  },

 
  
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