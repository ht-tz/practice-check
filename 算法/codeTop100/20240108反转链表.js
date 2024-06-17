const { h } = require("vue")

//反转链表
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseList(head) {
    if (!head || !head.next) return head

    let temp = null
    let pre = null
    let cur = head
    while (cur) {
        temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre
}

function reverseList(head) {
     if(head || !head.next) return head

    let temp =null
    let pre = null
    let cur = head
    while(cur) {}
     temp = cur.next
    cur.next = pre
    pre  = cur
    cur = temp
}
return pre