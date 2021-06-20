<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
      :icon="$attrs.icon"
      :iconPosition="$attrs.iconPosition"
      :loading="$attrs.loading"
      :disabled="$attrs.disabled"
  >{{ '下一页' }}
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
    import("../../../src/component/button/button").then((module) => {
      this.dynamicComponent = module.default;
    });
  },
};
</script>