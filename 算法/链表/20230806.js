class ListNode {
    constructor(val, next) {
        this.val = val ? val : 0
        this.next = next ? next : null
    }
}


var mergeTwoLists = function (list1, list2) {
    let headList = new ListNode(0)
    let head = headList
    while (list2 && list1) {
        if (list1.val < list2.val) {
            head.next = list1
            list1 = list1.next
        } else{
            head.next = list2
            list2 = list2.next
        }
        head =  head.next
    }
    if(list1) {
         head.next = list1
    }

    if(list2) {
         head.next = list2
    }

    return headList.next
}