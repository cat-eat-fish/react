import React, { Component } from 'react';
import { Link} from "react-router-dom";
import Pagecomponent from './other/Pagecomponent'
class ArticleList extends Component {
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
    getCurrentPage(currentPage) {
        this.setState({
            dataList : currentPage === 1 ? this.state.ArticleList.slice(0,10) : this.state.ArticleList.slice((currentPage - 1) * 10,currentPage * 10)
        })
    }
  // 组件渲染完成
  componentDidMount () {
        // 获取数据
        // console.log(`https://www.easy-mock.com/mock/5bdaa5bb118a3753c68a2749/myboke/ArticleList?myclass='${(this.props.myclass)}'`)
        fetch(`https://www.easy-mock.com/mock/5bdaa5bb118a3753c68a2749/myboke/ArticleList?myclass='${(this.props.myclass)}'`,{method:'get'})
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
        <div className="ArticleList">
            {this.state.dataList.map((val,index)=>{
                return  <article className="post"  key={index}>
                    <div className="post-img loading">
                        <Link  className="pic float-left" title={val.title} to={`/article/${val.id}`}  replace target="_blank" key={index}>
                            <img className="mip-fill-content mip-replaced-content" src={val.src} alt={val.title} />
                        </Link>
                    </div>
                    <header>
                        <h2>
                            <Link to={`/article/${val.id}`}  replace target="_blank" key={index}>{val.title}</Link>
                        </h2>
                    </header>
                        <p className="post-text">
                            {val.des}
                        </p>
                    <footer > 
                        <span className="time"><i className="fa fa-clock-o fa-fw"></i>
                            {val.date}
                        </span>
                        <span><i className="fa fa-eye fa-fw"></i>
                        {val.look} views
                        </span>
                    </footer>
                </article>
            })}
            <Pagecomponent pageConfig={this.state.pageConfig}
                               pageCallbackFn={this.getCurrentPage}/>
        </div>
    );
  }
}
export default ArticleList;