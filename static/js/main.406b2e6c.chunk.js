(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{30:function(e,t,a){e.exports=a(62)},35:function(e,t,a){},36:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},37:function(e,t,a){},38:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(27),r=a.n(c),u=(a(35),a(36),a(37),a(11)),m=a(7),i=a(8),o=a(10),s=a(9),E=(a(38),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).headerClick=function(e){console.log(e),this.setState({classNamePush:e})},n.state={aa:1,classNamePush:null},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("ul",{className:"header-ui"},l.a.createElement("li",{className:"zzzz"==this.state.classNamePush?"on":""},l.a.createElement(u.b,{exact:!0,to:"/zzzz1",onClick:function(t){e.headerClick("zzzz")}},"zzzz")),l.a.createElement("li",{className:"about"==this.state.classNamePush?"on":""},l.a.createElement(u.b,{exact:!0,to:"/about/aaaa",onClick:function(t){e.headerClick("about")}},"\uc774\ub825\uc11c")),l.a.createElement("li",{className:"blog"==this.state.classNamePush?"on":""},l.a.createElement(u.b,{to:"/blog",onClick:function(t){e.headerClick("blog")}},"Blog \uc815\ubcf4")),l.a.createElement("li",{className:"schedule"==this.state.classNamePush?"on":""},l.a.createElement(u.b,{to:"/schedule",onClick:function(t){e.headerClick("schedule")}},"scedlue"))))}}]),a}(l.a.Component)),d=a(1),p=a(12),h=a.n(p);var v=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).menuClickOn=function(e){var t=null;"info"==e?t="info"===this.state.menuOn?"":"info":"project"===e?t="project"===this.state.menuOn?"":"project":"announce"===e&&(t="announce"===this.state.menuOn?"":"announce"),this.setState({menuOn:t})},console.log(function(){var e=["2019-01-01","2019-05-31"],t=new Date(e[1]),a=new Date(e[0]),n=new Date,l=new Date("2019-07-17"),c=(t.getTime()-a.getTime())/2592e6,r=(n.getTime()-l.getTime())/2592e6;return Math.ceil(c+r)}()),console.log(e.match.params.name),n.state={menuOn:"info"},n}return Object(i.a)(a,[{key:"componentWillMount",value:function(){console.log(this.state.menuOn)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"profile-info"},l.a.createElement("div",{className:"profile-about-title"},l.a.createElement("span",null,"\ud56d\uc0c1 \ub178\ub825\ud558\ub294 \uc9c0\uc6d0\uc790 \uc2e0\uc9c4\uc12d\uc785\ub2c8\ub2e4."),l.a.createElement("span",null,"\ucd1d\uacbd\ub825 : ",this.state.careerDate)),l.a.createElement("ul",{className:"profile-menu"},l.a.createElement("li",{onClick:function(){e.menuClickOn("info")},className:"info"===this.state.menuOn?"on":""},"\uc790\uae30\uc18c\uac1c\uc11c"),l.a.createElement("li",{onClick:function(){e.menuClickOn("project")},className:"project"===this.state.menuOn?"on":""},"\ud504\ub85c\uc81d\ud2b8\uacbd\ud5d8"),l.a.createElement("li",{onClick:function(){e.menuClickOn("announce")},className:"announce"===this.state.menuOn?"on":""},"\ubc1c\ud45c\ub0b4\uc6a9")),l.a.createElement("div",{className:"profile-about-me "+("info"===this.state.menuOn?"on":"")},l.a.createElement("dl",null,l.a.createElement("dt",null,"\uc2e0\uc9c4\uc12d "),l.a.createElement("dd",null,l.a.createElement("p",null,"\uc800\ub294 ",l.a.createElement("code",null,"_ _ _ _ _")," \uac1c\ubc1c\uc790\uac00 \ub418\uace0 \uc2f6\uc2b5\ub2c8\ub2e4."),l.a.createElement("div",null,"1. \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\ub97c \uc9e4 \uc9dc\ub294",l.a.createElement("br",null),"2. \uc644\uc131\ubcf4\ub2e4 \ubc84\uadf8\ub97c \uc904\uc774\ub294",l.a.createElement("br",null),"3. \ucc45\uc784\uac10\uc744 \uac00\uc9c0\ub294",l.a.createElement("br",null),"4. \ub0a8\ub4e4\ubcf4\ub2e4 \ud639\uc2dc \ub0a8\uacfc \uac19\uc774 \ub178\ub825\ud558\ub294",l.a.createElement("br",null))),l.a.createElement("dd",null,l.a.createElement("p",null,"\uc800\ub294 ",l.a.createElement("code",null,"_ _ _ _ _")," \ud300\uc6d0\uc774 \ub418\uace0 \uc2f6\uc2b5\ub2c8\ub2e4."),l.a.createElement("div",null,"1. \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\ub97c \uc9e4 \uc9dc\ub294",l.a.createElement("br",null),"2. \uc644\uc131\ubcf4\ub2e4 \ubc84\uadf8\ub97c \uc904\uc774\ub294",l.a.createElement("br",null),"3. \ucc45\uc784\uac10\uc744 \uac00\uc9c0\ub294",l.a.createElement("br",null),"4. \ub0a8\ub4e4\ubcf4\ub2e4 \ud639\uc2dc \ub0a8\uacfc \uac19\uc774 \ub178\ub825\ud558\ub294",l.a.createElement("br",null))))),l.a.createElement("div",{className:"profile-about-me "+("project"===this.state.menuOn?"on":"")},l.a.createElement("dl",null,l.a.createElement("dt",null,"\ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8"),l.a.createElement("dd",null,l.a.createElement("div",null,l.a.createElement("span",null,"7. \uc5d0\ub4c0\uc11c\ube0c \uc218\uc5c5 \ub9c8\uc774\uadf8\ub808\uc774\uc158 & React Native Web View")),l.a.createElement("div",null,l.a.createElement("span",null,"2020.06 ~ ing")),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("dl",null,l.a.createElement("dt",null,"php 7.2"),l.a.createElement("dt",null,"angular 1.5"),l.a.createElement("dt",null,"javascript"),l.a.createElement("dt",null,"aws"),l.a.createElement("dt",null,"mariaDB 10.5"),l.a.createElement("dt",null,"React Native 0.61"),l.a.createElement("dt",null,"Npm"))),l.a.createElement("p",null,"\ud504\ub85c\uc81d\ud2b8 \ub0b4\uc6a9"))),l.a.createElement("dd",null,l.a.createElement("div",null,l.a.createElement("span",null,"6. \uc5d0\ub4c0\uc11c\ube0c \ucee4\ubba4\ub2c8\ud2f0 \ub9c8\uc774\uadf8\ub808\uc774\uc158")),l.a.createElement("div",null,l.a.createElement("span",null,"2020.01 ~ 2020.03")),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("dl",null,l.a.createElement("dt",null,"php 7.2"),l.a.createElement("dt",null,"angular 1.5"),l.a.createElement("dt",null,"javascript"),l.a.createElement("dt",null,"aws"),l.a.createElement("dt",null,"mariaDB 10.5"),l.a.createElement("dt",null,"git"),l.a.createElement("dt",null,"C.I"))),l.a.createElement("p",null,"\ud504\ub85c\uc81d\ud2b8 \ub0b4\uc6a9"))),l.a.createElement("dd",null,l.a.createElement("span",null,"5. \ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8"),l.a.createElement("div",null,l.a.createElement("p",null,"\uc0ac\uc6a9\ud55c \uae30\uc220"),l.a.createElement("p",null,"\ud504\ub85c\uc81d\ud2b8 \ub0b4\uc6a9"))),l.a.createElement("dd",null,l.a.createElement("span",null,"4. \ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8"),l.a.createElement("div",null,l.a.createElement("p",null,"\uc0ac\uc6a9\ud55c \uae30\uc220"),l.a.createElement("p",null,"\ud504\ub85c\uc81d\ud2b8 \ub0b4\uc6a9"))),l.a.createElement("dd",null,l.a.createElement("span",null,"3. \ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8"),l.a.createElement("div",null,l.a.createElement("p",null,"\uc0ac\uc6a9\ud55c \uae30\uc220"),l.a.createElement("p",null,"\ud504\ub85c\uc81d\ud2b8 \ub0b4\uc6a9"))),l.a.createElement("dd",null,l.a.createElement("span",null,"2. \ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8"),l.a.createElement("div",null,l.a.createElement("p",null,"\uc0ac\uc6a9\ud55c \uae30\uc220"),l.a.createElement("p",null,"\ud504\ub85c\uc81d\ud2b8 \ub0b4\uc6a9"))),l.a.createElement("dd",null,l.a.createElement("span",null,"1. \ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8"),l.a.createElement("div",null,l.a.createElement("p",null,"\uc0ac\uc6a9\ud55c \uae30\uc220"),l.a.createElement("p",null,"\ud504\ub85c\uc81d\ud2b8 \ub0b4\uc6a9"))))),l.a.createElement("div",{className:"profile-about-me "+("announce"===this.state.menuOn?"on":"")},l.a.createElement("dl",null,l.a.createElement("dt",null,"\ubc1c\ud45c"),l.a.createElement("dd",null,"1. \ubc1c\ud45c \uc81c\ubaa9",l.a.createElement("span",null," \ubc1c\ud45c ppt url")))))}}]),a}(l.a.Component);v.defaultProps={name:h.a.string};var f=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"blog-info"},l.a.createElement("dl",null,l.a.createElement("dd",null,this.props.name),l.a.createElement("dd",null,"React"),l.a.createElement("dd",null,"Express"),l.a.createElement("dd",null,"FireBase"),l.a.createElement("dd",null,"MariaDB"),l.a.createElement("dd",null,"AWS RDS"),l.a.createElement("dd",null,"Git Hub"))),l.a.createElement("div",{className:"blog-connenct"}))}}]),a}(n.Component),b=a(29),O=a.n(b),g=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={getTitle:"zzzz"},n}return Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this;O.a.get("https://api.ip.pe.kr/").then((function(t){console.log(t.data),e.setState({getTitle:t.data})}))}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.getTitle,this.aa)}}]),a}(n.Component);g.defaultProps={name:h.a.string};var j=g,k=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.a,{path:"/zzzz1",render:function(){return l.a.createElement("h3",null,"Render Test")}}),l.a.createElement(d.a,{path:"/about/:name",component:v}),l.a.createElement(d.a,{path:"/blog",component:function(){return l.a.createElement(f,{name:"name"})}}),l.a.createElement(d.a,{path:"/schedule",component:function(){return l.a.createElement(j,{name:"schedule"})}}))}}]),a}(l.a.Component);var N=function(){return l.a.createElement(u.a,{className:"container"},l.a.createElement(E,null),l.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(61);r.a.render(l.a.createElement(u.a,{basename:"/jlob"},l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.406b2e6c.chunk.js.map