<template>
  <div class="tabs-panel">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabsPanel',
  inject: ['eventBus'],
  created: function () {
    const {eventBus} = this;
    eventBus.$on('update:selected', (name) => {
      console.log(name);
    })
  }
}
</script>

<style>
.tabs-panel {

}
</style>