<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Row',
  props: {
    gutter: {
      type: [String, Number],
      default: 0
    },
    justify: {
      type: String,
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['left', 'right', 'center'].indexOf(value) >= 0
      },
      default: 'center'
    }
  },
  computed: {
    rowStyle() {
      let {gutter} = this
      return {
        marginLeft: -gutter / 2 + 'px',
        marginRight: -gutter / 2 + 'px'
      }
    },
    rowClass() {
      let {justify} = this
      return ['justify-' + justify]
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
}
</style>