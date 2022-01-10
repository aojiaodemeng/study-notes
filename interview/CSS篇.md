# 渐进增强和优雅降级

- 渐进增强：先以最低要求（低版本浏览器）构建网页，再针对高级浏览器进行向上增强
- 优雅降级：先以最高要求（高版本浏览器）构建网页，再针对低级浏览器进行向下兼容

# CSS 选择器

- important 权重最大
- 行内样式 1000
- id 选择器 100
- 类选择器、伪类（li:last-child）、属性选择器 10
- 标签选择器、伪元素选择器(li:after) 1
- 相邻兄弟选择、子选择器、后代选择器、通配符 0

# display 的属性值及其作用

- none：元素不显示并从文档流移除
- block：独占一行，多个元素会换行；可以设置宽高、padding、margin
- inline：不会独占一行；设置宽高无效，能设置水平方向的 margin 和 padding，但是不能设置垂直方向的 margin 和 padding
- inline-block：拥有 block 元素可设置的属性，但是不会占一行显示
- list-item：像 block 元素一样显示，并且添加了样式列表标记
- table：作为块级表格显示
- inherit：继承父元素

# 假设高度已知，请写出三栏布局，其中左栏、右栏宽度各为300px，中间自适应。
    方案：flex、grid、float、absolute、table
    注意如果是两列布局，可以用BFC方案。
# BFC与边距重叠
BFC相当于是一个容器，定义了里面的元素如何定位，并且与外界互不影响。BFC的作用：边距重叠问题、高度塌陷问题、创建自适应两栏布局
创建BFC的条件：
- overflow 值为：hidden、auto、scroll；不为visible
- display 值为：inline-block、table-cell、table-caption、flex等；
- 元素设置绝对定位：position (absolute、fixed)；
- 元素设置浮动：float 除 none 以外的值；
- body

边距重叠的解决方案：
- 兄弟之间重叠
  - 底部元素的position的值为absolute/fixed
  - 底部元素变为行内盒子：display: inline-block
  - 底部元素设置浮动：float
- 父子之间
  - 父元素加入：overflow: hidden
  - 子元素变为行内盒子：display: inline-block
  - 子元素加入浮动属性或定位


# CSS盒模型
- bpx-sizing:content-box; - 标准模型，宽高只是内容（content）的宽高
- box-sizing:border-box; - IE模型，宽高是内容(content)+填充(padding)+边框(border)的总宽高。

# JS如何设置获取盒模型对应的宽和高
- dom.style.width/height：只能取到dom元素内联样式所设置的宽高
- dom.currentStyle.width/height：获取的是在页面渲染完成后的结果，只有IE浏览器支持
- window.getComputedStyle(dom).width/height：也是获取的是在页面渲染完成后的结果，兼容性更好
- dom.getBoundingClientRect().width/height：元素在视窗中的绝对位置来获取宽高的
- dom.offsetWidth/offsetHeight：兼容性最好（offsetWidth包括元素宽度、内边距和边框，clientWidth不包括边框）


# 响应式布局
原理：通过媒体查询（@media）查询检测不同的设备屏幕尺寸做处理。 关于兼容： 页面头部必须有mate声明的viewport。

