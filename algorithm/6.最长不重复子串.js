/*
 * @Description: 6.最长不重复子串
 * @Author: wangfengxiang
 * @Date: 2023-08-07 21:49:34
 * @LastEditTime: 2023-08-07 22:04:37
 * @LastEditors: wangfengxiang
 */
const str = 'ababdbb'
function suction(str) {
    let maxlength = 0, i = 0, j = 0
    while (str.length > j) {
        j++
        if (str[i] === str[j]) {
            if (j - i > maxlength) maxlength = j - i
            i = j
        } 
    }
    return maxlength
}

console.log(suction(str));

// 解法：双指针