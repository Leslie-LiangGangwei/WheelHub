<template>
  <div ref="popover" class="popover" @click="onClick">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class=`position-${this.position}`>
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
  props: {
    position: {
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
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
      const {contentWrapper, triggerWrapper} = this.$refs
      document.body.appendChild(contentWrapper)
      let {top, left, right, bottom, height} = triggerWrapper.getBoundingClientRect()
      if (this.position === 'top') {
        contentWrapper.style.left = left + window.scrollX + 'px'
        contentWrapper.style.top = top + window.scrollY + 'px'
      } else if (this.position === 'bottom') {
        contentWrapper.style.left = left + window.scrollX + 'px'
        contentWrapper.style.top = bottom + window.scrollY + 'px'
      } else if (this.position === 'left') {
        contentWrapper.style.left = left + window.scrollX + 'px'
        let {height: contentHeight} = contentWrapper.getBoundingClientRect()
        contentWrapper.style.top = top + window.scrollY + (height - contentHeight) / 2 + 'px'
      } else if (this.position === 'right') {
        contentWrapper.style.left = right + window.scrollX + 'px'
        let {height: contentHeight} = contentWrapper.getBoundingClientRect()
        contentWrapper.style.top = top + window.scrollY + (height - contentHeight) / 2 + 'px'
      }
    },
    listenToDocument() {
      document.addEventListener('click', this.eventHandler)
    }
    ,
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
  border: 1px solid $border-color;
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
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &:before {
      top: 100%;
      border-top-color: $border-color;
    }
    &:after {
      top: calc(100% - 1px);
      border-top-color: white;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &:before {
      bottom: 100%;
      border-bottom-color: $border-color;
    }
    &:after {
      bottom: calc(100% - 1px);
      border-bottom-color: white;
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &:before, &:after {
      top: 50%;
      transform: translateY(-50%);
    }
    &:before {
      left: 100%;
      border-left-color: $border-color;
    }
    &:after {
      left: calc(100% - 1px);
      border-left-color: white;
    }
  }
  &.position-right {
    margin-left: 10px;
    &:before, &:after {
      top: 50%;
      transform: translateY(-50%);
    }
    &:before {
      right: 100%;
      border-right-color: $border-color;
    }
    &:after {
      right: calc(100% - 1px);
      border-right-color: white;
    }
  }
}
</style>
