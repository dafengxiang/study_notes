import Vue from "vue";

class Store {
    constructor(options) {
        this.vm = new Vue({
            data: {
                state: options.state
            }
        })

        const getters = options.getters || {}
        this.getters = {}
        Object.keys(getters).forEach(getterKey => {
            Object.defineProperty(this.getters, getterKey, {
                get: () => {
                    return getters[getterKey](this.state)
                }
            })
        })

        const mutations = options.mutations || {}
        this.mutations = {}
        Object.keys(mutations).forEach(mutationKey => {
            return this.mutations[mutationKey] = (...rest) => {
                mutations[mutationKey](this.state, ...rest)
            }
        })

        this.commit = (method, ...rest) => {
            this.mutations[method](...rest)
        }
    }
    get state() {
        return this.vm.state
    }
}

function install(Vue) {
    Vue.mixin({
        beforeCreate() {
            if (this.$options && this.$options.store) {
                this.$store = this.$options.store
            } else {
                if (this.$parent && this.$parent.$store) {
                    this.$store = this.$parent.$store
                }
            }
        }
    })
}

// 提供全局响应数据
// 数据改变检测，回溯（插件）
// 持久化问题 插件

export default {
    Store,
    install
}
