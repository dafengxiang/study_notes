/*
 * @Description: 不添加数组，为两个有序数组排序
 * @Author: wangfengxiang
 * @Date: 2023-04-05 15:44:57
 * @LastEditTime: 2023-04-05 16:57:26
 * @LastEditors: wangfengxiang
 */
const arr1 = [1, 3, 5, 45, 65],
    arr2 = [1, 2, 3, 4, 5, 6, 7, 78, 92]
// 普通解
function sort(arr1, arr2) {
    let idx = 0
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] < arr2[idx]) {
            if (i === arr1.length - 1) {
                arr1.push(...arr2.slice(idx))
                break
            }
            continue
        }
        while (arr1[i] >= arr2[idx]) {
            arr1.splice(i, 0, arr2[idx])
            idx++;
        }
    }
    return arr1
}

// 最优解
function sort2(arr1, arr2) {
    let i = arr1.length - 1
    j = arr2.length - 1
    k = arr1.length + arr2.length - 1
    while (j > -1) {
        if (arr1[i] > arr2[j]) {
            arr1[k] = arr1[i]
            i--
        } else {
            arr1[k] = arr2[j]
            j--
        }
        k--
    }
    return arr1
}

// 思路：获取两数组总长度减一为目标数组最大下标，取两数组最大数比较，值大的赋值给目标数组最大下标，最大下标递减，取值数组指针递减，直到非目标数组清空，时间复杂度O(n)

console.log(sort2(arr1, arr2));