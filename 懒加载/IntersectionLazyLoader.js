export default class IntersectionLazyLoader {
     observer = null
     constructor(options) {
         this.init(options)
     }

     init({callback, once, ObserverOptions}) {
          if(!callback) {
              console.warn(
                  `initScrollLazyLoader have falsy onIntersectCb=${callback} `,
              );
              return;
          }

          if(!this.observer) {
               return
          }

          this.observer = new IntersectionObserver((entries)=>{
               // 遍历所有的观察元素
               entries.forEach(entry=>{
                    // 如果该元素进入了视口
                   if(entry.isIntersecting) {
                        const ele = entry.target
                        callback(ele)
                        if(once) {
                            this.removeTarget(ele)
                        }
                   }
               })
              }, ObserverOptions);

     }
     // 对懒加载目标调用observe(ele) 方法
     addTarget(ele) {
          if(this.observer) {
               this.observer.observe(ele)
          }
     }
      //移除懒加载观察的目标元素
     removeTarget(ele) {
          if(this.observer) {
               this.observer.unobserve(ele)
          }
     }
}