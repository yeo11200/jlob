(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{20:function(e,t,n){e.exports=n(35)},25:function(e,t,n){},26:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},27:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(18),r=n.n(c),u=(n(25),n(26),n(27),n(6)),o=n(7),m=n(8),s=n(10),i=n(9),E=(n(28),function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).headerClick=function(e){console.log(e),this.setState({classNamePush:e})},a.state={aa:1,classNamePush:null},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("ul",{className:"header-ui"},l.a.createElement("li",{className:"zzzz"==this.state.classNamePush?"on":""},l.a.createElement(u.b,{exact:!0,to:"/zzzz1",onClick:function(t){e.headerClick("zzzz")}},"zzzz")),l.a.createElement("li",{className:"about"==this.state.classNamePush?"on":""},l.a.createElement(u.b,{exact:!0,to:"/about/aaaa",onClick:function(t){e.headerClick("about")}},"\uc774\ub825\uc11c")),l.a.createElement("li",{className:"blog"==this.state.classNamePush?"on":""},l.a.createElement(u.b,{to:"/blog",onClick:function(t){e.headerClick("blog")}},"Blog \uc815\ubcf4")),l.a.createElement("li",{className:"zzzz4"==this.state.classNamePush?"on":""},l.a.createElement(u.b,{to:"/zzzz4?:namea",onClick:function(t){e.headerClick("zzzz4")}},"zzzz"))))}}]),n}(l.a.Component)),d=n(1),p=n(11),h=n.n(p),f=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).menuClickOn=function(e){var t=null;"info"==e?t="info"===this.state.menuOn?"":"info":"project"===e?t="project"===this.state.menuOn?"":"project":"announce"===e&&(t="announce"===this.state.menuOn?"":"announce"),this.setState({menuOn:t})},console.log(e.match.params.name),a.state={menuOn:"info"},a}return Object(m.a)(n,[{key:"componentWillMount",value:function(){console.log(this.state.menuOn)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"profile-info"},l.a.createElement("div",{className:"profile-about-title"},l.a.createElement("span",null,"\ud56d\uc0c1 \ub178\ub825\ud558\ub294 \uc9c0\uc6d0\uc790 \uc2e0\uc9c4\uc12d\uc785\ub2c8\ub2e4.")),l.a.createElement("ul",{className:"profile-menu"},l.a.createElement("li",{onClick:function(){e.menuClickOn("info")},className:"info"===this.state.menuOn?"on":""},"\uc790\uae30\uc18c\uac1c\uc11c"),l.a.createElement("li",{onClick:function(){e.menuClickOn("project")},className:"project"===this.state.menuOn?"on":""},"\ud504\ub85c\uc81d\ud2b8\uacbd\ud5d8"),l.a.createElement("li",{onClick:function(){e.menuClickOn("announce")},className:"announce"===this.state.menuOn?"on":""},"\ubc1c\ud45c\ub0b4\uc6a9")),l.a.createElement("div",{className:"profile-about-me "+("info"===this.state.menuOn?"on":"")},l.a.createElement("dl",null,l.a.createElement("dt",null,"\uc790\uae30\uc18c\uac1c"),l.a.createElement("dd",null,l.a.createElement("p",null,"\uc548\ub155\ud558\uc138\uc694. \uc2e0\uc9c4\uc12d\uc785\ub2c8\ub2e4 \uc9c0\uae08\uc740 \uc774\ub825\uc11c \ud14c\uc2a4\ud2b8 \uc911\uc785\ub2c8\ub2e4.",this.props.match.params.name)))),l.a.createElement("div",{className:"profile-about-me "+("project"===this.state.menuOn?"on":"")},l.a.createElement("dl",null,l.a.createElement("dt",null,"\ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8"),l.a.createElement("dd",null,l.a.createElement("span",null,"6. \ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8"),l.a.createElement("div",null,l.a.createElement("p",null,"\uc0ac\uc6a9\ud55c \uae30\uc220"),l.a.createElement("p",null,"\ud504\ub85c\uc81d\ud2b8 \ub0b4\uc6a9"))),l.a.createElement("dd",null,l.a.createElement("span",null,"5. \ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8"),l.a.createElement("div",null,l.a.createElement("p",null,"\uc0ac\uc6a9\ud55c \uae30\uc220"),l.a.createElement("p",null,"\ud504\ub85c\uc81d\ud2b8 \ub0b4\uc6a9"))),l.a.createElement("dd",null,l.a.createElement("span",null,"4. \ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8"),l.a.createElement("div",null,l.a.createElement("p",null,"\uc0ac\uc6a9\ud55c \uae30\uc220"),l.a.createElement("p",null,"\ud504\ub85c\uc81d\ud2b8 \ub0b4\uc6a9"))),l.a.createElement("dd",null,l.a.createElement("span",null,"3. \ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8"),l.a.createElement("div",null,l.a.createElement("p",null,"\uc0ac\uc6a9\ud55c \uae30\uc220"),l.a.createElement("p",null,"\ud504\ub85c\uc81d\ud2b8 \ub0b4\uc6a9"))),l.a.createElement("dd",null,l.a.createElement("span",null,"2. \ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8"),l.a.createElement("div",null,l.a.createElement("p",null,"\uc0ac\uc6a9\ud55c \uae30\uc220"),l.a.createElement("p",null,"\ud504\ub85c\uc81d\ud2b8 \ub0b4\uc6a9"))),l.a.createElement("dd",null,l.a.createElement("span",null,"1. \ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8"),l.a.createElement("div",null,l.a.createElement("p",null,"\uc0ac\uc6a9\ud55c \uae30\uc220"),l.a.createElement("p",null,"\ud504\ub85c\uc81d\ud2b8 \ub0b4\uc6a9"))))),l.a.createElement("div",{className:"profile-about-me "+("announce"===this.state.menuOn?"on":"")},l.a.createElement("dl",null,l.a.createElement("dt",null,"\ubc1c\ud45c"),l.a.createElement("dd",null,"1. \ubc1c\ud45c \uc81c\ubaa9",l.a.createElement("span",null," \ubc1c\ud45c ppt url")))))}}]),n}(l.a.Component);f.defaultProps={name:h.a.string};var b=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"blog-info"},l.a.createElement("dl",null,l.a.createElement("dd",null,this.props.name),l.a.createElement("dd",null,"React"),l.a.createElement("dd",null,"Express"),l.a.createElement("dd",null,"FireBase"),l.a.createElement("dd",null,"MariaDB"),l.a.createElement("dd",null,"AWS RDS"),l.a.createElement("dd",null,"Git Hub"))),l.a.createElement("div",{className:"blog-connenct"}))}}]),n}(a.Component),v=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={},a}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.a,{path:"/zzzz1",render:function(){return l.a.createElement("h3",null,"Render Test")}}),l.a.createElement(d.a,{path:"/about/:name",component:f}),l.a.createElement(d.a,{path:"/blog",component:function(){return l.a.createElement(b,{name:"name"})}}))}}]),n}(l.a.Component);var z=function(){return l.a.createElement(u.a,{className:"container"},l.a.createElement(E,null),l.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(34);r.a.render(l.a.createElement(u.a,{basename:"/jlob"},l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.1d3d5287.chunk.js.map