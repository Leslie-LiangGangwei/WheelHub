<template>
  <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <g-header style="height: 50px; background:lightskyblue;">
      header
    </g-header>
    <g-layout>
      <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
        sider
      </g-sider>
      <g-content style="height: 100px; background:deepskyblue;">
        content
      </g-content>
    </g-layout>
    <g-footer style="height: 50px; background:lightskyblue;">
      footer
    </g-footer>
  </g-layout>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

</style>

<script>
import GLayout from '../../../src/component/layout/layout'
import GContent from '../../../src/component/layout/content'
import GSider from '../../../src/component/layout/sider'
import GHeader from '../../../src/component/layout/header'
import GFooter from '../../../src/component/layout/footer'


export default {
  components: {GLayout, GContent, GSider, GHeader, GFooter},
  data() {
    return {}
  }
}
</script>