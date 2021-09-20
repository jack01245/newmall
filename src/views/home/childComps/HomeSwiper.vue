<template>
  <Swiper class="home-swiper">
    <SwiperItem v-for="(item,index) in homeBanners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperImgLoad">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/common/swiper";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      isSwiperLoad: false
    }
  },
  props: {
    homeBanners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    swiperImgLoad() {
      if (!this.isSwiperLoad) {
        this.isSwiperLoad = true
      }
    }
  }
}
</script>

<style scoped>

</style>
