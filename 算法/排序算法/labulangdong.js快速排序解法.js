function quickSort(nums, l, r) {
    if (l >= r) return
    // 对nums进行拆分
    // 找到这一个基准值
    let p = partition(nums, l, r)
    // 去左右数组进行拆分
    quickSort(nums, l, p - 1)
    quickSort(nums, p + 1, r)
}

// 在l,r之间寻找切分点，通过交换元素，使得左边的值都小于切分点， 右边的值都大于切分点
function partition(nums, l, r) {
    let pivot = nums[l]
    let i = l
    let j = r
    while (i !== j) {
        while (i < j && nums[j] >= pivot) j--
        while (i < j && nums[i] <= pivot) i++

        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }

    // 说明找到分界点了
    nums[l] = nums[i]
    nums[i] = pivot
    return j
}

function quick(arr) {
    let len = arr.length
    if (len <= 1) return arr
    quickSort(arr, 0, len - 1)
    return arr
}

console.log(quick([3, 2, 1, 5, 6, 4]))