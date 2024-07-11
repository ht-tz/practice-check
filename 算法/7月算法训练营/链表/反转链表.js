class ListNode {
    constructor(val) {
        this.val = val ? val : 0;
        this.next = null;
    }
}

function reverseList(head) {
    if (!head || !head.next) return head
    let pre = null
    let cur = head
    let temp = null
    while (cur) {
        temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre
}


function reverseList(head) {
    if (!head || !head.next) return head
    let last = reverseList(head.next)
    head.next.next = head
    head.next = null
    return last
}