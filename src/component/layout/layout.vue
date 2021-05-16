<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    }
  },

  mounted() {
    console.log(this.$children);
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'Sider') {
        this.layoutClass.hasSider = true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  flex: 1;
  &.hasSider {
    flex-direction: row;
  }
}
</style>