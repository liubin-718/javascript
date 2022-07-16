导致回流操作：  
1、页面首次渲染  
2、浏览器窗口大小发生改变  
3、元素尺寸或位置改变  
4、元素内容变化（文字数量或图片大小等）  
5、元素字体大小变化  
6、添加或删除可见的dom元素  
7、激活css伪类（例如：:hover）  
8、查询某些属性或调用某些方法  
常用会导致回流的属性和方法：  
clientWidth、clientHeight、clientTop、clientLeft  
offsetWidth、offsetHeight、offsetTop、offsetLeft  
scrollWidth、scrollHeight、scrollTop、scrollLeft  
scrollIntoView()、scrollIntoViewIfNeeded()  
getComputedStyle()  
scrollTo()  

