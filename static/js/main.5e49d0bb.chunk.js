(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},161:function(e,t){},164:function(e,t,a){e.exports=a.p+"static/media/LOGO.6bc3212c.png"},165:function(e,t,a){},166:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(28),r=a.n(l),c=(a(102),a(59),a(103),a(16)),s=a(11),i=a(12),m=a(14),u=a(13),d=a(178),p=a(194),h=a(179),g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e={link:{color:"#CC6666",alignItmes:"center",flexDirection:"column"}};return console.log(e),o.a.createElement(d.a,{position:"static"},o.a.createElement(p.a,{"aria-label":"simple tabs example"},o.a.createElement(c.b,{exact:!0,to:"/",style:e.link},o.a.createElement(h.a,{label:"\uba54\uc778"})),o.a.createElement(c.b,{exact:!0,to:"/test",style:e.link},o.a.createElement(h.a,{label:"\ube14\ub85c\uadf8 \uac1c\ubc1c"})),o.a.createElement(c.b,{exact:!0,to:"/test2",style:e.link},o.a.createElement(h.a,{label:"\uc774\ub825\uc11c"})),o.a.createElement(c.b,{to:"/test3",style:e.link},o.a.createElement(h.a,{label:"\ucc44\ud305"}))))}}]),a}(o.a.Component),f=a(6),v=a(31),E=a.n(v),b=a(42),k=a(35),y=a.n(k),w=a(180),j=a(181),C=window.location.host.indexOf("localhost")>=0?"//localhost:5000":"https://jinseop-todo-list.herokuapp.com";function x(e){return null==e?"Now":e.split("T")[0]}function S(e){var t=[];for(var a in e){var n=new Date(e[a].start),o=null==e[a].end?new Date:new Date(e[a].end),l=(n.getTime()-o.getTime())/2592e6;console.log(l),t.push({idx:e[a].idx,month:l})}var r=null;for(var c in t)r-=t[c].month;var s=Math.ceil(r),i=null;if(s>13){var m=Math.floor(s/12);i=Math.floor(s/12)+"\ub144"+s%(12*m)+"\uac1c\uc6d4"}else i=s+"\uac1c\uc6d4";return i}function O(e){var t="<span>\uae30\uc220 \uc2a4\ud399 : </span><div>";if(console.log(e),void 0!==e){var a=e.split(",");for(var n in a)console.log(a[n]),t+="<span>"+a[n]+"</span>"}else t+="<span>"+e+"</span>";return t+="</div>"}var N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSearch=function(e){console.log(e)},console.log("props111"),console.log(e),n}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(w.a,{key:this.props.row.mc_compony},o.a.createElement(j.a,{component:"th",scope:"rows"},this.props.row.mc_compony),o.a.createElement(j.a,{align:"center"},o.a.createElement(c.b,{to:"/test2/dita?id=".concat(this.props.row.mc_idx),style:{textDecoration:"none"}},this.props.row.mc_position)),o.a.createElement(j.a,{align:"right"},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:O(this.props.row.mc_project_name)}})),o.a.createElement(j.a,{align:"right"},x(this.props.row.mc_startdate)),o.a.createElement(j.a,{align:"right"},x(this.props.row.mc_enddate)))}}]),a}(o.a.Component),_=(a(125),a(182)),L=a(88),D=a(183),M=a(184),R=a(185),P=a(186),B=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getProfileData=Object(b.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,y.a.get(C+"/profile").then((function(e){var a=e.data,o=a.status;if(n.setState({resposnseCode:a.status}),console.log(o),200===o){var l=a.data.carrer;for(var r in l)console.log(l[r]),t.push({idx:l[r].mc_idx,start:l[r].mc_startdate,end:l[r].mc_enddate});var c=S(t);n.setState({itemsList:l,date:c}),S(t)}else n.setState({itemsList:[]})}));case 3:case"end":return e.stop()}}),e)}))),n.fileChange=function(e){console.log(1),console.log(e.target.files[0]),this.setState({setfile:e.target.files[0]})},n.testPost=function(){var e=new FormData;e.append("file",this.state.setfile),y.a.post(C+"/profile",e).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},console.log(e),n.state={itemsList:[],resposnseCode:null},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log(1),this.getProfileData()}},{key:"render",value:function(){var e=this,t=this.state,a=t.itemsList,n=(t.resposnseCode,t.date);return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h2",null,"\uacbd\ub825\uc0ac\ud56d")," ",o.a.createElement("div",{style:{textAlign:"right"}},"\ucd1d\uacbd\ub825 : ",n),o.a.createElement(_.a,{component:L.a},o.a.createElement(D.a,{"aria-label":"simple table"},o.a.createElement(M.a,null,o.a.createElement(w.a,null,o.a.createElement(j.a,null,"\ud68c\uc0ac\uba85 "),o.a.createElement(j.a,{align:"center"},"\uc9c1\uad70"),o.a.createElement(j.a,{align:"right"},"\ud504\ub85c\uc81d\ud2b8"),o.a.createElement(j.a,{align:"right"},"\uc785\uc0ac \uc77c"),o.a.createElement(j.a,{align:"right"},"\uc885\ub8cc \uc77c"))),o.a.createElement(R.a,null,0==this.state.itemsList.length?o.a.createElement(P.a,{color:"secondary"}):a.map((function(t,a){return o.a.createElement(N,{key:t.mc_idx,row:t,onRemove:e.handleRemove,onSelectRow:e.handleSelectRow})}))))),o.a.createElement("input",{type:"file",onChange:function(t){return e.fileChange(t)}}),o.a.createElement("button",{onClick:function(){return e.testPost()}},"\ud14c\uc2a4\ud2b8")))}}]),a}(o.a.Component),I=a(53),T=a.n(I),W=a(193),F=a(36),H=a.n(F),A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).getProfileData=Object(b.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,y.a.get(C+"/profile/"+n.state.idx).then((function(e){var a=e.data,o=a.status;if(n.setState({resposnseCode:a.status}),200===o){var l=a.data.view,r=a.data.title;console.error(r),t.push({idx:r.mc_idx,start:r.mc_startdate,end:r.mc_enddate}),console.log(l),n.setState({itemsList:l,title:r,date:S(t)})}else n.setState({itemsList:[]})}));case 3:case"end":return e.stop()}}),e)}))),n.paperCustom=function(e,t){console.log(H()(".ui-"+e)),console.log(t),H()(".MuiPaper-root").removeClass("MuiPaper-elevation3"),e!==n.state.dataSet?(n.setState({dataSet:e}),H()(".ui-"+e).addClass("MuiPaper-elevation3")):n.setState({dataSet:null})};var o=T.a.parse(e.location.search);return console.log("detail",o),console.log(e),n.state={idx:o.id,itemsList:[],resposnseCode:null,title:{},date:null,dataSet:null},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getProfileData()}},{key:"render",value:function(){var e=this,t=this.state,a=t.itemsList,n=t.resposnseCode,l=t.title,r=t.date;return console.log(this.state.dataSet),o.a.createElement("div",null,o.a.createElement(W.a,{component:"div",m:1},l.mc_compony," ",o.a.createElement("span",null,r)),null==n?o.a.createElement(P.a,{color:"secondary"}):a.map((function(t,n){return o.a.createElement(L.a,{elevation:1,className:"ui-".concat(n)+(e.state.dataSet===n?" on":""),onClick:function(){return e.paperCustom(n,a)},color:"secondary.main"},o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("span",null,"\ud504\ub85c\uc81d\ud2b8 \uba85 : "),t.pro_content),o.a.createElement("div",null,o.a.createElement("span",null,"\ud504\ub85c\uc81d\ud2b8 \uc2dc\uc791\uc77c : "),x(t.pro_start_date)),o.a.createElement("div",null,o.a.createElement("span",null,"\ud504\ub85c\uc81d\ud2b8 \uc885\ub8cc\uc77c: "),x(t.pro_end_date)),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:O(t.pro_skill_set)}})))})))}}]),a}(o.a.Component),G=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,"\uba54\uc778\ud654\uba74")}}]),a}(o.a.Component),J=a(87),U=a.n(J),K=a(53),$=U.a.connect(C),q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).commentSend=function(){var e=n.messageContent.current.value,t=n.messageName.current.value;if(n.setState({message:e,name:t}),0!=t.length)if(e.length>0)if(e.includes("\ud1f4\uc7a5")){if(window.confirm("\uc9c4\uc9dc \ud1f4\uc7a5\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"))$.emit("client disconnect","aaaa");else{a={room:n.state.roomName,nickname:n.state.name,message:e};console.log(n.state.roomName),$.emit("chat message1",a)}}else{var a={room:n.state.roomName,nickname:n.state.name,message:e};$.emit("chat message1",a)}else alert("\ucc44\ud305\uc744 \uc785\ub825\ud558\uc138\uc694.")},n.onTodoChange=function(e){n.setState({name:e})},n.messageName=o.a.createRef(),n.messageContent=o.a.createRef(),n.roomName=o.a.createRef(),n.keyDownFuc=function(e,t){"nick"==t?13==e.keyCode&&n.nicknameSend():"room"==t&&13==e.keyCode&&n.submitRoomName()},n.submitRoomName=function(){var e=""==n.roomName.current.value?"":n.roomName.current.value,t=n.messageName.current.value,a=n.state.messageList;if(e.length>0){var o={mUid:1,roomName:e,nickname:t};if(0==t.length)return;n.state.roomName!=e&&n.state.nickname!=t&&($.emit("create room",o),$.on("join room",(function(t){a.push({nickname:"join",content:t.message}),t.status,document.getElementById("content").style.display="block",n.setState({status:!0,roomStatus:!0,roomName:e,messageList:a})})))}else alert("\ubc29 \uc815\ubcf4\ub97c \uc785\ub825\ud558\uc138\uc694")},n.levalRoom=function(){var e=n.state.messageList;console.log(n.state),""!=n.state.roomName&&(console.log(111),$.emit("client disconnect",n.state)),$.on("client disconnect2",(function(t){e.push({nickname:t.status,content:t.msg}),n.setState({status:!1,roomStatus:!1,roomName:"",messageList:e})}))},console.log(e.match),console.log(K.parse(window.location.search)),console.log(Math.round(1e3*Math.random())),n.state={name:"",message:"",messageList:[],status:!1,roomName:"",roomStatus:!1,clientId:Math.round(1e3*Math.random())},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){var e=this,t=this.state.messageList;$.on("chat message2",(function(a){e.messageContent.current.value="",t.push({nickname:a.nickname,content:a.message}),e.setState({messageList:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.messageList,l=t.status,r=t.roomStatus;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("ul",null,n.length>0?n.map((function(e,t){return o.a.createElement("li",{className:e.nickname==a?"right":"left"},e.nickname," : ",e.content)})):o.a.createElement("li",null,"send ing"))),o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){e.levalRoom()}},"\ub098\uac00\uae30")),o.a.createElement("div",null,o.a.createElement("input",{ref:this.roomName,disabled:!!r&&"disabled",onKeyDown:function(t){e.keyDownFuc(t,"room")},placeholder:"\ubc29\uc815\ubcf4\ub97c \ub4f1\ub85d\ud574\uc8fc\uc138\uc694"})),o.a.createElement("div",null,o.a.createElement("input",{ref:this.messageName,disabled:!!l&&"disabled",value:a,placeholder:"\ub2c9\ub124\uc784 \ub4f1\ub85d\ud574\uc8fc\uc138\uc694",onChange:function(t){return e.onTodoChange(t.target.value)}}),o.a.createElement("button",{onClick:function(){e.submitRoomName()}},"\ub2c9\ub124\uc784 \ub4f1\ub85d"))),o.a.createElement("div",{style:{display:"none"},id:"content"},o.a.createElement("textarea",{ref:this.messageContent}),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){e.commentSend()}},"Send"))))}},{key:"componentWillUnmount",value:function(){$.emit("client disconnect","aaaa")}}]),a}(o.a.Component),z=a(187),Q=a(188),V=a(189),X=a(190),Y=a(191),Z=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),a=t.call(this,e),console.log(window.location.origin),a}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(z.a,null,o.a.createElement(Q.a,null,o.a.createElement(V.a,{component:"img",alt:"Contemplative Reptile",height:"100px",width:"100px",image:a(164),title:"Contemplative Reptile",style:{width:"auto",height:"auto",maxWidth:"100px",maxHeight:"100px",border:"none",margin:"0",padding:"0",display:"inline"}}),o.a.createElement(X.a,null,o.a.createElement(Y.a,{gutterBottom:!0,variant:"h5",component:"h2"},"\uc2e0\uc9c4\uc12d"),o.a.createElement(Y.a,{variant:"body2",color:"textSecondary",component:"p"},"\ud504\ub860\ud2b8\uac1c\ubc1c\uc790\ub97c \uc9c0\ud5a5\ud558\uc9c0\ub9cc, \ud480\uc2a4\ud0dd \uac1c\ubc1c\uc744 \uc6d0\ud55c\ub2e4.")))),o.a.createElement("dl",null,o.a.createElement("dt",{className:"blog"},"Blog : "),o.a.createElement("dd",null,o.a.createElement("a",{href:"https://blog.naver.com/sksksms2",target:"_blank"},"https://blog.naver.com/sksksms2")),o.a.createElement("dt",{className:"github"},"Git : "),o.a.createElement("dd",null,o.a.createElement("a",{href:"https://github.com/yeo11200",target:"_blank"},"https://github.com/yeo11200")),o.a.createElement("dt",{className:"email"},"Email : "),o.a.createElement("dd",null,o.a.createElement("a",{href:"mailto:yeo11200@hanmail.net"},"yeo11200@hanmail.net"))))}}]),n}(o.a.Component),ee=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return console.log("Index"),o.a.createElement("div",null,o.a.createElement(Z,null),o.a.createElement(f.a,{path:"/test",render:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"blog-info"},o.a.createElement("dl",null,o.a.createElement("dd",null,e.props.name),o.a.createElement("dd",null,"React"),o.a.createElement("dd",null,"Express"),o.a.createElement("dd",null,"FireBase"),o.a.createElement("dd",null,"MariaDB"),o.a.createElement("dd",null,"AWS RDS"),o.a.createElement("dd",null,"Git Hub"),o.a.createElement("dd",null,"material-ui"),o.a.createElement("dd",null,"AWS S3"))),o.a.createElement("div",{className:"blog-connenct"}))}}),o.a.createElement(f.a,{exact:!0,path:"/",component:G}),o.a.createElement(f.a,{exact:!0,path:"/test2",component:B}),o.a.createElement(f.a,{exact:!0,path:"/test3",component:q}),o.a.createElement(f.a,{path:"/test2/dita",component:A}))}}]),a}(o.a.Component);a(165);var te=function(){return o.a.createElement(c.a,{className:"container",basename:"/jlob"},o.a.createElement(g,null),o.a.createElement(ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(c.a,{basename:"/jlob"},o.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},97:function(e,t,a){e.exports=a(166)}},[[97,1,2]]]);
//# sourceMappingURL=main.5e49d0bb.chunk.js.map