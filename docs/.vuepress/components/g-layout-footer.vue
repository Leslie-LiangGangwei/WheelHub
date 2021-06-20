<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
  >{{ 'footer' }}
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
    import("../../../src/component/layout/footer").then((module) => {
      this.dynamicComponent = module.default;
    });
  },
};
</script>

<style>
.footer {
  height: 50px;
  background: lightskyblue;
}
</style>