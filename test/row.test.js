const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/component/grid/row'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
    })
    it('接受 gutter 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        let vm = new Constructor({
            propsData: {
                gutter: {iphone: 8}
            }
        }).$mount(div)
        const rowElement = vm.$el
        expect(rowElement.classList.contains('gutter-iphone-8')).to.equal(true)
        div.remove()
        vm.$destroy()
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
        vm.$el.remove()
        vm.$destroy()
    })
})