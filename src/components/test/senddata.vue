
//向数据库填充数据
<template>
    <div>
       发送数据
       <p>{{msg}}</p>
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
  methods: {
    sendseller() {
      this.$axios.get("/seller", { id: "11323123" }).then(res => {
        console.log(res.data)
        this.msg = res.data.msg;
      });
    }
  },
  created() {
    this.sendseller();
  }
};
</script>

<style>
</style>

















