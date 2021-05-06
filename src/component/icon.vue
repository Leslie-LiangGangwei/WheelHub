<template>
  <svg class="g-icon" aria-hidden="true">
    <use :xlink:href=`#icon-${name}`></use>
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: ['name']
}
</script>

<style lang="scss" scoped>
.g-icon {
  width: 1em;
  height: 1em;
  margin-right: .2em;
  fill: var(--font-size)
}
</style>
