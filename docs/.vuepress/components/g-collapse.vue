<template>
  <g-collapse>
    <g-collapse-item title="title 1" name="1">
      panel 1
    </g-collapse-item>
    <g-collapse-item title="title 2" name="2">
      panel 2
    </g-collapse-item>
    <g-collapse-item title="title 3" name="3">
      panel 3
    </g-collapse-item>
  </g-collapse>
</template>

<script>
import GCollapse from '../../../src/component/collapse/collapse'
import GCollapseItem from '../../../src/component/collapse/collapse-item'

export default {
  components: {GCollapse, GCollapseItem},
}
</script>