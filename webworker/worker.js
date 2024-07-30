self.onmessage = function (event) {
    if (event.data === 'start') {
        let count = 0
        for (let i = 0; i < 10; i++) {
            count += i
            console.log(i)
        }
        self.postMessage(count)
    }
}
