const demoMethods=[]
//jest 环境下的初始化设值 进行类型声明 自定义方法
demoMethods.forEach(item=>{
  document(item)=()=>{}
  HTMLElement.prototype[item]=()=>{}
})

