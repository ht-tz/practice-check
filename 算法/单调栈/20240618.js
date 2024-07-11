// 接雨水
var trap = function (height) {
    let len = height.length
    if (height.length === 0) {
        return 0
    }
    let res = 0
    for (let i = 1; i < len; i++) {
        // 第一个元素和最后一个元素是不参与接雨水的
        if (i == 0 || i === len - 1) continue
        let ml = 0
        let mr = 0
        // 向左搜索
        for (let k = i; k >= 0; k--) {
            ml = Math.max(ml, height[k])
        }

        // 向右边去搜索
        for (let k = i; k < len; k++) {
            mr = Math.max(mr, height[k])
        }
        res += Math.min(ml, mr) - height[i]
    }
    return res
}
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))