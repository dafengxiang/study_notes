/*
 * @Description: 加载贴图
 * @Author: wangfengxiang
 * @Date: 2022-02-18 10:12:56
 * @LastEditTime: 2022-02-18 13:19:20
 * @LastEditors: wangfengxiang
 */
export default function (url) {
    return new Promise((resolve, reject) => {
        if (!url) return reject('url为空！！！')
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(url, function (texture) {
            resolve(texture)
        })
    })
}
