<template></template>

<script>
export default {
  data() {
    return {
      // 水印距离图片的边距
      imgPadding: 20,
      // 图片url
      url: '',
      // 水印文案列表
      textList: [],
      // 单个水印模式下，水印的位置
      position: '',
      // 水印颜色
      color: '#ccc',
      // 水印字体大小
      fontSize: 12,
      // 水印字体
      fontFamily: '"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif',
      // 水印透明度
      alpha: 0.5,
      // 水印倾斜角度
      angle: 30,
      // 水印行间距
      lineSpace: 12,
      // X方向水印间距
      marginX: 100,
      // Y方向水印间距
      marginY: 100,
      // 水印字体样式
      fontStyle: 'normal',
      base64Data: ''
    }
  },
  computed: {
    // 水印字体大小取值范围12~infinite
    myFontSize() {
      if (!isNaN(parseFloat(this.fontSize)) && isFinite(this.fontSize)) {
        if (parseFloat(this.fontSize) <= 12) {
          return 12
        } else {
          return parseFloat(this.fontSize)
        }
      }
      return 12
    },
    // 水印透明度取值范围0~infinite
    myAlpha() {
      if (!isNaN(parseFloat(this.alpha)) && isFinite(this.alpha)) {
        if (parseFloat(this.alpha) <= 0) {
          return 0.5
        } else if (parseFloat(this.alpha) > 1) {
          return 1
        } else {
          return parseFloat(this.alpha)
        }
      }
      return 0.5
    },
    // 默认30度角
    myAngle() {
      if (!isNaN(parseFloat(this.angle)) && isFinite(this.angle)) {
        return parseFloat(this.angle)
      }
      return 30
    },
    // 水印行间距取值范围0~infinite
    myLineSpace() {
      if (!isNaN(parseFloat(this.lineSpace)) && isFinite(this.lineSpace)) {
        if (parseFloat(this.lineSpace) <= 0) {
          return 0
        } else {
          return parseFloat(this.lineSpace)
        }
      }
      return this.myFontSize
    },
    // 水印X方向的间距取值范围0~infinite
    myMarginX() {
      if (!isNaN(parseFloat(this.marginX)) && isFinite(this.marginX)) {
        if (parseFloat(this.marginX) <= 0) {
          return 0
        } else {
          return parseFloat(this.marginX)
        }
      }
      return 100
    },
    // 水印Y方向的间距取值范围0~infinite
    myMarginY() {
      if (!isNaN(parseFloat(this.marginY)) && isFinite(this.marginY)) {
        if (parseFloat(this.marginY) <= 0) {
          return 0
        } else {
          return parseFloat(this.marginY)
        }
      }
      return 100
    }
  },
  methods: {
    /**
     * 设置水印旋转角度
     * @method setRotate
     * @param {Object} ctx 画笔
     * @param {Number} originX 画布原点X坐标
     * @param {Number} originY 画布原点Y坐标
     * **/
    setRotate(ctx, originX, originY) {
      ctx.translate(originX, originY)
      ctx.rotate(-this.myAngle * Math.PI / 180)
      ctx.translate(-originX, -originY)
    },
    /**
     * 渲染单个水印
     * @method renderWatermarkSingle
     * @param {Object} ctx 画笔
     * @param {Number} canvasWidth 画布宽度
     * @param {Number} canvasHeight 画布高度
     * @param {String} position 水印位置相对于图片位置 leftTop：左上，leftBottom：左下，rightTop：右上，rightBottom：右下，center：中心
     * **/
    renderWatermarkSingle(ctx, canvasWidth, canvasHeight, position) {
      // 获取水印宽度。多行文字组合成一个水印，找出文字最大长度
      let arr = []
      this.textList.forEach(text => {
        arr.push(ctx.measureText(text).width)
      })
      let width = Math.max.apply(null, arr)

      // 获取水印高度
      let height = arr.length * this.myFontSize + (arr.length - 1) * this.myLineSpace

      // 设置画布原点
      let originX = 0
      let originY = 0

      // 渲染水印
      switch (position) {
        case 'leftTop':
          // 设置画笔以每个水印的中心点进行旋转
          if (this.myAngle) {
            originX = this.imgPadding + width / 2
            originY = this.imgPadding + height / 2
            this.setRotate(ctx, originX, originY)
          }

          // 渲染水印的每一行文字
          this.textList.forEach((text, index) => {
            let y = this.imgPadding + index * this.myFontSize + index * this.myLineSpace
            ctx.fillText(text, originX, y)
          })
          break
        case 'leftBottom':
          // 设置画笔以每个水印的中心点进行旋转
          if (this.myAngle) {
            originX = this.imgPadding + width / 2
            originY = canvasHeight - this.imgPadding - height / 2
            this.setRotate(ctx, originX, originY)
          }

          // 渲染水印的每一行文字
          this.textList.forEach((text, index) => {
            let y = canvasHeight - this.imgPadding - height + index * this.myFontSize + index * this.myLineSpace
            ctx.fillText(text, originX, y)
          })
          break
        case 'rightTop':
          // 设置画笔以每个水印的中心点进行旋转
          if (this.myAngle) {
            originX = canvasWidth - this.imgPadding - width / 2
            originY = this.imgPadding + height / 2
            this.setRotate(ctx, originX, originY)
          }

          // 渲染水印的每一行文字
          this.textList.forEach((text, index) => {
            let y = this.imgPadding + index * this.myFontSize + index * this.myLineSpace
            ctx.fillText(text, originX, y)
          })
          break
        case 'rightBottom':
          // 设置画笔以每个水印的中心点进行旋转
          if (this.myAngle) {
            originX = canvasWidth - this.imgPadding - width / 2
            originY = canvasHeight - this.imgPadding - height / 2
            this.setRotate(ctx, originX, originY)
          }
          // 渲染水印的每一行文字
          this.textList.forEach((text, index) => {
            let y = canvasHeight - this.imgPadding - height + index * this.myFontSize + index * this.myLineSpace
            console.log(y)
            ctx.fillText(text, originX, y)
          })
          break
        case 'center':
          // 设置画笔以每个水印的中心点进行旋转
          if (this.myAngle) {
            originX = canvasWidth / 2
            originY = canvasHeight / 2
            this.setRotate(ctx, originX, originY)
          }

          // 渲染水印的每一行文字
          this.textList.forEach((text, index) => {
            let y = canvasHeight / 2 - height / 2 + index * this.myFontSize + index * this.myLineSpace
            ctx.fillText(text, originX, y)
          })
          break
      }
    },
    /**
     * 渲染多个水印
     * @method renderWatermarkMultiple
     * @param {Object} ctx 画笔
     * @param {Number} canvasWidth 画布宽度
     * @param {Number} canvasHeight 画布高度
     * **/
    renderWatermarkMultiple(ctx, canvasWidth, canvasHeight) {
      // 获取水印宽度。多行文字组合成一个水印，找出文字最大长度
      let arr = []
      this.textList.forEach(text => {
        arr.push(ctx.measureText(text).width)
      })
      let width = Math.max.apply(null, arr)

      // 获取水印高度
      let height = arr.length * this.myFontSize + (arr.length - 1) * this.myLineSpace

      // 设置水印行数
      let rows = Math.ceil((canvasHeight - 2 * this.imgPadding + this.myMarginY) / (height + this.myMarginY))

      // 设置水印列数
      let columns = Math.ceil((canvasWidth - 2 * this.imgPadding + this.myMarginX) / (width + this.myMarginX))

      // 设置画布原点
      let originX = 0
      let originY = 0

      // 遍历渲染水印
      for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
          // 保存画笔
          ctx.save()

          // 设置画笔以每个水印的中心点进行旋转
          if (this.myAngle) {
            originX = this.imgPadding + (j - 1) * (width + this.myMarginX) + width / 2
            originY = this.imgPadding + (i - 1) * (height + this.myMarginY) + height / 2
            this.setRotate(ctx, originX, originY)
          }

          // 渲染水印的每一行文字
          this.textList.forEach((text, index) => {
            let y = this.imgPadding + (i - 1) * height + (i - 1) * this.myMarginY + index * this.myFontSize + index * this.myLineSpace
            ctx.fillText(text, originX, y)
          })

          // 重置画笔
          ctx.restore()
        }
      }
    },
    init(options = {}) {
      return new Promise(resolve => {
        // 方法调用时传入的参数
        Object.keys(this.$data).forEach(key => {
          if (options[key]) {
            this[key] = options[key]
          }
        })

        // 没有水印内容，直接返回
        if (this.textList.length === 0) {
          return false
        }

        // 创建图片对象
        let img = new Image()
        img.setAttribute('crossOrigin', 'anonymous')
        img.src = this.url
        // 创建canvas对象
        let canvas = document.createElement('canvas');
        // let canvas = document.getElementById('myCanvas');

        // 设置画布尺寸
        canvas.width = img.width
        canvas.height = img.height

        // 画笔
        let ctx = canvas.getContext('2d');

        // 在canvas绘制前填充白色背景,防止有透明通道的图片转换成base64后，透明通道变为黑色
        // ctx.fillStyle = '#fff';
        // ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 在画布原点位置绘制图片
        ctx.drawImage(img, 0, 0)

        // 设置笔触样式
        ctx.fillStyle = this.color // 水印颜色
        ctx.font = `${this.fontStyle} ${this.myFontSize}px ${this.fontFamily}` // 水印字体属性
        ctx.globalAlpha = this.myAlpha // 水印透明度
        ctx.textAlign = 'center' // 居中显示

        // 只加一个水印
        if (this.position === 'leftTop' || this.position === 'leftBottom' || this.position === 'rightTop' || this.position === 'rightBottom' || this.position === 'center') {
          this.renderWatermarkSingle(ctx, canvas.width, canvas.height, this.position)
        } else { // 加多个水印
          this.renderWatermarkMultiple(ctx, canvas.width, canvas.height)
        }

        // 输出水印图
        this.base64Data = canvas.toDataURL('image/png', 1)
        resolve(this.base64Data)

      })
    }
  }
