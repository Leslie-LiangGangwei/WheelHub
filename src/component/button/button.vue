<!--suppress ALL -->
<template>
  <button class="g-button" :class=`icon-${iconPosition}` :disabled="disabled"
          @click=$emit('click')
  >
    <g-icon v-if="loading" name='loading' class="loading"></g-icon>
    <g-icon v-if='icon && !loading' :name='icon'></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Vue from 'vue'
import Icon from '../icon'

Vue.component('g-icon', Icon)
export default {
  name: 'Button',
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return !(value !== 'left' && value !== 'right');
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
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
$color: #999;
$border-color: #999;
@keyframes spin {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}

.g-button {
  display: inline-flex;
  justify-content: center; align-items: center; vertical-align: middle;
  font-size: $font-size; height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  outline: none;
  &:hover {
    color: $button-bg; border-color: $button-hover-bg;background: $button-hover-bg;
    .g-icon {fill: $button-bg;}
  }
  &:active {
    color: $border-color; background: $button-active-bg; border-color: $font-size;
    .g-icon {fill: $border-color;}
  }
  &:disabled {
    color: $border-color; background: $button-active-bg; border-color: $font-size;
    .g-icon {fill: $border-color;}
  }
  &.icon-right {
    .content {order: 1;}
    .g-icon {order: 2;margin-left: .2em; margin-right: 0;
    }
  }
  .loading {animation: spin 0.8s infinite linear;}
}
</style>