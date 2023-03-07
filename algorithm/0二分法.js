/*
 * @Description: 二分法查找数字所在下标
 * @Author: wangfengxiang
 * @Date: 2023-03-07 17:35:20
 * @LastEditTime: 2023-03-07 18:12:35
 * @LastEditors: wangfengxiang
 */
const arr = [1, 2, 3, 4, 5, 6, 7, 78]              // 要求必须是有序数组
let num = 1
function find(arr, target) {
    let high = arr.length - 1,                     // 最大下标
        low = 0                                    // 最小下标
    while (high >= low) {
        console.log('执行次数：', num++)
        const mid = Math.floor((high + low) / 2),  // 向上取整会增加执行次数（1->4）
            val = arr[mid]
        if (val > target) {
            high = mid - 1
        } else if (val < target) {
            low = mid + 1
        } else {
            return mid
        }
    }
    return undefined
}

console.log('结果：',find(arr, 1))