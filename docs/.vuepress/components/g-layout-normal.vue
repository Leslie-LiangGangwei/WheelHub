<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
  >
    <g-layout-header></g-layout-header>
    <g-layout-content></g-layout-content>
    <g-layout-footer></g-layout-footer>
  </component>
</template>

<script>
export default {
  data() {
    return {
      dynamicComponent: null,
    };
  },
  mounted() {
    import("../../../src/component/layout/layout").then((module) => {
      this.dynamicComponent = module.default;
    });
  },
};
</script>

<style scoped>
.layout {
  color: white;
}
</style>