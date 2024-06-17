// class ListNode {
//     constructor(val, left, right) {
//         this.val = val ? val : ""
//         this.left = left ? left : 0
//         this.right = right ? right : 0
//     }
// }

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var generateParenthesis = function (n) {
//     let result = []
//     let queue = []
//     let head = new ListNode("(", 1, null)
//     queue.push(head)
//     //对列保存的是每一层括号分布的情况
//     while (queue.length > 0) {
//         let len = queue.length;
//         // for循环每次都只出的当前队列的一层
//         for (let i = 0; i < len; i++) {
//             // 当前层的元素依次出队
//             let node = queue.shift()
//             if (node.left < n) {
//                 let leftNode = new ListNode(node.val + "(", node.left + 1, node.right)
//                 queue.push(leftNode)
//             }
//             //右侧括号的数量小于左侧，右侧的括号个数自然小于n
//             if (node.left > node.right) {
//                 let rightNode = new ListNode(node.val + ")", node.left, node.right + 1)

//                 //最后一个括号一定是右括号 ，此时n === node.right 表示括号已经生成完毕
//                 // 直接将当前节点的值存入结果集合即可
//                 if (rightNode.right === n) {
//                     result.push(rightNode.val)
//                 } else {
//                     //如果不等话，说明括号生层还未结束
//                     queue.push(rightNode)
//                 }
//             }
//         }
//     }
//     return result;
// };

// //dfs
// var generateParenthesis = function (n) {
//     let res = []
//     function backtrack(s = "", left = 0, right = 0) {
//         if (right > left) {
//             return
//         }
//         if (left === right && left === n) {
//             res.push(s)
//             return
//         }
//         // 还有左括号，继续加入左括号
//         if (left < n) {
//             backtrack(s + "(", left + 1, right)
//         }
//         // 加入右括号
//         if (left > right) {
//             backtrack(s + ")", left, right + 1)
//         }

//     }

//     backtrack('', 0, 0)

//     return res
// }

// let n = 3
// let res = generateParenthesis(n)
// console.log(res);

// 合并k个排序链表
class ListNode {
  constructor(val, left) {
    this.val = val ? val : "";
    this.next = next ? this.next : 0;
  }
}

//超时了
function merageKLists(lists) {
  let result = [];
  if (lists.length === 0) return result;
  while (lists.length > 0) {
    let meragesLists = [];
    for (let i = 0; i < lists.length; i += 2) {
      const list1 = lists[i];
      const list2 = lists[i + 1];
      meragesLists.push(merageTwoLists(list1, list2));
    }
    if (lists.length % 2 !== 0) {
      meragesLists.push(lists[lists.length - 1]);
    }
    lists = meragesLists;
  }
  return lists[0];
}

function merageTwoLists(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let head = new ListNode(0, null);

  let cur = head;

  while (list1 && list2) {
    if (list1.val < list1.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
  }
  cur.next = list1 || list2;
  return head.next;
}
