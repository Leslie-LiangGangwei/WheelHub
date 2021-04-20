<template>
  <svg v-if='icon' class="icon" aria-hidden="true">
    <use :xlink:href=`#icon-${icon}`></use>
  </svg>
</template>

<script>
export default {}
</script>

<style></style>
