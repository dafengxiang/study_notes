/*
 * @Description: 
 * @Author: wangfengxiang
 * @Date: 2022-02-24 18:25:14
 * @LastEditTime: 2022-02-25 13:56:47
 * @LastEditors: wangfengxiang
 */
import Cake from './js/Cake.js'
import loadSkin from './js/loadSkin.js'
import initDatGUI from './js/initDatGUI.js'
import initScene from './js/initScene.js'
import intervalAnimationFrame from './js/intervalAnimationFrame.js'
import innerSkinImg from './images/inner_skin.jpeg'
import nineMesh from './texture/nine1.dae'
// console.log('innerSkinImg: ', innerSkinImg);

(async function init() {

    // 初始化数据控制器
    const { controls: control } = new initDatGUI({
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

    // 初始环境
    const { scene, camera, renderer, controls, point } = initScene()
    scene.position.y = -50

    // 加载纹理
    const outSkin = new THREE.MeshLambertMaterial({
        // map: await loadSkin('/cakeDemo/images/aside_skin.jpg')
        color: '0#999999'
    })
    const innerSkin = new THREE.MeshLambertMaterial({
        map: await loadSkin(innerSkinImg)
    })

    // 初始先转组
    const rotateGroup = new THREE.Group()
    scene.add(rotateGroup)

    // 初始第一块蛋糕
    const initSize = 1.7
    let cake = new Cake({ size: initSize, outSkin, innerSkin })
    rotateGroup.add(cake)

    // 初始九周年蜡烛
    const colladaLoader = new THREE.ColladaLoader();
    let fire = new THREE.Group()
    colladaLoader.load(nineMesh, (res) => {
        res.scene.children[0].scale.set(1, 1, 1)
        fire.add(res.scene.children[0])
        fire.rotation.set(-Math.PI * 0.5, -Math.PI * 0.1, 0)
        fire.position.set(-20, 70, 0)
        rotateGroup.add(fire)
    })

    // 初始化定时渲染对象
    const intervalRenderInstance = new intervalAnimationFrame(() => {
        point.position.set(control.x, control.y, control.z); //点光源位置
        renderer.render(scene, camera);
    })

    // 旋转
    const rotateRender = intervalRenderInstance.add(() => {
        rotateGroup.rotation.y += control.speed;
        if (rotateGroup.rotation.y / Math.PI > 2) rotateGroup.rotation.y = 0
    })

    btn.onclick = async () => {
        // 旋转停止，删除旧蛋糕
        intervalRenderInstance.remove(rotateRender)
        rotateGroup.remove(cake)

        // 初始两块新蛋糕
        let rotation = rotateGroup.rotation.y / Math.PI
        let size = 0
        if (rotation < 0.5) size = 0.5 - rotation
        if (0.5 < rotation && rotation < 1.5) size = 1.5 - rotation
        if (1.5 < rotation && rotation < 2) size = 2.5 - rotation

        const sliceCake = new Cake({ size, rotate: rotation * Math.PI, outSkin, innerSkin })
        const restCake = new Cake({ size: initSize - size, rotate: rotation * Math.PI + size * Math.PI, outSkin, innerSkin })

        scene.add(restCake).add(sliceCake)

        const raceRender = intervalRenderInstance.add(() => {
            sliceCake.position.y += control.move;
            if (sliceCake.position.y > 130) intervalRenderInstance.remove(raceRender)
        })
    }
})()