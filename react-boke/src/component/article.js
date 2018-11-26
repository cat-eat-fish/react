import React, { Component } from 'react';
import {  Link,withRouter} from "react-router-dom";
import Counter from "./other/Counter.js"

class MyArticle extends Component {
  constructor(props) {
    super(props);
    this.state={
        thisInfo:{
            title:'',
            content:'',
            date:'',
            thisclass:'',
            look:'',
            previousInfo:{id:'',title:''},
            nextInfo:{id:'',title:''}
        },
        recommend:[
            // *6
            {id:'',title:'',date:''},
        ]
    }
  }
  // 组件渲染完成
  componentDidMount () {
    // 获取数据
    fetch('https://www.easy-mock.com/mock/5bdaa5bb118a3753c68a2749/myboke/article',{method:'get'})
      .then((res)=>{ res.json()
      .then((data)=>{
        this.setState({
            thisInfo:data.thisInfo
        })
      })
      }, function(error) {
      }
    )
    // 
    fetch('https://www.easy-mock.com/mock/5bdaa5bb118a3753c68a2749/myboke/recommend',{method:'get'})
      .then((res)=>{ res.json()
      .then((data)=>{
        this.setState({
            recommend:data.recommend
        })
      })
      }, function(error) {
      }
    )
  }

isHas(now){
    if(now == 1){
      return (
        <a  >
            <span>上一篇：</span> 没有更多了！
        </a>
      )
    }else {
      
      return (
        <Link to={`/article/${this.state.thisInfo.previousInfo.id}`}  replace target="_blank" >
            <span>上一篇：</span> {this.state.thisInfo.previousInfo.title}
        </Link>
      )
    }
}
  
  render() {
    return (
        // 正文
        <div className="myarticle">
            {/*  */}
            <div className="article-container">
                <header className="article-header">
                    <h1 className="article-title">{this.state.thisInfo.title}</h1>
                    <div className="article-meta">
                        <span><i className="fa fa-clock-o fa-fw"></i> {this.state.thisInfo.date}</span>
                        <span><i className="fa fa-folder-open fa-fw"></i>
                            <Link to={`/myclass/${this.state.thisInfo.thisclass}`}  replace  >
                                {this.state.thisInfo.thisclass}
                            </Link>
                        </span>
                        <span><i className="fa fa-eye fa-fw"></i><Counter value={parseInt(this.state.thisInfo.look, 10) || 0} /> views</span>
                    </div>
                </header>
                <div className="article-content">
                    <div className="bdshare">
                        <div className="mip-share-container">
                            {this.state.thisInfo.content}
                        </div>
                    </div>   
                </div>
            </div>
            {/* 上一篇下一篇 */}
            <div className="post-navigation">
                <div className="post-previous">
                    {this.isHas(this.props.match.params.id)}
                </div>        
                <div className="post-next">
                    <Link to={`/article/${this.state.thisInfo.nextInfo.id}`}  replace target="_blank" >
                        <span>下一篇：</span> {this.state.thisInfo.nextInfo.title}
                    </Link>
                </div>    
            </div>
            {/* 相关推荐 */}
            <div className="relates">
                <div className="title"><h3>相关推荐</h3></div>
                <ul>
                    {
                        this.state.recommend.map((val,index)=>{
                            return <li key={index}>
                                    <Link to={`/article/${val.id}`}  replace target="_blank" key={index}>{val.title}</Link>
                                    <time>{val.date}</time>
                                </li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
  }
}
export default withRouter(MyArticle);