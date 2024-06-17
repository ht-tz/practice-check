// 组合问题优化版本
function combine(n, k) {
    //二维数组存放结果
    let result = []
    // 存放路径
    let path = []
    const backtracking = (n, k, startIndex = 1) => {
        if (path.length === k) {
            result.push([...path])
            return
        }

        // 已经选取了path.length 个元素， 
        // 还需要选取看- path.length个元素
        // 最多次呢哪里开始选取元素呢，n -(k - path.length)+ 1的位置开始选取元素
        // + 是因包括startIndex的,例如n = 4,k = 3, path.length = 0 则最多从n - (3 - 0)+1 2,3,4是满足条件的
        for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
            path.push(i)
            backtracking(n, k, i + 1)
            path.pop()
        }
        backtracking(n, k)
    }
    backtracking(n, k)
    // 开始
    return result;
}