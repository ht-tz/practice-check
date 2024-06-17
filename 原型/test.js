function merge(intervals) {
    // write code her
    let res = [];
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    for (let i = 0; i < intervals.length; i++) {
        let cur = intervals[i];
        if (res.length === 0) {
            res.push(cur);
            continue;
        }
        let last = res[res.length - 1];
        if (last[1] < cur[0]) {
            // 没有交集，直接push
            res.push(cur);
        } else {
            // 由交集
            if (last[1] < cur[1]) {
                //更新由边界
                res[res.length - 1][1] = cur[1]
            }
        }
    }
    return res;
}
let arr = [[10,30],[20,60],[80,100],[150,180]]

console.log(merge(arr))