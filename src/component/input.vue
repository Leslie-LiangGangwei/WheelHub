<template>
  <div class="wrapper" :class="{error: error}">
    <input :value="value"
           :type="type"
           :disabled="disabled"
           :readonly="readonly"
           :placeholder="placeholder"
           @change=$emit('change',$event.target.value)
           @input=$emit('input',$event.target.value)
           @focus=$emit('focus',$event.target.value)
           @blur=$emit('blur',$event.target.value)
    >
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
  props: {
    value: {
      type: [String, Number]
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
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
$border-color-hover: #007AFF;
$border-color-disabled: #bbb;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #F1453D;
$placeholder-color: #ccc;
.wrapper {
  display: inline-flex; align-items: center; justify-content: center;
  :not(:last-child) {margin-right: .5em}
  input {
    height: $height;
    border: 1px solid $border-color; border-radius: $border-radius;
    padding: 0 8px;
    font-size: $font-size;
    &:hover {border: 1px solid $border-color-hover;}
    &:focus {
      box-shadow: $box-shadow-color;
      border-color: $border-color-hover;
      outline: none;
    }
    &:disabled {
      border-color: $border-color-disabled; color: $border-color-disabled;
      cursor: not-allowed;
    }
    &:read-only { border-color: $border-color-disabled; color: $border-color-disabled;}
    &::placeholder {
      color: $placeholder-color;
      font-size: $font-size;
    }
  }
  &.error {
    input {border-color: $red;}
    .icon-error {fill: $red;}
    .errorMessage {color: $red;}
  }
}
</style>