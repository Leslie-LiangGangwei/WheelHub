<template>
  <div class="tabs-nav">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabsNav',
  inject: ['eventBus'],
  created: function () {
    const {eventBus} = this;
  }
}
</script>

<style>
.tabs-nav {

}
</style>