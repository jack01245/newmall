<template>
  <div id="detail-param">
    <div class="param-size">
      <table class="tb-size">
        <tr v-for="(item, index) in detailParamInfo.pSize" :key="index">
          <td v-for="(sItem, index) in item" :key="index">{{ sItem }}</td>
        </tr>
      </table>
    </div>
    <div class="param-company">
      <table class="tb-company">
        <tr v-for="(item, index) in detailParamInfo.company" :key="index">
          <td class="company-key">{{ item.key }}</td>
          <td class="company-value">{{ item.value }}</td>
        </tr>
      </table>

    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParam",
  props: {
    detailParamInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
#detail-param {
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
}

.tb-size {
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

.tb-size tr {
  display: flex;
  font-size: 14px;
  line-height: 42px;
  text-align: left;
}

.tb-size tr td {
  flex: 1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.tb-company tr {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 42px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.tb-company .company-key {
  width: 20%;
  flex: 1;
}

.tb-company .company-value {
  color: red;
  flex: 2;
  line-height: 14px;
}
</style>
