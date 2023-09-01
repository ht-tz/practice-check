
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


function getPivot(arr, left, right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[left] > arr[mid]) {
        swap(arr, left, mid)
    }

    if (arr[mid] > arr[right]) {
        swap(arr, mid, right)
    }

    if (arr[left] > arr[right]) {
        swap(arr, left, right)
    }
    swap(arr, mid, right - 1)

    return arr[right - 1]


}

function quick(arr, left, right) {
    if (left >=right) return
    //基准
    let pivot = getPivot(arr, left, right);
    let i = left
    let j = right - 1
    while (i!==j) {
        while (arr[i] < pivot) {
            i++
        }
        while (arr[j] >=pivot ) {
            j--
        }
        if (i < j) {
            swap(arr, i, j)
        } else {
            break
        }
    }

    //相等的时候  i的位置就是基准位置
    swap(arr, i, right - 1)
    // 左递归
    quick(arr, left, i - 1)
    //有递归
    quick(arr, i + 1, right)
}

function quickSort(arr) {
    let len = arr.length
    quick(arr, 0, len - 1)
    return arr
}

let arr1 = [12, 34, 3, 546, 767, 43]
console.log(quickSort(arr1));