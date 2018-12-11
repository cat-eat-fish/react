import React, { Component } from 'react';
import MyHead from '../component/myhead';
import MyFoot from '../component/myfoot';
import Refresh from '../component/other/refresh';
import Expression from '../component/other/expression';

class MyExpression extends Component {
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
                <Expression/>
            </div>
            <MyFoot/>
            <Refresh/>
        </div>
    );}
}
export default MyExpression;