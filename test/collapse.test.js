const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/component/collapse/collapse'
import CollapseItem from '../src/component/collapse/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {
    it('存在.', () => {
        expect(Collapse).to.be.ok
        expect(CollapseItem).to.be.ok
    })
    it('props 接受 selected', (done) => {
        Vue.component('g-collapse', Collapse)
        Vue.component('g-collapse-item', CollapseItem)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-collapse selected="['1']">
            <g-collapse-item title="title 1" name="1">panel 1</g-collapse-item>
            <g-collapse-item title="title 2" name="2">panel 2</g-collapse-item>
            <g-collapse-item title="title 3" name="3">panel 3</g-collapse-item>
        </g-collapse>
        `
        const vm = new Vue({el: div})
        setTimeout(() => {
            let panelElement = vm.$el.querySelector('.panel')
            expect(panelElement.innerText).to.eq('panel 1')
            div.remove()
            vm.$el.remove()
            vm.$destroy()
            done()
        }, 200)
    })
    it('props 不接受 single', (done) => {
        Vue.component('g-collapse', Collapse)
        Vue.component('g-collapse-item', CollapseItem)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-collapse>
            <g-collapse-item title="title 1" name="1">panel 1</g-collapse-item>
            <g-collapse-item title="title 2" name="2">panel 2</g-collapse-item>
            <g-collapse-item title="title 3" name="3">panel 3</g-collapse-item>
        </g-collapse>
        `
        const vm = new Vue({el: div})
        let activeElement1 = vm.$el.querySelector('div[title-name="title 1"]')
        let activeElement2 = vm.$el.querySelector('div[title-name="title 2"]')
        activeElement1.click()
        activeElement2.click()
        setTimeout(() => {
            let panelElement1 = vm.$el.querySelector('div[panel-name="title 1"]')
            let panelElement2 = vm.$el.querySelector('div[panel-name="title 2"]')
            expect(panelElement1.innerText).to.eq('panel 1')
            expect(panelElement2.innerText).to.eq('panel 2')
            div.remove()
            vm.$el.remove()
            vm.$destroy()
            done()
        }, 200)
    })
    it('props 接受 single', (done) => {
        Vue.component('g-collapse', Collapse)
        Vue.component('g-collapse-item', CollapseItem)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-collapse single>
            <g-collapse-item title="title 1" name="1">panel 1</g-collapse-item>
            <g-collapse-item title="title 2" name="2">panel 2</g-collapse-item>
            <g-collapse-item title="title 3" name="3">panel 3</g-collapse-item>
        </g-collapse>
        `
        const vm = new Vue({el: div})
        let activeElement1 = vm.$el.querySelector('div[title-name="title 1"]')
        let activeElement2 = vm.$el.querySelector('div[title-name="title 2"]')
        activeElement1.click()
        activeElement2.click()
        setTimeout(() => {
            let panelElement = vm.$el.querySelector('.panel')
            expect(panelElement.innerText).to.eq('panel 2')
            div.remove()
            vm.$el.remove()
            vm.$destroy()
            done()
        }, 200)
    })
})