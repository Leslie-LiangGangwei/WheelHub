<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
      :value="this.inputValue"
      :type="$attrs.type"
      :placeholder="$attrs.placeholder"
      :readonly="$attrs.readonly"
      :disabled="$attrs.disabled"
      :error="this.error"
  ></component>
</template>

<script>
export default {
  data() {
    return {
      dynamicComponent: null,
      inputValue: "error",
      error: 'value is error'
    };
  },
  mounted() {
    import("../../../src/component/input").then((module) => {
      this.dynamicComponent = module.default;
    });
  },
};
</script>