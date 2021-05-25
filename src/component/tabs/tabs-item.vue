<template>
  <div class="tabs-item" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabsItem',
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
  inject: ['eventBus'],
  created: function () {
    const {eventBus} = this;
    eventBus.$on('update:selected', (name) => {
      console.log(name);
    })
  },
  methods: {
    xxx() {
      const {eventBus} = this
      eventBus.$emit('update:selected', this.name)
    }
  },
}
</script>

<style>
.tabs-item {

}
</style>