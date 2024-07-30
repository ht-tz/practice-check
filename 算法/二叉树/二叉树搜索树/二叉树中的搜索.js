/*
 * @Author: htz
 * @Date: 2024-07-20 09:55:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-20 10:30:23
 * @Description: 二叉树的搜索
 */

//二叉搜索树是一个有序树：

// 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
// 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
// 它的左、右子树也分别为二叉搜索树

function searchBST(root, val) {
    if (root == null || root.val === val) {
        return root
    }
    // 递归
    // 左子树的值都比右子树值小, 左子树的值小于右子树的值，所以此时，左子树的值都比右边小，搜左边
    if (root.val > val) {
        return searchBST(root.left, val)
    }
    // 右子树的值都比左子树值大，小于目标值，搜索右边
    if (root.val < val) {
        return searchBST(root.right, val)
    }
    return null
}
