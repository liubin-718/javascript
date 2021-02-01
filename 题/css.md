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
6、HTML行内元素、块状元素、行内块状元素的区别
HTML可以将元素分类方式分为行内元素、块状元素和行内块状元素三种。首先需要说明的是，这三者是可以互相转换的，使用display属性能够将三者任意转换：

　　(1)display:inline;转换为行内元素

　　(2)display:block;转换为块状元素

　　(3)display:inline-block;转换为行内块状元素
  1.行内元素
　　行内元素最常使用的就是span，其他的只在特定功能下使用，修饰字体<b>和<i>标签，还有<sub>和<sup>这两个标签可以直接做出平方的效果，而不需要类似移动属性的帮助，很实用。

　　行内元素特征：(1)设置宽高无效
　　　　　　　　　(2)对margin仅设置左右方向有效，上下无效；padding设置上下左右都有效，即会撑大空间
　　　　　　　　　(3)不会自动进行换行
2.块状元素
　　块状元素代表性的就是div，其他如p、nav、aside、header、footer、section、article、ul-li、address等等，都可以用div来实现。不过为了可以方便程序员解读代码，一般都会使用特定的语义化标签，使得代码可读性强，且便于查错。

　　块状元素特征：(1)能够识别宽高
　　　　　　　　　(2)margin和padding的上下左右均对其有效
　　　　　　　　　(3)可以自动换行
　　　　　　　　　(4)多个块状元素标签写在一起，默认排列方式为从上至下
3.行内块状元素
　　行内块状元素综合了行内元素和块状元素的特性，但是各有取舍。因此行内块状元素在日常的使用中，由于其特性，使用的次数也比较多。

　　行内块状元素特征：(1)不自动换行
　　　　　　　　　　　(2)能够识别宽高
　　　　　　　　　　　(3)默认排列方式为从左到右

7、BFC  https://juejin.cn/post/6844904117056323597
8、postcss  https://juejin.cn/post/6844903504293658632
9、实现一个左右布局，左边200px，右边自适应
  vh: 视野高度百分比
  vw: 视野宽度百分比
  <div class="wrap">
      <div class="itemL">左边</div>
      <div class="itemR">右边</div>
  </div>
  方案一： flex方案
  .wrap{
      display: flex;
      height: 20vh;  /*或者设置一个固定高度 eg：500px*/
  }
  .itemL{
      width: 200px;
      height: 100%;
      background: skyblue;
      /* flex: 0 0 auto; 或flex: none */
  }
  .itemR{
      flex: 1;/* 或flex:1 1 auto; */
      background-color: salmon;
      height: 100%;
  }
  方案二：使用float+BFC
  .wrap{
      overflow: auto;
      height: 300px;
  }
  .itemL{
      width: 200px;
      float: left;
      height: 100%;
      background: skyblue;
  }
  .itemR{
      overflow: auto;
      height: 100%;
      background-color: salmon;
  }
  方案三： table
  .wrap{
      width: 100%;
      display: table;
      height: 50vh;
  }
  .itemL{
      width: 200px;
      background: skyblue;
      display: table-cell;
  }
  .itemR{
      display: table-cell;
      background-color: salmon;
  }
  10、实现一个左右固定中间自适应布局
  <style type="text/css">
			#box{
				width:100%;
				height:100px;
				display:flex;
				margin:10px;
			}
			#left,#right{
				width:200px;
				height:100px;
				margin:10px;
				background-color:#999;
			}
			#center{
				flex:1;
				height:100px;
				margin:10px;/*左右margin不会叠加*/
				background-color:#f00;
			}
		</style>
	</head>
	<body>
		<div id="box">
			<div id="left">left</div>
			<div id="center">center</div>
			<div id="right">right</div>
		</div>
	</body>

