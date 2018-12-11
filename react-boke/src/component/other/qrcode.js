import React, { Component } from 'react';
import QRCode from "qrcodejs2"

class qrcode extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }
  // 组件渲染完成
  componentDidMount () {
    // 获取数据
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 96,//设置宽高
        height : 96
    });
    qrcode.makeCode("https://www.baidu.com");
    document.getElementById("send").onclick =function(){
        qrcode.makeCode(document.getElementById("getval").value);
    }
  }
  
  render() {
    return (
        // 正文
        <div className="qrcode">
            <div id="qrcode"></div>
            <input id="getval" type="text"  placeholder={this.state.nowVal}   />   
            <input id="send" type="button" value="生成二维码" />
        </div>
    );
  }
}
export default qrcode;