//购物车组件
<template>
    <div class="shopwraper">
        <div class="content">
            <!-- 购物车左边区块 -->
            <div class="leftwraper">
              <!-- logo区块 -->
              <div class="logowraper">
                  <div class="logocomm" :class="totalcount>0 ? 'logoloding' : 'logo' ">
                     <span class="icon-shopping_cart"></span>
                  </div>
                  <div class="totalcount" v-show="totalcount>0">
                    {{totalcount}}
                  </div>
              </div>
              <!-- 食物总价区块 -->
              <div class="sumprice" :class="totalcount>0 ? 'totalpriceheight' : ''">
                  <span>￥{{totals}}</span>
              </div>
              <!-- 描述区块 -->
              <div class="shopdesc">
                另需配送费￥{{Distributionfee}}元
              </div>
            </div>
            <!-- 购物车右边区块 -->
            <div class="rightcom" :class="minpricer > totals ? 'rightwraper' : 'rightloding'"> 
             {{totaldesc}} 
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "shopcart",
  props: {
    selectfoods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      Distributionfee: 0,
      minpricer: 0
    };
  },

  computed: {
    //计算食物总价
    totals() {
      let total = 0;
      this.selectfoods.forEach(element => {
        total += element.price * element.count;
      });
      return total;
    },
    //计算商品总和
    totalcount() {
      let count = 0;
      this.selectfoods.forEach(food => {
        count += food.count;
      });
      return count;
    },
    //需要付款金额的描述如下
    totaldesc() {
      if (this.totals === 0) {
        return `￥${this.minpricer}起送`;
      } else if (this.totals < this.minpricer) {
        return `还差￥${this.minpricer - this.totals}起送`;
      } else {
        return "去结算";
      }
    }
  },
  //获取商家信息；
  methods: {
    getseller() {
      this.$axios.get("/seller").then(res => {
        console.log(res.data.data);
        this.Distributionfee = res.data.data.deliveryPrice;
        this.minpricer = res.data.data.minPrice;
      });
    }
  },
  created() {
    this.getseller();
  }
};
</script>
<style scoped lang='scss'>
//购物车里有食物时候的样式

.shopwraper {
  position: fixed;
  height: 46px;
  z-index: 50;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #141d27;
  .content {
    display: flex;
    .leftwraper {
      flex: 1;
    }
    .rightcom {
      flex: 0 0 105px;
      width: 105px;
      font-size: 15px;
      font-weight: 700;
      line-height: 24px;
      vertical-align: top;
      padding: 12px 8px;
      text-align: center;
    }
    .rightwraper {
      color: rgba(255, 255, 255, 0.4);
      background-color: #2b333b;
    }
    .rightloding {
      color: #fff;
      background-color: rgb(0, 160, 220);
    }
  }
}
// 左边区块样式
.leftwraper {
  .logowraper {
    display: inline-block;
    height: 56px;
    width: 56px;
    padding: 6px;
    box-sizing: border-box;
    position: relative;
    top: -10px;
    margin: 0 12px;
    background-color: #141d27;
    border-radius: 50%;
    .logocomm {
      width: 100%;
      height: 100%;
      line-height: 50px;
      text-align: center;
      border-radius: 50%;
      .icon-shopping_cart {
        font-size: 24px;
        line-height: 24px;
      }
    }
    .logo {
      background-color: #2b343c;
      .icon-shopping_cart {
        color: #80858a;
      }
    }
    .logoloding {
      background-color: rgb(0, 160, 220);
      .icon-shopping_cart {
        color: #fff;
      }
    }
    .totalcount {
      position: absolute;
      right: 0px;
      top: 0;
      width: 24px;
      height: 16px;
      line-height: 16px;
      text-align: center;
      font-size: 9px;
      color: #fff;
      background-color: rgb(240, 20, 20);
      border-radius: 10px;
      font-weight: 700;
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.4);
    }
  }
  //   价格总和区块如下
  .sumprice {
    display: inline-block;
    padding-right: 11px;
    margin-top: 12px;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    font-weight: 700;
    line-height: 24px;
    font-size: 16px;
    box-sizing: border-box;
    vertical-align: top;
    color: rgba(255, 255, 255, 0.4);
  }
  .totalpriceheight {
    color: #fff;
  }
  //   商店描述如下
  .shopdesc {
    display: inline-block;
    margin: 12px 0 0 12px;
    vertical-align: top;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.4);
    line-height: 24px;
  }
}
</style>
