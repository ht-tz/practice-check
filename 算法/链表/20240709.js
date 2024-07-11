var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0)
    let cur = dummy
    let carry = 0
    while (l1 !== null||l2 !== null) {
        let sum = carry
        if (l1 !== null) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2 !== null) {
            sum += l2.val
            l2 = l2.next
        }
        // 进位标识
        carry = Math.floor(sum / 10)
        cur.next = new ListNode(sum % 10)
        cur = cur.next
    }
    if (carry > 0) {
        cur.next = new ListNode(carry)
    }
    return dummy.next
};
