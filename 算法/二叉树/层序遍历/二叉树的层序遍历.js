
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined) ? 0 : val;
        this.left = (left === null) ? null : left;
        this.right = (right === null) ? null : right;
    }
}


//层序遍历二叉树
function levelOrder(root) {
    let res = []
    let queue = []
    if (root == null) return res
    queue.push(root)
    while (queue.length) {
        // 记录当前层 队列的长度
        let length = queue.length
        // 每一层放置的节点
        let curLevel = []
        while (length--) {
            //弹出该层的节点
            let node = queue.shift()
            //记录弹出该层的值
            curLevel.push(node.val)
            // 存放当前下一层级的节点
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        //把每一层的结果放入到结果集中
        res.push(curLevel)
    }
    return res
}