{
    // 递归
    function binaryTreePaths(root) {
        let res = []
        const getPath = function (node, curPath) {
            // 确定递归条件到叶子节点为止
            if (node.left === null && node.right === null) {
                // 说明是叶子节点, 路径的最后一个节点
                curPath += node.val
                // 收集一个路径
                res.push(curPath)
                return
            }
            //确定递归的单层逻辑 ，数据处理，加入链接符号
            curPath += node.val + '->'
            if (node.left) {
                getPath(node.left, curPath)
            }
            if (node.right) {
                getPath(node.right,curPath)
            }
        }
        getPath(root, '')
        return res
    }
}

{
    // 迭代法
    var binaryTreePaths = function (root) {
        if (!root) return [];
        const stack = [root]
        let paths = []
        let res = []
         while(stack.length) {
            const node = stack.pop()
             let path = paths.pop()
             if(!node.left && node.right) {
                 // 叶子节点终止，添加路径到结果中
                 res.push(path + node.val);
                 continue
             }
             path += node.val + '->'
             if(node.right) {
                  stack.push(node.right)
                  paths.push(path)
             }
             if(node.left) {
                  stack.push(node.left)
                  paths.push(path)
             }
         }
         return res
    }
}