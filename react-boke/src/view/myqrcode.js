import React, { Component } from 'react';
import MyHead from '../component/myhead';
import MyFoot from '../component/myfoot';
import Refresh from '../component/other/refresh';
import Qrcode from '../component/other/qrcode';

class MyQrcode extends Component {
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
                <Qrcode/>
            </div>
            <MyFoot/>
            <Refresh/>
        </div>
    );}
}
export default MyQrcode;