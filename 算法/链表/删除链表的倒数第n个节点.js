class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === null ? null : next)
    }
}

function removeNthFromEnd(head, n) {
//定义虚拟头结点
    let dummyHead = new ListNode(0, head)
//定义一个快慢指针 fast,slow,初始值为dummy
    let slow = dummyHead
    let fast = dummyHead
//fast 首先走n+1步，为啥？因为只有这样同时移动的时候slow才能指向删除结点的上一个结点（方便删除操作)
    while (n--) {
//虚拟头结点前进N个结点时，fastNode.next可推断不为空
        fast = fast.next
    }
//slow和fast同时再走，此时fast走到末尾， 正好完全，slow走好走到要删除节点的前面， slow的下一个节点就要删除的节点
//遍历直至fastNode.next = null， 即尾部节点。 此时slowNode指向倒数第n个节点。
    while (fast.next !== null) {
        fast = fast.next
        slow = slow.next
    }
//开始删除结点
    slow.next = slow.next.next;
//fast和slow同时移动，直到fast移动到链表的末尾
//删除slow下一个节点
    return dummyHead.next;
}