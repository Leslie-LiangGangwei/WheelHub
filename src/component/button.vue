<template>
  <button class="g-button">button</button>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px  solid var(--border-color);
    background:var(--button-bg);
    outline: none;
    &:hover {
      color: var(--border-color);
      border-color: var(--border-color-hover);
      background: var(--button-hover-bg);
    }
    &:active {
      color:var(--button-bg);
      background: var(--button-active-bg);
    }
  }
</style>