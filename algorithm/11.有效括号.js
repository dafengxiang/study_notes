/*
 * @Description: 有效括号
 * @Author: wangfengxiang
 * @Date: 2023-08-13 13:22:25
 * @LastEditTime: 2023-08-13 13:39:30
 * @LastEditors: wangfengxiang
 */

function solution(str) {
    const obj = {
        '(': ')', '{': '}', '[': ']'
    }
    let hopeEl = ''
    for (let i = 0; i < str.length; i++) {
        if (!hopeEl)hopeEl = obj[str[i]]
        else {
            if (str[i] !== hopeEl) return false
            else hopeEl = ''
        }
    }
    return true
}

console.log(solution('[]{)}'))