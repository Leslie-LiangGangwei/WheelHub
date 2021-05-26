<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
    <div class="line" ref="lineRef"></div>
  </div>
</template>

<script>
export default {
  name: 'TabsNav',
  inject: ['eventBus'],
  mounted: function () {
    const {eventBus} = this;
    eventBus.$on('update:selected', (name, item) => {
      this.active = name === this.name;
      this.$nextTick(() => {
        let {width, left} = item.$el.getBoundingClientRect();
        this.$refs.lineRef.style.left = `${left}px`
        this.$refs.lineRef.style.width = `${width}px`
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.tabs-nav {
  position: relative;
  display: flex;
  height: 40px;
  justify-content: flex-start;
  border-bottom: 1px solid #ddd;
  .actions {
    margin-left: auto;
  }
  .line {
    position: absolute;
    bottom: 0;
    width: 100px;
    border-bottom: 2px solid #007AFF;
    transition: all 400ms;
  }
}
</style>