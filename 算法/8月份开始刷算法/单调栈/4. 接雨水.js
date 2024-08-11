// var trap = function (height) {
//     let sum = 0
//     for (let i = 0; i < height.length; i++) {
//         // 第一个柱子和最后一个柱子不接雨水
//         if (i == 0 || i == height.length - 1) continue
//         let lh = height[i]
//         for (let j = i - 1; j >= 0; j--) {
//             lh = Math.max(lh, height[j])
//         }
//
//         let rh = height[i]
//         for (let j = i + 1; j < height.length; j++) {
//             rh = Math.max(rh, height[j])
//         }
//         let h = Math.min(lh, rh) - height[i]
//         if (h > 0) sum += h
//     }
//     return sum
// }
//
//
// var trap = function (height) {
//     let len = height.length
//     if (len <= 2) return
//     let sum = 0
//     let larr = new Array(len)
//     let rarr = new Array(len)
//     larr[0] = height[0]
//     for (let i = 1; i < len; i++) {
//         // 整个位置的最高高度就是前面的最高高度
//         larr[i] = Math.max(height[i], larr[i - 1])
//     }
//     rarr[len - 1] = height[len - 1]
//
//     for (let i = len - 2; i >= 0; i--) {
//         rarr[i] = Math.max(height[i], rarr[i + 1])
//     }
//     for (let i = 0; i < len; i++) {
//         let h = Math.min(larr[i], rarr[i]) - height[i]
//         if (h > 0) sum += h
//     }
//
//     return sum
// }


var trap = function (height) {
    let len = height.length
    if (len <= 2) return 0
    let stack = [0]
    let sum = 0
    for (let i = 1; i < len; i++) {
        if (height[i] < height[stack[stack.length - 1]]) {
            stack.push(i)
        } else if (height[i] === height[stack[stack.length - 1]]) {
            stack.pop()
            stack.push(i)
        } else {
            while (stack.length && height[i] > height[stack[stack.length - 1]]) {
                let mid = stack.pop()
                if (stack.length>0) {
                    let left = stack[stack.length - 1]
                    let h = Math.min(height[i], height[left]) - height[mid]
                    let w = i - left - 1
                    sum += h * w
                }
            }
            stack.push(i)
        }
    }
    return sum
}
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(trap(height))
