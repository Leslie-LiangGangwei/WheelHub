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
import toastPlugin from "./toastPlugin";

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
Vue.use(toastPlugin)

new Vue({
    el: '#app',
    data: {
        isLoading: true,
    },
    methods: {
        showToast() {
            this.$toast('<strong>我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast我是 Toast</strong>', {
                enableHtml: true,
                autoClose: false,
                showTime: 1,
                toastButton: {
                    text: 'Cancel',
                    callback() {
                    }
                }
            })
        }
    }
})