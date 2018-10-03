
//向数据库填充数据
<template>
    <div>
       发送数据
       <p>{{msg}}</p>
       <star :size = 48 :course = 4></star>
    </div>
</template>
<script>
export default {
  name: "test",
  data() {
    return {
      msg: ""
    };
  },
  components: {
    star: () => import("../start/start")
  },
  methods: {
    sendseller() {
      this.$axios.get("/seller", { id: "11323123" }).then(res => {
        console.log(res.data);
        this.msg = res.data.msg;
      });
    }
  },
  created() {}
};
</script>

<style>
</style>

















