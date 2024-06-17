function quickSort(arr, left, right) {
    if (left > right) return
    let i = left, j = right, povit = arr[left]
    while (i !== j) {
        while (i < j && arr[j] >= povit) j--
        while (i < j && arr[i] <= povit) i++
        //交换i，j
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    //想等了，就把povit和i交换
    arr[left] = arr[i]
    arr[i] = povit

    // 基准值左边的排序
    quickSort(arr, left, i - 1)
    // 基准值右边的排序
    quickSort(arr, i + 1, right)
}

let arr1 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
quickSort(arr1, 0, arr1.length - 1)
console.log(arr1);

//
// function qk(arr, left, right) {
//     if (left > right) {
//         return
//     }
//
//     let i = left
//     let j = right
//     let pivot = arr[left]
//     while (i !== j) {
//         //右边的小于基准值 就放到左边
//         while (i < j && arr[j] >= pivot) {// 找到小于基准值的数
//             j--
//         }
//         while (i < j && arr[i] <= pivot) { // 找到大于基准值的数
//             i++
//         }
//         // 交换两者的位置
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//     }
//
//     // 相等了就更新基准值, 基准值是arr[left
//     arr[left] = arr[i]
//     arr[i] = pivot
//
//     quickSort(arr,left, i - 1)
//     quickSort(arr, i + 1, right)
// }

// export function quickSort(arr: number[]) {
//     quick(arr, 0, arr.length - 1)
//     return arr
// }
// function quick(arr: number[], left: number, right: number) {
//     if (arr.length > 1) {
//         let index = partition(arr, left, right)
//         // 两半局部有序分开  递归排序 分而治之
//         if (left < index - 1) {
//             quick(arr, left, index - 1)
//         }
//         if (index < right) {
//             quick(arr, index, right)
//         }
//     }
// }
// function partition(arr: number[], left: number, right: number) {
//     //将数组 以pivot 为标准 划分为 两半 局部有序的
//     let pivot = arr[Math.floor((left + right) / 2)]
//     let i = left
//     let j = right
//     while (i <= j) {
//         while (arr[i] < pivot) {
//             i++
//         }
//         while (arr[j] > pivot) {
//             j--
//         }
//         if (i <= j) {
//             swap(arr, i, j)
//             i++
//             j--
//         }
//     }
//     return i
// }
// function swap(arr: number[], i: number, j: number) {
//     ;[arr[i], arr[j]] = [arr[j], arr[i]]
// }