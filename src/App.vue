<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/user">我的</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
</style>
