<template>
  <div class="check-button" :class="{check: isChoose}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChoose: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.check-button {
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #aaa;
}

.check {
  background-color: red;
  border: 1px solid red;
}
</style>
