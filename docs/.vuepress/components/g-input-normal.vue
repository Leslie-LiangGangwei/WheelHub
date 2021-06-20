<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
      :type="$attrs.type"
      :placeholder="$attrs.placeholder"
      :readonly="$attrs.readonly"
      :disabled="$attrs.disabled"
      :error="$attrs.error"
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
    import("../../../src/component/input").then((module) => {
      this.dynamicComponent = module.default;
    });
  },
};
</script>