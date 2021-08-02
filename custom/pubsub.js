// 定义一个pubsub对象模块
(
  function (window) {
    // 定义pubsub对象
    const PubSub={};
    //用来保存所有待处理的回调函数的容器
    const callbackContainer={};
    // 设置一个token所需的变量
    let id=0;
    PubSub.subscribe=function(msg,callback){
      //读取保存callback的对应小容器
      let callbacks=callbackContainer[msg];
      if(!callbacks){
        callbacks={};
        // callbackContainer[msg]=callbacks={};
        callbackContainer[msg]=callbacks
      };
      const token='uid_'+msg+'_'+(++id)
      //将callback保存到callbacks中
      callbacks[token]=callback;
      //返回token
      return token
    };
    PubSub.publish=function(msg,data){
      const callbacks=callbackContainer[msg];
      if(callbacks){
        //Object.values()这个方法是将一个对象里面的值拿出来组成一个数组
        Object.values(callbacks).forEach(item=>{
          setTimeout(() => {
            item(msg,data);
          });
        })
      }
     
    };
    PubSub.publishSync=function(msg,data){
      const callbacks=callbackContainer[msg];
      if(callbacks){
        //Object.values()这个方法是将一个对象里面的值拿出来组成一个数组
        Object.values(callbacks).forEach(item=>{
          
            item(msg,data);
          });
        
      }
    };
    PubSub.unsubscribe=function(flag){
      if(flag===undefined){
        callbackContainer={}
      }else if(typeof flag==='string' && flag.indexOf('uid_')===0){
        Object.values(callbackContainer).forEach(callbacks=>{
          delete callbacks[flag];
        })
      }else{
        delete callbackContainer[flag]
      }
    };


    // 暴露pubsub对象
    window.PubSub=PubSub;
  }

)(window)