(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"WorkQuery",function(){return c});var n=a(0),i=a.n(n),r=a(153),o=a(157),l=a(162),s=a(165),p=r.a.div.withConfig({displayName:"work__WorkView",componentId:"sc-1vb8m1w-0"})(["margin:180px auto 100px;box-sizing:border-box;width:40%;@media(max-width:1590px){width:40%}@media(max-width:1100px){width:55%}@media(max-width:878px){width:75%}@media(max-width:510px){width:95%;padding:25px 0px;margin:100px auto 50px;}.title-wrapper{margin-bottom:50px;h1{text-align:center;font-size:160px;color:var(--tertiaryColor);margin-bottom:0px;font-weight:normal;@media(max-width:768px){font-size:90px}@media(max-width:480px){font-size:60px}}.tags{width:100%;text-align:center;margin-top:30px;span{font-size:20px;margin:-50px 5px 0;&:after{content:'|';margin-left:10px;}&:last-of-type{&:after{content:'';}}}}}.thumbnail-wrapper{text-align:center;img{max-width:600px;width:100%;}}.work-content{margin-top:150px;line-height:1.5;font-size:20px;letter-spacing:1px;color:var(--primaryColor);@media(max-width:480px){margin-top:50px;padding:20px;}h2{color:var(--secondaryColor);margin:10px 0px 10px;font-size:28px;line-height:1.2;}p{margin-bottom:45px;}a{color:var(--tertiaryColor);text-decoration:none;}ul{margin:40px 0px 60px;li:before{content:'💊';padding-right:15px;font-size:14px;}}}"]),c="3729829838";t.default=function(e){var t=e.data,a=(e.location,e.pageContext,t.markdownRemark),n=a.frontmatter,r=a.html;return i.a.createElement(l.a,null,i.a.createElement(o.a,{title:n.title,description:n.excerpt,keywords:n.tags}),i.a.createElement(p,null,i.a.createElement("div",{className:"title-wrapper"},i.a.createElement("h1",null," ",n.title," "),i.a.createElement("div",{className:"tags"},n.tags.map(function(e,t){return i.a.createElement("span",{key:e},e)}))),i.a.createElement("div",{className:"thumbnail-wrapper"},i.a.createElement(s.a,{title:n.title,imageUrl:n.thumbnail.childImageSharp.fluid.src})),i.a.createElement("div",{className:"work-content",dangerouslySetInnerHTML:{__html:r}})))}},152:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a});a(154);var p=i.a.createContext({}),c=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},154:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},155:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(55),s=a(2),p=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};p.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=p},156:function(e){e.exports={data:{site:{siteMetadata:{title:"finejavascript"}}}}},157:function(e,t,a){"use strict";var n=a(158),i=a(0),r=a.n(i),o=a(4),l=a.n(o),s=a(168),p=a.n(s),c=a(159),m=a(160),d=a(161);function g(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,l=e.title,s=n.data.site,g=t||s.siteMetadata.description;return r.a.createElement(p.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,link:[{rel:"icon",type:"image/png",sizes:"16x16",href:""+c.icon16},{rel:"icon",type:"image/png",sizes:"32x32",href:""+m.icon32},{rel:"shortcut icon",type:"image/png",href:""+d.icon64}],meta:[{name:"description",content:g},{property:"og:title",content:l},{property:"og:description",content:g},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:g},{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"},{name:"google-site-verification",content:"qojztTOFTmy83nCRl5qy96O5vHACP_n7tWkhEcqSLFw"}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}g.defaultProps={lang:"en",meta:[],keywords:[],description:""},g.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=g},158:function(e){e.exports={data:{site:{siteMetadata:{title:"finejavascript",description:"Little pills about javascript, react, angular, gatsbyjs, nodejs by Juanma Perez, Software engineer",author:"Juanma Perez"}}}}},159:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWpJREFUeNpiYBjU4LuLHxcQS+JTw4hHcz+QygBiDiA+AMSBnHs2fUBXx4RN8zcXvwQgFQTErFAhhz///3diU8uCTfDD79/GgqysP4BMZpjYHyYm/bJdB+czMTErQIXuAnEdhgsq9hxRYOPnV0EX5/j///uWOVOz/v7+PQNkx5/fv+we37/NAndB6fZ9qQyMjIFfPn24/fHvn9/cDAw8QOFfn7g4b99WVma4pKfH4ysjdeHvnz9Szx/dj11fX7Xx0+PH/xmhtp7/8/v3f4b//8tY2NhMJR490vvDwWH7WlT03+9fP/89uf/wy9MHj+6ws/xO29fR9gojDL59/TKXi5tHBMi0AfFXX73O++rZq/sPbt7m+/3rtxowsuSBwq8Zrhx6RVw0all3MzAx+wFZakiiB4AGOBIVjQyMTMeBJC8Q/0USPYRNKTNWA14/us4gJscHZOkDTeNkYPi/mOHrxwqGDy//MAw/ABBgAGUOiWlTKmApAAAAAElFTkSuQmCC"},160:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5ZJREFUeNrsVmtIVEEUnp17d9t1TVvL7cGCuGRPKCstSikD+5FC4I+QHtCLsvpVRGVg0AP6058eCBEZPX/YO9SysDRp3a0opBZNN1Nz85V1W3fvPu/M7YwpLWXbJm792QPfnXNnzpn55tw5Zy5CUYnKfxbFSB1vzF2oyU2ctIjpIiEvJ1RXOP8JgZ6sHJ0a42IVxmuC+4ksX4OmIPZR2deIEehdnjN9LMebQeUAXsD4QX1AZITsrR5x0WzTo85w58R/QyCW488O+rAF9MGLD+7GkKzRXo5IBL4sz03TcNxzUN8ADICE39k6iTRTX33vbTjz8mEzVSiyoHEBAoC4kGTj4uYXVj3Vi4IQr9XpZkGXhvVTIolEIvXPSq/WPL10PvBXBODgxQa9cqFsbenpp9j5gMURIRLye71IpVYjjuMRBmSs3yim5a1OPZG38h0fifQ1Wsznjjm673SYTK/tdXVu1rf3fvV8IksVHM9PIpTGSJSQsCKw/2FtpizL6+orH6SnvrGGxc7o9Xebjx+37KusyVFw3H7w5zDGGWzM63E3CX29+Rc3rW/9LYFdt++lqGK0GzCH82GzU72iy06/Cs1BJnS4DII0bP0UH/+hOmOJrrBw33XoygaMg/ODvG73JaGv58mLB+VXGkpL/cOGck9FlZFXqo4qMF7r83oE0ekocwifS0p3FtR6slcdApMDAAcgkdkHZGoRtLH9tmkp3daZMyZ2GgxxmOMWD83nEV1OCPlYt8tZeyY/b1nILIDFjyjHqA8G/L7+3k77truHi0r6Ozro0LiLSHVdRmNly5Qp2raUqZ1der0OiC4F/MgIShEQtiFZvtnW3Fh+v+iAKazDBCmzFJonA2GU5X4I2StQJUaQSpIa8/w80Mf87Oz3+WCXzgYiUZO56rGhqb7B7vcHYC7FaWStLQ67Dnx439yuG59oVmu0i5UqFdtR1o9aiZHTIbA6YIPP0qLkVQ2vTJYZNmsj+tzzpQsYr4DBrT/tiYw4nVK3bEnSJCQksQgILS3v39661T0wMCuzAMicBM33p0IEsgMicGZElbC+pKQdmvZfbw08mUWd1RnAgpCzUkpH/zKS5Y9B9tIfjNtGnwAlNfDUsqoMCH3nY846+gQa6yC96DnQktl/yfe6M+zuL8D3j8z/AFLgvfBsYtUW0DfM4hYkOrZH9p8weY4SxcTvBs/N4D59sJfVjfPh5n5UohKVYPkmwACXxmXS/dVLCAAAAABJRU5ErkJggg=="},161:function(e,t){e.exports="data:image/png;base64,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"},162:function(e,t,a){"use strict";var n=a(156),i=a(0),r=a.n(i),o=a(4),l=a.n(o),s=a(152),p=(a(166),a(167),a(153)),c=a(7),m=a.n(c),d=a(163),g=a(164),u=p.a.div.withConfig({displayName:"theme-switcher__ThemeSwitcherView",componentId:"sc-15zitb9-0"})(["margin-top:5px;margin-right:5px;background:var(--bgColor);border:1px solid var(--primaryColor);width:40px;height:20px;border-radius:20px/20px;position:relative;svg{max-width:12px;path{max-width:12px;}}.dark-icon{font-size:12px;position:absolute;left:5px;top:4px;color:var(--primaryColor);}.light-icon{font-size:12px;position:absolute;right:5px;top:4px;color:var(--primaryColor);}.ball-button{position:absolute;z-index:10;top:-1px;left:-1px;border:1px solid var(--primaryColor);width:20px;height:20px;border-radius:50%;background:var(--bgColor);transition:all 300ms ease-in;:hover{border:1px solid var(--secondaryColor);}&.dark{transform:translateX(20px);}}"]),x=function(e){function t(t){var a;if((a=e.call(this,t)||this).state={},a.toggleButton=function(){var e=a.state.theme;e="light"===e?"dark":"light",a.setTheme(e),a.storeTheme(e)},a.setTheme=function(e){a.setState({theme:e},function(){var t=document.querySelector("body");t.className="",t.classList.add(e)})},a.storeTheme=function(e){a.store&&a.store.setItem("theme",e)},a.store="undefined"==typeof localStorage?null:localStorage,a.store){var n=a.store.getItem("theme")||"light";a.state={theme:n};var i=document.querySelector("body");i.className="",i.classList.add(n)}return a}m()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.state.theme;if(this.store){var t=this.store.getItem("theme")||"light";t!==e&&this.setState({theme:t}),this.setTheme(t)}},a.render=function(){var e=this.state.theme;return r.a.createElement(u,{onClick:this.toggleButton},r.a.createElement(d.a,{style:{fontSize:"12px"},className:"light-icon",icon:g.d}),r.a.createElement(d.a,{style:{fontSize:"12px"},className:"dark-icon",icon:g.c}),r.a.createElement("div",{className:"ball-button "+e}))},t}(i.Component),f=p.a.header.withConfig({displayName:"header__HeaderView",componentId:"sc-31ozxh-0"})(["padding:0px;color:#000;width:100%;position:fixed;top:0px;left:0px;z-index:1000;box-sizing:border-box;.header-wrapper{display:flex;flex-direction:row;justify-content:space-between;padding:15px 20px;box-sizing:border-box;max-width:100%;div{display:flex;flex-direction:row;justify-content:flex-start;.logo{margin-top:3px;width:35px;height:24px;img{max-width:100%;}}.title{margin-left:5px;font-size:26px;line-height:1.1;font-weight:800;color:var(--primaryColor);display:inline-block;font-family:'Montserrat',sans-serif;mix-blend-mode:difference;.title-link{color:var(--primaryColor);text-decoration:none;mix-blend-mode:difference;}}}}"]),A=function(e){var t=e.siteTitle;return r.a.createElement(f,null,r.a.createElement("div",{className:"header-wrapper"},r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},r.a.createElement(s.a,{className:"title-link",to:"/"},t))),r.a.createElement("div",null,r.a.createElement(x,null))))};A.propTypes={siteTitle:l.a.string},A.defaultProps={siteTitle:""};var h=A,w=function(e){var t=e.children;return r.a.createElement(s.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"content-wrapper"},t)))},data:n})};w.propTypes={children:l.a.node.isRequired};t.a=w},165:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=function(e){var t=e.title,a=e.imageUrl;return i.a.createElement("img",{alt:t,src:a})};l.propTypes={title:o.a.string,imageUrl:o.a.string},t.a=l}}]);
//# sourceMappingURL=component---src-templates-work-js-f72cd8df3c93156dc998.js.map