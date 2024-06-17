{
    // 暴力解法
    function canCompleteCircuit(gas, cost) {
        for (let i = 0; i < gas.length; i++) {
            let rest = gas[i] - cost[i]
            let index = (i + 1) % gas.length
            while (rest > 0 && index !== i) {
                // 模拟器点走一圈，如果右rest等于0,答案就不唯一了
                rest += gas[index] - cost[index]
                index = (index + 1) % gas.length
            }
            //走一圈剩余油量大于等于0, 返回该起始位置
            if (rest >= 0 && index === i) return i
        }
        return -1
    }
}

{
    //贪心解法
    // 暴力解法
    function canCompleteCircuit(gas, cost) {
        let curSum = 0;
        let totalSum = 0
        let start = 0
        for (let i = 0; i < gas.length; i++) {
            curSum += gas[i] - cost[i]
            totalSum += gas[i] - cost[i]
            if (curSum < 0) {
                //选择新的起始位置
                start = i + 1
                //重新置为0
                curSum = 0
            }
        }
        if (totalSum < 0) {
            return -1
        }
        return start
    }
}