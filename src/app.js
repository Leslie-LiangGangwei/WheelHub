import Vue from 'vue'
import Button from './component/button'
import Icon from './component/icon'
import ButtonGroup from './component/button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        isLoading: false
    }
})

// 单元测试
import chai from 'chai'
import spies from 'chai-spies'
import button from "./component/button";

chai.use(spies)

// 检测 normal button, setting
const expect = chai.expect
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-setting')
    vm.$el.remove()
    vm.$destroy()
}

// 检测 loading button
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'loading',
            loading: true
        }
    })
    vm.$mount()
    let uesElement = vm.$el.querySelector('use')
    let href = uesElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')
    vm.$el.remove()
    vm.$destroy()
}

// 检测 left button
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let order = window.getComputedStyle(svg).order
    // let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('0')
    vm.$el.remove()
    vm.$destroy()
}

// 检测 right button
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let order = window.getComputedStyle(svg).order
    // let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
