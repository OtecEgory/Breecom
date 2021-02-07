import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions:{},

    mutations:{},

    state:{
        counter:0,
        isActive: false,
        isShow: false,
        isVisible: true,
    },

    getters: {},
    modules:{},
})