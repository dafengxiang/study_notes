/*
 * @Description: 
 * @Author: wangfengxiang
 * @Date: 2022-02-24 18:25:14
 * @LastEditTime: 2022-09-21 14:57:51
 * @LastEditors: wangfengxiang
 */
import loadSkin from './js/loadSkin.js'
import initDatGUI from './js/initDatGUI.js'
import initScene from './js/initScene.js'
import intervalAnimationFrame from './js/intervalAnimationFrame.js'

(async function init() {
    // 初始化数据控制器
    // const dg = new initDatGUI({
    //     move: {
    //         curVal: 2,
    //         maxVal: 10,
    //     },
    //     speed: {
    //         curVal: 0.008,
    //         maxVal: 0.1,
    //     },
    //     x: {
    //         curVal: 0,
    //         maxVal: 1000,
    //     },
    //     y: {
    //         curVal: 200,
    //         maxVal: 1000,
    //     },
    //     z: {
    //         curVal: 200,
    //         maxVal: 1000,
    //     }
    // })
    // dg.close()
    // let controls = dg.controls
    // 初始环境
    const { scene, camera, renderer, point } = initScene()
    // scene.position.y = -50



    // 牛仔盒子
    const gibLoader = new THREE.GLTFLoader()
    const dracoLoader = new THREE.DRACOLoader()

    // 压缩版本
    dracoLoader.setDecoderPath('http://static.iqiyi.com/lequ/20220914/')  //使用js方式解压
    gibLoader.setDRACOLoader(dracoLoader)

    gibLoader.load('http://static-d.iqiyi.com/lequ/20220921/bb0b461016aa4156bdad35b6d5bbf63e.glb', (a) => {
        window.parent.postMessage('加载好了', '*')
        a.scenes[0].scale.set(2000, 2000, 2000)
        a.scenes[0].rotation.x = -Math.PI * 0.1
        scene.add(a.scenes[0])

        intervalRenderInstance.add(() => {
            // a.scenes[0].rotation.y += controls.speed;
            a.scenes[0].rotation.y += 0.004;
            if (a.scenes[0].rotation.y / Math.PI > 2) a.scenes[0].rotation.y = 0
        })
    })

    // 原始版本
    // console.time('load')
    // gibLoader.load('http://static-d.iqiyi.com/lequ/20220921/312c95c6c1244adc968d40709c823d2e.glb', (a) => {
    //     console.timeEnd('load')
    //     a.scenes[0].scale.set(1500, 1500, 1500)
    //     a.scenes[0].rotation.x = -Math.PI * 0.1
    //     scene.add(a.scenes[0])
    // })

    // 初始舞者
    let mixer = null,
        clock = new THREE.Clock()

    // 初始化定时渲染对象
    const intervalRenderInstance = new intervalAnimationFrame(() => {
        const delta = clock.getDelta()
        mixer && mixer.update(delta)
        // point.position.set(controls.x, controls.y, controls.z); //点光源位置
        point.position.set(0, 0, 200); //点光源位置
        renderer.render(scene, camera);
    })
})()