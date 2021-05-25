<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabsNav',
  inject: ['eventBus'],
  created: function () {
    const {eventBus} = this;
  }
}
</script>

<style lang="scss" scoped>
.tabs-nav {
  display: flex;
  height: 40px;
  justify-content: flex-start;
  align-items: center;
  .actions {
    margin-left: auto;
  }
}
</style>