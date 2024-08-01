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
// var lowestCommonAncestor = function (root, p, q) {
//     const dfs = (root, p, q) => {
//         // root 为空
//         if (root === null) return root
//         if (root === p || root === q) return root
//         let left = dfs(root.left, p, q)
//         let right = dfs(root.right, p, q)
//         // 不为空的话就可能出现了p和q  这时候就要进行处理， 这时候就说明了root就是公共祖先
//         if( left!== null && right!== null) return root
//         // 如果左为空，右不为空，说明公共祖先在右子树
//         if (left === null) return right
//         // 如果右为空，左不为空，说明公共祖先在左子树
//         if (right === null) return left
//     }
//
//     return dfs(root, p, q)
// };

 function getHeight(root) {
     if(root == null) return 0
     let  left = getHeight(root.left)
     let right = getHeight(root.right)
     return Math.max(left, right) + 1
}
