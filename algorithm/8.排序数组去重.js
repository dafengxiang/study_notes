/*
 * @Description: 8.排序数组去重
 * @Author: wangfengxiang
 * @Date: 2023-08-07 22:42:43
 * @LastEditTime: 2023-08-07 22:56:55
 * @LastEditors: wangfengxiang
 */
const arr = [1, 2, 2, 3, 4, 5, 6, 6, 6, 7, 9]
let i = 0, j = i + 1
function solution(arr) {
    while (i < arr.length) {
        if (arr[i] !== arr[j]) {
            i++
            j++
        } else {
            arr.splice(j, 1)
        }
    }
    return arr
}

// console.log(solution(arr))

// 最优解
function solution1(arr) {
    let i = 0
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++
            arr[i] = arr[j]
        }
    }
    return arr.splice(0, i + 1)
}

console.log(solution1(arr))