/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
    if (lists.length === 0) return null;
    return mergeList(lists, 0, lists.length - 1);
}

function mergeList(lists, left, right) {
    //只剩下一个元素了，说明分治到头了，直接返回
    if (left === right) return lists[left];
    const mid = left + ((right - left) >> 1);
    const leftList = mergeList(lists, left, mid);
    const rightList = mergeList(lists, mid + 1, right);
    return mergeTwoLists(leftList, rightList);
}

function mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    let head = new ListNode(0);
    let current = head;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 || l2;

    return head.next;
}
