/*
 * @Description: 阶乘
 * @Author: wangfengxiang
 * @Date: 2023-03-08 12:30:53
 * @LastEditTime: 2023-03-08 12:35:22
 * @LastEditors: wangfengxiang
 */

// 递归实现
function factorial(num){
    if(num===1) return 1
    else return num*(num-1)
}
// 循环实现
function factorial(num) {
    res = num
    while (num > 1) {
        num--
        res *= num
    }
    return res
}
console.log('factorial(3): ', factorial(3));