/**
 *  防抖是将多次变为一次最后一次执行，节流是多次变为每个一段时间执行一次
 *
 */




const throttle =  (fn,wait =  50)=> {
    let pre = +new Date()
    return function (...args) {
         if (+new Date() - pre>wait) {
             pre = +new Date()
             fn.apply(this, args)
         }
    }
}

function throttle(fn, wait) {
     let pre = +new Date()

    return function (...args) {
          if(+new Date() - pre > wait ) {
              pre = +new  Date()
              fn.apply(this, args)
          }
    }
}