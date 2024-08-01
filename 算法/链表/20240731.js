// function reverseList(head) {
//     if (head === null || head.next === null) return head
//     let pre = null
//     let cur = head
//     let temp = null
//     while (cur) {
//         temp = cur.next
//         cur.next = pre
//         pre = cur
//         cur = temp
//     }
//     return pre
// }
//
// function swap(head) {
//     let dummyHead = new ListNode(0, head)
//     let temp = dummyHead
//     while (temp.next && temp.next.next) {
//         let cur = temp.next.next
//         let pre = temp.next
//         pre.next = cur.next
//         cur.next = pre
//         temp.next = cur
//         temp = pre
//     }
//     return dummyHead.next

// function mergeTwoList(l1, l2) {
//     if (!l1) return l2
//     if (!l2) return l1
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
//         cur = cur.next
//     }
//
//     if (l1) cur.next = l1
//     if (l2) cur.next = l2
//     return head.next
// }
//
// function mergeHelpers(lists, l, r) {
//     if (l === r) return lists[l]
//     let mid = Math.floor((l + r) / 2)
//     let left = mergeHelpers(lists, l, mid)
//     let right = mergeHelpers(lists, mid + 1, r)
//     return mergeTwoList(left, right)
// }
//
// function mergeKList(lists) {
//     if (lists.length === 0) return null
//     return mergeHelpers(lists, 0, lists.length - 1)
// }

// function getListLen(head) {
//     let len = 0
//     let cur = head
//     while (cur) {
//         len++
//         cur = cur.next
//     }
//     return len
// }
//
// function getIntersectionNode(headA, headB) {
//     let curA = headA
//     let curB = headB
//     let lenA = getListLen(headA)
//     let lenB = getListLen(headB)
//     if (lenA < lenB) {
//         [curA, curB] = [curB, curA];
//         [lenA, lenB] = [lenB, lenA];
//     }
//
//     let gap = lenA - lenB
//     // 站到统统一起点
//     while (gap--) {
//         curA = curA.next
//     }
//     // 遍历AB
//     // 前面相交，后面肯定是相交的
//     // 前面不想交 后面肯定会相交（前提一定相交）
//     while (curA && curB) {
//         if (curA === curB) return curA
//         curA = curA.next
//         curB = curB.next
//     }
//     return null
// }
//
//
//
function addTwoNum(l1, l2) {
    let dummyHead = new ListNode(0)
    let cur = dummyHead
    let carry = 0
    while (l1 || l2) {
        let sum = carry
        if (l1 !== null) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2 !== null) {
            sum += l2.val
            l2 = l2.next
        }

        carry = Math.floor(sum / 10)
        cur.next = new ListNode(sum % 10)
        cur = cur.next
    }
    // 处理最后一个进位数字
    if (carry > 0) {
        cur.next = new ListNode(carry)
    }
    return dummyHead.next
}



function addBigNumbers(num1, num2) {
    // 反转字符串以便从最低位开始加
    num1 = num1.split('').reverse().join('');
    num2 = num2.split('').reverse().join('');

    // 找出最长的数字长度
    const maxLength = Math.max(num1.length, num2.length);

    // 初始化变量
    let carry = 0;
    let result = [];

    for (let i = 0; i < maxLength; i++) {
        // 取当前位的数字，没有则为 0
        const digit1 = i < num1.length ? parseInt(num1[i]) : 0;
        const digit2 = i < num2.length ? parseInt(num2[i]) : 0;

        // 当前位相加
        const sum = digit1 + digit2 + carry;

        // 计算进位和当前位结果
        carry = Math.floor(sum / 10);
        result.push(sum % 10);
    }

    // 如果还有进位，加入结果中
    if (carry) {
        result.push(carry);
    }

    // 反转结果并转为字符串
    return result.reverse().join('');
}

// 示例用法
const num1 = "123456789012345678901234567890";
const num2 = "987654321098765432109876543210";

console.log(addBigNumbers(num1, num2)); // 输出: 1111111110111111111011111111100
