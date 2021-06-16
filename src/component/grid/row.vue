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
      if ((typeof obj) === 'string' || (typeof obj) === 'number') {
        return `gutter-${obj}`
      }
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
  $class-prefix-device: gutter-iphone-;
  $class-prefix-normal: gutter-;
  @for $n from 0 through 48 {
    &.#{$class-prefix-device}#{$n} {
      margin-left: - $n / 2 + px;
      margin-right: - $n / 2 + px;
    }
    &.#{$class-prefix-normal}#{$n} {
      margin-left: - $n / 2 + px;
      margin-right: - $n / 2 + px;
    }
  }
  @media (min-width: 576px) {
    $class-prefix-device: gutter-ipad-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        margin-left: - $n / 2 + px;
        margin-right: - $n / 2 + px;
      }
    }
  }
  @media (min-width: 768px) {
    $class-prefix-device: gutter-narrow-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        margin-left: - $n / 2 + px;
        margin-right: - $n / 2 + px;
      }
    }
  }
  @media (min-width: 992px) {
    $class-prefix-device: gutter-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        margin-left: - $n / 2 + px;
        margin-right: - $n / 2 + px;
      }
    }
  }
  @media (min-width: 1200px) {
    $class-prefix-device: gutter-wide-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        margin-left: - $n / 2 + px;
        margin-right: - $n / 2 + px;
      }
    }
  }
  @media (min-width: 1600px) {
    $class-prefix-device: gutter-biggest-wide-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        margin-left: - $n / 2 + px;
        margin-right: - $n / 2 + px;
      }
    }
  }
}
</style>