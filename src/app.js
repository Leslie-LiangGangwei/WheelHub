import Vue from 'vue'
import Button from './component/button/button'
import Icon from './component/icon'
import ButtonGroup from './component/button/button-group'
import Input from './component/input'
import Row from './component/grid/row'
import Col from './component/grid/col'
import Layout from './component/layout/layout'
import Header from './component/layout/header'
import Content from './component/layout/content'
import Footer from './component/layout/footer'
import Sider from './component/layout/sider'
import Toast from './component/toast'
import ToastPlugin from "./toastPlugin";
import Tabs from './component/tabs/tabs'
import TabsBody from './component/tabs/tabs-body'
import TabsItem from './component/tabs/tabs-item'
import TabsNav from './component/tabs/tabs-nav'
import TabsPanel from './component/tabs/tabs-panel'
import Popover from './component/popover'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-nav', TabsNav)
Vue.component('g-tabs-panel', TabsPanel)
Vue.use(ToastPlugin)
Vue.component('g-popover', Popover)

new Vue({
    el: '#app',
    data: {
        selectedItem: 'sports'
    },
    methods: {}
})