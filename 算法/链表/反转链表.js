/**
 * 题意：反转一个单链表。
 *
 * 示例: 输入: 1->2->3->4->5->NULL 输出: 5->4->3->2->1->NULL
 *
 */

{
    //双指针
    const reverseList = function (head) {

        if (!head || !head.next) return

        let temp = null;
        let pre = null;
        let cur = head;


        while (cur) {
            //保存一下当前节点的下一个节点
            temp = cur.next
            //开始反转, 改变方向了
            cur.next = pre
            //开始移动 pre,cur向后移动一位
            pre = cur.next;
            //当前节点向后移一位， cur.next 因为此时的cur.next->指向了pre,所以需要临时指针 temp
            cur = temp;
        }
        //返回心链表的头节点
        return pre
    }
}
{

    function reverse(cur, pre) {
        if (cur === null) return pre
        //临时存储指针变量
        temp = cur.next;
        //开始反转
        cur.next = pre
        // //开始移动
        //这两步直接赋值
        // pre = cur;
        // cur  = temp;
        
        return reverse(temp, cur)
    }

    //递归算法
    const reverseList = (head) => {
        return reverse(head, null)
    }
}
