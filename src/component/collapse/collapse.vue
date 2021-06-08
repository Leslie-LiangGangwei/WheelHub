<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "Collapse",
  data() {
    return {
      eventBus: new Vue()
    }
  },
  props: {
    single: {
      type: Boolean,
      default: false
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.single = this.single
    })
  }
}
</script>

<style scoped lang="scss">
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>