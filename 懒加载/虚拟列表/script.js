document.addEventListener('DOMContentLoaded', () => {
    const totalItems = 10000; // 假设有 10000 个项目
    const bufferSize = 20; // 视口上方和下方的缓冲区大小
    const itemHeight = 50; // 每个项目的高度
    const container = document.getElementById('list');

    // 创建一个占位元素，用于调整容器的滚动高度
    const spacer = document.createElement('div');
    spacer.style.height = `${totalItems * itemHeight}px`;
    container.appendChild(spacer);

    // 虚拟列表的可视区域
    let visibleItems = [];

    // IntersectionObserver 监听可见元素
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = parseInt(entry.target.dataset.index);
                renderVisibleItems(index);
            }
        });
    }, {
        root: container,
        rootMargin: `${bufferSize * itemHeight}px`,
        threshold: 0.1
    });

    // 渲染可视区域内的项目
    function renderVisibleItems(startIndex) {
        const fragment = document.createDocumentFragment();
        const endIndex = Math.min(totalItems, startIndex + Math.ceil(container.clientHeight / itemHeight) + bufferSize * 2);

        // 清除以前的项目
        visibleItems.forEach(item => {
            observer.unobserve(item);
            container.removeChild(item);
        });
        visibleItems = [];

        // 添加新的项目
        for (let i = startIndex; i < endIndex; i++) {
            const item = document.createElement('div');
            item.className = 'item';
            item.textContent = `Item ${i + 1}`;
            item.style.top = `${i * itemHeight}px`;
            item.style.position = 'absolute';
            item.dataset.index = i;
            fragment.appendChild(item);
            observer.observe(item);
            visibleItems.push(item);
        }

        container.appendChild(fragment);
    }

    // 初始化渲染
    renderVisibleItems(0);

    // 监听滚动事件
    container.addEventListener('scroll', () => {
        const firstVisibleIndex = Math.floor(container.scrollTop / itemHeight);
        renderVisibleItems(firstVisibleIndex);
    });
});
