/*
 * @Description: 初始爪子
 * @Author: wangfengxiang
 * @Date: 2022-03-30 18:30:02
 * @LastEditTime: 2022-03-31 13:44:11
 * @LastEditors: wangfengxiang
 */
// function createZhua(scene){

// }
class Claw {
    constructor(scene) {
        this.clawGroup = new THREE.Group()
        this.itemGroup1 = new THREE.Group()
        var topBall = new Physijs.SphereMesh(new THREE.SphereGeometry(3, 90, 60), Physijs.createMaterial(
            new THREE.MeshStandardMaterial({ color: '0#999999' })
        ), 10);
        // topBall.position.y = 18
        // topBall.position.x = -2.5
        this.clawGroup.add(topBall)

        var ball = new Physijs.SphereMesh(new THREE.SphereGeometry(2, 90, 60), Physijs.createMaterial(
            new THREE.MeshStandardMaterial({ color: '0#999999' })
        ), 10);
        ball.position.y = -10
        ball.position.x = -2.5
        this.itemGroup1.add(ball)

        var bar = new Physijs.CylinderMesh(new THREE.CylinderGeometry(1.5, 1.5, 12, 10), Physijs.createMaterial(
            new THREE.MeshStandardMaterial({ color: '0#999999' })
        ), 10)
        bar.rotation.z = -Math.PI * 0.15
        bar.position.y = -5
        this.itemGroup1.add(bar)

        var teeth = new Physijs.ConeMesh(new THREE.CylinderGeometry(1.5, 0.2, 12, 10), Physijs.createMaterial(
            new THREE.MeshStandardMaterial({ color: '0#999999' })
        ), 10)
        teeth.rotation.z = Math.PI * 0.15
        teeth.position.y = -15
        this.itemGroup1.add(teeth)
        // itemGroup1.rotation.z = -Math.PI * 0.2
        // itemGroup1.translateOnAxis(1,1,1)
        // ball.position.z = 25 - Math.random() * 50
        // ball.position.x = 25 - Math.random() * 50
        // ball.position.y = 30 - Math.random() * 20
        // ball.castShadow = true;
        // ball.receiveShadow = true;
        // this.itemGroup1.position.set(-4.5,-18,0)

        this.itemGroup2 = this.itemGroup1.clone()
        this.itemGroup2.rotation.y = Math.PI * 0.5
        this.itemGroup3 = this.itemGroup1.clone()
        this.itemGroup3.rotation.y = Math.PI * 1

        this.itemGroup4 = this.itemGroup1.clone()
        this.itemGroup4.rotation.y = Math.PI * 1.5

        this.itemGroup1.position.x = -4
        this.itemGroup2.position.z = 4
        this.itemGroup2.position.x = 0
        this.itemGroup3.position.x = 4
        this.itemGroup4.position.z = -4
        this.itemGroup4.position.x = 0

        this.clawGroup.add(this.itemGroup1)
        this.clawGroup.add(this.itemGroup2)
        this.clawGroup.add(this.itemGroup3)
        this.clawGroup.add(this.itemGroup4)
        this.clawGroup.position.y = 18
        scene.add(this.clawGroup)
        this.packup()
    }
    packup() {
        this.itemGroup1.rotation.z = -Math.PI * 0.1
        this.itemGroup2.rotation.x = -Math.PI * 0.1
        this.itemGroup3.rotation.z = -Math.PI * 0.1
        this.itemGroup4.rotation.x = Math.PI * 0.1
    }
    release() {
        this.itemGroup1.rotation.z = 0
        this.itemGroup2.rotation.x = 0
        this.itemGroup3.rotation.z = 0
        this.itemGroup4.rotation.x = 0

    }
}

