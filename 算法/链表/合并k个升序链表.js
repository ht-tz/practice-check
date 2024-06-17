function mergeKLists(lists) {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    let mergedLists = [];

    for (let i = 0; i < lists.length; i += 2) {
      const list1 = lists[i];
      const list2 = lists[i + 1];

      mergedLists.push(mergeTwoLists(list1, list2));
    }

    if (lists.length % 2 !== 0) {
      mergedLists.push(lists[lists.length - 1]);
    }

    lists = mergedLists;
  }

  return lists[0];
}

function mergeTwoLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let mergedHead = new ListNode(-1);
  let current = mergedHead;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 || l2;

  return mergedHead.next;
}

// 上面的超时了

//归并法实现合并k个升序链表

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
