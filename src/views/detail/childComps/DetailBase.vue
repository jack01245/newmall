<template>
  <div v-if="Object.keys(detailBaseInfo).length != 0" class="detail-base">
    <div class="base-title">
      {{ detailBaseInfo.title }}
    </div>
    <div class="base-price">
      <span class="new-price">{{ detailBaseInfo.price }}</span>
      <span class="old-price">{{ detailBaseInfo.oldPrice }}</span>
      <span class="base-discount"
            :style="{backgroundColor: detailBaseInfo.discountBgColor}">{{ detailBaseInfo.discountDesc }}</span>
    </div>
    <div class="base-number">
      <span>{{ detailBaseInfo.columns[0] }}</span>
      <span>{{ detailBaseInfo.columns[1] }}</span>
      <span>{{ detailBaseInfo.services[detailBaseInfo.services.length - 1].name }}</span>
    </div>
    <div class="base-other">
      <div v-for="item in detailBaseInfo.services.length - 1 ">
        <img :src="detailBaseInfo.services[item - 1].icon" alt="">
        <span>{{ detailBaseInfo.services[item - 1].name }}</span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "DetailBase",
  props: {
    detailBaseInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-base {
  padding: 15px 8px 0;
  color: black;
  border-bottom: 5px solid #f2f5f8;
}

.base-title {
  color: #222;
  line-height: 1.15;
}

.base-price {
  margin-top: 10px;
  color: #999;
}

.base-price .new-price {
  font-size: 24px;
  color: var(--color-high-text);
}

.base-price .old-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;

}

.base-discount {
  padding: 2px 5px;
  border-radius: 10px;
  color: white;
  font-size: 12px;
  position: relative;
  left: 5px;
  bottom: 10px;
}

.base-number {
  color: #999;
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  font-size: 13px;
  margin-top: 14px;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
}

.base-other {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  font-size: 13px;
}

.base-other img {
  width: 14px;
  position: relative;
  top: 2px;
}
</style>
