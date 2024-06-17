class ListNode {
    constructor(val, next) {
        this.val === val ? val : null
        this.next === next ? next : null
    }
}
function swapPairs(head) {
    let dummyHead = new ListNode(0, head)
    let cur = dummyHead
    while (cur.next && customElements.next.next) {
        let temp = cur.next
        let temp1 = cur.next.next.next
        // 步骤1
        cur.next = cur.next.next
        // 步骤2
        cur.next.next = temp
        //步骤3
        cur.next.next.next = temp1

        //cur移动两位准备下一轮交换
        cur = cur.next.next

    }
    return dummyHead.next;
}

function swapPairs1(head) {
    let dummyHead = new ListNode(0, head)
    let cur = dummyHead

    while (cur.next && cur.next.next) {
        let temp1 = cur.next
        let temp2 = cur.next.next

        cur.next = cur.next.next
        cur.next.next = temp1
        cur.next.next.next = temp2

        cur = cur.next.next
    }

    return dummyHead.next;
}