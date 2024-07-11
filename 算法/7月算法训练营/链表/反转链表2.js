//https://leetcode.cn/problems/reverse-linked-list-ii/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
//TODO mark
var reverseBetween = function (head, left, right) {
    //题目中索引是从1开始的

    let success = null;
    const reverseN = function (head, n) {
        if (n == 1) {
            // 记录n+1个节点
            success = head.next;
            return head;
        }
        const last = reverseN(head.next, n - 1)
        head.next.next = head;
        head.next = success;
        return last
    }

    if (left == 1) {

        return reverseN(head, right)
    }
    head.next = reverseBetween(head.next, left - 1, right - 1)
    return head
};

var reverseBetween = function (head, left, right) {
    if (!head || !head.next) return head
    let dummyNode = new ListNode(0)
    dummyNode.next = head
    let pre = dummyNode
    // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
    for (let i = 1; i < left; i++) {
        pre = pre.next
    }

    let cur = pre.next
    let curNext = cur.next
    for (let i = 0; i < right - left; i++) {
        cur.next = curNext.next
        curNext.next = pre.next
        pre.next = cur
        curNext = cur.next
    }

    return dummyNode.next
}