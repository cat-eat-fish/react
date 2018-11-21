import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Home from './view/home';
import Detail from './view/detail';
import MyClass from './view/myclass';
import Search from './view/search';
import Article from './view/article';


const BasicRoute = () => (
    <HashRouter >
        <Switch>
            {/* 首页 */}
            <Route exact path="/" component={Home}/>
            {/* 测试页面 */}
            <Route exact path="/detail" component={Detail}/>    
            {/* 分类页面 */}
            <Route exact path="/myclass/:name" component={MyClass}/>
            {/* 搜索页面 */}
            <Route exact path="/search/:search" component={Search}/>
            {/* 正文页面 */}
            <Route exact path="/article/:id" component={Article}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;
