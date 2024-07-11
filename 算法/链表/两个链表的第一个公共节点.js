// 求出两个链表的长度

const getListLen = (head) => {
    let num = 0
    let cur = head
    while (cur) {

        num++
        cur = cur.next
    }
    return num
}
// 两个链表长度不一样，先让长的链表先走gap步，然后两个链表一起走，如果相等就是第一个公共节点
function getIntersectionNode(headA, headB) {
    let curA = headA
    let curB = headB
    let l1 = getListLen(curA)
    let l2 = getListLen(curB)
    if (l1 < l2) {
        let [curA, curB] = [curB, curA];
        let [l1, l2] = [l2, l1];
    }
    let gap = l1 - l2
    while (gap--) {
        curA = curA.next
    }

    while (curA && curB) {
        if (curA === curB) {
            return curA
        }
        curA = curA.next
        curB = curB.next
    }
    return null
}

//双指针
// 要么在香蕉节点相遇，相交一定会相遇
 // 要么不相交，最后两个指针都为nul
function getIntersectionNode(headA, headB) {
    let p1 = headA, p2 = headB;
    while(p1!==p2) {
         if(p1!==null) {
              p1 = p1.next
         }else {
             p1 = headB
         }
         if(p2!==null) {
              p2 = p2.next
         }else {
              p2 = headA
         }
    }
    return p1
}