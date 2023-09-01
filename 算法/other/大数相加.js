/**
 * 大数相加，思路
 * 利用链表
 */

//定义节点
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {

    //设置虚拟头节点
    let resListHead = new ListNode(0)
    let list = new ListNode(0)
    //进位标识
    let carry = 0
    while (l1 || l2) {
        let val1 = l1 ? l1.val : 0
        let val2 = l2 ? l2.val : 0
        let sum = val1 + val2 + carry
        if (sum >= 10) {
            sum = sum - 10
            carry = 1
        } else {
            carry = 0
        }

        list.next = new ListNode(sum, null)
        list = list.next
        l1 = l1 ? l1.next : l1
        l2 = l2 ? l2.next : l1

    }
    if (carry === 1) {
        list.next = new ListNode(1, null)
    }
    return resListHead.next
}
