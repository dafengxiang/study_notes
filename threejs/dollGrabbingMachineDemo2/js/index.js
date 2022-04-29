/*
 * @Description: 
 * @Author: wangfengxiang
 * @Date: 2022-03-30 16:43:56
 * @LastEditTime: 2022-04-14 11:39:14
 * @LastEditors: wangfengxiang
 */
let controls
let x = 15, z = 15, y = 18
let claw
function init() {

    Physijs.scripts.worker = './js/physijs_worker.js';
    Physijs.scripts.ammo = './ammo.js';

    // use the defaults
    var stats = initStats();
    var renderer = initRenderer();
    var camera = initCamera(new THREE.Vector3(0, 50, 200));
    var trackballControls = initTrackballControls(camera, renderer);
    var clock = new THREE.Clock();
    var scene = new Physijs.Scene;
    initDefaultLighting(scene);
    scene.add(new THREE.AmbientLight(0x0393939));

    // setup controls
    //   var colors = [0x66ff00, 0x6600ff ];
    var gui = new dat.GUI();
    controls = {
        gravityX: 0,
        gravityY: -50,
        gravityZ: 0,
        rotation: 0,
    };

    gui.add(controls, "gravityX", -100, 100, 1).onChange(function (e) { scene.setGravity(new THREE.Vector3(controls.gravityX, controls.gravityY, controls.gravityZ)) });
    gui.add(controls, "gravityY", -100, 100, 1).onChange(function (e) { scene.setGravity(new THREE.Vector3(controls.gravityX, controls.gravityY, controls.gravityZ)) });
    gui.add(controls, "gravityZ", -100, 100, 1).onChange(function (e) { scene.setGravity(new THREE.Vector3(controls.gravityX, controls.gravityY, controls.gravityZ)) });
    gui.add(controls, "rotation", 0, 2, 0.1);

    scene.setGravity(new THREE.Vector3(0, -50, 0));

    // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
    // var axisHelper = new THREE.AxisHelper(250)
    // scene.add(axisHelper)

    createGroundAndWalls(scene);

    for (let i = 0; i < 15; i++) {
        createBall(scene);
    }

    claw = new Claw(scene)


    render();
    function render() {
        stats.update();
        var delta = clock.getDelta();
        trackballControls.update(delta);
        scene.children[3].rotation.z = Math.PI * controls.rotation
        claw.clawGroup.position.set(x, y, z)

        requestAnimationFrame(render);
        renderer.render(scene, camera);
        scene.simulate(undefined, 1);
    }
}
function changePosition(idx) {
    switch (idx) {
        case 0: z--; break;
        case 1: z++; break;
        case 2: x--; break;
        case 3: x++; break;
        case 4: claw.packup(); break;
        case 5: claw.release(); break;
        case 6: y++; break;
        case 7: y--; break;
    }
}