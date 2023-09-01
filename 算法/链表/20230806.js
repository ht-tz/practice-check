class ListNode {
    constructor(val, next) {
        this.val = val ? val : 0
        this.next = next ? next : null
    }
}

{
    //移除链表
    var removeElement = function (head, val) {
        let dummyHead = new ListNode(0, head)
        let cur = dummyHead
        while (cur.next) {
            if (cur.next.val === val) {
                cur.next = cur.next.next
                continue
            }
            cur = cur.next
        }
        return dummyHead.next
    }
}

{
    // 反转链表
    const reverseList = (head) => {
        if (!head && !head.next) return head
        let temp = null
        pre = null
        cur = head
        while (cur) {
            temp = cur.next
            cur.next = pre;
            pre = cur
            cur = temp
        }
        return pre
    }

}

{
    const reverseList = function (head) {
        if (!head || !head.next) return head
        let temp = null;
        let pre = null;
        let cur = head
        while (cur) {
            temp = cur.next
            cur.next = pre
            //完成反转开始移动
            pre = cur
            cur = temp
        }
        return  pre
    }
}