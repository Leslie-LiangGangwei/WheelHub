<template>
  <div class="tabs" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String,
      require: true
    },
    direction: {
      type: String,
      default: 'row',
      validator(value) {
        return ['row', 'column'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  computed: {
    classes() {
      return {
        column: this.isColumn
      }
    },
    isColumn() {
      return this.direction === 'column';
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  methods: {
    checkChildren() {
      if (this.$children.length === 0) {
        console && console.warn
        && console.warn('g-tabs 的 子组件应该是 g-tabsNav 和 g-tabsBody，而你没有输入正确的子组件')
      }
    },
    selectedTab() {
      this.$children.forEach((tabsChild) => {
        if (tabsChild.$options.name === 'TabsNav') {
          tabsChild.$children.forEach((item) => {
            if (item.name === this.selected && item.$options.name === 'TabsItem') {
              this.eventBus.$emit('update:selected', this.selected, item, this.direction)
            }
          })
        }
      })
    }
  },
  mounted() {
    this.checkChildren()
    this.selectedTab()
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  &.column {
    display: flex;
  }
}
</style>