<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
      :icon="$attrs.icon"
      :iconPosition="$attrs.iconPosition"
      :loading="$attrs.loading"
      :disabled="$attrs.disabled"
  >
    <g-button-left iconPosition="left" icon="left"></g-button-left>
    <g-button-right iconPosition="right" icon="right"></g-button-right>
  </component>
</template>

<script>
export default {
  data() {
    return {
      dynamicComponent: null,
    };
  },
  mounted() {
    import("../../../src/component/button/button-group").then((module) => {
      this.dynamicComponent = module.default;
    });
  },
};
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