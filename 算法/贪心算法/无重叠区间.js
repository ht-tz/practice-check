//无重叠区间
/**
 * @param {number[][]} intervals
 * @return {number}
 */
// 按照右边界来排序，从左向右记录非交叉区间的个数，最后区间总数 - 减去非交叉区间的个数，就是需要移除的区间个数
// 非交叉区间的最大个数
var eraseOverlapIntervals = function (intervals) {
    if (intervals.length === 0) return 0
    //按照左边界排序
    intervals.sort((a, b) => a[1] - b[1])
    let len = intervals.length
    //记录非交叉区间的个数 非交叉区间的个数
    let count = 1
    //区间的分界点
    let end = intervals[0][1]
    for (let i = 1; i < len; i++) {
        // 前一个右边界小于下一个的左边界，说明不交叉
        if (end <= intervals[i][0]) {
            //更新分界点值的
            end = intervals[i][1]
            count++
        }
    }
    // 总数减去非交叉数
    return intervals.length - count
};

{
    //无重叠区间
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
// 按照右边界来排序，从左向右记录非交叉区间的个数，最后区间总数 - 减去非交叉区间的个数，就是需要移除的区间个数
// 非交叉区间的最大个数
    var eraseOverlapIntervals = function (intervals) {
        if (intervals.length === 0) return 0
        //按照左边界排序
        intervals.sort((a, b) => a[0] - b[0])
        let len = intervals.length
        //记录的是重叠区间
        let count = 0
        for (let i = 1; i < len; i++) {
            // 说明是有重叠区域的
            if (intervals[i][0] < intervals[i - 1][1]) {
                //更新边界的值, 取其中两个右边界最小的值和第三个的左边界有没有重叠，为啥是小值，如果是大值，就可能多删除
                intervals[i][1] = Math.min(intervals[i][1], intervals[i - 1][1])
                count++
            }
        }

        return count
    };
}