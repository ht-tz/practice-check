<template>
    <div
      ref="container"
      class="common-view-container common-view-card-container"
      :style="containerStyle"
    >
      <div class="card-slot">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardContainer",
    components: {},
    props: {
      /**
       * 容器固定宽度（不传默认100%）
       */
      width: {
        type: Number,
        default: 0
      },
      /**
       * 容器固定高度（不传高度无限延伸，无容器内部纵向滚动）
       */
      height: {
        type: Number,
        default: 0
      },
      /**
       * 模式：缩放卡片大小或卡片边距两种（选填，默认缩放卡片宽度）
       */
      type: {
        type: String,
        default: "card"
      },
      /**
       * 行数（选填，默认计算）
       */
      rowCount: {
        type: Number,
        default: 3
      },
      /**
       * 列数（选填，默认计算）
       */
      columnCount: {
        type: Number,
        default: 0
      },
      /**
       * 行间距
       */
      rowGap: {
        type: Number,
        default: 16
      },
      /**
       * 列间距
       */
      columnGap: {
        type: Number,
        default: 16
      },
      /**
       * 容器水平边距
       */
      horizontalPadding: {
        type: Number,
        default: 12
      },
      /**
       * 容器垂直边距
       */
      verticalPadding: {
        type: Number,
        default: 12
      },
      /**
       * 卡片最小宽度（px）
       */
      cardMinWidth: {
        type: Number,
        required: true
      },
      /**
       * 卡片最小高度（px）
       */
      cardMinHeight: {
        type: Number,
        required: true
      },
      /**
       * 卡片是否进行等比缩放（仅卡片自适应模式下生效）
       */
      proportion: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      containerStyle() {
        return {
          ["padding"]: `${this.verticalPadding}px ${this.horizontalPadding}px`,
          ["width"]: this.width ? `${this.width}px` : "100%",
          ["height"]: this.height ? `${this.height}px` : ""
        };
      },
      scale() {
        return;
      }
    },
    data() {
      return {
        // 容器宽度
        containerWidth: 0,
        // 列数
        // columns: this.columnCount,
        // 行数
        rows: this.rowCount,
        // 列间距
        colsGap: this.columnGap,
        // 行间距
        rowsGap: this.rowGap,
        // 一行最大放置卡片数
        maxNum: 0,
        // 是否是第一次加载（用于控制）
        isMounted: false
      };
    },
    mounted() {
      console.log(document.getElementsByClassName("card-slot"), 4242);
      let _this = this;
      function reCompute(e) {
        e = e || event;
        _this.init();
      }
      document
        .getElementsByClassName("card-slot")[0]
        .addEventListener("DOMNodeInserted", _this.debounce(reCompute, 20));
      _this.init();
      window.addEventListener("resize", _this.init, false);
    },
    destroyed() {
      window.removeEventListener("resize", this.init);
    },
    methods: {
      /**
       * 容器行列初始化
       */
      init() {
        // setTimeout(() => {
        // 动态获取容器宽度
        this.containerWidth =
          this.$refs.container.offsetWidth - 4 - this.horizontalPadding * 2; // 4为滚动条宽度
        let doms = Array.prototype.slice.call(
          document.querySelectorAll(".common-view-common-card")
        );
        if (this.type === "gap") {
          this.maxNum =
            // this.columnCount ||
            Math.floor(this.containerWidth / this.cardMinWidth);
          this.colsGap =
            (this.containerWidth - this.maxNum * this.cardMinWidth) /
            (this.maxNum - 1);
          doms.map(item => {
            item.style.width = `${this.cardMinWidth}px`;
            item.style.marginBottom = `${this.rowGap}px`;
            item.style.marginRight = `${this.colsGap}px`;
          });
        } else {
          // this.cardMinWidth * this.maxNum + this.colsGap * (this.maxNum - 1) = this.containerWidth
          this.maxNum =
            // this.columnCount ||
            Math.floor(
              (this.containerWidth + this.colsGap) /
                (this.cardMinWidth + this.colsGap)
            );
          let percent = `${(100 / this.maxNum).toFixed(2)}%`;
  
          if (this.maxNum > 1) {
            // 一行可容下总数据量大于1
            doms.map(item => {
              // item.style.flex = `0 0 ${percent}`;
              item.style.marginBottom = `${this.rowGap}px`;
              item.style.marginRight = `${this.columnGap}px`;
              let oldWidth;
              let oldHeight;
              // 开启等比缩放自动计算高度
              if (this.proportion) {
                oldWidth = item.style.width.split("px")[0];
                oldHeight = item.style.height.split("px")[0];
              }
  
              let newWidth =
                (this.containerWidth - (this.maxNum - 1) * this.columnGap) /
                this.maxNum;
  
              item.style.width = `${newWidth}px`;
              if (this.proportion) {
                let newHeight = oldHeight * (newWidth / oldWidth);
                item.style.height = `${newHeight}px`;
              }
            });
          } else {
            //  一行可容下一条，宽度占满
            doms.forEach(item => {
              let oldWidth = item.style.width.split("px")[0];
              let oldHeight = item.style.height.split("px")[0];
              item.style.width = `${this.containerWidth}px`;
              if (this.proportion) {
                item.style.height = `${oldHeight *
                  (this.containerWidth / oldWidth)}px`;
              }
              item.style.marginBottom = `${this.rowGap}px`;
            });
          }
        }
        let rightDoms = document.querySelectorAll(
          `.common-view-common-card:nth-child(${this.maxNum}n+${this.maxNum})`
        );
        // 去除最右边一列的右边距
        rightDoms.forEach(item => {
          item.style.marginRight = 0;
        });
        // 最后一行marginBottom去除
        let restNum = doms.length % this.maxNum || this.maxNum; // 一行个数不占满
        for (let i = 1; i <= restNum; i++) {
          let dom = document.querySelectorAll(
            `.common-view-common-card:nth-last-child(${i})`
          )[0];
          dom.style.marginBottom = "0";
        }
        // 初次加载通知父组件获取数据
        if (!this.isMounted) {
          /**
           * 计算完成通知父组件请求数据（返回Number类型pageSize）
           */
          this.$emit("on-success", this.rows * this.maxNum);
          this.isMounted = true;
        }
  
        // }, 20);
      },
      /**
       * 防抖
       */
      debounce(fn, wait) {
        var timeout = null;
        return function() {
          if (timeout !== null) clearTimeout(timeout);
          timeout = setTimeout(fn, wait);
        };
      },
      /**
       * 获取分页信息
       */
      getPageInfo() {
        let pageSize = this.rows * this.maxNum;
        // return {
        //   row: this.rows,
        //   column: this.maxNum,
        //   pageSize
        // };
        return pageSize;
      }
    }
  };
  </script>
  <style lang="less" scoped>
  .common-view-card-container {
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-between;
    overflow-y: auto;
    box-sizing: border-box;
    .card-slot {
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
      // overflow-y: auto;
      // box-sizing: border-box;
    }
    &::-webkit-scrollbar {
      width: 4px;
    }
  
    &::-webkit-scrollbar-track {
      border-radius: 4px;
      background-color: transparent;
    }
  
    &::-webkit-scrollbar-corner {
      background: transparent;
    }
  
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: var(--font-s-a-20);
    }
  
    &::-webkit-scrollbar-thumb:hover {
      background-color: var(--font-s-a-30);
    }
  }
  </style>