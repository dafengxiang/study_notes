/*
 * @Description: 
 * @Author: wangfengxiang
 * @Date: 2022-02-24 11:43:06
 * @LastEditTime: 2022-02-24 14:02:06
 * @LastEditors: wangfengxiang
 */
export default class intervalAnimationFrame {
    constructor(cb) {
        this.cb = cb
        this.isStop = false
        this.render()
    }
    render() {
        !this.isStop && requestAnimationFrame(this.render.bind(this))
        this.cb && this.cb()
    }
    stop() {
        this.isStop = true
    }
}


