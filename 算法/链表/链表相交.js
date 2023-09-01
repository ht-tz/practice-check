/**
 * 链表两两相交
 *
 */

function getListLen(head) {
     let len = 0;
     let cur = head
    while(cur)  {
         len ++;
         cur = cur.next;
    }
    return len
}

function getIntersectionNode(headA,headB) {
    let curA = headA
    let curB = headB

    let lenA = getListLen(headA)
    let lenB  = getListLen(headB)

    if(lenA<lenB) {
        // 交换变量注意加 “分号” ，两个数组交换变量在同一个作用域下时
        // 如果不加分号，下面两条代码等同于一条代码: [curA, curB] = [lenB, lenA]

        [curA, curB] = [curB, curA];
        [lenA, lenB] = [lenB, lenA];
    }

    //求长度差
    let gap = lenA - lenB

    //让curA和curB在统一起点上
    while (gap--) {
        curA  = curA.next
    }

    //遍历A和B 遇到相同直接返回
    while(curA && curB) {
        if(curA === curB) {
            return curA
        }
        curA = curA.next
        curB = curB.next
    }
    return null;
}