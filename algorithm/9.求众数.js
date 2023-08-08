/*
 * @Description: 9.求众数
 * @Author: wangfengxiang
 * @Date: 2023-08-08 08:21:42
 * @LastEditTime: 2023-08-08 08:41:50
 * @LastEditors: wangfengxiang
 */
const arr = [1, 2, 3, 4, 4, 2, 1, 1, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,]

function solution(arr) {
    let result = arr[0],
        count = 1

    for (let i = 0; i < arr.length; i++) {
        if (count === 0) result = arr[i]
        if (result === arr[i]) count++
        else count--
    }

    // 书中未做此操作
    return arr.filter(e => e === result).length > arr.length / 2 ? result : null

}

console.log(solution(arr))