/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {

    // 第一哥位置和最后一个位置不可能为峰顶
    let l = 1
    // 峰顶就是上下
    let r = arr.length - 2
    while (l < r) {
        let mid = Math.floor((l + r) / 2)
        //说明左侧可能有一个峰值 或者mid就是一个峰值
        if (arr[mid] > arr[mid] + 1) {
            r = mid
        } else {
            // arr[mid] <= arr[mid +1]  说明arr[mid + 1] 可能就是峰值
            l = mid + 1
        }
    }
    return l
};
let arr = [0, 1, 0]
console.log(peakIndexInMountainArray(arr))