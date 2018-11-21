import React, { Component } from 'react';
import { Link} from "react-router-dom";

class MyFoot extends Component {
  constructor(props) {
    super(props);
    this.state={
        link:[
            {id:0,text:'百度',href:'https://www.baidu.com'},
            {id:0,text:'淘宝',href:'https://www.taobao.com'}
        ]
    }
  }
  
  render() {
    return (
        // 尾部
        <footer className="footer">
            <div className="link">
                <span>友情链接 : </span>
                    <ul>
                        {
                            this.state.link.map((val,index)=>{
                                return <li key={index}>
                                    <a href={val.href}  title={val.text}>{val.text}</a>
                                </li>
                            })
                        }				
                    </ul>
            </div>
            <div className="footer-ju">
                <p>
                    © 2018 <Link replace  to={'/'}>Hello World</Link>&nbsp;
                </p>
            </div>
        </footer>
        
    );
  }
}
export default MyFoot;