<template>
  <div id="detail">
    <detail-nav-bar :titles="titles" class="detail-nav"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base :detail-base-info="detailBaseInfo"></detail-base>
    </scroll>

  </div>
</template>

<script>
//方法
import {detailBaseData, getDetailData,} from "@/network/detail";
//公共组件
import Scroll from "@/components/common/scroll/Scroll";
//非公共组件
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBase from "@/views/detail/childComps/DetailBase";


export default {
  name: "Detail",
  components: {
    Scroll,
    DetailBase,
    DetailNavBar,
    DetailSwiper,
  },
  data() {
    return {
      iid: null,
      titles: ["商品", "参数", "评价", "推荐"],
      topImages: [],
      detailBaseInfo: {}
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetailData(this.iid).then(res => {
      const data = res.result
      console.log(data)
      //1.获取详情页轮播图图片
      this.topImages = data.itemInfo.topImages
      //2.获取base商品数据
      this.detailBaseInfo = new detailBaseData(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      )
      //3.获取shop商家数据

    })
  }
}
</script>

<style scoped>
#detail {
  height: 100vh;
}

.content {
  position: relative;
  left: 0;
  right: 0;
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>
