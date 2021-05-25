<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
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
  created() {
    this.$emit('update:selected', xxx)
  }
}
</script>

<style>
.tabs {

}
</style>