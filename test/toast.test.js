const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/component/toast'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })
    describe('props', () => {
        it('接受 toastPosition', () => {
            const Constructor = Vue.extend(Toast)
            let vm = new Constructor({
                propsData: {
                    toastPosition: 'top',
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-top')).to.eq(true)
            setTimeout(() => {
                vm.$el.remove()
                vm.$destroy()
            }, 200)
        })
        it('接受 enableHtml', () => {
            const Constructor = Vue.extend(Toast)
            let vm = new Constructor({
                propsData: {
                    enableHtml: true,
                }
            })
            vm.$slots.default = '<strong id="test">Hello World</strong>'
            vm.$mount()
            expect(vm.$el.querySelector('#test')).to.exist
            setTimeout(() => {
                vm.$el.remove()
                vm.$destroy()
            }, 200)
        })
        it('接受 autoClose', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    showTime: 1
                }
            }).$mount(div)
            vm.$on('toastClose', () => {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
                div.remove()
                vm.$el.remove()
                vm.$destroy()
            })
        })
        it('接受 toastButton', (done) => {
            const callback = sinon.fake();
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    toastButton: {
                        text: '关闭',
                        callback
                    },
                }
            }).$mount()
            let toastButton = vm.$el.querySelector('.toastButton')
            expect(toastButton.innerHTML.trim()).to.eq('关闭')
            setTimeout(() => {
                toastButton.click()
                expect(callback).to.have.been.called
                done()
                vm.$el.remove()
                vm.$destroy()
            }, 200)
        })
    })
})