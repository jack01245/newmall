<template>
  <div class="home-feature">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="~assets/img/home/recommend_bg.jpg" alt="" @load="featureImgLoad">
    </a>
  </div>
</template>

<script>
export default {
  name: "HomeFeature",
  data() {
    return {
      isFeatureLoad: false
    }
  },
  methods: {
    featureImgLoad() {
      if (!this.isFeatureLoad) {
        this.isFeatureLoad = true
      }
    }
  }
}
</script>

<style scoped>
.home-feature {
  border-bottom: 10px solid rgba(100, 100, 100, 0.1);
}

.home-feature img {
  width: 100%;
}
</style>
