const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/component/tabs/tabs'
import TabsBody from '../src/component/tabs/tabs-body'
import TabsItem from '../src/component/tabs/tabs-item'
import TabsNav from '../src/component/tabs/tabs-nav'
import TabsPanel from '../src/component/tabs/tabs-panel'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok
    })
    it('props 接受 selected', () => {
        Vue.component('g-tabs', Tabs)
        Vue.component('g-tabs-body', TabsBody)
        Vue.component('g-tabs-item', TabsItem)
        Vue.component('g-tabs-nav', TabsNav)
        Vue.component('g-tabs-panel', TabsPanel)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
         <g-tabs selected="sports">
            <g-tabs-nav>
                <g-tabs-item name="woman">美女</g-tabs-item>
                <g-tabs-item name="sports">运动</g-tabs-item>
                <g-tabs-item name="finance">财经</g-tabs-item>
            </g-tabs-nav>
        </g-tabs>
        `
        const vm = new Vue({el: div})
        setTimeout(() => {
            let activeItem = vm.$el.querySelector('.tabs-item[data-name="sports"]')
            expect(activeItem.classList.contains('active')).to.be.true
            div.remove()
            vm.$el.remove()
            vm.$destroy()
        }, 0)
    })
    it('props 接受 direction', () => {
        Vue.component('g-tabs', Tabs)
        Vue.component('g-tabs-body', TabsBody)
        Vue.component('g-tabs-item', TabsItem)
        Vue.component('g-tabs-nav', TabsNav)
        Vue.component('g-tabs-panel', TabsPanel)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
         <g-tabs direction="column">
            <g-tabs-nav>
                <g-tabs-item>运动</g-tabs-item>
            </g-tabs-nav>
        </g-tabs>
        `
        const vm = new Vue({el: div})
        setTimeout(() => {
            let tabs = vm.$el.querySelector('.tabs')
            let tabsNav = vm.$el.querySelector('.tabs-nav')
            let tabsItem = vm.$el.querySelector('.tabs-item')
            let line = vm.$el.querySelector('.line')
            expect(tabs.classList.contains('column')).to.be.true
            expect(tabsNav.classList.contains('direction-column')).to.be.true
            expect(tabsItem.classList.contains('column')).to.be.true
            expect(line.classList.contains('line-column')).to.be.true
            div.remove()
            vm.$el.remove()
            vm.$destroy()
        }, 0)
    })
})
