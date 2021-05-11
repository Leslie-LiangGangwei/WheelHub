<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Col',
  props: {
    span: {
      type: [String, Number]
    },
    offset: {
      type: [String, Number]
    },
    gutter: {
      type: [String, Number]
    }
  }
}
</script>

<style lang="scss" scoped>
.col {
  width: 50%;
  height: 50px;
  background-color: gray;
  border: 1px solid blue;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: percentage($n / 24);
    }
  }
}
</style>