/*
 * @Description: 初始化蛋糕
 * @Author: wangfengxiang
 * @Date: 2022-02-17 15:53:49
 * @LastEditTime: 2022-02-18 13:22:45
 * @LastEditors: wangfengxiang
 */
import loadSkin from './loadSkin.js'
export default async function ({ rotate, size }) {

    const cakeGroup = new THREE.Group()
    // 蛋糕主体
    const cakeBody = new THREE.CylinderGeometry(50, 50, 40, 100, 1, false, 0, Math.PI * size);

    // 纹理
    const cakeSkin = new THREE.MeshLambertMaterial({
        map: await loadSkin('/cakeDemo/images/aside_skin.jpg')
    })
    const cakeinnerSkin = new THREE.MeshLambertMaterial({
        map: await loadSkin('/cakeDemo/images/inner_skin.jpeg')
    })

    cakeGroup.add(new THREE.Mesh(cakeBody, cakeSkin))

    // 蛋糕切面
    const leftSkin = new THREE.Mesh(new THREE.PlaneGeometry(50, 40), cakeinnerSkin)
    leftSkin.position.set(-25, 0, 0)
    var group = new THREE.Group().add(leftSkin)
    group.rotation.y = Math.PI * (size - 1.5)
    cakeGroup.add(group)

    const rightSkin = new THREE.Mesh(new THREE.PlaneGeometry(50, 40), cakeinnerSkin)
    rightSkin.rotation.y = -Math.PI / 2
    rightSkin.position.set(0, 0, 25)
    cakeGroup.add(rightSkin)

    // 旋转角度
    cakeGroup.rotation.y = rotate || Math.PI * 0
    return cakeGroup
}
