(this.webpackJsonpcny_frontend=this.webpackJsonpcny_frontend||[]).push([[0],{113:function(e,t,n){e.exports=n.p+"static/media/cntxt.4ca3826e.svg"},116:function(e,t,n){e.exports=n.p+"static/media/scrollleft.e66eb0a9.png"},117:function(e,t,n){e.exports=n.p+"static/media/scroll.ab5e83c1.png"},118:function(e,t,n){e.exports=n.p+"static/media/scrollright.d6cf0420.png"},128:function(e,t,n){e.exports=n(211)},133:function(e,t,n){},208:function(e,t,n){},211:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),i=(n(133),n(245)),l=n(246),s=n(122),u="#9E1830",d="#F6552A",p="#F8B237",m=Object(s.a)({palette:{type:"dark",primary:{main:"#9E1830"},secondary:{main:"#F6552A"},background:{default:"#9E1830"}},typography:{fontFamily:"SentyWen",fontSize:24,h1:{fontSize:40}}}),g=n(32),h=n(41),f=n(6),b=n.n(f),E=n(28),w=n(114),v=n(248),x=n(249),y=n(19),A=n(24),k=n.n(A),S="https://cnybackend.southeastasia.cloudapp.azure.com",N="https://cnybackend.southeastasia.cloudapp.azure.com/api",I=function e(){Object(y.a)(this,e)};I.jwtHeader={},I.submitTableId=function(e){var t,n,a=arguments;return b.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:t=a.length>1&&void 0!==a[1]?a[1]:"create",r.next=5;break;case 5:if(r.prev=5,"create"!==t){r.next=12;break}return r.next=9,b.a.awrap(k.a.post(N+"/user/create",{username:e}));case 9:n=r.sent,r.next=15;break;case 12:return r.next=14,b.a.awrap(k.a.post(S+"/authenticate",{username:e}));case 14:n=r.sent;case 15:if(console.log("Result came in!",n),200!==n.status){r.next=21;break}return I.jwtHeader={Authorization:"Bearer ".concat(n.data.token)},r.abrupt("return",2);case 21:return r.abrupt("return",0);case 22:r.next=38;break;case 24:if(r.prev=24,r.t0=r.catch(5),console.log(r.t0),!r.t0.response){r.next=36;break}r.t1=r.t0.response.data.error,r.next="There is an existing username"===r.t1?31:"The user have login"===r.t1?32:33;break;case 31:return r.abrupt("return",0);case 32:return r.abrupt("return",1);case 33:return r.abrupt("return",0);case 34:r.next=38;break;case 36:return console.error("Error encountered when submitting table ID!",r.t0),r.abrupt("return",0);case 38:case"end":return r.stop()}}),null,null,[[5,24]])},I.fetchAllQuestions=function(){var e,t,n=arguments;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=!(n.length>0&&void 0!==n[0])||n[0],a.prev=1,a.next=4,b.a.awrap(k.a.get(N+"/question/all",e?{headers:I.jwtHeader}:{}));case 4:if(200!==(t=a.sent).status){a.next=8;break}return console.log("Getting all your questions",t.data),a.abrupt("return",t.data);case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(1),console.error("Error encountered when fetching question!",a.t0),a.abrupt("return",null);case 14:case"end":return a.stop()}}),null,null,[[1,10]])},I.getCurrentGameState=function(){var e;return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.awrap(k.a.get(N+"/game/state",{headers:I.jwtHeader}));case 3:if(200!==(e=t.sent).status){t.next=9;break}return console.log("Getting current game state",e.data),t.abrupt("return",e.data);case 9:return t.abrupt("return",null);case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(0),console.error("Error encountered when fetching question!",t.t0),t.abrupt("return",null);case 16:case"end":return t.stop()}}),null,null,[[0,12]])},I.fetchQuestion=function(e){var t;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:n.next=6;break;case 3:return n.abrupt("return",null);case 6:return n.prev=6,n.next=9,b.a.awrap(k.a.get(N+"/question/".concat(e),{headers:I.jwtHeader}));case 9:if(200!==(t=n.sent).status){n.next=12;break}return n.abrupt("return",t.data);case 12:n.next=18;break;case 14:return n.prev=14,n.t0=n.catch(6),console.error("Error encountered when fetching question!",n.t0),n.abrupt("return",null);case 18:case"end":return n.stop()}}),null,null,[[6,14]])},I.submitAnswer=function(e,t){var n;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b.a.awrap(k.a.post(N+"/answer/submit/".concat(e),{choice:t},{headers:I.jwtHeader}));case 3:if(200!==(n=a.sent).status){a.next=8;break}return a.abrupt("return",n.data.choice);case 8:return a.abrupt("return",null);case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(0),console.error("Error encountered when submitting answer!",a.t0),a.abrupt("return",null);case 15:case"end":return a.stop()}}),null,null,[[0,11]])},I.fetchQuestionAnswer=function(e){var t;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.a.awrap(k.a.get(N+"/user/response",{headers:I.jwtHeader}));case 3:if(t=n.sent,console.log(t),200!==t.status){n.next=9;break}return n.abrupt("return",t.data.find((function(t){return t.question===e})).choice);case 9:return n.abrupt("return",null);case 10:n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(0),console.error("Error encountered when fetching question!",n.t0),n.abrupt("return",null);case 16:case"end":return n.stop()}}),null,null,[[0,12]])},I.fetchQuestionResults=function(e){var t;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.a.awrap(k.a.get(N+"/poll/".concat(e),{headers:I.jwtHeader}));case 3:if(t=n.sent,console.log(t),200!==t.status){n.next=9;break}return n.abrupt("return",t);case 9:return n.abrupt("return",null);case 10:n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(0),console.error("Error encountered when fetching question!",n.t0),n.abrupt("return",null);case 16:case"end":return n.stop()}}),null,null,[[0,12]])},I.fetchUserRank=function(){var e;return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.awrap(k.a.get(N+"/user/rank",{headers:I.jwtHeader}));case 3:if(e=t.sent,console.log(e),200!==e.status){t.next=9;break}return t.abrupt("return",[e.data.rank,e.data.score]);case 9:return t.abrupt("return",null);case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(0),console.error("Error encountered when fetching question!",t.t0),t.abrupt("return",null);case 16:case"end":return t.stop()}}),null,null,[[0,12]])};var j=n(113),C=n.n(j),G=Object(w.a)({container:{display:"flex",alignItems:"center",justifyContent:"center",padding:"30px 0",color:p,textAlign:"center",textShadow:"4px 4px #333333"}}),M=function(){var e=G({});return r.a.createElement(v.a,{className:e.container},r.a.createElement("img",{src:C.a}))},D=Object(w.a)({container:{backgroundColor:p,background:"linear-gradient(90deg, rgba(255,191,80,1) 0%, rgba(224,143,0,1) 100%)",padding:"32px 12px",color:u,boxShadow:"inset 0 16px 24px -16px ".concat(d,", inset 0 -16px 24px -16px ").concat(d),textAlign:"center",fontWeight:"bold",textShadow:"0px 0px 6px ".concat(u)}}),T=function(e){var t=D({});return r.a.createElement("div",{className:"".concat(t.container," ").concat(e.className)},e.children)},Y=n(239),O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement(T,null,r.a.createElement(Y.a,{variant:"h1",style:{fontSize:"32px"}},"GREAT MINDS THINK ALIKE")))},R=n(116),Z=n.n(R),z=n(117),H=n.n(z),W=n(118),Q=n.n(W),U=n(247),L=Object(w.a)({container:{display:"flex",justifyContent:"center",alignItems:"center"},left:{maxWidth:"24px",objectFit:"cover"},body:{flex:1,height:"100%",backgroundImage:"url(".concat(H.a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"},right:{maxWidth:"24px",objectFit:"fill"},textfield:{margin:12,padding:8,lineHeight:"1em",color:u}}),F=function(e){var t=L({});return r.a.createElement(v.a,{className:t.container},r.a.createElement("img",{className:t.left,src:Z.a}),r.a.createElement("div",{className:t.body},r.a.createElement(U.a,{type:"number",placeholder:e.placeholder,onChange:e.onChange,fullWidth:!0,InputProps:{className:t.textfield,inputProps:{maxLength:8},disableUnderline:!0}})),r.a.createElement("img",{className:t.right,src:Q.a}))},B=n(29),P=n(52),J=n(53),q=n(54),V=function e(){Object(y.a)(this,e),this.update=void 0,this.dispose=void 0,this.getDependency=void 0};V.id=void 0;var X,K,_=r.a.createContext({dependencies:{}}),$=function(e){function t(e){var n;Object(y.a)(this,t),(n=Object(P.a)(this,Object(J.a)(t).call(this,e))).getDependency=function(e){return n.state.dependencies[e.id]},n.update=function(){n.setState({})};var a={},r=!0,c=!1,o=void 0;try{for(var i,l=e.dependencies[Symbol.iterator]();!(r=(i=l.next()).done);r=!0){var s=i.value,u=s;console.log("Dependency id is",u.id),a[u.id]=new s,a[u.id].update=n.update}}catch(d){c=!0,o=d}finally{try{r||null==l.return||l.return()}finally{if(c)throw o}}return n.state={dependencies:a},console.log("Dependencies are",a),n}return Object(q.a)(t,e),Object(B.a)(t,[{key:"componentWillUnmount",value:function(){this.state.dependencies.forEach((function(e){return e.dispose()}))}},{key:"render",value:function(){return r.a.createElement(_.Provider,{value:this.state},this.props.children)}}]),t}(r.a.Component),ee=function(e){var t=r.a.useContext(_);return console.log(t),t.dependencies[e.id]};!function(e){e.START="START",e.END="END"}(X||(X={})),function(e){e.EMPTY="EMPTY",e.WAITING="WAITING",e.PLAYING="PLAYING",e.END="END"}(K||(K={}));var te=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(P.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(r)))).username=" ",n.isFetchingAllQuestions=!1,n.gameState=K.EMPTY,n.currentQuestionPos=1,n.questionState=X.START,n.currentAnswer=void 0,n.correctAnswer=null,n.score=null,n.rank=0,n.questionsMap=new Map,n.setUsername=function(e){n.username=e,n.update()},n.getAllQuestions=function(){var e,t,a=arguments;return b.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=a.length>0&&void 0!==a[0]&&a[0],n.isFetchingAllQuestions=!0,r.next=4,b.a.awrap(I.fetchAllQuestions(e));case 4:(t=r.sent)&&t.length>0?(n.questionsMap=new Map,t.forEach((function(e){return n.questionsMap.set(e.position,e)})),n.update()):console.log(t);case 6:case"end":return r.stop()}}))},n.getCurrentGameState=function(){var e,t;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(I.getCurrentGameState());case 2:if(!(e=a.sent)){a.next=17;break}if(n.gameState=e.progress,n.questionState=e.questionState,n.currentQuestionPos=e.question,n.gameState!==K.PLAYING){a.next=13;break}return a.next=10,b.a.awrap(I.fetchQuestion(n.currentQuestionPos));case 10:t=a.sent,n.questionsMap.set(t.position,t),n.getUserState();case 13:return n.update(),a.abrupt("return",!0);case 17:return a.abrupt("return",!1);case 18:case"end":return a.stop()}}))},n.getCurrentQuestion=function(){return n.questionsMap.get(n.currentQuestionPos)},n.preloadQuestion=function(){var e,t,a=arguments;return b.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,r.next=3,b.a.awrap(I.fetchQuestion(e));case 3:(t=r.sent)&&(n.questionsMap.set(e,t),console.log(n.questionsMap));case 5:case"end":return r.stop()}}))},n.handleSubmitResponse=function(e){n.currentAnswer=e,n.update()},n.getUserState=function(){var e,t,a,r;return b.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(n.questionState!==X.END){c.next=9;break}return c.next=3,b.a.awrap(I.fetchUserRank());case 3:return(e=c.sent)&&(t=Object(E.a)(e,2),a=t[0],r=t[1],n.rank=a,n.score=r,n.update()),c.next=7,b.a.awrap(I.fetchQuestionResults(n.currentQuestionPos));case 7:c.sent;case 9:case"end":return c.stop()}}))},n.handleEvent=function(e){switch(console.log("Handling",e),e.progress){case K.EMPTY:n.gameState=K.EMPTY,n.update();break;case K.WAITING:n.gameState=K.WAITING,n.update();break;case K.PLAYING:console.log("Run!"),n.currentQuestionPos=e.question,n.gameState=K.PLAYING,n.questionState=e.questionState,n.getUserState(),n.update();break;case K.END:console.log("Game Ended!"),n.currentQuestionPos=0,n.gameState=K.END,n.update()}},n}return Object(q.a)(t,e),t}(V);te.id="GameService";var ne=n(70),ae=n.n(ne),re=function e(){Object(y.a)(this,e)};re.decrypt=function(e){return ae.a.AES.decrypt(re.convertFromHex(e),"1234").toString(ae.a.enc.Utf8)},re.encrypt=function(e){var t=ae.a.AES.encrypt(e,"1234");return re.convertToHex(t.toString())},re.convertToHex=function(e){for(var t="",n=0;n<e.length;n++)t+=""+e.charCodeAt(n).toString(16);return t},re.convertFromHex=function(e){e=e.toString();for(var t="",n=0;n<e.length;n+=2)t+=String.fromCharCode(parseInt(e.substr(n,2),16));return t};var ce=Object(w.a)({container:{display:"flex",flexFlow:"column",height:"100%"},title:{fontSize:"40px"}}),oe=function(){ce({});var e=Object(h.i)(),t=Object(h.g)(),n=ee(te),a=r.a.useState(!1),c=Object(E.a)(a,2),o=c[0],i=c[1],l=r.a.useState(""),s=Object(E.a)(l,2),u=s[0],d=s[1];r.a.useEffect((function(){var a=e.tableId;if(a)!function(e){var a,r;b.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return a=re.decrypt(e),c.next=3,b.a.awrap(I.submitTableId(a,"create"));case 3:if(!c.sent){c.next=10;break}localStorage.setItem("CNYTable",JSON.stringify(I.jwtHeader)),n.setUsername(a),t.push("/lobby"),c.next=14;break;case 10:return c.next=12,b.a.awrap(I.submitTableId(a,"login"));case 12:(r=c.sent)?1===r?window.alert("This Table ID is currently logged in!"):(n.setUsername(a),localStorage.setItem("CNYTable",JSON.stringify(I.jwtHeader)),t.push("/lobby")):window.alert("Table ID has already been used or does not exist!");case 14:case"end":return c.stop()}}))}(a);else{var r=localStorage.getItem("CNYTable");r&&((I.jwtHeader=JSON.parse(r)).Authorization?n.getCurrentGameState().then((function(e){e?(n.setUsername("\xa0"),t.push("/lobby")):(localStorage.removeItem("CNYTable"),window.alert("Please login again."))})):localStorage.removeItem("CNYTable"))}}),[]);return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(v.a,{display:"flex",flexDirection:"column",padding:"24px"},r.a.createElement("div",null,"Enter your Table ID:"),r.a.createElement(F,{placeholder:"Table ID",onChange:function(e){d(e.target.value)}}),r.a.createElement(x.a,{variant:"contained",onClick:function(){var e,a,r;return b.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(!o){c.next=2;break}return c.abrupt("return");case 2:return i(!0),e="Table ".concat(u),c.next=6,b.a.awrap(I.submitTableId(e,"create"));case 6:if(a=c.sent,i(!1),!a){c.next=14;break}localStorage.setItem("CNYTable",JSON.stringify(I.jwtHeader)),n.setUsername(e),t.push("/lobby"),c.next=18;break;case 14:return c.next=16,b.a.awrap(I.submitTableId(e,"login"));case 16:(r=c.sent)?1===r?window.alert("This Table ID is currently logged in!"):(n.setUsername(e),localStorage.setItem("CNYTable",JSON.stringify(I.jwtHeader)),t.push("/lobby")):window.alert("Table ID has already been used or does not exist!");case 18:case"end":return c.stop()}}))},style:{background:p}},"Enter")))},ie=n(120),le=n.n(ie),se=n(121),ue=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(P.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(r)))).socket=void 0,n.stompClient=void 0,n.disconnectFlag=void 0,n.onErrorRestore=void 0,n.onError=function(e){n.disconnectFlag=!0,n.onErrorRestore()},n}return Object(q.a)(t,e),Object(B.a)(t,[{key:"activate",value:function(e,t){var n=this;this.onErrorRestore=t;var a={connectHeaders:I.jwtHeader,debug:function(e){console.log("STOMP: "+e)},reconnectDelay:5e3};this.stompClient=new se.Client(a),this.stompClient.webSocketFactory=function(){return new le.a("https://cnybackend.southeastasia.cloudapp.azure.com/game")},this.stompClient.onConnect=function(t){console.log(t);n.stompClient.subscribe("/topic/game",(function(t){var a=JSON.parse(t.body);console.log(a),n.disconnectFlag&&n.onErrorRestore(),e(a)}))},this.stompClient.activate()}},{key:"deactivate",value:function(){this.stompClient&&this.stompClient.active&&this.stompClient.deactivate()}}]),t}(V);ue.id="SocketService";var de=Object(w.a)({container:{width:"100%",padding:"10px 30px",color:p,position:"fixed",background:"#890504",textAlign:function(e){return e.hasScore?"left":"right"}}}),pe=function(e){var t=ee(te),n=de({hasScore:void 0!==t.score&&null!==t.score});return r.a.createElement("div",{onClick:e.onClick,className:n.container},t.username)},me=Object(w.a)({baseContainer:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center"},spinner:{margin:"24px 8px",display:"flex",justifyContent:"center",alignItems:"center"},text:{color:"#d3fc85",animation:"$fade 2s infinite linear",margin:"24px 8px",lineHeight:"1em"},"@keyframes fade":{"0%":{opacity:1},"50%":{opacity:.7},"100%":{opacity:1}}}),ge=function(e){var t=me({});switch(console.log(e),e.progressState){case K.WAITING:return r.a.createElement("div",{className:t.baseContainer},r.a.createElement(Y.a,{variant:"caption",className:t.text},"Please wait for the game to start"));case K.PLAYING:case K.EMPTY:default:return r.a.createElement("div",{className:t.baseContainer},r.a.createElement(Y.a,{variant:"caption",className:t.text},"\xa0"))}},he=n(250),fe=function(e){return r.a.createElement(he.a,{onClose:e.onClose,open:e.show,onClick:function(e){return e.preventDefault()}},r.a.createElement(Y.a,null,"The game will start with a single word\nas a question and different images for\nevery option, the team will decide on an\noption that best represent the word.\nTeams with the highest voted option\nwill score a point for each round.\nThe team with the highest score at the\nend of the game will be the winner."))},be=Object(w.a)({textContainer:{position:"fixed",bottom:0,padding:"12px 0",color:p,width:"100%",backgroundColor:"rgba(0,0,0,0.3)",textAlign:"center"}}),Ee=function(){var e=be({}),t=r.a.useState(!1),n=Object(E.a)(t,2),a=n[0],c=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.textContainer,onClick:function(){return c(!0)}},r.a.createElement("b",null,"How To Play"),r.a.createElement("br",null)),r.a.createElement(fe,{show:a,onClose:function(){return c(!1)}}))},we=n(56),ve=n.n(we),xe=(n(208),function(e){return r.a.createElement("div",{className:"pFallingCoint ".concat(e.className),style:e.style},r.a.createElement("img",{src:ve.a,className:"coin1"}),r.a.createElement("img",{src:ve.a,className:"coin2"}),r.a.createElement("img",{src:ve.a,className:"coin3"}),r.a.createElement("img",{src:ve.a,className:"coin4"}),r.a.createElement("img",{src:ve.a,className:"coin5"}))}),ye=function(e,t){return e.toLowerCase()===t.toLowerCase()},Ae=function(){var e=Object(h.g)(),t=Object(h.h)(),n=ee(te);return r.a.useEffect((function(){switch(n.gameState){case K.EMPTY:case K.WAITING:if(!ye(t.pathname,"/lobby"))return e.push("/lobby");break;case K.PLAYING:if(!ye(t.pathname,"/game"))return e.push("/game");break;case K.END:if(!ye(t.pathname,"/end"))return e.push("/end")}}),[n.gameState]),r.a.createElement(r.a.Fragment,null)},ke=Object(w.a)({container:{display:"flex",flexFlow:"column",height:"100%",alignItems:"stretch"},title:{fontSize:"40px"},spinnerContainer:{margin:"24px 8px",display:"flex",justifyContent:"center",alignItems:"center"},loadingCaption:{}}),Se=function(){var e=ke({}),t=(Object(h.g)(),ee(ue)),n=ee(te);return r.a.useEffect((function(){t.activate(n.handleEvent,(function(){n.getCurrentGameState()})),b.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:n.getAllQuestions(),n.preloadQuestion(1);case 2:case"end":return e.stop()}}))}),[]),r.a.createElement("div",{className:e.container},r.a.createElement(v.a,{marginTop:"54px"}),r.a.createElement(O,null),r.a.createElement(Ae,null),r.a.createElement(ge,{progressState:n.gameState}),r.a.createElement(xe,null),r.a.createElement(Ee,null),r.a.createElement(pe,null))},Ne=n(242),Ie=n(243),je=n(241),Ce=n(79),Ge=n.n(Ce),Me=Object(w.a)({selector:{opacity:function(e){return e.selected?1:0},position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.2)",color:"#fff",transition:"opacity 0.2s"},spinner:{position:"absolute",top:"50%",left:"50%",transform:"translate3d(-50%,-50%,0)"},icon:{position:"absolute"},glow:{color:"#00b14f",filter:"blur(3px)"}}),De=function(e){var t=Me({selected:e.selected});return r.a.createElement("div",{className:t.selector},e.selected?e.isConfirmedSelection?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ge.a,{className:"".concat(t.icon," ").concat(t.glow)}),r.a.createElement(Ge.a,{className:t.icon})):r.a.createElement("div",{className:t.spinner},r.a.createElement(je.a,null)):null)},Te=Object(w.a)({title:{position:"absolute",width:"100%",bottom:0,padding:"2px 8px",backgroundColor:"rgba(0,0,0,0.3)",textShadow:"0 0 4px #000, 0 0 6px #000",lineHeight:"1em"}}),Ye=function(e){var t=Te({});return r.a.createElement("div",{className:t.title},e.children)},Oe=Object(w.a)({tile:{border:"8px solid ".concat(d)}}),Re=r.a.memo((function(e){return console.log("Rerendered image"),r.a.createElement("img",{src:e.url,style:{objectFit:"cover",height:"100%",width:"100%"}})})),Ze=r.a.memo((function(e){var t=Oe({});return r.a.createElement(Ne.a,{cellHeight:150,spacing:20},e.question.images.sort((function(e,t){return e.id-t.id})).map((function(n){return r.a.createElement(Ie.a,{classes:{tile:t.tile},onClick:function(){console.log(234343434),e.onSelect(n.id)}},r.a.createElement(Re,{url:n.url}),r.a.createElement(Ye,null,n.title),r.a.createElement(De,{selected:n.id==e.selected,isConfirmedSelection:e.isConfirmedSelection}))})))})),ze=n(69),He=n.n(ze),We=Object(w.a)({container:{position:"fixed",display:"flex",width:"100%",justifyContent:"center",height:"100%",top:function(e){return e.show?0:"-100%"},transition:"top 0.3s ease-out",overflow:"hidden",userSelect:"none","&:focus":{outline:"none"}},lantern:{display:"block",position:"absolute",height:"auto"},overlay:{opacity:function(e){return e.show?.5:0},display:function(e){return e.show?"block":"none"},transition:"opacity 0.3s, display 0.3s"},textContainer:{color:p,position:"absolute",top:120,textAlign:"center"},giantTitle:{fontSize:"80px"}}),Qe=function(e){var t=We(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(he.a,{keepMounted:!0,open:e.show},r.a.createElement("div",{className:t.container},r.a.createElement("img",{className:t.lantern,src:He.a}),r.a.createElement("div",{className:t.textContainer},r.a.createElement(Y.a,{variant:"h1"},"Your Ranking:"),r.a.createElement(Y.a,{variant:"h1",className:t.giantTitle},e.rank)))))};Qe.defaultProps={rank:1};var Ue=Qe,Le=Object(w.a)({container:{position:"fixed",top:-12,left:0,padding:"24px 30px 30px 30px",background:"url(".concat(He.a,") no-repeat"),backgroundSize:"cover",textAlign:"center",fontSize:"1em",lineHeight:"1.2em",overflow:"visible"}}),Fe=function(e){var t=Le({});return r.a.createElement("div",{className:t.container},"Score:",r.a.createElement("br",null),r.a.createElement("b",null,e.score||"0"))},Be=Object(w.a)({container:{display:"flex",flexFlow:"column",height:"100%"},title:{fontSize:"64px",lineHeight:"68px"},button:{backgroundColor:p}}),Pe=function(){var e=Be({}),t=ee(te),n=r.a.useState(null),a=Object(E.a)(n,2),c=a[0],o=a[1];r.a.useEffect((function(){I.fetchQuestionAnswer(t.currentQuestionPos).then((function(e){console.log(e),t.currentAnswer=e,t.update()}))}),[]),r.a.useEffect((function(){null!==t.currentAnswer&&void 0!==t.currentAnswer&&o((function(e){return t.currentAnswer}))}),[t.currentAnswer]);var i=t.getCurrentQuestion(),l=function(e){o(e),t.currentAnswer=null,I.submitAnswer(i.position,e).then((function(e){t.handleSubmitResponse(e)}))};return r.a.createElement("div",{className:e.container},r.a.createElement(pe,null),r.a.createElement(Fe,{score:t.score}),r.a.createElement(v.a,{marginTop:"54px"}),i?r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null,r.a.createElement(Y.a,{variant:"h1",className:e.title},i.title)),r.a.createElement(v.a,{display:"flex",height:"100%",flexDirection:"column",padding:"24px"},r.a.createElement(Ze,{question:i,selected:c,isConfirmedSelection:c===t.currentAnswer,onSelect:l}))):r.a.createElement(T,{className:e.title},"No question found!"),r.a.createElement(Ue,{show:t.questionState===X.END,rank:t.rank}),function(){if(t.gameState===K.END)return r.a.createElement(h.a,{to:"/end"})}())},Je=function(e){return I.jwtHeader.Authorization?r.a.createElement(r.a.Fragment,null,e.children):r.a.createElement(h.a,{to:"/"})},qe=n(244),Ve=function e(){Object(y.a)(this,e)};Ve.fetchQuestionResults=function(e){var t;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.a.awrap(k.a.get("https://cnybackend.southeastasia.cloudapp.azure.com/api"+"/poll/".concat(e)));case 3:if(200!==(t=n.sent).status){n.next=9;break}return console.log("Getting question results",t.data),n.abrupt("return",t.data);case 9:return n.abrupt("return",null);case 10:n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(0),console.error("Error encountered when fetching question!",n.t0),n.abrupt("return",null);case 16:case"end":return n.stop()}}),null,null,[[0,12]])},Ve.getCurrentGameState=function(){var e;return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.awrap(k.a.get("https://cnybackend.southeastasia.cloudapp.azure.com/api/game/state"));case 3:if(200!==(e=t.sent).status){t.next=9;break}return console.log("Getting current game state",e.data),t.abrupt("return",e.data);case 9:return t.abrupt("return",null);case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(0),console.error("Error encountered when fetching question!",t.t0),t.abrupt("return",null);case 16:case"end":return t.stop()}}),null,null,[[0,12]])};var Xe=Object(w.a)({container:{height:"calc(100vh - 24px)",display:"flex",flexFlow:"column",overflow:"hidden"},title:{fontSize:"3em"}}),Ke=function(){var e=Xe({}),t=Object(h.g)(),n=ee(te);if(r.a.useEffect((function(){n.isFetchingAllQuestions||n.getAllQuestions(!1);b.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.awrap(n.getCurrentGameState());case 2:n.questionState===X.END&&Ve.fetchQuestionResults(n.currentQuestionPos).then((function(e){return console.log("Your results are",e)}));case 3:case"end":return e.stop()}}))}),[]),console.log(n.questionsMap),0===n.questionsMap.size||n.gameState===K.END)return r.a.createElement(r.a.Fragment,null);var a=n.questionsMap.get(n.currentQuestionPos);if(!a)return r.a.createElement(r.a.Fragment,null);var c=a.images.sort((function(e,t){return e.id-t.id}));return r.a.createElement("div",{className:e.container,onClick:function(){return t.push("/projection-score")}},r.a.createElement(Ne.a,{style:{flex:1,padding:24},cols:Math.ceil(c.length/2)},c.filter((function(e,t){return t<Math.ceil(c.length/2)})).map((function(e){return r.a.createElement(Ie.a,{style:{padding:4,height:"100%"}},r.a.createElement("img",{src:e.url}),r.a.createElement(qe.a,{subtitle:e.title}))}))),r.a.createElement(T,{className:e.title},a.title),r.a.createElement(Ne.a,{style:{flex:1,padding:24},cols:Math.ceil(c.length/2)},c.filter((function(e,t){return t>=Math.ceil(c.length/2)})).map((function(e){return r.a.createElement(Ie.a,{style:{padding:4,height:"100%"}},r.a.createElement("img",{src:e.url}),r.a.createElement(qe.a,{subtitle:e.title}))}))))},_e=Object(w.a)({container:{height:"calc(100vh - 24px)",display:"flex",flexFlow:"column",overflow:"hidden"},title:{fontSize:"3em"}}),$e={id:1,position:1,title:"CNY snacks",images:[{id:5,url:"https://thesmartlocal.com/wp-content/uploads/2020/01/Bak-kwa-delivery-Singapore-3.jpg",title:"Peanut Puffs",question:1},{id:4,url:"https://thesmartlocal.com/wp-content/uploads/2020/01/Bak-kwa-delivery-Singapore-3.jpg",title:"Bak Kwa",question:1},{id:2,url:"https://previews.123rf.com/images/tobi/tobi1609/tobi160900868/63232422-gold-foil-covered-chocolate-coins.jpg",title:"Chocolate Coins",question:1},{id:1,url:"https://farm2.staticflickr.com/1456/23974085714_efeeeda88e_o.jpg",title:"Love Letters",question:1},{id:3,url:"http://www.huangkitchen.com/wp-content/uploads/2016/01/DSC5211_new.jpg",title:"Pineapple Tart",question:1},{id:6,url:"https://thesmartlocal.com/wp-content/uploads/2020/01/Bak-kwa-delivery-Singapore-3.jpg",title:"Spicy Dried Shrimp Rolls",question:1}]},et=function(){var e=_e({}),t=Object(h.g)(),n=ee(te);return r.a.useEffect((function(){b.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.awrap(n.getCurrentGameState());case 2:n.questionState===X.END&&Ve.fetchQuestionResults(n.currentQuestionPos).then((function(e){return console.log("Your results are",e)})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}))}),[]),r.a.createElement("div",{className:e.container,onClick:function(){return t.push("/projection-qn")}},r.a.createElement(T,{className:e.title},"CNY SNACKS"),r.a.createElement("div",{style:{padding:24,height:"100%",display:"flex",alignItems:"flex-end"}},r.a.createElement("div",{style:{margin:"4px 5vw",flex:1,height:"40vh",background:p}}),r.a.createElement("div",{style:{margin:"4px 5vw",flex:1,height:"50vh",background:p}}),r.a.createElement("div",{style:{margin:"4px 5vw",flex:1,height:"30vh",background:p}}),r.a.createElement("div",{style:{margin:"4px 5vw",flex:1,height:"24vh",background:p}}),r.a.createElement("div",{style:{margin:"4px 5vw",flex:1,height:"10vh",background:p}}),r.a.createElement("div",{style:{margin:"4px 5vw",flex:1,height:"36vh",background:p}})),r.a.createElement(Ne.a,{style:{padding:24},cols:$e.images.length},$e.images.sort((function(e,t){return e.id-t.id})).map((function(e){return r.a.createElement(Ie.a,{style:{padding:4,height:"100%"}},r.a.createElement("img",{src:e.url}),r.a.createElement(qe.a,{subtitle:e.title}))}))))},tt=n(213),nt=Object(tt.a)({container:{display:"flex",flexFlow:"column",height:"100%",alignItems:"stretch"},subtitle:{color:p,fontSize:32,textAlign:"center"},title:{color:"#d3fc85",textAlign:"center",textShadow:"0 0 16px ".concat(p,",0 0 16px ").concat(p)}}),at=function(){var e=nt({}),t=ee(te);return r.a.useEffect((function(){t.getUserState()}),[]),r.a.createElement("div",{className:e.container},r.a.createElement(Ae,null),r.a.createElement(O,null),r.a.createElement(v.a,{display:"flex",flexDirection:"column",padding:"24px"},t.rank>=1&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,{className:e.subtitle,variant:"h1"},"You achieved"),r.a.createElement(Y.a,{className:e.title,variant:"h1"},"Rank ",t.rank)),r.a.createElement(Y.a,{className:e.subtitle,variant:"h1"},"Thanks for playing!")),r.a.createElement(xe,null))},rt=function(){return r.a.createElement(g.a,{basename:""},r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/projection-qn"},r.a.createElement(Ke,null)),r.a.createElement(h.b,{path:"/projection-score"},r.a.createElement(et,null)),r.a.createElement(h.b,{path:"/lobby"},r.a.createElement(Je,null,r.a.createElement(Se,null))),r.a.createElement(h.b,{path:"/game"},r.a.createElement(Je,null,r.a.createElement(Pe,null))),r.a.createElement(h.b,{path:"/end"},r.a.createElement(Je,null,r.a.createElement(at,null))),r.a.createElement(h.b,{exact:!0,path:["/tableId/:tableId","/"]},r.a.createElement(oe,null))))},ct=[te,ue],ot=function(){return r.a.createElement($,{dependencies:ct},r.a.createElement(i.a,{theme:m},r.a.createElement(l.a,null),r.a.createElement(rt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},56:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIjWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0wMS0wOFQxMTo1MyswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wMS0wOFQxMTo1MzowNiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMDEtMDhUMTE6NTM6MDYrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc3ZWVmODFiLTY0NjItODY0ZC04NTQyLTViNTVhN2YzYmNhMiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmQ5YTYzZTAyLTk0YzItMDA0MC04Y2YzLTFkZTE2ZDgzYzNkOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjlkYWQ3MGEyLTgyZGYtMGI0MS1hODZiLWFiMjBjM2YyOWRlNyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OWRhZDcwYTItODJkZi0wYjQxLWE4NmItYWIyMGMzZjI5ZGU3IiBzdEV2dDp3aGVuPSIyMDIwLTAxLTA4VDExOjUzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZjYzA2YWE0LTI4MzUtNjk0Mi05Yjc5LTE4MGNlODNiMzk1NiIgc3RFdnQ6d2hlbj0iMjAyMC0wMS0wOFQxMTo1MzowNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3N2VlZjgxYi02NDYy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"},69:function(e,t,n){e.exports=n.p+"static/media/lantern.ec9762cb.png"}},[[128,1,2]]]);