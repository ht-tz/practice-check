// 下一个更大的元素 II
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let stack = []
    let len = nums.length
    let res = new Array(len).fill(-1)
    if(res.length === 0) return res
    stack.push(0)
    for (let i = 1; i < len * 2; i++) {
        let k = i % len
        while (stack.length && nums[k] > nums[stack[stack.length - 1]]) {
            let index = stack.pop()
            res[index] = nums[k]
        }
        stack.push(k)
    }
    return res
};


let arr = [1, 2, 1]
console.log(nextGreaterElements(arr))