class ListNode {
    constructor(val,next) {
        this.val = val;
        this.next = next;
    }
}


{
    //原链表删除
    function removeElement(head,val){
        //头节点始终只有一个，把第一个移除，第二个就是头节点了，如果所有节点都相等，那么它是是一个持续移除头节点的过程
        //头节点 不能为空 ，因要取出头节点的值，为空的话就相当于操作空指针了
        if(head !==null && head.next === val) {
            //头节点指向头节点的下一个
             head = head.next;
        }

        //因为已经为空了，就提前退出来
        if(head === null) {
            return head
        }

        //删除非头节点的元素
        // 删除当前元素，要找当前元素的前一个和后一个元素
        // 已确定当前的head.val === val;
        //从第二个元素开始，前一个元素是head，当前元素
        let pre = head;
        let cur  = head.next; 
         //目标是pre.next->cur.next
        while(cur) {
            if(cur.val === val) {
                pre.next = cur.next
            } else {
                // 前一个节点向下走一位
                pre = pre.next
            }
            //当前指针也向前走一位
            cur = cur.next;
         }
         return  head;
    }
}

{
    //虚拟头节点移除元素
    function removeElement(head,val){
        // 定义一个虚拟头节点
        const dummyHead  = new ListNode(0,head);
         //将虚拟头节点，指向cur,当删除的时候，cur.next = cur.next.next
         //要删除的目标是cur.next 当cur.next.val === val的时候
         //为什么是dummyHead,要删除cur.next的时候必须要知道上一个元素的指针是什么
         // 所以只能死cur 要删除的节点只能是cur.next

        let cur = dummyHead;
        while (cur.next) {
            if(cur.next.val === val) {
             //找到了这这个节点
              cur.next === cur.next.next;
              continue    
            } 
            cur = cur.next
        } 
        
        //返回头节点即可
        return dummyHead.next
    }
    
}

{
    //虚拟头节点移除元素
    function removeElement(head,val){
        // 定义一个虚拟头节点
        const dummyHead  = new ListNode(0,head);
         //将虚拟头节点，指向cur,当删除的时候，cur.next = cur.next.next
         //要删除的目标是cur.next 当cur.next.val === val的时候
         //为什么是dummyHead,要删除cur.next的时候必须要知道上一个元素的指针是什么
         // 所以只能死cur 要删除的节点只能是cur.next

        let pre = dummyHead;
        let cur =dummyHead.next;
        
        while (cur) {
            if(cur.next.val === val) {
             //找到了这这个节点
              pre.next = cur.next
            }  else {
                pre = pre
            }
            cur = cur.next
            
        } 
        

    }
    
}