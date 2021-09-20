<template>
  <div class="goods-list">
    <goods-list-item
      v-for="(item,index) in goodsList" :key="index"
      :goods-list-item="item"
    >
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  components: {GoodsListItem},
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods-list {
  display: flex;
  justify-content: space-around;
  /*换行*/
  flex-wrap: wrap;
  padding: 2px;
}
</style>
