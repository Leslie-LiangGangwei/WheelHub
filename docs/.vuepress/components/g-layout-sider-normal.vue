<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
      class="hasSider"
  >
    <g-layout-sider-all></g-layout-sider-all>
    <g-layout-normal></g-layout-normal>
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
