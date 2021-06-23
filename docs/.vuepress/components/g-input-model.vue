<template>
  <div>
    <p>{{ inputValue }}</p>
    <component
        v-if="dynamicComponent"
        v-model="inputValue"
        :is="dynamicComponent"
        :type="$attrs.type"
        :placeholder="$attrs.placeholder"
        :readonly="$attrs.readonly"
        :disabled="$attrs.disabled"
    ></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicComponent: null,
      inputValue: "实现 v-model 双向绑定"
    };
  },
  mounted() {
    import("../../../src/component/input").then((module) => {
      this.dynamicComponent = module.default;
    });
  },
};
</script>