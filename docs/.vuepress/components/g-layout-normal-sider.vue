<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
  >
    <g-layout-header></g-layout-header>
    <g-layout-content-sider></g-layout-content-sider>
    <g-layout-footer></g-layout-footer>
  </component>
</template>

<script>
import GLayoutNormal from "./g-layout-normal";
import GLayoutSide from "./g-layout-sider";

export default {
  components: {GLayoutSide, GLayoutNormal},
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
.layout {
  color: white;
}
</style>