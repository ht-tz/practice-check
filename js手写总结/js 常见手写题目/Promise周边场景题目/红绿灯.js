/*
 * @Author: htz
 * @Date: 2024-07-19 00:25:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-19 00:37:22
 * @Description: 红包绿灯
 */
const lightMap = {
    red: () => {
        console.log('red')
    },
    yellow: () => {
        console.log('yellow')
    },
    green: () => {
        console.log('green')
    },
}

function timeLines(time, light) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lightMap[light] && lightMap[light]()
            resolve()
        }, time)
    })
}

const run = async () => {
    await timeLines(3000, 'red')
    await timeLines(2000, 'yellow')
    await timeLines(1000, 'green')
}
 run()
