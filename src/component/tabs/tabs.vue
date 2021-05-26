<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String,
      require: true
    },
    direction: {
      type: String,
      default: 'row',
      validator(value) {
        return ['row', 'column'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    this.$children.forEach((tabsChild) => {
      if (tabsChild.$options.name === 'TabsNav') {
        tabsChild.$children.forEach((item) => {
          if (item.name === this.selected && item.$options.name === 'TabsItem') {
            this.eventBus.$emit('update:selected', this.selected, item)
          }
        })
      }
    })
  }
}
</script>

<style>
.tabs {

}
</style>