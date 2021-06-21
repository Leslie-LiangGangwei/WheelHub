<template>
  <div class="wrapper" :class="toastClass">
    <div class="toast" ref="toastRef">
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
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: [Boolean, Number],
      default: 3,
      validator: function (value) {
        return value === false || typeof value === 'number';
      }
    },
    toastButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined
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
      this.$nextTick(() => {
        this.$refs.dividerRef.style.height =
            `${this.$refs.toastRef.getBoundingClientRect().height}px`
      })
    },
    toastAutoClose() {
      setTimeout(() => {
        if (this.autoClose) {
          this.closeToast()
        }
      }, this.autoClose * 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-bg: rgba(0, 0, 0, 0.75);
$toast-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
$toast-min-height: 40px;
$animation-duration: 600ms;
@keyframes slide-up {
  0% {opacity: 0; transform: translateY(100%)}
  100% {opacity: 1; transform: translateY(0%)}
}

@keyframes slide-down {
  0% {opacity: 0; transform: translateY(-100%)}
  100% {opacity: 1; transform: translateY(0%)}
}

@keyframes fade-in {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

.wrapper {
  position: fixed; left: 50%; transform: translateX(-50%);
  z-index: 30;
  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-up $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-down $animation-duration;
    }
  }
  &.position-middle {
    top: 50%; transform: translate(-50%, -50%);
    .toast {
      animation: fade-in $animation-duration;
    }
  }
  .toast {
    font-size: $font-size; line-height: 1.8; min-height: $toast-min-height;
    display: flex; align-items: center;
    border-radius: 4px;
    box-shadow: $toast-shadow;
    color: white;
    background: $toast-bg;
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
}
</style>