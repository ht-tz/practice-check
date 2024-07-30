// function getStrObj(arr) {
//     let map = new Map()
//     arr.forEach((item) => {
//         if (map.has(item[0])) {
//             let values = map.get(item[0])
//             values.push(item)
//             map.set(item[0], values)
//         } else {
//             map.set(item[0], [item])
//         }
//     })
//     let obj = {}
//     for (let [key, value] of map) {
//         obj[key] = value
//     }

//     return obj
// }

// let str = ['zm', 'za', 'b', 'lm', 'ln', 'k']

// console.log(getStrObj(str))

// function replaceSpace(str) {
//     let arr = str.split(' ')
//     let model = '%20'
//     let s = ''
//     for (let i = 0; i < arr.length; i++) {
//         if (i !== arr.length - 1) {
//             s += arr[i] + model
//         } else {
//             s += arr[i]
//         }
//     }
//     return s
// }
//
// function replaceSpace(str) {
//     let arr = Array.from(str)
//     let count = 0
//     // 统计空字符串的个数
//     arr.forEach(el => {
//         if (el === ' ') {
//             count++
//         }
//     })
//
//     // 扩展数组  原来字符串得到长度加上新增字符串的长度
//     let i = arr.length - 1
//     let j = str.length - 1 + count * 2
//     while (i >= 0) {
//         if (arr[i] == ' ') {
//             arr[j] = "0"
//             j--
//             arr[j] = "2"
//             j--
//             arr[j] = "%"
//         } else {
//             arr[j] = arr[i]
//         }
//         i--
//         j--
//     }
//     return arr.join("")
// }
//
//
// let str = 'we are happy'
//
// console.log(replaceSpace(str))

// function longestCommonPrefix(strs) {
//     let len = strs.length
//     let res = strs[0]

//     for (let i = 1; i < len; i++) {
//         let k = 0
//         let cur = strs[i]
//         while (k < res.length && cur[k] === res[k]) {
//             k++
//         }
//         res = res.slice(0, k)
//     }
//     return res
// }
// let strs = ['abb', 'abc', 'abca', 'abcdc', 'abcc']

// console.log(longestCommonPrefix(strs))
function reverseWords(str) {
    let arr = str.split(' ')
    let len = arr.length
    let r = len - 1
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i].split('')
        let curStr = reverse(0, cur.length - 1, cur)
        newArr.push(curStr)
    }
    return newArr.reverse()
}

function reverse(l, r, arr) {
    while (l < r) {
        let temp = arr[l]
        arr[l] = arr[r]
        arr[r] = temp
        l++
        r--
    }
    return arr.join('')
}



// console.log(reverseWords(str))
function reverseWords(s) {
    let arr = s.split(' ')
    let array = arr.reduce((pre, cur) => {
         pre = [cur, ...pre]
        }, [])
    return array.join(" ")
}

let str = 'I am a student'
var reverseWords = function (s) {
    let arr = s.split(' ')
    arr.reduce((pre, cur) => {
        if (cur) {
            pre.unshift(cur)
        }
        return pre
    }, [])
    return arr.join(' ')
};

console.log(reverseWords(str))
