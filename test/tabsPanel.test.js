const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/component/tabs/tabs'
import TabsBody from '../src/component/tabs/tabs-body'
import TabsItem from '../src/component/tabs/tabs-item'
import TabsNav from '../src/component/tabs/tabs-nav'
import TabsPanel from '../src/component/tabs/tabs-panel'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsPanel', () => {
    it('存在.', () => {
        expect(TabsPanel).to.be.ok
    })
    it('props 接受 name ', () => {
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
                <g-tabs-item name="sports">运动</g-tabs-item>
            </g-tabs-nav>
		    <g-tabs-body>
		        <g-tabs-panel name="sports">运动相关资讯</g-tabs-panel>
            </g-tabs-body>
        </g-tabs>
        `
        const vm = new Vue({el: div})
        setTimeout(() => {
            let activePanel = vm.$el.querySelector('.tabs-panel[data-name="sports"]')
            expect(activePanel).to.be.ok
            div.remove()
            vm.$el.remove()
            vm.$destroy()
        }, 0)
    })

})
