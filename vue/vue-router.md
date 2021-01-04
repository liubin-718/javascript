14.Vue-router 的路由模式
1.三种："hash" | "history" | "abstract"；
2.hash(默认),history 是浏览器环境，abstract是 node 环境；
3.hash: 使用 URL hash 值来作路由，是利用哈希值实现push、replace、go 等方法；
4.history:依赖 HTML5 History API新增的 pushState() 和 replaceState()，需要服务器配置；
5.abstract:如果发现没有浏览器的 API，路由会自动强制进入这个模式。


链接：https://juejin.cn/post/6847009771355127822
