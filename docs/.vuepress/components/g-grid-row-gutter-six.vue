<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
      :gutter="$attrs.gutter"
      :justify="$attrs.justify"
      class="demoRow"
  >
    <g-grid-col-six-gutter span="6"></g-grid-col-six-gutter>
    <g-grid-col-six-gutter span="6"></g-grid-col-six-gutter>
    <g-grid-col-six-gutter span="6"></g-grid-col-six-gutter>
    <g-grid-col-six-gutter span="6"></g-grid-col-six-gutter>
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