(this.webpackJsonpautocomplete=this.webpackJsonpautocomplete||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"container",(function(){return y})),n.d(r,"input",(function(){return b})),n.d(r,"predictionList",(function(){return x})),n.d(r,"prediction",(function(){return g})),n.d(r,"predictionName",(function(){return h})),n.d(r,"predictionDescription",(function(){return j})),n.d(r,"focused",(function(){return E}));var c=n(0),o=n.n(c),i=n(4),a=n.n(i),u=(n(13),n(7)),s=n(2),l=n.n(s),p=n(6),d=n(5),f=n(1),m=function(e){var t=Object(c.useState)(""),n=Object(f.a)(t,2),r=n[0],i=n[1],a=Object(c.useState)([]),s=Object(f.a)(a,2),m=s[0],y=s[1],b=Object(c.useState)(-1),x=Object(f.a)(b,2),g=x[0],h=x[1],j=Object(c.useState)({}),E=Object(f.a)(j,2),O=E[0],v=E[1],k=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://coding-challenge.echoandapex.com/locations?q=".concat(r));case 2:return t=e.sent,e.next=5,t.json();case 5:(n=e.sent).predictions.forEach((function(e){y([].concat(Object(p.a)(n.predictions),[e]))}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){y([]),h(-1),k()}),[r]),o.a.createElement("div",{style:e.style.container},o.a.createElement("input",{style:e.style.input,value:r,onChange:function(e){i(e.target.value)},onKeyDown:function(e){40===e.keyCode&&g<m.length-1&&(v(m[g+1]),h(g+1)),38===e.keyCode&&g>-1&&(v(m[g-1]),h(g-1)),13===e.keyCode&&g>-1&&i(O.name)}}),o.a.createElement("ul",{style:e.style.predictionList},m.map((function(t,n){return o.a.createElement("li",{key:n,style:g===n?Object(u.a)({},e.style.prediction,{},e.style.focused):e.style.prediction,onMouseEnter:function(){h(n),v(t)},onMouseLeave:function(){h(-1),v({})},onClick:function(){return i(O.name)}},o.a.createElement("p",{style:e.style.predictionName},t.name),o.a.createElement("p",{style:e.style.predictionDescription},t.description))}))))},y={display:"flex",flexDirection:"column",alignItems:"center",marginTop:"50px"},b={width:"350px",border:"solid 1px grey",borderRadius:"5px",padding:"10px 5px",outline:"none"},x={listStyleType:"none",margin:0,padding:0},g={minWidth:"350px",borderBottom:"solid 1px #bfbfbf",cursor:"pointer",transition:"0.2s"},h={margin:"3px 0"},j={margin:"3px 0",fontSize:"8pt",color:"#666666"},E={background:"#f2f2f2"},O=function(){return o.a.createElement(c.Fragment,null,o.a.createElement(m,{style:r}))};a.a.render(o.a.createElement(O,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.1e561dad.chunk.js.map