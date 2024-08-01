function downLoadImage(src, imgName) {
    let image = new Image()
    image.src = src
    image.setAttribute('crossOrigin', 'Anonymous')
    image.onload = function () {
        let canvas = document.createElement("canvas")
        canvas.width = image.width
        canvas.height = image.height
        // 创建画布
        let ctx = canvas.getContext("2d")
        ctx.drawImage(image, 0, 0, image.width, image.height)
        let a = document.createElement("a")
        a.download = imgName || "默认图片名称"
        // 讲一个canvas对象转换成base64
        a.href = canvas.toDataURL("image/png")
         // 生成图片的base64
        a.click()
    }
}