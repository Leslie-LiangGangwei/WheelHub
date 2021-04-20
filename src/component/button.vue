<template>
  <button class="g-button" :class=`icon-${iconPosition}`>
    <g-icon v-if='icon' :name='icon'></g-icon>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return !(value !== 'left' && value !== 'right');
      }
    }
  }
}
</script>

<style lang="scss">
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

      .g-icon {
        fill: var(--border-color);
      }
    }
    &.icon-right {
      .g-icon {
        order: 2;
        margin-left: .1em;
        margin-right: 0;
      }
    }
  }
</style>