const expect = chai.expect;
import Vue from 'vue'
import TabsItem from '../src/component/tabs/tabs-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.be.ok
    })
    it('props 接受 name ', () => {
        const Constructor = Vue.extend(TabsItem)
        let vm = new Constructor({
                propsData: {
                    name: 'sports'
                }
            }
        ).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('sports')
        vm.$el.remove()
        vm.$destroy()
    })
    it('props 接受 disabled ', () => {
        const Constructor = Vue.extend(TabsItem)
        let vm = new Constructor({
            propsData: {
                disabled: true,
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled'))
        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })
})
