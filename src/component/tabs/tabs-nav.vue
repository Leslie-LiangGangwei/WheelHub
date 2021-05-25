<template>
  <div class="tabs-nav">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabsNav'
}
</script>

<style>
.tabs-nav {

}
</style>