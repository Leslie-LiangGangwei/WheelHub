<template>
  <div class="tabs-item" @click="xxx" :class="activeClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabsItem',
  inject: ['eventBus'],
  data() {
    return {
      active: false,
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      require: true
    }
  },
  computed: {
    activeClass() {
      return {
        active: this.active
      }
    }
  },
  created: function () {
    const {eventBus} = this;
    eventBus.$on('update:selected', (name) => {
      this.active = name === this.name;
    })
  },
  methods: {
    xxx() {
      const {eventBus} = this
      eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>
<style lang="scss" scoped>
.tabs-item {
  padding: 0 2em;
  &.active {
    color: blue;
  }
}
</style>