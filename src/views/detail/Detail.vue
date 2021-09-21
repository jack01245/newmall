<template>
  <div id="detail">
    <detail-nav-bar ref="detailNavBar" @detailNavClick="detailNavClick" :titles="titles"
                    class="detail-nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base :detail-base-info="detailBaseInfo"></detail-base>
      <detail-shop :detail-shop-info="detailShopInfo"></detail-shop>
      <detail-goods :detail-goods-info="detailGoodsInfo" @goodsImgLoad="goodsImgLoad"></detail-goods>
      <detail-param ref="param" :detail-param-info="detailParamInfo"></detail-param>
      <detail-discuss ref="discuss" :detail-discuss-info="detailDiscussInfo"></detail-discuss>
      <goods-list ref="recommend" :goods-list="detailRecommendInfo"></goods-list>
    </scroll>
    <back-top v-show="isBackTop" @click.native="backTopClick"></back-top>
    <toast :message="message" :show-toast="showToast"></toast>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
//方法
import {
  detailBaseData,
  detailGoodsData,
  detailParamData,
  detailShopData,
  getDetailData,
  getDetailRecommend
} from "@/network/detail";

//公共组件
import Scroll from "@/components/common/scroll/Scroll";
import GoodsList from "@/components/content/goods/GoodsList";
import Toast from "@/components/common/toast/Toast";

//非公共组件
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBase from "@/views/detail/childComps/DetailBase";
import DetailShop from "@/views/detail/childComps/DetailShop";
import DetailGoods from "@/views/detail/childComps/DetailGoods";
import DetailParam from "@/views/detail/childComps/DetailParam";
import DetailDiscuss from "@/views/detail/childComps/DetailDiscuss";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

//方法
// import {debounce} from "@/common/utils";
import {backTopMixin, itemImgListenerMixin} from "@/network/minxi";
import {mapActions} from "vuex";
import {ADD_TO_CART} from "@/store/mutations-type";

export default {
  name: "Detail",
  mixins: [itemImgListenerMixin, backTopMixin],
  components: {
    Toast,
    Scroll,
    GoodsList,
    DetailBase,
    DetailNavBar,
    DetailSwiper,
    DetailShop,
    DetailGoods,
    DetailParam,
    DetailDiscuss,
    DetailBottomBar,
  },
  data() {
    return {
      iid: null,
      titles: ["商品", "参数", "评价", "推荐"],
      topImages: [],
      detailBaseInfo: {},
      detailShopInfo: {},
      detailGoodsInfo: {},
      detailParamInfo: {},
      detailDiscussInfo: {},
      detailRecommendInfo: [],
      // itemImgListener: null//保存监听图片加载事件
      getDetailOffsetTop: [],
      currentIndex: 0,//保存跟随滚动后修改的index
      message: '',
      showToast: false
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetailData(this.iid).then(res => {
      const data = res.result
      // console.log(data)
      //1.获取详情页轮播图图片
      this.topImages = data.itemInfo.topImages
      //2.获取base商品数据
      this.detailBaseInfo = new detailBaseData(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      )
      //3.获取shop商家数据
      this.detailShopInfo = new detailShopData(
        data.shopInfo
      )
      //4.获取goods商品图片展示信息
      this.detailGoodsInfo = new detailGoodsData(
        data.detailInfo
      )
      //5.获取param尺码数据
      this.detailParamInfo = new detailParamData(
        data.itemParams
      )
      //6.获取评论信息
      if (data.rate.cRate !== 0) {
        this.detailDiscussInfo = data.rate.list[0]
      }
    })
    //7.获取推荐数据
    getDetailRecommend().then(res => {
      // console.log(res)
      this.detailRecommendInfo = res.data.list
      // console.log(this.detailRecommendInfo)
    })
  },
  // mounted() {
  //   const refresh = debounce(this.$refs.scroll.refresh, 100)
  //   this.itemImgListener = () => {
  //     refresh()
  //   }
  //   this.$bus.$on('goodsImgLoad', this.itemImgListener)
  // },
  destroyed() {
    //详情页离开的时候就被销毁，不是在deactivated中关闭监听该事件
    this.$bus.$off('goodsImaLoad', this.itemImgListener)
  },
  methods: {
    ...mapActions([ADD_TO_CART]),
    goodsImgLoad() {
      this.$refs.scroll.refresh()
      this.getDetailOffsetTopY()
    },
    getDetailOffsetTopY() {
      this.getDetailOffsetTop.push(0)
      this.getDetailOffsetTop.push(this.$refs.param.$el.offsetTop)
      this.getDetailOffsetTop.push(this.$refs.discuss.$el.offsetTop)
      this.getDetailOffsetTop.push(this.$refs.recommend.$el.offsetTop)
      this.getDetailOffsetTop.push(Number.MAX_VALUE)
      // console.log(this.getDetailOffsetTop)
    },
    detailNavClick(index) {
      this.$refs.scroll.scrollTo(0, -this.getDetailOffsetTop[index], 100)
    },
    contentScroll(position) {
      for (let i = 0; i < this.getDetailOffsetTop.length - 1; i++) {
        // console.log(position)
        if (this.currentIndex != i && -position.y > this.getDetailOffsetTop[i] && -position.y < this.getDetailOffsetTop[i + 1]) {
          this.currentIndex = i
          this.$refs.detailNavBar.currentIndex = i
          // console.log(this.currentIndex)
        }
      }
      this.isBackTop = -position.y > 1000
    },
    addToCart() {
      //1.获取购物车需要的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.detailBaseInfo.title
      product.desc = this.detailGoodsInfo.desc
      product.price = this.detailBaseInfo.realPrice
      product.iid = this.iid
      // this.$store.commit('addToCart', product)
      this.$store.dispatch(ADD_TO_CART, product).then(res => {
        // this.showToast = true
        // this.message = res
        // setTimeout(() => {
        //   this.showToast = false
        //   this.message = ''
        // }, 2000)
        this.$toast.show(res)
      })
      //mapActions形式
      // this.addToCart(product).then(res => {
      //   console.log(res)
      //   this.showToast = true
      //   this.message = res
      //   setTimeout(() => {
      //     this.showToast = false
      //     this.message = ''
      //   }, 2000)
      // })
    }
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
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>
