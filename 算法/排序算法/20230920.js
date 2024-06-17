//插入排序
function insert(nums) {
    for (let i = 1; i < nums.length; i++) {
        let cur = nums[i]
        let j = i
        while (nums[j - 1] > cur && j > 0) {
            //大的元素洗向后排
            nums[j] = nums[j - 1]
            j--
        }
        // j - 1的位置放置比较小的值
        nums[j] = cur
    }
    console.log(nums)
    return nums
}

let arr = [56, 4, 321, 12, 3, 0]
insert(arr)


function quicksort(arr, l, r) {
    if(l > r) return
    let i = l
    let j = r
    let base = arr[l]
    while (i !== j) {
        while (l < r && arr[j] > base) {
            j--
        }
        while (l < r && arr[i] <= base) {
            i++
        }

        // 交换值
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    //重新找基准值 等于相遇的值
    arr[l] = arr[i]
    // 相遇位置元素等基准值
    //左边的元素都小于基准值
    arr[i] = base
    quicksort(arr, l, i - 1)
    quicksort(arr, i + 1, l)
}

d