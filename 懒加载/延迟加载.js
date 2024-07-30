
this.lazyLoadObserver = {}
function listenViewPort(fn) {
    // 创建一个intersectionObserver的实例

    this.lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
              let lazyDom = entry.target
              if(entry.intersectionRatio>0) {
                  fn()
                  // 接触观察的木笔哦啊元素
                  observer.unobserve(lazyDom)
              }
        })
    })
    this.lazyLoadObserver.observe(this.$ref.domRef) // dom元素
}
