/*
 * @Description: 快速排序
 * @Author: wangfengxiang
 * @Date: 2023-03-09 09:18:33
 * @LastEditTime: 2023-03-09 09:33:24
 * @LastEditors: wangfengxiang
 */
function quikSort(arr) {
    if (arr.length === 1 || arr.length === 0) return arr
    const num = arr[0],
        s = [],
        l = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < num) {
            s.push(arr[i])
        } else {
            l.push(arr[i])
        }
    }
    return [...quikSort(s), num, ...quikSort(l)]

}

console.log(quikSort([3, 5, 3, 2, 1, 6, 7, 0]))