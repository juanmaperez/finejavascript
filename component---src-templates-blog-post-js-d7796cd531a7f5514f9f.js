(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"PostQuery",function(){return x});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(154),l=a(159),p=a(166),c=a(155),d=a(167),m=a(168),g=s.a.div.withConfig({displayName:"blog-post__BlogPostView",componentId:"sc-1g2ojw6-0"})(["padding-bottom:50px;position:relative;overflow:hidden;.post-header{width:100%;background:url(",");height:","px;background-size:cover;background-repeat:no-repeat;margin-bottom:60px;background-position:center center;background-attachment:fixed;@media(max-width:490px){background-attachment:scroll;}}.post-container{box-sizing:border-box;width:40%;margin:0px auto;@media(max-width:1590px){width:40%}@media(max-width:1100px){width:55%}@media(max-width:878px){width:75%}@media(max-width:510px){width:95%;padding:25px 10px;}.step-buttons{margin:20px 0px;display:flex;flex-direction:row;justify-content:flex-start;div{flex:1;display:flex;&:hover{text-decoration:underline}&.next{text-align:right;div{text-align:right;display:flex;}}&.prev{text-align:left;}svg{margin:0px 10px;}}}.post-date{font-size:18px;display:flex;flex-direction:row;justify-content:flex-start;color:var(--tertiaryColor);.post-icon{position:relative;top:-3px;margin-right:10px;display:inline-block;width:10px;height:20px;background:url(",");border-radius:50%/25%;background-size:130%;background-position:center 1px;background-repeat:no-repeat;box-shadow:0px 1px 1px 1px rgba(var(--primaryColorRGB),0.2),0 2px 4px rgba(var(--primaryColorRGB),0.08);overflow:hidden;background-color:transparent;}}.back{opacity:.5;box-sizing:border-box;cursor:pointer;color:var(--primaryColor);width:100%;display:block;margin-bottom:10px;}.post-title{margin:30px 0px 60px;font-size:62px;color:var(--secondaryColor);-webkit-text-stroke:1px var(--secondaryColor);@media(max-width:768px){font-size:52px;margin:10px 0px 50px;}@media(max-width:510px){font-size:42px;margin:0px 0px 30px;}}.post-content{margin-top:10px;line-height:1.6;font-size:22px;letter-spacing:1px;pre{margin-bottom:45px;max-width:100%;font-size:16px;line-height:1.2;display:block;padding:5px;}p{margin-bottom:45px;color:var(--primaryColor);}h2{color:var(--secondaryColor);margin:10px 0px 10px;font-size:28px;}h3{margin:10px 0px;text-decoration:underline;}a{color:var(--tertiaryColor);text-decoration:none;}ul{margin:40px 0px 60px;padding-left:0px;li:before{content:'💊';list-style:none;padding-right:15px;font-size:14px;}}}}"],function(e){return e.image},function(e){return e.height},function(e){return e.icon}),u=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={height:0,width:0},t.resize=function(){var e=window.innerWidth,a=window.innerHeight;t.setState({height:a,width:e})},t}r()(t,e);var a=t.prototype;return a.componentWillUnmount=function(){window.removeEventListener("resize",this.resize.bind(this))},a.componentDidMount=function(){this.resize()},a.render=function(){var e=this.props.data.markdownRemark,t=e.frontmatter,a=e.html,n=this.props.pageContext,r=n.next,i=n.prev,s=this.props.location.state&&this.props.location.state.prevPath||"/blog",u=this.state.height;return o.a.createElement(p.a,null,o.a.createElement(l.a,{title:t.title,description:t.excerpt,keywords:t.tags}),o.a.createElement(g,{height:u,image:t.thumbnail.childImageSharp.fluid.src,icon:t.icon.childImageSharp.fluid.src},o.a.createElement("div",{className:"post-header"}),o.a.createElement("div",{className:"post-container"},o.a.createElement(c.a,{className:"back",to:s},"Back to the list"),o.a.createElement("h2",{className:"post-title"},t.title),o.a.createElement("div",{className:"post-date"},o.a.createElement("span",{className:"post-icon"}),t.date),o.a.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:a}}),o.a.createElement("div",{className:"step-buttons"},o.a.createElement("div",{className:"prev"},i&&o.a.createElement("div",null,o.a.createElement(d.a,{icon:m.a}),o.a.createElement(c.a,{to:i.frontmatter.path},i.frontmatter.title))),o.a.createElement("div",{className:"next"},r&&o.a.createElement("div",null,o.a.createElement(c.a,{to:r.frontmatter.path},r.frontmatter.title),o.a.createElement(d.a,{icon:m.b})))))))},t}(i.Component),x="55596675";t.default=u},155:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(33),l=a.n(s);a.d(t,"a",function(){return l.a});a(156);var p=r.a.createContext({}),c=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},156:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},157:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=function(e){var t=e.title,a=e.imageUrl;return r.a.createElement("img",{alt:t,src:a})};s.propTypes={title:o.a.string,imageUrl:o.a.string},t.a=s},158:function(e,t,a){e.exports=a.p+"static/logo_pill-9042e18128ac9c15c1bdbf8bc5a69755.png"},159:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(169),p=a.n(l),c=a(161),d=a(162),m=a(163);function g(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,l=n.data.site,g=t||l.siteMetadata.description;return i.a.createElement(p.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,link:[{rel:"icon",type:"image/png",sizes:"16x16",href:""+c.icon16},{rel:"icon",type:"image/png",sizes:"32x32",href:""+d.icon32},{rel:"shortcut icon",type:"image/png",href:""+m.icon64}],meta:[{name:"description",content:g},{property:"og:title",content:s},{property:"og:description",content:g},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:g},{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"},{name:"google-site-verification",content:"google10458f8f30eada7d"}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}g.defaultProps={lang:"en",meta:[],keywords:[],description:""},g.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=g},160:function(e){e.exports={data:{site:{siteMetadata:{title:"encapsulated",description:"Little pills about javascript, react, angular, gatsbyjs, nodejs by Juanma Perez, Front end developer",author:"Juanma Perez"}}}}},161:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWpJREFUeNpiYBjU4LuLHxcQS+JTw4hHcz+QygBiDiA+AMSBnHs2fUBXx4RN8zcXvwQgFQTErFAhhz///3diU8uCTfDD79/GgqysP4BMZpjYHyYm/bJdB+czMTErQIXuAnEdhgsq9hxRYOPnV0EX5/j///uWOVOz/v7+PQNkx5/fv+we37/NAndB6fZ9qQyMjIFfPn24/fHvn9/cDAw8QOFfn7g4b99WVma4pKfH4ysjdeHvnz9Szx/dj11fX7Xx0+PH/xmhtp7/8/v3f4b//8tY2NhMJR490vvDwWH7WlT03+9fP/89uf/wy9MHj+6ws/xO29fR9gojDL59/TKXi5tHBMi0AfFXX73O++rZq/sPbt7m+/3rtxowsuSBwq8Zrhx6RVw0all3MzAx+wFZakiiB4AGOBIVjQyMTMeBJC8Q/0USPYRNKTNWA14/us4gJscHZOkDTeNkYPi/mOHrxwqGDy//MAw/ABBgAGUOiWlTKmApAAAAAElFTkSuQmCC"},162:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5ZJREFUeNrsVmtIVEEUnp17d9t1TVvL7cGCuGRPKCstSikD+5FC4I+QHtCLsvpVRGVg0AP6058eCBEZPX/YO9SysDRp3a0opBZNN1Nz85V1W3fvPu/M7YwpLWXbJm792QPfnXNnzpn55tw5Zy5CUYnKfxbFSB1vzF2oyU2ctIjpIiEvJ1RXOP8JgZ6sHJ0a42IVxmuC+4ksX4OmIPZR2deIEehdnjN9LMebQeUAXsD4QX1AZITsrR5x0WzTo85w58R/QyCW488O+rAF9MGLD+7GkKzRXo5IBL4sz03TcNxzUN8ADICE39k6iTRTX33vbTjz8mEzVSiyoHEBAoC4kGTj4uYXVj3Vi4IQr9XpZkGXhvVTIolEIvXPSq/WPL10PvBXBODgxQa9cqFsbenpp9j5gMURIRLye71IpVYjjuMRBmSs3yim5a1OPZG38h0fifQ1Wsznjjm673SYTK/tdXVu1rf3fvV8IksVHM9PIpTGSJSQsCKw/2FtpizL6+orH6SnvrGGxc7o9Xebjx+37KusyVFw3H7w5zDGGWzM63E3CX29+Rc3rW/9LYFdt++lqGK0GzCH82GzU72iy06/Cs1BJnS4DII0bP0UH/+hOmOJrrBw33XoygaMg/ODvG73JaGv58mLB+VXGkpL/cOGck9FlZFXqo4qMF7r83oE0ekocwifS0p3FtR6slcdApMDAAcgkdkHZGoRtLH9tmkp3daZMyZ2GgxxmOMWD83nEV1OCPlYt8tZeyY/b1nILIDFjyjHqA8G/L7+3k77truHi0r6Ozro0LiLSHVdRmNly5Qp2raUqZ1der0OiC4F/MgIShEQtiFZvtnW3Fh+v+iAKazDBCmzFJonA2GU5X4I2StQJUaQSpIa8/w80Mf87Oz3+WCXzgYiUZO56rGhqb7B7vcHYC7FaWStLQ67Dnx439yuG59oVmu0i5UqFdtR1o9aiZHTIbA6YIPP0qLkVQ2vTJYZNmsj+tzzpQsYr4DBrT/tiYw4nVK3bEnSJCQksQgILS3v39661T0wMCuzAMicBM33p0IEsgMicGZElbC+pKQdmvZfbw08mUWd1RnAgpCzUkpH/zKS5Y9B9tIfjNtGnwAlNfDUsqoMCH3nY846+gQa6yC96DnQktl/yfe6M+zuL8D3j8z/AFLgvfBsYtUW0DfM4hYkOrZH9p8weY4SxcTvBs/N4D59sJfVjfPh5n5UohKVYPkmwACXxmXS/dVLCAAAAABJRU5ErkJggg=="},163:function(e,t){e.exports="data:image/png;base64,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"},164:function(e){e.exports={data:{site:{siteMetadata:{title:"encapsulated"}}}}},165:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(55),l=a(2),p=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};p.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=p},166:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(155),p=(a(170),a(171),a(154)),c=a(157),d=a(7),m=a.n(d),g=p.a.div.withConfig({displayName:"menu__MenuView",componentId:"ldryeq-0"})(["position:relative;.menu-list{opacity:0;display:none;transition:all 400ms linear;position:absolute;bottom:-110px;right:5px;&.open{display:block;opacity:1;}ul{list-style:none;li{margin-bottom:10px;text-align:right;a{color:var(--primaryColor);font-size:22px;&.active{text-decoration:line-through;}&:hover{text-decoration:line-through;}}}}}#nav-icon{margin:5px;width:35px;height:20px;position:relative;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.5s ease-in-out;-moz-transition:.5s ease-in-out;-o-transition:.5s ease-in-out;transition:.5s ease-in-out;cursor:pointer;.bar{display:block;position:absolute;height:2px;width:100%;background:var(--primaryColor);border-radius:9px;opacity:1;left:0;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.25s ease-in-out;-moz-transition:.25s ease-in-out;-o-transition:.25s ease-in-out;transition:.25s ease-in-out;&:nth-child(1){top:0px}&:nth-child(2),&:nth-child(3){top:9px}&:nth-child(4){top:18px}}&.open{.bar{&:nth-child(1){top:18px;width:0%;left:50%;opacity:0;}&:nth-child(2){-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);}&:nth-child(3){-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);}&:nth-child(4){top:18px;width:0%;left:50%;opacity:0;}}}}"]),u=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={open:!1},t.toggleMenu=function(){var e=t.state.open;t.setState(function(){return{open:!e}})},t}return m()(t,e),t.prototype.render=function(){var e=this.state.open;return i.a.createElement(g,null,i.a.createElement("div",{className:e?"open":"",id:"nav-icon",onClick:this.toggleMenu},i.a.createElement("span",{className:"bar"}),i.a.createElement("span",{className:"bar"}),i.a.createElement("span",{className:"bar"}),i.a.createElement("span",{className:"bar"})),i.a.createElement("div",{className:e?"open menu-list":"menu-list"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l.a,{activeClassName:"active",to:"/"}," Home ")),i.a.createElement("li",null,i.a.createElement(l.a,{activeClassName:"active",to:"/work"}," Work ")),i.a.createElement("li",null,i.a.createElement(l.a,{activeClassName:"active",to:"/blog"}," Blog ")))))},t}(r.Component),x=a(158),h=a.n(x),f=a(167),b=a(168),y=p.a.div.withConfig({displayName:"theme-switcher__ThemeSwitcherView",componentId:"sc-15zitb9-0"})(["margin-top:5px;margin-right:5px;background:var(--bgColor);border:1px solid var(--primaryColor);width:40px;height:20px;border-radius:20px/20px;position:relative;svg{max-width:12px;path{max-width:12px;}}.dark-icon{font-size:12px;position:absolute;left:5px;top:4px;color:var(--primaryColor);}.light-icon{font-size:12px;position:absolute;right:5px;top:4px;color:var(--primaryColor);}.ball-button{position:absolute;z-index:10;top:-1px;left:-1px;border:1px solid var(--primaryColor);width:20px;height:20px;border-radius:50%;background:var(--bgColor);transition:all 300ms ease-in;:hover{border:1px solid var(--secondaryColor);}&.dark{transform:translateX(20px);}}"]),v=function(e){function t(t){var a;if((a=e.call(this,t)||this).state={},a.toggleButton=function(){var e=a.state.theme;e="light"===e?"dark":"light",a.setTheme(e),a.storeTheme(e)},a.setTheme=function(e){a.setState({theme:e},function(){var t=document.querySelector("body");t.className="",t.classList.add(e)})},a.storeTheme=function(e){a.store&&a.store.setItem("theme",e)},a.store="undefined"==typeof localStorage?null:localStorage,a.store){var n=a.store.getItem("theme")||"light";a.state={theme:n};var r=document.querySelector("body");r.className="",r.classList.add(n)}return a}m()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.state.theme;if(this.store){var t=this.store.getItem("theme")||"light";t!==e&&this.setState({theme:t}),this.setTheme(t)}},a.render=function(){var e=this.state.theme;return i.a.createElement(y,{onClick:this.toggleButton},i.a.createElement(f.a,{style:{fontSize:"12px"},className:"light-icon",icon:b.f}),i.a.createElement(f.a,{style:{fontSize:"12px"},className:"dark-icon",icon:b.e}),i.a.createElement("div",{className:"ball-button "+e}))},t}(r.Component),A=p.a.header.withConfig({displayName:"header__HeaderView",componentId:"sc-31ozxh-0"})(["padding:0px;color:#000;width:100%;position:fixed;top:0px;left:0px;z-index:1000;box-sizing:border-box;.header-wrapper{display:flex;flex-direction:row;justify-content:space-between;padding:15px 20px;box-sizing:border-box;max-width:100%;div{display:flex;flex-direction:row;justify-content:flex-start;.logo{margin-top:3px;width:35px;height:24px;img{max-width:100%;}}.title{margin-left:5px;font-size:26px;line-height:1.1;font-weight:800;color:var(--primaryColor);display:inline-block;font-family:'Questrial',sans-serif;mix-blend-mode:difference;.title-link{color:var(--primaryColor);letter-spacing:1.4px;-webkit-text-stroke:0.3px var(--primaryColor);text-decoration:none;mix-blend-mode:difference;}@media(max-width:510px){display:none;}}}}"]),w=function(e){var t=e.siteTitle;return i.a.createElement(A,null,i.a.createElement("div",{className:"header-wrapper"},i.a.createElement("div",null,i.a.createElement("div",{className:"logo"},i.a.createElement(l.a,{className:"title-link",to:"/"},i.a.createElement(c.a,{className:"logo",title:"encapsulated logotype",imageUrl:h.a}))),i.a.createElement("h1",{className:"title"},i.a.createElement(l.a,{className:"title-link",to:"/"},t))),i.a.createElement("div",null,i.a.createElement(v,null),i.a.createElement(u,null))))};w.propTypes={siteTitle:s.a.string},w.defaultProps={siteTitle:""};var E=w,k=function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(E,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"content-wrapper"},t)))},data:n})};k.propTypes={children:s.a.node.isRequired};t.a=k}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d7796cd531a7f5514f9f.js.map