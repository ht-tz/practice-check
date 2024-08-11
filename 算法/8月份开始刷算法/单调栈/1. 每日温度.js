var dailyTemperatures = function (temperatures) {
    let len = temperatures.length
    let res = new Array(len).fill(0)
    let stack = [0]
    for (let i = 1; i < len; i++) {
        const top = stack[stack.length - 1]
        // <-  后进来的先出来， 从做到右边依次递增数据
        if (temperatures[i] < temperatures[top]) {
            // 所以后面进来的 比栈顶小，就入栈
            stack.push(i)
        } else if (temperatures[i] == temperatures[top]) {
            stack.pop()
            stack.push(i)
        } else {
            while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let t = stack.pop()
                // 间隔的天数
                res[t] = i - t
            }
            stack.push(i)
        }
    }
    return res
}

// 展示先进后出


let temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(temperatures))