var lemonadeChange = function (bills) {
    let five = 0;
    let ten = 0;
    let twenty = 0;
    for (let bill of bills) {
        if (bill == 5) {
            five++;
        }
        if (bill == 10) {
            if (five <= 0) return false;
            five--;
            ten++;
        }
        if (bill === 20) {
            if (ten > 0 && five > 0) {
                ten--;
                five--;
                twenty++;
            } else if (five > 2) {
                five -= 3;
                twenty++;
            } else {
                return false;
            }
        }
    }
    return true;
};
