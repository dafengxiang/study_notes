/*
 * @Description: 选择排序
 * @Author: wangfengxiang
 * @Date: 2023-03-08 11:57:08
 * @LastEditTime: 2023-03-08 12:10:30
 * @LastEditors: wangfengxiang
 */
const arr = [0, 48, 334,34, 54, 2]


function findMini(arr) {
    let mini = arr[0],
        idx = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < mini) {
            mini = arr[i]
            idx = i
        }
    }
    return [mini, idx]
}
function selectSort(arr) {
    const result = []
    while (arr.length) {
        const [mini, idx] = findMini(arr)
        result.push(mini)
        arr.splice(idx, 1)
    }
    return result
}
console.log( selectSort(arr));