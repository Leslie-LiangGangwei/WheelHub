<template>
  <div class="popover">
    <div class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <div class="trigger" @click="xxx">
      <slot name="trigger"></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "Popover",
  data() {
    return {
      visible: false
    }
  },
  methods: {
    xxx() {
      this.visible = !this.visible
    }
  }
}
</script>

<style scoped lang="scss">
.popover {
  display: inline-block;
  position: relative;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    padding: 16px;
    white-space: nowrap;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
  .trigger {}
}
</style>