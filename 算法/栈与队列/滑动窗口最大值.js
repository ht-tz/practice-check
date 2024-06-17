
//双端队列实现单调队列
class MonoQueue {
    queue;
    constructor() {
        this.queue = []
    }
    //添加元素的同时，如果添加的元素大于入口的数值，就将入口元素弹出，
    enqueue(value) {
        // 入口元素 
        let back = this.queue[this.queue.length - 1]
        // value是添加元素
        // 添加元素大于入口元素，将入口元素弹出
        // 新入口的元素大于前面所有的元素，则把前面所有的元素全部卷走，直到入栈值称为最大元素
        while (back !== undefined && back < value) {
            //push的数值大于入口的数值，将队列末尾的值弹出
            this.queue.pop()
            //更新back的值
            back = this.queue[this.queue.length - 1]
        }
        //先判断是否满足先前条件, 不为空，大于入口元素的值， 则更新入口元素的值, 删除后端的值
        this.queue.push(value);
    }


    //弹出元素
    //弹出元素的时候 判断要弹出的数值是否与队列出口的数值相等，相等则弹出，
    // 同时判断队列是否为空
    dequeue(value) {
        let front = this.front();
        //栈不为空的话， 最值等于value则删除最前值
        if (this.queue.length && front === value) {
            this.queue.shift()
        }
    }

    //队列栈顶的始终为最大值
    front() {
        return this.queue[0]
    }
}

var maxSlidingWindow = function (nums, k) {
    //自定义队列
    let helpQueue = new MonoQueue()
    let i = 0;
    let j = 0;
    //存放结果的数组
    let res = []
    //k 是滑动窗口的长度
    while (j < k) {
        //调整滑动窗口的数据 将先k个数据放入队列，相当于初始化队列
        //因为在初始化的时候，最大值的一定在栈顶 
        helpQueue.enqueue(nums[j++])
    }
    
    //首先取出第一个值
    res.push(helpQueue.front());

    while (j < nums.length) {
        //滑动窗口移动最前面的数值，移除的是判断该元素是否放入队列
        //判读入口之是否和最前值相等  
        helpQueue.dequeue(nums[i])
        //滑动窗口加入最后面的元素, 更新队列的元素
        helpQueue.enqueue(nums[j])
        //记录最大值
        res.push(helpQueue.front());
        i++;
        j++;
    }

    return res

}