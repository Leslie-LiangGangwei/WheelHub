<template>
  <div>
    <g-popover>
      <g-button>Top</g-button>
      <template slot="content">
        这是 popover 弹出的内容
      </template>
    </g-popover>
    <g-popover position="bottom">
      <g-button>Bottom</g-button>
      <template slot="content">
        这是 popover 弹出的内容
      </template>
    </g-popover>
    <g-popover position="left">
      <g-button>Left</g-button>
      <template slot="content">
        这是 popover 弹出的内容
      </template>
    </g-popover>
    <g-popover position="right">
      <g-button>Right</g-button>
      <template slot="content">
        这是 popover 弹出的内容
      </template>
    </g-popover>
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
import GButton from '../../../src/component/button/button'
import GPopover from '../../../src/component/popover'

export default {
  components: {GButton, GPopover},
}
</script>