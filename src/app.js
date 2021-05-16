import Vue from 'vue'
import Button from './component/button/button'
import Icon from './component/icon'
import ButtonGroup from './component/button/button-group'
import Input from './component/input'
import Row from './component/gird/row'
import Col from './component/gird/col'
import Layout from './component/layout/layout'
import Header from './component/layout/header'
import Content from './component/layout/content'
import Footer from './component/layout/footer'
import Sider from './component/layout/sider'

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

new Vue({
    el: '#app',
    data: {
        isLoading: true,
    }
})