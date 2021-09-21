<template>
  <goods-list>
    <goods-list-item v-for="(item, index) in detailRecommendInfo" :key="index">

    </goods-list-item>
  </goods-list>
</template>

<script>
import GoodsList from "@/components/content/goods/GoodsList";
import GoodsListItem from "@/components/content/goods/GoodsListItem";

export default {
  name: "DetailRecommend",
  components: {GoodsListItem, GoodsList},
  props: {
    detailRecommendInfo: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
