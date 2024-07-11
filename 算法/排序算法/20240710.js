// function bubbleSort(arr) {
//     let len = arr.length
//     for (let i = 0; i < len; i++) {
//         let flag = true
//         // 因为要和 j+1比较
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//                 flag = false
//             }
//         }
//         if (flag) break
//     }
//     return arr
// }

// 希尔排序
// function shellSort(arr) {
//     let len = arr.length
//     //  初始化的增量间隔
//     let gap = Math.floor(len / 2)
//     while (gap >= 1) {
//         for (let i = gap; i < len; i++) {
//             let temp = arr[i]
//             let j = i
//             //  gap
//             while (arr[j - gap] > temp && j >= gap) {
//                 arr[j] = arr[j - gap]
//                 //进行一个组分组排序
//                 j -= gap
//             }
//             // 将j的位置赋为  temp
//             arr[j] = temp
//         }
//
//         gap = Math.floor(gap / 2)
//     }
//     return arr
// }


// // 插入排序
// function insertSort(arr) {
//     let len = arr.length
//     // 默认第一个数据已经被排好
//     // 取出下一个元素从后向前扫描
//     // 该元素小已经排好序的元素， 则将已排序的元素移到下一位置
//     // // 将该元素放到已排序序列的末尾
//     // 直到用来比较的元素大于， 已经排好序的元素，选择插入
//
//     for (let i = 1; i < len; i++) {
//         let pre = i - 1
//         let current = arr[i]
//         while (i >= 0 && arr[pre] > current) {
//             arr[pre + 1] = arr[pre]
//             pre--
//         }
//         arr[pre + 1] = current
//     }
//     return arr
// }

//
// function quickSort(arr) {
//     if (arr.length <= 1) return arr
//     let left = []
//     let right = []
//     let mid = arr.splice(Math.floor(arr.length / 2), 1)
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < mid) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }
//     return quickSort(left).concat(mid, quickSort(right))
// }
//
// function swap(arr, i, j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }
//
// function partition(arr, l, r) {
//     // pivot 默认最后一个元素为基准元素
//     let pivot = arr[r]
//     let pIndex = l
//     for (let i = l; i < r; i++) {
//         if (arr[i] < arr[pivot]) {
//             swap(arr, i, pIndex)
//             pIndex++
//         }
//     }
//
//     swap(arr, pIndex, r)
//     return pIndex
//
// }
//
//
// function quickSort(arr, l, r) {
//     if (l > r) {
//         return
//     }
//     let mid = partition(arr, l, r)
//     quickSort(arr, l, mid - 1)
//     quickSort(arr, mid + 1, r)
// }

// function quickSort(arr, l, r) {
//     if (l > r) return
//
//     let base = arr[l]
//     let i = l
//     let j = r
//
//     // i和j没有相遇
//     while (i !== j) {
//         // 大于基准值向右移动
//         while (arr[j] >= base && i < j) {
//             j--
//         }
//         // 小于基准值 向左移动
//         while (arr[i] <=base && i < j) {
//             i++
//         }
//         // 当i大于基准值，j小于基准值
//         // 交换i和 j的位置
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//     }
//     // i === j的时候 交换i和base（基准值的位置）
//     arr[l] = arr[i]
//     arr[i] = base
//     //i 右边都大于i
//     quickSort(arr, i + 1, r)
//     // i 左边都小于i
//     quickSort(arr, l, i - 1)
// }
//
// function selectSort(arr) {
//     let len = arr.length
//     // 从0到 len - 2 每一个元素都在队列的尾部，也就是说已经排好序了，最后一个就不用排序了
//     for (let i = 0; i < len - 1; i++) {
//         let min = i
//         for (let j = i + 1; j < len; j++) {
//             if (arr[min] > arr[j]) {
//                 // 更新最小值的范围
//                 min = j
//             }
//         }
//         // 找到最小值
//         // 交换 i  和 min的位置
//         let temp = arr[i]
//         arr[i] = arr[min]
//         arr[min] = temp
//     }
//     return arr
// }

// 归并排序

// 思路：将数组分割为两个数组， 递归对这两个子素组进行排序
// 将两个有序数组合并为一个有序数组

function mergeSort(arr) {
    console.log("分割数组", arr)
    let len = arr.length
    if (len <= 1) return arr

    let mid = Math.floor(len / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, len)
    // console.log(left, right)
    return merge(mergeSort(left), mergeSort(right))
}

// 合并两个有序数组
function merge(left, right) {
    console.log(left, right,'merge start')
    let res = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            res.push(left.shift())
        } else {
            res.push(right.shift())
        }
    }
    while (left.length) {
        res.push(left.shift())
    }

    while (right.length) {
        res.push(right.shift())
    }
    console.log(res, "mergeSort end")
    return res
}

let arr = [10, 5, 4, 3, 5, 1]
let res = mergeSort(arr)
console.log(res)