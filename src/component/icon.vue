<template>
  <svg class="g-icon" aria-hidden="true">
    <use :xlink:href=`#icon-${name}`></use>
  </svg>
</template>

<script>
import "../icon/iconfont.js";
export default {
  name: 'Icon',
  props: ['name']
}
</script>

<style lang="scss">
.g-icon {
  width: 1em;
  height: 1em;
  margin-right: .2em;
  fill: var(--font-size)
}
</style>
