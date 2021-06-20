<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
      :gutter="$attrs.gutter"
      :justify="$attrs.justify"
      class="demoRow"
  >
    <g-grid-col-two span="2"></g-grid-col-two>
    <g-grid-col-two span="2"></g-grid-col-two>
    <g-grid-col-two span="2"></g-grid-col-two>
    <g-grid-col-two span="2"></g-grid-col-two>
    <g-grid-col-two span="2"></g-grid-col-two>
    <g-grid-col-two span="2"></g-grid-col-two>
    <g-grid-col-two span="2"></g-grid-col-two>
    <g-grid-col-two span="2"></g-grid-col-two>
    <g-grid-col-two span="2"></g-grid-col-two>
    <g-grid-col-two span="2"></g-grid-col-two>
    <g-grid-col-two span="2"></g-grid-col-two>
    <g-grid-col-two span="2"></g-grid-col-two>
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
    import("../../../src/component/grid/row").then((module) => {
      this.dynamicComponent = module.default;
    });
  },
};
</script>

<style>
.demoRow { margin: 10px 0; }

.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>