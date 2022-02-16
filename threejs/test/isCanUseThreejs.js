/*
 * @Description: 判断是否可用threejs
 * @Author: wangfengxiang
 * @Date: 2022-02-15 14:35:34
 * @LastEditTime: 2022-02-16 14:31:47
 * @LastEditors: wangfengxiang
 */
// https://static.iqiyi.com/lequ/20220216/isCanUseThreejs.js
; (function () {
    if (!window.H5 || !window.THREE) {
        return console.warn('Not loaded into buried point file or threejs file!!!');
    }

    var ua = '';
    var platform = '';
    if (typeof window !== 'undefined' && window.navigator) {
        ua = window.navigator.userAgent
        platform = window.navigator.platform
    }

    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
        ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
        ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
        iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);

    var iQiYi = /iqiyi/i.test(ua) || ua === "reload",
        system = android ? 'android' : iphone || ipad || ipod ? 'iOS' : 'else';

    try {
        new THREE.WebGLRenderer();
        H5.sendPingback_rseat('threejs_canuse_WebGL_' + iQiYi + '_' + system);
    } catch (err) {
        try {
            new THREE.CanvasRenderer();
            H5.sendPingback_rseat('threejs_canuse_Canvas_' + iQiYi + '_' + system);
        } catch (err) {
            try {
                new THREE.CSS3DRenderer();
                H5.sendPingback_rseat('threejs_canuse_CSS3D_' + iQiYi + '_' + system);
            } catch (err) {
                H5.sendPingback_rseat('threejs_cantuse_' + iQiYi + '_' + system);
            }
        }
    }
    console.log('can use test!!!');
})()