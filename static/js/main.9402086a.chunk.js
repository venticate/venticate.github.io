(this.webpackJsonpimage2color=this.webpackJsonpimage2color||[]).push([[0],{36:function(e,t,o){},38:function(e,t,o){},53:function(e,t,o){"use strict";o.r(t);var n=o(2),i=o(1),r=o.n(i),a=(o(36),o(12)),s=o(16),c=o.n(s),l=o(20),d=(o(38),o(28)),h=o.n(d),u=o(3);var p,b,j,f,g,x,m,w,O,y,v,P,k,I,A=o(29),G=o(30),C=o(31),T=function(){function e(){Object(A.a)(this,e)}return Object(G.a)(e,null,[{key:"palette",value:function(e,t){console.log(t);var o=new C(t);return o.sample(e),o.palette(!0)}}]),e}(),R=o(11),D=o(0),S=u.a.div(p||(p=Object(n.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  margin-top: 150px;\n"]))),z=u.a.div(b||(b=Object(n.a)(["\n  width: 100%;\n  height: 100px;\n"]))),U=u.a.div(j||(j=Object(n.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 600px;\n  align-items: flex-start;\n"]))),E=u.a.div(f||(f=Object(n.a)(["\n  margin-top: 20px;\n  margin-bottom: 40px;\n  line-height: 2em;\n  font-size: 18px;\n"]))),L=u.a.div(g||(g=Object(n.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: 40px;\n"]))),q=(u.a.div(x||(x=Object(n.a)(["\n  margin: 5px;\n  padding: 15px;\n  width: 60px;\n  height: 60px;\n  border: 2px solid gray;\n  border-radius: 30px;\n  cursor: pointer;\n  box-sizing: border-box;\n  &:hover {\n    border-color: red;\n  }\n"]))),u.a.div(m||(m=Object(n.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 5px;\n  padding: 10px;\n  align-items: center;\n  width: 160px;\n  height: 60px;\n  border: 4px solid gray;\n  border-radius: 30px;\n  cursor: pointer;\n  box-sizing: border-box;\n  &:hover {\n    border-color: red;\n  }\n  box-shadow: 0 0 0 1px hsl(0, 0%, 80%);\n"])))),H=u.a.button(w||(w=Object(n.a)(["\n\tdisplay: block;\n  width: 180px;\n  padding: 15px;\n  max-width: 100%;\n  overflow: hidden;\n  text-decoration: none;\n  box-sizing: border-box;\n  font-size: 24px;\n\tfont-weight: normal;\n  box-shadow: 0 9px 18px rgba(0,0,0,0.2);\n  background: white;\n  border: 1px solid gray;\n  border-radius: 4px;\n"]))),F=u.a.canvas(O||(O=Object(n.a)(["\n  align-self: center;\n  margin: 20px;\n"]))),W=u.a.div(y||(y=Object(n.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),N=u.a.input(v||(v=Object(n.a)(["\n  margin-left: 25px;\n  font-size: 20px;\n  width: 100px;\n  padding-left: 15px;\n"])));u.a.div(P||(P=Object(n.a)(["\n  margin-top: 25px;\n  font-size: 20px;\n  width: 100px;\n  padding-left: 15px;\n"])));function M(e){return B.apply(this,arguments)}function B(){return(B=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,o){h()(t,(function(t){"error"!=t.type?e(t):o()}),{canvas:!0,maxHeight:1024,maxWidth:1024})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=function(e){var t=e.imageLoaded,o=Object(i.useRef)(null),n=Object(i.useCallback)((function(){o.current&&o.current.click()}),[]),r=Object(i.useCallback)(function(){var e=Object(l.a)(c.a.mark((function e(o){var n,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.target.files[0],e.next=3,M(n);case 3:i=e.sent,t(i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(D.jsxs)(H,{onClick:n,children:[Object(D.jsx)("input",{hidden:!0,ref:o,multiple:!0,type:"file",onClick:n,onChange:r}),"Open Image"]})},V=function(e){var t=e.onConvert;return Object(D.jsx)(H,{onClick:t,children:"Get Colors"})};function Y(e){var t=e.toString(16);return 1==t.length?"0"+t:t}var $=function(e){var t=e.color,o=(e.onClick,Object(i.useState)(!1)),n=Object(a.a)(o,2),r=n[0],s=(n[1],Object(i.useCallback)((function(){}),[r]));return Object(D.jsxs)(q,{onClick:s,style:{borderColor:t},children:[Object(D.jsx)("span",{children:t}),Object(D.jsx)("span",{children:Q(t)})]})},K=function(e){var t=e.number,o=e.onChange;return console.log(t),Object(D.jsx)(N,{type:"number",value:t,onInput:o})};function Q(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,o,n){return t+t+o+o+n+n}));var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?"rgb("+parseInt(t[1],16)+","+parseInt(t[2],16)+","+parseInt(t[3],16)+")":null}var X=u.a.div(k||(k=Object(n.a)(["\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  padding: 15px;\n  background-color:white;\n"]))),Z=u.a.span(I||(I=Object(n.a)(["\n  margin-left: 10px;\n"]))),_=function(){return Object(D.jsxs)(X,{children:[Object(D.jsx)("span",{children:"\xa9 image2color.org, 2021"}),Object(D.jsx)(Z,{}),Object(D.jsx)(R.b,{to:"/privacy",children:"Privacy"}),Object(D.jsx)(Z,{}),Object(D.jsx)(R.b,{to:"/imageprivacy",children:"Image Privacy"}),Object(D.jsx)(Z,{}),Object(D.jsx)("a",{href:"mailto:mail@image2color.org",children:"Contact"})]})};var ee,te,oe,ne,ie,re,ae=function(){var e=Object(i.useState)({}),t=Object(a.a)(e,2),o=t[0],n=t[1],r=Object(i.useState)([]),s=Object(a.a)(r,2),c=s[0],l=s[1],d=Object(i.useState)(8),h=Object(a.a)(d,2),u=h[0],p=h[1],b=Object(i.useState)(null),j=Object(a.a)(b,2),f=(j[0],j[1]),g=Object(i.useRef)(null),x=Object(i.useCallback)((function(e){if(g.current){n({img:e}),l([]);var t=g.current.getContext("2d");t.resetTransform(),t.clearRect(0,0,g.current.width,g.current.height),g.current.height=600,g.current.width=600;var o=1;e.width>=e.height?(o=g.current.width/e.width,t.scale(o,o)):(o=g.current.height/e.height,t.scale(o,o),t.translate(e.width/2,0)),t.drawImage(e,0,0,e.width,e.height)}}),[]),m=Object(i.useCallback)((function(){if(console.log(o),o.img){var e=function(e){var t=document.createElement("canvas"),o=t.getContext("2d");return t.width=e.width,t.height=e.height,o.drawImage(e,0,0),o.getImageData(0,0,e.width,e.height)}(o.img),t=T.palette(e,{colors:u}).map((function(e){return"#"+Y((t=e)[0])+Y(t[1])+Y(t[2]);var t})),n=t.filter((function(e,o){return t.indexOf(e)==o}));console.log(n),l(n)}}),[o,u]),w=Object(i.useCallback)((function(e){console.log(e.target.value),p(e.target.value)}),[]),O=Object(i.useCallback)((function(e){window.scrollTo(0,document.body.scrollHeight),f(e)}),[]);return Object(D.jsxs)(S,{children:[Object(D.jsxs)(U,{children:[Object(D.jsx)(E,{children:"Extract desired number of colors from your image! No image-upload, processing takes place locally in the browser."}),Object(D.jsx)(J,{imageLoaded:x}),Object(D.jsx)(F,{ref:g}),o.img&&Object(D.jsxs)(W,{children:[Object(D.jsx)(V,{onConvert:m}),Object(D.jsx)(K,{number:u,onChange:w})]}),o.img&&Object(D.jsx)(L,{children:c.map((function(e){return Object(D.jsx)($,{color:e,onClick:O},e)}))})]}),Object(D.jsx)(z,{}),Object(D.jsx)(_,{})]})},se=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,54)).then((function(t){var o=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;o(e),n(e),i(e),r(e),a(e)}))},ce=o(4),le=u.a.div(ee||(ee=Object(n.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  margin-top: 150px;\n"]))),de=u.a.div(te||(te=Object(n.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  align-items: flex-start;\n"]))),he=function(){return Object(D.jsx)(le,{children:Object(D.jsxs)(de,{children:[Object(D.jsx)("h2",{children:"Privacy Policy"}),Object(D.jsx)("p",{children:'Personal data (usually referred to just as "data" below) will only be processed by us to the extent necessary and for the purpose of providing a functional and user-friendly website, including its contents, and the services offered there.'}),Object(D.jsx)("p",{children:'Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation (hereinafter referred to as the "GDPR"), "processing" refers to any operation or set of operations such as collection, recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or otherwise making available, alignment, or combination, restriction, erasure, or destruction performed on personal data, whether by automated means or not.'}),Object(D.jsx)("p",{children:"The following privacy policy is intended to inform you in particular about the type, scope, purpose, duration, and legal basis for the processing of such data either under our own control or in conjunction with others. We also inform you below about the third-party components we use to optimize our website and improve the user experience which may result in said third parties also processing data they collect and control."}),Object(D.jsx)("p",{children:"Our privacy policy is structured as follows:"}),Object(D.jsx)("p",{children:"I. The rights of users and data subjects II. Information about the data processing"}),Object(D.jsx)("h4",{children:"I. The rights of users and data subjects"}),Object(D.jsx)("p",{children:"With regard to the data processing to be described in more detail below, users and data subjects have the right"}),Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{children:"to confirmation of whether data concerning them is being processed, information about the data being processed, further information about the nature of the data processing, and copies of the data (cf. also Art. 15 GDPR);"}),Object(D.jsx)("li",{children:"to correct or complete incorrect or incomplete data (cf. also Art. 16 GDPR);"}),Object(D.jsx)("li",{children:"to the immediate deletion of data concerning them (cf. also Art. 17 DSGVO), or, alternatively, if further processing is necessary as stipulated in Art. 17 Para. 3 GDPR, to restrict said processing per Art. 18 GDPR;"}),Object(D.jsx)("li",{children:"to receive copies of the data concerning them and/or provided by them and to have the same transmitted to other providers/controllers (cf. also Art. 20 GDPR);"}),Object(D.jsx)("li",{children:"to file complaints with the supervisory authority if they believe that data concerning them is being processed by the controller in breach of data protection provisions (see also Art. 77 GDPR)."})]}),Object(D.jsx)("p",{children:"In addition, the controller is obliged to inform all recipients to whom it discloses data of any such corrections, deletions, or restrictions placed on processing the same per Art. 16, 17 Para. 1, 18 GDPR. However, this obligation does not apply if such notification is impossible or involves a disproportionate effort. Nevertheless, users have a right to information about these recipients."}),Object(D.jsx)("p",{children:Object(D.jsx)("strong",{children:"Likewise, under Art. 21 GDPR, users and data subjects have the right to object to the controller's future processing of their data pursuant to Art. 6 Para. 1 lit. f) GDPR. In particular, an objection to data processing for the purpose of direct advertising is permissible."})}),Object(D.jsx)("h4",{children:"II. Information about the data processing"}),Object(D.jsx)("p",{children:"Your data processed when using our website will be deleted or blocked as soon as the purpose for its storage ceases to apply, provided the deletion of the same is not in breach of any statutory storage obligations or unless otherwise stipulated below."}),Object(D.jsx)("h4",{children:"Server data"}),Object(D.jsx)("p",{children:"For technical reasons, the following data sent by your internet browser to us or to our server provider will be collected, especially to ensure a secure and stable website: These server log files record the type and version of your browser, operating system, the website from which you came (referrer URL), the webpages on our site visited, the date and time of your visit, as well as the IP address from which you visited our site."}),Object(D.jsx)("p",{children:"The data thus collected will be temporarily stored, but not in association with any other of your data."}),Object(D.jsx)("p",{children:"The basis for this storage is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the improvement, stability, functionality, and security of our website."}),Object(D.jsx)("p",{children:"The data will be deleted within no more than seven days, unless continued storage is required for evidentiary purposes. In which case, all or part of the data will be excluded from deletion until the investigation of the relevant incident is finally resolved."}),Object(D.jsx)("h4",{children:"Cookies"}),Object(D.jsx)("h4",{children:"a) Session cookies"}),Object(D.jsx)("p",{children:"We use cookies on our website. Cookies are small text files or other storage technologies stored on your computer by your browser. These cookies process certain specific information about you, such as your browser, location data, or IP address. "}),Object(D.jsx)("p",{children:"This processing makes our website more user-friendly, efficient, and secure, allowing us, for example, to display our website in different languages or to offer a shopping cart function."}),Object(D.jsx)("p",{children:"The legal basis for such processing is Art. 6 Para. 1 lit. b) GDPR, insofar as these cookies are used to collect data to initiate or process contractual relationships."}),Object(D.jsx)("p",{children:"If the processing does not serve to initiate or process a contract, our legitimate interest lies in improving the functionality of our website. The legal basis is then Art. 6 Para. 1 lit. f) GDPR."}),Object(D.jsx)("p",{children:"When you close your browser, these session cookies are deleted."}),Object(D.jsx)("h4",{children:"b) Third-party cookies"}),Object(D.jsx)("p",{children:"If necessary, our website may also use cookies from companies with whom we cooperate for the purpose of advertising, analyzing, or improving the features of our website."}),Object(D.jsx)("p",{children:"Please refer to the following information for details, in particular for the legal basis and purpose of such third-party collection and processing of data collected through cookies."}),Object(D.jsx)("h4",{children:"c) Disabling cookies"}),Object(D.jsx)("p",{children:"You can refuse the use of cookies by changing the settings on your browser. Likewise, you can use the browser to delete cookies that have already been stored. However, the steps and measures required vary, depending on the browser you use. If you have any questions, please use the help function or consult the documentation for your browser or contact its maker for support. Browser settings cannot prevent so-called flash cookies from being set. Instead, you will need to change the setting of your Flash player. The steps and measures required for this also depend on the Flash player you are using. If you have any questions, please use the help function or consult the documentation for your Flash player or contact its maker for support."}),Object(D.jsx)("p",{children:"If you prevent or restrict the installation of cookies, not all of the functions on our site may be fully usable."}),Object(D.jsx)("h4",{children:"Contact"}),Object(D.jsx)("p",{children:"If you contact us via email or the contact form, the data you provide will be used for the purpose of processing your request. We must have this data in order to process and answer your inquiry; otherwise we will not be able to answer it in full or at all."}),Object(D.jsx)("p",{children:"The legal basis for this data processing is Art. 6 Para. 1 lit. b) GDPR."}),Object(D.jsx)("p",{children:"Your data will be deleted once we have fully answered your inquiry and there is no further legal obligation to store your data, such as if an order or contract resulted therefrom."}),Object(D.jsx)("h4",{children:"Google Analytics"}),Object(D.jsx)("p",{children:"We use Google Analytics on our website. This is a web analytics service provided by Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043 (hereinafter: Google)."}),Object(D.jsx)("p",{children:"Through certification according to the EU-US Privacy Shield"}),Object(D.jsx)("p",{children:Object(D.jsx)("a",{href:"https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active",children:"https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"})}),Object(D.jsx)("p",{children:"Google guarantees that it will follow the EU's data protection regulations when processing data in the United States."}),Object(D.jsx)("p",{children:"The Google Analytics service is used to analyze how our website is used. The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the analysis, optimization, and economic operation of our site."}),Object(D.jsx)("p",{children:"Usage and user-related information, such as IP address, place, time, or frequency of your visits to our website will be transmitted to a Google server in the United States and stored there. However, we use Google Analytics with the so-called anonymization function, whereby Google truncates the IP address within the EU or the EEA before it is transmitted to the US."}),Object(D.jsx)("p",{children:"The data collected in this way is in turn used by Google to provide us with an evaluation of visits to our website and what visitors do once there. This data can also be used to provide other services related to the use of our website and of the internet in general."}),Object(D.jsx)("p",{children:"Google states that it will not connect your IP address to other data. In addition, Google provides further information with regard to its data protection practices at"}),Object(D.jsxs)("p",{children:[Object(D.jsx)("a",{href:"https://www.google.com/intl/de/policies/privacy/partners",children:"https://www.google.com/intl/de/policies/privacy/partners"}),","]}),Object(D.jsx)("p",{children:"including options you can exercise to prevent such use of your data."}),Object(D.jsx)("p",{children:"In addition, Google offers an opt-out add-on at"}),Object(D.jsx)("p",{children:Object(D.jsx)("a",{href:"https://tools.google.com/dlpage/gaoptout?hl=en",children:"https://tools.google.com/dlpage/gaoptout?hl=en"})}),Object(D.jsx)("p",{children:"in addition with further information. This add-on can be installed on the most popular browsers and offers you further control over the data that Google collects when you visit our website. The add-on informs Google Analytics' JavaScript (ga.js) that no information about the website visit should be transmitted to Google Analytics. However, this does not prevent information from being transmitted to us or to other web analytics services we may use as detailed herein."}),Object(D.jsx)("h4",{children:"Google reCAPTCHA"}),Object(D.jsx)("p",{children:'Our website uses Google reCAPTCHA to check and prevent automated servers ("bots") from accessing and interacting with our website. This is a service provided by Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043 (hereinafter: Google).'}),Object(D.jsx)("p",{children:"Through certification according to the EU-US Privacy Shield"}),Object(D.jsx)("p",{children:Object(D.jsx)("a",{href:"https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active",children:"https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"})}),Object(D.jsx)("p",{children:"Google guarantees that it will follow the EU's data protection regulations when processing data in the United States."}),Object(D.jsx)("p",{children:"This service allows Google to determine from which website your request has been sent and from which IP address the reCAPTCHA input box has been used. In addition to your IP address, Google may collect other information necessary to provide and guarantee this service. "}),Object(D.jsx)("p",{children:"The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the security of our website and in the prevention of unwanted, automated access in the form of spam or similar."}),Object(D.jsx)("p",{children:"Google offers detailed information at"}),Object(D.jsx)("p",{children:Object(D.jsx)("a",{href:"https://policies.google.com/privacy",children:"https://policies.google.com/privacy"})}),Object(D.jsx)("p",{children:"concerning the general handling of your user data."})]})})},ue=o(23),pe=u.a.div(oe||(oe=Object(n.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  margin-top: 150px;\n"]))),be=u.a.div(ne||(ne=Object(n.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  align-items: flex-start;\n"]))),je=function(){return Object(D.jsx)(pe,{children:Object(D.jsxs)(be,{children:[Object(D.jsx)("h2",{children:"Image Privacy"}),Object(D.jsx)("p",{children:"No images will be uploaded to our servers, all data processing is done locally in the browser"})]})})},fe=u.a.div(ie||(ie=Object(n.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  text-align: center;\n  padding: 30px;\n  background-color:white;\n  border-bottom: 1px solid #ddd;\n  font-size:40px;\n  background-color: #eee;\n"]))),ge=u.a.span(re||(re=Object(n.a)(["\n  font-size:42px;\n  color: red;\n  font-weight: 800;\n"]))),xe=function(){return Object(D.jsxs)(fe,{children:["Image",Object(D.jsx)(ge,{children:"2"}),"Color"]})},me=document.getElementById("root");me.hasChildNodes()?Object(ue.hydrate)(Object(D.jsxs)(r.a.StrictMode,{children:[Object(D.jsx)(xe,{}),Object(D.jsx)(R.a,{children:Object(D.jsxs)(ce.c,{children:[Object(D.jsx)(ce.a,{exact:!0,path:"/",children:Object(D.jsx)(ae,{})}),Object(D.jsx)(ce.a,{path:"/privacy",children:Object(D.jsx)(he,{})}),Object(D.jsx)(ce.a,{path:"/imageprivacy",children:Object(D.jsx)(je,{})})]})})]}),me):Object(ue.render)(Object(D.jsxs)(r.a.StrictMode,{children:[Object(D.jsx)(xe,{}),Object(D.jsx)(R.a,{children:Object(D.jsxs)(ce.c,{children:[Object(D.jsx)(ce.a,{exact:!0,path:"/",children:Object(D.jsx)(ae,{})}),Object(D.jsx)(ce.a,{path:"/privacy",children:Object(D.jsx)(he,{})}),Object(D.jsx)(ce.a,{path:"/imageprivacy",children:Object(D.jsx)(je,{})})]})})]}),me),se()}},[[53,1,2]]]);
//# sourceMappingURL=main.9402086a.chunk.js.map