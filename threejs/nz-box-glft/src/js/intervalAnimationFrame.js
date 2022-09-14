/*
 * @Description: 定时执行器
 * @Author: wangfengxiang
 * @Date: 2022-02-24 11:43:06
 * @LastEditTime: 2022-02-25 14:00:31
 * @LastEditors: wangfengxiang
 */
export default class intervalAnimationFrame {
    constructor(cb) {
        this.isStop = false
        this.cbs = []
        cb && this.add(cb)
        this.render()
    }
    add(fn) {
        if (!fn || typeof fn !== 'function') return console.error('参数错误！！！')
        const index = this.cbs.length
        this.cbs.push({
            isStop: false,
            fn
        })
        return index
    }
    remove(index = 0) {
        if (!this.cbs[index]) return console.error('参数错误！！！')
        this.cbs[index].isStop = true
    }
    render() {
        !this.isStop && requestAnimationFrame(this.render.bind(this))
        if (this.cbs.length) {
            this.cbs.forEach(({ fn, isStop }) => {
                !isStop && fn()
            })
        }
    }
    stop() {
        this.isStop = true
    }
}


