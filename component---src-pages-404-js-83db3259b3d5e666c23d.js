(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{171:function(t,e,n){"use strict";n.r(e);var i=n(5),a=n.n(i),r=n(0),o=n.n(r),A=n(9),s=n(16),c=n(91),p=n(177),l=n(65),g=n(81),m=n.n(g),d=s.a.div.withConfig({displayName:"sc-404__NotFoundView",componentId:"sc-1j5gszf-0"})(["height:","px;display:flex;width:100%;flex-direction:column;justify-content:center;align-items:center;h1{display:inline;font-size:250px;font-family:'Questrial',Helvetica;img{width:300px;transform:translateY(20px);}}p{text-align:center;margin:30px 0px;font-size:36px;}@media(max-width:510px){h1{font-size:110px;img{width:130px;transform:translateY(10px);}}p{text-align:center;margin:10px 0px;font-size:26px;}}"],function(t){return t.height}),f=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))||this).state={height:0,width:0},e.resize=function(){var t=window.innerWidth,n=window.innerHeight;e.setState({height:n,width:t})},e}a()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.resize(),window.addEventListener("resize",this.resize.bind(this))},n.componentWillUnmount=function(){window.removeEventListener("resize",this.resize.bind(this))},n.render=function(){var t=this.state.height;return o.a.createElement(c.default,null,o.a.createElement(p.a,{title:"404: Not found"}),o.a.createElement(d,{height:t},o.a.createElement("p",null,"Not Found"),o.a.createElement("h1",{className:"notfound"},"4",o.a.createElement(l.a,{imageUrl:m.a,title:"logo"}),"4"),o.a.createElement("p",null,"Get back to the ",o.a.createElement(A.a,{to:"/"},"home"))))},e}(r.Component);e.default=f},177:function(t,e,n){"use strict";var i=n(178),a=n(0),r=n.n(a),o=n(1),A=n.n(o),s=n(182),c=n.n(s),p=n(179),l=n(180),g=n(181);function m(t){var e=t.description,n=t.lang,a=t.meta,o=t.keywords,A=t.title,s=i.data.site,m=e||s.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:n},title:A,titleTemplate:"%s | "+s.siteMetadata.title,link:[{rel:"icon",type:"image/png",sizes:"16x16",href:""+p.icon16},{rel:"icon",type:"image/png",sizes:"32x32",href:""+l.icon32},{rel:"shortcut icon",type:"image/png",href:""+g.icon64}],meta:[{name:"description",content:m},{property:"og:title",content:A},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:A},{name:"twitter:description",content:m},{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(a)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:A.a.string,lang:A.a.string,meta:A.a.arrayOf(A.a.object),keywords:A.a.arrayOf(A.a.string),title:A.a.string.isRequired},e.a=m},178:function(t){t.exports={data:{site:{siteMetadata:{title:"encapsulated",description:"Little pills about javascript, react, angular, gatsbyjs, nodejs by Juanma Perez, Front end developer",author:"Juanma Perez"}}}}},179:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWpJREFUeNpiYBjU4LuLHxcQS+JTw4hHcz+QygBiDiA+AMSBnHs2fUBXx4RN8zcXvwQgFQTErFAhhz///3diU8uCTfDD79/GgqysP4BMZpjYHyYm/bJdB+czMTErQIXuAnEdhgsq9hxRYOPnV0EX5/j///uWOVOz/v7+PQNkx5/fv+we37/NAndB6fZ9qQyMjIFfPn24/fHvn9/cDAw8QOFfn7g4b99WVma4pKfH4ysjdeHvnz9Szx/dj11fX7Xx0+PH/xmhtp7/8/v3f4b//8tY2NhMJR490vvDwWH7WlT03+9fP/89uf/wy9MHj+6ws/xO29fR9gojDL59/TKXi5tHBMi0AfFXX73O++rZq/sPbt7m+/3rtxowsuSBwq8Zrhx6RVw0all3MzAx+wFZakiiB4AGOBIVjQyMTMeBJC8Q/0USPYRNKTNWA14/us4gJscHZOkDTeNkYPi/mOHrxwqGDy//MAw/ABBgAGUOiWlTKmApAAAAAElFTkSuQmCC"},180:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5ZJREFUeNrsVmtIVEEUnp17d9t1TVvL7cGCuGRPKCstSikD+5FC4I+QHtCLsvpVRGVg0AP6058eCBEZPX/YO9SysDRp3a0opBZNN1Nz85V1W3fvPu/M7YwpLWXbJm792QPfnXNnzpn55tw5Zy5CUYnKfxbFSB1vzF2oyU2ctIjpIiEvJ1RXOP8JgZ6sHJ0a42IVxmuC+4ksX4OmIPZR2deIEehdnjN9LMebQeUAXsD4QX1AZITsrR5x0WzTo85w58R/QyCW488O+rAF9MGLD+7GkKzRXo5IBL4sz03TcNxzUN8ADICE39k6iTRTX33vbTjz8mEzVSiyoHEBAoC4kGTj4uYXVj3Vi4IQr9XpZkGXhvVTIolEIvXPSq/WPL10PvBXBODgxQa9cqFsbenpp9j5gMURIRLye71IpVYjjuMRBmSs3yim5a1OPZG38h0fifQ1Wsznjjm673SYTK/tdXVu1rf3fvV8IksVHM9PIpTGSJSQsCKw/2FtpizL6+orH6SnvrGGxc7o9Xebjx+37KusyVFw3H7w5zDGGWzM63E3CX29+Rc3rW/9LYFdt++lqGK0GzCH82GzU72iy06/Cs1BJnS4DII0bP0UH/+hOmOJrrBw33XoygaMg/ODvG73JaGv58mLB+VXGkpL/cOGck9FlZFXqo4qMF7r83oE0ekocwifS0p3FtR6slcdApMDAAcgkdkHZGoRtLH9tmkp3daZMyZ2GgxxmOMWD83nEV1OCPlYt8tZeyY/b1nILIDFjyjHqA8G/L7+3k77truHi0r6Ozro0LiLSHVdRmNly5Qp2raUqZ1der0OiC4F/MgIShEQtiFZvtnW3Fh+v+iAKazDBCmzFJonA2GU5X4I2StQJUaQSpIa8/w80Mf87Oz3+WCXzgYiUZO56rGhqb7B7vcHYC7FaWStLQ67Dnx439yuG59oVmu0i5UqFdtR1o9aiZHTIbA6YIPP0qLkVQ2vTJYZNmsj+tzzpQsYr4DBrT/tiYw4nVK3bEnSJCQksQgILS3v39661T0wMCuzAMicBM33p0IEsgMicGZElbC+pKQdmvZfbw08mUWd1RnAgpCzUkpH/zKS5Y9B9tIfjNtGnwAlNfDUsqoMCH3nY846+gQa6yC96DnQktl/yfe6M+zuL8D3j8z/AFLgvfBsYtUW0DfM4hYkOrZH9p8weY4SxcTvBs/N4D59sJfVjfPh5n5UohKVYPkmwACXxmXS/dVLCAAAAABJRU5ErkJggg=="},181:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB9RJREFUeNrsWQlsFFUYfnPtffQCLFYU0nJUrAKCtKWgRRAFSUDxjreRKF5oBKJoVMRIRGLEBoLxSEyQFBKoYBCwKraltiitPdiWQovbg8J2u93uMbsz88Z/trOy0BZattO4Ol/yOrPTmX/efx+DkAoVKlSoUKFChQoV/0sQw/3CbzOmG+cnjZyvJ6mMyPe7eb6uyOXYfU9Fmf8/KQBb9u3XjtbpVhKIeJAmiBF93SMi5OAw3naa9eVllBQ2/ycEkBOfSH43JXMVQxCrSYKwDPCxzgDGr8YV7v0y5gXQPffu7aDxByIudcDywkqGxVziUcxiYW184b71Su6PVJK4K3fR+gjmWVi1sBywrroM86G96UhqnTN34fKYtAD77AVZSRpNsfxT0ngdLA2sSbCoQZDCTi54w9W/7K+NKQtIYJgN8mkQVn1PjEOjB8l8aI9Gil4XUy7guG1hJgS8bPmnFM0xLL0klyuhpyXJJe233jUlZgRAEejpsPlKEV0+N0S1UQJlxowAIHiNC9c3EZdN0dBkCPIOJfZKK0HULwhWPRVy9UAkD9HQFJF4/Uu79i3UW63TJMWJIibZ7u4kvcWaLGKcKHCcSRB4fY+1kByt1XbB6Rm4fgrOPf5ud/EnS+4qHBYBsBjHyQIQhyrjgFVZEUF8CqdjQ8QIEgHzPYRJEgGTwIy2t4a1Pdf0Zgt6ff/P++HBlRvumHNcUQGAtojz1e2QpVya0evbwwIQeB4FAiwKwuKCQQTa50VR5CmK1umNRmS2xPX2d5peABZRAadrFBWAhWYYJei2/NW4NcD6fnCea+/sdpyza8zmVldTU5vbbne0lJZKtQZKycrSJU+blnpzztx8a0LSxF7u6fMKirsAVH+UEnS3P/vkV5e7Z+nKNaPANdaCW/RivsvpqLIdK9+smACWf5M/w5yYlIA2bhqWDnPFjt2jDHHxH5IUlYx5/ggcbwCfm08QxAUZBwImam9tLm9ubFj20wfvnxkyAYy5cQqx9J31OYxWt5ximKlwaYLU8g9Hqf1CfoHEfBEwmyr79/y+XtjV2eE522J/q6bo5y22nTv9Q5IFQPLpOrNlDa3R3H9xevO4Otl+Y2MU4EQc0txjn21LGjku9RmSpp4G5sddfJ/X3dVmhNTodjnx6Ya6j0/9XvbG8fz8YNR1QPYjjzO33PfQM5BW3gZTG4l6Sxo72loOtbc1vwu9/DwoX6MuJ7wC/yPk9F2blix2sGlp81avWd0md5L94lR15QZMk8aqvQUfNpeU8FF3gysLDkyAgPIKo9M9IXdzIfBcEPm8nhaIyKVNdbVbm8t++xFeiEPRes6CxgRGc51cBrfLVjL2EpVnUBDFcuneVrOp/Pu5uc1NKSmjNAbDMhD2jIG6kqvjXNGW+5fkDEkluOrgr9digX+NopnnIjfucXcJXo/7l4aaym2Nvx7OB6aFS9CPl1ckBE4UqxmC6IDE/cefkya2FszOsQkmUwbEkUVg1lLnR+kuQRRyPpi62y1g4Q+KpNKxiEfCXmtPn7A9FXUpPOvRJ6kZyx6UfDsPmLeGr/s83e72NnvByaqKN4/m5Z0eCHFwhRZwhQbQrt8n4opjaamOkszMBk9i4giSYXKB2YelCE4MwBcDrF8qelq7Op3VzY0ntrdWV+XX79njhbwvWaUVFHEu6oHIQxs/1V6dPnkLaOLxC0zL6dj9Z1nRKyUffdR0OYJZDz+mWxE/4tn6ydcb2dQ0DR8MmoDJm+BfU+EYP+ApCBbApB08F2AP+1l/MWj3iP1IySFglFNsIvTqvkPPQ0rb3GszPL8T0kxNxGjrAgsNeL1xUKaOhfvGQ2ZIvZLsgjGWfFgIsuxRgiQK6yqPtVeWVHq9HjYFiXgmFPzpqPrwGEW7QYrRLO2zZ6bpe+Fwb78DC6i9Q/dpNAPuFsCjULer06nRaEHDvkrb72XO2nKb6PNziSCNyYgkV8CNZrnbkf6eUbwdbmk6eSB5zHW5ND10pTzr9wGzXTjg853UG4ylwOypxuPV3hMVNvZsW6cJGhhpVD4PmJz5T7AlFZ3V9u8ClmuuIWe/+PI8vc7whMFkvtNkibMYjCZE0X1YtCgijuNC3RjL+uAY8AR9vkaOD9ZDq1rHUJTN6XLaGyprUppqThp4kRoPrWgGkhgm0GR4tXGQez0DLpA8bFPh5OnT6eSpUydoLZYR1vhEZIlLAMX0aAbSoBSgEM+H4pHbXlz8l9SRwep5OD37C7g5DSw9HZhOGKK9Dq8AosKkrHowmzSpgoXVKk+GxkY5FVJEALQyjkWEiyPpK5AjInsw6F8GpaKNOBQN0EV5ko8dAZBkRx+DUDFKZ22NIQsgfPJJ5GAiECXRo7EjACwcDA9z0flPYd1RusD+2BEAF/wcLD5cuY0ON5Ko50vRlcAJ5fBvsSOAE+Uu8Pgd8q9E2RW4iIwwyJCK30O20rOxlAWkwf0bUPW1yS4g1QBS5Sf99g6S+2NA6+tYS4MI2Y54QXOLgYGAPEmSukTpa0XTIITQAkJcDtrvHJZeQBGkZ89CJFUQMRmSBBKULaJ/BYjicRDgUlRbbIvFQug8aouLwIQzgKNd4e5ZbnP7ezcGxvOQwM1VmvnhsYAwjFYCjUnPhh7hEQiQy3o1SSJugOtSE7UXav4qpEKFChUqVKhQoUKFChUK4m8BBgASAR54cp0JlAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=component---src-pages-404-js-83db3259b3d5e666c23d.js.map