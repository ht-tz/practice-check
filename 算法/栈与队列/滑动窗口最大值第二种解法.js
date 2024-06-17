// 1.采用队列头保存最大值，新进来的值放到队列尾部
// 2.放到尾部之前，判断一下是不是比之前尾部大，如果大，就把之前的尾部删掉（优化策略，因为之前的尾部，不可能再有成为老大的机会了）
// 3.如果队列老大出了滑动窗口，就删掉他


var maxSlidingWindow = function (nums, k) {
    let res = []

    let temp = []

    for (let i = 0; i < nums.length; i++) {
        //判读是不是比之前的尾部大，大的话， 就把之前的尾部删除，尾部就是数组索引为0的位置
        while (temp.length != 0 && nums[temp[0]] < nums[i]) {
            temp.shift()
        }
        //队头加入最大值 队列先进先出, 0是尾部，len - 1是头部
        // 新进来放在尾部
        temp.unshift(i)

        if(temp[temp.length - 1] <= i - k) {
            temp.pop()
        }

        // 头是索引为len - 1位置上的数据，
        if (i >= k - 1) {
            res.push(nums[temp[temp.length - 1]])
        }

    }
    return res
};
let nums = [1,3,-1,-3,5,3,6,7], k = 3
console.log(maxSlidingWindow(nums,k))