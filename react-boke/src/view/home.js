import React, { Component } from 'react';
import MyHead from '../component/myhead';
import MyFoot from '../component/myfoot';
import Caveat from '../component/caveat';
import Slider from '../component/slider';
import Contact from '../component/contact';
import ArticleList from '../component/articleList';
import Refresh from '../component/other/refresh';
import {textGet} from "../api/data.js"
import axios  from "axios"

class MyHome extends Component {
  render() {
    // textGet().then(res=>{
    //     console.log(res)
    // }).catch(err=>{console.log(err)});
    // axios.get('http://localhost:3000/reactApi/get').then(res=>{
    //     console.log(res)
    // }).catch(err=>{console.log(err)})
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
            <Refresh/>
        </div>
    );}
}
export default MyHome;