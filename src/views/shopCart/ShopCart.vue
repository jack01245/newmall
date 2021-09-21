<template>
  <div id="shop-cart">
    <nav-bar class="shop-nav">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <shop-cart-list></shop-cart-list>
    </scroll>
    <shop-cart-bottom></shop-cart-bottom>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";

import {mapGetters} from "vuex"

import ShopCartList from "@/views/shopCart/childComps/ShopCartList";
import ShopCartBottom from "@/views/shopCart/childComps/ShopCartBottom";

export default {
  name: "ShopCart",
  components: {ShopCartList, ShopCartBottom, Scroll, NavBar},
  computed: {
    ...mapGetters(['cartLength'])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
#shop-cart {
  height: 100vh;
  position: relative;
}

.shop-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  position: relative;
  left: 0;
  right: 0;
  height: calc(100% - 44px - 49px - 44px);
  overflow: hidden;

}
</style>
