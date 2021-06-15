<template>
  <svg class="g-icon" aria-hidden="true">
    <use :xlink:href=`#icon-${name}`></use>
  </svg>
</template>


<script>
import '../icon/iconfont.js'

export default {
  name: 'Icon',
  props: {
    'name': {
      type: String,
      require: true,
    }
  }
}
</script>

<style lang="scss" scoped>
$color: #1C1C1C;
.g-icon {
  width: 1em;
  height: 1em;
  margin-right: .2em;
  fill: $color;
}
</style>
