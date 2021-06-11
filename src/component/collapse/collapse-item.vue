<template>
  <div class="collapse-item">
    <div class="title" @click="toggle" :title-name="title">
      {{ title }}
    </div>
    <div class="panel" v-if="showed" :panel-name="title">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collapse-item",
  inject: ['eventBus'],
  data() {
    return {
      showed: false,
    }
  },
  props: {
    title: {
      type: String,
      require: true
    },
    name: {
      type: String
    }
  },
  methods: {
    toggle() {
      if (this.showed) {
        const {eventBus} = this;
        eventBus.$emit('update:removeSelected', this.name)
      } else {
        const {eventBus} = this;
        eventBus.$emit('update:addSelected', this.name)
      }
    }
  },
  mounted: function () {
    const {eventBus} = this;
    eventBus.$on('update:selected', (selected) => {
      this.showed = selected.indexOf(this.name) >= 0;
    })
  }
}
</script>

<style scoped lang="scss">
$background: #EFEFF4;
$grey: #ddd;
$border-radius: 4px;
.collapse-item {
  .title {
    display: flex;
    align-items: center;
    min-height: 40px;
    padding-left: 16px;
    margin: -1px;
    background: $background;
    border: 1px solid $grey;
  }
  &:first-child {
    .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  .panel {
    padding: 16px 8px;
  }
}
</style>