<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`g-button-group 的子元素只能为 g-button，但是你设置的为 ${name}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: #fff;
$button-hover-bg: #666;
$border-color-active: #eee;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #1C1C1C;
$border-color: #999;
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  .g-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      z-index: 1;
      border-color: $button-hover-bg;
    }
    &:active {
      color: $border-color;
      background: $button-active-bg;
      border-color: $font-size;
      .g-icon {
        fill: $border-color;
      }
    }
  }
}
</style>