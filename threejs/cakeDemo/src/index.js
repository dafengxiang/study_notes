/*
 * @Description: 
 * @Author: wangfengxiang
 * @Date: 2022-02-24 18:25:14
 * @LastEditTime: 2022-03-30 15:35:48
 * @LastEditors: wangfengxiang
 */
import Cake from './js/Cake.js'
import loadSkin from './js/loadSkin.js'
import initDatGUI from './js/initDatGUI.js'
import initScene from './js/initScene.js'
import intervalAnimationFrame from './js/intervalAnimationFrame.js'
import innerSkinImg from '../images/inner_skin.jpeg'
import daoSkinImg from './images/dao_skin.png'
import nineMesh from './texture/nine1.dae'
import RumbaDancingMesh from './texture/RumbaDancing.dae'
import wawa from './texture/wawa.dae'

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

    // 加载纹理
    const outSkin = new THREE.MeshLambertMaterial({
        // map: await loadSkin('/cakeDemo/images/aside_skin.jpg')
        color: '0#999999'
    })
    const innerSkin = new THREE.MeshLambertMaterial({
        map: await loadSkin(innerSkinImg)
    })
    const daoSkin = new THREE.MeshLambertMaterial({
        map: await loadSkin(daoSkinImg)
    })

    // 初始先转组
    const rotateGroup = new THREE.Group()
    scene.add(rotateGroup)

    // 初始第一块蛋糕
    const initSize = 1.7
    let cake = new Cake({ size: initSize, outSkin, innerSkin })
    // rotateGroup.add(cake)

    // 初始九周年蜡烛
    const colladaLoader = new THREE.ColladaLoader();
    let fire = new THREE.Group()
    colladaLoader.load(nineMesh, (res) => {
        res.scene.children[0].scale.set(1, 1, 1)
        fire.add(res.scene.children[0])
        fire.rotation.set(-Math.PI * 0.5, -Math.PI * 0.1, 0)
        fire.position.set(-20, 70, 0)
        // rotateGroup.add(fire)
    })
    // 初始舞者
    let mixer = null,
        clock = new THREE.Clock()
    // colladaLoader.load(RumbaDancingMesh, ({ scene: dancer }) => {
    //     scene.add(dancer)
    //     console.log('dancer: ', dancer);
    //     dancer.scale.set(1, 1, 1)
    //     dancer.position.set(0, -20, -150)
    //     mixer = new THREE.AnimationMixer(dancer)
    //     const clipAction = mixer.clipAction(dancer.animations[0]).play()
    //     clipAction.getClip()
    // })
    colladaLoader.load(wawa, (a) => {
        console.log('a: ', a);
        let wawa = a.scene
        console.log('wawa: ', wawa);
        wawa.scale.set(0.5, 0.5, 0.5)
        wawa.position.set(0, 0, 0)
        wawa.rotation.y = -Math.PI * 0.5

        mixer = new THREE.AnimationMixer(wawa)
        console.log('mixer: ', mixer);
        const clipAction = mixer.clipAction(wawa.animations[0]).setDuration(1).play()
        // clipAction.getClip()
        
        scene.add(wawa)
    })

    // 初始化定时渲染对象
    const intervalRenderInstance = new intervalAnimationFrame(() => {
        const delta = clock.getDelta()
        mixer && mixer.update(delta)
        point.position.set(controls.x, controls.y, controls.z); //点光源位置
        renderer.render(scene, camera);
    })

    // 旋转
    const rotateRender = intervalRenderInstance.add(() => {
        rotateGroup.rotation.y += controls.speed;
        if (rotateGroup.rotation.y / Math.PI > 2) rotateGroup.rotation.y = 0
    })

    let isCut = false
    btn.onclick = async () => {
        if (isCut) return alert('别贪心，只能切一次~')
        isCut = true
        // 旋转停止
        intervalRenderInstance.remove(rotateRender)

        // 刀切
        const dao = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), daoSkin)
        dao.material.transparent = true;
        dao.position.set(-50, 20, 0)
        scene.add(dao)
        const cutRender = intervalRenderInstance.add(() => {
            dao.position.x += controls.move;
            if (dao.position.x > 100) {
                intervalRenderInstance.remove(cutRender)
                scene.remove(dao)
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
                    sliceCake.position.y += controls.move;
                    if (sliceCake.position.y > 130) intervalRenderInstance.remove(raceRender)
                })
            }
        })
    }
})()