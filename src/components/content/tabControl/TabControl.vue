<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles" :key="index"
      class="tab-item"
      @click="tabItemClick(index)"
    >
      <span :class="{active: index === currentIndex}">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default
        () {
        return []
      }
    }
  },
  methods: {
    tabItemClick(index) {
      this.currentIndex = index
      this.$emit('homeTabClick', index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  background-color: #fff;
  line-height: 44px;
  height: 44px;

}

.tab-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
  padding: 5px;
  border-bottom: 2px solid var(--color-tint);
}

</style>
