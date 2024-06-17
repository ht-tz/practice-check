function jump(nums) {
    if (nums.length === 0) return 0
    //当前覆盖最远距离下标
    let curDistance = 0
    let ans = 0
    //下一个覆盖最远距离下标
    let nextDistance = 0
    for (let i = 0; i < nums.length; i++) {
        //更新下一步最远距离下标
        nextDistance = Math.max(i + nums[i], nextDistance)
        // 遇到当前最远距离下标
        if (i === curDistance) {
            //需要走下一步
            ans++
            //更新最远距离下标
            curDistance = nextDistance
            // 当前最远距离覆盖下表到达终点集合，不用左ans++ 操作
            if (nextDistance >= nums.length - 1) break;
        }
    }
}

{
    // 版本2

    function jump(nums) {
        let curDistance = 0
        let ans = 0
        let nextDistance = 0
        for (let i = 0; i < nums.length - 1; i++) {
            //更新下一步最远距离的下标
            nextDistance = Math.max(nums[i] + i, nextDistance)
            // 遇见当卡覆盖最远距离的下标注，
            if (i === curDistance) {
                //更新当前覆盖最远距离的下标
                curDistance = nextDistance
                ans++
            }
        }
        return ans
    }
}