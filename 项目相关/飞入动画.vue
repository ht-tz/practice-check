
<template>
<!-- 飞入动画 -->
    <div class="b-flyInto">
         <div :style="itemImg ? getStyle():''"  id="ball">
          <img  :src="itemImg" class="item-img" />
       </div>
    </div>
</template>
<script>
export default {
    name:'fly-into',
    data(){
        return {
            baldic:{},
            itemImg:''
        }
    },
    props: {
        // 图片大小
        imghight: {
            type: Number || String,
            default: 150
        },
        // 加入动画时长
        second:{
            type: Number,
            default: 2
        }
    },
    methods:{
        // 加入方法，子组件调用
        fly(event, slsctor, img) {
            this.itemImg = img;
            this.flyball(event, slsctor);
        },
        flyball(e, slsctor) {
            var aat = document.querySelector(slsctor);
            let domrect = aat.getBoundingClientRect();
            this.baldic = {
                sx:e.clientX, //出发点x坐标
                sy: e.clientY, //出发点y坐标
                tx: domrect.x, //目标元素x坐标
                ty: domrect.y,//目标元素y坐标
            };
           /* 同时设置两个动画 */
            //   :style=''中写@keyframes不能被识别到，styleSheets插入样式来解决该问题。
            let style = document.createElement('style');
            style.setAttribute('type', 'text/css');
            document.head.appendChild(style);
            let sheet = style.sheet;
             /* 向右运动 向上运动*/
            let ballClass = [`@keyframes toRight`+`{
  		    	0% {
                        left: ${this.baldic.sx}px;
                        transform: scale(0.9);
                    }
 		    	 100% {
                        left: ${this.baldic.tx}px;
                        transform: scale(0);
                    }}`, `@keyframes toTop`+`{
  		    	 0% {
                        top: ${this.baldic.sy}px;
                    }

                    100% {
                        top:${this.baldic.ty}px;
                    } }`]
                    // sheet.insertRule浏览器兼容问题 IE使用addRule
            sheet.insertRule(ballClass[0],0);
            sheet.insertRule(ballClass[1],1);
            // 使用贝塞尔曲线  --https://cubic-bezier.com/#.17,.67,.83,.67（调试网址）
            document.getElementById("ball").style.display='block'
            document.getElementById("ball").style.animation = `toRight ${this.second}s 0s 1  linear,toTop ${this.second}s 0s 1  cubic-bezier(0.15, 0.76, 0.25, 0.86)`;
            // 初始样式
            document.getElementById("ball").style.position = 'fixed'
            document.getElementById("ball").style.left =`${this.baldic.sx}px`
            document.getElementById("ball").style.top = `${this.baldic.sy}px `
            setTimeout(() =>{
                //加入数据结束后，清空定位及动画
                document.getElementById("ball").style.position = 'static'
                document.getElementById("ball").style.animation = '';
                document.getElementById("ball").style.display='none'
                this.$emit('endEvent')
                
            },this.second*1000)
        },
        // 图片样式
        getStyle(){
            return {
                width: this.imghight+ 'px',
                height: this.imghight+ 'px',
                'animation-fill-mode': 'forwards',
            }
        }
    }
    
}
</script>
<style lang="less" >
.ball {
    .item-img {
        width: 100%;
        height: 100%;    
        object-fit: cover;

    }
}
</style>