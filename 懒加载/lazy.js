{//图片懒加载
    let imgList = [...document.querySelectorAll("img")];
    let len = imgList.length;

    const imgLazyLoad = (function () {
        //记录图片加载到的位置
        let count = 0;
        return function () {
            let deleteIndexList = [];
            imgList.forEach((img, index) => {
                //图片顶部距离
                let rect = img.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    img.src = img.dataset.src;
                    deleteIndexList.push(index);
                    count++;
                    if (count === len) {
                        document.removeEventListener("scroll", imgLazyLoad);
                    }
                }
            });
            imgList = imgList.filter((img, index) => !deleteIndexList.includes(index));
        };
    })();
}
// 这里最好加上防抖处理
// document.addEventListener("scroll", imgLazyLoad);


{
    //图片懒加载
    let imgList = [...document.querySelectorAll("img")];
    let len = imgList.length;

    const callback = entries => {
        //看见了出发，看不见了触发
        entries.forEach(entry => {
            // console.log(entry);
            if (entry.isIntersecting) {
                const image = entry.target.src;
                //获取图片的自定义节点
                let data = image.getAttribute('data-src');
                image.setAttribute('src', data);
                console.log('触发属性');
                // 加载完之后解除观察
                observer.unobserve(image)
            }
        })
    }

    // 实例化
    // 默认为 0 整个元素都算可见    0与根节点元素右1的交叉，元素也会贝视为可见。 1 表示整个元素在，在窗口才能被视为可见
    const observer = new IntersectionObserver(callback, {threshold: [0.5, 1]});
    imgList.forEach(image => {
        //观察每一张需要加载的图片
        observer.observe(image);
    })
}


/**
 * IntersectionObserver接口(从属于Intersection Observer API)
 * 开发者提供了一种可以异步监听目标元素与其祖先或视窗(viewport)交叉状态的手段。
 * 祖先元素与视窗(viewport)被称为根(root)。
 */

/*
IntersectionObserverEntry提供观察元素的信息，有七个属性。
 boundingClientRect 目标元素的矩形信息
 intersectionRatio 相交区域和目标元素的比例值 intersectionRect/boundingClientRect 不可见时小于等于0
 intersectionRect 目标元素和视窗（根）相交的矩形信息 可以称为相交区域
 isIntersecting 目标元素当前是否可见 Boolean值 可见为true
 rootBounds 根元素的矩形信息，没有指定根元素就是当前视窗的矩形信息
 target 观察的目标元素
 time 返回一个记录从IntersectionObserver的时间到交叉被触发的时间的时间戳
 */
