//封装星星评分组件
<template>
    <div class="star" :class="startype">
        <span class="staritem" v-for='(star_item,index) in stars' :key="index" :class="star_item"></span>
    </div>
</template>
<script>
const starLen = 5;
const star_ON = "on";
const star_HAlF = "half";
const star_OFF = "off";
export default {
  name: "star",
  props: {
    size: {
      type: Number
    },
    course: {
      type: Number
    }
  },
  computed: {
    startype() {
      return "star-" + this.size;
    },
    stars() {
      let arr = [];
      let score = Math.floor(this.course * 2) / 2;
      let haspar = score % 1 != 0;
      let len = Math.floor(score);
      for (let i = 0; i < len; i++) {
        arr.push(star_ON);
      }
      if (haspar) {
        arr.push(star_HAlF);
      }
      while (arr.length < starLen) {
        arr.push(star_OFF);
      }
      return arr;
    }
  }
};
</script>

<style scoped lang='scss'>
.star span:last-child {
  margin-right: none;
}
.star-24 .staritem {
  width: 10px;
  height: 10px;
  display: inline-block;
  margin-right: 3px;
}
.star-24 {
  .on {
    background-image: url("./star24_on@2x.png");
  }
  .half {
    background-image: url("./star24_half@2x.png");
  }
  .off {
    background-image: url("./star24_off@2x.png");
  }
}
.star-36 .staritem {
  width: 15px;
  height: 15px;
  display: inline-block;
  margin-right: 6px;
}
.star-36 {
  .on {
    background-image: url("./star36_on@2x.png");
  }
  .half {
    background-image: url("./star36_half@2x.png");
  }
  .off {
    background-image: url("./star36_off@2x.png");
  }
}
.star-48 .staritem {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 22px;
  background-size: 100%;
}
.star-48 {
  .on {
    background-image: url("./star48_on@2x.png");
  }
  .half {
    background-image: url("./star48_half@2x.png");
  }
  .off {
    background-image: url("./star48_off@2x.png");
  }
}
</style>
