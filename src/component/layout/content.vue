<template>
  <div class="layout-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style lang="scss" scoped>
.layout-content {
  display: flex;
  flex: 1;
}
</style>