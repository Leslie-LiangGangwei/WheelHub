const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/component/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.be.ok
    })
    it('接受 span 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                span: '1'
            }
        }).$mount(div)
        const colElement = vm.$el
        expect(colElement.classList.contains('col-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接受 offset 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                offset: '1'
            }
        }).$mount(div)
        const colElement = vm.$el
        expect(colElement.classList.contains('offset-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接受 pc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                pc: {span: 1, offset: 1}
            }
        }).$mount(div)
        const colElement = vm.$el
        expect(colElement.classList.contains('col-pc-1')).to.equal(true)
        expect(colElement.classList.contains('offset-pc-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接受 narrowPc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                narrowPc: {span: 1, offset: 1}
            }
        }).$mount(div)
        const colElement = vm.$el
        expect(colElement.classList.contains('col-narrow-pc-1')).to.equal(true)
        expect(colElement.classList.contains('offset-narrow-pc-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接受 widePc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                widePc: {span: 1, offset: 1}
            }
        }).$mount(div)
        const colElement = vm.$el
        expect(colElement.classList.contains('col-wide-pc-1')).to.equal(true)
        expect(colElement.classList.contains('offset-wide-pc-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接受 biggestWidePc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                biggestWidePc: {span: 1, offset: 1}
            }
        }).$mount(div)
        const colElement = vm.$el
        console.log(colElement);
        expect(colElement.classList.contains('col-biggest-wide-pc-1')).to.equal(true)
        expect(colElement.classList.contains('offset-biggest-wide-pc-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
})