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
      },{
        url:"/autoscroll",
        name:'文字滚动',
        text:`
          //html部分
          <div id="demo">
                <div id="demo1">
                <div>我是滚动内容</div> 
                <div>你来抓我啊</div>
                <div>嗖嗖嗖</div>
                <div>2333333333333333333333333</div>
                </div>
                <div id="demo2"></div>
          </div>
          //style部分
          #demo{overflow:hidden;height:200px;width:250px;border:1px solid #6699cc;font-size:14px;color:#336699;line-height:22px;text-align:left;padding:10px;} 
          // js部分
          var autoScroll = ()=>{
            var demo=document.getElementById("demo");
            var demo1=document.getElementById("demo1");
            var demo2=document.getElementById("demo2");
            var speed=30;//滚动速度值,值越大速度越慢
            var nnn=200/demo1.offsetHeight;
            for(var i=0;i<nnn;i++){demo1.innerHTML+="<br />"+ demo1.innerHTML}
            demo2.innerHTML = demo1.innerHTML    //克隆demo2为demo1
            function Marquee(){
                if(demo2.offsetTop-demo.scrollTop<=0)    //当滚动至demo1与demo2交界时
                    demo.scrollTop-=demo1.offsetHeight    //demo跳到最顶端
                else{
                    demo.scrollTop++     //如果是横向的 将 所有的 height top 改成 width left
                }
            }
            var MyMar = setInterval(Marquee,speed);        //设置定时器
            demo.onmouseover = function(){clearInterval(MyMar)}    //鼠标经过时清除定时器达到滚动停止的目的
            demo.onmouseout = function(){MyMar = setInterval(Marquee,speed)}    //鼠标移开时重设定时器
        }
        autoScroll()
        `
      },{
        url:"/expression",
        name:'正则表达式',
        text:`
        var pattphone = /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/ ;    //手机号码验证
        var pattemail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;    //email验证
        var pattcard = /^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/;    //身份证号验证
        var pattuser = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/; //(字母开头，允许5-16字节，允许字母数字下划线)
        var pattmoney = /^([+-]?)((\d{1,3}(,\d{3})*)|(\d+))(\.\d{2})?$/; //货币验证
        var pattmoney2 = /^\d+(\.\d+)?$/;
        `
      },{
        url:"",
        name:'原生Ajax封装',
        text:`
        function ajax(opt) {
          opt = opt || {};
          opt.method = opt.method.toUpperCase() || 'POST';
          opt.url = opt.url || '';
          opt.async = opt.async || true;
          opt.data = opt.data || null;
          opt.success = opt.success || function () {};
          var xmlHttp = null;
          if (XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
          }else {
            xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
          }
          var params = [];
          for (var key in opt.data){
            params.push(key + '=' + opt.data[key]);
          }
          var postData = params.join('&');
          if(opt.method.toUpperCase() === 'POST') {
            xmlHttp.open(opt.method, opt.url, opt.async);
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            xmlHttp.send(postData);
           }else if (opt.method.toUpperCase() === 'GET') {
            xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
            xmlHttp.send(null);
          } 
          xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
              opt.success(xmlHttp.responseText);
            }
          };
        }
        //  使用方法
        ajax({
          method: '',     //方法
          url: '',        //请求地址
          data: {         //数据
            name1: 'value1',
            name2: 'value2'
          },  
          success: (res)=> {    //返回成功数据
            var res = JSON.parse(res);
            console.log(res)
          }
        });
        `
      },{
        url:"",
        name:'js获取地址栏参数',
        text:`
        function getQueryVariable(variable){
          var query = window.location.search.substring(1);
          var vars = query.split("&");
          for (var i=0;i<vars.length;i++) {
                  var pair = vars[i].split("=");
                  if(pair[0] == variable){return pair[1];}
          }
          return(false);
        }
        // 使用方法
        例：localhost:3000/index.html?a=a&b=b
        getQueryVariable("a") // a
        getQueryVariable("b") // b
        `
      },{
        url:"",
        name:'js时间函数封装',
        text:`
        //datetime - 当前时间对象  type - 返回类型 暂支持  "Y-M-D h:min:s" "Y-M-D" "h:min:s"
        function formateDate(datetime,type) {
            var year = datetime.getFullYear(),
                month = ("0" + (datetime.getMonth() + 1)).slice(-2),
                date = ("0" + datetime.getDate()).slice(-2),
                hour = ("0" + datetime.getHours()).slice(-2),
                minute = ("0" + datetime.getMinutes()).slice(-2),
                second = ("0" + datetime.getSeconds()).slice(-2);
            if(type === "Y-M-D h:min:s"){
                var result = year + "-"+ month +"-"+ date +" "+ hour +":"+ minute +":" + second;
            }else if(type === "Y-M-D"){
                var result = year + "-"+ month +"-"+ date;
            }if(type === "h:min:s"){
                var result = hour +":"+ minute +":" + second;
            }
            return result;
        }

        console.log(formateDate(new Date(),"Y-M-D h:min:s"))  //  2018-12-10 10:44:36
        console.log(formateDate(new Date(),"Y-M-D"))          //  2018-12-10
        console.log(formateDate(new Date(),"h:min:s"))        //  10:44:36
        `
      },{
        url:"/qrcode",
        name:'js生成二维码',
        text:`
        // 需要引入外部 js 
        <script src="./qrcode.min.js"></script>
        // vue react 项目 可以 :
        // npm install qrcodejs2 --save
        // import QRcode form 'qrcodejs2'

        // html
        <div id="qrcode"></div> //生成二维码的位置
        // js
        window.onload =function(){
            var qrcode = new QRCode(document.getElementById("qrcode"), {
                width : 96,//设置宽高
                height : 96
            });
            qrcode.makeCode("https://www.baidu.com");
        }

        `
      },{
        url:"",
        name:'js判断数据类型',
        text:`
        function getType(obj) {
          var type = typeof obj;
          if (type !== 'object') {
            return type;
          }
          //如果不是object类型的数据，直接用typeof就能判断出来
          //如果是object类型数据，准确判断类型必须使用Object.prototype.toString.call(obj)的方式才能判断
          return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');
        }
        //例:
        console.log(getType("123"))  //string
        console.log(getType(123))     //number
        console.log(getType(true))  //boolean
        console.log(getType([1,2,3]))  //Array
        console.log(getType(undefined))  //undefined
        console.log(getType(null))  //Null
        console.log(getType({name:'小A',age:22}))  //Object
        console.log(getType({"name":"小A","age":"22"}))  //Object
        console.log(getType(function(){console.log(1)}))  //function
        console.log(getType(/\d/))  //RegExp
        `
      },{
        url:"",
        name:'js去空格',
        text:`
        var str = " a b c"
        // 去除所有空格:   
        str   =   str.replace(/\s+/g,""); //abc
        // 去除两头空格:  
        str   =   str.replace(/^\s+|\s+$/g,""); //a b c 
        //去除左空格：
        str=str.replace( /^\s*/, '')  //a b c
        //去除右空格：
        str=str.replace(/(\s*$)/g, ""); //a b c
        
        `
      },{
        url:'',
        name:'π的值',
        text:`
          const PI = 3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277053921717629317675238467481846766940513200056812714526356082778577134275778960917363717872146844090122495343014654958537105079227968925892354201995611212902196086403441815981362977477130996051870721134999999837297804995105973173281609631859502445945534690830264252230825334468503526193118817101000313783875288658753320838142061717766914730359825349042875546873115956286388235378759375195778185778053217122680661300192787661119590921642019893809525720106548586327886593615338182796823030195203530185296899577362259941389124972177528347913151557485724245415069595082953311686172785588907509838175463746493931925506040092770167113900984882401285836160356370766010471018194295559619894676783744944825537977472684710404753464620804668425906949129331367702898915210475216205696602405803815019351125338243003558764024749647326391419927260426992279678235478163600934172164121992458631503028618297455570674983850549458858692699569092721079750930295532116534498720275596023648066549911988183479775356636980742654252786255181841757467289097777279380008164706001614524919217321721477235014144197356854816136115735255213347574184946843852332390739414333454776241686251898356948556209921922218427255025425688767179049460165346680498862723279178608578438382796797668145410095388378636095068006422512520511739298489608412848862694560424196528502221066118630674427862203919494504712371378696095636437191728746776465757396241389086583264599581339047802759009946576407895126946839835259570982582262052248940772671947826848260147699090264013639443745530506820349625245174939965143142980919065925093722169646151570985838741059788595977297549893016175392846813826868386894277415599185592524595395943104997252468084598727364469584865383673622262609912460805124388439045124413654976278079771569143599770012961608944169486855584840635342207222582848864815845602850601684273945226746767889525213852254995466672782398645659611635488623057745649803559363456817432411251507606947945109659609402522887971089314566913686722874894056010150330861792868092087476091782493858;
        `
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