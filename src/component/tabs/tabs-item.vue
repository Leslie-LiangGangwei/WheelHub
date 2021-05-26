<template>
  <div class="tabs-item" @click="onClick" :class="activeClass">
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
    onClick() {
      const {eventBus} = this
      eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>
<style lang="scss" scoped>
.tabs-item {
  display: flex;
  align-items: center;
  padding: 0 2em;
  height: 100%;
  &:hover {
    cursor: pointer;
    color: #8AC2FF;
  }
  &.active {color: #007AFF;}
}
</style>