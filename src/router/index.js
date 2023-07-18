import { createRouter,createWebHashHistory } from "vue-router";

// const routes = [
//     {
//         path:'/',
//         component: () => import('@/views/index.vue')
//     }
// ]

const routeFiles = import.meta.glob('@/views/**/index.vue')

const routes = []

for(let k in routeFiles){
    let list = k.replace('../views','').replace('/index.vue')
    list === '' ? list = '/' : list
    routes.push({
        path:list,
        name:list==='/'?'index':list.replace('/',''),
        children:[],
        component:routeFiles[k]
    })
}

const router = createRouter({
    history:createWebHashHistory(),
    routes
})


export default router