<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
      class="hasSider"
  >
    <g-layout-sider></g-layout-sider>
    <g-layout-content></g-layout-content>
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

<style>

.hasSider {
  flex-direction: row;
}
</style>