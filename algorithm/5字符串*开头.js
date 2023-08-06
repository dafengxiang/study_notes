/*
 * @Description: 字符串*开头，数字放后面【核心知识进阶】P501
 * @Author: wangfengxiang
 * @Date: 2023-08-06 19:46:53
 * @LastEditTime: 2023-08-06 20:17:36
 * @LastEditors: wangfengxiang
 */
const str = '1873*237*8*9'
function toStartStar(str) {
    const strArr = str.split('')
    let j = strArr.length - 1, i = 0
    while (i <= j) {
        if (/\d/.test(strArr[i])) {
            let curItem = strArr.splice(i,1)
            strArr.push(curItem)
            j--
        }else i++
    }
    return strArr.join('')
}

console.log(toStartStar(str))