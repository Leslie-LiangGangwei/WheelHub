<template>
  <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <div class="trigger" ref="triggerWrapper">
      <slot></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "Popover",
  data() {
    return {
      visible: false
    }
  },
  methods: {
    xxx() {
      this.visible = !this.visible
      if (this.visible === true) {
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.contentWrapper)
          let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
          let eventHandler = () => {
            this.visible = false
            document.removeEventListener('click', eventHandler)
          }
          document.addEventListener('click', eventHandler)
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.popover {
  display: inline-block;
  position: relative;
  .trigger {}
}

.content-wrapper {
  position: absolute;
  transform: translateY(-100%);
  padding: 16px;
  white-space: nowrap;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
</style>