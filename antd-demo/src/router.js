import React from 'react';
import {BrowserRouter,HashRouter, Route, Switch} from 'react-router-dom';



const BasicRoute = () => (
    <HashRouter>
    {/* <BrowserRouter > */}
        <Switch>
            {/* 首页 */}
            <Route exact path="/" component={()=> import("./views/home")}/> 

        </Switch>
    {/* </BrowserRouter> */}
    </HashRouter>
);

export default BasicRoute;
