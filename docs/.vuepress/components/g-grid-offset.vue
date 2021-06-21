<template>
  <div>
    <g-row class="demoRow">
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4" offset="4">
        <div class="demoCol">span="4" offset="4"</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4" offset="4">
        <div class="demoCol">span="4" offset="4"</div>
      </g-col>
      <g-col span="4" offset="4">
        <div class="demoCol">span="4" offset="4"</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4" offset="4">
        <div class="demoCol">span="4" offset="4"</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
    </g-row>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.demoRow {
  margin: 10px 0;
}

.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script>
import GRow from '../../../src/component/grid/row'
import GCol from '../../../src/component/grid/col'

export default {
  components: {GRow, GCol},
  data() {
    return {}
  }
}
</script>