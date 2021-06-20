<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
      :gutter="$attrs.gutter"
      :justify="$attrs.justify"
      class="demoRow"
  >
    <g-grid-col-four-gutter span="4"></g-grid-col-four-gutter>
    <g-grid-col-four-gutter span="4"></g-grid-col-four-gutter>
    <g-grid-col-four-gutter span="4"></g-grid-col-four-gutter>
    <g-grid-col-four-gutter span="4"></g-grid-col-four-gutter>
    <g-grid-col-four-gutter span="4"></g-grid-col-four-gutter>
    <g-grid-col-four-gutter span="4"></g-grid-col-four-gutter>
  </component>
</template>

<script>
import GGridColEight from "./g-grid-col-eight";

export default {
  components: {GGridColEight},
  data() {
    return {
      dynamicComponent: null,
    };
  },
  mounted() {
    import("../../../src/component/grid/row").then((module) => {
      this.dynamicComponent = module.default;
    });
  },
};
</script>

<style scoped>
.demoRow {
  display: flex;
  flex-wrap: nowrap !important;
  margin: 10px 0;
}

.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>