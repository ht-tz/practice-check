function moveZero(nums) {
    let len = nums.length
    if (len === 0) return 0
    let zero = 0
    // push一个减少遍历的长度
    for (let i = 0; i < len - zero; i++) {
        //等于0 结尾push 原地删除
        if (nums[i] === 0) {
            nums.push(0)
            //本身就有o(n)的复杂度
            nums.splice(i, 1)
            //删除一个零 就要回退一个位置， 否则下标数字就不对了
            i--
            zero++
        }
    }
    return nums
}


// 双指针
function moveZero(nums) {
    let len = nums.length
    if (len === 0) return 0
    let i  //i 指向 j后面的第一个非0
    let j = -1  //指向第一个0，未知的先谁设置为 -1
    for (i = 0; i < len; i++) {
        if (nums[i] === 0) {
            if (j < 0) {
                j = i // j一开始指向第一个0，后米纳不会执行这里了
            }
        }

        if (nums[i] !== 0 && j >= 0) {
            //j指向第一个0，i指向第一个非0，交换
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++ //交换后j后移一位
        }
    }

    return nums
}
let nums = [0, 1, 0, 3, 12]
console.log(moveZero(nums))