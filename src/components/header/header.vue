<template>
<div>
<div class="inner">
  <div class="contentWraper">
    <div class="avatar">
      <img :src="seller.avatar" width="64" height="64" alt="">
    </div>
    <div class="namewraper">
       <div class="name">
         <span class="prond"></span>
         <span >{{seller.name}}</span>
       </div>
       <div class="description">
         {{seller.description}}/{{seller.deliveryTime}}分钟送达
       </div>
       <div class="supports" v-if="seller.supports">
         <span class="icon" :class="classmap[seller.supports[0].type]"></span>
         <span class="sup">
           {{seller.supports[0].description}}
         </span>
       </div>
    </div>

    <div class="counts" @click="changeshowdetail" v-if="seller.supports">
        <span>{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
     
    </div>
  
  </div> 
   <div class="noticewraper">
    <span class="bulletin"></span>
    <span class="contenttext">{{seller.bulletin}}</span>
    <span @click="changeshowdetail" class="icon-keyboard_arrow_right iconright"></span>
  </div>
   <div class="background">
       <img :src="seller.avatar" width="100%" height="100%" alt="">
   </div>

       <div class="detailwraepr" :class="showdetail ? 'dis': '' " > 
        <div class="detailwrapr">
          <div class="detailmain">
              <div class="detailname">{{seller.name}}</div>
              <div class="start">
                <star :size=48 :course='seller.score'>
                </star>
              </div>
              <div class="detailtitle">
                <div class="line"></div>
                <div class="text">优惠信息</div>
                <div class="line"></div>
              </div>
              <div  class="detailsupport" >
                 <ul v-if="seller.supports">
                   <li v-for="(sell,index) in seller.supports" :key = 'index'>
                     <span class="itemicon" :class="classmap[sell.type]"></span>
                     <span>{{sell.description}}</span>
                   </li>
                 </ul>
              </div>
               <div class="detailtitle">
                <div class="line"></div>
                <div class="text">商家公告</div>
                <div class="line"></div>
              </div>
              <div class="detailcontent">
                <span>
                  {{seller.bulletin}}
                </span>
              </div>
          </div>
        </div>
        <div class="detailclose">
           <i class="icon-close" @click="changeshowdetail"></i>
        </div>
   </div>


</div>
</div>
    
</template>
<script>
export default {
  name: "headers",
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      showdetail: false,
      classmap: ["decrease", "discount", "guarantee", "invoice", "special"]
    };
  },
  methods: {
    changeshowdetail() {
      this.showdetail = !this.showdetail;
    }
  },
  components: {
    star: () => import("../start/start")
  }
};
</script>

<style scoped lang='scss'>
//商家公告信息
.detailcontent {
  margin-top: 24px;
  span {
    font-size: 12px;
    line-height: 24px;
    font-weight: 200;
    color: #fff;
  }
}
.detailsupport {
  margin-top: 24px;
  font-size: 0;
  .itemicon {
    display: inline-block;
    height: 16px;
    width: 16px;
    vertical-align: top;
    position: relative;
    top: -2px;
    margin-right: 6px;
    background-size: 16px 16px;
  }
  li {
    margin-top: 12px;
    color: #fff;
    font-weight: 200;
    font-size: 12px;
    line-height: 12px;
  }
}
.start {
  margin-top: 16px;
  margin: 16px auto 0;
  text-align: center;
}
// 优惠信息css样式
.detailtitle {
  display: flex;
  margin-top: 28px;
  .line {
    flex: 1;
    position: relative;
    top: 6px;
    height: 1px;
    background-color: rgba(225, 255, 255, 0.2);
  }
  .text {
    font-size: 14px;
    color: #fff;
    font-weight: 700;
    padding: 0 12px;
  }
}
.detailwrapr {
  min-height: 100%;
  width: 100%;
}
.detailname {
  font-size: 16px;
  font-weight: 700px;
  color: #fff;
  line-height: 16px;
  font-weight: 700;
  height: 16px;
  text-align: center;
}
.detailmain {
  padding: 64px 36px 64px;
}
.detailclose {
  position: relative;
  margin-top: -64px;
  font-size: 32px;
  height: 32px;
  line-height: 32px;
}
.detailclose i {
  display: block;
  width: 32px;
  height: 100%;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.5);
}
.detailwraepr {
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 100;
  transition: all 0.5s linear;
  background-color: rgba(7, 17, 27, 0.8);
}
.dis {
  top: 0;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(8px);
}
.inner {
  overflow: hidden;
  position: relative;
  background-color: rgba(7, 17, 27, 0.5);
}
.iconright {
  font-size: 10px;
  margin: 0 12px 0 4px;
  width: 12px;
  height: 12px;
  display: inline-block;
  position: absolute;
  right: -9px;
  top: 10px;
  color: #fff;
}
.contentWraper {
  padding: 24px 12px 18px 24px;
  display: flex;
  font-size: 0;
  position: relative;
}
.bulletin {
  width: 22px;
  height: 12px;
  display: inline-block;
  background-size: 100%;
  line-height: 28px;
  position: absolute;
  left: 10px;
  top: 8px;
  background-image: url("./bulletin@2x.png");
}
.noticewraper {
  position: relative;
  line-height: 28px;
  height: 28px;
  line-height: 28px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0px;
  padding: 0 28px 0 38px;
  background-color: rgba(7, 17, 27, 0.2);
}
.contenttext {
  font-size: 10px;
  color: #fff;
  display: inline-block;
}
.counts {
  position: absolute;
  width: 50px;
  height: 24px;
  border-radius: 18px;
  color: #fff;
  right: 20px;
  top: 50px;
  font-size: 14px;
  line-height: 24px;
  padding: 7px 8px 7px;
  text-align: center;

  background-color: rgba(0, 0, 0, 0.2);
}
.counts i {
  display: inline-block;
  width: 12px;
  height: 24px;
  line-height: 24px;
  vertical-align: top;
  font-size: 17px;
}
.avatar img {
  border-radius: 2px;
}
.namewraper {
  margin-left: 16px;
  padding: 2px 0 2px;
}
.name {
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  line-height: 18px;
  height: 16px;
}
.description {
  font-size: 12px;
  color: #fff;
  font-weight: 200;
  line-height: 24px;
  height: 24px;
  margin-top: 4px;
}
.supports {
  font-size: 10px;
  color: #fff;
  font-weight: 200;
  height: 12px;
  margin-top: 5px;
}
.prond {
  display: inline-block;
  width: 30px;
  height: 18px;
  background-image: url("./brand@2x.png");
  background-size: 100%;
  vertical-align: top;
}
.icon {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-size: 100%;
  vertical-align: top;
}
.decrease {
  background-image: url("./decrease_1@2x.png");
}
.discount {
  background-image: url("./discount_3@2x.png");
}
.guarantee {
  background-image: url("./guarantee_1@2x.png");
}
.invoice {
  background-image: url("./invoice_1@2x.png");
}
.special {
  background-image: url("./special_1@2x.png");
}
</style>
