/**
 * 函数节流：不管时间触发频率多高，只在单位单位时间内执行
 */
{
    //时间戳实现
    function throttle(event, time) {
        let pre = 0;
        return function (...args) {
            if (Date.now() - pre > time) {
                pre = Date.now()
                event.apply(this, args)
            }
        }
    }
}
{

}