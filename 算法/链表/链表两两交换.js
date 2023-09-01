class ListNode{
    constructor(val,next){
         this.val = (val === undefined?0:val)
         this.next = (next === null?0:next)
    }
}

/**
 *  给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 *
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @url https://programmercarl.com/0024.%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9.html#_24-%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9
 */

function swapPairs(head) {
    //设置一个虚拟头节点指向head
    let dummyHead = new ListNode(0,head)
    //当前节点
    let cur = dummyHead;
    // 循环终止条件， 当前节点的next，或cur.next.next不存在，终止循环
    while(cur.next && cur.next.next) {
        //先保存 cur.net.next
        let temp = cur.next.next.next;
         //再保存cur.next
        let temp2 = cur.next
        cur.next = cur.next.next;
        //此时的cur.next.next 由于cur.next已经改边，所以应该等于temp2
        cur.next.next = temp2
        //此时的cur.next.next指向已经变了
        cur.next.next.next = temp
        //cur 移动两位准备下一步交换
        cur = cur.next.next
    }
    //返回头节点
    return dummyHead.next
}