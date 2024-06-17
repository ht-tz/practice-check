export function longTask() {
    const handler = list => {
        if (observer) {
            observer.disconnect()
        }
        for (const entry of list.getEntries()) {
            console.log('Long task:', entry)
        }
    }

    const observer = new PerformanceObserver(handler);
    observer.observe({entryTypes: ['longtask'], buffered: true})
}