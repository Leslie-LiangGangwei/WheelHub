<template>
  <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
      :span="$attrs.span"
      :offset="$attrs.offset"
      :ipad="$attrs.ipad"
      :pc="$attrs.pc"
      :widePc="$attrs.widePc"
      :biggestWidePc="$attrs.biggestWidePc"
  >
    <div class="demoCol">6</div>
  </component>
</template>

<script>
export default {
  data() {
    return {
      dynamicComponent: null,
      gutter: 0
    };
  },
  mounted() {
    import("../../../src/component/grid/col").then((module) => {
      this.dynamicComponent = module.default;
    });
  },
};
</script>
