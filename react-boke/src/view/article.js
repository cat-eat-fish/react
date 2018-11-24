import React, { Component } from 'react';
import MyHead from '../component/myhead';
import MyFoot from '../component/myfoot';
import Contact from '../component/contact';
import MyArticle from '../component/article';
import Refresh from '../component/other/refresh';

class Article extends Component {
  render() {
    return (
        <div className="article">
            <MyHead/>
            <div className="content">
                <div className="content-l">
                    <MyArticle/>
                </div>
                <div className="content-r">
                    <Contact/>
                </div>
            </div>
            <MyFoot/>
            <Refresh/>
        </div>
    );}
}
export default Article;