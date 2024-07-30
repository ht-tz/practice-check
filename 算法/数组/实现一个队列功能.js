class MyQueue {
    stack1 = []
    stack2 = []

    //队列先进后出
    add(n) {
        this.stack1.push(n)
    }

    // 出队列
    delete() {
        let res
        const stack1 = this.stack1
        const stack2 = this.stack2

        //将所有stack1中所有stack2中
        while (stack1.length) {
            const n = stack1.pop()
            if (n) {
                stack2.push(n)
            }
        }

        //stack2中最后一个元素就是队列的头部 出栈
        res = stack2.pop()

        //将stack2中所有元素重新放回stack1中
        while (stack2.length) {
            const n = stack2.pop()
            if (n) {
                stack1.push(n)
            }
        }

        // stack.pop() push stack2  后进来的显出，然后还原
        return res || null
    }

    getLen() {
        return this.stack1.length
    }

}