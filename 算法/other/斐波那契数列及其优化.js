//1.递归实现斐波那契数列
{
   function fibonacci(n){
     if(n<1) throw new Error('参数输入有误')
     if(n===1 || n===2) return 1

     return fibonacci(n-1)+ fibonacci(n - 2)
   }
}


{
    //优化
    function fibonacci(n) {
        let res = 1
        if (n === 1 || n===2) {
            return  res
        }

        n  = n - 2
        let pre = 1
        let cur = 1
        while(n) {
            res = pre + cur
            pre = cur
            cur = res
            n--;
        }
        return res
    }

    let sum  = fibonacci(10)
    console.log(sum)
}