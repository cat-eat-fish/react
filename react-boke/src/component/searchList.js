import React, { Component } from 'react';
import {  Link,withRouter} from "react-router-dom";
import Pagecomponent from './other/Pagecomponent'
class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        ArticleList:[],     //总数据
        dataList:[],        //本页的数据
        pagedata:10,        //每页10条数据
        pageConfig: {
            totalPage: 1 //总页码
        },
    };
    
    this.getCurrentPage = this.getCurrentPage.bind(this)
  }
  componentWillMount(){

  }
    getCurrentPage(currentPage) {
        this.setState({
            dataList : currentPage === 1 ? this.state.ArticleList.slice(0,10) : this.state.ArticleList.slice((currentPage - 1) * 10,currentPage * 10)
        })
    }

    getQueryString(name) { 
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
        var r = window.location.search.substr(1).match(reg); 
        if (r != null) return decodeURI(r[2]); return null; 
    }
  // 组件渲染完成
  componentDidMount () {
        // 获取数据
        fetch(`https://www.easy-mock.com/mock/5bdaa5bb118a3753c68a2749/myboke/searchList`,{method:'get'})
            .then((res)=>{ res.json()
            .then((data)=>{
                this.setState({
                    ArticleList : data.data,
                    pageConfig : {totalPage:Math.ceil(data.data.length / this.state.pagedata)},
                    dataList : data.data.slice(0,this.state.pagedata)
                })
            })
            }, function(error) {
            }
        )
  }
  render() {
    return (
        <div className="searchList">
            <div className="archive-search">
                {/* <h1 >搜索 " {decodeURI(this.props.history.location.search.split('&')[0].substr(3))} "</h1> */}
                <h1 >搜索 " {this.getQueryString("search")} "</h1>
		    </div>
            <div className="post-search">
                {this.state.dataList.map((val,index)=>{
                    return  <p key={index}>
                        <Link  title={val.title} to={`/article/${val.id}`}  replace  >
                            {val.title}
                        </Link>
                        {val.des}
                        <Link  title={val.title} to={`/article/${val.id}`}  replace  >
                            GO  >>
                        </Link>
                    </p>
                })}
            </div>
            <Pagecomponent pageConfig={this.state.pageConfig} pageCallbackFn={this.getCurrentPage}/>
        </div>
    );
  }
}
export default withRouter(SearchList);