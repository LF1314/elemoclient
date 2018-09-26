<template>
  <div id="app">
  <div>
   <v_header :seller = 'seller'></v_header>
  </div>
   <div class="tabar">
      <div class="tab-item"><router-link to="/goods">商品 </router-link></div>
      <div class="tab-item"><router-link to="/ratings">评价</router-link></div>
      <div class="tab-item"> <router-link to="/seller">商家</router-link></div>
   </div>
   <div>
     <router-view></router-view>
   </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      seller: {}
    };
  },
  components: {
    v_header: () => import("./components/header/header")
  },
  created() {
    this.$axios.get("/seller").then(res => {
      console.log(res.data.data);
      this.seller = res.data.data;
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.tabar {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.tab-item {
  flex: 1;
  height: 100%;
  text-align: center;
}
.tab-item a {
  display: block;
  font-size: 14px;
  color: rgb(77, 85, 93);
}
.tab-item a:active {
  color: rgb(240, 20, 20);
}
.tabar {
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
</style>
