 //二叉树是指，每个节点不超过两个字节点，N叉树，每一个子节点不超过n个子节点的树

 function levelOrder(root) {
     let res = [];let queue = []
     if(root === null) return res;
     res.push(root)
     while(queue.length) {
        //记录每层节点的个数
         let length = queue.length
          //存放每一层节点的值
         let curLevel  =[]
         while (length--) {
            let node = queue.shift()
            curLevel.push(node.value)
            // 一位每个节点可能有多个节点，所以不是left,right
            for(let item of node.children) {
                if(item) {
                    queue.push(item)
                }
            }
         }
         res.push(curLevel)
     }
     return res
 }