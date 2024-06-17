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
var findBottomLeftValue = function (root) {

    let maxDepth = 0, resValue = null
    //考虑递归遍历 ， 前序遍历，找到最大节点的叶子节点即可

    function dfsTree(node, curDepth) {
        //终止条件
        if (node.left === null && node.right === null) {
            if (maxDepth < curDepth) {
                maxDepth = curDepth
                resValue = node.val
            }
        }
        if (node.left) {
            curDepth++
            dfsTree(node.left, curDepth)
            // 回溯一位
            curDepth--
        }

        if (node.right) {
            curDepth++
            dfsTree(node.right, curDepth)
            curDepth--
        }

    }

    dfsTree(root, 1)
    return resValue

};
{
    // 层序遍历
    var findBottomLeftValue = function (root) {

        let queue = [];
        if (root === null) {
            return null
        }

        queue.push(root)

        let value;
        while (queue.length > 0) {
            let len = queue.length
            for (let i = 0; i < len; i++) {
                let node = queue.shift()

                //说明是最后一个节点
                if (i === 0) {
                    // 最后一个节点也就是最深处的节点，也是目标值，不断去更新目标值
                    value = node.val
                }
                node.left && queue.push(node.left)
                node.right && queue.push(node.right)
            }
        }

        return value

    }


}