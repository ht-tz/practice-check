// 对头保存最大值， 新进来的放到第队列的尾部
var maxSlidingWindow = function (nums, k) {
    let res = [];
    let temp = [];
    for (let i = 0; i < nums.length; i++) {
        while (temp.length != 0 && nums[i] > nums[temp[0]]) {
            temp.shift();
        }
        temp.unshift(i);

        // 判元是否在窗口内， i-k 是窗口的位置
        if (temp[temp.length - 1] <= i - k) {
            temp.pop();
        }

        if (i >= k - 1) {
            res.push(nums[temp[temp.length - 1]]);
        }
    }
    return res;
};

let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
console.log(maxSlidingWindow(nums, k));
