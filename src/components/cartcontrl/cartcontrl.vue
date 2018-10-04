//添加到放购物测的控制组件
<template>
    <div class="cartwraper">
        <div class="common cartdel icon-remove_circle_outline" @click="cartdel" :class='food.count ? "active" : ""' >
        </div>
        <div class="cartcount common" v-show="food.count" >
           {{food.count}}
        </div>
        <div class="common cartadd icon-add_circle" @click="cartadd">
        </div>

    </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "cartcontrl",
  props: {
    food: {
      type: Object
    }
  },
  created() {},
  methods: {
    //添加食物
    cartadd() {
      if (!this.food.count) {
        Vue.set(this.food, "count", 1);
      } else {
        this.food.count++;
      }
    },
    //减少食物
    cartdel() {
      if (this.food.count) {
        this.food.count--;
      }
    }
  }
};
</script>


<style scoped lang = 'scss'>
//添加动画效果

.cartwraper {
  font-size: 0px;
  .cartdel {
    font-size: 24px;
    line-height: 24px;
    position: relative;
    right: -24px;
    opacity: 0;
    transform: rotate(0);
    transition: all 0.5s linear;
  }
  .active {
    opacity: 1;
    right: 0;
    transform: rotate(180deg);
  }
  .cartcount {
    color: rgb(147, 153, 159);
    font-size: 10px;
    text-align: center;
    padding: 0;
    line-height: 24px;
  }
  .cartadd {
    position: relative;
    font-size: 24px;
    z-index: 222;
  }
  .common {
    width: 24px;
    display: inline-block;
    line-height: 24px;
    color: rgb(0, 160, 220);
    box-sizing: border-box;
    vertical-align: top;
  }
}
</style>
