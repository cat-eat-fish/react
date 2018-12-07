import React, { Component } from 'react';
import MyHead from '../component/myhead';
import MyFoot from '../component/myfoot';
import Caveat from '../component/caveat';
import Slider from '../component/slider';
import Contact from '../component/contact';
import ArticleList from '../component/articleList';
import Refresh from '../component/other/refresh';


class MyHome extends Component {
  render() {
    return (
        <div className="home">
            <MyHead/>
            <div className="content">
                <div className="content-l">
                    404
                </div>
            </div>
            <MyFoot/>
            <Refresh/>
        </div>
    );}
}
export default MyHome;