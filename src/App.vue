<!--使用vue-router的步骤
    1.创建路由组件
    2.配置路由映射：组件和路径映射关系
    3.使用路由：通过<router-link>&<router-view>s-->
<template>
  <div id="app">
<!--  属性
      tag标签类型
      replace：页面无法返回
      active-class标签class name-->
<!--    <router-link to="/home" tag="a" replace active-class="active">首页</router-link>-->
    <router-link to="/home" replace>main</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userid">用户</router-link>
    <button @click="mainClick">main</button>
    <button @click="aboutClick">about</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userid: 'liuren'
    }
  },
  methods: {
    mainClick() {
      //this.$router.replace('/home')
      this.$router.push('/home')
    },
    aboutClick() {
      this.$router.push('/about')
    }
  }
}
</script>

<style>
  .active{
    color: #f00;
  }
</style>
