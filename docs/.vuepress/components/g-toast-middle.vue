<template>
  <div style="margin-left: 16px;">
    <g-button @click="showToast">Middle</g-button>
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
      this.$toast('Middle 弹出 Toast', {
        toastPosition: 'middle'
      })
    }
  }
}
</script>