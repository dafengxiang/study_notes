/*
 * @Description: 初始场景
 * @Author: wangfengxiang
 * @Date: 2022-02-24 11:10:48
 * @LastEditTime: 2022-09-21 15:29:33
 * @LastEditors: wangfengxiang
 */

export default function () {
    const scene = new THREE.Scene()
    // 点光源
    var point = new THREE.PointLight(0xffffff);
    scene.add(point); //点光源添加到场景中

    // 环境光
    var ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);

    // 相机设置
    var width = window.innerWidth; //窗口宽度
    var height = window.innerHeight; //窗口高度
    var k = width / height; //窗口宽高比
    // 创建相机对象
    var camera = new THREE.PerspectiveCamera(60, k);
    camera.position.set(0, 100, 200); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)

    // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
    // var axisHelper = new THREE.AxisHelper(250)
    // scene.add(axisHelper)

    // 创建渲染器对象
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height); // 设置渲染区域尺寸
    renderer.setClearColor(0xb9d3ff, 0); // 设置背景颜色

    let pixelRatio = window.devicePixelRatio < 1.5 ? 1.5 : window.devicePixelRatio;
    renderer.setPixelRatio(pixelRatio);
    renderer.antialias = true;

    container.appendChild(renderer.domElement); // body元素中插入canvas对象

    var controls = new THREE.OrbitControls(camera, renderer.domElement) //创建控件对象
    return {
        scene,
        camera,
        renderer,
        controls,
        point
    }
}
