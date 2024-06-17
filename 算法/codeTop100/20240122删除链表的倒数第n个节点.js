/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var removeNthFromEnd = function (head, n) {
    let dummyHead = new ListNode(0, head);
    let slow = dummyHead
    let fast = dummyHead
    while (n-- && fast !== null) {
        fast = fast.next
    }
    fast = fast.next
    while (fast !== null) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return dummyHead.next
};


function removeNthFromEnd(head, n) {

    let dummyHead = new ListNode(0, head)
    let slow = dummyHead
    let fast = dummyHead
    while (n-- && fast !== null) {
        fast = fast.next
    }
    fast = fast.next
    while (fast !== null) {
        slow = slow.next
        fast = fast.next
    }

    slow.next = slow.next.next
    return dummyHead.next


}