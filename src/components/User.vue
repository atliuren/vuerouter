<template>
  <div>
    <h2>我是用户页面</h2>
    <p>我是用户信息，嘿嘿嘿嘿</p>
    <h2>{{$route.params.uid}}</h2>
  </div>
</template>

<script>
export default {
  name: "User"
}
</script>

<style scoped>

</style>
