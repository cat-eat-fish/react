# react
react 博客  项目 

----------
预览地址 ： https://cat-eat-fish.github.io/react/react-boke/ceshi/index.html#/

react相关 ： react-router-dom

所含技术 ： 数字渐变	图片懒加载  返回顶部	Easy Mock模拟数据接口

## 关于react项目在本地/github上预览的问题： ##
	1.在package.json 文件中添加 	"homepage":"./",
	2.保证路由是HashRouter模式 （<HashRouter>...</HashRouter>）	因为当我们使用react-router-dom里的BrowserRouter as Router时，是用浏览器history对象的方法去请求服务器，如果服务器没有相对于的路由去指向对应的页面路由会找不到资源。