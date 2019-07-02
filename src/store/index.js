import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import demo from './modules/demo.js'
import addrStatus from './modules/addrStatus.js'

export default new Vuex.Store({
    modules:{
        demo,
        addrStatus
    }
})