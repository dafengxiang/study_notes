import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
    },
    getters: {
        
    },
    mutations: {
        add(state, num) {
            state.count += num
        }
    }
})
export default store
