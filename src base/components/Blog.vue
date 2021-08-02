<template>
  <div>
    <li>
      <h2>{{blog.title}}</h2>
    </li>
  </div>
</template>

<script type='text/ecmascript-6'>
// 一个组件对象就是一个的vm
// 组件内回调函数的this是组件对象
// 模板中获取数据读取组件对象的对应值
export default {
  //声明接收属性
  //接收的所有的标签属性都会成为组件对象的属性
  props:[
    'blog'
  ]
  
};
</script>

<style lang="scss" scoped>

</style>