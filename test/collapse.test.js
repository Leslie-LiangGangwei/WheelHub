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
})