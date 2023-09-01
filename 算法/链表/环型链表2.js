/**
 * 环型链表2
 */

function detectCycle(head) {
    if (head !== null && !head.next) return null
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next) {
        fast = fast.next.next
        slow = slow.next;
         //相交点， fast === slow， 此时fast继续走, 另一个从头开始继续走，再次相等的时候就是相交点
        if (fast === slow) {
            let index1 = fast;
            let index2 = head
            while (index1 !== index2) {
                index1 = index1.next
                index2 = index2.next
            }
            return index1
        }
    }

    return null
}