import React, { Component } from 'react';
import MyHead from '../component/myhead';
import MyFoot from '../component/myfoot';
import Contact from '../component/contact';
import MyArticle from '../component/article';

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
        </div>
    );}
}
export default Article;