function quickSort(arr, l, r) {
    if (l >= r) return
    let i = l, j = r
    let pivot = arr[l]
    while (i !== j) {
        // 必须在前
        while (arr[j] >= pivot && i < j) j--
        while (arr[i] <= pivot && i < j) i++

        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    arr[l] = arr[i]
    arr[i] = pivot
    quickSort(arr, l, i - 1)
    quickSort(arr, i + 1, r)
}

function quick(arr) {
    if (arr.length < 2) return arr
    quickSort(arr, 0, arr.length - 1)
    return arr
}

let arr1 = [6, 2, 5, 4, 21, 3]
console.log(quick(arr1))

