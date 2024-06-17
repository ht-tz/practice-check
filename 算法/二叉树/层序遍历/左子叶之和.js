// 左叶子节点之和

{
    function sumOfLeftLeaves(root) {
        function nodesSum(node) {
            // 1. 确定递归终止条件
            if (node === null) return 0
            // // 可以不写，但是会让递归多一层
            if (node.left === null && node.right === null) return 0

            //左叶子节点遍历数值，然后通过递归求去左子数左叶子节点之和，和右子树的左叶子节点之和，相加便是整个数的左叶子之和。
            let leftNum = nodesSum(node.left)
            //单层递归调用逻辑
            if (node.left !== null && node.left.left === null && node.left.right === null) {
                //说明是叶子节点
                leftNum = node.left.val
            }
            let rightNum = nodesSum(node.right)
            let sum = leftNum + rightNum
            return sum
        }
        return nodesSum(root)
    }
}

{
    var sumOfLeftLeaves = function (root) {
        // 递归逻辑
        let sum = 0
        const nodeSum = function (node) {

            //终止条件
            if (node === null) return 0
            if (node.left === null && node.right === null) return 0
            // 单程递归逻辑
            let lsum = nodeSum(node.left)
            let rsum = nodeSum(node.right)

            let  midValue = 0
            //遍历的是叶子点记录值
            if (node.left !== null && node.left.left === null && node.left.right === null) {
                midValue = node.left.val // 记录叶子节点的值
            }
            sum = midValue+lsum + rsum
            return sum
        }
        return nodeSum(root)
    };
}