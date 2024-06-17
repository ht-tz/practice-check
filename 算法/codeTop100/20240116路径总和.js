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
 * @param {number} targetSum
 * @return {boolean}
 */

var hasPathSum = function (root, targetSum) {
    const traversal = (node, count) => {
        if (count === 0 && !node.left && !node.right) return true
        if (!node.left && !node.right) return false

        if (node.left) {
            count -= node.left.val
            if (traversal(node.left, count)) return true
            count += node.left.val
        }

        if (node.right) {
            count -= node.right.val
            if (traversal(node.right, count)) return true
            count += node.right.val
        }
        return false
    }
    if (root === null) return false
    return traversal(root, sum - root.val)
};


var hasPathSum = function (root, targetSum) {
    const transversal = (node, count) => {
        if (count === 0 && !node.left && !node.right) {
            return true
        }

        if (!node.right && !node.left && count !== 0) return false

        if (node.left) {
            count -= node.left.val
            //减去之后看符不符合条件，符和条件的话就return true
            if (transversal(node.left, count)) return true
            //不符合条件的话就加回来 
            count += node.left.val
        }

        if (node.right) {
            count -= node.right.val
            if (transversal(node.right, count)) return true
            count += node.right.val
        }
        return false
    }

    if (root === null) return false
    return transversal(root, targetSum - root.val)
}