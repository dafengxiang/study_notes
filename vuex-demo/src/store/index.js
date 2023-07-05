import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from './myVuex'

// 注册
Vue.use(Vuex)

// 实例化
const store = new Vuex.Store({
    state: {
        count: 0,
    },
    getters: {
        double(state) {
            return state.count * 2
        }
    },
    mutations: {
        add(state, num) {
            state.count += num
        }
    }
})
export default store
