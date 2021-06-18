<template>
  <div class="tabs-nav" :class="classes">
    <slot></slot>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
    <div class="line" ref="lineRef" :class="classLine"></div>
  </div>
</template>

<script>
export default {
  name: 'TabsNav',
  inject: ['eventBus'],
  data() {
    return {
      direction: 'row'
    }
  },
  computed: {
    classes() {
      return `direction-${this.direction}`
    },
    classLine() {
      if (this.direction === 'column')
        return 'line-column'
    }
  },
  mounted: function () {
    const {eventBus} = this;
    eventBus.$on('update:selected', (name, item, direction) => {
          this.direction = direction
          if (this.direction === 'row') {
            this.$nextTick(() => {
              let {width, left} = item.$el.getBoundingClientRect();
              this.$refs.lineRef.style.width = `${width}px`
              let navLeft = item.$parent.$el.getBoundingClientRect().left
              this.$refs.lineRef.style.left = left - navLeft + `px`
            })
          } else {
            this.$nextTick(() => {
              let {top, height} = item.$el.getBoundingClientRect();
              this.$refs.lineRef.style.height = `${height}px`
              let navTop = item.$parent.$el.getBoundingClientRect().top
              this.$refs.lineRef.style.top = top - navTop + `px`
            })
          }
        }
    )
  }
}
</script>

<style lang="scss" scoped>
.tabs-nav {
  &.direction-row {
    height: 40px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #ddd;
  }
  &.direction-column {
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 120px;
    border-right: 1px solid #ddd;
  }
  .actions {
    margin-left: auto;
  }
  .line {
    position: absolute;
    bottom: 0;
    width: 100px;
    border-bottom: 2px solid #007AFF;
    transition: all 400ms;
    &.line-column {
      position: absolute;
      width: 0;
      left: 118px;
      height: 20px;
      border-left: 2px solid #007AFF;
      transition: all 400ms;
    }
  }
}
</style>