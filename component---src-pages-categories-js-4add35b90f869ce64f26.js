(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"postQuery",function(){return w});var a=n(0),r=n.n(a),i=n(1),o=n.n(i),l=n(157),m=n.n(l),c=n(52),s=n(151),p=n(159),d=n.n(p),u=n(156),g=n(161),f=n(154),h=n.n(f),b=n(158),y=s.b.h3.withConfig({displayName:"categories__Title",componentId:"sc-1htd2ji-0"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),x=function(e){var t=e.data.allMarkdownRemark.group;return r.a.createElement(u.d,null,r.a.createElement(m.a,{title:"Categories | "+h.a.siteTitle}),r.a.createElement(u.c,null),r.a.createElement(u.h,null,r.a.createElement(b.a,null,r.a.createElement("h2",null,r.a.createElement(g.b,null,"Categories")),t.map(function(e){return r.a.createElement(y,{key:e.fieldValue},r.a.createElement(c.Link,{to:"/categories/"+d()(e.fieldValue)},e.fieldValue)," ","(",e.totalCount,")")}))))};t.default=x,x.propTypes={data:o.a.shape({allMarkdownRemark:o.a.shape({group:o.a.array.isRequired})}).isRequired};var w="1430280466"},152:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={tablet:"(max-width: "+"1200px"+")",phone:"(max-width: "+"600px"+")"}},153:function(e,t,n){"use strict";t.a={primary:"#64b5f6",bg:"#212121",dark:"rgba(0, 0, 0, 0.9)",default:"#fff",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)",transitionTime:"0.5s",fontSmall:"0.9rem",pattern:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d02e77' fill-opacity='0.15'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"}},154:function(e,t){e.exports={pathPrefix:"/",siteTitle:"Frontend Consulting Ltd",siteTitleAlt:"Frontend Consulting Ltd",siteUrl:"https://frontend.consulting",siteLanguage:"en",siteDescription:"Angular and Typescript Consulting services based in London UK",themeColor:"#64b5f6",backgroundColor:"#212121",headerFontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',bodyFontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',baseFontSize:"14px"}},155:function(e){e.exports={data:{site:{buildTime:"15.04.2019"}}}},156:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1),o=n.n(i),l=n(151),m=n(52),c=n(159),s=n.n(c),p=l.b.article.withConfig({displayName:"Article__Post",componentId:"w59hvm-0"})(["display:flex;flex-direction:column;margin:1rem 0;padding:1rem 0;border-bottom:1px dashed #424242;&:last-child{border-color:transparent;}"]),d=l.b.h2.withConfig({displayName:"Article__Title",componentId:"w59hvm-1"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;font-size:18px;font-weight:600;"]),u=l.b.p.withConfig({displayName:"Article__Excerpt",componentId:"w59hvm-2"})(["grid-column:-1 / 1;margin-top:1rem;margin-bottom:1rem;font-size:13px;"]),g=function(e){var t=e.title,n=e.date,a=e.excerpt,i=e.slug,o=e.timeToRead,l=e.category;return r.a.createElement(p,null,r.a.createElement(d,null,r.a.createElement(m.Link,{to:i},t)),r.a.createElement(H,null,n," — ",o," Min Read — In"," ",r.a.createElement(m.Link,{to:"/categories/"+s()(l)},l)),r.a.createElement(u,null,a))},f=g;g.propTypes={title:o.a.string.isRequired,date:o.a.string.isRequired,excerpt:o.a.string.isRequired,slug:o.a.string.isRequired,timeToRead:o.a.number.isRequired,category:o.a.string.isRequired};n(162);var h=n(163),b=(l.b.button.withConfig({displayName:"Button",componentId:"sc-1vceue8-0"})(["background:",";border:none;display:inline-flex;align-items:center;border-radius:",";font-size:",";color:white;padding:",";transition:all ",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);&:hover{background:",";cursor:pointer;transform:translateY(-2px);}&:focus{outline:none;}svg{width:20px;height:20px;margin-right:0.75rem;fill:white;}"],function(e){return e.theme.primary},function(e){return e.big?"1.5rem":"1rem"},function(e){return e.big?"1.2rem":"1rem"},function(e){return e.big?"0.35rem 1.6rem":"0.25rem 1.5rem"},function(e){return e.theme.transitionTime},function(e){return Object(h.a)(.05,e.theme.primary)}),n(153)),y=n(152),x=l.b.h1.withConfig({displayName:"Header__Heading",componentId:"beimjb-0"})(["font-size:18px;font-weight:500;margin:0;padding:0.5rem 0;font-family:'Raleway',sans-serif;a{&:hover{color:#fff;border-color:transparent;}}"]),w=l.b.div.withConfig({displayName:"Header__Navigation",componentId:"beimjb-1"})(["flex:1;align-items:end;justify-content:flex-end;line-height:15px;flex-direction:row;display:flex;a{font-weight:100;font-size:18px;margin-left:2rem;border-bottom:3px solid transparent;padding:0.5rem 0;transition:border 0.25s;font-family:'Raleway',sans-serif;}a:hover,[aria-current],.current{border-bottom-color:",";color:#fff;}"],b.a.primary),E=l.b.div.withConfig({displayName:"Header__FlexHeader",componentId:"beimjb-2"})(["display:flex;max-width:1140px;margin:0 auto;padding:1rem 3rem;@media ","{padding:20px;}"],y.a.phone),v=function(){return r.a.createElement(E,null,r.a.createElement(x,null,r.a.createElement(m.Link,{to:"/"},"frontend.consulting")),r.a.createElement(w,null,r.a.createElement(m.Link,{activeClassName:"current",to:"/articles"},"articles"),r.a.createElement("a",{href:"mailto:gc@frontend.consulting"},"get in touch")))},C=n(160),k=n.n(C),T=n(155);function _(){var e=k()(["\n\t@import url('https://fonts.googleapis.com/css?family=Raleway:100,400,600');\n\n  body {\n    color: ",";\n    background: ",";\n    font-family: 'Raleway', sans-serif;\n    @media "," {\n      font-size: 14px;\n    }\n    ::selection, \n    ::-moz-selection {\n  \t\tbackground: ",";\n\t\t}\n  }\n  \n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",";\n    border-bottom: 1px solid transparent;\n  }\n  \n  a:hover {\n    border-color: ",";\n    color: ",";\n  }\n  \n  h1, h2, h3, h4 {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n"]);return _=function(){return e},e}Object(l.c)(_(),b.a.default,b.a.bg,y.a.phone,b.a.bg,b.a.default,b.a.transitionTime,b.a.primary,b.a.default,b.a.default,b.a.primary,b.a.dark);var N=l.b.footer.withConfig({displayName:"Layout__Footer",componentId:"sc-1883uv5-0"})(["text-align:center;padding:0;span{font-size:0.75rem;}"]),I=function(e){var t=e.children;return r.a.createElement(m.StaticQuery,{query:"3328648682",render:function(){return r.a.createElement(l.a,{theme:b.a},r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),t,r.a.createElement(N,null,r.a.createElement("a",{href:"https://github.com/fe-consulting",target:"_blank"},r.a.createElement("img",{src:"images/github.png",alt:"Github",width:"25",height:"auto"}))),r.a.createElement(J,null)))},data:T})},L=I;I.propTypes={children:o.a.oneOfType([o.a.array,o.a.node]).isRequired};var S=l.b.div.withConfig({displayName:"PrevNext__Wrapper",componentId:"a8usab-0"})(["display:flex;margin:6rem auto 0 auto;a{display:flex;align-items:center;}justify-items:center;"]),R=l.b.div.withConfig({displayName:"PrevNext__Prev",componentId:"a8usab-1"})(["span{text-transform:uppercase;font-size:0.8rem;}"]),j=l.b.div.withConfig({displayName:"PrevNext__Next",componentId:"a8usab-2"})(["margin-left:auto;text-align:right;span{text-transform:uppercase;font-size:0.8rem;}"]),z=function(e){var t=e.next,n=e.prev;return r.a.createElement(S,null,n&&r.a.createElement(R,null,r.a.createElement("span",null,"Previous"),r.a.createElement(m.Link,{to:n.fields.slug},n.frontmatter.title)),t&&r.a.createElement(j,null,r.a.createElement("span",null,"Next"),r.a.createElement(m.Link,{to:t.fields.slug},t.frontmatter.title)))},A=z;z.propTypes={next:o.a.object,prev:o.a.object},z.defaultProps={next:null,prev:null};l.b.div.withConfig({displayName:"SectionTitle",componentId:"sc-12upbd6-0"})(["font-size:",";text-transform:uppercase;font-weight:bold;text-align:center;color:",";position:relative;padding-bottom:1rem;margin-bottom:4rem;&:after{content:'';height:1px;width:50px;position:absolute;bottom:0;left:50%;margin-left:-25px;background:",";}"],function(e){return e.theme.fontSmall},function(e){return e.theme.dark},function(e){return e.theme.ultraLight});var U=n(157),q=n.n(U),F=n(154),P=n.n(F),M=function(e){var t,n,a,i,o=e.postNode,l=e.postPath,m=e.postSEO,c="/"===P.a.pathPrefix?"":P.a.pathPrefix;m?(t=o.frontmatter.title,n=o.excerpt,a=P.a.siteBanner,i=P.a.siteUrl+c+l):(t=P.a.siteTitle,n=P.a.siteDescription,a=P.a.siteBanner);a=P.a.siteUrl+c+a;var s=P.a.siteUrl+P.a.pathPrefix,p=[{"@context":"http://schema.org","@type":"WebSite",url:s,name:t,alternateName:P.a.siteTitleAlt?P.a.siteTitleAlt:""}];return m&&p.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":i,name:t,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:s,name:t,alternateName:P.a.siteTitleAlt?P.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:a},description:n}),r.a.createElement(q.a,null,r.a.createElement("title",null,P.a.siteTitle),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{name:"keywords",content:"minimal, blog, layout"}),r.a.createElement("meta",{name:"image",content:a}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),r.a.createElement("meta",{property:"og:locale",content:"de_DE"}),r.a.createElement("meta",{property:"og:site_name",content:P.a.ogSiteName}),r.a.createElement("meta",{property:"og:url",content:m?i:s}),m?r.a.createElement("meta",{property:"og:type",content:"article"}):null,r.a.createElement("meta",{property:"og:title",content:t}),r.a.createElement("meta",{property:"og:description",content:n}),r.a.createElement("meta",{property:"og:image",content:a}),r.a.createElement("meta",{property:"fb:app_id",content:P.a.siteFBAppID?P.a.siteFBAppID:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:P.a.userTwitter?P.a.userTwitter:""}),r.a.createElement("meta",{name:"twitter:title",content:t}),r.a.createElement("meta",{name:"twitter:url",content:P.a.siteUrl}),r.a.createElement("meta",{name:"twitter:description",content:n}),r.a.createElement("meta",{name:"twitter:image",content:a}))},B=M;M.propTypes={postNode:o.a.object,postPath:o.a.string,postSEO:o.a.bool};var H=l.b.div.withConfig({displayName:"Subline",componentId:"sc-1oopd01-0"})(["font-size:",";",";",";",";"],function(e){return e.theme.fontSmall},function(e){return e.sectionTitle&&"margin-top: -3rem"},function(e){return e.sectionTitle&&"margin-bottom: 4rem"},function(e){return e.sectionTitle&&"text-align: center"}),D=l.b.div.withConfig({displayName:"Wrapper",componentId:"sc-132nl7e-0"})(["display:grid;grid-template-columns:1fr minmax(320px,1140px) 1fr;padding:0 1rem;"]),O=n(6),V=n.n(O),J=function(e){function t(){return e.apply(this,arguments)||this}V()(t,e);var n=t.prototype;return n.componentDidMount=function(){function e(){window.dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-137411414-1")},n.render=function(){return r.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-137411414-1"})},t}(r.a.Component);n.d(t,"b",function(){return f}),n.d(t,"c",function(){return v}),n.d(t,"d",function(){return L}),n.d(t,"e",function(){return A}),n.d(t,"f",function(){return B}),n.d(t,"g",function(){return H}),n.d(t,"h",function(){return D}),n.d(t,"a",function(){return J})},158:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(151),r=n(152),i=a.b.div.withConfig({displayName:"Content",componentId:"sgn00h-0"})(["grid-column:2;padding:1rem 3rem;@media ","{padding:3rem 2rem;}@media ","{padding:2rem 0.5rem;}overflow:hidden;"],r.a.tablet,r.a.phone)},161:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o});var a=n(151),r=n(153),i=a.b.span.withConfig({displayName:"Text__Underlined",componentId:"vq2kgu-0"})(["border-bottom:1px solid ",";padding-bottom:5px;"],r.a.primary),o=a.b.div.withConfig({displayName:"Text__Thin",componentId:"vq2kgu-1"})(["font-weight:100;"])}}]);
//# sourceMappingURL=component---src-pages-categories-js-4add35b90f869ce64f26.js.map