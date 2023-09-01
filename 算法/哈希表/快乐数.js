/**
 * 快乐数
 * 「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。
 *
 * 如果 n 是快乐数就返回 True ；不是，则返回 False 。
 * 输入：19
 * 输出：true
 * 解释：
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 *
 * #
 */
//计算一个快乐数的和
const getSum = (n) => {
    let sum = 0;
    while (n) {
        sum += (n % 10) ** 2
        n = Math.floor(n / 10) //向下取整
    }
    return sum
}

function isHappy(n) {
    let map = new Map()
    //若n出现过，证明已经陷入无限循环
    while (true) {
        if (map.has(n)) return false;
        if (n === 1) return true
        //保存起来
        map.set(n, 1)
        //计算完求下一个
        n = getSum(n)
    }
}