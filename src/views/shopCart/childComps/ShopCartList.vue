<template>
  <div class="shop-list">
    <shop-cart-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :list-item="item">
    </shop-cart-list-item>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import ShopCartListItem from "@/views/shopCart/childComps/ShopCartListItem";

export default {
  name: "ShopCartList",
  components: {ShopCartListItem},
  computed: {
    ...mapGetters(['cartList'])
  }
}
</script>

<style scoped>

</style>
