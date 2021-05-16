import Vue from 'vue'
import Button from './component/button/button'
import Icon from './component/icon'
import ButtonGroup from './component/button/button-group'
import Input from './component/input'
import Row from './component/gird/row'
import Col from './component/gird/col'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)

new Vue({
    el: '#app',
    data: {
        isLoading: true,
    }
})