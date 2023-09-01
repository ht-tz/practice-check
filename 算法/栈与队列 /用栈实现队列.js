// 使用数组的两个方法
// 栈的特点是先进后出， 队列先进来先出来
class MyQueue {
    constructor() {
        this.stackIn = []
        this.stackOut = []
    }

    push(x) {
        this.stackIn.push(x)
    }

    pop() {
        const size = this.stackOut.length
        if (size) {
            //栈先进后出来，push进去，pop出来
            return this.stackOut.pop()
        }

        //不存在的话，就直接重stackIn里面去取出来
        while (this.stackIn.length) {
            this.stackOut.push(this.stackIn.pop())
        }
    }

    //返回栈顶部元素，不删除
    peek() {
        const x = this.pop()
        // 返回栈顶部
        this.stackOut.push(x)
        return x;
    }

    empty() {
         return !this.stackOut.length && !this.stackIn.length
    }

}