import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state={
        weibo:'https://weibo.com/u/6764839207',
        qq:'http://wpa.qq.com/msgrd?v=3&amp;uin=961166897;site=qq&amp;menu=yes',
    }
  }
  
  render() {
    return (
        // 联系方式
        <div className="contact">
            <p className="title"><span>联系方式</span></p>
            <ul>
                <a href={this.state.weibo} target="_blank" className="social_a social_weibo" rel="nofollow" title="新浪微博"><i className="iconfont icon-weibo"></i></a> 
                <a href={this.state.qq} target="_blank" className="social_a social_qq" rel="nofollow" title=""><i className="iconfont icon-qq"></i></a>      
                <a className="social_a social_weixin" ><i className="iconfont icon-icon"></i>
                <span className="weixin">
                    <img className="mip-fill-content mip-replaced-content" src={require('../static/img/weixin.jpg')} alt="扫描微信" />
                </span>
                </a>	
	        </ul>
        </div>
    );
  }
}
export default Contact;