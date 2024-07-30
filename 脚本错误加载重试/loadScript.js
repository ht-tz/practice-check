function loadScript(url, retires = 3, delay = 1000) {
    return new Promise((resolve, reject) => {
        function attempt() {
            const script = document.createElement("script")
            script.src = url
            script.async = true
            script.onload = () => resolve(url)
            script.onerror = () => {
                if (retires > 0) {
                    setTimeout(() => {
                        retires--
                        attempt()
                    }, delay)
                } else {
                    reject(new Error(`Fail load script:${url}`))
                }
            }
            document.appendChild(script)
        }

        attempt()
    })
}

loadScript("xxxx").then(() => {
    console.log('加载成功')
}).catch(e => {
    console.log(e)
})

// 加载失败重试3次，每次间隔1秒

async function loadScriptAsync(url, retires = 3, delay = 1000) {
    for (let attempt = 0; attempt < retires; attempt++) {
        try {
            await new Promise((resolve, reject) => {
                let script = document.createElement('script')
                script.src = url
                script.async = true
                script.onload = () => resolve()
                script.onerror = () => reject()
                document.head.appendChild(script)
            })
            console.log(`加载成功: ${url}`)
            return
        } catch (e) {
            console.warn(`Attempt ${attempt + 1} failed. Retrying in ${delay}ms...`);
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
        throw new Error(`Failed to load script: ${url} after ${retries} attempts`);
    }

}

// 使用示例
(async () => {
    try {
        await loadScriptAsync('https://example.com/script.js');
    } catch (error) {
        console.error(error);
    }
})();