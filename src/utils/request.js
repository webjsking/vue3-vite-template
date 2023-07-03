import axios from "axios";


async function request(option){
    // 创建axios实例
    
    const server = axios.create({
        baseURL:"",
        url:'',
        method:'GET',
        timeout:6000
    });


    // 请求拦截

    server.interceptors.request.use(config => {
        // 设置请求头信息
        if(option && option.data){
            config.data = option.data
        }

        return config
    })

    // 返回拦截

    server.interceptors.response.use(response => {
        //可以进行返回数据操作

        return response.data
    })

    return server(option)
}



export default request