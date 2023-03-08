/*
 * @Description: 分而治之
 * @Author: wangfengxiang
 * @Date: 2023-03-08 21:57:48
 * @LastEditTime: 2023-03-08 22:21:44
 * @LastEditors: wangfengxiang
 */

// 实现正方形最大分田
// let res
// function findMaxSquare(w, h) {
//     if (w % h === 0) return res = h
//     if (h % w === 0) return res = w
//     if (w > h) w = w % h
//     if (h > w) h = h % w
//     findMaxSquare(w, h)
// }
// findMaxSquare(1680, 640)
// console.log(res);

function findMaxSquare(w, h) {
    if (w % h === 0) return res = h
    if (h % w === 0) return res = w
    if (w > h) w = w % h
    if (h > w) h = h % w
    return findMaxSquare(w, h)
}

console.log(findMaxSquare(1680, 640));

// 分而治之实现加和
// let res1 = 0
// function sum(arr) {
//     res1 += arr.pop()
//     if (arr.length === 0) return
//     sum(arr)
// }
// sum([1, 2, 3, 4])
// console.log(res1);

function sum(arr) {
    if (arr.length === 0) return 0
    return arr.pop() + sum(arr)
}

console.log(sum([1, 2, 3, 5]))

// 优化总结：分级return