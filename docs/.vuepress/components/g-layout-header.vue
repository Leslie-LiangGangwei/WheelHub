<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
  >{{ 'header' }}
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
    import("../../../src/component/layout/header").then((module) => {
      this.dynamicComponent = module.default;
    });
  },
};
</script>

<style>
.header {
  height: 50px;
  background: lightskyblue;
}
</style>