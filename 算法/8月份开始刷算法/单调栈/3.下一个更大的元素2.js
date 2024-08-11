var nextGreaterElements = function (nums) {
    let res = new Array(nums.length).fill(-1)
    let len = nums.length
    let stack = [0]

    for (let i = 1; i < len * 2; i++) {
        let k = i % len
        while (stack.length && nums[k] > nums[stack[stack.length - 1]]) {
            let index = stack.pop()
            res[index] = nums[k]
        }
        stack.push(i % len)
    }
    return res
}

console.log(nextGreaterElements([1, 2, 1]))


// let arr = [1, 2, 1]
// for (let i = 0, len = arr.length; i <len*2 ; i++) {
//     console.log(i%len)
// }