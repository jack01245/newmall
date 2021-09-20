<template>
  <div class="goods-list-item" @click="goodsItemClick">
    <img :src="goodsListItem.show.img" alt="" @load="goodsImgLoad">
    <div class="goods-title">
      <p>{{ goodsListItem.title }}</p>
      <span class="price">{{ goodsListItem.price }}</span>
      <span class="collect">{{ goodsListItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsListItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    goodsImgLoad() {
      this.$bus.$emit('goodsImgLoad')
    },
    goodsItemClick() {
      this.$router.push('/detail/' + this.goodsListItem.iid)
    }
  }
}
</script>

<style scoped>
.goods-list-item {
  width: 48%;
  margin-top: 2px;
}

.goods-list-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-title {
  text-align: center;
  font-size: 12px;

}

.goods-title p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 3px 0;
}


.goods-title .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-title .collect {
  position: relative;
}

.goods-title .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
