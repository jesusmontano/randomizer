(this.webpackJsonprandomizer=this.webpackJsonprandomizer||[]).push([[0],{33:function(e,t,a){e.exports=a(45)},38:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},40:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(12),i=a.n(r),l=(a(38),a(24)),s=a(25),c=a(28),m=a(27),u=(a(39),a(40),a(72)),h=a(66),d=a(68),p=a(73),b=a(75),v=a(69),g=a(71),y=a(70),f=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){return n.setState({probability:t})},n.state={emoji:"\ud83e\udd14",probability:50,outcome:"Perhaps..."},n}return Object(s.a)(a,[{key:"generateEmoji",value:function(e,t){var a=["\ud83e\udd7a","\ud83d\udc4e","\ud83d\ude1e"],n=[];Math.floor(100*Math.random())>t?n.push.apply(n,a):n.push.apply(n,["\ud83d\udc4d","\ud83e\udd17","\ud83d\ude1b"]);var o=n[Math.floor(Math.random()*n.length)];if(e===o)return this.generateEmoji(e,t);a.includes(o)?this.setState({outcome:"No"}):this.setState({outcome:"Yes "}),this.setState({emoji:o})}},{key:"adjustProbability",value:function(e,t){console.log(e),this.setState({probability:Number(t)})}},{key:"useStyles",value:function(){return Object(h.a)({root:{maxWidth:345},media:{height:140}})}},{key:"render",value:function(){var e=this,t=this.useStyles();return o.a.createElement("div",{className:""},o.a.createElement("div",{className:"centered"},o.a.createElement(p.a,{value:this.state.probability,"aria-labelledby":"discrete-slider-always",step:1,marks:!0,valueLabelDisplay:"on",onChange:this.handleChange}),o.a.createElement(d.a,{id:"discrete-slider-always",gutterBottom:!0},"Adjust your luck above."),o.a.createElement(b.a,{className:t.root},o.a.createElement(v.a,null,o.a.createElement(y.a,{className:t.media,image:"./logo.svg",title:"Contemplative Reptile"}),o.a.createElement(g.a,null,o.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h2"},"".concat(this.state.emoji," ").concat(this.state.outcome))))),o.a.createElement(u.a,{variant:"contained",color:"primary",onClick:function(){return e.generateEmoji(e.state.emoji,e.state.probability)}},o.a.createElement("span",{role:"img","aria-label":"queston-mark"},"\u2753\u2753\u2753\u2753\u2753"))))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.d463b540.chunk.js.map