import Vue from 'vue'
import Button from './component/button'
import Icon from './component/icon'
import ButtonGroup from './component/button-group'
import Input from './component/input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)

new Vue({
    el: '#app',
    data: {
        isLoading: true,
    }
})