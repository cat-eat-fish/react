import React, { Component } from 'react';
import MyHead from '../component/myhead';
import MyFoot from '../component/myfoot';
import Caveat from '../component/caveat';
import Slider from '../component/slider';
import Contact from '../component/contact';
import ArticleList from '../component/articleList';

class MyHome extends Component {
  render() {
    return (
        <div className="home">
            <MyHead/>
            <div className="content">
                <div className="content-l">
                    <Caveat/>
                    <Slider/>
                    <ArticleList myclass="home"/>
                </div>
                <div className="content-r">
                    <Contact/>
                </div>
            </div>
            <MyFoot/>
        </div>
    );}
}
export default MyHome;