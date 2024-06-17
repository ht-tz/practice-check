
var dailyTemperatures = function (temperatures) {
    let len = temperatures.length
    let stack = []
    let array = new Array(len).fill(0)
    stack.push(0)
    for (let i = 1; i < len; i++) {
        let topValue = stack[stack.length - 1]
        if (temperatures[i] < temperatures[topValue]) {
            stack.push(i)
        } else if (temperatures[i] === temperatures[topValue]) {
            stack.push(i)
        } else {
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let index = stack.pop()
                array[index] = i - index
            }
            stack.push(i)
        }
    }
    return array
}


let temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(temperatures))