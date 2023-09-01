// 寻找每一个树行中的最大值
function largeLevals(root) {
    let res = [];
    let queue = [];
    if(root == null) return res;
    queue.push(root);
    while(queue.length) {
        let length =  queue.length;
         //设置最大值的初始值
         let max = queue[0].val;
         while(length--) {
            let node = queue.shift(); 
            max = max>node.val ? max : node.val;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
         }
         res.push(max);
    }
    return res;
}