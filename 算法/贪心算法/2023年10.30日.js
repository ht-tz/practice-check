// 划分字母区间
var partitionLabels = function (s) {
    let map = new Map()
    let arr = s.split("")

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i)
    }

    let res = []
    let left = 0
    let right = 0

    for (let i = 0; i < arr.length; i++) {
        //最远距离
        right = Math.max(right, map.get(arr[i]))
        if (i === right) {
            // 目标入库
            res.push(right - left + 1)
            left = i + 1
        }
    }
    return res
}
let s = "ababcbacadefegdehijhklij"
let res = partitionLabels(s)
console.log(res)

// 合并区间

var merge = function (intervals) {
    let res = []
    if (intervals.length === 0) return 0
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    let left = intervals[0][0]
    let right = intervals [0][1]

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= right) {
            right = Math.max(intervals[i][1], right)
        } else {
            res.push([left, right])
            left = intervals[i][0]
            right = intervals[i][1]
        }
    }
    res.push([left,right])
    return res
}

let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
let res1 = merge(intervals)
console.log(res1)



//单调递增的数字

var monotoneIncreasingDigits = function (n) {
    n = n.toString()
    let arr = n.split("").map(el=> +el)
    let flag = Infinity
    for ( let i = 1; i <arr.length ; i++) {
          if(arr[i]< arr[i -1]){
              // 不断更新i的值，最后统一处理i的值
              flag = i
              arr[i - 1]--
          }
    }
    for (let i = flag; i < arr.length; i++) {
        arr[i] =  '9'
    }
    return +arr.join("")
}

