/**
 * 给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === null) return 0;
    let queue = [root];
    let height = 0
    while (queue.length) {
        height++

        let size = queue.length
        while (size--) {
            let node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
   
    }
    return height
}

var minDepth = function (root) {
    if (root === null) return 0;
    let queue = [root];

    let height = 0

    while (queue.length) {
        let size = queue.length
        while (size--) {
            let node = queue.shift()
            //当左右孩子都为空的时候就是最小深度
            if (node.left === null && node.right === null) {
                return height
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        height++
    }
    return height
}