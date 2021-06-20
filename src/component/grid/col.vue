<template>
  <div class="col" :class="colClass">
    <slot></slot>
  </div>
</template>

<script>
let validator = (value) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}

export default {
  name: 'Col',
  data() {
    return {
      gutter: 0
    }
  },
  props: {
    span: {
      type: [String, Number]
    },
    offset: {
      type: [String, Number]
    },
    ipad: {type: Object, validator},
    narrowPc: {type: Object, validator},
    pc: {type: Object, validator},
    widePc: {type: Object, validator},
    biggestWidePc: {type: Object, validator},
  },
  methods: {
    createClass(obj, str = '') {
      if (!obj) { return [] }
      let array = []
      if (obj.span) {
        array.push(`col-${str}${obj.span}`)
      }
      if (obj.offset) {
        array.push(`offset-${str}${obj.offset}`)
      }
      return array
    },
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
    colClass() {
      let {span, offset, ipad, narrowPc, pc, widePc, biggestWidePc, gutter} = this
      return [
        ...this.createClass({span, offset}),
        ...this.createClass(ipad, 'ipad-'),
        ...this.createClass(narrowPc, 'narrow-pc-'),
        ...this.createClass(pc, 'pc-'),
        ...this.createClass(widePc, 'wide-pc-'),
        ...this.createClass(biggestWidePc, 'biggest-wide-pc-'),
        this.gutterStyle(gutter)
      ]
    },
  }
}
</script>

<style lang="scss" scoped>
.col {
  $class-prefix-device: col-;
  @for $n from 0 through 24 {
    &.#{$class-prefix-device}#{$n} {
      width: percentage($n / 24);
    }
  }
  $class-prefix-device: offset-;
  @for $n from 0 through 24 {
    &.#{$class-prefix-device}#{$n} {
      margin-right: percentage($n / 24);
    }
  }
  @media (min-width: 576px) {
    $class-prefix-device: col-ipad-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        width: percentage($n / 24);
      }
    }
    $class-prefix-device: offset-ipad-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        margin-right: percentage($n / 24);
      }
    }
  }
  @media (min-width: 768px) {
    $class-prefix-device: col-narrow-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        width: percentage($n / 24);
      }
    }
    $class-prefix-device: offset-narrow-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        margin-right: percentage($n / 24);
      }
    }
  }
  @media (min-width: 992px) {
    $class-prefix-device: col-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        width: percentage($n / 24);
      }
    }
    $class-prefix-device: offset-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        margin-right: percentage($n / 24);
      }
    }
  }
  @media (min-width: 1200px) {
    $class-prefix-device: col-wide-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        width: percentage($n / 24);
      }
    }
    $class-prefix-device: offset-wide-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        margin-right: percentage($n / 24);
      }
    }
  }
  @media (min-width: 1600px) {
    $class-prefix-device: col-biggest-wide-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        width: percentage($n / 24);
      }
    }
    $class-prefix-device: offset-biggest-wide-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        margin-right: percentage($n / 24);
      }
    }
  }
  /* 计算 gutter 值 */
  $class-prefix-device: gutter-iphone-;
  $class-prefix-normal: gutter-;
  @for $n from 0 through 48 {
    &.#{$class-prefix-device}#{$n} {
      padding-left: $n / 2 + px;
      padding-right: $n / 2 + px;
    }
    &.#{$class-prefix-normal}#{$n} {
      padding-left: $n / 2 + px;
      padding-right: $n / 2 + px;
    }
  }
  @media (min-width: 576px) {
    $class-prefix-device: gutter-ipad-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        padding-left: $n / 2 + px;
        padding-right: $n / 2 + px;
      }
    }
  }
  @media (min-width: 768px) {
    $class-prefix-device: gutter-narrow-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        padding-left: $n / 2 + px;
        padding-right: $n / 2 + px;
      }
    }
  }
  @media (min-width: 992px) {
    $class-prefix-device: gutter-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        padding-left: $n / 2 + px;
        padding-right: $n / 2 + px;
      }
    }
  }
  @media (min-width: 1200px) {
    $class-prefix-device: gutter-wide-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        padding-left: $n / 2 + px;
        padding-right: $n / 2 + px;
      }
    }
  }
  @media (min-width: 1600px) {
    $class-prefix-device: gutter-biggest-wide-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        padding-left: $n / 2 + px;
        padding-right: $n / 2 + px;
      }
    }
  }
}
</style>