function ListNode(val) {
    this.val = val;
    this.next = null;
}

function reverseKGroup(head, k) {
    if (!head || k <= 1) return head;
    let dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy;
    let next = dummy
    let cur = dummy

    let count = 0

    // 统计节点的数量
    while (cur.next) {
        cur = next
        count++
    }

    while (count >= k) {
        cur = pre.next
        next = cur.next
        for (let i = 1; i < k; i++) {
            // 开始翻转
            cur.next = next.next
            //最前面一个节点的后面
            next.next = pre.next
            // 翻转后
            pre.next = next
            next = cur.next
        }
        pre = cur
        count -= k
    }
    return dummy.next;
}