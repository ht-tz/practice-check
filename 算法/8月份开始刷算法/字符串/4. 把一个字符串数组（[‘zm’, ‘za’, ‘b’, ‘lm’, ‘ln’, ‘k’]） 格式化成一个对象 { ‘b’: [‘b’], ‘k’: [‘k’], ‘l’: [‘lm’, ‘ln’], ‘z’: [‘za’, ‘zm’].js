// 把一个字符串数组（[‘zm’, ‘za’, ‘b’, ‘lm’, ‘ln’, ‘k’]） 格式化成一个对象 { ‘b’: [‘b’], ‘k’: [‘k’], ‘l’: [‘lm’, ‘ln’], ‘z’: [‘za’, ‘zm’]
const arr1 = ['zm', 'za', 'b', 'lm', 'ln', 'k'];

function formatStrArray(arr) {
    let len = arr.length
    let map = new Map()
    for (let i = 0; i < len; i++) {
        let fstr = arr[i][0]
        if (map.has(fstr)) {
            let sarr = map.get(fstr)
            sarr.push(arr[i])
            map.set(fstr, sarr)
        } else {
            map.set(fstr, [arr[i]])
        }
    }
    return Object.fromEntries(map)
}
console.log(formatStrArray(arr1))


const obj = { z: [ 'zm', 'za' ], b: [ 'b' ], l: [ 'lm', 'ln' ], k: [ 'k' ] }
// 把对象转换为数组
console.log(Object.entries(obj))

// 把数组转换为对象
let arr2 = [
    [ 'z', [ 'zm', 'za' ] ],
    [ 'b', [ 'b' ] ],
    [ 'l', [ 'lm', 'ln' ] ],
    [ 'k', [ 'k' ] ]
]
//接收一个可以迭代的类型 数组 map
 console.log(Object.fromEntries(arr2))