<template>
  <g-tabs selected='1'>
    <g-tabs-nav>
      <g-tabs-item name="1">item 1</g-tabs-item>
      <g-tabs-item name="2">item 2</g-tabs-item>
      <g-tabs-item name="3">item 3</g-tabs-item>
    </g-tabs-nav>
    <g-tabs-body>
      <g-tabs-panel name="1">panel 1</g-tabs-panel>
      <g-tabs-panel name="2">panel 2</g-tabs-panel>
      <g-tabs-panel name="3">panel 3</g-tabs-panel>
    </g-tabs-body>
  </g-tabs>
</template>

<script>
import GTabs from '../../../src/component/tabs/tabs'
import GTabsNav from '../../../src/component/tabs/tabs-nav'
import GTabsItem from '../../../src/component/tabs/tabs-item'
import GTabsBody from '../../../src/component/tabs/tabs-body'
import GTabsPanel from '../../../src/component/tabs/tabs-panel'

export default {
  components: {GTabs, GTabsNav, GTabsItem, GTabsBody, GTabsPanel},
}
</script>