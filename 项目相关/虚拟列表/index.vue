<template>
    <div class="layout">
      <slot />
      <div class="vitural-view">
        <!-- <resize-observer @notify="handleResize" /> -->
      </div>
    </div>
  </template>
  
  <script>
  // 缩放自适应
  // import {ResizeObserver} from 'vue-resize'
  const min = Math.min;
  const max = Math.max;
  const round = Math.round;
  
  export default {
    name: "scale-layout",
    data() {
      return {
        currentScaleW: null,
        currentScaleH: null,
        currentWidth: null,
        currentHeight: null
      };
    },
    props: {
      /**
       * 组件初始宽度
       */
      width: {
        type: Number,
        require: true
      },
      /**
       * 组件初始高度
       */
      height: {
        type: Number,
        require: true
      },
      /**
       * 缩放类型 'width'：根据宽度比例缩放, 'height'：根据高度比例缩放, 'min'：根据宽高中最小的缩放, 'max'：根据宽高中最大的缩放, 'contain'：宽高分别不同比例缩放
       */
      scaleType: {
        type: String,
        validator(value) {
          return (
            ["width", "height", "min", "max", "contain"].indexOf(value) !== -1
          );
        }
      },
      /**
       * 导航栏高度（用于去除导航栏高度计算内容窗口高度）
       */
      barHeight: {
        type: Number,
        default: 0
      }
    },
    /*  components:{
          'resize-observer':ResizeObserver
      }, */
    methods: {
      handleResize() {
        const size = this.getWindowSize();
        const scaleW = size.width / this.width;
        const scaleH = size.height / this.height;
        let _scaleW = null;
        let _scaleH = null;
        switch (this.scaleType) {
          case "width":
            _scaleW = scaleW;
            _scaleH = scaleW;
            break;
          case "height":
            _scaleW = scaleH;
            _scaleH = scaleH;
            break;
          case "max":
            _scaleW = max(scaleW, scaleH);
            _scaleH = max(scaleW, scaleH);
            break;
          case "contain":
            _scaleW = scaleW;
            _scaleH = scaleH;
            break;
          case "min":
          default:
            _scaleW = min(scaleW, scaleH);
            _scaleH = min(scaleW, scaleH);
            break;
        }
  
        this.handleTranslate(_scaleW, _scaleH);
        if (_scaleW === this.currentScaleW && _scaleH === this.currentScaleH)
          return;
        /**
         * 缩放比例 （_scaleW _scaleH）
         */
        this.$emit("scaleReally", { _scaleW, _scaleH });
        this.scale(_scaleW, _scaleH);
        this.currentScaleW = _scaleW;
        this.currentScaleH = _scaleH;
        console.log("scale", scaleW);
      },
  
      handleTranslate(scaleW = 1, scaleH = 1) {
        const width = this.width * scaleW;
        const height = this.height * scaleH;
        const size = this.getWindowSize();
        const left = round(size.width - width) / 2;
        const top = round(size.height - height) / 2;
        this.$el.style.marginLeft = left + "px";
        this.$el.style.marginTop = top + "px";
      },
  
      /**
       * @method getWindowSize
       * @description 获取当前窗口大小
       */
      getWindowSize() {
        const clientRect = document.documentElement.getBoundingClientRect();
        return {
          width: clientRect.width,
          height: clientRect.height - this.barHeight
        };
      },
      getStyle(obj, property) {
        return window.getComputedStyle
          ? window.getComputedStyle(obj, null)[property]
          : obj.currentStyle[property];
      },
  
      scale(scaleW = 1, scaleH = 1) {
        this.$el.style.transform = `scale(${scaleW}, ${scaleH})`;
        /**
         * 缩放事件（宽高缩放比例中 较小的值）
         */
        this.$emit("scale", min(scaleW, scaleH));
      }
    },
    mounted() {
      const $el = this.$el;
      $el.style.width = this.width + "px";
      $el.style.height = this.height + "px";
      this.handleResize(); // 初始设置
  
      window.addEventListener("resize", this.handleResize, false);
    },
    watch: {
      barHeight() {
        this.handleResize();
      }
    },
    destroyed() {
      window.removeEventListener("resize", this.handleResize, false);
    }
  };
  </script>
  
  <style lang="less" scoped>
  .layout {
    transform-origin: 0 0;
    .vitural-view {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
  </style>
  