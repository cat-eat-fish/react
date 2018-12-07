import React, { Component } from 'react';
import {  Link,withRouter} from "react-router-dom";
import Counter from "./other/Counter.js"

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state={
      mydata:[{
        url:"/evanyou",
        name:"彩带特效",
        text:`
      // html部分
      <canvas id="evanyou" width="1920" height="934"></canvas>
      // style部分
      <style>
        #evanyou{position:fixed;width:100%;height:100%;left:0;top:0;z-index:-10;}
      </style>
      // js部分
        <script>
        var c = document.getElementById('evanyou'),   
        x = c.getContext('2d'),         
        pr = window.devicePixelRatio || 1, 
        w = window.innerWidth,
        h = window.innerHeight,
        f = 90,
        q,
        m = Math,
        r = 0,  
        u = m.PI * 2,
        v = m.cos,  
        z = m.random;   
        c.width = w * pr;  
        c.height = h * pr;
        x.scale(pr, pr);    
        x.globalAlpha = 0.6;    
        function evanyou() {
            x.clearRect(0, 0, w, h)
            q = [{ x : 0, y: h * .7 + f }, { x: 0, y: h * .7 - f }]
            while (q[1].x < w + f) d(q[0], q[1])
        }
        function d(i, j) {
            x.beginPath()
            x.moveTo(i.x, i.y)
            x.lineTo(j.x, j.y)
            var k = j.x + (z() * 2 - 0.25) * f,
                n = y(j.y)
            x.lineTo(k, n)
            x.closePath()
            r -= u / -50
            x.fillStyle = '#' + (v(r) * 127 + 128 << 16 | v(r + u / 3) * 127 + 128 << 8 | v(r + u / 3 * 2) * 127 + 128).toString(16)
            x.fill()
            q[0] = q[1]
            q[1] = { x: k, y: n }
        }
        function y(p) {
            var t = p + (z() * 2 - 1.1) * f
            return (t > h || t < 0) ? y(p) : t
        }
        document.onclick = evanyou
        document.ontouchstart = evanyou
        evanyou();
      </script>`
      },{
        url:"",
        name:'网站标题',
        text:`
        window.onload = function () {
          document.addEventListener('visibilitychange', function () {
              document.title = document.hidden ? "(●—●)喔哟，崩溃啦！" : "(/≧▽≦/)咦！又好了！";
          });
        }`
      }]
    }
  }

  // 组件渲染完成
  componentDidMount () {
    // 获取数据

  }
  isShow(url){
    if(url){
      return (<Link to={url}  replace target="_blank" >去看看</Link>);
    }else{
      return "";
    }
    // this.state.mydata.map((item,index)=>{
    //   if(item.url){
    //     return (<Link to={item.url} key={index}  replace target="_blank" >去看看</Link>);
    //   }else{
    //     return "";
    //   }
    // })
  }
  render() {
    return (<div className="AboutMe ">
          {this.state.mydata.map((item,index)=>{
            return (
            <div className="ts_item" key={index}>
              <div className="ts_title">
                <span className="ts_name">{item.name}</span>
                <span className="ts_more">
                 {this.isShow(item.url)}
                </span>
              </div>
              <pre>
                  <code>
                    <xmp>
                      {item.text}
                    </xmp>
                  </code>
              </pre>
            </div>
            )
          })}  
        </div>
    );
  }
}
export default withRouter(AboutMe);