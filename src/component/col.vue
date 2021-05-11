<template>
  <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]"
       :style="{paddingLeft: gutter/2 + 'px', paddingRight: gutter/2 + 'px'}">
    <div style="border: 1px solid blue">
      <slot></slot>
    </div>
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
    }
  },
  data() {
    return {gutter: 0}
  }
}
</script>

<style lang="scss" scoped>
.col {
  width: 50%;
  height: 40px;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: percentage($n / 24);
    }
  }

  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-right: percentage($n / 24);
    }
  }
}
</style>