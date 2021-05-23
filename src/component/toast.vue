<template>
  <div class="toast" ref="toastRef" :class="toastClass">
    <div class="text">
      <div v-if="enableHtml" v-html="this.$slots.default"></div>
      <div v-else>
        <slot></slot>
      </div>
    </div>
    <div v-if="toastButton" class="divider" ref="dividerRef"></div>
    <div v-if="toastButton" class="toastButton" @click="clickToastButton">
      {{ toastButton.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    toastPosition: {
      type: String,
      default: 'top',
      validator: function (value) {
        return ['top', 'bottom', 'middle'].indexOf(value) !== -1
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    showTime: {
      type: [String, Number],
      default: 2
    },
    toastButton: {
      type: Object,
      default() {
        return {
          text: "关闭", callback: (toast) => {
            console.log(toast);
          }
        }
      }
    }
  },
  computed: {
    toastClass() {
      return {
        [`position-${this.toastPosition}`]: true
      }
    }
  },
  mounted() {
    this.updateDividerStyle()
    this.toastAutoClose()
  },
  methods: {
    closeToast() {
      this.$el.remove()
      this.$emit('toastClose')
      this.$destroy()
    },
    clickToastButton() {
      this.closeToast()
      if (this.toastButton && typeof this.toastButton.callback === 'function') {
        this.toastButton.callback(this)
      }
    },
    updateDividerStyle() {
      setTimeout(() => {
        let toastHeight = this.$refs.toastRef.getBoundingClientRect().height
        this.$refs.dividerRef.style.height = `${toastHeight}px`
      }, 0)
    },
    toastAutoClose() {
      setTimeout(() => {
        if (this.autoClose) {
          this.closeToast()
        }
      }, this.showTime * 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-bg: rgba(0, 0, 0, 0.75);
$toast-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
$toast-min-height: 40px;
.toast {
  font-size: $font-size; line-height: 1.8; min-height: $toast-min-height;
  position: fixed; left: 50%;
  display: flex; align-items: center;
  border-radius: 4px;
  box-shadow: $toast-shadow;
  color: white;
  background: $toast-bg;
  &.position-top {
    top: 0; transform: translateX(-50%);
  }
  &.position-bottom {
    bottom: 0; transform: translateX(-50%);
  }
  &.position-middle {
    top: 50%; transform: translate(-50%, -50%);
  }
  .divider {
    height: 100%;
    margin: 0 16px;
    border: 1px solid #666;
  }
  .text {
    margin-left: 16px;
    padding: 16px 0;
  }
  .toastButton {
    margin-right: 16px;
  }
}
</style>