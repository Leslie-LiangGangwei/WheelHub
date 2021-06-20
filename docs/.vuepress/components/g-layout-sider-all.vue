<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
  >{{ 'sider' }}
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
    import("../../../src/component/layout/sider").then((module) => {
      this.dynamicComponent = module.default;
    });
  },
};
</script>

<style scoped>
.sider {
  height: 200px;
  background: #ddd;
  width: 200px;
  color: black;
}
</style>