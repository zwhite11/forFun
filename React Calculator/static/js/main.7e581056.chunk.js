(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(40)},29:function(e,t,a){},30:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},31:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(20),s=a.n(i),r=(a(29),a(30),a(31),a(7)),c=a(8),u=a(11),o=a(9),d=a(4),h=a(10),m=a(39),v="",p=[],b="",O=[],g=!1,k=function(){function e(){Object(r.a)(this,e),v="0",p=[],b="",O=[],g=!1}return Object(c.a)(e,[{key:"getCurrentValue",value:function(){return v}},{key:"getExpression",value:function(){return p}},{key:"getResult",value:function(){return b}},{key:"enterDigit",value:function(e){if("0"==v)v=e;else{if(g)return v=e,void(g=!1);v+=e}}},{key:"clear",value:function(){""!==v&&("0"==v&&(this.deactiveButton(),p=[],O=[]),v="0")}},{key:"percentage",value:function(){v=m.evaluate(v+" / 100")}},{key:"decimal",value:function(){"."!==v.charAt(v.length-1)&&(v+=".")}},{key:"plusMinus",value:function(){"0"!==v&&(v="-"===v.charAt(0)?v.slice(1):"-"+v)}},{key:"add",value:function(){p.push(v),p.push("+"),g=!0}},{key:"subtract",value:function(){p.push(v),p.push("-"),g=!0}},{key:"multiply",value:function(){p.push(v),p.push("*"),g=!0}},{key:"divide",value:function(){p.push(v),p.push("/"),g=!0}},{key:"deactiveButton",value:function(){var e=document.getElementById("keypad").querySelectorAll(".active");console.log("active: ",e.length),e.length>0&&e[0].classList.remove("active")}},{key:"equals",value:function(){if(""!==v){this.deactiveButton(),0==p.length?(O.unshift(v),p=O,O=[]):(p.push(v),O=[]);var e=p.join(" ");b=m.evaluate(e).toString(),v=b;var t=p.length;O.push(p[t-2]),O.push(p[t-1]),p=[],g=!1}}}]),e}(),y=function(e){return l.a.createElement("div",{className:"mx-auto w-25"},l.a.createElement("div",{className:"display text-right pr-2 display-4 d-none d-lg-block pt-4"},e.value))};y.defaultProps={expression:"",value:"0"};var E=y,f=a(2),C=a.n(f),N=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).handleOnNumber=function(e){a.props.onNumber(e.target.value)},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"keypad container w-25",id:"keypad"},l.a.createElement("div",{className:"key-row row"},l.a.createElement(C.a,{className:"col btn-secondary",id:"clearButton",value:"clear",onClick:this.props.onClear},"AC"),l.a.createElement(C.a,{className:"col btn-secondary",value:"plusMinus",onClick:this.props.onPlusMinus},"+/-"),l.a.createElement(C.a,{className:"col btn-secondary",value:"percentage",onClick:this.props.onPercentage},"%"),l.a.createElement(C.a,{className:"col btn-warning",id:"divide",value:"divide",onClick:this.props.onDivide},"/")),l.a.createElement("div",{className:"key-row row"},l.a.createElement(C.a,{className:"col btn-dark",value:"7",onClick:this.handleOnNumber},"7"),l.a.createElement(C.a,{className:"col btn-dark",value:"8",onClick:this.handleOnNumber},"8"),l.a.createElement(C.a,{className:"col btn-dark",value:"9",onClick:this.handleOnNumber},"9"),l.a.createElement(C.a,{className:"col btn-warning",id:"multiply",value:"multiply",onClick:this.props.onMultiply},"*")),l.a.createElement("div",{className:"key-row row"},l.a.createElement(C.a,{className:"col btn-dark",value:"4",onClick:this.handleOnNumber},"4"),l.a.createElement(C.a,{className:"col btn-dark",value:"5",onClick:this.handleOnNumber},"5"),l.a.createElement(C.a,{className:"col btn-dark",value:"6",onClick:this.handleOnNumber},"6"),l.a.createElement(C.a,{className:"col btn-warning",id:"subtract",value:"subtract",onClick:this.props.onSubtract},"-")),l.a.createElement("div",{className:"key-row row"},l.a.createElement(C.a,{className:"col btn-dark",value:"1",onClick:this.handleOnNumber},"1"),l.a.createElement(C.a,{className:"col btn-dark",value:"2",onClick:this.handleOnNumber},"2"),l.a.createElement(C.a,{className:"col btn-dark",value:"3",onClick:this.handleOnNumber},"3"),l.a.createElement(C.a,{className:"col btn-warning",id:"add",value:"add",onClick:this.props.onAdd},"+")),l.a.createElement("div",{className:"key-row row "},l.a.createElement(C.a,{className:"col-6 btn-dark",value:"0",onClick:this.handleOnNumber},"0"),l.a.createElement(C.a,{className:"col-3 btn-dark",value:".",onClick:this.props.onDecimal},"."),l.a.createElement(C.a,{className:"col-3 btn-warning",value:"=",onClick:this.props.onEquals},"=")))}}]),t}(l.a.Component),w=new k,x=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={expression:[],value:"0"},a.handleOnNumber=a.handleOnNumber.bind(Object(d.a)(a)),a.handleOnClear=a.handleOnClear.bind(Object(d.a)(a)),a.handleOnPlusMinus=a.handleOnPlusMinus.bind(Object(d.a)(a)),a.handleOnPercentage=a.handleOnPercentage.bind(Object(d.a)(a)),a.handleOnDivide=a.handleOnDivide.bind(Object(d.a)(a)),a.handleOnMultiply=a.handleOnMultiply.bind(Object(d.a)(a)),a.handleOnSubtract=a.handleOnSubtract.bind(Object(d.a)(a)),a.handleOnAdd=a.handleOnAdd.bind(Object(d.a)(a)),a.handleOnDecimal=a.handleOnDecimal.bind(Object(d.a)(a)),a.handleOnEquals=a.handleOnEquals.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleOnDecimal",value:function(){w.decimal(),this.setState({expression:w.getExpression(),value:w.getCurrentValue().toString()})}},{key:"handleOnPercentage",value:function(){w.percentage(),this.setState({expression:w.getExpression(),value:w.getCurrentValue().toString()})}},{key:"handleOnClear",value:function(){w.clear(),this.setClearType(),this.setState({expression:w.getExpression(),value:w.getCurrentValue().toString()})}},{key:"setClearType",value:function(){var e=document.getElementById("clearButton");"0"==w.getCurrentValue()?e.textContent="AC":e.textContent="C"}},{key:"handleOnNumber",value:function(e){w.enterDigit(e),this.setState({value:w.getCurrentValue()}),this.setClearType()}},{key:"handleOnAdd",value:function(){w.add(),this.setState({expression:w.getExpression(),value:w.getCurrentValue().toString()}),document.getElementById("add").classList.add("active")}},{key:"handleOnSubtract",value:function(){w.subtract(),this.setState({expression:w.getExpression(),value:w.getCurrentValue().toString()}),document.getElementById("subtract").classList.add("active")}},{key:"handleOnPlusMinus",value:function(){w.plusMinus(),this.setState({expression:w.getExpression(),value:w.getCurrentValue().toString()})}},{key:"handleOnMultiply",value:function(){w.multiply(),this.setState({expression:w.getExpression(),value:w.getCurrentValue().toString()}),document.getElementById("multiply").classList.add("active")}},{key:"handleOnDivide",value:function(){w.divide(),this.setState({expression:w.getExpression(),value:w.getCurrentValue().toString()}),document.getElementById("divide").classList.add("active")}},{key:"handleOnEquals",value:function(){w.equals(),this.setState({expression:w.getExpression(),value:w.getCurrentValue().toString()})}},{key:"render",value:function(){return l.a.createElement("div",{className:"mx-auto"},l.a.createElement(E,{value:this.state.value}),l.a.createElement(N,{onNumber:this.handleOnNumber,onPlusMinus:this.handleOnPlusMinus,onAdd:this.handleOnAdd,onSubtract:this.handleOnSubtract,onPercentage:this.handleOnPercentage,onMultiply:this.handleOnMultiply,onDivide:this.handleOnDivide,onDecimal:this.handleOnDecimal,onEquals:this.handleOnEquals,onClear:this.handleOnClear}))}}]),t}(l.a.Component);var S=function(){return l.a.createElement("div",{className:"App container "},l.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.7e581056.chunk.js.map