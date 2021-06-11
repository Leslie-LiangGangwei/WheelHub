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
    },
    selected: {
      type: Array,
      default: []
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    let {eventBus} = this
    let selectedCopy = JSON.parse(JSON.stringify(this.selected))
    eventBus.$emit('update:selected', this.selected)
    eventBus.$on('update:addSelected', (name) => {
      if (this.single) {
        selectedCopy = [name]
      } else {
        selectedCopy.push(name)
      }
      eventBus.$emit('update:selected', selectedCopy)
      this.$emit('update:selected', selectedCopy)
    })
    eventBus.$on('update:removeSelected', (name) => {
      let index = name.indexOf(selectedCopy)
      selectedCopy.splice(index, 1)
      eventBus.$emit('update:selected', selectedCopy)
      this.$emit('update:selected', selectedCopy)
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