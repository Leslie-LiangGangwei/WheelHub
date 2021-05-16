const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/component/gird/row'
import Col from '../src/component/gird/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
    })
    it('测试接收 props', (done) => {
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-row gutter="16">
            <g-col span="12"></g-col>
            <g-col span="12"></g-col>
        </g-row>
        `
        const vm = new Vue({el: div})
        setTimeout(() => {
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.equal('-8px')
            expect(getComputedStyle(row).marginRight).to.equal('-8px')
            const col = vm.$el.querySelector('.col')
            expect(getComputedStyle(col).paddingLeft).to.equal('8px')
            expect(getComputedStyle(col).paddingRight).to.equal('8px')
            done()
            vm.$el.remove()
            vm.$destroy()
        })

    })
    it('接受 justify 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        let vm = new Constructor({
            propsData: {
                justify: 'center'
            }
        }).$mount(div)
        const rowElement = vm.$el
        expect(getComputedStyle(rowElement).justifyContent).to.equal('center')
        div.remove()
        vm.$destroy()
    })
})