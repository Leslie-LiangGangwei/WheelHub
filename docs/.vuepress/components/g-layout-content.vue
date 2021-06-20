<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
  >{{ 'content' }}
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
    import("../../../src/component/layout/content").then((module) => {
      this.dynamicComponent = module.default;
    });
  },
};
</script>

<style>
.content {
  height: 100px;
  background: deepskyblue;
}
</style>