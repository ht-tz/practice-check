// 合并区间
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let res = []
    if (intervals.length === 0) return res;

    //按照左边界排序
    intervals.sort((a, b) => a[0] - b[0])

    let pre = intervals[0]

    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i]
        // 前一右边界小于右一左边界
        if (cur[0] > pre[1]) {
            //说明无重叠
            res.push(pre)
            //更新右边界
            pre = cur
        } else {
            // 前一右边界大于下一个左边界
            pre[1] = Math.max(cur[1], pre[1])
        }
    }
    //最后一个 cur如果右交集就更新前一个的右边界，那么，更新完毕之后循环结束还没被加进来，所以循环结束之后，必然要被加进来， 才能保证结果不遗漏
    // 如果最后一个和前面的没有交集(必然进入循环后被比较过，因为每次只向结果集中添加前一个符和条件的区间，所以必然，循环结束，要被添加到结果集中）
    res.push(pre)
    return res
};


//
// /**
//  * @param {number[][]} intervals
//  * @return {number[][]}
//  */
// var merge = function (intervals) {
//     let res = []
//     if(intervals.length === 0) return res
//     intervals.sort((a,b)=> a[0] - b[0])
//     res.push(intervals[0])
//     let pre
//     for(let i = 1;i<intervals.length;i++) {
//          pre = res[res.length -1]
//         let cur = intervals[i]
//         if(pre[1]<cur[0]) {
//             res.push(cur)
//         } else {
//             //因为之前是左边边界是有序的，所以只需要更新右边界即可
//             pre[1]= Math.max(pre[1],cur[1])
//         }
//     }
//     return res;
// };
let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]

console.log(merge(intervals))
