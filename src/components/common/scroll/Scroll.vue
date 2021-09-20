<template>
  <div class="warpper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 1,
    },
    click: {
      type: Boolean,
      default: true,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    },
  },
  mounted() {
    //1.创建实例
    this.scroll = new BScroll('.warpper', {
      probeType: this.probeType,
      click: this.click,
      pullUpLoad: this.pullUpLoad,
    })
    //2.监听滚动位置
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on('scroll', (position) => {
        // console.log(position)
        this.$emit('scroll', position)
      })
    }
    //3.监听scroll滑动到底部，下拉
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        // console.log('aaaaaaa')
        this.$emit('pullingUp')
      })
    }
  },
}
</script>

<style scoped></style>
