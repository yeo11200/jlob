(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{60:function(e,t,a){e.exports=a(92)},65:function(e,t,a){},66:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},67:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),o=a.n(r),c=(a(65),a(66),a(67),a(18)),i=a(19),s=a(20),m=a(23),u=a(22),p=a(106),h=a(120),g=a(108),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e={link:{color:"red",alignItmes:"center",flexDirection:"column"}};return console.log(e),l.a.createElement(p.a,{position:"static"},l.a.createElement(h.a,{"aria-label":"simple tabs example"},l.a.createElement(c.b,{to:"/test",style:e.link},l.a.createElement(g.a,{label:"\uc774\ub825\uc11c"})),l.a.createElement(c.b,{to:"/test2",style:e.link},l.a.createElement(g.a,{label:"\ube14\ub85c\uadf8 \uae30\uc220\uc2a4\ud399"})),l.a.createElement(c.b,{to:"/test3",style:e.link},l.a.createElement(g.a,{label:"\ucc44\ud305"}))))}}]),a}(l.a.Component),d=a(6),f=a(36),v=a.n(f),b=a(51),y=a(52),w=a.n(y),j=a(109),k=a(110),O=a(111),x=a(112),_=a(113),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j.a,null,l.a.createElement(k.a,null,l.a.createElement(O.a,{component:"img",alt:"Contemplative Reptile",height:"50",width:"100",image:"/react/public/LOGO.png",title:"Contemplative Reptile"}),l.a.createElement(x.a,null,l.a.createElement(_.a,{gutterBottom:!0,variant:"h5",component:"h2"},"\uc2e0\uc9c4\uc12d"),l.a.createElement(_.a,{variant:"body2",color:"textSecondary",component:"p"},"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica")))),l.a.createElement("div",null,l.a.createElement("span",null,"Blog : "),l.a.createElement("a",{href:"https://blog.naver.com/sksksms2"},"https://blog.naver.com/sksksms2")),l.a.createElement("div",null,l.a.createElement("span",null,"GitHub : "),l.a.createElement("a",{href:"https://github.com/yeo11200"},"https://github.com/yeo11200")),l.a.createElement("div",null,l.a.createElement("span",null,"Contact : "),l.a.createElement("a",{href:"mailto:yeo11200@hanmail.net"},"yeo11200@hanmail.net")))}}]),a}(l.a.Component),D=(a(91),a(114)),T=a(53),L=a(115),M=a(116),S=a(117),B=a(118),I=a(119),R=window.location.host.indexOf("localhost")>=0?"//localhost:5000":"https://jinseop-todo-list.herokuapp.com";function A(e){return null==e?"Now":e.split("T")[0]}function G(e){console.log(arguments)}function H(e){var t=e.split(",");console.log(t);var a="";for(var n in t)console.log(t[n]),a+="<li>"+t[n]+"</li>";return a}var J=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getProfileData=Object(b.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,w.a.get(R+"/profile").then((function(e){var a=e.data,l=a.status;if(n.setState({resposnseCode:a.status}),console.log(l),200===l){var r=a.data.carrer;for(var o in r)console.log(r[o]),t.push({idx:r[o].mc_idx,start:r[o].mc_startdate,end:r[o].mc_enddate});n.setState({itemsList:r}),G(t)}else n.setState({itemsList:[]})}));case 3:case"end":return e.stop()}}),e)}))),n.createData=function(e,t,a,n,l){return{name:e,calories:t,fat:a,carbs:n,protein:l}},n.goToView=function(e){console.log(e)},n.state={itemsList:[],resposnseCode:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){console.log(1),this.getProfileData()}},{key:"render",value:function(){var e=this,t=this.state,a=t.itemsList;t.resposnseCode;return l.a.createElement("div",null,l.a.createElement("h2",null,"\uc774\ub825\uc11c"),l.a.createElement(C,null),l.a.createElement("div",null,l.a.createElement("h2",null,"\uacbd\ub825\uc0ac\ud56d")," ",l.a.createElement("div",{style:{textAlign:"right"}},"\ucd1d\uacbd\ub825 : ",function(){var e=["2019-01-01","2019-05-31"],t=new Date(e[1]),a=new Date(e[0]),n=new Date,l=new Date("2019-07-17"),r=(t.getTime()-a.getTime())/2592e6,o=(n.getTime()-l.getTime())/2592e6,c=Math.ceil(r+o),i=null;if(c>13){var s=Math.floor(c/12);i=Math.floor(c/12)+"\ub144"+c%(12*s)+"\uac1c\uc6d4"}else i=c+"\uac1c\uc6d4";return i}()),l.a.createElement(D.a,{component:T.a},l.a.createElement(L.a,{"aria-label":"simple table"},l.a.createElement(M.a,null,l.a.createElement(S.a,null,l.a.createElement(B.a,null,"\ud68c\uc0ac\uba85 "),l.a.createElement(B.a,{align:"right"},"\uc9c1\uad70"),l.a.createElement(B.a,{align:"right"},"\ud504\ub85c\uc81d\ud2b8"),l.a.createElement(B.a,{align:"right"},"\uc785\uc0ac \uc77c"),l.a.createElement(B.a,{align:"right"},"\uc885\ub8cc \uc77c"))),l.a.createElement(I.a,null,a.map((function(t,a){return l.a.createElement(S.a,{key:t.mc_compony,onClick:function(){return e.goToView(t.mc_compony)}},l.a.createElement(B.a,{component:"th",scope:"rows"},t.mc_compony),l.a.createElement(B.a,{align:"right"},t.mc_position),l.a.createElement(B.a,{align:"right"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:H(t.mc_project_name)}})),l.a.createElement(B.a,{align:"right"},A(t.mc_startdate)),l.a.createElement(B.a,{align:"right"},A(t.mc_enddate)))})))))))}}]),a}(l.a.Component),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return console.log("Index"),l.a.createElement("div",null,l.a.createElement(d.a,{path:"/test",render:function(){return l.a.createElement("h3",null,"Render Test")}}),l.a.createElement(d.a,{path:"/test2",component:J}))}}]),a}(l.a.Component);var P=function(){return l.a.createElement(c.a,{className:"container",basename:"/jlob"},l.a.createElement(E,null),l.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(c.a,{basename:"/jlob"},l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.ab39d06d.chunk.js.map