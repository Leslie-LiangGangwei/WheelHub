<template>
  <div class="box">
    <component
        v-if="dynamicComponent"
        :is="dynamicComponent"
        :gutter="$attrs.gutter"
        :justify="$attrs.justify"
        class="demoRow"
    >
      <g-grid-col-eight-gutter span="8"></g-grid-col-eight-gutter>
      <g-grid-col-eight-gutter span="8"></g-grid-col-eight-gutter>
      <g-grid-col-eight-gutter span="8"></g-grid-col-eight-gutter>
    </component>
  </div>
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