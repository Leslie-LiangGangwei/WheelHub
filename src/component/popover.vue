<template>
  <div ref="popover" class="popover" @click="onClick">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
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
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.contentPosition()
        this.listenToDocument()
      })
    },
    contentPosition() {
      document.body.appendChild(this.$refs.contentWrapper)
      let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
    },
    listenToDocument() {
      document.addEventListener('click', this.eventHandler)
    },
    eventHandler(event) {
      if (this.$refs.popover &&
          (this.$refs.contentWrapper === event.target || this.$refs.popover.contains(event.target))
      ) {
      } else {
        this.close()
      }
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.eventHandler)
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