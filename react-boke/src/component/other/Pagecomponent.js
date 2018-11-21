import React, {Component} from 'react'
import './Pagecomponent.css'

class Pagecomponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1, //当前页码
            groupCount: 5, //页码分组，显示7个页码，其余用省略号显示
            startPage: 1,  //分组开始页码
            // totalPage:1 //总页数
        }
        this.createPage = this.createPage.bind(this)
    }

    componentDidMount() {
        
        this.props.pageCallbackFn(this.state.currentPage)
    }

    
    createPage() {
        //const {totalPage} = this.props.pageConfig;
        const {currentPage, groupCount, startPage} = this.state;
        let pages = []
        //上一页
        pages.push(<li className={currentPage === 1 ? "nomore" : null} onClick={this.prePageHandeler.bind(this)}
                       key={0}>
            上一页</li>)

        if (this.props.pageConfig.totalPage <= 10) {
            /*总页码小于等于10时，全部显示出来*/
            for (let i = 1; i <= this.props.pageConfig.totalPage; i++) {
                pages.push(<li key={i} onClick={this.pageClick.bind(this, i)}
                               className={currentPage === i ? "activePage" : null}>{i}</li>)
            }
        } else {
            /*总页码大于10时，部分显示*/

            //第一页
            pages.push(<li className={currentPage === 1 ? "activePage" : null} key={1}
                           onClick={this.pageClick.bind(this, 1)}>1</li>)

            let pageLength = 0;
            if (groupCount + startPage > this.props.pageConfig.totalPage) {
                pageLength = this.props.pageConfig.totalPage
            } else {
                pageLength = groupCount + startPage;
            }
            //前面省略号(当当前页码比分组的页码大时显示省略号)
            if (currentPage >= groupCount) {
                pages.push(<li className="" key={-1}>···</li>)
            }
            //非第一页和最后一页显示
            for (let i = startPage; i < pageLength; i++) {
                if (i <= this.props.pageConfig.totalPage - 1 && i > 1) {
                    pages.push(<li className={currentPage === i ? "activePage" : null} key={i}
                                   onClick={this.pageClick.bind(this, i)}>{i}</li>)
                }
            }
            //后面省略号
            if (this.props.pageConfig.totalPage - startPage >= groupCount + 1) {
                pages.push(<li className="" key={-2}>···</li>)
            }
            //最后一页
            pages.push(<li className={currentPage === this.props.pageConfig.totalPage ? "activePage" : null} key={this.props.pageConfig.totalPage}
                           onClick={this.pageClick.bind(this, this.props.pageConfig.totalPage)}>{this.props.pageConfig.totalPage}</li>)
        }
        //下一页
        pages.push(<li className={currentPage === this.props.pageConfig.totalPage ? "nomore" : null}
                       onClick={this.nextPageHandeler.bind(this)}
                       key={this.props.pageConfig.totalPage + 1}>下一页</li>)
        return pages;

    }

    //页码点击
    pageClick(currentPage) {
        const {groupCount} = this.state
        const getCurrentPage = this.props.pageCallbackFn;
        //当 当前页码 大于 分组的页码 时，使 当前页 前面 显示 两个页码
        if (currentPage >= groupCount) {
            this.setState({
                startPage: currentPage - 2,
            })
        }
        if (currentPage < groupCount) {
            this.setState({
                startPage: 1,
            })
        }
        //第一页时重新设置分组的起始页
        if (currentPage === 1) {
            this.setState({
                startPage: 1,
            })
        }
        this.setState({
            currentPage
        })
        //将当前页码返回父组件
        getCurrentPage(currentPage)
    }

    //上一页事件
    prePageHandeler() {
        let {currentPage} = this.state
        if (--currentPage === 0) {
            return false
        }
        this.pageClick(currentPage)
    }

    //下一页事件
    nextPageHandeler() {
        let {currentPage} = this.state
        if (++currentPage > this.props.pageConfig.totalPage) {
            return false
        }
        this.pageClick(currentPage)
    }
    render() {
        const pageList = this.createPage();
        return (
            <ul className="page-container">
                {pageList}
            </ul>
        )
    }
}

export default Pagecomponent