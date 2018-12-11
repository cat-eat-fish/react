import React, { Component } from 'react';
import { Link,withRouter} from "react-router-dom";
import logo from '../static/img/logo.jpg';
import Counter from "./other/Counter.js"

class MyHead extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      nav:[{id:0,text:'首页',stext:'home'},{id:1,text:'HTML',stext:'html'},{id:2,text:'CSS',stext:'css'},{id:3,text:'JAVASCRIPT',stext:"javascript"},{id:4,text:'VUE',stext:"vue"},{id:5,text:'react',stext:'react'}],
      searchKey:'',
      personalInfo:{name: "", photo: "",des:''},
      otherInfo: {
        articlesNum:0,
        browseNum: 0,
      },
      value:42,
    };
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  search(){
    var searchKey = document.querySelector('#searchInp').value;
    var pattkg = /\s+/;
    if(searchKey === ''){
      console.log('请输入关键词')
      return false;
    }else if(pattkg.test(searchKey)){
      console.log('关键词不能是空格')
      return false;
    }else{
      // console.log(searchKey)
      this.props.history.push({ pathname : `/search`,search:`?search=${searchKey}`})
      // this.props.router.push({ path : '/search' ,query : { search: searchKey} })
    }
  }

  // 组件渲染完成
  componentDidMount () {
    // 获取数据
    fetch('https://www.easy-mock.com/mock/5bdaa5bb118a3753c68a2749/myboke/personalInfo',{method:'post'})
      .then((res)=>{ res.json()
      .then((data)=>{
        this.setState({
            personalInfo:data.personalInfo,
            otherInfo:data.otherInfo
        })
      })
      }, function(error) {
      }
    )
    
  }

  render() {
    return (
        // 头部
        <header className="App-header">
          <div className="myheader">
            <div className="header content">
              <div className="logo">
                <a href="#/">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <div className="info">
                <div className="blog-name">
                  {this.state.personalInfo.name}
                </div>
                <div className="blog-text">
                  {this.state.personalInfo.des}
                </div>
                <div className="blog-data">
                  <span className="blog-num">
                    文章
                    <b><Counter value={parseInt(this.state.otherInfo.articlesNum, 10) || 0} /></b>
                  </span>
                  <span className="blog-view">
                    浏览
                    <b><Counter value={parseInt(this.state.otherInfo.browseNum, 10) || 0} />{}</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="nav">
            <div className="navcon content">
              <nav className="">
                <Link replace to={'/'}  >首页</Link>
                {this.state.nav.slice(1).map((val,index)=>{
                  return  <Link  to={`/myclass/${val.stext}`}  replace key={index}>{val.text}</Link>
                })}
                <Link replace to={'/aboutme'}  >关于我</Link>
              </nav>
              {/* 搜索功能 */}
              <div className="search">
                <input id="searchInp" type="text"  placeholder="Search..." />
                <i className="iconfont icon-sousuo" onClick={this.search.bind(this)}></i>
                {/* <input type="button"   value="搜索" /> */}
              </div>
              
            </div>
          </div>
        </header>
    );
  }
}
export default withRouter(MyHead);