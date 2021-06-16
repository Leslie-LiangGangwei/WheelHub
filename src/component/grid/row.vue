<template>
  <div class="row" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Row',
  props: {
    gutter: {
      type: [String, Number, Object],
      default: 0
    },
    justify: {
      type: String,
      validator: function (value) {
        return ['left', 'right', 'center'].indexOf(value) >= 0
      },
      default: 'center'
    }
  },
  methods: {
    gutterStyle(obj) {
      if (!obj) { return [] }
      let array = []
      if (obj.iphone) {
        array.push(`gutter-iphone-${obj.iphone}`)
      }
      if (obj.ipad) {
        array.push(`gutter-ipad-${obj.ipad}`)
      }
      if (obj.narrowPc) {
        array.push(`gutter-narrow-pc-${obj.narrowPc}`)
      }
      if (obj.pc) {
        array.push(`gutter-pc-${obj.pc}`)
      }
      if (obj.widePc) {
        array.push(`gutter-wide-pc-${obj.widePc}`)
      }
      if (obj.biggestWidePc) {
        array.push(`gutter-biggest-wide-pc-${obj.biggestWidePc}`)
      }
      return array
    }
  },
  computed: {
    rowClass() {
      let {justify, gutter} = this
      return [
        'justify-' + justify,
        this.gutterStyle(gutter)
      ]
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  &.justify-left { justify-content: flex-start; }
  &.justify-right { justify-content: flex-end; }
  &.justify-center { justify-content: center; }
  $class-prefix: gutter-iphone-;
  @for $n from 0 through 48 {
    &.#{$class-prefix}#{$n} {
      margin-left: - $n / 2 + px;
      margin-right: - $n / 2 + px;
    }
  }
  @media (min-width: 576px) {
    $class-prefix: gutter-ipad-;
    @for $n from 0 through 48 {
      &.#{$class-prefix}#{$n} {
        margin-left: - $n / 2 + px;
        margin-right: - $n / 2 + px;
      }
    }
  }
  @media (min-width: 768px) {
    $class-prefix: gutter-narrow-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix}#{$n} {
        margin-left: - $n / 2 + px;
        margin-right: - $n / 2 + px;
      }
    }
  }
  @media (min-width: 992px) {
    $class-prefix: gutter-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix}#{$n} {
        margin-left: - $n / 2 + px;
        margin-right: - $n / 2 + px;
      }
    }
  }
  @media (min-width: 1200px) {
    $class-prefix: gutter-wide-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix}#{$n} {
        margin-left: - $n / 2 + px;
        margin-right: - $n / 2 + px;
      }
    }
  }
  @media (min-width: 1600px) {
    $class-prefix: gutter-biggest-wide-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix}#{$n} {
        margin-left: - $n / 2 + px;
        margin-right: - $n / 2 + px;
      }
    }
  }
}
</style>