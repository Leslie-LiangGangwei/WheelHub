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
  }
}
</script>

<style>
.tabs-body {
  padding: 1em;

}
</style>