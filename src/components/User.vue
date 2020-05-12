<template>
  <div>
    <h1>我是我的</h1>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("组件内进入守卫");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("组件内离开守卫");
    next();
  }
};
</script>

<style>
</style>