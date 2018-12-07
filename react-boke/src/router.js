import React from 'react';
import {BrowserRouter,HashRouter, Route, Switch} from 'react-router-dom';

import Home from './view/home';
import Detail from './view/detail';
import MyClass from './view/myclass';
import Search from './view/search';
import Article from './view/article';
import AboutMe from './view/aboutme';
import MyEvanyou from './view/myEvanyou';
import No404 from './view/no404';

const BasicRoute = () => (
    <HashRouter>
    {/* <BrowserRouter > */}
        <Switch>
            {/* 首页 */}
            <Route exact path="/" component={Home}/>
            {/* 测试页面 */}
            <Route exact path="/detail" component={Detail}/>    
            {/* 分类页面 */}
            <Route exact path="/myclass/:name" component={MyClass}/>
            {/* 搜索页面 */}
            <Route exact path="/search" component={Search}/>
            {/* 正文页面 */}
            <Route exact path="/article/:id" component={Article}/>
            {/* 关于我 */}
            <Route exact path="/aboutme" component={AboutMe}/>

            {/* ts_彩带 */}
            <Route exact path="/evanyou" component={MyEvanyou}/>
            





            {/* 404页面 */}
            <Route exact path="*" component={No404}/>
        </Switch>
    {/* </BrowserRouter> */}
    </HashRouter>
);

export default BasicRoute;
