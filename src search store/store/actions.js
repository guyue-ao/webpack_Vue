// 一个包含n个用于间接更新状态数据的方法的对象模块
// 可以包含异步和逻辑代码
import axios from 'axios'
export default {
  async search({commit},searchName){
    //发请求前
    commit('REQUESTING')
    try {
          
        
  //发异步ajax请求，获取用户列表数据
      const response=await axios.get(`https://api.github.com/search/users`,{params:{
      q:searchName
    }})
    //如果成功
    const result=response.data;
      const users=result.items.map(item=>({
        username:item.login,
        url:item.html_url,
        avatar_url:item.avatar_url
      }))


      commit('REQ_SUCCESS',users)
      } 
      catch (error) {//如果失败
      commit('REQ_ERROR',err.message)
    }
      
  }
}