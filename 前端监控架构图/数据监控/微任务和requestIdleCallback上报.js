function reportData(data) {
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            fetch('/report', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        });
    } else {
        // Fallback to microtask if requestIdleCallback is not supported
        Promise.resolve().then(() => {
            fetch('/report', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        });
    }
}

// 不是所有的浏览器都支持requestIdleCallback，所以需要提供一个回退方案，比如使用微任务。