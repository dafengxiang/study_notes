/*
 * @Description: 
 * @Author: wangfengxiang
 * @Date: 2022-02-24 18:25:14
 * @LastEditTime: 2022-09-14 19:42:02
 * @LastEditors: wangfengxiang
 */
import loadSkin from './js/loadSkin.js'
import initDatGUI from './js/initDatGUI.js'
import initScene from './js/initScene.js'
import intervalAnimationFrame from './js/intervalAnimationFrame.js'

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


    
    // 牛仔盒子
    const gibLoader = new THREE.GLTFLoader()
    const dracoLoader = new THREE.DRACOLoader()
    dracoLoader.setDecoderPath('http://static.iqiyi.com/lequ/20220914/')  //使用js方式解压
    gibLoader.setDRACOLoader(dracoLoader)

    gibLoader.load('http://static-d.iqiyi.com/lequ/20220914/afb21599ba8d41fb95a47a5e9f3c28b1.gltf', (a) => {
        console.log('scence: ', a.scenes);
        a.scenes[0].scale.set(50, 50, 50)
        scene.add(a.scenes[0])
    })

    // 初始舞者
    let mixer = null,
        clock = new THREE.Clock()

    // 初始化定时渲染对象
    const intervalRenderInstance = new intervalAnimationFrame(() => {
        const delta = clock.getDelta()
        mixer && mixer.update(delta)
        point.position.set(controls.x, controls.y, controls.z); //点光源位置
        renderer.render(scene, camera);
    })
})()