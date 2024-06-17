/**
 * 不管事件触发鬓绿多高，一定在事件触发n秒后才执行，如果你在n秒内在触发这个事件，n秒后在有触发了这个事件，就以新的事件的时间为准。总之触发n秒捏不再触发
 * 触发n秒内不再触发，从这次开始计数，到了n秒之后在触发
 */

{//一段时间，无论出发多少次，只执行一次  防抖的要义
// 如果存在定时器，第一时间清除定时器
function debounce(fn,wait) {
    let timer = null;
    return function (args) {
        if(timer) clearTimeout(timer)
         timer = setTimeout(()=>{
             fn.call(this,args)
         },wait)
    }
}

let fn  = function (a) {
    console.log(a);
}
const bb = debounce(fn,1000)

console.time();
bb('防抖执行了')
bb('防抖执行了')
bb('防抖执行了')
console.timeEnd()}

{
    //立即执行函数
    5   
    
    function debounce1(fn, wait, immediate) {
        let timer = null;
        return function (args) {
            if(timer) clearTimeout(timer);
            // immediate  true 就直接执行
            if (immediate && !timer) {
                fn.apply(this,args)
            }
            timer = setTimeout(() => {
                fn.apply(this, args)
            }, wait);
        }
    }
}