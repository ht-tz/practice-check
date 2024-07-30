/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 搜索一条边的写法：
//
// if (递归函数(root->left)) return ;
//
// if (递归函数(root->right)) return ;
// 搜索整个树写法：
//
// left = 递归函数(root->left);  // 左
// right = 递归函数(root->right); // 右
// left与right的逻辑处理;         // 中
var lowestCommonAncestor = function (root, p, q) {
    // 后续遍历 左右中，下到上
    //1. 如果找到一个节点，发现左子树出现结点p，右子树出现节点q，
    // 或者
    // 2. 左子树出现结点q，右子树出现节点p，那么该节点就是节点p和q的最近公共祖先
    // 3. 二叉树的节点本身是p/q。孙子节点是p/q
    // 4. 如果左子树和右子树都返回null。说明左子树和右子树都没有p和q，root
    // 5. 如果左子树返回null，右子树返回一个节点，说明p和q都在右子树，返回右子树
    // 6. 如果右子树返回null，左子树返回一个节点，说明p和q都在左子树，返回左子树
    // 在递归函数有返回值的情况下：如果要搜索一条边，递归函数返回值不为空的时候，立刻返回，
    // 如果搜索整个树，直接用一个变量left、right接住返回值，这个left、right后序还有逻辑处理的需要，也就是后序遍历中处理中间节点的逻辑（也是回溯）。
    const transversal = (root, p, q) => {
        //终止条件
        if(root == null) return root// root ==  null
        if(root == p || root == q) return root
        //  root 不为空   root !== p/q

        // 找到了 root == null
        const left = transversal(root.left, p, q)
        const right = transversal(root.right, p, q)
        // 题目中 所有节点唯一 p/q都在 ，找到节点， 左右不为空
        if(left != null && right != null) return root
        // 左空， 右边不空， 一定都在右上反过来都在左边
        if(left == null) return right
        if(right == null) return left
    }
    return transversal(root, p, q)
};