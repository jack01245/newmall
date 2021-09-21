<template>
  <div class="toast" v-show="showToast">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  // props: {
  //   message: {
  //     type: String,
  //     default: ''
  //   },
  //   showToast: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  data() {
    return {
      message: '',
      showToast: false
    }
  },
  methods: {
    show(message, duration = 1500) {
      this.showToast = true
      this.message = message
      setTimeout(() => {
        this.showToast = false
        this.message = ''
      }, duration)
    }
  }
}
</script>

<style scoped>
.toast {
  padding: 10px 20px;
  border-radius: 5px;
  background-color: rgba(100, 100, 100, 0.5);
  color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
