import {debounce} from "@/common/utils";
import BackTop from "@/components/content/backTop/BackTop";

export const itemImgListenerMixin = {
  data() {
    return {
      itemImgListener: null,//保存监听事件
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('goodsImgLoad', this.itemImgListener)
    // console.log('+++++++++')
  }
}

export const backTopMixin = {
  data() {
    return {
      isBackTop: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 100)
    }
  }
}
