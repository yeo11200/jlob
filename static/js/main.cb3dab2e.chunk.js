(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},163:function(e,t){},167:function(e,t,a){e.exports=a.p+"static/media/LOGO.6bc3212c.png"},168:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(30),r=a.n(o),c=(a(104),a(59),a(105),a(17)),i=a(6),s=a(7),m=a(9),u=a(8),d=a(181),h=a(197),p=a(182),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e={link:{color:"#ffffff",alignItmes:"center",flexDirection:"column"}};return console.log(e),l.a.createElement(d.a,{position:"static"},l.a.createElement(h.a,{"aria-label":"simple tabs example"},l.a.createElement(c.b,{exact:!0,to:"/",style:e.link},l.a.createElement(p.a,{label:"\uba54\uc778"})),l.a.createElement(c.b,{exact:!0,to:"/test",style:e.link},l.a.createElement(p.a,{label:"\ube14\ub85c\uadf8 \uac1c\ubc1c"})),l.a.createElement(c.b,{exact:!0,to:"/test2",style:e.link},l.a.createElement(p.a,{label:"\uc774\ub825\uc11c"})),l.a.createElement(c.b,{to:"/test3",style:e.link},l.a.createElement(p.a,{label:"\ucc44\ud305"})),l.a.createElement(c.b,{to:"/schedule",style:e.link},l.a.createElement(p.a,{label:"\uc2a4\ucf00\uc904"}))))}}]),a}(l.a.Component),g=a(10),f=a(34),b=a.n(f),E=a(43),y=a(32),k=a.n(y),j=a(183),C=a(184),M="//jinseop-todo-list.herokuapp.com";function O(e){return null==e?"Now":e.split("T")[0]}function _(e){var t=[];for(var a in e){var n=new Date(e[a].start),l=null==e[a].end?new Date:new Date(e[a].end),o=(n.getTime()-l.getTime())/2592e6;console.log(o),t.push({idx:e[a].idx,month:o})}var r=null;for(var c in t)r-=t[c].month;var i=Math.ceil(r),s=null;if(i>13){var m=Math.floor(i/12);s=Math.floor(i/12)+"\ub144"+i%(12*m)+"\uac1c\uc6d4"}else s=i+"\uac1c\uc6d4";return s}function I(e){var t="<span>\uae30\uc220 \uc2a4\ud399 : </span><div>";if(console.log(e),void 0!==e){var a=e.split(",");for(var n in a)console.log(a[n]),t+="<span>"+a[n]+"</span>"}else t+="<span>"+e+"</span>";return t+="</div>"}function S(e){var t=document.getElementById("toast");void 0!==e&&(t.classList.add("on"),t.innerText=e),setTimeout((function(){t.classList.remove("on")}),1e3)}var Y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(j.a,{key:this.props.row.mc_compony},l.a.createElement(C.a,{component:"th",scope:"rows"},this.props.row.mc_compony),l.a.createElement(C.a,{align:"center"},l.a.createElement(c.b,{to:"/test2/dita?id=".concat(this.props.row.mc_idx),style:{textDecoration:"none"}},this.props.row.mc_position)),l.a.createElement(C.a,{align:"right"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:I(this.props.row.mc_project_name)}})),l.a.createElement(C.a,{align:"right"},O(this.props.row.mc_startdate)),l.a.createElement(C.a,{align:"right"},O(this.props.row.mc_enddate)))}}]),a}(l.a.Component),x=(a(127),a(185)),D=a(90),w=a(186),N=a(187),L=a(188),B=a(189),A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getProfileData=Object(E.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,k.a.get(M+"/profile").then((function(e){var a=e.data,l=a.status;if(n.setState({resposnseCode:a.status}),200===l){var o=a.data.carrer;for(var r in o)console.log(o[r]),t.push({idx:o[r].mc_idx,start:o[r].mc_startdate,end:o[r].mc_enddate});var c=_(t);n.setState({itemsList:o,date:c}),_(t)}else n.setState({itemsList:[]})}));case 3:case"end":return e.stop()}}),e)}))),n.state={itemsList:[],resposnseCode:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getProfileData()}},{key:"render",value:function(){var e=this,t=this.state,a=t.itemsList,n=(t.resposnseCode,t.date);return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",null,"\uacbd\ub825\uc0ac\ud56d")," ",l.a.createElement("div",{style:{textAlign:"right"}},"\ucd1d\uacbd\ub825 : ",n),l.a.createElement(x.a,{component:D.a},l.a.createElement(w.a,{"aria-label":"simple table"},l.a.createElement(N.a,null,l.a.createElement(j.a,null,l.a.createElement(C.a,null,"\ud68c\uc0ac\uba85 "),l.a.createElement(C.a,{align:"center"},"\uc9c1\uad70"),l.a.createElement(C.a,{align:"right"},"\ud504\ub85c\uc81d\ud2b8"),l.a.createElement(C.a,{align:"right"},"\uc785\uc0ac \uc77c"),l.a.createElement(C.a,{align:"right"},"\uc885\ub8cc \uc77c"))),l.a.createElement(L.a,null,0==this.state.itemsList.length?l.a.createElement(B.a,{color:"secondary"}):a.map((function(t,a){return l.a.createElement(Y,{key:t.mc_idx,row:t,onRemove:e.handleRemove,onSelectRow:e.handleSelectRow})})))))))}}]),a}(l.a.Component),T=a(87),R=a.n(T),W=a(196),F=a(28),H=a.n(F),P=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).getProfileData=Object(E.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,k.a.get(M+"/profile/"+n.state.idx).then((function(e){var a=e.data,l=a.status;if(n.setState({resposnseCode:a.status}),200===l){var o=a.data.view,r=a.data.title;console.error(r),t.push({idx:r.mc_idx,start:r.mc_startdate,end:r.mc_enddate}),console.log(o),n.setState({itemsList:o,title:r,date:_(t)})}else n.setState({itemsList:[]})}));case 3:case"end":return e.stop()}}),e)}))),n.paperCustom=function(e,t){console.log(H()(".ui-"+e)),console.log(t),H()(".MuiPaper-root").removeClass("MuiPaper-elevation3"),e!==n.state.dataSet?(n.setState({dataSet:e}),H()(".ui-"+e).addClass("MuiPaper-elevation3")):n.setState({dataSet:null})};var l=R.a.parse(e.location.search);return console.log("detail",l),console.log(e),n.state={idx:l.id,itemsList:[],resposnseCode:null,title:{},date:null,dataSet:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getProfileData()}},{key:"render",value:function(){var e=this,t=this.state,a=t.itemsList,n=t.resposnseCode,o=t.title,r=t.date;return console.log(this.state.dataSet),l.a.createElement("div",null,l.a.createElement(W.a,{component:"div",m:1},o.mc_compony," ",l.a.createElement("span",null,r)),null==n?l.a.createElement(B.a,{color:"secondary"}):a.map((function(t,n){return l.a.createElement(D.a,{elevation:1,className:"ui-".concat(n)+(e.state.dataSet===n?" on":""),onClick:function(){return e.paperCustom(n,a)},color:"secondary.main"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("span",null,"\ud504\ub85c\uc81d\ud2b8 \uba85 : "),t.pro_content),l.a.createElement("div",null,l.a.createElement("span",null,"\ud504\ub85c\uc81d\ud2b8 \uc2dc\uc791\uc77c : "),O(t.pro_start_date)),l.a.createElement("div",null,l.a.createElement("span",null,"\ud504\ub85c\uc81d\ud2b8 \uc885\ub8cc\uc77c: "),O(t.pro_end_date)),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:I(t.pro_skill_set)}})))})))}}]),a}(l.a.Component),U=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"\uba54\uc778\ud654\uba74")}}]),a}(l.a.Component),Z=a(88),z=a(89),G=a.n(z).a.connect(M),J=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).back=function(){console.log(n.state.name)},n.inputChange=function(e,t){n.setState(Object(Z.a)({},e.target.name,e.target.value))},n.joinChating=function(){var e=[];if(0!=n.state.name.length&&0!=n.state.room.length){var t={mUid:n.state.uid,roomName:n.state.room,nickname:n.state.name};if(0==t.nickname.length)return;G.emit("create room",t),G.on("join room",(function(t){e.push({nickname:n.state.name,content:t.message,state:"join"}),n.setState({state:!0}),console.log(e),t.status,n.setState({messageList:e})}))}else 0==n.state.name.length?S("\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."):0==n.state.room.length&&S("\ubc29 \uc774\ub984\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.")},n.setChatting=function(){var e=H()("input[name=room]").val(),t=H()("input[name=name]").val();if(console.log(1),""!=n.state.chatText&&null!=n.state.chatText){var a={mUid:n.state.uid,roomName:e,nickname:t,message:n.state.chatText};G.emit("chat message1",a)}},n.getListReturn=function(e){var t="";return"join"===e.state?t+="<div>".concat(e.content,"</div>"):(t+='<div class="sender">'.concat(e.nickname,"</div>"),t+='<div class="message">'.concat(e.content,"</div>")),t},n.state={name:"",room:"",state:!1,chatText:"",messageList:[],uid:localStorage.getItem("TOKEN_ID")},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){var e=this;G.on("chat message2",(function(t){e.setState({chatText:""}),document.getElementById("chatInput").value="";var a=e.state.messageList;console.log(t),a.push({nickname:t.nickname,content:t.message,mUid:t.mUid}),console.log(a);var n=document.getElementById("char-list");e.setState({messageList:a});var l=n.scrollTop,o=n.scrollHeight;e.state.uid==t.mUid&&(l<o||0===l)&&(H()("#char-list").scrollTop(o),console.log(o))}))}},{key:"render",value:function(){var e=this,t={inputStype:{marginLeft:"5px"},textArea:{border:"1px solid #F18C7E"}},a=this.state,n=(a.name,a.room,a.state),o=a.chatText,r=a.messageList,c=a.uid;return l.a.createElement("div",null,l.a.createElement("div",{className:"char-input"},l.a.createElement("div",{className:(1==n?"on":"none")+" here"},l.a.createElement("input",{onChange:function(t){return e.inputChange(t,"name")},name:"name"}),l.a.createElement("input",{onChange:function(t){return e.inputChange(t,"room")},name:"room",style:t.inputStype}),l.a.createElement("button",{type:"button",className:"submit-button",onClick:function(t){return e.joinChating()}},"Join")),l.a.createElement("div",{className:"char-textarea "+(1==n?"on":"none"),style:t.textArea},l.a.createElement("textarea",{id:"chatInput",name:"chatText",onChange:function(t){return e.inputChange(t,"text")}},o),l.a.createElement("button",{type:"button",className:"submit-button"+(""==o||null==o?" off":" on"),onClick:function(t){return e.setChatting()},disabled:""==o||null==o},"Submit"))),l.a.createElement("div",{className:"char-list"},l.a.createElement("ul",{className:0!==r.length?"on":"",id:"char-list"},0===r.length?"":r.map((function(t,a){return l.a.createElement("li",{className:(c===t.mUid&&"join"!==t.state?"left":"right")+("join"===t.state&&void 0!==t.state?" center":""),dangerouslySetInnerHTML:{__html:e.getListReturn(t)}})})))),l.a.createElement("button",{onClick:this.back},"\ub4a4\ub85c\uac00\uae30"))}}]),a}(l.a.Component),K=a(19),V=a.n(K),$=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.calendarYM,n=t.today;return l.a.createElement("div",{className:"RCA-header-container"},l.a.createElement("h2",{className:"RCA-header-calendarYM RCA-header-middle"},a.format("YYYY\ub144MM\uc6d4")),l.a.createElement("h3",{className:"RCA-header-today RCA-header-middle"},n.format("YYYY-MM-DD")),l.a.createElement("ul",{className:"RCA-header-buttons RCA-header-middle"},l.a.createElement("li",{onClick:function(){e.props.moveMonth(-1)}},l.a.createElement("i",{className:"move-button left-img icon"})),l.a.createElement("li",null,"\uc774\ub3d9"),l.a.createElement("li",{onClick:function(){e.props.moveMonth(1)}},l.a.createElement("i",{className:"move-button right-img icon"}))))}}]),a}(l.a.Component),q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).dateToArray=function(e){return Array.isArray(e)?e:"string"===typeof e?e.split(","):["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0"]},n.mapArrayToDate=function(e){try{return 7!==e.length&&(console.log(new Error("dates props must be had 7 date")),e=["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0"]),e.map((function(e,t){return l.a.createElement("div",{className:function(){var e="RCA-calendar-date-component";return 0===t?e+" date-sun":6===t?e+" date-sat":e+" date-weekday"}(),key:"RCA-header-"+e},e)}))}catch(t){throw new Error("date must be string or component")}},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"RCA-calendar-date-header"},this.mapArrayToDate(this.dateToArray(this.props.dates)))}}]),a}(l.a.Component),Q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={},e.Days=function(e,t){for(var a=[],n=0;n<7;n++){var l=V()(e).add("d",n);a.push({yearMonthDayFormat:l.format("YYYY-MM-DD"),getDay:l.format("D"),isHolyDay:!1,weekIndex:t})}return a},e.mapDaysToComponents=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},o=V()(t);return e.map((function(e,t){var r="date-weekday-label";return o.isSame(e.yearMonthDayFormat,"month")?0===t?r="date-sun":6===t&&(r="date-sat"):r="date-notThisMonth",V()(e.yearMonthDayFormat).isSame(a,"day")&&(r="selected"),l.a.createElement("div",{className:"RCA-calendar-day "+r,key:"RCA-".concat(e.weekIndex,"-").concat(t,"-day"),onClick:function(){return n(e.yearMonthDayFormat)}},l.a.createElement("label",{className:"RCA-calendar-day-label"},e.getDay))}))},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"RCA-calendar-week"},this.mapDaysToComponents(this.Days(this.props.firstDayOfThisWeekformat,this.props.weekIndex),this.props.ymOfThisCalendar,this.props.selected,this.props.fn))}}]),a}(l.a.Component),X=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).Weeks=function(e,t,a){for(var n=V()(e).startOf("month"),o=n.get("d"),r=n.clone().add("d",-o),c=[],i=0;i<6;i++)c.push(l.a.createElement(Q,{key:"RCA-calendar-week-".concat(i),weekIndex:i,ymOfThisCalendar:n.format("YYYY-MM"),firstDayOfThisWeekformat:r.clone().add("d",7*i).format("YYYY-MM-DD"),selected:t,fn:a}));return c},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"RCA-calendar-container"},l.a.createElement(q,{dates:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}),this.Weeks(this.props.YM,this.props.selected,this.props.changeSelected))}}]),a}(l.a.Component),ee=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).clickFn=function(e){console.log(e)},n.moveMonth=function(e){n.setState({calendarYM:n.state.calendarYM.add(e,"M")}),console.log(n.state.calendarYM.format("YYYY-MM"));n.state.calendarYM.format("YYYY-MM")},n.changeSelected=function(e){V()(e).isSame(n.state.selected,"day")?n.props.clickFn(e):(n.setState({selected:e}),n.clickFn(e),V()(e).isBefore(n.state.calendarYM,"month")?n.moveMonth(-1):V()(e).isAfter(n.state.calendarYM,"month")&&n.moveMonth(1))},n.state={calendarYM:V()(),today:V()(),selected:V()().format("YYYY-MM-DD")},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.calendarYM,a=e.today;return l.a.createElement("div",{className:"test-layout"},l.a.createElement("div",{className:"RCA-app-container"},l.a.createElement($,{calendarYM:t,today:a,moveMonth:this.moveMonth}),l.a.createElement(X,{YM:t.format("YYYY-MM-DD"),selected:this.state.selected,changeSelected:this.changeSelected})))}}]),a}(l.a.Component),te=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).getBibleApi=function(){k.a.get("https://project-setting.s3.ap-northeast-2.amazonaws.com/json/bible.json").then((function(e){console.log(e);var t=e;if(200===t.status){console.log(n.state);var a=n.state.bible_yn;"N"==a&&(localStorage.setItem("BIBLE_ID",n.state.bible_id),localStorage.setItem("WIZ_ID",n.state.wiz_id),localStorage.setItem("BIBLE_YN","Y"),a="Y"),console.log(n.state.bible_id),console.log(t.data.bible_korHRV[n.state.bible_id]),n.setState({bible:t.data.bible_korHRV[n.state.bible_id],bible_yn:a,isLoding:!0})}else console.log("error")}))},n.selectBibleContent=function(){var e=localStorage.getItem("BIBLE_ID")?localStorage.getItem("BIBLE_ID"):null,t=localStorage.getItem("WIZ_ID")?localStorage.getItem("WIZ_ID"):null;null===e&&null===t&&(e=Math.floor(31102*Math.random()),t=Math.floor(1e5*Math.random())),n.setState({bible_id:e,wiz_id:t,already:"Y"}),n.getBibleApi()},n.bibleContent=function(){localStorage.removeItem("BIBLE_ID"),localStorage.removeItem("WIZ_ID"),localStorage.removeItem("BIBLE_YN"),n.setState({bible_yn:"N",isLoding:!1})};var l=localStorage.getItem("BIBLE_ID")?localStorage.getItem("BIBLE_ID"):null,o=localStorage.getItem("WIZ_ID")?localStorage.getItem("WIZ_ID"):null,r=localStorage.getItem("BIBLE_YN")?localStorage.getItem("BIBLE_YN"):"N",c=null;return null===l&&null===o?(l=Math.floor(31102*Math.random()),o=Math.floor(1e5*Math.random()),c="N"):c="Y",console.log(l),console.log(o),n.state={bible_id:l,wiz_id:o,bible:{},bible_yn:r,isLoding:!1,already:c},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){"Y"==this.state.already&&this.getBibleApi()}},{key:"render",value:function(){var e=this,t=this.state,a=t.bible,n=t.bible_yn,o=t.isLoding;return l.a.createElement("div",null,"\uc131\uacbd","N"==n?l.a.createElement("button",{onClick:function(){e.selectBibleContent()}},"\ub9d0\uc500 \ubf51\uae30"):1==o?l.a.createElement("div",null,"\uc62c \ud574 \uc131\ub3c4\ub2d8\uc5d0\uac8c \uc8fc\uc2e0 \ub9d0\uc500\uc740",l.a.createElement("div",null,a.book," ",a.chapter," \uc7a5 ",a.verse," \uc808 ",a.content," \uc785\ub2c8\ub2e4."),"\ud574\ub2f9 \ub9d0\uc500\uc744 \uac00\uc9c0\uace0 \ub098\uc544\uac08 \uc218 \uc788\ub294 \ud55c\ud574 \ub418\uae38 \uae30\ub3c4\ud569\ub2c8\ub2e4.",l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return e.bibleContent()}},"\ub2e4\uc2dc \ubf51\uae30"))):l.a.createElement("div",null,"\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824 \uc8fc\uc138\uc694."))}}]),a}(l.a.Component),ae=a(190),ne=a(191),le=a(192),oe=a(193),re=a(194),ce=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),a=t.call(this,e),console.log(window.location.origin),a}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(ae.a,null,l.a.createElement(ne.a,null,l.a.createElement(le.a,{component:"img",alt:"Contemplative Reptile",height:"100px",width:"100px",image:a(167),title:"Contemplative Reptile",style:{width:"auto",height:"auto",maxWidth:"100px",maxHeight:"100px",border:"none",margin:"0",padding:"0",display:"inline",borderRadius:"10px"}}),l.a.createElement(oe.a,null,l.a.createElement(re.a,{gutterBottom:!0,variant:"h5",component:"h2"},"\uc2e0\uc9c4\uc12d"),l.a.createElement(re.a,{variant:"body2",color:"textSecondary",component:"p"},"\ud504\ub860\ud2b8\uac1c\ubc1c\uc790\ub97c \uc9c0\ud5a5\ud558\uc9c0\ub9cc, \ud480\uc2a4\ud0dd \uac1c\ubc1c\uc744 \uc6d0\ud55c\ub2e4.")))),l.a.createElement("div",{className:"sssss"},l.a.createElement("dl",null,l.a.createElement("dt",{className:"blog"},"Blog : "),l.a.createElement("dd",null,l.a.createElement("a",{href:"https://blog.naver.com/sksksms2",target:"_blank"},"https://blog.naver.com/sksksms2")),l.a.createElement("dt",{className:"github"},"Git : "),l.a.createElement("dd",null,l.a.createElement("a",{href:"https://github.com/yeo11200",target:"_blank"},"https://github.com/yeo11200")),l.a.createElement("dt",{className:"email"},"Email : "),l.a.createElement("dd",null,l.a.createElement("a",{href:"mailto:yeo11200@hanmail.net"},"yeo11200@hanmail.net")))))}}]),n}(l.a.Component),ie=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(i.a)(this,a),n=t.call(this,e);var l=Math.floor(1e5*Math.random()),o=localStorage.getItem("TOKEN_ID");return console.log(l),l!==o&&localStorage.setItem("TOKEN_ID",l),n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return console.log("Index"),l.a.createElement("div",null,l.a.createElement(ce,null),l.a.createElement(g.a,{path:"/test",render:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"blog-info"},l.a.createElement("dl",null,l.a.createElement("dd",null,e.props.name),l.a.createElement("dd",null,"React"),l.a.createElement("dd",null,"Express"),l.a.createElement("dd",null,"FireBase"),l.a.createElement("dd",null,"MariaDB"),l.a.createElement("dd",null,"AWS RDS"),l.a.createElement("dd",null,"Git Hub"),l.a.createElement("dd",null,"material-ui"),l.a.createElement("dd",null,"AWS S3"))),l.a.createElement("div",{className:"blog-connenct"}))}}),l.a.createElement(g.a,{exact:!0,path:"/",component:U}),l.a.createElement(g.a,{exact:!0,path:"/test2",component:A}),l.a.createElement(g.a,{exact:!0,path:"/test3",component:J}),l.a.createElement(g.a,{path:"/test2/dita",component:P}),l.a.createElement(g.a,{path:"/schedule",component:ee}),l.a.createElement(g.a,{path:"/bible",component:te}))}}]),a}(l.a.Component);a(168);var se=function(){return l.a.createElement(c.a,{className:"container",basename:"/jlob"},l.a.createElement("div",{id:"toast"}),l.a.createElement(v,null),l.a.createElement(ie,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(c.a,{basename:"/jlob"},l.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},99:function(e,t,a){e.exports=a(169)}},[[99,1,2]]]);
//# sourceMappingURL=main.cb3dab2e.chunk.js.map