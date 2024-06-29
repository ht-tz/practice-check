// 合并两个有序链表

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// function mergeTwoLists(l1, l2) {
//     let dummyHead = new ListNode();
//     let cur = dummyHead;
//     while (l1, l2) {
//         if (l1.val <= l2.val) {
//             cur.next = l1
//             l1 = l1.next
//         } else {
//             cur.next = l2
//             l2 = l2.next
//         }
//     }
//     if(l1) {
//         cur.next = l1
//     } else {
//         cur.next = l2
//     }
//
//     return dummyHead.next
// }

// function mergeKLists(lists) {
//     if (lists.length === 0) return null
//     return mergeList(lists, 0, lists.length - 1)
// }
//
// function mergeList(lists, left, right) {
//     if (left === right) return lists[left]
//     let mid = Math.floor((left + right) / 2)
//     let leftLists = mergeList(lists, left, mid)
//     let rightLists = mergeList(lists, mid + 1, right)
//     return mergeTwoLists(leftLists, rightLists)
// }
//
//
// function mergeTwoLists(l1, l2) {
//     if (!l1) return l2
//     if (!l2) return l1
//
//     let head = new ListNode(0)
//     let cur = head
//     while (l1 && l2) {
//         if (l1.val <= l2.val) {
//             cur.next = l1
//             l1 = l1.next
//         } else {
//             cur.next = l2
//             l2 = l2.next
//         }
//     }
//     cur.next = l1 || l2
//     return head.next
// }

//翻转链表
function reverseList(head) {
    if (!head) return head
    let pre = null
    let cur = head
    while (cur) {
        temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre
}
