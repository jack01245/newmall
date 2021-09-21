<template>
  <div id="detail-shop">
    <div class="shop-top">
      <img :src="detailShopInfo.logo">
      <span>{{ detailShopInfo.name }}</span>
    </div>
    <div class="shop-center">
      <div class="shop-center-left">
        <div>
          <div class="left-num">{{ detailShopInfo.sells | sellsChange }}</div>
          <div class="left-title">总销量</div>
        </div>
        <div>
          <div class="left-num">{{ detailShopInfo.goods }}</div>
          <div class="left-title">全部宝贝</div>
        </div>
      </div>
      <div class="shop-center-right">
        <table>
          <tr v-for="(item, index) in detailShopInfo.score" :key="index">
            <td class="td-name">{{ item.name }}</td>
            <td class="td-score" :class="{'score-better': item.isBetter}">{{ item.score }}</td>
            <td class="td-title" :class="{'title-better': item.isBetter}">
              <span>{{ item.isBetter ? '高' : '低' }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="bottom-title">
        进店逛逛
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    detailShopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sellsChange: function (value) {
      if (value < 10000) {
        return value
      } else {
        return (value / 10000).toFixed(1) + "万"
      }
    }
  }
}
</script>

<style scoped>
#detail-shop {
  padding: 20px 8px;
  border-bottom: 5px solid #f2f5f8;
}

.shop-top {
  display: flex;
  align-items: center;
}

.shop-top img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(100, 100, 100, 0.3);
  margin-right: 10px;
}

.shop-center {
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
}

.shop-center-left, .shop-center-right {
  flex: 1;
  color: #333;
}

.shop-center .shop-center-left {
  display: flex;
  font-size: 18px;
  border-right: 1px solid rgba(100, 100, 100, 0.5);
}

.shop-center-left div {
  flex: 1;
}

.shop-center-left .left-num {
  line-height: 30px;
}

.shop-center-left .left-title {
  margin-top: 3px;
  font-size: 13px;
}

.shop-center-right table {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 13px;
  margin-left: 25px;
}

.shop-center-right tr {
  display: flex;
  margin: 3px 0;
  align-items: baseline;

}

.td-name {
  flex: 2;
}

.td-score {
  flex: 1;
  text-align: left;
  margin-left: 5px;
  color: #5ea732;
}

.td-title {
  flex: 1;
}

.td-title span {
  background-color: #5ea732;
  color: #fff;
}

.score-better {
  color: #f13e3a;
}

.title-better span {
  background-color: #f13e3a;
}

.shop-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10px;
}

.shop-bottom .bottom-title {
  padding: 5px 40px;
  border-radius: 10px;
  background-color: #f2f5f8;
}
</style>
