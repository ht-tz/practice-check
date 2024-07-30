function shuffle(nums) {
    let curIndex = nums.length
    let rIndex;
    while (curIndex !== 0) {
        rIndex = Math.floor(Math.random() * curIndex)
        curIndex--
        [nums[curIndex], nums[rIndex]] = [nums[rIndex], nums[curIndex]]
    }
    return nums
}

console.log(shuffle([1,2,3,4,5,6,7,8,9,10]))