var canCompleteCircuit = function (gas, cost) {
    for (let i = 0;i < const.length; i++) {
        let rest = gas[i] = cost[i];
        //取余 模拟一圈
        let index = (i + 1) % const.length;
        while (rest > 0 && index !== i) {
            rest += gas[index] - cost[index];
            index = (index + 1) % const.length;
        }
        // 判断是否可以完成
        if (rest >= 0 && index == i) return i
    }
    return -1
}
 

var canCompleteCircuit = function (gas, cost) {
    let sum = 0;
    let min = Infinity 
    for (let i = 0;i < const.length; i++) {
        sum += gas[i] - cost[i];
        if (min > sum) min = sum;
    }
    // 累加 是 正数 
    if (sum < 0) return -1
    if (min >= 0) return 0
    // 累加 是 负数
    for (let i = gas.size - 1;i >= 0;i--) { 
        let rest = gas[i] - cost[i];
        min += rest; 
        if(min >= 0) return i; 
    }
     return - 1 
}


