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
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  position: relative;
}

.content-wrapper {
  position: absolute;
  transform: translateY(-100%);
  border: 1px solid $border-color;
  margin-top: -10px;
  padding: .5em 1em;
  word-break: break-all;
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5));
  background: white;
  max-width: 20em;
  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border: 10px solid transparent;
  }
  &:before {
    top: 100%;
    border-top-color: $border-color;
  }
  &:after {
    top: calc(100% - 1px);
    border-top-color: white;
  }
}
</style>
