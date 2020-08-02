1、隐藏元素的方法？
display:none; 元素被隐藏，并且不占位置。它会导致浏览器的重排和重绘
visibility:hidden; 元素被隐藏，但是还占位置。只会导致浏览器重绘而不会重排。
transform:scale(0); 让元素的大小设置成0不就看不见了哈。 占据空间，无法点击
opacity:0;  元素还在，只是看不见而已。 元素隐藏后依旧占据着空间
.hide{
    position:absolute;
    z-index:-1000;/* 不占据空间，无法点击 */
}
2、水平居中：
  行内元素：text-align:center
  块级元素：margin:0 auto
           position:absolute+left:50%+transform:translateX(-50%)
           display:flex+justify-content:center
垂直居中：
  设置line-height等于height
  position:absolute+top:50%+transform:translateY(-50%)
  display:flex+align-items:center
  display:table+display:table-cell+vertical-align:middle
3、1rem、1em、1vh、1px各自代表的含义？
  1rem：是全部的长度都相对于根元素<html>元素。通常做法是给html元素设置一个字体大小，然后其他元素的长度单位rem
  1em：子元素字体大小的em是相对于父元素字体大小； 
       元素的width/height/padding/margin用em的话是相对于该元素的font-size
  vw/vh(Viewport Width/Viewport Height):视窗的宽度和高度，相当于屏幕宽度和高度的1%，不过，处理宽度的时候%单位更合适，处理高度的话vh单位更好
  px:像素(Pixel)。相对长度单位。px是相对于显示器屏幕分辨率而言。
4、画一条0.5px直线？
  height:1px; transform:scale(0.5);
5、清除浮动的几种方式，以及原理？（清除浮动简单，但这个问题要引出BFC）
  ::after / <br> /clear:both
  创建父级BFC(overflow：hidden)
  父级设置高度
  备注：BFC（块级格式化上下文），是一个独立的渲染区域，让处于BFC内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。

  触发条件：根元素
           position: absolute/fixed
           display: inline-block/table
           float元素
           overflow !== visible
  
