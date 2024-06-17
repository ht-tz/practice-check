// 首先明白一点， 5是万能的
// 账单是5直接收下
// 账单是10 消耗一个5，添加一个10，
// 账单是20 消耗一个10 在消耗一个5 添加一个20

function lemonadeChange(bills) {
    let five = 0;
    let ten = 0
    let twenty = 0;

    for (let i = 0; i < bills.length; i++) {
        let cur = bills[i]
        // 5
        if (cur === 5) {
            five++
        }
        //10
        if (cur === 10) {
            if (five <= 0) {
                return false
            } else {
                ten++
                five--
            }
        }
        // 20
        if (cur === 20) {
            //分为两种情况，一种是 10 5
            if (ten > 0 && five > 0) {
                ten--
                five--
                // 记录二十是么有意义的， 可以删除，方便理解
                twenty++
            } else if (five >= 3) {
                // 一种是3消耗3个5
                five -= 3
                // 可以删除，方便理解
                twenty --
            } else {
                return false
            }
        }
    }
    return true
}