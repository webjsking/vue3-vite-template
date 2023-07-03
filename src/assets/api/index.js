import request from "@/utils/request";


export function init(data){
    return request({
        url:'/api',
        method:'get',
        // data
    })
}