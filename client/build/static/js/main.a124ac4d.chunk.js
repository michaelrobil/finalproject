(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,a,t){e.exports=t.p+"static/media/greentrees.4ca27279.jpg"},125:function(e,a,t){e.exports=t(156)},130:function(e,a,t){},137:function(e,a,t){},156:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),o=(t(130),t(53)),i=t(44),m=t(8),s=t(69),u=t(70);function p(){var e=Object(s.a)([""]);return p=function(){return e},e}function d(){var e=Object(s.a)([""]);return d=function(){return e},e}function g(){var e=Object(s.a)([""]);return g=function(){return e},e}var f=u.a.div.attrs({className:"collpase navbar-collapse"})(g()),E=u.a.div.attrs({className:"navbar-nav mr-auto"})(d()),b=u.a.div.attrs({className:"collpase navbar-collapse"})(p());var h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,r.a.createElement(E,null,r.a.createElement(b,null,r.a.createElement(o.b,{style:{color:"white"},to:"/",className:"d-inline p-2 text-white"},"Home")))))},v=t(99),y=t(204),N=t(206),O=t(207),j=t(100),x=t.n(j),C=t(210),w=t(104),S=Object(v.a)((function(e){return{root:{backgroundColor:"red"},menuButton:{},title:{},bar:{backgroundColor:"#1f3236",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},logo:{margin:"auto",textAlign:"center",height:"6vh"},logoHorizontallyCenter:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}}));function k(){var e=S(),a=Object(n.useState)(!1),t=Object(m.a)(a,2),l=t[0],c=t[1],i=r.a.useState(null),s=Object(m.a)(i,2),u=s[0],p=s[1],d=Boolean(u),g=JSON.parse(localStorage.getItem("user"));Object(n.useEffect)((function(){return c(null!==g)}),[g]);return r.a.createElement("div",{className:e.root},r.a.createElement(y.a,{className:e.bar,position:"static"},r.a.createElement(N.a,null,r.a.createElement(h,null),r.a.createElement("div",{className:e.logoHorizontallyCenter},r.a.createElement("img",{alt:"logo",className:e.logo,src:"./servICON.png",title:"Logo"})),l?r.a.createElement("div",null,r.a.createElement(O.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},color:"inherit"},r.a.createElement(x.a,null)),r.a.createElement(w.a,{id:"menu-appbar",anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:function(){p(null)}},r.a.createElement(C.a,{onClick:function(){window.location.href="/companyView"}},"Profile"),r.a.createElement(C.a,{onClick:function(){return localStorage.removeItem("user"),void(window.location.href="/")}},"Log Out"))):r.a.createElement("div",null,r.a.createElement(o.b,{style:{color:"white"},to:"/signin",className:"d-inline p-2 text-white"},"Sign")))))}t(137);var I=t(2),z=t(31),W=t.n(z),D=function(){return W.a.get("/api/posts")},T=function(e,a){return W.a.put("/api/posts/"+e,a)},B=function(e){return W.a.put("/api/posts/"+e)},L=function(e){return W.a.post("/api/posts",e)},_=function(){return W.a.get("/api/appts")},U=function(e){return W.a.post("/api/appts",e)},R=function(){return W.a.get("/api/accounts")},F=function(e){return W.a.post("/api/accounts/login",e)},A=function(e){return W.a.post("/api/accounts/signup",e)};function H(e){var a=e.fluid,t=e.children;return r.a.createElement("div",{className:"container".concat(a?"-fluid":"")},t)}function J(e){var a=e.fluid,t=e.children;return r.a.createElement("div",{className:"row".concat(a?"-fluid":"")},t)}function q(e){var a=e.size,t=e.children;return r.a.createElement("div",{className:a.split(" ").map((function(e){return"col-"+e})).join(" ")},t)}var V=t(217),P=t(103),Y=t(15),M=t(234),K=t(209),G=t(158),Q=t(212),X=t(213),Z=t(214),$=t(55),ee=t(240),ae=t(222),te=t(223),ne=t(4),re=t(215),le=t(238),ce=t(211),oe=t(216),ie=t(221),me=t(101),se=t.n(me),ue=t(242),pe=["barbershop","salon","beauty","tattoo","nails","piercings","photography"],de=Object(v.a)((function(e){return{root:{},card:{paddingTop:"5vh",maxHeight:"90vh",overflowY:"scroll",backgroundColor:"rgba(187,208,213,0)"},details:{color:"White"},content:{},cover:{width:"100%",height:"100%"},coverImage:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",width:"90%",borderRadius:"360px",margin:"5% 5%"},controls:{},gridList:{margin:"5vh auto",backgroundColor:"rgba(255, 255, 255, 0)",width:"100%"},icon:{color:"rgba(255, 255, 255, 0.54)"},img:{},btn:{maxHeight:"85vh",paddingTop:"5vh"},nested:{},description:{overflowY:"scroll",height:"20vh"},companyName:{marginBottom:"2vh",textShadow:"2px 2px 4px #000000"},companyINFO:{marginBottom:"2vh",color:"white",fontWeight:"bold",fontSize:"1.5rem"},senders:{color:"#4fa19a"},dater:{marginBottom:"5vh"},MuiPickersToolbar:{backgroundColor:"black"},small:{width:e.spacing(5),height:e.spacing(5)},large:{width:e.spacing(7),height:e.spacing(7)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}})),ge=function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}};function fe(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(),o=Object(m.a)(c,2),i=o[0],s=o[1],u=Object(n.useState)(new Date),p=Object(m.a)(u,2),d=p[0],g=p[1],f=de(),E=Object(n.useState)("none"),b=Object(m.a)(E,2),h=b[0],v=b[1],y=Object(n.useState)(),N=Object(m.a)(y,2),j=N[0],x=N[1],C=Object(n.useState)("none"),w=Object(m.a)(C,2),S=w[0],k=w[1],z=Object(n.useState)(),W=Object(m.a)(z,2),T=W[0],B=W[1],L=r.a.useState(!1),_=Object(m.a)(L,2),F=_[0],A=_[1],me=Object(n.useState)(),fe=Object(m.a)(me,2),Ee=fe[0],be=fe[1],he=Object(n.useState)(),ve=Object(m.a)(he,2),ye=ve[0],Ne=ve[1];function Oe(e){if("back"===e){v("none"),k("none");var a=t.map((function(e){return e.companyCategory})).filter((function(e,a,t){return t.indexOf(e)===a}));s(a)}else if(pe.includes(e)){v("block"),k("block");var n=t.filter((function(a){return a.companyCategory===e})).map((function(e){return e.companyName}));s(n)}else{var r=t.filter((function(a){return a.companyName===e})),l=r[0]._id,c=Ee.filter((function(e){return e.accountID===l}));x(r),Ne(c[0])}}var je=Object(ne.a)(ge)((function(e){var a=e.children,t=e.classes,n=e.onClose,l=Object(I.a)(e,["children","classes","onClose"]);return r.a.createElement(ce.a,Object.assign({disableTypography:!0,className:t.root},l),r.a.createElement($.a,{variant:"h6"},a),n?r.a.createElement(O.a,{"aria-label":"close",className:t.closeButton,onClick:n},r.a.createElement(se.a,null)):null)})),xe=function(){A(!1);var e=d.toString(),a=e.substring(0,3),t=e.substring(4,15),n=e.substring(16,21);j&&U({fullName:T,day:a,date:t,time:n,accountID:j[0]._id})};return Object(n.useEffect)((function(){R().then((function(e){l(e.data);var a=e.data.map((function(e){return e.companyCategory})).filter((function(e,a,t){return t.indexOf(e)===a}));s(a)})).catch((function(e){return console.log(e)})),D().then((function(e){return be(e.data)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{className:f.root},r.a.createElement(H,{fluid:!0},r.a.createElement(J,null,r.a.createElement(q,{size:"xs-12 sm-4 md-4 lg-2"},i?r.a.createElement("div",{className:f.btn},r.a.createElement(K.a,{component:"nav","aria-label":"main mailbox folders"},r.a.createElement(G.a,{style:{display:h},key:1,button:!0,onClick:function(){return Oe("back")}},r.a.createElement(Q.a,{primary:"Categories"}),r.a.createElement("hr",null)),i.map((function(e){return r.a.createElement(G.a,{key:e,button:!0,onClick:function(){return Oe(e)}},r.a.createElement(ee.a,{style:{display:S},alt:"Remy Sharp",src:"https://res.cloudinary.com/ericnrgnash/image/upload/v1580676864/serv/s_xhmmky.png",className:f.small}),r.a.createElement(Q.a,{primary:e.replace(/^\w/,(function(e){return e.toUpperCase()}))}))})))):r.a.createElement("div",null)),r.a.createElement(q,{size:"xs-12 sm-8 md-8 lg-10"},r.a.createElement(X.a,{className:f.card},r.a.createElement(J,null,r.a.createElement(q,{size:"xs-12 sm-12 md-12 lg-4 xl-4"},r.a.createElement("div",{className:f.cover},r.a.createElement("img",{alt:"cover",className:f.coverImage,src:ye?ye.companyImageURL:"./group2.jpg",title:"Live from space album cover"}))),r.a.createElement(q,{size:"xs-12 sm-12 md-12 lg-8"},r.a.createElement("div",{className:f.details},r.a.createElement(Z.a,{className:f.content},r.a.createElement(J,null,r.a.createElement(q,{size:"xs-6 md-6"},r.a.createElement($.a,{component:"h3",variant:"h3",className:f.companyName},j?j[0].companyName:"Serv Team"),r.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:f.companyINFO},"Category: ",j?j[0].companyCategory:"Serv"),r.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:f.companyINFO},"Location: ",j?"".concat(j[0].companyCity,", ").concat(j[0].companyState):"Nashville, TN")),r.a.createElement(q,{size:"xs-6 md-6"},j?r.a.createElement("div",null,r.a.createElement(re.a,{variant:"outlined",style:{borderColor:"white",color:"white"},color:"secondary",onClick:function(){A(!0)}},"Appointment"),r.a.createElement(le.a,{onClose:xe,"aria-labelledby":"customized-dialog-title",open:F},r.a.createElement(je,{id:"customized-dialog-title",onClose:xe},"Set Appointment"),r.a.createElement(oe.a,{dividers:!0},r.a.createElement(Y.a,{utils:P.a},r.a.createElement(V.a,{container:!0,justify:"space-around",className:f.dater},r.a.createElement(M.a,{margin:"normal",id:"date-picker-dialog",label:"Date picker dialog",format:"MM/dd/yyyy",value:d,onChange:function(e){g(e)},KeyboardButtonProps:{"aria-label":"change date"}}))),r.a.createElement("form",{className:f.root,noValidate:!0,autoComplete:"off"},r.a.createElement(ue.a,{onChange:function(e){return B(e.target.value)},id:"outlined-basic",label:"Name",variant:"outlined"}))),r.a.createElement(ie.a,null,r.a.createElement(re.a,{autoFocus:!0,onClick:xe,color:"primary"},"Save changes")))):r.a.createElement("div",null,r.a.createElement(re.a,{variant:"outlined",disabled:!0},"Appointment")))),r.a.createElement(J,null,r.a.createElement(q,{size:"md-12"},r.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:f.description},"Description: ",j?j[0].companyDescription:"Our team at Serv wanted to bring the services of trademen and women to one place where you can find them and they can showcase their craft."))))))),r.a.createElement(J,null,r.a.createElement(q,{size:"md-12"},r.a.createElement("div",{className:f.gridList},r.a.createElement(ae.a,{cellHeight:200,cols:3,style:{width:"200"}},ye?ye.postImageURL.map((function(e){return r.a.createElement(te.a,{key:e,style:{width:"200"}},r.a.createElement("img",{className:f.img,src:e,alt:"Name"}))})):r.a.createElement("p",null,"No images found "),") }")))))))))}var Ee=function(e){var a=e.children;return r.a.createElement("div",{style:{height:700,clear:"both",margin:40,textAlign:"center"},className:"jumbotron"},a)},be=t(30),he=t(225),ve=t(224),ye=t(243),Ne=t(220),Oe=t(237),je=t(239),xe=t(235),Ce=["barbershop","salon","beauty","tattoo","nails","piercings","photography"];function we(e){return r.a.createElement(xe.a,Object.assign({elevation:6,variant:"filled"},e))}var Se=Object(v.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function ke(){var e=Se(),a=r.a.useState(!1),t=Object(m.a)(a,2),l=t[0],c=t[1],o=function(e,a){"clickaway"!==a&&c(!1)},i=Object(n.useState)({email:"",password:"",companyName:"",companyCategory:"",companyDescription:"",companyCity:"",companyState:""}),s=Object(m.a)(i,2),u=s[0],p=s[1];var d=r.a.useRef(null),g=r.a.useState(0),f=Object(m.a)(g,2),E=f[0],b=f[1];return r.a.useEffect((function(){b(d.current.offsetWidth)}),[]),r.a.createElement(ve.a,{component:"main",maxWidth:"xs"},r.a.createElement(he.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement($.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(V.a,{container:!0,spacing:2},r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(ue.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"compName",label:"Company Name",autoFocus:!0,onChange:function(e){return p(Object(be.a)({},u,{companyName:e.target.value}))}})),r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(ue.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return p(Object(be.a)({},u,{email:e.target.value}))}})),r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(ue.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return p(Object(be.a)({},u,{password:e.target.value}))}})),r.a.createElement(V.a,{item:!0,xs:12,sm:6},r.a.createElement(ue.a,{required:!0,id:"city",name:"city",label:"City",fullWidth:!0,autoComplete:"billing address-level2",onChange:function(e){return p(Object(be.a)({},u,{companyCity:e.target.value}))}})),r.a.createElement(V.a,{item:!0,xs:12,sm:6},r.a.createElement(ue.a,{required:!0,id:"state",name:"state",label:"State",onChange:function(e){return p(Object(be.a)({},u,{companyState:e.target.value}))},fullWidth:!0})),r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(Ne.a,{variant:"outlined",className:e.formControl},r.a.createElement(ye.a,{ref:d,id:"demo-simple-select-outlined-label"},"Categories"),r.a.createElement(Oe.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:u.companyCategory,onChange:function(e){return p(Object(be.a)({},u,{companyCategory:e.target.value}))},labelWidth:E},r.a.createElement(C.a,{value:""},r.a.createElement("em",null,"None")),Ce.map((function(e){return r.a.createElement(C.a,{value:e},e)}))))),r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(ue.a,{id:"outlined-multiline-static",multiline:!0,fullWidth:!0,rows:"4",variant:"outlined",label:"Company Description",onChange:function(e){return p(Object(be.a)({},u,{companyDescription:e.target.value}))}})," ")),r.a.createElement(re.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){return function(e){e.preventDefault(),A(u).then(console.log("created !")),c(!0)}(e)}},"Sign Up"),r.a.createElement(V.a,{container:!0,justify:"flex-end"}))),r.a.createElement("div",{className:e.root},r.a.createElement(je.a,{open:l,autoHideDuration:3e3,onClose:o},r.a.createElement(we,{onClose:o,severity:"success"},"You are signed up!"))))}var Ie=t(226),ze=t(236),We=Object(v.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function De(){var e=We(),a=Object(n.useState)({email:"",password:""}),t=Object(m.a)(a,2),l=t[0],c=t[1];return r.a.createElement(ve.a,{component:"main",maxWidth:"xs"},r.a.createElement(he.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement($.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(ue.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return c(Object(be.a)({},l,{email:e.target.value}))}}),r.a.createElement(ue.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return c(Object(be.a)({},l,{password:e.target.value}))}}),r.a.createElement(Ie.a,{control:r.a.createElement(ze.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(re.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){return function(e){e.preventDefault(),F(l).then((function(e){localStorage.setItem("user",JSON.stringify(e))})).then((function(e){return window.location.href="/companyview"}))}(e)}},"Sign In"),r.a.createElement(V.a,{container:!0}))))}function Te(){return r.a.createElement(H,{fluid:!0},r.a.createElement(J,null,r.a.createElement(q,{size:"md-6"},r.a.createElement(Ee,null,r.a.createElement(ke,null))),r.a.createElement(q,{size:"md-6"},r.a.createElement(Ee,null,r.a.createElement(De,null)))))}var Be=t(233),Le=t(230),_e=t(232),Ue=t(228),Re=t(229),Fe=t(231),Ae=t(227),He=t(75),Je=t(67),qe=t.n(Je);function Ve(){var e=Object(n.useState)({url:""}),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("block"),o=Object(m.a)(c,2),i=o[0],s=o[1];var u=JSON.parse(localStorage.getItem("user"));return r.a.createElement("div",{className:"main",style:{display:i}},r.a.createElement("div",{className:"upload"},r.a.createElement(qe.a,{onClick:function(){window.cloudinary.openUploadWidget({cloud_name:"ericnrgnash",upload_preset:"Erics-preset-serv",tags:["company"]},(function(e,a){e?console.log(e):(l(a[0].url),console.log(t),L({accountID:u.data.user._id,companyImageURL:a[0].url}),s("none"))}))},className:"upload-button"})))}var Pe=t(19);function Ye(){var e=Object(n.useState)(),a=Object(m.a)(e,2),t=a[0],l=a[1],c=JSON.parse(localStorage.getItem("user"));Object(n.useEffect)((function(){t?console.log("we have images here"):B(c.data.user._id).then((function(e){return l(e.data.postImageURL)})).catch((function(e){return console.log(e)}))}),[t,c.data.user._id]),Object(n.useEffect)((function(){T(c.data.user._id,{postImageURL:t}).catch((function(e){return console.log(e)}))}),[t,c.data.user._id]);return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"upload"},r.a.createElement(qe.a,{onClick:function(){window.cloudinary.openUploadWidget({cloud_name:"ericnrgnash",upload_preset:"Erics-preset-serv",tags:["company"]},(function(e,a){e?console.log(e):l([].concat(Object(Pe.a)(t),[a[0].url]))}))},className:"upload-button"})))}var Me=t(76),Ke=t(102),Ge=t.n(Ke),Qe=[{url:"https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",title:""}],Xe=Object(v.a)((function(e){return{root:{},input:{display:"none"},card:{},details:{},content:{},cover:{},coverImage:{width:"60%",alignItems:"center",justifyContent:"center",borderRadius:"360px",margin:"10% 20%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},controls:{},gridList:{},icon:{color:"rgba(255, 255, 255, 0.54)"},img:{width:"auto",height:"auto"},btn:{},nested:{},table:{overflowY:"scroll",marginTop:"5vh",marginBottom:"5vh"},TOTtable:{marginBottom:"5vh"},companyName:{textAlign:"center",fontWeight:"bolder"},companyINFO:{marginBottom:"2vh"},description:{overflowY:"scroll",height:"20vh",marginBottom:"5vh"},imageButton:{position:"absolute",left:0,right:"100px",top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.common.white}}}));function Ze(){var e=Xe(),a=Object(n.useState)([]),t=Object(m.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(),i=Object(m.a)(o,2),s=i[0],u=i[1],p=Object(n.useState)(),d=Object(m.a)(p,2),g=d[0],f=d[1],E=JSON.parse(localStorage.getItem("user")),b=E.data.user._id;function h(){return g?g.postImageURL.map((function(a){return r.a.createElement(te.a,{key:a,style:{width:"auto"}},r.a.createElement("img",{className:e.img,src:a,alt:a.title}),"} />")})):r.a.createElement("img",{className:"anon",src:Ge.a,alt:"placeholder"})}return Object(n.useEffect)((function(){B(E.data.user._id).then((function(e){return f(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(n.useEffect)((function(){R().then((function(e){var a=e.data.filter((function(e){return e._id===b}));u(a)})).catch((function(e){return console.log(e)}))}),[b]),Object(n.useEffect)((function(){h()}),[g]),Object(n.useEffect)((function(){_().then((function(e){var a=e.data.filter((function(e){return e.accountID===b}));c(a)})).catch((function(e){return console.log(e)}))}),[b]),r.a.createElement(H,null,r.a.createElement(V.a,null,r.a.createElement(J,null,r.a.createElement(q,{size:"xs-12 sm-12 md-12 lg-12"},r.a.createElement("div",{className:e.cover},g?r.a.createElement("img",{alt:"cover",className:e.coverImage,src:g.companyImageURL}):r.a.createElement("img",{alt:"cover",className:e.coverImage,src:Qe.url}),r.a.createElement(Me.a,{focusRipple:!0,key:Qe.title,className:e.image,focusVisibleClassName:e.focusVisible,style:{width:Qe.width}},r.a.createElement("span",{className:e.imageSrc,style:{backgroundImage:"url(".concat(Qe.url,")")}}),r.a.createElement("span",{className:e.imageBackdrop}),r.a.createElement("span",{className:e.imageButton},r.a.createElement(Ve,null))))))),r.a.createElement(V.a,null,r.a.createElement(J,null,r.a.createElement(q,{size:"xs-12 xs-12 md-12 lg-12"},r.a.createElement($.a,{component:"h3",variant:"h3",className:e.companyName},s?s[0].companyName:"Name"," ",r.a.createElement("hr",null)))),r.a.createElement(J,null,r.a.createElement(q,{size:"xs-12 xs-12 md-6 lg-6"},r.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:e.companyINFO},"Category: ",s?s[0].companyCategory:"Category"),r.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:e.companyINFO},"Location: ",s?"".concat(s[0].companyCity,", ").concat(s[0].companyState):"Nashville, TN")),r.a.createElement(q,{size:"xs-12 xs-12 md-6 lg-6"},r.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:e.description},"Description: ",s?s[0].companyDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))),r.a.createElement(V.a,null,r.a.createElement(J,null,r.a.createElement(q,{size:"md-12"},r.a.createElement(Re.a,{component:He.a,className:e.TOTtable},r.a.createElement(Le.a,{className:e.table,"aria-label":"simple table"},r.a.createElement(Fe.a,null,r.a.createElement(Ae.a,null,r.a.createElement(Ue.a,null,"Name"),r.a.createElement(Ue.a,{align:"right"},"Day"),r.a.createElement(Ue.a,{align:"right"},"Date"),r.a.createElement(Ue.a,{align:"right"},"Time"))),r.a.createElement(_e.a,null,l.length>=1?l.map((function(e){return r.a.createElement(Ae.a,{key:e._id},r.a.createElement(Ue.a,{component:"th",scope:"row"},e.fullName),r.a.createElement(Ue.a,{align:"right"},e.day),r.a.createElement(Ue.a,{align:"right"},e.date),r.a.createElement(Ue.a,{align:"right"},e.time))})):r.a.createElement(Ae.a,null,r.a.createElement(Ue.a,{align:"center"}," ","No appointments found"," ")))))))),r.a.createElement(V.a,null,r.a.createElement(J,null,r.a.createElement(q,{size:"md-12"},r.a.createElement("div",{className:e.gridList},r.a.createElement(ae.a,{cellHeight:"auto",cellWidth:"100%",cols:3},r.a.createElement(te.a,{key:Qe[0].title,style:{width:"auto"}},r.a.createElement("img",{className:e.img,src:Qe[0].url,alt:Qe[0].title}),r.a.createElement(Be.a,{title:Qe[0].title,subtitle:r.a.createElement("span",null,"Upload "),actionIcon:r.a.createElement(O.a,{"aria-label":"info about ".concat(Qe[0].title),className:e.icon},r.a.createElement("input",{accept:"image/*",className:e.input,id:"icon-button-file",type:"file"}),r.a.createElement("label",{htmlFor:"icon-button-file"},r.a.createElement(Ye,null)))})),h()))))))}t(155);var $e=function(){var e=JSON.parse(localStorage.getItem("user")),a=!1;return function(){switch(e||(e={data:{message:"No User"}}),e.data.message){case"Token Issued!":return a=!0;default:console.log("User not found")}}(),r.a.createElement(o.a,null,r.a.createElement(k,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:fe}),r.a.createElement(i.a,{exact:!0,path:"/signin",component:Te}),r.a.createElement(i.a,{exact:!0,path:"/signup",component:Te}),r.a.createElement(i.a,{exact:!0,path:"/search",component:fe}),r.a.createElement(i.a,{exact:!0,path:"/companyview"},a?r.a.createElement(Ze,null):r.a.createElement(Te,null))))};c.a.render(r.a.createElement($e,null),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.a124ac4d.chunk.js.map