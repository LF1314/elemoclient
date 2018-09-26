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

    <div class="counts"  v-if="seller.supports">
 
        <span>{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
     
    </div>
  
  </div> 
    <div class="noticewraper">
    <span class="noticeicon"></span>
    <span class="contenttext">{{seller.bulletin}}</span>
    <span class="icon-keyboard_arrow_right"></span>
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
      classmap: ["decrease", "discount", "guarantee", "invoice", "special"]
    };
  }
};
</script>

<style scoped>
.inner {
  background-color: rgba(7, 17, 27, 0.5);
}
.contentWraper {
  padding: 24px 12px 18px 24px;
  display: flex;
  font-size: 0;

  position: relative;
}
.noticewraper {
  height: 28px;
  line-height: 28px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 20px;
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
