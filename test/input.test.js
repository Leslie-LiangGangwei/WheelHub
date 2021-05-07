const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/component/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })

    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('接受 value', () => {
            vm = new Constructor({
                propsData: {
                    value: 'inputValue'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('inputValue')
        })
        it('设置 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('设置 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('设置 error', () => {
            vm = new Constructor({
                propsData: {
                    error: 'Input do not match.'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerHTML).to.equal('Input do not match.')
        })
    })
    // it('点击 button 触发 click 事件', () => {
    //     const Constructor = Vue.extend(Button)
    //     const vm = new Constructor({
    //         propsData: {
    //             icon: 'settings',
    //         }
    //     }).$mount()
    //
    //     const callback = sinon.fake();
    //     vm.$on('click', callback)
    //     vm.$el.click()
    //     expect(callback).to.have.been.called
    // })
})