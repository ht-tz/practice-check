// ///排序复习
// //冒泡排序
// function bubbleSort(arr) {
//     let len = arr.length
//     //外层控制排序的圈数
//     for (let j = len - 1; j >= 0; j--) {
//         let flag = true
//         for (let i = 0; i < j; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 flag = false
//             }
//         }
//         //  j之前都是排好序的，一轮下来无排序 说明数组已经是有序的了
//         if (flag) break
//     }
//     return arr
// }
//
// function selectSort(arr) {
//     let len = arr.length
//     for (let i = 1; i < len - 1; i++) {
//         let min = i
//         for (let j = i + 1; j < len; j++) {
//             if (arr[min] < arr[j]) {
//                 min = j
//             }
//         }
//         let temp = arr[i]
//         arr[i] = arr[min]
//         arr[min] = temp
//     }
//
//     return arr
// }
//
// function insertSort(arr) {
//     let len = arr.length
//     for (let i = 1; i < len; i++) {
//         let pre = i - 1
//         let cur = arr[i]
//         while (pre >= 0 && cur < arr[pre]) {
//             //前一个数字的 大于当前整个数字  前一个数字后移动
//             arr[pre + 1] = arr[pre]
//             pre--
//         }
//         //移动完毕，找到了cur的位置
//         arr[pre + 1] = cur
//     }
//     return arr
// }
//
// // 希尔排序
// function shellSort(arr) {
//     let len = arr.length
//     for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
//         for (let i = gap; i < len; i++) {
//             let j = i
//             let cur = arr[i]
//             while (j - gap > 0 && cur < arr[j - gap]) {
//                 arr[j] = arr[j - gap]
//                 j -= gap
//             }
//             arr[j] = cur
//         }
//     }
//     return arr
// }
//
//
// function mergeSort(arr) {
//     if (arr.length < 2) return arr
//     let mid = Math.floor(arr.length / 2)
//     let right = arr.slice(mid, arr.length)
//     let left = arr.slice(0, mid)
//
//     let larr = mergeSort(left)
//     let rarr = mergeSort(right)
//     return merge(larr, rarr)
// }
//
// function merge(left, right) {
//     let res = []
//     let [l, r] = [left.length, right.length]
//     while (l && r) {
//         if (left[0] < right[0]) {
//             res.push(left.shift())
//         } else {
//             res.push(right.shift())
//         }
//     }
//     while (left.length) {
//         res.push(left.shift())
//     }
//     while (right.length) {
//         res.push(right.shift())
//     }
//     return res
// }

// 快速排序
function quickSort(arr, l, r) {
    // 选择一个基准值比基准大的都在右边，比基准值小的都在左边，大都在右边
    if (l > r) return
    let base = arr[l]
    let i = l,
        j = r
    // i 和 j 没有相遇
    while (i !== j) {
        //大于基准值向左边移动 找到小于基准值的这种情况
        while (arr[j] >= base && i < j) j--
        // 小于基准值向右移动
        while (arr[i] <= base && i < j) i++

        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    // i===j   i 就是基准值的位置和原来的基准值位置进行一个交换
    // 先保留i上的数据
    // 交换base, 其实base已经存储了arr[l]
    //先替换l位置的数据
    arr[l] = arr[i]
    //在赋值到i的数据
    arr[i] = base
    quickSort(arr, l, i - 1)
    quickSort(arr, i + 1, r)
}

function quick(arr) {
    if (arr.length < 2) return arr
    quickSort(arr, 0, arr.length - 1)
    return arr
}

let arr1 = [6, 5, 4, 3, 2, 1]
console.log(quick(arr1))