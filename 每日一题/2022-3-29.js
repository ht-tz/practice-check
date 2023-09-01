// 计算2022 的阶乘
{
    function factorial(n) {
        if(n === 1) return 1
        return  n*factorial(n-1)
    }

    console.log(factorial(2022))// 超出最大表示
}

{
    console.log(Math.pow(2,53)-1)
    //数字表示最大值
    console.log( Number.MAX_SAFE_INTEGER)
}


{
    /**
     * 解决办法
     *      主要思想： 利用数组存储每一位计算后的结果，每一轮只确定一位
     *      4!= 24
     */
}