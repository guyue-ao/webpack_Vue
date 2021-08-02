(function (window) {
  // 设置事件总线对象
  const eventBus={}

  eventBus.on=function(msgName,callback){
    let callbacks=eventBus[msgName];
    if(!callbacks){
      callbacks=[];
      eventBus[msgName]=callbacks
    }
    callbacks.push(callback)
    
  
  };
  eventBus.emit=function(msgName,data){
    const callbacks=eventBus[msgName];
    if(callbacks){
      callbacks.forEach(callback => {
        callback(data)
      });
    }
  };
  eventBus.off=function(msgName){
    // const callbacks=eventBus[msgName];
    if(msgName===''){
      return 
    }else{
      delete eventBus[msgName]
    }
  };
  

  
  // 暴露对象
  window.eventBus=eventBus
})(window)