<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
      :name="$attrs.name"
  ></component>

</template>

<script>
export default {
  data() {
    return {
      dynamicComponent: null,
    };
  },
  mounted() {
    import("../../../src/component/icon").then((module) => {
      this.dynamicComponent = module.default;
    });
  },
};
</script>