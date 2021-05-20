<template>
  <div class="toast">
    <slot></slot>
    <div v-if="toastButton" class="divider"></div>
    <div v-if="toastButton" class="toastButton" @click="clickToastButton">
      {{ toastButton.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
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
  mounted() {
    setTimeout(() => {
      if (this.autoClose) {
        this.closeToast()
      }
    }, this.showTime * 1000)
  },
  methods: {
    closeToast() {
      this.$el.remove()
      this.$destroy()
    },
    clickToastButton() {
      this.closeToast()
      if (this.toastButton && typeof this.toastButton.callback === 'function') {
        this.toastButton.callback(this)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$toast-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
.toast {
  font-size: $font-size; height: $toast-height; line-height: 1.8;
  position: fixed; top: 0; left: 50%; transform: translateX(-50%);
  display: flex; align-items: center;
  border-radius: 4px;
  box-shadow: $toast-shadow;
  color: white;
  background: $toast-bg;
  padding: 0 16px;
  .divider {
    height: 100%;
    margin-right: 16px;
    margin-left: 16px;
    border: 1px solid #666;
  }
  .toastButton {
  }
}
</style>