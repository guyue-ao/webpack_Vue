import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

/**
 * 相当于data的对象
 * 包含n个可变的属性数据
 */
const state={
  count:0,//初始化状态数据
};
//一个包含n个用于直接更新状态数据的方法的对象
//mutation方法不要包含异步和逻辑处理
const mutations={
  //增加的方法
  INCREMENT(state){
    state.count++
  },
  DECREMENT(state){
    state.count--
  }
};
//一个包含n个用于间接更新状态数据的方法的对象
//action方法可以包含异步和逻辑处理
const actions={
  increment(context){
    context.commit('INCREMENT');
  },
  decrement({commit}){
    commit('DECREMENT');
  },
  incrementIfOdd({commit,state}){
    if(state.count!=0&&state.count%2===0){
      commit('INCREMENT');
    }
  },
  incrementAsync({commit}){
    setTimeout(() => {
      commit('INCREMENT');
    }, 1000);
  },

};
//一个包含n个基于state数据的getter计算属性的方法的对象
const getters={
  evenOrOdd(state){
    return state.count%2===0? '偶数' : '奇数'
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})