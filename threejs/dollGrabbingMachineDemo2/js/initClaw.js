/*
 * @Description: 初始爪子
 * @Author: wangfengxiang
 * @Date: 2022-03-30 18:30:02
 * @LastEditTime: 2022-04-13 15:37:06
 * @LastEditors: wangfengxiang
 */
function createClawItem(weight) {
    let barMesh = new THREE.CylinderGeometry(1.5, 1.5, 12, 10)
    barMesh.translate(0, -6, 0)
    var bar = new Physijs.CylinderMesh(barMesh, Physijs.createMaterial(
        new THREE.MeshStandardMaterial({ color: '0#999999' })
    ), weight)
    bar.rotation.z = -Math.PI * 0.15
    bar.position.x = 2
    bar.position.y = -1

    var ball = new Physijs.SphereMesh(new THREE.SphereGeometry(2, 90, 60), Physijs.createMaterial(
        new THREE.MeshStandardMaterial({ color: '0#999999' })
    ), weight);
    ball.position.y = -11
    bar.add(ball)

    var teeth = new Physijs.ConeMesh(new THREE.CylinderGeometry(1.5, 0.2, 12, 10), Physijs.createMaterial(
        new THREE.MeshStandardMaterial({ color: '0#999999' })
    ), weight)
    teeth.rotation.z = Math.PI * 0.3
    teeth.position.y = -15
    teeth.position.x = 6
    bar.add(teeth)
    return bar
}
class Claw {
    constructor(scene) {
        this.weight = 0
        var topBall = new Physijs.SphereMesh(new THREE.SphereGeometry(3, 90, 60), Physijs.createMaterial(
            new THREE.MeshStandardMaterial({ color: '0#999999' })
        ), this.weight);
        // topBall.position.y = 18
        // topBall.position.x = -2.5
        // this.clawGroup.add(topBall)


        // this.itemGroup1.add(bar)
        // scene.add(bar)
        // bar.rotation.z += -Math.PI * 0.15






        // itemGroup1.rotation.z = -Math.PI * 0.2
        // itemGroup1.translateOnAxis(1,1,1)
        // ball.position.z = 25 - Math.random() * 50
        // ball.position.x = 25 - Math.random() * 50
        // ball.position.y = 30 - Math.random() * 20
        // ball.castShadow = true;
        // ball.receiveShadow = true;
        // this.itemGroup1.position.set(-4.5,-18,0)
        this.itemGroup1 = createClawItem(this.weight)
        this.itemGroup2 = createClawItem(this.weight)
        this.itemGroup2.rotation.y = Math.PI * 0.5
        this.itemGroup3 = createClawItem(this.weight)
        this.itemGroup3.rotation.y = Math.PI * 1

        this.itemGroup4 = createClawItem(this.weight)
        this.itemGroup4.rotation.y = Math.PI * 1.5

        this.itemGroup1.position.x = -2
        this.itemGroup2.position.z = 2
        this.itemGroup2.position.x = 0
        this.itemGroup3.position.x = 2
        this.itemGroup4.position.z = -2
        this.itemGroup4.position.x = 0

        topBall.add(this.itemGroup1)
        topBall.add(this.itemGroup2)
        topBall.add(this.itemGroup3)
        topBall.add(this.itemGroup4)
        // console.log(11);
        this.clawGroup = topBall
        // scene.add(topBall)
        topBall.position.y = 18
        scene.add(topBall)
        this.release()
    }
    packup() {
        this.itemGroup1.rotation.z = -Math.PI * 0.3
        this.itemGroup2.rotation.x = -Math.PI * 0.2
        this.itemGroup3.rotation.z = -Math.PI * 0.3
        this.itemGroup4.rotation.x = Math.PI * 0.2
    }
    release() {
        this.itemGroup1.rotation.z = -Math.PI * 0.15
        this.itemGroup2.rotation.x = 0
        this.itemGroup3.rotation.z = -Math.PI * 0.15
        this.itemGroup4.rotation.x = 0

    }
}

