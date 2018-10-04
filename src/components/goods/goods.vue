//goods物品组件页面组件
<template>
    <div class="goodswraper">
       <div class="nav">
         <ul>
            <li class = 'goodsitem' @click="changmenu(index)" v-for="(item,index) in goods" :key = 'index' :class="currentindex == index ? 'checked' : ''">
              <span class="text" id="text"> <span class="icon" v-show="item.type > -1" :class="classmap[item.type]"></span>{{item.name}}</span>
            </li>
         </ul>

       </div>
       <div class="foods">
         <ul>
           <li v-for="(item , index) in goods" :key="index" class="food-list-hook">
             <h1 class="title">{{item.name}}</h1>
             <ul>
               <li class="foodiitem " v-for="(food , index) in item.foods" :key = 'index'>
                 <div class="foodicon">
                    <img :src="food.icon" alt="">      
                 </div>
                 <div class="foodmessage">
                    <h2 class="foodname">{{food.name}}</h2>
                    <div class="desc">
                       <p v-show="food.description" class="fooddesc">{{food.description}}</p>
                       <span>月销售{{food.sellCount}}分</span>
                       <span>好评率{{food.rating}}%</span>
                    </div>
                    <div class="foodprice">
                        <span class="newprice">￥{{food.price}}</span>
                        <span class="oldprice" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                    </div>

                 </div>
                 <div class="cartwraper">
                  <cartcontrl :food ='food'></cartcontrl>
                 </div>

               </li>
             </ul>
           </li>
         </ul>

       </div>
       <div>
         <shopcart :selectfoods ='selectfood'></shopcart>
       </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
import cartcontrl from "../cartcontrl/cartcontrl";

import shopcart from "../shortcart/shopcart";
export default {
  name: "goods",
  data() {
    return {
      foodsheight: [],
      goods: [],
      scolly: 0,
      classmap: ["decrease", "discount", "special", "guarantee", "invoice"]
    };
  },
  components: {
    shopcart,
    cartcontrl
  },
  computed: {
    currentindex() {
      for (let i = 0; i < this.foodsheight.length; i++) {
        let h1 = this.foodsheight[i];
        let h2 = this.foodsheight[i + 1];
        if (!h2 || (this.scolly >= h1 && this.scolly < h2)) {
          return i;
        }
      }
    },
    selectfood(){
      let arr = []
      this.goods.forEach(item=>{
          item.foods.forEach(food=>{
            if(food.count){
              arr.push(food)
            }
          })
      })
      return arr
    }
  },
  methods: {
    getgoods() {
      this.$axios.get("/goods").then(res => {
        console.log(res.data.data[0]);
        if (res.data.code == 200) {
          this.goods = res.data.data[0].goods;
          this.$nextTick(() => {
            this._initScroll();
            this.getmenueheight();
          });
        }
      });
    },
    //实例滑滚动菜单栏
    _initScroll() {
      const nav = document.querySelector(".nav");
      const foodswraper = document.querySelector(".foods");
      this.navscroll = new BScroll(nav, {
        click: true
      });
      this.foodscroll = new BScroll(foodswraper, {
        click: true,
        /**
         * 1 滚动的时候会派发scroll事件，会截流。
         * 2 滚动的时候实时派发scroll事件，不会截流。
         * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
         */
        probeType: 3
      });
      this.foodscroll.on("scroll", pos => {
        this.scolly = Math.abs(Math.round(pos.y));
      });
    },
    //获取每个分类对应导航栏的高度
    getmenueheight() {
      let heights = 0;
      this.foodsheight.push(heights);
      let foodlist = [...document.getElementsByClassName("food-list-hook")];
      // console.log(foodlist);
      foodlist.forEach((item, index) => {
        heights += item.clientHeight;
        this.foodsheight.push(heights);
      });
      // console.log(this.foodsheight)
    },
    //通过鼠标点击改变食物列表
    changmenu(index) {
      // console.log(index);
      let foodlist = [...document.getElementsByClassName("food-list-hook")];
      let el = foodlist[index];
      // console.log(this.foodscroll);
      this.foodscroll.scrollToElement(el, 500);
    }
  },
  created() {
    this.getgoods();
  }
};
</script>
<style scoped lang='scss'>
//侧边导航栏被选中的样式
.checked {
  color: #3f474e;
  font-size: 14px;
  background-color: #fff;
  #text {
    border: none;
  }
}
.goodswraper {
  width: 100%;
  top: 176px;
  bottom: 46px;
  display: flex;
  overflow: hidden;
  position: absolute;
  // 商品页面导航栏样式
  .nav {
    width: 80px;
    flex: 0 0 80;
    background-color: #f3f5f7;

    .goodsitem {
      line-height: 14px;
      width: 56px;
      height: 54px;
      display: table;
      color: #1e2731;
      font-weight: 200;
      padding: 0 12px;
      .icon {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 2px;
        vertical-align: top;
        background-size: 100%;
      }
      .decrease {
        background-image: url("./decrease_3@2x.png");
      }
      .discount {
        background-image: url("./discount_3@2x.png");
      }
      .guarantee {
        background-image: url("./guarantee_3@2x.png");
      }
      .invoice {
        background-image: url("./invoice_3@2x.png");
      }
      .special {
        background-image: url("./special_3@2x.png");
      }
      .text {
        font-size: 12px;
        width: 56px;

        display: table-cell;
        vertical-align: middle;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      }
    }
  }
  //食物列表如下
  .foods {
    flex: 1;
    .title {
      height: 26px;
      border-left: 2px solid #d9dde1;
      background-color: #f3f5f7;
      font-size: 12px;
      color: rgb(147, 153, 159);
      line-height: 26px;
      padding-left: 14px;
    }
    .foodiitem {
      margin: 18px;
      padding-bottom: 18px;
      font-size: 0px;
      display: flex;
      position: relative;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      .foodicon {
        display: inline-block;
        width: 64px;
        height: 64px;
        border-radius: 2px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .foodmessage {
        margin-left: 10px;

        vertical-align: top;
        .foodname {
          font-size: 14px;
          color: rgb(7, 17, 27);
          line-height: 14px;
          padding-top: 2px;
          padding-bottom: 8px;
        }
        .desc {
          font-size: 10px;
          color: rgb(146, 153, 159);
          line-height: 10px;

          .fooddesc {
            padding-bottom: 8px;
          }
        }
        .foodprice {
          .newprice {
            font-size: 14px;
            color: rgb(240, 20, 20);
            font-weight: 700;
            line-height: 24px;
            margin-right: 8px;
          }
          .oldprice {
            font-size: 10px;
            color: rgb(147, 153, 159);
            font-weight: 700;
            line-height: 24px;
            text-decoration: line-through;
          }
        }
      }
      .cartwraper {
        position: absolute;
        right: 0;
        bottom: 6px;
        width: 72px;
        text-align: right;
      }
    }
  }
}
</style>
















