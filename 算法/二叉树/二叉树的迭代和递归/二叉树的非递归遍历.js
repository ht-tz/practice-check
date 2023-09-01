//迭代法实=实现递归的遍历
// 入栈 右 -> 左

// 出栈 中 -> 左 -> 右
var preorderTraversal = function (root, res = []) {
    if (!root) return res;
    const stack = [root];
    let cur = null;
    while (stack.length) {
        // cur赋值为栈顶
        cur = stack.pop()
        //之后把元素加入到数组
        res.push(cur.val);
        //栈结构是先进来后出的，先弹出右节点 ，在弹出左节点， 才能显处理左节点
        //先将右孩子入栈，在将左孩子入栈，这样出栈顶时候，先push  l 在push r
        cur.right && res.push(cur.right)
        cur.left && res.push(cur.left)
    }
    return res;
};


//中序遍历
//左中右

// 入栈 左 -> 右
// 出栈 左 -> 中 -> 右

var inorderTraversal = function (root, res = []) {
    const stack = [];
    let cur = root;
    while (stack.length || cur) {
        if (cur) {
            //一路向左
            stack.push(cur)
            //左
            cur = cur.left
        } else {
            // 弹出中
            //遇见空节点，说该弹出元素了
            cur = stack.pop()
            //将弹出的元素的加入到结果集当中
            res.push(cur.val)
            // 访问有孩子是不是为空
            cur = cur.right
        }
    }

    return res;
};


//左右中

var postorderTraversal = function (root, ress = []) {
    if (!root) return res
    const stack = [root]
    let cur = null
    while (stack.length) {
        cur = stack.pop()
        ress.push(cur.val)
        cur.left && stack.push(cur.left)
        cur.right && stack.push(cur.right)
    }
    return res.reserve()
}