(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,a,t){e.exports=t.p+"static/media/greentrees.4ca27279.jpg"},126:function(e,a,t){e.exports=t(157)},131:function(e,a,t){},138:function(e,a,t){},157:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),o=(t(131),t(53)),i=t(44),m=t(8),s=t(70),u=t(71);function p(){var e=Object(s.a)([""]);return p=function(){return e},e}function d(){var e=Object(s.a)([""]);return d=function(){return e},e}function g(){var e=Object(s.a)([""]);return g=function(){return e},e}var f=u.a.div.attrs({className:"collpase navbar-collapse"})(g()),E=u.a.div.attrs({className:"navbar-nav mr-auto"})(d()),b=u.a.div.attrs({className:"collpase navbar-collapse"})(p());var h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,r.a.createElement(E,null,r.a.createElement(b,null,r.a.createElement(o.b,{style:{color:"white"},to:"/",className:"d-inline p-2 text-white"},"Home")))))},v=t(100),y=t(206),N=t(208),O=t(209),j=t(101),C=t.n(j),w=t(212),x=t(105),S=Object(v.a)((function(e){return{root:{backgroundColor:"red"},menuButton:{},title:{},bar:{backgroundColor:"#1f3236",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},logo:{margin:"auto",textAlign:"center",height:"8vh"},logoHorizontallyCenter:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}}));function k(){var e=S(),a=Object(n.useState)(!1),t=Object(m.a)(a,2),l=t[0],c=t[1],i=r.a.useState(null),s=Object(m.a)(i,2),u=s[0],p=s[1],d=Boolean(u),g=JSON.parse(localStorage.getItem("user"));Object(n.useEffect)((function(){return c(null!==g)}),[g]);return r.a.createElement("div",{className:e.root},r.a.createElement(y.a,{className:e.bar,position:"static"},r.a.createElement(N.a,null,r.a.createElement(h,null),r.a.createElement("div",{className:e.logoHorizontallyCenter},r.a.createElement("img",{alt:"logo",className:e.logo,src:"./servICON.png",title:"Logo"})),l?r.a.createElement("div",null,r.a.createElement(O.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},color:"inherit"},r.a.createElement(C.a,null)),r.a.createElement(x.a,{id:"menu-appbar",anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:function(){p(null)}},r.a.createElement(w.a,{onClick:function(){window.location.href="/companyView"}},"Profile"),r.a.createElement(w.a,{onClick:function(){return localStorage.removeItem("user"),void(window.location.href="/")}},"Log Out"))):r.a.createElement("div",null,r.a.createElement(o.b,{style:{color:"white"},to:"/signin",className:"d-inline p-2 text-white"},"Sign")))))}t(138);var I=t(2),z=t(31),D=t.n(z),T=function(){return D.a.get("/api/posts")},W=function(e,a){return D.a.put("/api/posts/"+e,a)},B=function(e){return D.a.put("/api/posts/"+e)},L=function(e){return D.a.post("/api/posts",e)},_=function(){return D.a.get("/api/appts")},U=function(e){return D.a.post("/api/appts",e)},R=function(){return D.a.get("/api/accounts")},F=function(e){return D.a.post("/api/accounts/login",e)},A=function(e){return D.a.post("/api/accounts/signup",e)};function H(e){var a=e.fluid,t=e.children;return r.a.createElement("div",{className:"container".concat(a?"-fluid":"")},t)}function J(e){var a=e.fluid,t=e.children;return r.a.createElement("div",{className:"row".concat(a?"-fluid":"")},t)}function q(e){var a=e.size,t=e.children;return r.a.createElement("div",{className:a.split(" ").map((function(e){return"col-"+e})).join(" ")},t)}var V=t(220),P=t(104),Y=t(15),M=t(237),K=t(211),G=t(159),Q=t(214),X=t(216),Z=t(217),$=t(55),ee=t(74),ae=t.n(ee),te=t(243),ne=t(225),re=t(226),le=t(215),ce=t(4),oe=t(218),ie=t(241),me=t(213),se=t(219),ue=t(224),pe=t(102),de=t.n(pe),ge=t(245),fe=["barbershop","salon","beauty","tattoo","nails","piercings","photography"],Ee=Object(v.a)((function(e){return{root:{},card:{paddingTop:"5vh",maxHeight:"90vh",overflowY:"scroll",backgroundColor:"rgba(187,208,213,0)"},details:{color:"white"},content:{},cover:{width:"100%",height:"100%"},coverImage:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",width:"90%",borderRadius:"360px",margin:"5% 5%"},controls:{},gridList:{margin:"5vh auto",backgroundColor:"rgba(255, 255, 255, 0)",width:"100%"},icon:{color:"rgba(255, 255, 255, 0.54)"},img:{},btn:{maxHeight:"85vh",paddingTop:"5vh"},nested:{},description:{overflowY:"scroll",height:"20vh"},companyName:{marginBottom:"2vh"},companyINFO:{marginBottom:"2vh"},senders:{color:"#4fa19a"},dater:{marginBottom:"5vh"},MuiPickersToolbar:{backgroundColor:"black"},small:{width:e.spacing(5),height:e.spacing(5)},large:{width:e.spacing(7),height:e.spacing(7)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}})),be=function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}};function he(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(),o=Object(m.a)(c,2),i=o[0],s=o[1],u=Object(n.useState)(new Date),p=Object(m.a)(u,2),d=p[0],g=p[1],f=Ee(),E=Object(n.useState)("none"),b=Object(m.a)(E,2),h=b[0],v=b[1],y=Object(n.useState)(),N=Object(m.a)(y,2),j=N[0],C=N[1],w=Object(n.useState)("none"),x=Object(m.a)(w,2),S=x[0],k=x[1],z=Object(n.useState)(),D=Object(m.a)(z,2),W=D[0],B=D[1],L=r.a.useState(!1),_=Object(m.a)(L,2),F=_[0],A=_[1],ee=Object(n.useState)(),pe=Object(m.a)(ee,2),he=pe[0],ve=pe[1],ye=Object(n.useState)(),Ne=Object(m.a)(ye,2),Oe=Ne[0],je=Ne[1];function Ce(e){if("back"===e){v("none"),k("none");var a=t.map((function(e){return e.companyCategory})).filter((function(e,a,t){return t.indexOf(e)===a}));s(a)}else if(fe.includes(e)){v("block"),k("block");var n=t.filter((function(a){return a.companyCategory===e})).map((function(e){return e.companyName}));s(n)}else{var r=t.filter((function(a){return a.companyName===e})),l=r[0]._id,c=he.filter((function(e){return e.accountID===l}));C(r),je(c[0])}}var we=Object(ce.a)(be)((function(e){var a=e.children,t=e.classes,n=e.onClose,l=Object(I.a)(e,["children","classes","onClose"]);return r.a.createElement(me.a,Object.assign({disableTypography:!0,className:t.root},l),r.a.createElement($.a,{variant:"h6"},a),n?r.a.createElement(O.a,{"aria-label":"close",className:t.closeButton,onClick:n},r.a.createElement(de.a,null)):null)})),xe=function(){A(!1);var e=d.toString(),a=e.substring(0,3),t=e.substring(4,15),n=e.substring(16,21);j&&U({fullName:W,day:a,date:t,time:n,accountID:j[0]._id})};return Object(n.useEffect)((function(){R().then((function(e){l(e.data);var a=e.data.map((function(e){return e.companyCategory})).filter((function(e,a,t){return t.indexOf(e)===a}));s(a)})).catch((function(e){return console.log(e)})),T().then((function(e){return ve(e.data)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{className:f.root},r.a.createElement(H,{fluid:!0},r.a.createElement(J,null,r.a.createElement(q,{size:"xs-12 sm-4 md-4 lg-2"},i?r.a.createElement("div",{className:f.btn},r.a.createElement(K.a,{component:"nav","aria-label":"main mailbox folders"},r.a.createElement(G.a,{style:{display:h},key:1,button:!0,onClick:function(){return Ce("back")}},r.a.createElement(Q.a,{primary:"Categories"}),r.a.createElement(le.a,null,r.a.createElement(ae.a,null))),i.map((function(e){return r.a.createElement(G.a,{key:e,button:!0,onClick:function(){return Ce(e)}},r.a.createElement(te.a,{style:{display:S},alt:"Remy Sharp",src:"./s.png",className:f.small}),r.a.createElement(Q.a,{primary:e.replace(/^\w/,(function(e){return e.toUpperCase()}))}),r.a.createElement(le.a,null,r.a.createElement(ae.a,null)))})))):r.a.createElement("div",null,"Not")),r.a.createElement(q,{size:"xs-12 sm-8 md-8 lg-10"},r.a.createElement(X.a,{className:f.card},r.a.createElement(J,null,r.a.createElement(q,{size:"xs-12 sm-12 md-12 lg-4 xl-4"},r.a.createElement("div",{className:f.cover},r.a.createElement("img",{alt:"cover",className:f.coverImage,src:Oe?Oe.companyImageURL:"./group2.jpg",title:"Live from space album cover"}))),r.a.createElement(q,{size:"xs-12 sm-12 md-12 lg-8"},r.a.createElement("div",{className:f.details},r.a.createElement(Z.a,{className:f.content},r.a.createElement(J,null,r.a.createElement(q,{size:"xs-6 md-6"},r.a.createElement($.a,{component:"h3",variant:"h3",className:f.companyName},j?j[0].companyName:"Serv Team"),r.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:f.companyINFO},"Team: ",j?j[0].companyCategory:"Animals"),r.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:f.companyINFO},"Location: ",j?"".concat(j[0].companyCity,", ").concat(j[0].companyState):"Nashville, TN")),r.a.createElement(q,{size:"xs-6 md-6"},j?r.a.createElement("div",null,r.a.createElement(oe.a,{variant:"outlined",style:{borderColor:"white",color:"white"},color:"secondary",onClick:function(){A(!0)}},"Appointment"),r.a.createElement(ie.a,{onClose:xe,"aria-labelledby":"customized-dialog-title",open:F},r.a.createElement(we,{id:"customized-dialog-title",onClose:xe},"Set Appointment"),r.a.createElement(se.a,{dividers:!0},r.a.createElement(Y.a,{utils:P.a},r.a.createElement(V.a,{container:!0,justify:"space-around",className:f.dater},r.a.createElement(M.a,{margin:"normal",id:"date-picker-dialog",label:"Date picker dialog",format:"MM/dd/yyyy",value:d,onChange:function(e){g(e)},KeyboardButtonProps:{"aria-label":"change date"}}))),r.a.createElement("form",{className:f.root,noValidate:!0,autoComplete:"off"},r.a.createElement(ge.a,{onChange:function(e){return B(e.target.value)},id:"outlined-basic",label:"Name",variant:"outlined"}))),r.a.createElement(ue.a,null,r.a.createElement(oe.a,{autoFocus:!0,onClick:xe,color:"primary"},"Save changes")))):r.a.createElement("div",null,r.a.createElement(oe.a,{variant:"outlined",disabled:!0},"Appointment")))),r.a.createElement(J,null,r.a.createElement(q,{size:"md-12"},r.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:f.description},"Description: ",j?j[0].companyDescription:"Our team at Serv wanted to bring the services of trademen and women to one place where you can find them and they can showcase their craft."))))))),r.a.createElement(J,null,r.a.createElement(q,{size:"md-12"},r.a.createElement("div",{className:f.gridList},r.a.createElement(ne.a,{cellHeight:200,cols:3,style:{width:"200"}},Oe?Oe.postImageURL.map((function(e){return r.a.createElement(re.a,{key:e,style:{width:"200"}},r.a.createElement("img",{className:f.img,src:e,alt:"Name"}))})):r.a.createElement("p",null,"No images found "),") }")))))))))}var ve=function(e){var a=e.children;return r.a.createElement("div",{style:{height:700,clear:"both",margin:40,textAlign:"center"},className:"jumbotron"},a)},ye=t(30),Ne=t(228),Oe=t(227),je=t(246),Ce=t(223),we=t(240),xe=t(242),Se=t(238),ke=["barbershop","salon","beauty","tattoo","nails","piercings","photography"];function Ie(e){return r.a.createElement(Se.a,Object.assign({elevation:6,variant:"filled"},e))}var ze=Object(v.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function De(){var e=ze(),a=r.a.useState(!1),t=Object(m.a)(a,2),l=t[0],c=t[1],o=function(e,a){"clickaway"!==a&&c(!1)},i=Object(n.useState)({email:"",password:"",companyName:"",companyCategory:"",companyDescription:"",companyCity:"",companyState:""}),s=Object(m.a)(i,2),u=s[0],p=s[1];var d=r.a.useRef(null),g=r.a.useState(0),f=Object(m.a)(g,2),E=f[0],b=f[1];return r.a.useEffect((function(){b(d.current.offsetWidth)}),[]),r.a.createElement(Oe.a,{component:"main",maxWidth:"xs"},r.a.createElement(Ne.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement($.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(V.a,{container:!0,spacing:2},r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(ge.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"compName",label:"Company Name",autoFocus:!0,onChange:function(e){return p(Object(ye.a)({},u,{companyName:e.target.value}))}})),r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(ge.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return p(Object(ye.a)({},u,{email:e.target.value}))}})),r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(ge.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return p(Object(ye.a)({},u,{password:e.target.value}))}})),r.a.createElement(V.a,{item:!0,xs:12,sm:6},r.a.createElement(ge.a,{required:!0,id:"city",name:"city",label:"City",fullWidth:!0,autoComplete:"billing address-level2",onChange:function(e){return p(Object(ye.a)({},u,{companyCity:e.target.value}))}})),r.a.createElement(V.a,{item:!0,xs:12,sm:6},r.a.createElement(ge.a,{required:!0,id:"state",name:"state",label:"State",onChange:function(e){return p(Object(ye.a)({},u,{companyState:e.target.value}))},fullWidth:!0})),r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(Ce.a,{variant:"outlined",className:e.formControl},r.a.createElement(je.a,{ref:d,id:"demo-simple-select-outlined-label"},"Categories"),r.a.createElement(we.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:u.companyCategory,onChange:function(e){return p(Object(ye.a)({},u,{companyCategory:e.target.value}))},labelWidth:E},r.a.createElement(w.a,{value:""},r.a.createElement("em",null,"None")),ke.map((function(e){return r.a.createElement(w.a,{value:e},e)}))))),r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(ge.a,{id:"outlined-multiline-static",multiline:!0,fullWidth:!0,rows:"4",variant:"outlined",label:"Company Description",onChange:function(e){return p(Object(ye.a)({},u,{companyDescription:e.target.value}))}})," ")),r.a.createElement(oe.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){return function(e){e.preventDefault(),A(u).then(console.log("created !")),c(!0)}(e)}},"Sign Up"),r.a.createElement(V.a,{container:!0,justify:"flex-end"}))),r.a.createElement("div",{className:e.root},r.a.createElement(xe.a,{open:l,autoHideDuration:3e3,onClose:o},r.a.createElement(Ie,{onClose:o,severity:"success"},"You are signed up!"))))}var Te=t(229),We=t(239),Be=Object(v.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Le(){var e=Be(),a=Object(n.useState)({email:"",password:""}),t=Object(m.a)(a,2),l=t[0],c=t[1];return r.a.createElement(Oe.a,{component:"main",maxWidth:"xs"},r.a.createElement(Ne.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement($.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(ge.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return c(Object(ye.a)({},l,{email:e.target.value}))}}),r.a.createElement(ge.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return c(Object(ye.a)({},l,{password:e.target.value}))}}),r.a.createElement(Te.a,{control:r.a.createElement(We.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(oe.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){return function(e){e.preventDefault(),F(l).then((function(e){localStorage.setItem("user",JSON.stringify(e))})).then((function(e){return window.location.href="/companyview"}))}(e)}},"Sign In"),r.a.createElement(V.a,{container:!0}))))}function _e(){return r.a.createElement(H,{fluid:!0},r.a.createElement(J,null,r.a.createElement(q,{size:"md-6"},r.a.createElement(ve,null,r.a.createElement(De,null))),r.a.createElement(q,{size:"md-6"},r.a.createElement(ve,null,r.a.createElement(Le,null)))))}var Ue=t(236),Re=t(233),Fe=t(235),Ae=t(231),He=t(232),Je=t(234),qe=t(230),Ve=t(76),Pe=t(68),Ye=t.n(Pe);function Me(){var e=Object(n.useState)({url:""}),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("block"),o=Object(m.a)(c,2),i=o[0],s=o[1];var u=JSON.parse(localStorage.getItem("user"));return r.a.createElement("div",{className:"main",style:{display:i}},r.a.createElement("div",{className:"upload"},r.a.createElement(Ye.a,{onClick:function(){window.cloudinary.openUploadWidget({cloud_name:"ericnrgnash",upload_preset:"Erics-preset-serv",tags:["company"]},(function(e,a){e?console.log(e):(l(a[0].url),console.log(t),L({accountID:u.data.user._id,companyImageURL:a[0].url}),s("none"))}))},className:"upload-button"})))}var Ke=t(19);function Ge(){var e=Object(n.useState)(),a=Object(m.a)(e,2),t=a[0],l=a[1],c=JSON.parse(localStorage.getItem("user"));Object(n.useEffect)((function(){t?console.log("we have images here"):B(c.data.user._id).then((function(e){return l(e.data.postImageURL)})).catch((function(e){return console.log(e)}))}),[t,c.data.user._id]),Object(n.useEffect)((function(){W(c.data.user._id,{postImageURL:t}).catch((function(e){return console.log(e)}))}),[t,c.data.user._id]);return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"upload"},r.a.createElement(Ye.a,{onClick:function(){window.cloudinary.openUploadWidget({cloud_name:"ericnrgnash",upload_preset:"Erics-preset-serv",tags:["company"]},(function(e,a){e?console.log(e):l([].concat(Object(Ke.a)(t),[a[0].url]))}))},className:"upload-button"})))}var Qe=t(77),Xe=t(103),Ze=t.n(Xe),$e=[{url:"https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",title:""}],ea=Object(v.a)((function(e){return{root:{},input:{display:"none"},card:{},details:{},content:{},cover:{},coverImage:{width:"60%",alignItems:"center",justifyContent:"center",borderRadius:"360px",margin:"10% 20%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},controls:{},gridList:{},icon:{color:"rgba(255, 255, 255, 0.54)"},img:{width:"auto",height:"auto"},btn:{},nested:{},table:{overflowY:"scroll",marginTop:"5vh",marginBottom:"5vh"},TOTtable:{marginBottom:"5vh"},companyName:{textAlign:"center",fontWeight:"bolder"},companyINFO:{marginBottom:"2vh"},description:{overflowY:"scroll",height:"20vh",marginBottom:"5vh"},imageButton:{position:"absolute",left:0,right:"100px",top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.common.white}}}));function aa(){var e=ea(),a=Object(n.useState)([]),t=Object(m.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(),i=Object(m.a)(o,2),s=i[0],u=i[1],p=Object(n.useState)(),d=Object(m.a)(p,2),g=d[0],f=d[1],E=JSON.parse(localStorage.getItem("user")),b=E.data.user._id;function h(){return g?g.postImageURL.map((function(a){return r.a.createElement(re.a,{key:a,style:{width:"auto"}},r.a.createElement("img",{className:e.img,src:a,alt:a.title}),"} />")})):r.a.createElement("img",{className:"anon",src:Ze.a,alt:"placeholder"})}return Object(n.useEffect)((function(){B(E.data.user._id).then((function(e){return f(e.data)})).catch((function(e){return console.log(e)}))}),[b]),Object(n.useEffect)((function(){R().then((function(e){var a=e.data.filter((function(e){return e._id===b}));u(a)})).catch((function(e){return console.log(e)}))}),[b]),Object(n.useEffect)((function(){h()}),[g]),Object(n.useEffect)((function(){_().then((function(e){var a=e.data.filter((function(e){return e.accountID===b}));c(a)})).catch((function(e){return console.log(e)}))}),[b]),r.a.createElement(H,null,r.a.createElement(V.a,null,r.a.createElement(J,null,r.a.createElement(q,{size:"xs-12 sm-12 md-12 lg-12"},r.a.createElement("div",{className:e.cover},g?r.a.createElement("img",{alt:"cover",className:e.coverImage,src:g.companyImageURL}):r.a.createElement("img",{alt:"cover",className:e.coverImage,src:$e.url}),r.a.createElement(Qe.a,{focusRipple:!0,key:$e.title,className:e.image,focusVisibleClassName:e.focusVisible,style:{width:$e.width}},r.a.createElement("span",{className:e.imageSrc,style:{backgroundImage:"url(".concat($e.url,")")}}),r.a.createElement("span",{className:e.imageBackdrop}),r.a.createElement("span",{className:e.imageButton},r.a.createElement(Me,null))))))),r.a.createElement(V.a,null,r.a.createElement(J,null,r.a.createElement(q,{size:"xs-12 xs-12 md-12 lg-12"},r.a.createElement($.a,{component:"h3",variant:"h3",className:e.companyName},s?s[0].companyName:"Name"," ",r.a.createElement("hr",null)))),r.a.createElement(J,null,r.a.createElement(q,{size:"xs-12 xs-12 md-6 lg-6"},r.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:e.companyINFO},"Category: ",s?s[0].companyCategory:"Category"),r.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:e.companyINFO},"Location: ",s?"".concat(s[0].companyCity,", ").concat(s[0].companyState):"Nashville, TN")),r.a.createElement(q,{size:"xs-12 xs-12 md-6 lg-6"},r.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:e.description},"Description: ",s?s[0].companyDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))),r.a.createElement(V.a,null,r.a.createElement(J,null,r.a.createElement(q,{size:"md-12"},r.a.createElement(He.a,{component:Ve.a,className:e.TOTtable},r.a.createElement(Re.a,{className:e.table,"aria-label":"simple table"},r.a.createElement(Je.a,null,r.a.createElement(qe.a,null,r.a.createElement(Ae.a,null,"Name"),r.a.createElement(Ae.a,{align:"right"},"Day"),r.a.createElement(Ae.a,{align:"right"},"Date"),r.a.createElement(Ae.a,{align:"right"},"Time"))),r.a.createElement(Fe.a,null,l.length>=1?l.map((function(e){return r.a.createElement(qe.a,{key:e._id},r.a.createElement(Ae.a,{component:"th",scope:"row"},e.fullName),r.a.createElement(Ae.a,{align:"right"},e.day),r.a.createElement(Ae.a,{align:"right"},e.date),r.a.createElement(Ae.a,{align:"right"},e.time))})):r.a.createElement(qe.a,null,r.a.createElement(Ae.a,{align:"center"}," ","No appointments found"," ")))))))),r.a.createElement(V.a,null,r.a.createElement(J,null,r.a.createElement(q,{size:"md-12"},r.a.createElement("div",{className:e.gridList},r.a.createElement(ne.a,{cellHeight:"auto",cellWidth:"100%",cols:3},r.a.createElement(re.a,{key:$e[0].title,style:{width:"auto"}},r.a.createElement("img",{className:e.img,src:$e[0].url,alt:$e[0].title}),r.a.createElement(Ue.a,{title:$e[0].title,subtitle:r.a.createElement("span",null,"Upload "),actionIcon:r.a.createElement(O.a,{"aria-label":"info about ".concat($e[0].title),className:e.icon},r.a.createElement("input",{accept:"image/*",className:e.input,id:"icon-button-file",type:"file"}),r.a.createElement("label",{htmlFor:"icon-button-file"},r.a.createElement(Ge,null)))})),h()))))))}t(156);var ta=function(){var e=JSON.parse(localStorage.getItem("user")),a=!1;return function(){switch(e||(e={data:{message:"No User"}}),e.data.message){case"Token Issued!":return a=!0;default:console.log("User not found")}}(),r.a.createElement(o.a,null,r.a.createElement(k,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:he}),r.a.createElement(i.a,{exact:!0,path:"/signin",component:_e}),r.a.createElement(i.a,{exact:!0,path:"/signup",component:_e}),r.a.createElement(i.a,{exact:!0,path:"/search",component:he}),r.a.createElement(i.a,{exact:!0,path:"/companyview"},a?r.a.createElement(aa,null):r.a.createElement(_e,null))))};c.a.render(r.a.createElement(ta,null),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.1a4893d7.chunk.js.map