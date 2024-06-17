const { setDevtoolsHook } = require("vue")


for (let i = 0; i < 6; i++) {
    console.log(i % 12)
}


console.log(i)


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let len = nums.length
    let stack = []
    let res = Array(len).fill(-1)
    for (let i = 0; i < len * 2; i++) {
        while (stack.length && nums[i / len] > nums[stack[stack.length - 1]]) {
            let index = stack.pop()
            res[index] = nums[i % len]
        }
        stack.push(i % len)
    }
    return res
}