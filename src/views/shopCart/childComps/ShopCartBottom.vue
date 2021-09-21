<template>
  <div class="shop-bottom">
    <div class="bottom-left flex-num">
      <check-button :is-choose="isChooseAll" @click.native="allClick"/>
      <span class="left-title">全选</span>
    </div>
    <div class="bottom-center flex-nnum">合计:￥{{ allPrice }}</div>
    <div class="bottom-right flex-num" @click="calcClick">
      <span>去计算({{ countNumber }})</span>
    </div>
  </div>

</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";

import {mapGetters} from "vuex";

export default {
  name: "ShopCartBottom",
  components: {CheckButton},
  computed: {
    ...mapGetters(['cartList']),
    allPrice() {
      // 遍历
      // let price = 0
      // for (let i = 0; i < this.cartList.length; i++) {
      //   if (this.cartList[i].checked) {
      //     price = price + this.cartList[i].price * this.cartList[i].counter
      //   }
      // }
      // return price
      // filter
      return '￥' + this.cartList.filter(item => {
        return item.checked
      }).reduce((price, item) => {
        return price + item.price * item.counter
      }, 0)
    },
    countNumber() {
      // 遍历
      // let count = 0
      // for (let i = 0; i < this.cartList.length; i++) {
      //   if (this.cartList[i].checked) {
      //     count = count + this.cartList[i].counter
      //   }
      // }
      // return count
      // 方法二
      // filter
      return this.cartList.filter(item => {
        return item.checked
      }).reduce((count, item) => {
        return count + item.counter
      }, 0)
    },
    isChooseAll() {
      const chooseNumber = this.cartList.filter(item => {
        return item.checked
      }).length
      return this.cartList.length === chooseNumber
    },
  },
  methods: {
    allClick() {
      // console.log("+++++")
      if (this.isChooseAll) {
        for (let item of this.cartList) {
          item.checked = false
        }
      } else {
        for (let item of this.cartList) {
          item.checked = true
        }
      }
    },
    calcClick() {
      if (this.cartList.filter(item => {
        return item.checked
      }).length == 0) {
        this.$toast.show('请选择购买的商品', 2000)
      }
    }
  }
}
</script>

<style scoped>
.shop-bottom {
  display: flex;
  height: 44px;
  line-height: 44px;
  background-color: #f2f5f8;
  font-size: 15px;
}

.bottom-left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-num {
  flex: 1;
}

.flex-nnum {
  flex: 2;
}

.bottom-right {
  background-color: red;
  text-align: center;
  color: white;
  padding: 0 20px;
}
</style>
