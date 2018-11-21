import React, { Component } from 'react';
import MyHead from '../component/myhead';
import MyFoot from '../component/myfoot';
import Contact from '../component/contact';
import SearchList from '../component/searchList';

class MyHome extends Component {
    constructor(props) {
        super(props);
        this.state={
    
        }
      }
  render() {
    return (
        <div className="search">
            <MyHead/>
            <div className="content">
                <div className="content-l">
                    <SearchList search={this.props.location.query} />
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