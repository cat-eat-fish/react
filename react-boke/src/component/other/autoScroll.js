import React, { Component } from 'react';

class AutoScroll extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }
  // 组件渲染完成
  componentDidMount () {
    // 获取数据
    var autoScroll = ()=>{
        var demo=document.getElementById("demo");
        var demo1=document.getElementById("demo1");
        var demo2=document.getElementById("demo2");
        var speed=30;//滚动速度值,值越大速度越慢
        var nnn=200/demo1.offsetHeight;
        for(var i=0;i<nnn;i++){demo1.innerHTML+="<br />"+ demo1.innerHTML}
        demo2.innerHTML = demo1.innerHTML    //克隆demo2为demo1
        function Marquee(){
            if(demo2.offsetTop-demo.scrollTop<=0)    //当滚动至demo1与demo2交界时
                demo.scrollTop-=demo1.offsetHeight    //demo跳到最顶端
            else{
                demo.scrollTop++     //如果是横向的 将 所有的 height top 改成 width left
            }
        }
        var MyMar = setInterval(Marquee,speed);        //设置定时器
        demo.onmouseover = function(){clearInterval(MyMar)}    //鼠标经过时清除定时器达到滚动停止的目的
        demo.onmouseout = function(){MyMar = setInterval(Marquee,speed)}    //鼠标移开时重设定时器
    }
    autoScroll()
  }
  
  
  render() {
    return (
        <div className="autoScroll">
            <div id="demo">
                <div id="demo1">
                <div>我是滚动内容</div> 
                <div>你来抓我啊</div>
                <div>嗖嗖嗖</div>
                <div>2333333333333333333333333</div>
                </div>
                <div id="demo2"></div>
            </div>
        </div>
    );
  }
}
export default AutoScroll;