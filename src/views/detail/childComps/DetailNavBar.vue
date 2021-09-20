<template>
  <nav-bar class="detail-nav">
    <div slot="left" class="detail-nav-left" @click="detailBackClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="detail-nav-center">
      <div v-for="(item, index) in titles" :key="index"
           class="detail-center-item"
           :class="{active: index === currentIndex}"
           @click="detailNavClick(index)">
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    detailBackClick() {
      // this.$router.go(-1)
      this.$router.back()
    },
    detailNavClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.detail-nav-left img {
  vertical-align: middle;
}

.detail-nav-center {
  display: flex;
  font-size: 15px;
}

.detail-center-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}
</style>
