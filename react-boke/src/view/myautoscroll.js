import React, { Component } from 'react';
import MyHead from '../component/myhead';
import MyFoot from '../component/myfoot';
import Refresh from '../component/other/refresh';
import AutoScroll from '../component/other/autoScroll';

class MyAutoScroll extends Component {
    constructor(props) {
        super(props);
        this.state={
    
        }
      }
  render() {
    return (
        <div className="myevanyou">
            <MyHead/>
            <div className="content">
                <AutoScroll/>
            </div>
            <MyFoot/>
            <Refresh/>
        </div>
    );}
}
export default MyAutoScroll;