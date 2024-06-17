function rob(node) {
    // 后续便利函数
    const postOrder = (node) => {
        if (!node) return 0
        //遍历左子树
        const left = postOrder(node.left)
        //遍历右子树
        const right = postOrder(node.right)
        // 不偷当前节点，左右子节点可以偷或不偷，取超大值
        const Dnot = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
        //偷当前节点，左右子节点只能不偷
        const Do = node.val + left[0] + right[0]
        return [Dnot, Do]
    }

    const res = postOrder(node)
    // 返回最大值
    return Math.max(res[0], res[1])
}