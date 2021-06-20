<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
      :type="$attrs.type"
      :placeholder="$attrs.placeholder"
      :readonly="$attrs.readonly"
      :disabled="$attrs.disabled"
      @input="valueChange"
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
  methods: {
    valueChange() {
      alert('input valueChange')
    }
  },
  mounted() {
    import("../../../src/component/input").then((module) => {
      this.dynamicComponent = module.default;
    });
  },
};
</script>