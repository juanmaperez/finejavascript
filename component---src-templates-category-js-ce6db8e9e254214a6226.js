(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"CategoryQuery",function(){return g});var r=a(7),i=a.n(r),o=a(0),n=a.n(o),s=a(154),l=a(163),p=a(158),c=a(168),d=a(164),m=a(165),u=s.a.div.withConfig({displayName:"category__CategoryView",componentId:"jfdljx-0"})(["margin:150px auto 80px;width:100%;min-height:10px;.category-header{margin:100px auto;box-sizing:border-box;width:35%;p{text-align:center;font-size:50px;color:var(--primaryColor);-webkit-text-stroke:1.5px var(--primaryColor);}.category-title{text-align:center;margin-top:-10px;font-size:85px;color:transparent;-webkit-text-stroke:0.0002em var(--primaryColor);}@media(max-width:1590px){width:40%}@media(max-width:1100px){width:55%}@media(max-width:878px){width:65%}@media(max-width:510px){width:95%;}}.buttons{display:flex;justify-content:center;padding:0px;margin:0px auto 40px !important;button{color:var(--primaryColor);display:block;border:0px;-webkit-appearance:none !important;background:var(--bgColor);color:var(--primaryColor);margin:5px;width:50px;height:50px;border-radius:50%;outline:none;box-shadow:0 0 0 1px rgba(var(--primaryColorRGB),0.05),0 2px 4px rgba(var(--primaryColorRGB),0.08);&.active{background:#a3cccc;}}@media(max-width:510px){display:none;}}.post-list{display:block;&.grid{display:flex;justify-content:flex-start;flex-wrap:wrap;flex-direction:row;}}@media(min-width:768px){.post-list{transition:all 1s linear;&.grid{display:flex;justify-content:flex-start;flex-wrap:wrap;flex-direction:row;}}}"]),x=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={view:"list"},a.setView=function(e){a.setState({view:e}),a.storeView(e)},a.toggleToGrid=function(){a.setView("grid")},a.toggleToList=function(){a.setView("list")},a.storeView=function(e){a.store&&a.store.setItem("view",e)},a.store="undefined"==typeof localStorage?null:localStorage,a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.store){var e=this.store.getItem("view")||"list";this.setState({view:e})}},a.render=function(){var e=this,t=this.props,a=t.pageContext,r=t.data,i=a.category,o=r.allMarkdownRemark.edges,s=this.state.view;return n.a.createElement(l.a,null,n.a.createElement(p.a,{title:i+" pills",description:"Little of knowledge about "+i,keywords:[i,"javascript","code"]}),n.a.createElement(u,null,n.a.createElement("div",{className:"category-header"},n.a.createElement("p",null,"Little pills about"),n.a.createElement("h2",{className:"category-title"},i)),n.a.createElement("div",{className:"buttons"},n.a.createElement("button",{className:"list"===s?"active":"",onClick:this.toggleToList},n.a.createElement(d.a,{icon:m.d})),n.a.createElement("button",{className:"grid"===s?"active":"",onClick:this.toggleToGrid},n.a.createElement(d.a,{icon:m.c}))),n.a.createElement("div",{className:"post-list "+s},o.map(function(t){var a=t.node.frontmatter;return n.a.createElement(c.a,{listPath:e.props.location.pathname,key:a.path,frontmatter:a,view:s})}))))},t}(o.Component),g="3797001629";t.default=x},155:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),i=a.n(r),o=a(4),n=a.n(o),s=a(33),l=a.n(s);a.d(t,"a",function(){return l.a});a(156);var p=i.a.createContext({}),c=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:n.a.object,query:n.a.string.isRequired,render:n.a.func,children:n.a.func}},156:function(e,t,a){var r;e.exports=(r=a(161))&&r.default||r},157:function(e,t,a){"use strict";var r=a(0),i=a.n(r),o=a(4),n=a.n(o),s=function(e){var t=e.title,a=e.imageUrl;return i.a.createElement("img",{alt:t,src:a})};s.propTypes={title:n.a.string,imageUrl:n.a.string},t.a=s},158:function(e,t,a){"use strict";var r=a(159),i=a(0),o=a.n(i),n=a(4),s=a.n(n),l=a(166),p=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,n=e.keywords,s=e.title,l=r.data.site,c=t||l.siteMetadata.description;return o.a.createElement(p.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(i)})}c.defaultProps={lang:"en",meta:[],keywords:[],description:""},c.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=c},159:function(e){e.exports={data:{site:{siteMetadata:{title:"encapsulated",description:"Little pills about javascript, react, angular, gatsbyjs, nodejs by Juanma Perez, Front end developer",author:"Juanma Perez"}}}}},160:function(e){e.exports={data:{site:{siteMetadata:{title:"encapsulated"}}}}},161:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),o=a(4),n=a.n(o),s=a(55),l=a(2),p=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};p.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},t.default=p},162:function(e,t,a){e.exports=a.p+"static/logo_pill-9042e18128ac9c15c1bdbf8bc5a69755.png"},163:function(e,t,a){"use strict";var r=a(160),i=a(0),o=a.n(i),n=a(4),s=a.n(n),l=a(155),p=(a(74),a(75),a(154)),c=a(157),d=a(7),m=a.n(d),u=p.a.div.withConfig({displayName:"menu__MenuView",componentId:"ldryeq-0"})(["#nav-icon{margin:5px;width:35px;height:20px;position:relative;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.5s ease-in-out;-moz-transition:.5s ease-in-out;-o-transition:.5s ease-in-out;transition:.5s ease-in-out;cursor:pointer;.bar{display:block;position:absolute;height:2px;width:100%;background:var(--primaryColor);border-radius:9px;opacity:1;left:0;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.25s ease-in-out;-moz-transition:.25s ease-in-out;-o-transition:.25s ease-in-out;transition:.25s ease-in-out;&:nth-child(1){top:0px}&:nth-child(2),&:nth-child(3){top:9px}&:nth-child(4){top:18px}}&.open{.bar{&:nth-child(1){top:18px;width:0%;left:50%;}&:nth-child(2){-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);}&:nth-child(3){-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);}&:nth-child(4){top:18px;width:0%;left:50%;}}}}"]),x=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state={open:!1},t.toggleMenu=function(){var e=t.state.open;t.setState(function(){return{open:!e}})},t}return m()(t,e),t.prototype.render=function(){var e=this.state.open;return o.a.createElement(u,null,o.a.createElement("div",{className:e?"open":"",id:"nav-icon",onClick:this.toggleMenu},o.a.createElement("span",{className:"bar"}),o.a.createElement("span",{className:"bar"}),o.a.createElement("span",{className:"bar"}),o.a.createElement("span",{className:"bar"})))},t}(i.Component),g=a(162),h=a.n(g),f=a(164),w=a(165),v=p.a.div.withConfig({displayName:"theme-switcher__ThemeSwitcherView",componentId:"sc-15zitb9-0"})(["margin-top:5px;margin-right:5px;border:1px solid var(--primaryColor);width:40px;height:20px;border-radius:20px/20px;position:relative;.dark-icon{font-size:12px;position:absolute;left:5px;top:4px;color:var(--primaryColor);}.light-icon{font-size:12px;position:absolute;right:5px;top:4px;color:var(--primaryColor);}.ball-button{position:absolute;z-index:10;top:-1px;left:-1px;border:1px solid var(--primaryColor);width:20px;height:20px;border-radius:50%;background:var(--bgColor);transition:all 300ms ease-in;:hover{border:1px solid var(--secondaryColor);}&.dark{transform:translateX(20px);}}"]),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={theme:"light"},a.toggleButton=function(){var e=a.state.theme;e="light"===e?"dark":"light",a.setTheme(e),a.storeTheme(e)},a.setTheme=function(e){a.setState({theme:e},function(){var t=document.querySelector("body");t.className="",t.classList.add(e)})},a.storeTheme=function(e){a.store&&a.store.setItem("theme",e)},a.store="undefined"==typeof localStorage?null:localStorage,a}m()(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.store){var e=this.store.getItem("theme")||"light";this.setState({theme:e}),this.setTheme(e)}},a.render=function(){var e=this.state.theme;return o.a.createElement(v,{onClick:this.toggleButton},o.a.createElement(f.a,{className:"light-icon",icon:w.f}),o.a.createElement(f.a,{className:"dark-icon",icon:w.e}),o.a.createElement("div",{className:"ball-button "+e}))},t}(i.Component),y=p.a.header.withConfig({displayName:"header__HeaderView",componentId:"sc-31ozxh-0"})(["padding:0px;color:#000;width:100%;position:fixed;top:0px;left:0px;z-index:1000;box-sizing:border-box;.header-wrapper{display:flex;flex-direction:row;justify-content:space-between;padding:15px 20px;box-sizing:border-box;max-width:100%;div{display:flex;flex-direction:row;justify-content:flex-start;.logo{margin-top:3px;width:35px;height:24px;img{max-width:100%;}}.title{margin-left:5px;font-size:26px;line-height:1.1;font-weight:800;color:var(--primaryColor);display:inline-block;font-family:'Questrial',sans-serif;mix-blend-mode:difference;.title-link{color:var(--primaryColor);letter-spacing:1.4px;-webkit-text-stroke:0.3px var(--primaryColor);text-decoration:none;mix-blend-mode:difference;}@media(max-width:510px){display:none;}}}}"]),E=function(e){var t=e.siteTitle;return o.a.createElement(y,null,o.a.createElement("div",{className:"header-wrapper"},o.a.createElement("div",null,o.a.createElement("div",{className:"logo"},o.a.createElement(c.a,{className:"logo",title:"encapsulated logotype",imageUrl:h.a})),o.a.createElement("h1",{className:"title"},o.a.createElement(l.a,{className:"title-link",to:"/"},t))),o.a.createElement("div",null,o.a.createElement(b,null),o.a.createElement(x,null))))};E.propTypes={siteTitle:s.a.string},E.defaultProps={siteTitle:""};var k=E,C=function(e){var t=e.children;return o.a.createElement(l.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"content-wrapper"},t)))},data:r})};C.propTypes={children:s.a.node.isRequired};t.a=C},168:function(e,t,a){"use strict";var r=a(0),i=a.n(r),o=a(155),n=a(154),s=a(167),l=n.a.div.withConfig({displayName:"post-item__PostItemView",componentId:"j2xxed-0"})(["margin:",";padding:",";box-sizing:border-box;width:",";@media(max-width:1590px){width:",";}@media(max-width:1100px){width:",";}@media(max-width:878px){width:",";}@media(max-width:510px){width:98%;margin:40px auto 0px;padding:10px;}.post-wrapper{height:100%;opacity:0;transition:opacity 600ms linear;&.fade-in{opacity:1;}.post{height:100%;background:var(--bgColor);border-radius:10px;display:flex;flex-direction:column;justify-content:space-around;box-sizing:border-box;transition:all 200ms linear;overflow:hidden;box-shadow:0 0 0 1px rgba(var(--primaryColorRGB),0.05),0 2px 4px rgba(var(--primaryColorRGB),0.08);&:hover{0px 3px 5px 5px rgba(var(--primaryColorRGB),0.1),0 2px 4px rgba(var(--primaryColorRGB),0.08);transform:translateY(-5px);.image-container{.image{transform:scale(1.1);}}}.image-container{box-shadow:0 0 0 1px rgba(var(--primaryColorRGB),0.05),0 2px 4px rgba(var(--primaryColorRGB),0.08);flex:1;position:relative;overflow:hidden;height:320px;max-height:320px;@media(max-width:520px){height:260px}.image{transition:all 300ms linear;position:relative;height:100%;width:100%;background:url(",");background-size:cover;background-position:center center;}}.post-container{position:relative;padding:20px 20px 40px;flex:1;.post-icon{width:25px;height:50px;background:url(",");border-radius:50%/25%;position:absolute;top:-26px;left:20px;background-size:130%;background-position:center 1px;background-repeat:no-repeat;box-shadow:0px 1px 1px 1px rgba(var(--primaryColorRGB),0.2),0 2px 4px rgba(var(--primaryColorRGB),0.08);overflow:hidden;background-color:transparent;}.post-date{display:block;margin:25px 0px 5px;font-size:15px;letter-spacing:1px;opacity:.6;color:var(--primaryColor);font-weight:bolder;}.post-title{margin:20px 0px 10px;padding:0px;font-size:45px;line-height:1;letter-spacing:1px;color:var(--tertiaryColor);-webkit-text-stroke:0.5px var(--tertiaryColor);@media(max-width:510px){font-size:34px}a{text-decoration:none;color:var(--tertiaryColor) !important;}}.post-excerpt{display:block;font-size:20px;margin-bottom:0px;line-height:1.5;color:var(--primaryColor);font-weight:normal;}}}}"],function(e){return e&&"list"===e.view?"40px auto 20px":"40px 0px 0px"},function(e){return e&&"list"===e.view?"0px":"0px 20px"},function(e){return e&&"list"===e.view?"35%":"33%"},function(e){return e&&"list"===e.view?"40%":"33%"},function(e){return e&&"list"===e.view?"55%":"33%"},function(e){return e&&"list"===e.view?"65%":"50%"},function(e){return e.image},function(e){return e.icon});t.a=function(e){var t=e.frontmatter,a=e.view,r=e.listPath;return i.a.createElement(l,{view:a,image:t.thumbnail.childImageSharp.fluid.src,icon:t.icon.childImageSharp.fluid.src},i.a.createElement(s.a,null,i.a.createElement(s.b,{classToggle:"fade-in",triggerHook:.75},i.a.createElement("div",{className:"post-wrapper"},i.a.createElement("div",{className:"post"},i.a.createElement("div",{className:"image-container"},i.a.createElement("div",{className:"image"})),i.a.createElement("div",{className:"post-container"},i.a.createElement(o.a,{to:"/blog/category/"+t.category},i.a.createElement("div",{className:"post-icon"})),i.a.createElement("h2",{className:"post-title"},i.a.createElement(o.a,{to:t.path,state:{prevPath:r}}," ",t.title," ")),i.a.createElement("div",{className:"post-date"},t.date),i.a.createElement("div",{className:"post-excerpt"},t.excerpt)))))))}}}]);
//# sourceMappingURL=component---src-templates-category-js-ce6db8e9e254214a6226.js.map