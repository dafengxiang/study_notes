/*
 * @Description: 初始球
 * @Author: wangfengxiang
 * @Date: 2022-03-30 17:27:51
 * @LastEditTime: 2022-03-30 18:50:44
 * @LastEditors: wangfengxiang
 */
function createBall(scene) {
    var ball = new Physijs.SphereMesh(new THREE.SphereGeometry(6, 90, 60), Physijs.createMaterial(
        new THREE.MeshStandardMaterial({ color: '0#ff0000' })
    ), 10);
    ball.position.z = 25 - Math.random() * 50
    ball.position.x = 25 - Math.random() * 50
    ball.position.y = 30 - Math.random() * 20
    ball.castShadow = true;
    ball.receiveShadow = true;
    scene.add(ball)
}