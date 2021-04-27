<!--suppress ALL -->
<template>
  <button class="g-button aaa" :class=`icon-${iconPosition}` @click=$emit('click')>
    <g-icon v-if="loading" name='loading' class="loading"></g-icon>
    <g-icon v-if='icon && !loading' :name='icon'></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Vue from 'vue'
import Icon from './icon'

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
    }
  }
}
</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.g-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  outline: none;
  &:hover {
    color: var(--button-bg);
    border-color: var(--border-color-hover);
    background: var(--button-hover-bg);
    .g-icon {
      fill: var(--button-bg);
    }
  }
  &:active {
    color: var(--border-color);
    background: var(--button-active-bg);
    border-color: var(--font-size);
    .g-icon {
      fill: var(--border-color);
    }
  }
  &.icon-right {
    .content {
      order: 1;
    }
    .g-icon {
      order: 2;
      margin-left: .2em;
      margin-right: 0;
    }
  }
  .loading {
    animation: spin 0.8s infinite linear;
  }
}
</style>