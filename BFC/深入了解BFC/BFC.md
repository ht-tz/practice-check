1.在BFC中 box会在垂直方向上一个接着一排列
2.垂直方向的间距有margin决定的
3.在同一个BFC中，相邻的box之间margin会折叠
4.在BFC中，灭个元素的左边缘是紧紧挨着包含快的左边院的


解决啥问题呢
解决相邻的两个box之间的margin会折叠的问题

解决浮动高度塌陷的问题

关键点：
 浮动元素的父元素出发BFC,形成独立的块级格式化上下文
 浮动元素的父元素的高度是auto的