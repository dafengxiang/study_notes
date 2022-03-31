/*
 * @Description: 
 * @Author: wangfengxiang
 * @Date: 2022-02-24 18:25:14
 * @LastEditTime: 2022-03-30 15:08:31
 * @LastEditors: wangfengxiang
 */

import loadSkin from './js/loadSkin.js'
import initDatGUI from './js/initDatGUI.js'
import initScene from './js/initScene.js'
import intervalAnimationFrame from './js/intervalAnimationFrame.js'
import nineMesh from './texture/nine1.dae'
import dollGrabbingMachine from './texture/wawa.dae'

(async function init() {
    // 初始化数据控制器
    const dg = new initDatGUI({
        move: {
            curVal: 2,
            maxVal: 10,
        },
        speed: {
            curVal: 0.008,
            maxVal: 0.1,
        },
        x: {
            curVal: 0,
            maxVal: 1000,
        },
        y: {
            curVal: 200,
            maxVal: 1000,
        },
        z: {
            curVal: 200,
            maxVal: 1000,
        }
    })
    dg.close()
    let controls = dg.controls
    // 初始环境
    const { scene, camera, renderer, point } = initScene()


    scene.position.y = -50


    var stoneGeom = new THREE.BoxGeometry(60, 60, 20, 20)
    var strone = new Physijs.BoxMesh(stoneGeom, Physijs.createMaterial(new THREE.MeshStandardMaterial({
        color: 0x999999
    })))
    strone.position.set(0, 100, 0)
    scene.add(strone)





    // 初始化定时渲染对象
    const intervalRenderInstance = new intervalAnimationFrame(() => {
        // const delta = clock.getDelta()
        // mixer && mixer.update(delta)
        point.position.set(controls.x, controls.y, controls.z); //点光源位置
        renderer.render(scene, camera);
        scene.simulate()
    })
})()