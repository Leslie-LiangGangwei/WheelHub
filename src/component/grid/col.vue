<template>
  <div class="col" :class="colClass">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
import AsyncComputed from 'vue-async-computed'

Vue.use(AsyncComputed)
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
        ...this.gutterStyle(gutter)
      ]
    },
    // colStyle() {
    //   let {gutter} = this
    //   return {
    //     paddingLeft: gutter / 2 + 'px',
    //     paddingRight: gutter / 2 + 'px'
    //   }
//    }
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
  /* 计算 gutter 值 */
  $class-prefix: gutter-iphone-;
  @for $n from 0 through 48 {
    &.#{$class-prefix}#{$n} {
      margin-left: $n / 2 + px;
      margin-right: $n / 2 + px;
    }
  }
  @media (min-width: 576px) {
    $class-prefix: gutter-ipad-;
    @for $n from 0 through 48 {
      &.#{$class-prefix}#{$n} {
        margin-left: $n / 2 + px;
        margin-right: $n / 2 + px;
      }
    }
  }
  @media (min-width: 768px) {
    $class-prefix: gutter-narrow-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix}#{$n} {
        margin-left: $n / 2 + px;
        margin-right: $n / 2 + px;
      }
    }
  }
  @media (min-width: 992px) {
    $class-prefix: gutter-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix}#{$n} {
        margin-left: $n / 2 + px;
        margin-right: $n / 2 + px;
      }
    }
  }
  @media (min-width: 1200px) {
    $class-prefix: gutter-wide-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix}#{$n} {
        margin-left: $n / 2 + px;
        margin-right: $n / 2 + px;
      }
    }
  }
  @media (min-width: 1600px) {
    $class-prefix: gutter-biggest-wide-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix}#{$n} {
        margin-left: $n / 2 + px;
        margin-right: $n / 2 + px;
      }
    }
  }
}
</style>