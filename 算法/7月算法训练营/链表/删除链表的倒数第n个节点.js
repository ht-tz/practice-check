function removeNthFromEnd(head, n) {

    let dummy = new ListNode(0, head);
    let slow = dummy
    let fast = dummy;

    while (n--) {
        fast = fast.next;
    }
    fast = fast.next
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}