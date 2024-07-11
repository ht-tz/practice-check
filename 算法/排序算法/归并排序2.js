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
