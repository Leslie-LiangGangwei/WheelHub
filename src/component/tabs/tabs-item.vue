<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
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
      direction: ''
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
    classes() {
      return {
        active: this.active,
        disabled: this.disabled,
        column: this.isColumn
      }
    },
    isColumn() {
      return this.direction === 'column';
    }
  },
  created: function () {
    const {eventBus} = this;
    eventBus.$on('update:selected', (name, item, direction) => {
      this.active = name === this.name;
      this.direction = direction
    })
  },
  methods: {
    onClick() {
      if (this.disabled) {return}
      const {eventBus} = this
      eventBus.$emit('update:selected', this.name, this, this.direction)
    }
  }
}
</script>
<style lang="scss" scoped>
.tabs-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2em;
  height: 100%;
  &.column {
    padding: 0.5em 0;
  }
  &:hover {
    cursor: pointer;
    color: #8AC2FF;
  }
  &.active {color: #007AFF;}
  &.disabled {
    color: #aaa;
    &:hover {
      cursor: not-allowed;
    }
  }
}
</style>