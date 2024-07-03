// 动态规划
var lengthOfLIS = function (nums) {
    let len = nums.length
    if (len <= 1) return len
    let res = 1
    let dp = new Array(len).fill(1)
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                console.log(`dp${j}-${j}`, dp[j])
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
            res = Math.max(res, dp[i])
        }
    }
    return res
}


var lengthOfLIS = function (nums) {
    let len = nums.length
    if (len <= 1) return len

    const arr = [nums[0]]
    for (let i = 1; i < len; i++) {
        if (nums[i] > arr[arr.length - 1]) {
            arr.push(nums[i])
        } else {
            // 二分搜索 搜索nums[i]  插入的位置，并且替换该元素的位置， 确保arr递增，‘
            // 并且尽可能保持较小元素的值， 以便后续构建更长的序列
            let l = 0
            let r = arr.length - 1
            let pos = 0

            while (l <= r) {
                let mid = Math.floor((r + l) / 2)
                if (arr[mid] >= nums[i]) {
                    pos = mid
                    r = mid - 1
                } else {
                    l = mid + 1
                }
            }
            // 找到一个大于等于nums[i]的位置， 更新 arr[pos] 为你 nums[i]  确保仍然递增
            arr[pos] = nums[i]
        }
    }
    return arr.length
}


console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))