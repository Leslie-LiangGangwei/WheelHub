<template>
  <div class="col" :class="colClass" :style="colStyle">
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
  data() {
    return {gutter: 0}
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
    }
  },
  computed: {
    colClass() {
      let {span, offset, ipad, narrowPc, pc, widePc, biggestWidePc} = this
      return [
        ...this.createClass({span, offset}),
        ...this.createClass(ipad, 'ipad-'),
        ...this.createClass(narrowPc, 'narrow-pc-'),
        ...this.createClass(pc, 'pc-'),
        ...this.createClass(widePc, 'wide-pc-'),
        ...this.createClass(biggestWidePc, 'biggest-wide-pc-'),
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
  $class-prefix: col-;
  @for $n from 0 through 24 {
    &.#{$class-prefix}#{$n} {
      width: percentage($n / 24);
    }
  }
  $class-prefix: offset-;
  @for $n from 0 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-right: percentage($n / 24);
    }
  }
  @media (min-width: 576px) {
    $class-prefix: col-ipad-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        width: percentage($n / 24);
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-right: percentage($n / 24);
      }
    }
  }
  @media (min-width: 768px) {
    $class-prefix: col-narrow-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        width: percentage($n / 24);
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-right: percentage($n / 24);
      }
    }
  }
  @media (min-width: 992px) {
    $class-prefix: col-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        width: percentage($n / 24);
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-right: percentage($n / 24);
      }
    }
  }
  @media (min-width: 1200px) {
    $class-prefix: col-wide-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        width: percentage($n / 24);
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-right: percentage($n / 24);
      }
    }
  }
  @media (min-width: 1600px) {
    $class-prefix: col-biggest-wide-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        width: percentage($n / 24);
      }
    }
    $class-prefix: offset-biggest-wide-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-right: percentage($n / 24);
      }
    }
  }
}
</style>