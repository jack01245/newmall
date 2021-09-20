<template>
  <div class="home-recommend">
    <div v-for="(item,index) in homeRecommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="recommendImgLoad">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    homeRecommend: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isRecommendLoad: false
    }
  },
  methods: {
    recommendImgLoad() {
      if (!this.isRecommendLoad) {
        this.isRecommendLoad = true
      }
    }
  }
}
</script>

<style scoped>
.home-recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0;
  border-bottom: 10px solid #eee;
}

.recommend-item {
  flex: 1;
  padding: 5px;
}

.recommend-item img {
  width: 100%;

}
</style>
