<template>
  <div>
    <g-button @click="showToast">enableHtml</g-button>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.toast {
  z-index: 30 !important;
}
</style>

<script>
import Vue from 'vue'
import plugin from '../../../src/component/toastPlugin'
import GButton from '../../../src/component/button/button'

Vue.use(plugin)

export default {
  components: {GButton},
  methods: {
    showToast() {
      this.$toast('<strong>我是 Toast</strong>', {
        enableHtml: true
      })
    }
  }
}
</script>