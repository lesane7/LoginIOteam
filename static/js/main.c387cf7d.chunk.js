(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/login.0a23bef2.jpg"},,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),s=(a(14),a(1)),l=a(2),o=a(4),m=a(3),u=a(5),d=(a(15),a(16),a(6)),h=a.n(d),g=function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"base-container",ref:this.props.containerRef},r.a.createElement("div",{className:"header"},"Login"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:h.a})),r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username "),r.a.createElement("input",{type:"text",name:"username",placeholder:"username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password "),r.a.createElement("input",{type:"text",name:"password",placeholder:"password"})))),r.a.createElement("div",{className:"footer"},r.a.createElement("button",{type:"button",className:"btn"},"Login")))}}]),t}(r.a.Component),p=function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"base-container",ref:this.props.containerRef},r.a.createElement("div",{className:"header"},"Register"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:h.a})),r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",name:"username",placeholder:"username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",placeholder:"email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"text",name:"password",placeholder:"password"})))),r.a.createElement("div",{className:"footer"},r.a.createElement("button",{type:"button",className:"btn"},"Register")))}}]),t}(r.a.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={isLogginActive:!0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.rightSide.classList.add("right")}},{key:"changeState",value:function(){this.state.isLogginActive?(this.rightSide.classList.remove("right"),this.rightSide.classList.add("left")):(this.rightSide.classList.remove("left"),this.rightSide.classList.add("right")),this.setState((function(e){return{isLogginActive:!e.isLogginActive}}))}},{key:"render",value:function(){var e=this,t=this.state.isLogginActive,a=t?"Register":"Login",n=t?"login":"register";return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"container",ref:function(t){return e.container=t}},t&&r.a.createElement(g,{containerRef:function(t){return e.current=t}}),!t&&r.a.createElement(p,{containerRef:function(t){return e.current=t}})),r.a.createElement(v,{current:a,currentActive:n,containerRef:function(t){return e.rightSide=t},onClick:this.changeState.bind(this)})))}}]),t}(r.a.Component),v=function(e){return r.a.createElement("div",{className:"right-side",ref:e.containerRef,onClick:e.onClick},r.a.createElement("div",{className:"inner-container"},r.a.createElement("div",{className:"text"},e.current)))},E=f;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.c387cf7d.chunk.js.map