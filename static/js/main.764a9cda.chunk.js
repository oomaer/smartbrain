(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/ai.a6bcaa58.png"},27:function(e,t,a){e.exports=a(75)},32:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(11),r=a.n(i),o=(a(32),a(19)),l=a(20),s=a(25),m=a(21),u=a(26),p=a(22),d=a.n(p),g=function(){return c.a.createElement("nav",{style:{display:"flex",justifyContent:"right"}},c.a.createElement("p",{className:"pa3 link dim black pointer "},"Sign Out"))},f=function(e){var t=e.AgeDetect;return c.a.createElement("div",{className:"center"},c.a.createElement("div",{className:"f1 h1 center grow "},t))},v=function(e){var t=e.GenderDetect;return c.a.createElement("div",{className:"center"},c.a.createElement("div",{className:"f1 h1 center grow pa4"},t))},E=function(e){var t=e.RegionDetect;return c.a.createElement("div",{className:"center"},c.a.createElement("div",{className:"f1 h1 center grow pa3"},t))},h=function(e){var t=e.imgURL;return c.a.createElement("div",{className:"center"},c.a.createElement("div",{className:"mt3"},c.a.createElement("img",{alt:"",src:t,width:"500px",height:"auto"})))},w=(a(36),a(23)),D=a.n(w),N=(a(37),a(24)),b=a.n(N),C=function(){return c.a.createElement("div",{className:" ma4 mt0"},c.a.createElement(D.a,{className:"Tilt br2 shadow-2",options:{max:45},style:{height:150,width:150}},c.a.createElement("div",{className:"Tilt-inner"}," ",c.a.createElement("img",{alt:"Logo",src:b.a})," ")))},k=(a(38),function(e){var t=e.onInputChange,a=e.onClickEvent;return c.a.createElement("div",{className:"f3"},c.a.createElement("p",null,"This App Will Try To Detect Age , Gender and Region of Image , Give It a Try"," "),c.a.createElement("div",{className:"center"},c.a.createElement("div",{className:"form center br3 pa4 shadow-5"},c.a.createElement("input",{className:"w-70 f4 pa2 center",type:"text",onChange:t}),c.a.createElement("button",{className:"w-30 ph3 pv2 dib f4 grow link",onClick:a},"Detect"))))}),R=a(7),y=a.n(R),A=new y.a.App({apiKey:"cac51409614642bcadcc5350b86fc1c5"}),O={particles:{number:{value:150,density:{enable:!0,value_area:1e3}},size:{value:3.9},move:{speed:12.6}}},I=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).onInputChange=function(t){e.setState({input:t.target.value})},e.onClickEvent=function(){e.setState({imgURL:e.state.input}),A.models.predict(y.a.DEMOGRAPHICS_MODEL,e.state.input).then(function(t){var a=t.outputs[0].data.regions[0].data.face.age_appearance.concepts[0].name;e.setState({AgeDetect:a})},function(e){}),A.models.predict(y.a.DEMOGRAPHICS_MODEL,e.state.input).then(function(t){var a=t.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].name;e.setState({GenderDetect:a})},function(e){}),A.models.predict(y.a.DEMOGRAPHICS_MODEL,e.state.input).then(function(t){var a=t.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[0].name;e.setState({RegionDetect:a})},function(e){})},e.state={input:"",imgURL:"",AgeDetect:"",GenderDetect:"",RegionDetect:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){document.title="Artificial Intelligence"}},{key:"render",value:function(){return console.log(this.state),c.a.createElement("div",{className:"App"},c.a.createElement(d.a,{className:"particles",params:O}),c.a.createElement(g,null),c.a.createElement(C,null),c.a.createElement(k,{onInputChange:this.onInputChange,onClickEvent:this.onClickEvent}),c.a.createElement(h,{imgURL:this.state.imgURL}),c.a.createElement(f,{AgeDetect:this.state.AgeDetect}),c.a.createElement(v,{GenderDetect:this.state.GenderDetect}),c.a.createElement(E,{RegionDetect:this.state.RegionDetect}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(74);r.a.render(c.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.764a9cda.chunk.js.map