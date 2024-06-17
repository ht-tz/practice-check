var dailyTemperatures = function (temperatures) {
    let len = temperatures.length
    if (len < 2) return len
    let res = new Array(len).fill(0)
    let stack = []
    stack.push(0)
    for (let i = 1; i < len; i++) {
        //大于栈顶元素
        if (temperatures[i] < temperatures[stack[stack.length - 1]]) {
            stack.push(i)
        } else if (temperatures[i] === temperatures[stack[stack.length - 1]]) {
            stack.pop()
            stack.push(i)
        } else {
            while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                // 当前元素大于栈顶元素，栈顶元素出栈，并计算索引差值， 就是栈顶元素的索引值
                let index = stack.pop()
                // 计算的差值 差值就是 栈顶元素index 当前元素的index的差值，也就是右边数=比栈顶元素大的数量
                res[index] = i - index
            }

            //之后再把下一个元素推进来
            stack.push(i)
        }
    }
    return res
}

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(temperatures))


function dailyTemperatures(arr) {
    let res = []
    let len = arr.length
    if (len < 2) return 0
    let stack = []
    for (let i = 0; i < len; i++) {
        if (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
            while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
                let index = stack.pop()
                res[index] = i - index
            }
        }
        stack.push(i)
    }
    return res
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))