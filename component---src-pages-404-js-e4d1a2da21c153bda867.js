(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{130:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(144),o=n(138);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement("div",{style:{maxWidth:"300px",margin:"5rem auto 0",textAlign:"center"}},r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))))}},136:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(135),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var s=n(137),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var d=n(28);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},137:function(e,t,n){var a;e.exports=(a=n(139))&&a.default||a},138:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(141),o=n.n(i);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:o.a.container},t)}},139:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(46),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},140:function(e){e.exports={data:{site:{siteMetadata:{title:"Site Name"}}}}},141:function(e,t,n){e.exports={container:"container-module--container--teOmR"}},142:function(e,t,n){e.exports={header:"header-module--header--1C-DW",nav:"header-module--nav--woLQT",navLogo:"header-module--navLogo--3174E",navLinks:"header-module--navLinks--3AHrJ",navLink:"header-module--navLink--jBvKL"}},143:function(e,t,n){e.exports={wrapper:"layout-module--wrapper--2moI8"}},144:function(e,t,n){"use strict";var a=n(140),r=n(0),i=n.n(r),o=n(4),u=n.n(o),c=n(145),s=n.n(c),l=n(136),d=n(6),m=n.n(d),p=n(138),f=n(142),h=n.n(f),v=function(e){function t(){return e.apply(this,arguments)||this}m()(t,e);var n=t.prototype;return n.componentDidMount=function(){document.documentElement.style.paddingTop=this.refs.header.clientHeight+"px"},n.render=function(){return i.a.createElement("div",{className:h.a.header,ref:"header"},i.a.createElement(p.a,null,i.a.createElement("nav",{className:h.a.nav},i.a.createElement("h1",{className:h.a.navLogo},i.a.createElement(l.Link,{to:"/"},this.props.siteTitle)),i.a.createElement("ul",{className:h.a.navLinks},i.a.createElement("li",{className:h.a.navLink},i.a.createElement(l.Link,{to:"/posts"},"Posts"))))))},t}(i.a.Component),y=n(143),g=n.n(y),E=function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:""},{name:"keywords",content:""}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(v,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:g.a.wrapper},t))},data:a})};E.propTypes={children:u.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-pages-404-js-e4d1a2da21c153bda867.js.map