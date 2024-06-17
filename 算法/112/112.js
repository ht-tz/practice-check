// 两数之和
function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.get(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}

// 两数相加

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let cur = dummyHead;
  let carry = 0;
  while (l1 !== null || l2 !== null) {
    let x = l1.val ? l1.val : 0;
    let y = l2.val ? l2.val : 0;
    let sum = x + y + carry;

    //进位标识
    carry = Math.floor(sum / 10);
    // 当前位置上的值
    cur.next = new ListNode(sum % 10);
    cur = cur.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  //为啥不翻转-看题目要求
  if (carry > 0) {
    cur.next = new ListNode(carry);
  }
  return dummyHead.next;
}

// 无最长重复字符串
function longestUniqueSubstring(s) {
  let map = new Map();
  let l = 0;
  let res = 0;
  for (let r = 0; r < s.length; r++) {
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      // 更新左边界
      l = map.get(s[r]) + 1;
    }
    res = Math.max(res, r - l + 1);
    map.set(s[r], r);
  }
  return res;
}

// 寻找两个正序数组的中位数
/**
 *
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;

  // 两个数组总长度
  let len = n1 + n2;

  // 保存当前移动的指针的值(在nums1或nums2移动)，和上一个值
  let preValue = -1;
  let curValue = -1;

  //  两个指针分别在nums1和nums2上移动
  let point1 = 0;
  let point2 = 0;

  // 需要遍历len/2次，当len是奇数时，最后取curValue的值，是偶数时，最后取(preValue + curValue)/2的值
  for (let i = 0; i <= Math.floor(len / 2); i++) {
    preValue = curValue;
    // 需要在nums1上移动point1指针
    if (point1 < n1 && (point2 >= n2 || nums1[point1] < nums2[point2])) {
      curValue = nums1[point1];
      point1++;
    } else {
      curValue = nums2[point2];
      point2++;
    }
  }

  return len % 2 === 0 ? (preValue + curValue) / 2 : curValue;
};

//整数翻转
function reveseInteger(x) {
  let revese = 0;
  const isNegative = x < 0;
  x = Math.abs(x);

  while (x) {
    const num = x % 10;
    revese = revese * 10 + num;
    x = Math.floor(x / 10);
  }
  if (revese < Math.pow(-2, 31) || revese > Math.pow(2, 31) - 1) {
    return 0;
  }
  return isNegative ? -revese : revese;
}

//有效括号
function isValidParentheses(s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s);
    } else {
      const top = stack.pop();
      if (s[i] !== map[top]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

//盛水最多的容器
function maxArea(heights) {
  let maxArea = 0;
  let left = 0;
  let right = heights.length - 1;
  while (left < right) {
    //计算当前容器的高度
    const height = Math.min(heights[left], heights[right]);
    const width = right - left;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
  }
  //移动小的指针，移动较大指针一定会，面积减少，宽短一直在减少
  if (heights[left] < heights[right]) {
    left++;
  } else {
    right--;
  }
  return maxArea;
}

//最长公共前缀
function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  //第一个字符串作为初始前缀
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    //逐个比较当前前缀与下一个字符串的公共前缀
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
}

//三数之和
function threeSum(nums) {
  let len = nums.length;
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) return res;
    let left = i + 1;
    let right = len - 1;
    if (nums[i] === nums[i - 1]) continue;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] > 0) {
        right--;
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return res;
}

//电话号码字母组合
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  let res = [];
  //数字集合，长度就是path的长度
  const size = digits.length;
  //数字和字母的映射关系
  const map = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  //不存在就直接返回
  if (!size) return;
  if (size === 1) return map[digits].split("");
  let path = [];
  backtracking(digits, size, 0);
  return res;
  function backtracking(digits, size, index) {
    if (path.length === size) {
      res.push(path.join(""));
      return;
    }
    //根据索引值取出来相应的字符串
    //2,3 ->2
    let temp = map[digits[index]];
    for (let i = 0; i < temp.length; i++) {
      // 遍历字符串
      path.push(temp[i]);
      backtracking(digits, size, index + 1);
      path.pop();
    }
  }
};

// 组合
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [],
    path = [];
  backtracking(n, k, 1);
  return res;
  function backtracking(n, k, startIndex) {
    if (path.length === k) {
      res.push([...path]);
      return;
    }

    // 基础版本
    // for (let i = startIndex; i <= n; i++) {
    //     path.push(i)
    //     backtracking(n, k, startIndex + 1)
    //     path.pop()
    // }
    //优化版本-剪枝, 至多从(n - k-(n - path.length)+ 1)） 开始遍历 能 获取结果的最大开始的地方
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      backtracking(n, k, startIndex + 1);
      path.pop();
    }
  }
};

//组合2
var combinationSum2 = function (candidates, target) {
  let res = [];
  let path = [];
  let len = candidates.length;
  candidates.sort((a, b) => a - b);

  backtracking(0, 0);
  return res;
  function backtracking(startIndex, sum) {
    if (sum === target) {
      res.push([...path]);
      return;
    }
    for (let i = startIndex; i < len; i++) {
      const num = candidates[i];
      //同一层使用过的数组跳过
      if (i > startIndex && num === candidates[i - 1]) {
        continue;
      }

      if (num > target - sum) break;
      path.push(num);
      sum += num;
      path.pop();
      sum -= num;
    }
  }
};

// class ListNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

//合并k个有序链表
var merageTowLists = function (l1, l2) {
  let head = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  let p = head;
  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }
    p = p.next;
  }
  p.next = p1 || p2;
  return head.next;
};

//删除有序数组中的重复项
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  console.log(nums);
  return i + 1;
}

let att = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
console.log(removeDuplicates(att));
//括号的生成
class ListNode {
  constructor(val, left, right) {
    this.val = val ? val : "";
    this.left = left ? left : 0;
    this.right = right ? right : 0;
  }
}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];
  let queue = [];
  let head = new ListNode("(", 1, null);
  queue.push(head);
  //对列保存的是每一层括号分布的情况
  while (queue.length > 0) {
    let len = queue.length;
    // for循环每次都只出的当前队列的一层
    for (let i = 0; i < len; i++) {
      // 当前层的元素依次出队
      let node = queue.shift();
      if (node.left < n) {
        let leftNode = new ListNode(node.val + "(", node.left + 1, node.right);
        queue.push(leftNode);
      }
      //右侧括号的数量小于左侧，右侧的括号个数自然小于n
      if (node.left > node.right) {
        let rightNode = new ListNode(node.val + ")", node.left, node.right + 1);

        //最后一个括号一定是右括号 ，此时n === node.right 表示括号已经生成完毕
        // 直接将当前节点的值存入结果集合即可
        if (rightNode.right === n) {
          result.push(rightNode.val);
        } else {
          //如果不等话，说明括号生层还未结束
          queue.push(rightNode);
        }
      }
    }
  }
  return result;
};

{
  class ListNode {
    constructor(val, left, right) {
      this.val = val ? val : "";
      this.left = left ? left : 0;
      this.right = right ? right : 0;
    }
  }

  /**
   * @param {number} n
   * @return {string[]}
   */
  var generateParenthesis = function (n) {
    let result = [];
    let queue = [];
    let head = new ListNode("(", 1, null);
    queue.push(head);
    //对列保存的是每一层括号分布的情况
    while (queue.length > 0) {
      let len = queue.length;
      // for循环每次都只出的当前队列的一层
      for (let i = 0; i < len; i++) {
        // 当前层的元素依次出队
        let node = queue.shift();
        if (node.left < n) {
          let leftNode = new ListNode(
            node.val + "(",
            node.left + 1,
            node.right
          );
          queue.push(leftNode);
        }
        //右侧括号的数量小于左侧，右侧的括号个数自然小于n
        if (node.left > node.right) {
          let rightNode = new ListNode(
            node.val + ")",
            node.left,
            node.right + 1
          );

          //最后一个括号一定是右括号 ，此时n === node.right 表示括号已经生成完毕
          // 直接将当前节点的值存入结果集合即可
          if (rightNode.right === n) {
            result.push(rightNode.val);
          } else {
            //如果不等话，说明括号生层还未结束
            queue.push(rightNode);
          }
        }
      }
    }
    return result;
  };

  //dfs
  var generateParenthesis = function (n) {
    let res = [];
    function backtrack(s = "", left = 0, right = 0) {
      //
      if (right > left) {
        return;
      }
      if (left === right && left === n) {
        res.push(s);
        return;
      }
      // 还有左括号，继续加入左括号
      if (left < n) {
        backtrack(s + "(", left + 1, right);
      }
      // 加入右括号
      if (left > right) {
        efvv;
        backtrack(s + ")", left, right + 1);
      }
    }

    backtrack("", 0, 0);

    return res;
  };

  let n = 3;
  let res = generateParenthesis(n);
  console.log(res);
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) return null; // 空的直接返回，不然 lists.length 是负数
  return mergeList(lists, 0, lists.length - 1);
};

// 归并排序进行不断的分割，return 时的 merge 进行合并排序
function mergeList(lists, start, end) {
  // 如果 start === end 说明分治的分到头了，只剩一个元素了，直接返回即可
  if (start === end) {
    return lists[start];
  }
  const mid = start + ((end - start) >> 1); // 找到中点，然后下面继续进行递归分割成左右两部分
  const leftList = mergeList(lists, start, mid);
  const rightList = mergeList(lists, mid + 1, end);
  return merge(leftList, rightList); // 进行合并
}

// 这里就是基本算法，合并两个有序链表
function merge(head1, head2) {
  let newHead = new ListNode(0),
    p = newHead;
  while (head1 && head2) {
    if (head1.val <= head2.val) {
      p.next = head1;
      head1 = head1.next;
    } else {
      p.next = head2;
      head2 = head2.next;
    }
    p = p.next;
  }
  // 没遍历完的接上即可
  p.next = head1 ? head1 : head2;
  return newHead.next;
}
