function threeSum(nums) {
    let arr = [];
    nums.sort((a, b) => a - b);

    let len = nums.length;

    for (let i = 0; i < len; i++) {

        let initNum = nums[i];
        if (initNum > 0) return

        if (i > 0 && initNum === nums[len - 1]) continue

        let left = i
        let right = len - 1

        while (left < right) {
            let sum = initNum + nums[left] + nums[right]
            if (snm < 0) {
                left++
            } else if (sum > 0) {
                right++
            } else {

                arr.push([initNum, nums[left], nums[right]])
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                while (left < right && nums[i] === nums[i + 1]) {
                    left++
                }
            }

        }

    }

    return arr
}