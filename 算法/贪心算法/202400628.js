// 无重叠区间
var eraseOverlapIntervals = function (intervals) {
    if (intervals.length == 0) return 0

    intervals.sort((a, b) => a[1] - b[1])
    let count = 1
    let end = intervals[0][1]
    for (let i = 1; i < intervals.length; i++) {
        if (end <= intervals[i][0]) {
            count++
            // 有重叠的
            end = intervals[i][1]
        }
    }

    return intervals.length - count
}


// 合并区间

var merge = function (intervals) {
    let len = intervals.length
    let res = []
    intervals.sort((a, b) => a[0] - b[0])

    let pre = intervals[0]
    for (let i = 1; i < len; i++) {
        let cur = intervals[i]
        if (pre[1] < cur[0]) {
            //没有重叠
            res.push(pre)
            //更新pre
            pre = cur
        } else {
            // 有重叠合并，更新pre的右边界
            pre[1] = Math.max(pre[1], cur[1])
        }
    }
    // 最后别忘了把最后一个区间加入结果中
    res.push(pre)
    return pre
}