<template>
  <button class="g-button" :class=`icon-${iconPosition}`>
    <svg v-if='icon' class="icon" aria-hidden="true">
      <use :xlink:href=`#icon-${icon}`></use>
    </svg>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['icon', 'iconPosition']
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

      .icon {
        fill: var(--button-bg);
      }
    }

    &:active {
      color: var(--border-color);
      background: var(--button-active-bg);

      .icon {
        fill: var(--border-color);
      }
    }

    &.icon-right {
      .icon {
        order: 2;
      }
    }

    .icon {
      width: 1em;
      height: 1em;
      margin-right: .1em;
      fill: var(--font-size)
    }
  }
</style>