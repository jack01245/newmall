<template>
  <div class="shop-list-item">
    <div class="item-check" @click="checkClick">
      <check-button :is-choose="listItem.checked"></check-button>
    </div>
    <div class="item-img">
      <img :src="listItem.image" alt="">
    </div>
    <div class="item-other">
      <div class="other-title title-style">
        {{ listItem.title }}
      </div>
      <div class="other-desc title-style">{{ listItem.desc }}</div>
      <div class="item-num">
        <div class="title-price">￥{{ listItem.price }}</div>
        <div class="title-counter">{{ listItem.counter }}</div>
      </div>
    </div>
  </div>
</template>

<script>

import CheckButton from "@/components/content/checkButton/CheckButton";

export default {
  name: "ShopCartListItem",
  components: {CheckButton},
  props: {
    listItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      this.listItem.checked = !this.listItem.checked
    }
  }
}
</script>

<style scoped>
.shop-list-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 5px;
  border-bottom: 1px solid #aaa;
}

.item-img {
  flex: 1;
  margin-left: 5px;
}

.item-img img {
  width: 80px;
  height: 100px;
  border-radius: 5px;
}

.item-other {
  overflow: hidden;
  flex: 2;

}

.title-style {
  overflow: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item-other .other-desc {
  margin-top: 15px;
  font-size: 14px;
}

.item-num {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.item-num .title-price {
  position: relative;
  top: -1px;
  font-size: 18px;
  color: red;
}

.item-num .title-counter {
  /*padding-right: 8px;*/
}
</style>
