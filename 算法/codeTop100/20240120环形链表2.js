var detectCycle = function (head) {
    if (!head || !head.next) return null
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (fast === slow) {
            let index1 = head
            let index2 = fast
            while (index1 !== index2) {
                index1 = index1.next
                index2 = index2.next
            }
            return index1
        }
    }
    return null
}