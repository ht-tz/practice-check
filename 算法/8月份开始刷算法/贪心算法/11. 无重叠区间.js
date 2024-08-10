var eraseOverlapIntervals1 = function (intervals) {
    if (intervals.length === 0) return 0
    intervals.sort((a, b) => a[1] - b[1])
    let count = 1
    let end = intervals[0][1]
    for (let i = 1; i < intervals.length; i++) {
        let start = intervals[i][0]
        if (end <= start) {
            //没有区间交叉
            count++
            end = intervals[i][1]
        }
    }
    return intervals.length - count
}
var eraseOverlapIntervals = function (intervals) {
    let len = intervals.length
    if (len === 0) return 0
    intervals.sort((a, b) => a[0] - b[0])
    let count = 0
    let end = intervals[0][1]
    for (let i = 1; i < len; i++) {
        if (intervals[i][0] >= end) {
            count++
        }
        end = intervals[i][1]
    }
    return count
}
let arr =[ [1,2], [2,3] ]
console.log(eraseOverlapIntervals1(arr))