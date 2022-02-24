/*
 * @Description: 初始化DatGUI
 * @Author: wangfengxiang
 * @Date: 2022-02-21 13:39:28
 * @LastEditTime: 2022-02-21 14:06:22
 * @LastEditors: wangfengxiang
 */

/**
 * dataArr 可控制数据对象 
 * { move: { curVal: 5, maxVal: 10, } }
 */
export default class initDatGUI extends dat.GUI {
    constructor(dataObj) {
        const GUI = super()
        this.GUI = GUI

        this.controls = new function () {
            for (let key in dataObj) {
                this[key] = dataObj[key].curVal
            }
        }

        for (let key in dataObj) {
            const { minVal = 0, maxVal = 5 } = dataObj[key]
            this.GUI.add(this.controls, key, minVal, maxVal)
        }

    }
}