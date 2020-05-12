<template>
  <div id="app">
    <!-- <router-link :to="/home/+id">首页</router-link> -->
    <!-- <router-link :to="{path:'home', query:{id:id}}">首页</router-link> -->
    <router-link :to="{name:'home', params:{id:id}}">首页</router-link>
    <router-link to="/user">我的</router-link>

    <!-- <button @click="btnClickhome">首页</button>
    <button @click="btnClickuser">我的</button>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      id: "zhangsan"
    };
  },
  methods: {
    btnClickhome() {
      this.$router.push({ path: `/home/${this.id}` });
    },
    btnClickuser() {
      this.$router.push("/user");
    }
  },
  components: {}
};
</script>

<style>
</style>
