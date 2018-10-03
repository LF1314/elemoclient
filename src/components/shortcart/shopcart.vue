//购物车组件
<template>
    <div class="shopwraper">
        <div class="content">
            <!-- 购物车左边区块 -->
            <div class="leftwraper">
              <!-- logo区块 -->
              <div class="logowraper">
                  <div class="logo">
                     <span class="icon-shopping_cart"></span>
                  </div>
              </div>
              <!-- 食物总价区块 -->
              <div class="sumprice">
                  <span>￥0</span>
              </div>
              <!-- 描述区块 -->
              <div class="shopdesc">
                
              </div>
            </div>
            <!-- 购物车右边区块 -->
            <div class="rightwraper">
                    
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "shopcart"
};
</script>
<style scoped lang='scss'>
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
    .rightwraper {
      flex: 0 0 105px;
      width: 105px;
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
    .logo {
      width: 100%;
      height: 100%;
      line-height: 50px;
      text-align: center;
      border-radius: 50%;
      background-color: #2b343c;
      .icon-shopping_cart {
        font-size: 24px;
        line-height: 24px;
        color: #80858a;
      }
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
    font-size: 24px;

    box-sizing: border-box;
    vertical-align: top;
    color: #80858a;
  }
  //   商店描述如下
  .shopdesc {
    display: inline-block;
  }
}
</style>
