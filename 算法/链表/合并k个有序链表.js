class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

var mergeKLists = function (lists) {
    if (lists.length === 0) return

    const mergeTwoLists = (l1, l2) => {
        if (!l1) return l2
        if (!l2) return l1

        if (l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2)
            return l1
        } else {
            l2.next = mergeTwoLists(l1, l2.next)
            return l2
        }

    }

    const mergeListsHelper = (lists, start, end) => {
        if (start === end) return lists[start]
        const mid = Math.floor((start + end) / 2)
        const left = mergeListsHelper(lists, start, mid)
        const right = mergeListsHelper(lists, mid + 1, end)
        return mergeTwoLists(left, right)
    }

    return mergeListsHelper(lists, 0, lists.length - 1)
}