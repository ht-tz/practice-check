function fourSum(nums, target) {

    let array = []
    nums.sort((a, b) => a - b)
    for (let k = 0; k < nums.length; k++) {

        //剪枝处理, 推出循环
        if (nums[k] > target && nums[k] >= 0) break;
        if (k > 0 && nums[k] === nums[k - 1]) continue
        for (let i = k + 1; i < nums.length; i++) {
            //剪枝处理
            if (nums[k] + nums[i] > target && nums[i] >= 0) break
            // 对nums[i] 去重
            if (i > k + 1 && nums[i - 1] === nums[i]) continue

            let left = i + 1
            let right = nums.length - 1

            while (left < right) {
                let sum = nums[k] + nums[i] + nums[left] + nums[right];
                if (sum > target) {
                    right--
                } else if (sum < target) {
                    left++
                } else {
                    array.push([nums[k],nums[i],nums[left],nums[right]])
                    while (left < right && nums[right] === nums[right - 1]) right--
                    while (left < right && nums[left] === nums[left + 1]) left++

                    left++
                    right--
                }
            }
        }
    }
    return  array

}

let nums = [1, 0, -1, 0, -2, 2]
console.log(fourSum(nums,0))