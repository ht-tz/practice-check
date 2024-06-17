//第一步 将数组的绝对值大小从效到大排序，注意按照绝对值的大小
//第二步 从前向后遍历，遇见负数将其变成正数，同时k--
//第三步 如果还大于零，反复转变子最小值的元素
// 求和

function largestSumAfterKNegations(nums, k) {
    nums.sort((a, b) => Math.abs(b) - Math.abs(a))
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0 && k > 0) {
            nums[i] = -nums[i]
            k--
        }
        sum += nums[i]
    }
    if (k % 2 === 1) {
        sum -= 2*nums[nums.length - 1]
    }
    console.log(sum)
    return sum
}

let arr = [4, 2, 3]
largestSumAfterKNegations(arr,1)