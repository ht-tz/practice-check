var rob = function (root) {
    // 后续遍历函数
    function postOrder(node) {
        if (node == null) return [0, 0]
        //后续遍历 左右中
        const left = postOrder(node.left)
        const right = postOrder(node.right)

        // 不偷当前节点，左右节点可以偷或者不偷 取最大值
        const DoNot = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
        // 偷当前节点，左右子节点只能不偷
        const Do = node.val + left[0] + right[0]

        return [DoNot, Do]
    }

    const res = postOrder(root)
    return Math.max(...res)
}
