<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
      :gutter="$attrs.gutter"
      :justify="$attrs.justify"
      class="demoRow"
  >
    <g-grid-col-four :pc="{span: '24'}" :ipad="{span: '12'}" span="4"></g-grid-col-four>
    <g-grid-col-four :pc="{span: '24'}" :ipad="{span: '12'}" span="4"></g-grid-col-four>
    <g-grid-col-four :pc="{span: '24'}" :ipad="{span: '12'}" span="4"></g-grid-col-four>
    <g-grid-col-four :pc="{span: '24'}" :ipad="{span: '12'}" span="4"></g-grid-col-four>
    <g-grid-col-four :pc="{span: '24'}" :ipad="{span: '12'}" span="4"></g-grid-col-four>
    <g-grid-col-four :pc="{span: '24'}" :ipad="{span: '12'}" span="4"></g-grid-col-four>
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