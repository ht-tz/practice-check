class treeNode {
    constructor(val, left, right) {
        this.val = val ? val : 0
        this.right = right ? right : undefined
        this.left = left ? left : undefined
    }
}

function preTraveral(root) {
    let res = []
    function dfs(root) {
        if (root === null) return
        res.push(root.val)
        dfs(root.left)
        dfs(root.right)
    }
    //只使用一个参数，闭包缓存参数
    dfs(root)
    return res
}

function midTraveral(root) {
    let res = []
    function dfs(root) {
        if (root === null) return
        dfs(root.left)
        res.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    return res
}

function afterTraveral(root) {
    let res = []
    function dfs(root) {
        if (root === null) return
        dfs(root.left)
        dfs(root.right)
        res.push(root.val)
    }
    dfs(root)
    return res
}