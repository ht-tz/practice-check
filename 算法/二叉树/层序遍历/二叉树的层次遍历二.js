function levelOrderBottom(root) {
     let res = [];
     let queue = []
     if(root === null) return res
     queue.push(root)
     while(queue.length) {
        // 记录该层节点的个数
        let length = queue.length
        //存放该层节点的元素
        let curLevel = []
        //遍历该层的节点
        while(length--) {
            //弹出该层节点
            let node = queue.shift()
            //存储元素
            curLevel.push(node.value)
            // 将下层的子元素放入到当当前队列
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        //从数组的前头进插入值，避免最后反转数组，减少运算时间
        res.unshift(curLevel)
     }
    
    return res
}