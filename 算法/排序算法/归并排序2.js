function mergeSort(arr) {
    let len = arr.length
    if (len < 2) {
        return arr
    }
    let mid = Math.floor(len / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

function merge(left, right) {
    console.log(left,right)
    let result = []

    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    while (left.length) {
        result.push(left.shift())
    }
    while (right.length) {
        result.push(right.shift())
    }
    return result
}

let arr1 = [2, 468, 48]
console.log(mergeSort(arr1))


function mergeSort(arr, l, r) {
    if (arr.length < 2) return arr
    let mid = Math.floor((l + r) / 2)
    let left = arr.slice(l, mid)
    let right = arr.slice(mid, r)
    let la = mergeSort(left, 0, left.length)
    let lb = mergeSort(right, 0, right.length)
    return merge(la, lb)
}

function merge(left, right) {
    let res = []

    while (left.length > 0 && right.length > 0) {
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
    return res
}

let arr = [1, 3, 5, 7, 9, 2, 4, 6]
console.log(mergeSort(arr, 0, arr.length))
