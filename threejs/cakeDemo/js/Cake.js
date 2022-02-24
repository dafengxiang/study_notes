/*
 * @Description: 初始化蛋糕
 * @Author: wangfengxiang
 * @Date: 2022-02-17 15:53:49
 * @LastEditTime: 2022-02-23 19:18:56
 * @LastEditors: wangfengxiang
 */

export default class {
    constructor({ rotate, size, innerSkin, outSkin }) {
        const Instance = new THREE.Group()
        // 蛋糕主体
        const cakeBody = new THREE.CylinderGeometry(50, 50, 40, 100, 1, false, 0, Math.PI * size);
        Instance.add(new THREE.Mesh(cakeBody, outSkin))

        // 蛋糕切面
        const leftSkin = new THREE.Mesh(new THREE.PlaneGeometry(50, 40), innerSkin)
        leftSkin.position.set(-25, 0, 0)
        var group = new THREE.Group().add(leftSkin)
        group.rotation.y = Math.PI * (size - 1.5)
        Instance.add(group)

        const rightSkin = new THREE.Mesh(new THREE.PlaneGeometry(50, 40), innerSkin)
        rightSkin.rotation.y = -Math.PI / 2
        rightSkin.position.set(0, 0, 25)
        Instance.add(rightSkin)

        // 旋转角度
        Instance.rotation.y = rotate || Math.PI * 0

        return Instance
    }
}