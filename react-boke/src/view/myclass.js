import React, { Component } from 'react';
import MyHead from '../component/myhead';
import MyFoot from '../component/myfoot';
import Contact from '../component/contact';
import ArticleList from '../component/articleList';
import ThisClass from '../component/thisclass';

class MyHome extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  
  render() {
    return (
        <div className="myclass">
            <MyHead/>
            <div className="content">
                <div className="content-l">
                    <ThisClass  myclass={this.props.match.params.name}/>
                    <ArticleList  myclass={this.props.match.params.name}  />
                </div>
                <div className="content-r">
                    <Contact/>
                </div>
            </div>
            <MyFoot />
        </div>
    );}
}
export default MyHome;