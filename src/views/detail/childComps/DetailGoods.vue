<template>
  <div id="detail-goods">
    <div class="goods-head">
      <div class="head-top"></div>
      <div class="head-center">{{ detailGoodsInfo.desc }}</div>
      <div class="head-bottom"></div>
    </div>
    <div class="goods-between">{{ detailGoodsInfo.key }}</div>
    <div class="goods-body">
      <div v-for="(item, index) in detailGoodsInfo.images" :key="index">
        <img :src="item" alt="" @load="goodsImgLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoods",
  data() {
    return {
      counter: 0
    }
  },
  props: {
    detailGoodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    goodsImgLoad() {
      if (++this.counter == this.detailGoodsInfo.images.length) {
        this.$emit('goodsImgLoad')
      }
    }
  }
}
</script>

<style scoped>
#detail-goods {
  padding: 20px 0;
  font-size: 15px;
  border-bottom: 5px solid #f2f5f8;
}

.goods-head {
  padding: 0 15px;
}

.goods-head .head-top, .head-bottom {
  height: 1px;
  width: 30%;
  background-color: black;
  position: relative;
}

.goods-head .head-top::before, .head-bottom::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.goods-head .head-bottom::after {
  right: 0;
}

.head-top {
  float: left;
}

.head-bottom {
  float: right;
}

.goods-head .head-center {
  padding: 20px 0;
  font-size: 14px;
  line-height: 16px;
}

.goods-between {
  padding: 10px 15px;
  color: #222222;
}

.goods-body {
  /*margin-top: 10px;*/
}

.goods-body img {
  width: 100%;
}
</style>
