<template>
  <div v-if="Object.keys(detailDiscussInfo).length != 0" id="detail-discuss">
    <div class="discuss-top">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="discuss-middle">
      <div class="middle-top">
        <img :src="detailDiscussInfo.user.avatar" alt=""/>
        <span class="uname-title">{{ detailDiscussInfo.user.uname }}</span>
      </div>
      <div class="middle-center">
        <span>{{ detailDiscussInfo.content }}</span>
      </div>
      <div class="middle-bottom">
        <div class="bottom-title">
          <span class="title-data">{{ detailDiscussInfo.created | showDate }}</span>
          <span class="title-size">{{ detailDiscussInfo.style }}</span>
        </div>
        <img :src="item" v-for="(item, index) in detailDiscussInfo.images" :key="index"
             alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "@/common/utils";

export default {
  name: "DetailDiscuss",
  props: {
    detailDiscussInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate: function (value) {
      let data = new Date(value * 1000)
      return formatDate(data, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
#detail-discuss {
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
}

.discuss-top {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  padding-bottom: 20px;
  border-bottom: 5px solid #f2f5f8;
}

.middle-top {
  display: flex;
  margin-top: 15px;
  color: #333;
  align-items: center;
}

.middle-top img {
  width: 12%;
  border-radius: 50%;
  background-color: yellow;
}

.middle-top .uname-title {
  margin-left: 8px;
}

.middle-center {
  margin: 15px 0 10px;
  font-size: 13px;
}

.middle-bottom .bottom-title {
  font-size: 13px;
}

.bottom-title .title-size {
  margin-left: 5px;
}

.middle-bottom img {
  width: 70px;
  height: 70px;
  margin: 10px 0 15px;
}
</style>
