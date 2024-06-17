function countNodes(root) {
    // 确定递归的参数
    function getNums(node) {
        if (node === null) return 0
        let ln = getNums(node.left)
        let rn = getNums(node.right)
        return ln + rn + 1
    }

    return getNums(root)
}


{
    //层序遍历迭代版本
    function countNodes(root) {
        let queue = []
        if (root === null) return 0
        // 首先将根节点放入队列
        queue.push(root)
        let nodeNums = 0
        // 队列不为空的化就一直进行遍历
        while (queue.length) {
            let length = queue.length
            while (length--) {
                //进来一次删除一个
                let node = queue.shift()
                // 计数+1
                nodeNums++
                // 遍历左子树
                node.left && queue.push(node.left)
                //遍历右子树
                node.right && queue.push(node.right)
            }
        }

        return nodeNums++
    }

}

{
    // 利用完全二叉树的特性
    function countNodes(root) {
        if (root === null) return 0
        let left = root.left;
        let right = root.right;

        let leftDepth = 0
        let rightDepth = 0

        while (left) {
            left = left.left
            leftDepth++
        }

        while (right) {
            right = right.right
            rightDepth++
        }
        if (leftDepth === rightDepth) {
            return Math.pow(2, leftDepth + 1) - 1
        }

        // 因为left一直在变化，right也在变化，所以不能写right和left
        return countNodes(root.left) + countNodes(root.right) + 1
    }
}