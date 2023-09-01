/**
 * 三数之和
 * 双指针方法
 */

function threeSum(nums) {
    let array = []
    let len = nums.length
    //先进行数组排序
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len; i++) {
        let initNum = nums[i]
        //如果第一个元素都大于0 那么 三数之和不可能为空0
        if (initNum > 0) return array
        //指针 left
        let left = i + 1
        // 指针2 right
        let right = len - 1;
        //判断结果集里不能有重复的元素
        //a 去重 易错点  initNum  === nums[i +  1]()这种写法会错过[-1,-1,2]  相当与nums[i]和nums[left】比较=》结果集不能有重复的
        if (i>0 && initNum === nums[i- 1] ) continue
        while (left < right) {
            //三数之和
            let sum = initNum + nums[left] + nums[right]
            //sum>0 说明值偏大了，右指针向左收缩
            if (sum > 0) {
                right--
            } else if (sum < 0) {
                //sum 偏小 左指针向右扩大
                left++
            } else {
                array.push([initNum, nums[left], nums[right]])
                 // 对另外两个数字去重, 当前值与下一位重复+1还是当前值
                 while (left < right && nums[left] === nums[left + 1]) left++
                  //向左一位相等， 左移一位还是当前值
                  while (left < right && nums[right] === nums[right - 1]) right--

                // 同时移动left和right
                right--
                left++
            }

        }
    }

    return array
}

let nums = [-1, 0, 1, 2, -1, -4]
nums.sort((a,b)=>a - b)
console.log(nums)

console.log(threeSum(nums))