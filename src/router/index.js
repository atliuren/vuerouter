import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";

//1.通过Vue.use(插件)，安装插件
Vue.use(Router)

//创建Router对象
export default new Router({
  //配置路由和组件之间的应用关系
  routes: [
    {
      path: '',
      //页面重定向
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/user/:uid',
      component: User
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})
//把router对象传到VUe中挂载
