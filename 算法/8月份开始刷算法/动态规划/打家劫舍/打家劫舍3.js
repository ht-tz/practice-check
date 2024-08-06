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
var rob = function (root) {
    const postOrder = (node) => {
        if (node === null) return [0, 0]
        let l = postOrder(node.left)
        let r = postOrder(node.right)
        const DN = Math.max(l[0], l[1]) + Math.max(r[0], r[1])
        const N = node.val + l[0] + r[0]
        return [DN, N]
    }
    const res = postOrder(root)
    return Math.max(res[0], res[1])
}
