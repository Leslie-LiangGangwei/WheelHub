<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex: 1;
}
</style>