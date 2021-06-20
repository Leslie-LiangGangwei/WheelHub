<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
      :gutter="$attrs.gutter"
      :justify="$attrs.justify"
      class="demoRow"
  >
    <g-grid-col-eight-gutter-media :pc="{span: '8'}" :ipad="{span: '11'}" span="24"></g-grid-col-eight-gutter-media>
    <g-grid-col-eight-gutter-media :pc="{span: '8'}" :ipad="{span: '10'}" span="24"></g-grid-col-eight-gutter-media>
    <g-grid-col-eight-gutter-media :pc="{span: '7'}" :ipad="{span: '10'}" span="24"></g-grid-col-eight-gutter-media>
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