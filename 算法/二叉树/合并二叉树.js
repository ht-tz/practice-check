function merTrees(t1, t2) {
    // 左子树为空的话，就返回右
    if (t1 === null) return t2
    if (t2 === null) return t1

    // 不为空的话，修改t1的结构和数值
    t1.val += t2.val
    //递归合并左
    t1.left = merTrees(t1.left, t2.left)
    //递归合并右
    t1.right = merTrees(t1.right, t2.right)
    return t1
}
