import React, { Component } from 'react';
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {imgs:[]};
  }
  // 组件渲染完成
  componentDidMount () {
    // 获取数据
    fetch('https://www.easy-mock.com/mock/5bdaa5bb118a3753c68a2749/myboke/sliderInfo',{method:'get'})
      .then((res)=>{ res.json()
      .then((data)=>{
        this.setState({
            imgs:data.data
        })
      })
      }, function(error) {
      }
    )
    // 添加定时器
    var i = 0;
    this.timerID = setInterval(function() {
      i++
      i = i>=3 ? 0 : i;
      document.querySelector('.sliderBox').childNodes.forEach((val,ind)=>{
        val.style.cssText=`transform:translateX(-${790*i}px)`;
      })
    }
    ,5000);
  }

  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
        <div className="slider">
          <div className="sliderBox" >
            {this.state.imgs.map((val,index)=>{
              return <a href={val.url} key={index}>
                <img src={val.src} alt={val.text} />
              </a>
            })}
          </div>
        </div>
    );
  }
}
export default Slider;