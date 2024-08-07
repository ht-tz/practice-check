var canJump = function (nums) {
    let cover = 0
    for (let i = 0; i <= cover; i++) {
        cover = Math.max(i + nums[i], cover)
        if (cover >= nums.length - 1)
            return true
    }
    return false
}

