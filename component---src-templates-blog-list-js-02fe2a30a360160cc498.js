(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return w});a(174),a(35);var i=a(7),r=a.n(i),n=a(0),o=a.n(n),l=a(152),s=a(153),p=a(164),c=a(159),d=a(170),m=a(155),g=a(165),x=a(166),u=a(192),f=a.n(u),h=s.a.div.withConfig({displayName:"blog-list__BlogView",componentId:"sc-6dr7w7-0"})(["margin:150px auto 80px;width:100%;min-height:10px;@media(max-width:510px){margin:100px auto 80px;}.list-header{margin:100px auto 0px;box-sizing:border-box;width:30%;display:flex;padding:20px;.image-wrapper{margin-right:20px;img{display:block;max-width:120px;max-height:120px;border-radius:50%;width:100%;overflow:hidden;box-shadow:0 0 0 1px rgba(var(--primaryColorRGB),0.05),0 2px 4px rgba(var(--primaryColorRGB),0.08);}}.info{display:flex;flex-direction:column;justify-content:center;.list-title{text-align:left;font-size:30px;margin:0px 0px 0px;color:var(--secondaryColor);-webkit-text-stroke:0.2px var(--secondaryColor);}p{font-size:18px;color:var(--secondaryColor);opacity:.6;font-style:italic;}@media(max-width:510px){.list-title{font-size:18px;text-align:center;}p{font-size:16px;}}}@media(max-width:1590px){width:30%}@media(max-width:1100px){width:30%}@media(max-width:878px){width:65%}@media(max-width:510px){margin:0px auto 50px;width:98%;flex-direction:column;align-items:center;.image-wrapper{margin-bottom:20px;}}}.buttons{display:flex;justify-content:center;padding:0px;margin:0px auto 40px !important;button{color:var(--primaryColor);display:block;border:0px;-webkit-appearance:none !important;background:var(--bgColor);color:var(--primaryColor);margin:5px;width:50px;height:50px;border-radius:50%;outline:none;box-shadow:0 0 0 1px rgba(var(--primaryColorRGB),0.05),0 2px 4px rgba(var(--primaryColorRGB),0.08);&.active{background:#a3cccc;}}@media(max-width:510px){display:none;}}.post-list{display:block;&.grid{display:flex;justify-content:flex-start;flex-wrap:wrap;flex-direction:row;}}.pagination{display:flex;justify-content:space-between;width:40%;margin:10px auto;@media(max-width:480px){width:95%;}}@media(min-width:768px){.post-list{transition:all 1s linear;&.grid{margin:0px auto;max-width:1496px;display:flex;justify-content:flex-start;flex-wrap:wrap;flex-direction:row;}}}"]),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={view:"list"},a.setView=function(e){a.setState({view:e}),a.storeView(e)},a.toggleToGrid=function(){a.setView("grid")},a.toggleToList=function(){a.setView("list")},a.storeView=function(e){a.store&&a.store.setItem("view",e)},a.store="undefined"==typeof localStorage?null:localStorage,a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.store){var e=this.store.getItem("view")||"list";this.setState({view:e})}},a.render=function(){var e=this,t=this.props.data.allMarkdownRemark.edges,a=this.state.view,i=this.props.pageContext,r=i.currentPage,n=1===r,s=r===i.numPages,u=r-1==1?"/":"/page/"+(r-1).toString(),v="/page/"+(r+1).toString();return o.a.createElement(p.a,null,o.a.createElement(c.a,{title:"Blog",description:"Juanma Perez personal blog about javascript and other technologies related to front end development",keywords:["javascript","development","front end","react","angular","gatsbyjs"]}),o.a.createElement(h,null,o.a.createElement("div",{className:"list-header"},o.a.createElement("div",{className:"image-wrapper"},o.a.createElement(m.a,{imageUrl:f.a,title:"juanma perez"})),o.a.createElement("div",{className:"info"},o.a.createElement("h2",{className:"list-title"},"Personal blog"),o.a.createElement("p",null,"by Juanma Pérez"))),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{className:"list"===a?"active":"",onClick:this.toggleToList},o.a.createElement(g.a,{icon:x.d})),o.a.createElement("button",{className:"grid"===a?"active":"",onClick:this.toggleToGrid},o.a.createElement(g.a,{icon:x.c}))),o.a.createElement("div",{className:"post-list "+a},t.map(function(t){var i=t.node.frontmatter;return o.a.createElement(d.a,{listPath:e.props.location.pathname,key:i.path,frontmatter:i,view:a})})),o.a.createElement("div",{className:"pagination"},o.a.createElement("div",null,!n&&o.a.createElement(l.a,{to:u,rel:"prev"},"← Previous Page")),o.a.createElement("div",null,!s&&o.a.createElement(l.a,{to:v,rel:"next"},"Next Page →")))))},t}(n.Component),w="2494819680";t.default=v},152:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var i=a(0),r=a.n(i),n=a(4),o=a.n(n),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a}),a.d(t,"c",function(){return l.navigate});a(154);var p=r.a.createContext({}),c=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},154:function(e,t,a){var i;e.exports=(i=a(157))&&i.default||i},155:function(e,t,a){"use strict";var i=a(0),r=a.n(i),n=a(4),o=a.n(n),l=function(e){var t=e.title,a=e.imageUrl;return r.a.createElement("img",{alt:t,src:a})};l.propTypes={title:o.a.string,imageUrl:o.a.string},t.a=l},156:function(e,t,a){e.exports=a.p+"static/logo_pill-9042e18128ac9c15c1bdbf8bc5a69755.png"},157:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),n=a(4),o=a.n(n),l=a(55),s=a(2),p=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};p.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=p},158:function(e){e.exports={data:{site:{siteMetadata:{title:"encapsulated"}}}}},159:function(e,t,a){"use strict";var i=a(160),r=a(0),n=a.n(r),o=a(4),l=a.n(o),s=a(169),p=a.n(s),c=a(161),d=a(162),m=a(163);function g(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,s=i.data.site,g=t||s.siteMetadata.description;return n.a.createElement(p.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,link:[{rel:"icon",type:"image/png",sizes:"16x16",href:""+c.icon16},{rel:"icon",type:"image/png",sizes:"32x32",href:""+d.icon32},{rel:"shortcut icon",type:"image/png",href:""+m.icon64}],meta:[{name:"description",content:g},{property:"og:title",content:l},{property:"og:description",content:g},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:g},{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"},{name:"google-site-verification",content:"qojztTOFTmy83nCRl5qy96O5vHACP_n7tWkhEcqSLFw"}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}g.defaultProps={lang:"en",meta:[],keywords:[],description:""},g.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=g},160:function(e){e.exports={data:{site:{siteMetadata:{title:"encapsulated",description:"Little pills about javascript, react, angular, gatsbyjs, nodejs by Juanma Perez, Front end developer",author:"Juanma Perez"}}}}},161:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWpJREFUeNpiYBjU4LuLHxcQS+JTw4hHcz+QygBiDiA+AMSBnHs2fUBXx4RN8zcXvwQgFQTErFAhhz///3diU8uCTfDD79/GgqysP4BMZpjYHyYm/bJdB+czMTErQIXuAnEdhgsq9hxRYOPnV0EX5/j///uWOVOz/v7+PQNkx5/fv+we37/NAndB6fZ9qQyMjIFfPn24/fHvn9/cDAw8QOFfn7g4b99WVma4pKfH4ysjdeHvnz9Szx/dj11fX7Xx0+PH/xmhtp7/8/v3f4b//8tY2NhMJR490vvDwWH7WlT03+9fP/89uf/wy9MHj+6ws/xO29fR9gojDL59/TKXi5tHBMi0AfFXX73O++rZq/sPbt7m+/3rtxowsuSBwq8Zrhx6RVw0all3MzAx+wFZakiiB4AGOBIVjQyMTMeBJC8Q/0USPYRNKTNWA14/us4gJscHZOkDTeNkYPi/mOHrxwqGDy//MAw/ABBgAGUOiWlTKmApAAAAAElFTkSuQmCC"},162:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5ZJREFUeNrsVmtIVEEUnp17d9t1TVvL7cGCuGRPKCstSikD+5FC4I+QHtCLsvpVRGVg0AP6058eCBEZPX/YO9SysDRp3a0opBZNN1Nz85V1W3fvPu/M7YwpLWXbJm792QPfnXNnzpn55tw5Zy5CUYnKfxbFSB1vzF2oyU2ctIjpIiEvJ1RXOP8JgZ6sHJ0a42IVxmuC+4ksX4OmIPZR2deIEehdnjN9LMebQeUAXsD4QX1AZITsrR5x0WzTo85w58R/QyCW488O+rAF9MGLD+7GkKzRXo5IBL4sz03TcNxzUN8ADICE39k6iTRTX33vbTjz8mEzVSiyoHEBAoC4kGTj4uYXVj3Vi4IQr9XpZkGXhvVTIolEIvXPSq/WPL10PvBXBODgxQa9cqFsbenpp9j5gMURIRLye71IpVYjjuMRBmSs3yim5a1OPZG38h0fifQ1Wsznjjm673SYTK/tdXVu1rf3fvV8IksVHM9PIpTGSJSQsCKw/2FtpizL6+orH6SnvrGGxc7o9Xebjx+37KusyVFw3H7w5zDGGWzM63E3CX29+Rc3rW/9LYFdt++lqGK0GzCH82GzU72iy06/Cs1BJnS4DII0bP0UH/+hOmOJrrBw33XoygaMg/ODvG73JaGv58mLB+VXGkpL/cOGck9FlZFXqo4qMF7r83oE0ekocwifS0p3FtR6slcdApMDAAcgkdkHZGoRtLH9tmkp3daZMyZ2GgxxmOMWD83nEV1OCPlYt8tZeyY/b1nILIDFjyjHqA8G/L7+3k77truHi0r6Ozro0LiLSHVdRmNly5Qp2raUqZ1der0OiC4F/MgIShEQtiFZvtnW3Fh+v+iAKazDBCmzFJonA2GU5X4I2StQJUaQSpIa8/w80Mf87Oz3+WCXzgYiUZO56rGhqb7B7vcHYC7FaWStLQ67Dnx439yuG59oVmu0i5UqFdtR1o9aiZHTIbA6YIPP0qLkVQ2vTJYZNmsj+tzzpQsYr4DBrT/tiYw4nVK3bEnSJCQksQgILS3v39661T0wMCuzAMicBM33p0IEsgMicGZElbC+pKQdmvZfbw08mUWd1RnAgpCzUkpH/zKS5Y9B9tIfjNtGnwAlNfDUsqoMCH3nY846+gQa6yC96DnQktl/yfe6M+zuL8D3j8z/AFLgvfBsYtUW0DfM4hYkOrZH9p8weY4SxcTvBs/N4D59sJfVjfPh5n5UohKVYPkmwACXxmXS/dVLCAAAAABJRU5ErkJggg=="},163:function(e,t){e.exports="data:image/png;base64,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"},164:function(e,t,a){"use strict";var i=a(158),r=a(0),n=a.n(r),o=a(4),l=a.n(o),s=a(152),p=(a(167),a(168),a(153)),c=a(155),d=a(156),m=a.n(d),g=a(7),x=a.n(g),u=a(165),f=a(166),h=p.a.div.withConfig({displayName:"theme-switcher__ThemeSwitcherView",componentId:"sc-15zitb9-0"})(["margin-top:5px;margin-right:5px;background:var(--bgColor);border:1px solid var(--primaryColor);width:40px;height:20px;border-radius:20px/20px;position:relative;svg{max-width:12px;path{max-width:12px;}}.dark-icon{font-size:12px;position:absolute;left:5px;top:4px;color:var(--primaryColor);}.light-icon{font-size:12px;position:absolute;right:5px;top:4px;color:var(--primaryColor);}.ball-button{position:absolute;z-index:10;top:-1px;left:-1px;border:1px solid var(--primaryColor);width:20px;height:20px;border-radius:50%;background:var(--bgColor);transition:all 300ms ease-in;:hover{border:1px solid var(--secondaryColor);}&.dark{transform:translateX(20px);}}"]),v=function(e){function t(t){var a;if((a=e.call(this,t)||this).state={},a.toggleButton=function(){var e=a.state.theme;e="light"===e?"dark":"light",a.setTheme(e),a.storeTheme(e)},a.setTheme=function(e){a.setState({theme:e},function(){var t=document.querySelector("body");t.className="",t.classList.add(e)})},a.storeTheme=function(e){a.store&&a.store.setItem("theme",e)},a.store="undefined"==typeof localStorage?null:localStorage,a.store){var i=a.store.getItem("theme")||"light";a.state={theme:i};var r=document.querySelector("body");r.className="",r.classList.add(i)}return a}x()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.state.theme;if(this.store){var t=this.store.getItem("theme")||"light";t!==e&&this.setState({theme:t}),this.setTheme(t)}},a.render=function(){var e=this.state.theme;return n.a.createElement(h,{onClick:this.toggleButton},n.a.createElement(u.a,{style:{fontSize:"12px"},className:"light-icon",icon:f.f}),n.a.createElement(u.a,{style:{fontSize:"12px"},className:"dark-icon",icon:f.e}),n.a.createElement("div",{className:"ball-button "+e}))},t}(r.Component),w=p.a.header.withConfig({displayName:"header__HeaderView",componentId:"sc-31ozxh-0"})(["padding:0px;color:#000;width:100%;position:fixed;top:0px;left:0px;z-index:1000;box-sizing:border-box;.header-wrapper{display:flex;flex-direction:row;justify-content:space-between;padding:15px 20px;box-sizing:border-box;max-width:100%;div{display:flex;flex-direction:row;justify-content:flex-start;.logo{margin-top:3px;width:35px;height:24px;img{max-width:100%;}}.title{margin-left:5px;font-size:26px;line-height:1.1;font-weight:800;color:var(--primaryColor);display:inline-block;font-family:'Questrial',sans-serif;mix-blend-mode:difference;.title-link{color:var(--primaryColor);letter-spacing:1.4px;-webkit-text-stroke:0.3px var(--primaryColor);text-decoration:none;mix-blend-mode:difference;}@media(max-width:510px){display:none;}}}}"]),y=function(e){var t=e.siteTitle;return n.a.createElement(w,null,n.a.createElement("div",{className:"header-wrapper"},n.a.createElement("div",null,n.a.createElement("div",{className:"logo"},n.a.createElement(s.a,{className:"title-link",to:"/"},n.a.createElement(c.a,{className:"logo",title:"encapsulated logotype",imageUrl:m.a}))),n.a.createElement("h1",{className:"title"},n.a.createElement(s.a,{className:"title-link",to:"/"},t))),n.a.createElement("div",null,n.a.createElement(v,null))))};y.propTypes={siteTitle:l.a.string},y.defaultProps={siteTitle:""};var b=y,A=function(e){var t=e.children;return n.a.createElement(s.b,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"content-wrapper"},t)))},data:i})};A.propTypes={children:l.a.node.isRequired};t.a=A},170:function(e,t,a){"use strict";var i=a(0),r=a.n(i),n=a(152),o=a(153),l=a(173),s=o.a.div.withConfig({displayName:"post-item__PostItemView",componentId:"j2xxed-0"})(["margin:",";padding:",";box-sizing:border-box;width:",";@media(max-width:1590px){width:",";}@media(max-width:1100px){width:",";}@media(max-width:878px){width:",";}@media(max-width:510px){width:98%;margin:40px auto 0px;padding:10px;}.post-wrapper{height:100%;opacity:0;transition:opacity 600ms linear;&.fade-in{opacity:1;}.post{height:100%;background:var(--bgColor);border-radius:10px;display:flex;flex-direction:column;justify-content:space-around;box-sizing:border-box;transition:all 200ms linear;overflow:hidden;box-shadow:0 0 0 1px rgba(var(--primaryColorRGB),0.05),0 2px 4px rgba(var(--primaryColorRGB),0.08);&:hover{0px 3px 5px 5px rgba(var(--primaryColorRGB),0.1),0 2px 4px rgba(var(--primaryColorRGB),0.08);transform:translateY(-5px);}}.image-container{cursor:pointer;flex:1;position:relative;overflow:hidden;height:320px;max-height:320px;@media(max-width:520px){height:260px}.image{transition:all 600ms linear;position:relative;height:100%;width:100%;background:url(",");background-size:cover;background-position:center center;&.aumented{transform:scale(1.1) translateY(10px);}}}.post-container{position:relative;padding:20px 20px 40px;flex:1;.post-icon{width:22px;height:44px;background:url(",");border-radius:50%/25%;position:absolute;top:-26px;left:20px;background-size:130%;background-position:center 1px;background-repeat:no-repeat;box-shadow:0px 1px 1px 1px rgba(var(--primaryColorRGB),0.2),0 2px 4px rgba(var(--primaryColorRGB),0.08);overflow:hidden;background-color:transparent;z-index:10;}.post-date{display:block;margin:25px 0px 5px;font-size:15px;letter-spacing:1px;opacity:.6;color:var(--primaryColor);font-weight:bolder;}.post-title{margin:20px 0px 10px;padding:0px;font-size:30px;line-height:1;letter-spacing:1px;color:var(--primaryColor);-webkit-text-stroke:0.5px var(--primaryColor);@media(max-width:510px){font-size:30px}a{text-decoration:none;color:var(--primaryColor) !important;}}.post-excerpt{display:block;font-size:18px;margin-bottom:0px;line-height:1.5;color:var(--primaryColor);font-weight:normal;}}}}"],function(e){return e&&"list"===e.view?"40px auto 20px":"40px 0px 0px"},function(e){return e&&"list"===e.view?"0px":"0px 20px"},function(e){return e&&"list"===e.view?"35%":"33%"},function(e){return e&&"list"===e.view?"40%":"33%"},function(e){return e&&"list"===e.view?"55%":"33%"},function(e){return e&&"list"===e.view?"65%":"50%"},function(e){return e.image},function(e){return e.icon});t.a=function(e){var t=e.frontmatter,a=e.view,i=e.listPath;return r.a.createElement(s,{view:a,image:t.thumbnail.childImageSharp.fluid.src,icon:t.icon.childImageSharp.fluid.src},r.a.createElement(l.a,null,r.a.createElement(l.b,{classToggle:"fade-in",triggerHook:.85},r.a.createElement("div",{className:"post-wrapper"},r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"image-container",onClick:function(){return Object(n.c)(t.path)}},r.a.createElement("div",{className:"image aumented"})),r.a.createElement("div",{className:"post-container"},r.a.createElement(n.a,{to:"/category/"+t.category},r.a.createElement("div",{className:"post-icon"})),r.a.createElement("h2",{className:"post-title"},r.a.createElement(n.a,{to:t.path,state:{prevPath:i}}," ",t.title," ")),r.a.createElement("div",{className:"post-date"},t.date),r.a.createElement("div",{className:"post-excerpt"},t.excerpt)))))))}},174:function(e,t,a){"use strict";a(175);var i=a(5),r=a(75),n=a(18),o=/./.toString,l=function(e){a(14)(RegExp.prototype,"toString",e,!0)};a(19)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?l(function(){var e=i(this);return"/".concat(e.source,"/","flags"in e?e.flags:!n&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=o.name&&l(function(){return o.call(this)})},175:function(e,t,a){a(18)&&"g"!=/./g.flags&&a(25).f(RegExp.prototype,"flags",{configurable:!0,get:a(75)})},192:function(e,t,a){e.exports=a.p+"static/juanma_perez-40d4cab48d604bbf01064e91c8a06018.jpg"}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-02fe2a30a360160cc498.js.map