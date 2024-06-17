//双指针
function removeDuplicates(s) {
    const res = []
    for (const key of s) {
        //最新子符与最新入栈数据相比较，相等就弹出，进行下一轮，依次遍历到最后
        if (key === res[res.length - 1]) {
            //栈底和栈顶相等
            res.pop()
        } else {
            //入栈
            res.push(key)
        }
    }
    return res.join('')
}



