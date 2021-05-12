<template>
  <div class="col" :class="colClass" :style="colStyle">
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
    }
  },
  data() {
    return {gutter: 0}
  },
  computed: {
    colClass() {
      let {span, offset} = this
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`
      ]
    },
    colStyle() {
      let {gutter} = this
      return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px'
      }
    }
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