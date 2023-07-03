

const store = {
    namespaced:true, //为每个模块添加一个前缀名，保证命名不冲突
    state:{
        count:1,
    },
    mutations:{
        handler(state){
            console.log(state)
        }
    }
}


export default store