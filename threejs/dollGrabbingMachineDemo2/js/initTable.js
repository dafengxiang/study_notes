/*
 * @Description: 初始桌面
 * @Author: wangfengxiang
 * @Date: 2022-03-30 17:26:21
 * @LastEditTime: 2022-03-30 18:26:29
 * @LastEditors: wangfengxiang
 */
function createGroundAndWalls(scene) {
    var textureLoader = new THREE.TextureLoader();
    var ground_material = Physijs.createMaterial(
        new THREE.MeshStandardMaterial(
            { map: textureLoader.load('./images/wood-2.jpg') }
        ),
        .9, .3);
    var glass_material = Physijs.createMaterial(
        new THREE.MeshStandardMaterial(
            { map: textureLoader.load('./images/glass.png') }
        ),
        .9, .3);

    var ground = new Physijs.BoxMesh(new THREE.BoxGeometry(60, 1, 60), ground_material, 0);
    ground.castShadow = true;
    ground.receiveShadow = true;
    ground.position.set(0, -20, 0)

    var borderLeft = new Physijs.BoxMesh(new THREE.BoxGeometry(2, 60, 60), ground_material, 0);
    borderLeft.position.x = -31;
    borderLeft.position.y = 30;
    borderLeft.castShadow = true;
    borderLeft.receiveShadow = true;

    ground.add(borderLeft);

    var borderRight = new Physijs.BoxMesh(new THREE.BoxGeometry(2, 60, 60), ground_material, 0);
    borderRight.position.x = 31;
    borderRight.position.y = 30;

    ground.add(borderRight);

    var borderBottom = new Physijs.BoxMesh(new THREE.BoxGeometry(64, 60, 2), glass_material, 0);
    borderBottom.position.z = 30;
    borderBottom.position.y = 30;
    borderBottom.material.transparent = true;
    ground.add(borderBottom);

    var borderTop = new Physijs.BoxMesh(new THREE.BoxGeometry(64, 60, 2), ground_material, 0);
    borderTop.position.z = -30;
    borderTop.position.y = 30;

    ground.add(borderTop);

    scene.add(ground);
}
