(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{126:function(e,a,t){e.exports=t(157)},131:function(e,a,t){},138:function(e,a,t){},157:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),c=t.n(r),o=(t(131),t(53)),i=t(44),m=t(8),s=t(71),u=t(72);function p(){var e=Object(s.a)([""]);return p=function(){return e},e}function d(){var e=Object(s.a)([""]);return d=function(){return e},e}function g(){var e=Object(s.a)([""]);return g=function(){return e},e}var f=u.a.div.attrs({className:"collpase navbar-collapse"})(g()),E=u.a.div.attrs({className:"navbar-nav mr-auto"})(d()),b=u.a.div.attrs({className:"collpase navbar-collapse"})(p());var h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null,l.a.createElement(E,null,l.a.createElement(b,null,l.a.createElement(o.b,{style:{color:"white"},to:"/",className:"d-inline p-2 text-white"},"Home")))))},v=t(101),y=t(207),N=t(209),O=t(210),j=t(102),x=t.n(j),C=t(213),w=t(105),S=Object(v.a)((function(e){return{root:{backgroundColor:"red"},menuButton:{},title:{},bar:{backgroundColor:"#1f3236",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},logo:{margin:"auto",textAlign:"center",height:"8vh"},logoHorizontallyCenter:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}}));function k(){var e=S(),a=Object(n.useState)(!1),t=Object(m.a)(a,2),r=t[0],c=t[1],i=l.a.useState(null),s=Object(m.a)(i,2),u=s[0],p=s[1],d=Boolean(u),g=JSON.parse(localStorage.getItem("user"));Object(n.useEffect)((function(){return c(null!==g)}),[g]);return l.a.createElement("div",{className:e.root},l.a.createElement(y.a,{className:e.bar,position:"static"},l.a.createElement(N.a,null,l.a.createElement(h,null),l.a.createElement("div",{className:e.logoHorizontallyCenter},l.a.createElement("img",{alt:"logo",className:e.logo,src:"./servICON.png",title:"Logo"})),r?l.a.createElement("div",null,l.a.createElement(O.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},color:"inherit"},l.a.createElement(x.a,null)),l.a.createElement(w.a,{id:"menu-appbar",anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:function(){p(null)}},l.a.createElement(C.a,{onClick:function(){window.location.href="/companyView"}},"Profile"),l.a.createElement(C.a,{onClick:function(){return localStorage.removeItem("user"),void(window.location.href="/")}},"Log Out"))):l.a.createElement("div",null,l.a.createElement(o.b,{style:{color:"white"},to:"/signin",className:"d-inline p-2 text-white"},"Sign")))))}t(138);var I=t(2),z=t(31),D=t.n(z),L=function(){return D.a.get("/api/posts")},W=function(e,a){return D.a.put("/api/posts/"+e,a)},B=function(e){return D.a.put("/api/posts/"+e)},T=function(e){return D.a.post("/api/posts",e)},_=function(){return D.a.get("/api/appts")},R=function(e){return D.a.post("/api/appts",e)},U=function(){return D.a.get("/api/accounts")},F=function(e){return D.a.post("/api/accounts/login",e)},A=function(e){return D.a.post("/api/accounts/signup",e)};function H(e){var a=e.fluid,t=e.children;return l.a.createElement("div",{className:"container".concat(a?"-fluid":"")},t)}function J(e){var a=e.fluid,t=e.children;return l.a.createElement("div",{className:"row".concat(a?"-fluid":"")},t)}function q(e){var a=e.size,t=e.children;return l.a.createElement("div",{className:a.split(" ").map((function(e){return"col-"+e})).join(" ")},t)}var V=t(221),P=t(104),Y=t(15),M=t(238),K=t(212),G=t(159),Q=t(215),X=t(217),Z=t(218),$=t(56),ee=t(75),ae=t.n(ee),te=t(244),ne=t(226),le=t(227),re=t(55),ce=t.n(re),oe=t(216),ie=t(4),me=t(219),se=t(242),ue=t(214),pe=t(220),de=t(225),ge=t(103),fe=t.n(ge),Ee=t(246),be=["barbershop","salon","beauty","tattoo","nails","piercings","photography"],he=(ce.a,ce.a,ce.a,Object(v.a)((function(e){return{root:{},card:{paddingTop:"5vh",maxHeight:"90vh",overflowY:"scroll",backgroundColor:"rgba(187,208,213,0)"},details:{color:"white"},content:{},cover:{width:"100%",height:"100%"},coverImage:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",width:"90%",borderRadius:"360px",margin:"5% 5%"},controls:{},gridList:{margin:"5vh auto",backgroundColor:"rgba(255, 255, 255, 0)",width:"100%"},icon:{color:"rgba(255, 255, 255, 0.54)"},img:{},btn:{maxHeight:"85vh",paddingTop:"5vh"},nested:{},description:{overflowY:"scroll",height:"20vh"},companyName:{marginBottom:"2vh"},companyINFO:{marginBottom:"2vh"},senders:{color:"#4fa19a"},dater:{marginBottom:"5vh"},MuiPickersToolbar:{backgroundColor:"black"},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))),ve=function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}};function ye(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(),o=Object(m.a)(c,2),i=o[0],s=o[1],u=Object(n.useState)(new Date),p=Object(m.a)(u,2),d=p[0],g=p[1],f=he(),E=Object(n.useState)("none"),b=Object(m.a)(E,2),h=b[0],v=b[1],y=Object(n.useState)(),N=Object(m.a)(y,2),j=N[0],x=N[1],C=Object(n.useState)("none"),w=Object(m.a)(C,2),S=w[0],k=w[1],z=Object(n.useState)(),D=Object(m.a)(z,2),W=D[0],B=D[1],T=l.a.useState(!1),_=Object(m.a)(T,2),F=_[0],A=_[1],ee=Object(n.useState)(),re=Object(m.a)(ee,2),ce=re[0],ge=re[1],ye=Object(n.useState)(),Ne=Object(m.a)(ye,2),Oe=Ne[0],je=Ne[1];function xe(e){if(console.log(e),"back"===e){v("none"),k("none");var a=t.map((function(e){return e.companyCategory})).filter((function(e,a,t){return t.indexOf(e)==a}));s(a)}else if(be.includes(e)){v("block"),k("block");var n=t.filter((function(a){return a.companyCategory===e})).map((function(e){return e.companyName}));s(n)}else{var l=t.filter((function(a){return a.companyName===e})),r=l[0]._id,c=ce.filter((function(e){return e.accountID===r}));console.log(c[0]),x(l),je(c[0])}}var Ce=Object(ie.a)(ve)((function(e){var a=e.children,t=e.classes,n=e.onClose,r=Object(I.a)(e,["children","classes","onClose"]);return l.a.createElement(ue.a,Object.assign({disableTypography:!0,className:t.root},r),l.a.createElement($.a,{variant:"h6"},a),n?l.a.createElement(O.a,{"aria-label":"close",className:t.closeButton,onClick:n},l.a.createElement(fe.a,null)):null)})),we=function(){A(!1);var e=d.toString(),a=e.substring(0,3),t=e.substring(4,15),n=e.substring(16,21);j&&R({fullName:W,day:a,date:t,time:n,accountID:j[0]._id})};return Object(n.useEffect)((function(){U().then((function(e){r(e.data);var a=e.data.map((function(e){return e.companyCategory})).filter((function(e,a,t){return t.indexOf(e)==a}));s(a)})).catch((function(e){return console.log(e)})),L().then((function(e){return ge(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("div",{className:f.root},l.a.createElement(H,{fluid:!0},l.a.createElement(J,null,l.a.createElement(q,{size:"xs-12 sm-4 md-4 lg-2"},i?l.a.createElement("div",{className:f.btn},l.a.createElement(K.a,{component:"nav","aria-label":"main mailbox folders"},l.a.createElement(G.a,{style:{display:h},key:1,button:!0,onClick:function(){return xe("back")}},l.a.createElement(Q.a,{primary:"Categories"}),l.a.createElement(oe.a,null,l.a.createElement(ae.a,null))),i.map((function(e){return l.a.createElement(G.a,{key:e,button:!0,onClick:function(){return xe(e)}},l.a.createElement(te.a,{style:{display:S},alt:"Remy Sharp",src:"https://www.pinclipart.com/picdir/big/97-976108_face-clipart-minion-minion-avatar-png-download.png",className:f.small}),l.a.createElement(Q.a,{primary:e}),l.a.createElement(oe.a,null,l.a.createElement(ae.a,null)))})))):l.a.createElement("div",null,"Not")),l.a.createElement(q,{size:"xs-12 sm-8 md-8 lg-10"},l.a.createElement(X.a,{className:f.card},l.a.createElement(J,null,l.a.createElement(q,{size:"xs-12 sm-12 md-12 lg-4 xl-4"},l.a.createElement("div",{className:f.cover},l.a.createElement("img",{className:f.coverImage,src:Oe?Oe.companyImageURL:"https://cdn.archpaper.com/wp-content/uploads/2018/09/portland_building_reconstruction-preview.jpg",title:"Live from space album cover"}))),l.a.createElement(q,{size:"xs-12 sm-12 md-12 lg-8"},l.a.createElement("div",{className:f.details},l.a.createElement(Z.a,{className:f.content},l.a.createElement(J,null,l.a.createElement(q,{size:"xs-6 md-6"},l.a.createElement($.a,{component:"h3",variant:"h3",className:f.companyName},j?j[0].companyName:"Long Name Incorporated"),l.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:f.companyINFO},"Category: ",j?j[0].companyCategory:"Animals"),l.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:f.companyINFO},"Location: ",j?"".concat(j[0].companyCity,", ").concat(j[0].companyState):"Nashville, TN")),l.a.createElement(q,{size:"xs-6 md-6"},l.a.createElement("div",null,l.a.createElement(me.a,{variant:"outlined",color:"primary",onClick:function(){A(!0)}},"Appointment"),l.a.createElement(se.a,{onClose:we,"aria-labelledby":"customized-dialog-title",open:F},l.a.createElement(Ce,{id:"customized-dialog-title",onClose:we},"Set Appointment"),l.a.createElement(pe.a,{dividers:!0},l.a.createElement(Y.a,{utils:P.a},l.a.createElement(V.a,{container:!0,justify:"space-around",className:f.dater},l.a.createElement(M.a,{margin:"normal",id:"date-picker-dialog",label:"Date picker dialog",format:"MM/dd/yyyy",value:d,onChange:function(e){g(e)},KeyboardButtonProps:{"aria-label":"change date"}}))),l.a.createElement("form",{className:f.root,noValidate:!0,autoComplete:"off"},l.a.createElement(Ee.a,{onChange:function(e){return B(e.target.value)},id:"outlined-basic",label:"Name",variant:"outlined"}))),l.a.createElement(de.a,null,l.a.createElement(me.a,{autoFocus:!0,onClick:we,color:"primary"},"Save changes")))))),l.a.createElement(J,null,l.a.createElement(q,{size:"md-12"},l.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:f.description},"Description: ",j?j[0].companyDescription:"Lorem ipsum dolor sit amet,\n                                             consectetur adipiscing elit."))))))),l.a.createElement(J,null,l.a.createElement(q,{size:"md-12"},l.a.createElement("div",{className:f.gridList},l.a.createElement(ne.a,{cellHeight:200,cols:3,style:{width:"200"}},Oe?Oe.postImageURL.map((function(e){return l.a.createElement(le.a,{key:e,style:{width:"200"}},l.a.createElement("img",{className:f.img,src:e,alt:"Name"}))})):l.a.createElement("p",null,"No images found "),") }")))))))))}var Ne=function(e){var a=e.children;return l.a.createElement("div",{style:{height:700,clear:"both",margin:40,textAlign:"center"},className:"jumbotron"},a)},Oe=t(30),je=t(229),xe=t(228),Ce=t(247),we=t(224),Se=t(241),ke=t(243),Ie=t(239),ze=["barbershop","salon","beauty","tattoo","nails","piercings","photography"];function De(e){return l.a.createElement(Ie.a,Object.assign({elevation:6,variant:"filled"},e))}var Le=Object(v.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function We(){var e=Le(),a=l.a.useState(!1),t=Object(m.a)(a,2),r=t[0],c=t[1],o=function(e,a){"clickaway"!==a&&c(!1)},i=Object(n.useState)({email:"",password:"",companyName:"",companyCategory:"",companyDescription:"",companyCity:"",companyState:""}),s=Object(m.a)(i,2),u=s[0],p=s[1];var d=l.a.useRef(null),g=l.a.useState(0),f=Object(m.a)(g,2),E=f[0],b=f[1];return l.a.useEffect((function(){b(d.current.offsetWidth)}),[]),l.a.createElement(xe.a,{component:"main",maxWidth:"xs"},l.a.createElement(je.a,null),l.a.createElement("div",{className:e.paper},l.a.createElement($.a,{component:"h1",variant:"h5"},"Sign up"),l.a.createElement("form",{className:e.form,noValidate:!0},l.a.createElement(V.a,{container:!0,spacing:2},l.a.createElement(V.a,{item:!0,xs:12},l.a.createElement(Ee.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"compName",label:"Company Name",autoFocus:!0,onChange:function(e){return p(Object(Oe.a)({},u,{companyName:e.target.value}))}})),l.a.createElement(V.a,{item:!0,xs:12},l.a.createElement(Ee.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return p(Object(Oe.a)({},u,{email:e.target.value}))}})),l.a.createElement(V.a,{item:!0,xs:12},l.a.createElement(Ee.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return p(Object(Oe.a)({},u,{password:e.target.value}))}})),l.a.createElement(V.a,{item:!0,xs:12,sm:6},l.a.createElement(Ee.a,{required:!0,id:"city",name:"city",label:"City",fullWidth:!0,autoComplete:"billing address-level2",onChange:function(e){return p(Object(Oe.a)({},u,{companyCity:e.target.value}))}})),l.a.createElement(V.a,{item:!0,xs:12,sm:6},l.a.createElement(Ee.a,{required:!0,id:"state",name:"state",label:"State",onChange:function(e){return p(Object(Oe.a)({},u,{companyState:e.target.value}))},fullWidth:!0})),l.a.createElement(V.a,{item:!0,xs:12},l.a.createElement(we.a,{variant:"outlined",className:e.formControl},l.a.createElement(Ce.a,{ref:d,id:"demo-simple-select-outlined-label"},"Categories"),l.a.createElement(Se.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:u.companyCategory,onChange:function(e){return p(Object(Oe.a)({},u,{companyCategory:e.target.value}))},labelWidth:E},l.a.createElement(C.a,{value:""},l.a.createElement("em",null,"None")),ze.map((function(e){return l.a.createElement(C.a,{value:e},e)}))))),l.a.createElement(V.a,{item:!0,xs:12},l.a.createElement(Ee.a,{id:"outlined-multiline-static",multiline:!0,fullWidth:!0,rows:"4",variant:"outlined",label:"Company Description",onChange:function(e){return p(Object(Oe.a)({},u,{companyDescription:e.target.value}))}})," ")),l.a.createElement(me.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){return function(e){e.preventDefault(),A(u).then(console.log("created !")),c(!0)}(e)}},"Sign Up"),l.a.createElement(V.a,{container:!0,justify:"flex-end"}))),l.a.createElement("div",{className:e.root},l.a.createElement(ke.a,{open:r,autoHideDuration:3e3,onClose:o},l.a.createElement(De,{onClose:o,severity:"success"},"You are signed up!"))))}var Be=t(230),Te=t(240),_e=Object(v.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Re(){var e=_e(),a=Object(n.useState)({email:"",password:""}),t=Object(m.a)(a,2),r=t[0],c=t[1];return l.a.createElement(xe.a,{component:"main",maxWidth:"xs"},l.a.createElement(je.a,null),l.a.createElement("div",{className:e.paper},l.a.createElement($.a,{component:"h1",variant:"h5"},"Sign in"),l.a.createElement("form",{className:e.form,noValidate:!0},l.a.createElement(Ee.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return c(Object(Oe.a)({},r,{email:e.target.value}))}}),l.a.createElement(Ee.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return c(Object(Oe.a)({},r,{password:e.target.value}))}}),l.a.createElement(Be.a,{control:l.a.createElement(Te.a,{value:"remember",color:"primary"}),label:"Remember me"}),l.a.createElement(me.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){return function(e){e.preventDefault(),F(r).then((function(e){localStorage.setItem("user",JSON.stringify(e))})).then((function(e){return window.location.href="/companyview"}))}(e)}},"Sign In"),l.a.createElement(V.a,{container:!0}))))}function Ue(){return l.a.createElement(H,{fluid:!0},l.a.createElement(J,null,l.a.createElement(q,{size:"md-6"},l.a.createElement(Ne,null,l.a.createElement(We,null))),l.a.createElement(q,{size:"md-6"},l.a.createElement(Ne,null,l.a.createElement(Re,null)))))}var Fe=t(237),Ae=t(234),He=t(236),Je=t(232),qe=t(233),Ve=t(235),Pe=t(231),Ye=t(77),Me=t(69),Ke=t.n(Me);function Ge(){var e=Object(n.useState)({url:""}),a=Object(m.a)(e,2),t=a[0],r=a[1];var c=JSON.parse(localStorage.getItem("user"));return l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"upload"},l.a.createElement("button",{onClick:function(){window.cloudinary.openUploadWidget({cloud_name:"ericnrgnash",upload_preset:"Erics-preset-serv",tags:["company"]},(function(e,a){e?console.log(e):(r(a[0].url),console.log(t),T({accountID:c.data.user._id,companyImageURL:a[0].url}))}))},className:"upload-button"},l.a.createElement(Ke.a,null),"            ")))}var Qe=t(19);function Xe(){var e=Object(n.useState)(),a=Object(m.a)(e,2),t=a[0],r=a[1],c=JSON.parse(localStorage.getItem("user"));Object(n.useEffect)((function(){t?console.log("we have images here"):B(c.data.user._id).then((function(e){return r(e.data.postImageURL)})).catch((function(e){return console.log(e)}))}),[]),Object(n.useEffect)((function(){W(c.data.user._id,{postImageURL:t}).catch((function(e){return console.log(e)}))}),[t]);return l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"upload"},l.a.createElement("button",{onClick:function(){window.cloudinary.openUploadWidget({cloud_name:"ericnrgnash",upload_preset:"Erics-preset-serv",tags:["company"]},(function(e,a){e?console.log(e):r([].concat(Object(Qe.a)(t),[a[0].url]))}))},className:"upload-button"},l.a.createElement(Ke.a,null),"            ")))}var Ze=t(78),$e=[{url:"https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",title:"Breakfast"}],ea=Object(v.a)((function(e){return{root:{},input:{display:"none"},card:{},details:{},content:{},cover:{},coverImage:{width:"60%",alignItems:"center",justifyContent:"center",borderRadius:"360px",margin:"10% 20%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},controls:{},gridList:{},icon:{color:"rgba(255, 255, 255, 0.54)"},img:{width:"auto",height:"auto"},btn:{},nested:{},table:{overflowY:"scroll",marginTop:"5vh",marginBottom:"5vh"},TOTtable:{marginBottom:"5vh"},companyName:{textAlign:"center",fontWeight:"bolder"},companyINFO:{marginBottom:"2vh"},description:{overflowY:"scroll",height:"20vh",marginBottom:"5vh"},imageButton:{position:"absolute",left:0,right:"100px",top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.common.white}}}));function aa(){var e=ea(),a=Object(n.useState)([]),t=Object(m.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(),i=Object(m.a)(o,2),s=i[0],u=i[1],p=Object(n.useState)(),d=Object(m.a)(p,2),g=d[0],f=d[1],E=JSON.parse(localStorage.getItem("user")),b=E.data.user._id;function h(){return g?g.postImageURL.map((function(a){return l.a.createElement(le.a,{key:a.img,style:{width:"auto"}},l.a.createElement("img",{className:e.img,src:a,alt:a.title}),"} />")})):l.a.createElement("img",{className:"anon",src:ce.a,alt:"placeholder"})}return Object(n.useEffect)((function(){B(E.data.user._id).then((function(e){return f(e.data)})).catch((function(e){return console.log(e)}))}),[g]),Object(n.useEffect)((function(){U().then((function(e){var a=e.data.filter((function(e){return e._id===b}));u(a)})).catch((function(e){return console.log(e)})),_().then((function(e){var a=e.data.filter((function(e){return e.accountID===b}));console.log(e.data),c(a)})).catch((function(e){return console.log(e)})),h()}),[]),l.a.createElement(H,null,l.a.createElement(V.a,null,l.a.createElement(J,null,l.a.createElement(q,{size:"xs-12 sm-12 md-12 lg-12"},l.a.createElement("div",{className:e.cover},l.a.createElement("img",{className:e.coverImage,src:g?g.companyImageURL:Image}),l.a.createElement(Ze.a,{focusRipple:!0,key:$e.title,className:e.image,focusVisibleClassName:e.focusVisible,style:{width:$e.width}},l.a.createElement("span",{className:e.imageSrc,style:{backgroundImage:"url(".concat($e.url,")")}}),l.a.createElement("span",{className:e.imageBackdrop}),l.a.createElement("span",{className:e.imageButton},l.a.createElement(Ge,null))))))),l.a.createElement(V.a,null,l.a.createElement(J,null,l.a.createElement(q,{size:"xs-12 xs-12 md-12 lg-12"},l.a.createElement($.a,{component:"h3",variant:"h3",className:e.companyName},s?s[0].companyName:"Name"," ",l.a.createElement("hr",null)))),l.a.createElement(J,null,l.a.createElement(q,{size:"xs-12 xs-12 md-6 lg-6"},l.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:e.companyINFO},"Category: ",s?s[0].companyCategory:"Category"),l.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:e.companyINFO},"Location: ",s?"".concat(s[0].companyCity,", ").concat(s[0].companyState):"Nashville, TN")),l.a.createElement(q,{size:"xs-12 xs-12 md-6 lg-6"},l.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:e.description},"Description: ",s?s[0].companyDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))),l.a.createElement(V.a,null,l.a.createElement(J,null,l.a.createElement(q,{size:"md-12"},l.a.createElement(qe.a,{component:Ye.a,className:e.TOTtable},l.a.createElement(Ae.a,{className:e.table,"aria-label":"simple table"},l.a.createElement(Ve.a,null,l.a.createElement(Pe.a,null,l.a.createElement(Je.a,null,"Name"),l.a.createElement(Je.a,{align:"right"},"Day"),l.a.createElement(Je.a,{align:"right"},"Date"),l.a.createElement(Je.a,{align:"right"},"Time"))),l.a.createElement(He.a,null,r?r.map((function(e){return l.a.createElement(Pe.a,{key:e._id},l.a.createElement(Je.a,{component:"th",scope:"row"},e.fullName),l.a.createElement(Je.a,{align:"right"},e.day),l.a.createElement(Je.a,{align:"right"},e.date),l.a.createElement(Je.a,{align:"right"},e.time))})):l.a.createElement("p",null," No appointments found "))))))),l.a.createElement(V.a,null,l.a.createElement(J,null,l.a.createElement(q,{size:"md-12"},l.a.createElement("div",{className:e.gridList},l.a.createElement(ne.a,{cellHeight:"auto",cellWidth:"100%",cols:3},l.a.createElement(le.a,{key:$e[0].title,style:{width:"auto"}},l.a.createElement("img",{className:e.img,src:$e[0].url,alt:$e[0].title}),l.a.createElement(Fe.a,{title:$e[0].title,subtitle:l.a.createElement("span",null,"Upload "),actionIcon:l.a.createElement(O.a,{"aria-label":"info about ".concat($e[0].title),className:e.icon},l.a.createElement("input",{accept:"image/*",className:e.input,id:"icon-button-file",type:"file"}),l.a.createElement("label",{htmlFor:"icon-button-file"},l.a.createElement(Xe,null)))})),h()))))))}t(156);var ta=function(){var e=JSON.parse(localStorage.getItem("user")),a=!1;return function(){switch(e||(e={data:{message:"No User"}}),e.data.message){case"Token Issued!":return a=!0;default:console.log("User not found")}}(),l.a.createElement(o.a,null,l.a.createElement(k,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:ye}),l.a.createElement(i.a,{exact:!0,path:"/signin",component:Ue}),l.a.createElement(i.a,{exact:!0,path:"/signup",component:Ue}),l.a.createElement(i.a,{exact:!0,path:"/search",component:ye}),l.a.createElement(i.a,{exact:!0,path:"/companyview"},a?l.a.createElement(aa,null):l.a.createElement(Ue,null))))};c.a.render(l.a.createElement(ta,null),document.getElementById("root"))},55:function(e,a,t){e.exports=t.p+"static/media/greentrees.4ca27279.jpg"}},[[126,1,2]]]);
//# sourceMappingURL=main.5ae0d1a3.chunk.js.map