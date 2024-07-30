/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    //所以 如果 中间节点是 q 和 p 的公共祖先，那么 中节点的数组
    // 一定是在[p, q]区间的。即 中节点 > p && 中节点 < q 或者 中节点 > q && 中节点 < p。
    if (root == null) return root
    // 比目标大 向左
    if (root.val > p.val && root.val > q.val) return (root.left = lowestCommonAncestor(root.left, p, q))
    // 比目标小向右
    if (root.val < p.val && root.val < q.val) return (root.right = lowestCommonAncestor(root.right, p, q))
    return root
}
var lowestCommonAncestor = function (root, p, q) {
    // 使用递归的方法
    // 1. 使用给定的递归函数lowestCommonAncestor
    // 2. 确定递归终止条件
    if (root === null) {
        return root
    }
    if (root.val > p.val && root.val > q.val) {
        // 向左子树查询
        let left = lowestCommonAncestor(root.left, p, q)
        if (left !== null) {
            return left
        }
    }
    if (root.val < p.val && root.val < q.val) {
        // 向右子树查询
        let right = lowestCommonAncestor(root.right, p, q)
        if (right !== null) {
            return right
        }
    }
    return root
}

var lowestCommonAncestor = function (root, p, q) {
    while (root) {
        // 比当前节点都大，左
        if (root.val > p.val && root.val > q.val) {
            root = root.left
        } else if (root.val < p.val && root.val < q.val) {
            root = root.right
        } else if ((root.val >= q.val && root.val <= p.val) || (root.val <= q.val && root.val >= p.val)) {
            return root
        }
    }
    return null
}
