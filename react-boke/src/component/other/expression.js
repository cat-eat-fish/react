import React, { Component } from 'react';

class Expression extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }
  // 组件渲染完成
  componentDidMount () {
    // 获取数据
    var pattphone = /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/ ;    //手机号码验证
    var pattemail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;    //email验证
    var pattcard = /^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/;    //身份证号验证
    var pattuser = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/; //(字母开头，允许5-16字节，允许字母数字下划线)
    var pattmoney = /^([+-]?)((\d{1,3}(,\d{3})*)|(\d+))(\.\d{2})?$/; //货币验证
    document.querySelector("input[name=phone]").onblur=function(){
        alert(!pattphone.test(document.querySelector("input[name=phone]").value) ? "Fail" : "Success")
    }
    document.querySelector("input[name=email]").onblur=function(){
        alert(!pattemail.test(document.querySelector("input[name=email]").value) ? "Fail" : "Success")
    }
    document.querySelector("input[name=card]").onblur=function(){
        alert(!pattcard.test(document.querySelector("input[name=card]").value) ? "Fail" : "Success")
    }
    document.querySelector("input[name=user]").onblur=function(){
        alert(!pattuser.test(document.querySelector("input[name=user]").value) ? "Fail" : "Success")
    }
    document.querySelector("input[name=money]").onblur=function(){
        alert(!pattmoney.test(document.querySelector("input[name=money]").value) ? "Fail" : "Success")
    }
  }
  
  render() {
    return (
        // 正文
        <div className="evanyou">
            <input type="text" id="phone" name="phone" placeholder="phone验证" />
            <input type="text" id="email" name="email" placeholder="email验证" />
            <input type="text" id="card" name="card" placeholder="card验证" />
            <input type="text" id="user" name="user" placeholder="user验证(字母开头，允许5-16字节，允许字母数字下划线)" />
            <input type="text" id="money" name="money" placeholder="money验证" />
        </div>
    );
  }
}
export default Expression;