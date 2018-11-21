import React, { Component } from 'react';

class ThisClass extends Component {
  constructor(props) {
    super(props);
    this.state={
        ptext:''
    }
  }
  componentDidMount () {
    // 获取数据
    fetch(`https://www.easy-mock.com/mock/5bdaa5bb118a3753c68a2749/myboke/thisclass`,{method:'get'})
        .then((res)=>{ res.json()
        .then((data)=>{
           this.setState({
            ptext:data.data[2].des
           })
        })
        }, function(error) {
        }
    )
}
  render() {
    return (
        <div className="thisclass">
            <h1 className="headline">分类：{this.props.myclass}</h1>
            <div className="archive-description">
              <p>{this.state.ptext}</p>
            </div>
        </div>
    );
  }
}
export default ThisClass;