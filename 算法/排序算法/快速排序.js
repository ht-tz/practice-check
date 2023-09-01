//快速排序 目前所有算法排序可能是效率最高的一种排序
//分治算法
//交换数据
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

// 选择枢纽
function median(arr, left, right) {
    //取中间值位置
    let mid = Math.floor((left + right) / 2)
    //比较大小，交换位置
    if (arr[left] > arr[mid]) {
        swap(arr, left, mid)
    }
    if (arr[mid] > arr[right]) {
        swap(arr, mid, right)
    }
    if (arr[left] > arr[right]) {
        swap(arr, left, right)
    }
    //将center换到的 right - 1的位置
    swap(arr, mid, right - 1)
    //返回枢纽
    return arr[right - 1]
}

// 递归
function quick(arr, left, right) {
    // 递归结束条件
    if (left >= right) return
    debugger
    // 获取枢纽值
    let pivot = median(arr, left, right)
    // 记录当前找到的位置
    let i = left
    let j = right - 1
    // 定义变量，用于记录当前所找到的位置，进行数据交换操纵
    while (i!==j) {
        // 开始从左向右比较 枢纽左边， ，推出循环的位置是 i
        while (arr[++i] < pivot) {
        }
        // 开始从右向左比较， 枢纽的右边 退出循环的位置是i
        while (arr[--j] > pivot) {
        }
        if (i < j) {
            // 中间的数据还不是有序的，那就一直交换，知道左边的值都小于枢纽
            swap(arr, i, j)
        } else {
            //不满足的退出循环
            break;
        }
    }
    //将枢纽放置到正确的位置
    swap(arr, i, right - 1)

    //分治
    quick(arr, left, i - 1)
    quick(arr, i + 1, right)
}

function quickSort(arr) {
    quick(arr, 0, arr.length - 1)
    return arr
}

let array = [1, 243, 54, 32, 2, 31,8]
console.log(quickSort(array))

