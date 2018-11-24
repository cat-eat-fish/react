import React, {Component} from 'react'
import "./refresh.css"

class Refresh extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount (){
        this.isShow()
        var that = this;
        window.onmousewheel =function(){
            that.isShow()
        }
    }

    
    isShow(){
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(oTop < 400){
            document.querySelector('.refresh').style.cssText="display:none"
        }else {
            document.querySelector('.refresh').style.cssText="display:block"
        }
    }
    goTop(){
        var timer  = null;
        var that = this
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn(){
            var oTop = document.body.scrollTop || document.documentElement.scrollTop;
            if(oTop > 0){
                document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
                timer = requestAnimationFrame(fn);
            }else{
                cancelAnimationFrame(timer);
                that.isShow()
            }    
        });
    }

    render() {
        return(
            <div className="refresh" onClick={this.goTop.bind(this)}>
                <i className="iconfont icon-fanhuidingbu"></i>
            </div>
        )
    }
}

export default Refresh