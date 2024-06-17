var hasPathSum = function (root, targetSum) {

    const isHaveTarget = function (node, count) {
        //递归终止条件
        if (node.left === null && node.right === null && count === 0) {
            return true
        }
        //叶子节点没有找到合适的边(计数不为零），false 
        if (node.left === null && node.right === null) {
            return false
        }

        // 确定单层递归的逻辑
        if (node.left) {
            count -= node.left.val
            if (isHaveTarget(node.left, count)) return true
            count += node.left.val
        }
        if (node.right) {
            count -= node.right.val
            if (isHaveTarget(node.right, count)) return true
            count += node.right.val
        }
        return false
    }

    if(root === null) return false
    return isHaveTarget(root, targetSum - root.val)
};