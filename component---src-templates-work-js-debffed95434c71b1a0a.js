(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"WorkQuery",function(){return p});var r=a(0),n=a.n(r),i=a(151),o=a(155),l=a(160),s=a(154),c=i.a.div.withConfig({displayName:"work__WorkView",componentId:"sc-1vb8m1w-0"})(["margin:180px auto 100px;box-sizing:border-box;width:40%;@media(max-width:1590px){width:40%}@media(max-width:1100px){width:55%}@media(max-width:878px){width:75%}@media(max-width:510px){width:95%;padding:25px 0px;margin:100px auto 50px;}.title-wrapper{margin-bottom:50px;h1{text-align:center;font-size:160px;color:var(--tertiaryColor);-webkit-text-stroke:3px var(--tertiaryColor);margin-bottom:0px;font-weight:normal;@media(max-width:768px){font-size:90px}@media(max-width:480px){font-size:60px}}.tags{width:100%;text-align:center;span{margin:-50px 5px 0;}}}.thumbnail-wrapper{text-align:center;img{max-width:600px;width:100%;}}.work-content{margin-top:150px;line-height:1.5;font-size:20px;letter-spacing:1px;color:var(--primaryColor);@media(max-width:480px){margin-top:50px;}h2{color:var(--secondaryColor);margin:10px 0px 10px;font-size:28px;line-height:1.2;}p{margin-bottom:45px;}a{color:var(--tertiaryColor);text-decoration:none;}ul{margin:40px 0px 60px;}}"]),p="3729829838";t.default=function(e){var t=e.data,a=(e.location,e.pageContext,t.markdownRemark),r=a.frontmatter,i=a.html;return n.a.createElement(l.a,null,n.a.createElement(o.a,{title:r.title,description:r.excerpt,keywords:r.tags}),n.a.createElement(c,null,n.a.createElement("div",{className:"title-wrapper"},n.a.createElement("h1",null," ",r.title," "),n.a.createElement("div",{className:"tags"},r.tags.map(function(e,t){return n.a.createElement("span",{key:e},e)}))),n.a.createElement("div",{className:"thumbnail-wrapper"},n.a.createElement(s.a,{title:r.title,imageUrl:r.thumbnail.childImageSharp.fluid.src})),n.a.createElement("div",{className:"work-content",dangerouslySetInnerHTML:{__html:i}})))}},152:function(e,t,a){"use strict";a.d(t,"b",function(){return p});var r=a(0),n=a.n(r),i=a(4),o=a.n(i),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a});a(153);var c=n.a.createContext({}),p=function(e){return n.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e,t,a){var r;e.exports=(r=a(158))&&r.default||r},154:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(4),o=a.n(i),l=function(e){var t=e.title,a=e.imageUrl;return n.a.createElement("img",{alt:t,src:a})};l.propTypes={title:o.a.string,imageUrl:o.a.string},t.a=l},155:function(e,t,a){"use strict";var r=a(156),n=a(0),i=a.n(n),o=a(4),l=a.n(o),s=a(163),c=a.n(s);function p(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,l=e.title,s=r.data.site,p=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:l},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:p}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)},i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}))}p.defaultProps={lang:"en",meta:[],keywords:[],description:""},p.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=p},156:function(e){e.exports={data:{site:{siteMetadata:{title:"encapsulated",description:"Little pills about javascript, react, angular, gatsbyjs, nodejs by Juanma Perez, Front end developer",author:"Juanma Perez"}}}}},157:function(e){e.exports={data:{site:{siteMetadata:{title:"encapsulated"}}}}},158:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),i=a(4),o=a.n(i),l=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},159:function(e,t,a){e.exports=a.p+"static/logo_pill-9042e18128ac9c15c1bdbf8bc5a69755.png"},160:function(e,t,a){"use strict";var r=a(157),n=a(0),i=a.n(n),o=a(4),l=a.n(o),s=a(152),c=(a(164),a(165),a(151)),p=a(154),d=a(7),m=a.n(d),u=c.a.div.withConfig({displayName:"menu__MenuView",componentId:"ldryeq-0"})(["#nav-icon{margin:5px;width:35px;height:20px;position:relative;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.5s ease-in-out;-moz-transition:.5s ease-in-out;-o-transition:.5s ease-in-out;transition:.5s ease-in-out;cursor:pointer;.bar{display:block;position:absolute;height:2px;width:100%;background:var(--primaryColor);border-radius:9px;opacity:1;left:0;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.25s ease-in-out;-moz-transition:.25s ease-in-out;-o-transition:.25s ease-in-out;transition:.25s ease-in-out;&:nth-child(1){top:0px}&:nth-child(2),&:nth-child(3){top:9px}&:nth-child(4){top:18px}}&.open{.bar{&:nth-child(1){top:18px;width:0%;left:50%;}&:nth-child(2){-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);}&:nth-child(3){-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);}&:nth-child(4){top:18px;width:0%;left:50%;}}}}"]),h=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).state={open:!1},t.toggleMenu=function(){var e=t.state.open;t.setState(function(){return{open:!e}})},t}return m()(t,e),t.prototype.render=function(){var e=this.state.open;return i.a.createElement(u,null,i.a.createElement("div",{className:e?"open":"",id:"nav-icon",onClick:this.toggleMenu},i.a.createElement("span",{className:"bar"}),i.a.createElement("span",{className:"bar"}),i.a.createElement("span",{className:"bar"}),i.a.createElement("span",{className:"bar"})))},t}(n.Component),g=a(159),x=a.n(g),f=a(161),w=a(162),b=c.a.div.withConfig({displayName:"theme-switcher__ThemeSwitcherView",componentId:"sc-15zitb9-0"})(["margin-top:5px;margin-right:5px;border:1px solid var(--primaryColor);width:40px;height:20px;border-radius:20px/20px;position:relative;.dark-icon{font-size:12px;position:absolute;left:5px;top:4px;color:var(--primaryColor);}.light-icon{font-size:12px;position:absolute;right:5px;top:4px;color:var(--primaryColor);}.ball-button{position:absolute;z-index:10;top:-1px;left:-1px;border:1px solid var(--primaryColor);width:20px;height:20px;border-radius:50%;background:var(--bgColor);transition:all 300ms ease-in;:hover{border:1px solid var(--secondaryColor);}&.dark{transform:translateX(20px);}}"]),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={theme:"light"},a.toggleButton=function(){var e=a.state.theme;e="light"===e?"dark":"light",a.setTheme(e),a.storeTheme(e)},a.setTheme=function(e){a.setState({theme:e},function(){var t=document.querySelector("body");t.className="",t.classList.add(e)})},a.storeTheme=function(e){a.store&&a.store.setItem("theme",e)},a.store="undefined"==typeof localStorage?null:localStorage,a}m()(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.store){var e=this.store.getItem("theme")||"light";this.setState({theme:e}),this.setTheme(e)}},a.render=function(){var e=this.state.theme;return i.a.createElement(b,{onClick:this.toggleButton},i.a.createElement(f.a,{className:"light-icon",icon:w.f}),i.a.createElement(f.a,{className:"dark-icon",icon:w.e}),i.a.createElement("div",{className:"ball-button "+e}))},t}(n.Component),y=c.a.header.withConfig({displayName:"header__HeaderView",componentId:"sc-31ozxh-0"})(["padding:0px;color:#000;width:100%;position:fixed;top:0px;left:0px;z-index:1000;box-sizing:border-box;.header-wrapper{display:flex;flex-direction:row;justify-content:space-between;padding:15px 20px;box-sizing:border-box;max-width:100%;div{display:flex;flex-direction:row;justify-content:flex-start;.logo{margin-top:3px;width:35px;height:24px;img{max-width:100%;}}.title{margin-left:5px;font-size:26px;line-height:1.1;font-weight:800;color:var(--primaryColor);display:inline-block;font-family:'Questrial',sans-serif;mix-blend-mode:difference;.title-link{color:var(--primaryColor);letter-spacing:1.4px;-webkit-text-stroke:0.3px var(--primaryColor);text-decoration:none;mix-blend-mode:difference;}@media(max-width:510px){display:none;}}}}"]),E=function(e){var t=e.siteTitle;return i.a.createElement(y,null,i.a.createElement("div",{className:"header-wrapper"},i.a.createElement("div",null,i.a.createElement("div",{className:"logo"},i.a.createElement(p.a,{className:"logo",title:"encapsulated logotype",imageUrl:x.a})),i.a.createElement("h1",{className:"title"},i.a.createElement(s.a,{className:"title-link",to:"/"},t))),i.a.createElement("div",null,i.a.createElement(v,null),i.a.createElement(h,null))))};E.propTypes={siteTitle:l.a.string},E.defaultProps={siteTitle:""};var k=E,C=function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(k,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"content-wrapper"},t)))},data:r})};C.propTypes={children:l.a.node.isRequired};t.a=C}}]);
//# sourceMappingURL=component---src-templates-work-js-debffed95434c71b1a0a.js.map