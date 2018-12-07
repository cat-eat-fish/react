import React, { Component } from 'react';
import MyHead from '../component/myhead';
import MyFoot from '../component/myfoot';
import Refresh from '../component/other/refresh';
import Evanyou from '../component/other/evanyou';

class MyEvanyou extends Component {
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
                <Evanyou/>
            </div>
            <MyFoot/>
            <Refresh/>
        </div>
    );}
}
export default MyEvanyou;