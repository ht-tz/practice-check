/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = []
    if (!root === null) return res
    let queue = [root]
    while (queue.length) {
        let size = queue.length
        let curLeval = []
        while (size--) {
            let node = queue.shift()
            curLeval.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        res.push(curLeval)
    }
    return res
};

