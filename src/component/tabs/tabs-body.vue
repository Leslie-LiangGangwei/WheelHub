<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabsBody',
  inject: ['eventBus'],
  created: function () {
    const {eventBus} = this;
  }
}
</script>

<style>
.tabs-body {

}
</style>