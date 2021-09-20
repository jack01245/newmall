<template>
  <div id="home">
    <nav-bar class="home-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @homeTabClick="homeTabClick"
      v-show="isTabControl"
      ref="tabControl1"></tab-control>
    <scroll class="content" ref="scroll"
            :probe-type="3" @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore"
    >
      <home-swiper :home-banners="homeBanners" ref="homeSwiper"></home-swiper>
      <home-recommend :home-recommend="homeRecommend" ref="homeRecommend"></home-recommend>
      <home-feature ref="homeFeature"></home-feature>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @homeTabClick="homeTabClick"
        ref="tabControl2"></tab-control>
      <goods-list :goods-list="showGoods"></goods-list>
    </scroll>
    <back-top v-show="isBackTop" @click.native="backTopClick"></back-top>
  </div>
</template>

<script>
//方法
import {getGoodsData, getHomeDate} from "@/network/home";
import {debounce} from "@/common/utils";
//公共组件
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
//公共业务组件
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
//非公共组件
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "@/views/home/childComps/HomeRecommend";
import HomeFeature from "@/views/home/childComps/HomeFeature";
import BackTop from "@/components/content/backTop/BackTop";


export default {
  name: "Home",
  components: {
    BackTop,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
  },
  data() {
    return {
      homeBanners: [],
      homeRecommend: [],
      goodsList: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      goodsListType: 'pop',
      isBackTop: false,
      isTabControl: false,
      isTabOffsetTop: 0,
      saveY: 0
    }
  },
  computed: {
    showGoods() {
      return this.goodsList[this.goodsListType].list;
    }
  },
  created() {
    //1.请求首页轮播图等数据
    this.getHomeDate()
    //2.请求首页商品数据
    this.getGoodsData('pop')
    this.getGoodsData('new')
    this.getGoodsData('sell')
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    //6.监听goodsListItem的图片加载
    this.$bus.$on('goodsImgLoad', () => {
      refresh()
    })
  },
  updated() {
    //7.监听首页轮播图等图片的加载后，保存tabControl的高度
    if (!this.isTabOffsetTop) {
      if (this.$refs.homeSwiper.isSwiperLoad && this.$refs.homeRecommend.isRecommendLoad && this.$refs.homeFeature.isFeatureLoad) {
        // console.log(this.isTabOffsetTop)
        this.isTabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        // console.log(this.isTabOffsetTop)
      }
    }
  },
  methods: {
    //请求数据
    //1.请求首页轮播图等数据
    getHomeDate() {
      getHomeDate().then(res => {
        // console.log(res)
        this.homeBanners = res.data.banner.list
        // console.log(this.homeBanners)
        this.homeRecommend = res.data.recommend.list
        // console.log(this.homeRecommend)
      })
    },
    //2.请求首页商品数据
    getGoodsData(type) {
      const page = this.goodsList[type].page + 1
      getGoodsData(type, page).then(res => {
        let data = res.data
        this.goodsList[type].list.push(...data.list)
        this.goodsList[type].page += 1
      })
    },
    //事件监听
    //3.点击tabControl切换数据
    homeTabClick(index) {
      switch (index) {
        case 0:
          this.goodsListType = 'pop'
          break
        case 1:
          this.goodsListType = 'new'
          break
        case 2:
          this.goodsListType = 'sell'
          break
      }
      //实现两个tabControl的选取同步、
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    //4.监听backTop的点击
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 100)
    },
    //5.监听滚动
    contentScroll(position) {
      //4.1判断backTop的出现
      this.isBackTop = -position.y > 1000
      //4.2判断tabControl的停留效果
      this.isTabControl = -position.y > this.isTabOffsetTop
    },
    //7.上拉加载更多
    loadMore() {
      this.getGoodsData(this.goodsListType)
      //完成本次上拉加载更多
      this.$refs.scroll.finishPullUp()
    }
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
}

.home-bar {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}

.tab-control {
  position: relative;
  z-index: 9;
}
</style>
