(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{145:function(t,e,a){"use strict";a.r(e),a.d(e,"WorkQuery",function(){return p});var n=a(0),r=a.n(n),i=a(153),o=a(157),s=a(162),l=a(156),c=i.a.div.withConfig({displayName:"work__WorkView",componentId:"sc-1vb8m1w-0"})(["margin:180px auto 100px;box-sizing:border-box;width:40%;@media(max-width:1590px){width:40%}@media(max-width:1100px){width:55%}@media(max-width:878px){width:75%}@media(max-width:510px){width:95%;padding:25px 0px;margin:100px auto 50px;}.title-wrapper{margin-bottom:50px;h1{text-align:center;font-size:160px;color:var(--tertiaryColor);-webkit-text-stroke:3px var(--tertiaryColor);margin-bottom:0px;font-weight:normal;@media(max-width:768px){font-size:90px}@media(max-width:480px){font-size:60px}}.tags{width:100%;text-align:center;margin-top:30px;span{font-size:20px;margin:-50px 5px 0;&:after{content:'|';margin-left:10px;}&:last-of-type{&:after{content:'';}}}}}.thumbnail-wrapper{text-align:center;img{max-width:600px;width:100%;}}.work-content{margin-top:150px;line-height:1.5;font-size:20px;letter-spacing:1px;color:var(--primaryColor);@media(max-width:480px){margin-top:50px;padding:20px;}h2{color:var(--secondaryColor);margin:10px 0px 10px;font-size:28px;line-height:1.2;}p{margin-bottom:45px;}a{color:var(--tertiaryColor);text-decoration:none;}ul{margin:40px 0px 60px;}}"]),p="3729829838";e.default=function(t){var e=t.data,a=(t.location,t.pageContext,e.markdownRemark),n=a.frontmatter,i=a.html;return r.a.createElement(s.a,null,r.a.createElement(o.a,{title:n.title,description:n.excerpt,keywords:n.tags}),r.a.createElement(c,null,r.a.createElement("div",{className:"title-wrapper"},r.a.createElement("h1",null," ",n.title," "),r.a.createElement("div",{className:"tags"},n.tags.map(function(t,e){return r.a.createElement("span",{key:t},t)}))),r.a.createElement("div",{className:"thumbnail-wrapper"},r.a.createElement(l.a,{title:n.title,imageUrl:n.thumbnail.childImageSharp.fluid.src})),r.a.createElement("div",{className:"work-content",dangerouslySetInnerHTML:{__html:i}})))}},154:function(t,e,a){"use strict";a.d(e,"b",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(33),l=a.n(s);a.d(e,"a",function(){return l.a});a(155);var c=r.a.createContext({}),p=function(t){return r.a.createElement(c.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},155:function(t,e,a){var n;t.exports=(n=a(160))&&n.default||n},156:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=function(t){var e=t.title,a=t.imageUrl;return r.a.createElement("img",{alt:e,src:a})};s.propTypes={title:o.a.string,imageUrl:o.a.string},e.a=s},157:function(t,e,a){"use strict";var n=a(158),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(165),c=a.n(l);function p(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,s=t.title,l=n.data.site,p=e||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:s},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:p},{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}p.defaultProps={lang:"en",meta:[],keywords:[],description:""},p.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=p},158:function(t){t.exports={data:{site:{siteMetadata:{title:"encapsulated",description:"Little pills about javascript, react, angular, gatsbyjs, nodejs by Juanma Perez, Front end developer",author:"Juanma Perez"}}}}},159:function(t){t.exports={data:{site:{siteMetadata:{title:"encapsulated"}}}}},160:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(55),l=a(2),c=function(t){var e=t.location,a=l.default.getResourcesForPathnameSync(e.pathname);return a?r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},161:function(t,e,a){t.exports=a.p+"static/logo_pill-9042e18128ac9c15c1bdbf8bc5a69755.png"},162:function(t,e,a){"use strict";var n=a(159),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(154),c=(a(166),a(167),a(153)),p=a(156),d=a(7),m=a.n(d),u=c.a.div.withConfig({displayName:"menu__MenuView",componentId:"ldryeq-0"})(["#nav-icon{margin:5px;width:35px;height:20px;position:relative;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.5s ease-in-out;-moz-transition:.5s ease-in-out;-o-transition:.5s ease-in-out;transition:.5s ease-in-out;cursor:pointer;.bar{display:block;position:absolute;height:2px;width:100%;background:var(--primaryColor);border-radius:9px;opacity:1;left:0;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.25s ease-in-out;-moz-transition:.25s ease-in-out;-o-transition:.25s ease-in-out;transition:.25s ease-in-out;&:nth-child(1){top:0px}&:nth-child(2),&:nth-child(3){top:9px}&:nth-child(4){top:18px}}&.open{.bar{&:nth-child(1){top:18px;width:0%;left:50%;}&:nth-child(2){-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);}&:nth-child(3){-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);}&:nth-child(4){top:18px;width:0%;left:50%;}}}}"]),h=function(t){function e(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).state={open:!1},e.toggleMenu=function(){var t=e.state.open;e.setState(function(){return{open:!t}})},e}return m()(e,t),e.prototype.render=function(){var t=this.state.open;return i.a.createElement(u,null,i.a.createElement("div",{className:t?"open":"",id:"nav-icon",onClick:this.toggleMenu},i.a.createElement("span",{className:"bar"}),i.a.createElement("span",{className:"bar"}),i.a.createElement("span",{className:"bar"}),i.a.createElement("span",{className:"bar"})))},e}(r.Component),g=a(161),x=a.n(g),f=a(163),w=a(164),b=c.a.div.withConfig({displayName:"theme-switcher__ThemeSwitcherView",componentId:"sc-15zitb9-0"})(["margin-top:5px;margin-right:5px;border:1px solid var(--primaryColor);width:40px;height:20px;border-radius:20px/20px;position:relative;.dark-icon{font-size:12px;position:absolute;left:5px;top:4px;color:var(--primaryColor);}.light-icon{font-size:12px;position:absolute;right:5px;top:4px;color:var(--primaryColor);}.ball-button{position:absolute;z-index:10;top:-1px;left:-1px;border:1px solid var(--primaryColor);width:20px;height:20px;border-radius:50%;background:var(--bgColor);transition:all 300ms ease-in;:hover{border:1px solid var(--secondaryColor);}&.dark{transform:translateX(20px);}}"]),y=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={theme:"light"},a.toggleButton=function(){var t=a.state.theme;t="light"===t?"dark":"light",a.setTheme(t),a.storeTheme(t)},a.setTheme=function(t){a.setState({theme:t},function(){var e=document.querySelector("body");e.className="",e.classList.add(t)})},a.storeTheme=function(t){a.store&&a.store.setItem("theme",t)},a.store="undefined"==typeof localStorage?null:localStorage,a}m()(e,t);var a=e.prototype;return a.componentDidMount=function(){if(this.store){var t=this.store.getItem("theme")||"light";this.setState({theme:t}),this.setTheme(t)}},a.render=function(){var t=this.state.theme;return i.a.createElement(b,{onClick:this.toggleButton},i.a.createElement(f.a,{className:"light-icon",icon:w.f}),i.a.createElement(f.a,{className:"dark-icon",icon:w.e}),i.a.createElement("div",{className:"ball-button "+t}))},e}(r.Component),v=c.a.header.withConfig({displayName:"header__HeaderView",componentId:"sc-31ozxh-0"})(["padding:0px;color:#000;width:100%;position:fixed;top:0px;left:0px;z-index:1000;box-sizing:border-box;.header-wrapper{display:flex;flex-direction:row;justify-content:space-between;padding:15px 20px;box-sizing:border-box;max-width:100%;div{display:flex;flex-direction:row;justify-content:flex-start;.logo{margin-top:3px;width:35px;height:24px;img{max-width:100%;}}.title{margin-left:5px;font-size:26px;line-height:1.1;font-weight:800;color:var(--primaryColor);display:inline-block;font-family:'Questrial',sans-serif;mix-blend-mode:difference;.title-link{color:var(--primaryColor);letter-spacing:1.4px;-webkit-text-stroke:0.3px var(--primaryColor);text-decoration:none;mix-blend-mode:difference;}@media(max-width:510px){display:none;}}}}"]),E=function(t){var e=t.siteTitle;return i.a.createElement(v,null,i.a.createElement("div",{className:"header-wrapper"},i.a.createElement("div",null,i.a.createElement("div",{className:"logo"},i.a.createElement(p.a,{className:"logo",title:"encapsulated logotype",imageUrl:x.a})),i.a.createElement("h1",{className:"title"},i.a.createElement(l.a,{className:"title-link",to:"/"},e))),i.a.createElement("div",null,i.a.createElement(y,null),i.a.createElement(h,null))))};E.propTypes={siteTitle:s.a.string},E.defaultProps={siteTitle:""};var k=E,C=function(t){var e=t.children;return i.a.createElement(l.b,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(k,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"content-wrapper"},e)))},data:n})};C.propTypes={children:s.a.node.isRequired};e.a=C}}]);
//# sourceMappingURL=component---src-templates-work-js-b4866c591304731fbf2c.js.map