// 两数目标求和
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
function suction(arr, num) {
    let i = 0,
        numObj = {}, res = []
    while (i < arr.length) {
        targetNum = num - arr[i]
        if (numObj[arr[i]]) res.push([numObj[arr[i]], arr[i]])
        else numObj[targetNum] = arr[i]
        i++
    }
    return res
}

// console.log(suction(arr, 17));

function suction1(arr, num) {
    const res = []
    const def = (index, sum, tmpArray) => {
        if (sum === num) res.push(tmpArray.slice())
        if (sum > num) return
        for (let i = index; i < arr.length; i++) {
            tmpArray.push(arr[i])
            
            def(i+1,sum + arr[i],tmpArray)
            // tmpArray.pop()
        }
    }
    def(0,0,[])
    return res
}
console.log(suction1(arr, 17));