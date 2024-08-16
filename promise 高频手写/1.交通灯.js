// 交通灯
function red() {
    console.log('red')
}
function yellow() {
    console.log('yellow')
}

function green() {
    console.log('green')
}

const task = (timer, light, callback) => {
    setTimeout(() => {
        if (light === 'red') {
            red()
        } else if (light === 'green') {
            green()
        } else if (light === 'yellow') {
            yellow()
        }

        // 等亮完之后执行callbackvar lengthOfLongestSubstring = function (s) {
        callback()
    }, timer)
}
//
// // 解决方案： 递归让一个灯亮开始无限循环
//
// const step = () => {
//     task(3000, 'red', () => {
//         task(1000, 'green', () => {
//             task(2000, 'yellow', step)
//         })
//     })
// }
//
// step()
//
// const step = () => {
//     task(3000, 'red')
//         .then(() => task(2000, 'yellow'))
//         .then(() => task(1000, 'green'))
//         .then(step)
// }
// step()

const taskRunner = async () => {
    await task(3000, 'red')
    await task(1000, 'green')
    await task(2000, 'yellow')
    taskRunner()
}

taskRunner()