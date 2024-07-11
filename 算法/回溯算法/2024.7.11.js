// 组合问题
function combine(n, k) {
    let res = []
    let path = []
    const backtracking = (startIndex) => {
        // 退出条件 path.length === k
        if (path.length === k) {
            res.push([...path])
            return
        }

        // 已经选择则的元素path.length
        // 还剩多少个元素 还需要 k - path.length
        // 剩余的元素个数必须大于等于k - path.length => n - i >=  k - path.length
        // 在数组中，我们至多从  i 到 n - (k - path.length) + 1 之间取值
        // +1 是一个左闭的区间
        for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
            // 收集节点
            path.push(i)
            // 递归
            backtracking(i + 1)
            // 回溯
            path.pop()
            console.log('每次回溯返回的节点', path)
        }
    }

    backtracking(1)
    return res
}

console.log(combine(4, 3))