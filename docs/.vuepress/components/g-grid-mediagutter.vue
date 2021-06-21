<template>
  <div>
    <g-row class="demoRow" :gutter="{iphone:'0', ipad:'32', pc:'8'}">
      <g-col span="24" :ipad="{span:'12'}" :pc="{span: '8'}">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="24" :ipad="{span:'12'}" :pc="{span: '8'}">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="24" :ipad="{span:'12'}" :pc="{span: '8'}">
        <div class="demoCol">8</div>
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