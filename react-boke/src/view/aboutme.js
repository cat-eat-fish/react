import React, { Component } from 'react';
import MyHead from '../component/myhead';
import MyFoot from '../component/myfoot';
import Contact from '../component/contact';
import AboutMe from '../component/aboutme';
import Refresh from '../component/other/refresh';
import Evanyou from '../component/other/evanyou';
    
class MyAboutMe extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
// 组件渲染完成
    componentDidMount () {
    // 获取数据
    }
  render() {
    return (
        <div className="myaboutme">
            <Evanyou/>
            <MyHead/>
            <div className="content">
                <div className="content-l">
                    <AboutMe/>
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
export default MyAboutMe;