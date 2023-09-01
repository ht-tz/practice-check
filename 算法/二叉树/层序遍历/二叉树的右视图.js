// 二叉树的右视图 

function rightSideView(root) {
      
    let queue  = [];
    let res = []; 

    if(root === null)return res
     queue.push(root)
     while(queue.length) {
        let size = queue.length
         while(size--) {
            let node = queue.shift()
            //size 长度为0的时候，表明是该层节点的最后一个元素，最后一个元素一定是最左边的元素
            if(!length) { 
                res.push(node.val)
            }
            node.left&&queue.push(node.left)
            node.right&&queue.push(node.right)
         }
     }
     return res
}