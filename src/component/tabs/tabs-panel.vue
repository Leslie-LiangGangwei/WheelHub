<template>
  <div class="tabs-panel" v-if="active" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabsPanel',
  data() {
    return {
      active: false,
    }
  },
  props: {
    name: {
      type: [String, Number],
      require: true
    }
  },
  inject: ['eventBus'],
  created: function () {
    const {eventBus} = this;
    if (eventBus) {
      eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-panel {}
</style>