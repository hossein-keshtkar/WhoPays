(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{29:function(e,t,r){e.exports={miami:"App_miami__2rC5g","badge-danger":"App_badge-danger__10hvE",wrapper:"App_wrapper__3UtG_",centerWrapper:"App_centerWrapper__3ZFzs",players_wrapper:"App_players_wrapper__3eIj5",Toastify:"App_Toastify__3AtOY",badge:"App_badge__2eYNV"}},30:function(e,t,r){e.exports={miami:"StageOne_miami__2Y6R_",action_button:"StageOne_action_button__3y_bj"}},48:function(e,t,r){},49:function(e,t,r){"use strict";r.r(t);var a=r(9),n=r.n(a),s=r(0),c=r.n(s),i=r(17),l=r(18),o=r(23),j=r(22),u=r(29),d=r.n(u),p=r(38),b=r(1),h=c.a.createContext(),O=function(e){Object(o.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={stage:1,players:[],result:""},e.addPlayerHandler=function(t){return e.setState((function(e){return{players:[].concat(Object(p.a)(e.players),[t])}}))},e.removePlayerHandler=function(t){e.setState(e.state.players.splice(t,1))},e.stageHandler=function(){e.setState({stage:2},(function(){return setTimeout((function(){e.resultHandler()}),2e3)}))},e.resetHandler=function(){e.setState({stage:1,players:[],result:""})},e.resultHandler=function(){var t=e.state.players;e.setState({result:t[Math.floor(Math.random()*t.length)]})},e}return Object(l.a)(r,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(h.Provider,{value:{state:this.state,addPlayer:this.addPlayerHandler,removePlayer:this.removePlayerHandler,stage:this.stageHandler,reset:this.resetHandler,result:this.resultHandler},children:this.props.children})})}}]),r}(s.Component),x=r(6),m=r(30),_=r.n(m),f=r(14),y=(r(44),r(31),r(56)),g=r(52),v=r(55),C=r(57),S=r(53),A=r(54),H=r(33),N=r(37),T=function(){var e=Object(s.useRef)(),t=Object(s.useContext)(h),r=Object(s.useState)([!1,""]),a=Object(x.a)(r,2),n=a[0],c=a[1],i=t.state.players;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y.a,{className:"mt-4",onSubmit:function(r){r.preventDefault();var a=e.current.value;return""===a?(c([!0,"Sorry, you need to enter somthing!"]),!1):a.trim().length<=2?(c([!0,"The name should be at least 3 characters long!"]),!1):(t.addPlayer(a),e.current.value="",void c([!1,""]))},children:Object(b.jsxs)(y.a.Group,{children:[Object(b.jsx)(y.a.Control,{type:"text",placeholder:"Enter Name",ref:e}),Object(b.jsx)(g.a,{type:"submit",className:_.a.miami,variant:"primary",children:"Add to List"})]})}),!0===n[0]?Object(b.jsx)(v.a,{variant:"danger",children:n[1]}):"",i.length>0&&i?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)(C.a,{children:i.map((function(e,r){return Object(b.jsx)(C.a.Item,{children:Object(b.jsx)(S.a,{children:Object(b.jsxs)(A.a,{children:[Object(b.jsx)(H.a,{xs:6,children:e}),Object(b.jsx)(H.a,{xs:4}),Object(b.jsx)(H.a,{xs:2,children:Object(b.jsx)(N.a,{onClick:function(){return t.removePlayer(r)}})})]})})},r)}))}),Object(b.jsx)("button",{className:_.a.action_button,onClick:function(){i.length<2?f.b.error("You should add at least one more player!"):t.stage()},children:"Next"})]})]}):null,Object(b.jsx)(f.a,{position:"top-left",autoClose:5e3})]})},P=c.a.memo(T),w=(r(48),function(){var e=Object(s.useContext)(h);return Object(b.jsxs)("div",{className:"result_wrapper",children:[Object(b.jsx)("h3",{children:"The looser is: "}),Object(b.jsx)("h2",{children:e.state.result}),Object(b.jsx)("button",{onClick:function(){f.b.success("You Got It!"),e.result()},className:"action_button",children:"GET ANOTHER LOOSER"}),Object(b.jsx)("button",{onClick:function(){return e.reset()},className:"action_button btn_2",children:"START OVER"}),Object(b.jsx)(f.a,{position:"top-right",autoClose:1500})]})}),k=function(e){Object(o.a)(r,e);var t=Object(j.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:d.a.wrapper,children:Object(b.jsxs)("div",{className:d.a.centerWrapper,children:[Object(b.jsx)("h1",{children:"Who Pays The Bill?"}),1===this.context.state.stage?Object(b.jsx)(P,{}):Object(b.jsx)(w,{})]})})})}}]),r}(c.a.Component);k.contextType=h;var E=k;n.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{children:Object(b.jsx)(E,{})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.8cdd6524.chunk.js.map