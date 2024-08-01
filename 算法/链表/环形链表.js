//https://leetcode.cn/problems/linked-list-cycle/
var hasCycle = function (head) {
    let slow = head
    let fast = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow.next = slow.next
        if (slow == fast) return true
    }
    return fast
}