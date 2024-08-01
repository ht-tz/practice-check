// 问题:实现一个方法，能上传多张图片，保持单次n张上传，n张里如果有1张已经上传成功，然后就补上1张，就一直维持n张图片同时在上传。
const urls = ['']

const uploadImg = (url) => {
    return new Promise((resolve, reject) => {
        console.log(`url`)
        setTimeout(() => {
            resolve(url)
            console.log("上传完成")
        }, 3000 * Math.random())
    })
}

//并发五张

const wrapRequest = (imgList) => {
    // 请求状态标
    const rmap = {}
    imgList.forEach(el => {
        rmap[el] = false
    })

    let index = 0
    return new Promise((resolve, reject) => {
        const download = () => {
            // 退出
            if (index > imgList.length) {
                let keys = Object.keys(rmap)
                let flag = keys.every(el => rmap[el] === true)
                if (flag) {
                    // 全部上传成功 全部
                    resolve(rmap)
                }
                return
            }
            const turl = imgList[index]
            uploadImg(turl).then(res => {
                rmap[turl] = false
                setTimeout(download, 100)
            })
            index++
        }
        while (index < 5) {
            download()
        }
        // 大于5的话起始自动执行
    })
}
