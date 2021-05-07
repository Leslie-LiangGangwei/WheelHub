<template>
  <div class="wrapper" :class="{error: error}">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <g-icon name="error" class="icon-error"></g-icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'
import Vue from "vue";

Vue.component('g-icon', Icon)
export default {
  name: 'Input',
  components: {Icon},
  props: {
    value: {},
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-color-disabled: #bbb;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #F1453D;
.wrapper {
  display: inline-flex; align-items: center; justify-content: center;
  :not(:last-child) {margin-right: .5em}
  input {
    height: $height;
    border: 1px solid $border-color; border-radius: $border-radius;
    padding: 0 8px;
    font-size: $font-size;
    &:hover {border: 1px solid $border-color-hover;}
    &:focus {box-shadow: $box-shadow-color; outline: none;}
    &:disabled {
      border-color: $border-color-disabled; color: $border-color-disabled;
      cursor: not-allowed;
    }
    &:read-only { border-color: $border-color-disabled; color: $border-color-disabled;}
  }
  &.error {
    input {border-color: $red;}
    .icon-error {fill: $red;}
    .errorMessage {color: $red;}
  }
}
</style>