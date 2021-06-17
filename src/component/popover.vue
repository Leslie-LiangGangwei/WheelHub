<template>
  <div ref="popover" class="popover">
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
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  mounted() {
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.onClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  destroyed() {
    if (this.trigger === 'click') {
      this.$refs.popover.removeEventListener('click', this.onClick)
    } else {
      this.$refs.popover.removeEventListener('mouseenter', this.open)
      this.$refs.popover.removeEventListener('mouseleave', this.close)
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
      const {top, left, right, bottom, height} = triggerWrapper.getBoundingClientRect()
      const {height: contentHeight} = contentWrapper.getBoundingClientRect()
      let positions = {
        top: {
          left: left + window.scrollX,
          top: top + window.scrollY,
        },
        bottom: {
          left: left + window.scrollX,
          top: bottom + window.scrollY,
        },
        left: {
          left: left + window.scrollX,
          top: top + window.scrollY + (height - contentHeight) / 2,
        },
        right: {
          left: right + window.scrollX,
          top: top + window.scrollY + (height - contentHeight) / 2,
        }
      }
      contentWrapper.style.left = positions[this.position].left + 'px'
      contentWrapper.style.top = positions[this.position].top + 'px'
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
$border-color: #aaa;
$border-radius: 4px;
$font-size: 14px;
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
  font-size: $font-size;
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
      border-bottom: none;
      border-top-color: $border-color;
    }
    &:after {
      top: calc(100% - 1px);
      border-bottom: none;
      border-top-color: white;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &:before {
      bottom: 100%;
      border-top: none;
      border-bottom-color: $border-color;
    }
    &:after {
      bottom: calc(100% - 1px);
      border-top: none;
      border-bottom-color: white;
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &:before, &:after {
      top: 50%;
      transform: translateY(-50%);
      border-right: none;
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
      border-left: none;
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
