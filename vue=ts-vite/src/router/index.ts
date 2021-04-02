import {createRouter,createWebHashHistory} from 'vue-router';
//引入组件
import HelloWorld from "../components/HelloWorld.vue"
import Home from "../components/Home.vue"
//配置路由
const router = createRouter({
    //
    history:createWebHashHistory(),
    routes:[
        {path:'/',component:Home},
        {path:'/hello',component:HelloWorld}
    ]
})

export default router

