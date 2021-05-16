<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex: 1;
}
</style>