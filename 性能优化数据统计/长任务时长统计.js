let observer = new PerformanceObserver((list) => {
    //所有长任务
    let entries = list.getEntries()
    for (let entry of entries) {
        console.log(entry)
    }
})

observer.observe({ entryTypes: ['longtask'] })