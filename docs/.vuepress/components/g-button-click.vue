<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
      :icon="$attrs.icon"
      :iconPosition="$attrs.iconPosition"
      :loading="this.buttonLoading"
      :disabled="this.buttonDisabled"
      @click="submit"
  >{{ '点击提交' }}
  </component>
</template>

<script>
export default {
  data() {
    return {
      dynamicComponent: null,
      buttonLoading: false,
      buttonDisabled: false
    };
  },
  methods: {
    submit() {
      this.buttonLoading = !this.buttonLoading
      if (this.buttonLoading) {
        this.buttonDisabled = true
      }
    }
  },
  mounted() {
    import("../../../src/component/button/button").then((module) => {
      this.dynamicComponent = module.default;
    });
  },
};
</script>