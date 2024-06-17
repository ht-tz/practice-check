//后续遍历求高度， 高度判断是否平衡
/**
 *一个树的左右两个子节点的高度差绝对值不大于1 就是平衡二差树
 * 二叉树的深度，从根节点到该节点最长简单路径的条数 上-》下
 * 二叉树的高度，从该节点到叶子节点的最长最简单路径的条数 下-》上
 *
 * 代码的逻辑其实是求根节点的高度，根节点的高度就是这棵树的最大深度  ，随意才可以使用后续白遍历
 */

{
    var isBalanced = function(root) {
        return !(getHeight(root) ===-1)
    }

        function getHeight(node) {
        //递归三步曲
        //明确递归的参数和返回值
        // 参数 node  返回值 以前传入节点树的高度
        // 终止条件：
        // 递归的过程中遇见空节点为止，返回0，表示当前根节点的高度为0
        if (node === null) return 0
        //明确单层递归的逻辑
        let leftHeight = getHeight(node.left)
        //左子树不是平衡二叉树直接返回 - 1
        if (leftHeight === -1) return -1
        let rightHeight = getHeight(node.right)
        //右子树不是平衡二叉树直接返回-2
        if (rightHeight === -1) return -1
        let count = 0;
        //左右子树差值大于1
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1
        } else {
            count = Math.max(leftHeight, rightHeight) + 1
        }
        return count
    }
}

{
    var isBalanced = function(root) {
        //还是用递归三部曲 + 后序遍历 左右中 当前左子树右子树高度相差大于1就返回-1
        // 1. 确定递归函数参数以及返回值
        const getDepth = function(node) {
            // 2. 确定递归函数终止条件
            if(node === null) return 0;
            // 3. 确定单层递归逻辑
            let leftDepth = getDepth(node.left); //左子树高度
            // 当判定左子树不为平衡二叉树时,即可直接返回-1
            if(leftDepth === -1) return -1;
            let rightDepth = getDepth(node.right); //右子树高度
            // 当判定右子树不为平衡二叉树时,即可直接返回-1
            if(rightDepth === -1) return -1;
            if(Math.abs(leftDepth - rightDepth) > 1) {
                return -1;
            } else {
                return 1 + Math.max(leftDepth, rightDepth);
            }
        }
        return !(getDepth(root) === -1);
    };
}

{
    //迭代
    function  getHeight(node) {
         let queue = []
         // 压入当前元素
         if(node !== null) queue.push(node)
         let depth = 0, res = 0
         while(queue.length) {
             //取出栈顶
             let node = queue[queue.length - 1]
             if(node !==null) {
                 queue.pop()
                 queue.push(node)
                 queue.push(null)
                 depth++
                  node.right && queue.push(node.right)
                  node.left && queue.push(node.left)
             } else {
                 queue.pop()
                 node = queue[queue.length - 1]
                 queue.pop()
                 depth--
             }

             res = res >depth?res:depth

         }
    }

    var isBalanced = function (root) {
        if (root === null) return true;
        let queue = [root];
        while (queue.length) {
            let node = queue[queue.length - 1]; // 取出栈顶
            queue.pop();
            if (Math.abs(getHeight(node.left) - getHeight(node.right)) > 1) {
                return false;
            }
            node.right && queue.push(node.right);
            node.left && queue.push(node.left);
        }
        return true;
    };

}