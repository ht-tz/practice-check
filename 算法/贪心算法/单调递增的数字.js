var monotoneIncreasingDigits = function (n) {
    n = n.toString()
    n = n.split('').map(item => +item)
    let flag = Infinity

    //i > 0 防止出现的负数
    for (let i = n.length - 1; i > 0; i--) {
        // 倒序遍历， 正序 前一个大于后一个  不符合要求，需要处理
        if (n[i - 1] > n[i]) {
            // 前面减去1， 后面一位改成9
            //更新i的位置，i后面的包括i都个i改成 9
            flag = i
            n[i - 1] = n[i - 1] - 1
            n[i] = 9
        }
    }
    for (let i = flag; i < n.length; i++) {
        //将i后面所有的值都改为9
        n[i] = 9
    }
    return n.join('')
    return +n
}

