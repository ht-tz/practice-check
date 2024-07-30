document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    if (IntersectionObserver in window) {
        const callback = (entries, observer) => {
            for (let entry of entries) {
                if (entry.isIntersecting) {
                    let image = entry.target
                    image.src = image.dataset.src
                    image.removeAttribute("data-src")
                    observer.unobserve(image)
                }
            }
        }
        const io = new IntersectionObserver(callback)
        images.forEach(el => {
            io.observe(el)
        })
    } else {
        // 不支持IntersectionObserver的浏览器
        let timer

        function lazyLoad() {
            if (timer) {
                clearTimeout(timer)
            }

            timer = setTimeout(() => {
                let scrollTop = window.scroll;
                images.forEach(img => {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src
                        img.removeAttribute("data-src")
                        img.onload = () => {
                            console.log(77)
                        }
                    }
                })
            })

            if (images.length === 0) {
                document.removeEventListener('onscroll', lazyLoad)
                document.removeEventListener("resize", lazyLoad)

                document.removeEventListener("orientationchange", lazyLoad)
            }
        }
        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        //移动端非常有用的事件， 他在设备发生变化的时候触发
        window.addEventListener("orientationchange", lazyLoad);
    }
})