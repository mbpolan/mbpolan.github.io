(this["webpackJsonpmbpolan.github.io"]=this["webpackJsonpmbpolan.github.io"]||[]).push([[0],{106:function(e,t){},195:function(e,t,n){},224:function(e,t){},636:function(e,t,n){"use strict";n.r(t);var c,r,a,o,i,s,l,b,j,d,u,h,O=n(0),m=n.n(O),g=n(40),x=n.n(g),f=(n(194),n(195),n(15)),p=n(6),v=n(188),C=n(49),k=n.n(C),y=n(173),w=Object(O.createContext)({}),F=n(174),S=n(1),I=function(e){var t=e.children,n=e.liveMode,c=Object(O.useMemo)((function(){return Object(F.createClient)({space:"i2kbvlul2chx",accessToken:(n?"tPPzznJQpKwVqft6ptFu-WWiUXdKm8RrEw2qA5uxCcM":"ZnYun_vtXhYpoiAvL3NPDfeXsL4P2up5nq33GPdCRGE")||"",host:n?"cdn.contentful.com":"preview.contentful.com"})}),[n]);return Object(S.jsx)(w.Provider,{value:{client:c},children:t})},P=Object(O.createContext)({data:{}}),T=Object(O.createContext)("light"),E=function(e){var t=e.children,n=e.mode;return Object(S.jsx)(T.Provider,{value:n,children:t})},B=function(e){var t=Object(O.useContext)(P),n=Object(O.useContext)(w),c=Object(O.useState)([]),r=Object(f.a)(c,2),a=r[0],o=r[1],i=Object(O.useState)(),s=Object(f.a)(i,2),l=s[0],b=s[1],j=Object(O.useState)(!1),d=Object(f.a)(j,2),u=d[0],h=d[1];return Object(O.useEffect)((function(){Object(y.a)(k.a.mark((function c(){var r,a,i,s,l;return k.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(h(!0),c.prev=1,r=JSON.stringify(e),!(a=t.data[r])){c.next=8;break}o(a),c.next=14;break;case 8:return c.next=10,null===(i=n.client)||void 0===i?void 0:i.getEntries(e);case 10:s=c.sent,l=(null===s||void 0===s?void 0:s.items.map((function(e){return e.fields})))||[],o(l),t.data[r]=l;case 14:c.next=20;break;case 16:c.prev=16,c.t0=c.catch(1),console.error(c.t0),b("Failed to fetch data.");case 20:return c.prev=20,h(!1),c.finish(20);case 23:case"end":return c.stop()}}),c,null,[[1,16,20,23]])})))()}),[e,n.client,t.data]),[a,l,u]},D=function(){return Object(O.useContext)(T)},L=n(10),M=n(650),N=n(7),J=Object(N.c)(M.a)(c||(c=Object(L.a)(["\n  margin: 10px 0;\n  width: 100%;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]))),z=function(e){var t=e.entry,n=e.onClick;return Object(S.jsx)(J,{onClick:n,children:Object(S.jsxs)(M.a.Body,{children:[Object(S.jsx)(M.a.Title,{children:t.title}),Object(S.jsx)(M.a.Subtitle,{className:"mb-2 text-muted",children:new Date(t.publishedDate).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}),Object(S.jsx)(M.a.Text,{children:t.leadText})]})})},A=n(641),H=Object(N.c)(A.a)(r||(r=Object(L.a)(["\n  margin-top: 20px;\n"]))),G=N.c.div(a||(a=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),_=N.c.div(o||(o=Object(L.a)(["\n  font-weight: bold;\n"]))),q=N.c.div(i||(i=Object(L.a)(["\n  font-size: 1.2rem;\n"]))),R=function(e){var t=e.message;return Object(S.jsxs)(G,{children:[Object(S.jsx)(_,{children:"Oh snap!"}),Object(S.jsx)(q,{children:t})]})},U=n(642),X=N.c.div(s||(s=Object(L.a)(["\n  font-size: 1.2rem;\n"]))),K=function(e){var t=e.message;return Object(S.jsxs)(G,{children:[Object(S.jsx)(U.a,{animation:"border",variant:"primary"}),Object(S.jsx)(X,{children:t})]})},Q=N.c.div(l||(l=Object(L.a)(["\n  font-family: monospace;\n  font-size: 1.1rem;\n  font-weight: bold;\n"]))),W=N.c.div(b||(b=Object(L.a)(["\n  font-size: 1.2rem;\n"]))),Y=function(e){var t=e.message;return Object(S.jsxs)(G,{children:[Object(S.jsx)(Q,{children:":("}),Object(S.jsx)(W,{children:t})]})},V={content_type:"blogPost",select:["fields.title","fields.slug","fields.publishedDate","fields.leadText"].join(","),limit:3,order:"-fields.publishedDate"},Z=function(e){var t=e.limit,n=Object(p.f)(),c=V;c.limit=t;var r=B(c),a=Object(f.a)(r,3),o=a[0],i=a[1],s=a[2];return Object(S.jsxs)(H,{children:[i&&Object(S.jsx)(R,{message:i}),s&&Object(S.jsx)(K,{message:"Fetching post content"}),!s&&!o&&Object(S.jsx)(Y,{message:"Could not find blog post"}),o.map((function(e){return Object(S.jsx)(z,{entry:e,onClick:function(){return function(e){n.push("/blog/".concat(e.slug))}(e)}},e.slug)}))]})},$=n(647),ee=n(648),te=n(643),ne=n(644),ce=n(645),re=Object(N.c)($.a.Text)(j||(j=Object(L.a)(["\n  padding: 8px;\n"]))),ae=N.c.div(d||(d=Object(L.a)(["\n  cursor: pointer;\n"]))),oe=function(e){var t=e.onChangeTheme,n=D();return Object(S.jsxs)($.a,{bg:n,variant:n,expand:"lg",children:[Object(S.jsx)($.a.Brand,{href:"#home",children:"Mike Polan"}),Object(S.jsx)($.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(S.jsx)($.a.Collapse,{id:"basic-navbar-nav",children:Object(S.jsxs)(ee.a,{className:"mr-auto",children:[Object(S.jsx)(re,{children:Object(S.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://linkedin.com/in/mbpolan",children:Object(S.jsx)(te.a,{})})}),Object(S.jsx)(re,{children:Object(S.jsx)(ae,{onClick:function(){t("light"===n?"dark":"light")},children:"light"===n?Object(S.jsx)(ne.a,{}):Object(S.jsx)(ce.a,{})})}),Object(S.jsx)(ee.a.Link,{href:"#home",children:"Home"}),Object(S.jsx)(ee.a.Link,{href:"#blog",children:"Blog"})]})})]})},ie=function(){return Object(S.jsxs)(H,{children:[Object(S.jsx)("p",{children:"Here you will find all of my ramblings and other (sometimes) relevant blog posts."}),Object(S.jsx)(Z,{})]})},se=function(){return Object(S.jsxs)(H,{children:[Object(S.jsx)("p",{children:"Hey! Looks like you've stumbled into my small corner of the interwebs."}),Object(S.jsx)("p",{children:"I'm your usual hobby-turned-career programmer, who loves learning new things and trying out the latest tech whenever I get the chance. Professionally, I develop and maintain web applications using various languages and frameworks, ranging from Java and Spring Boot to NodeJS and C# and .NET. I'm a big fan of ReactJS for frontend development, and I'm more than happy to experiment with the latest \"Javascript framework of the week\", so to speak. :wink:"}),Object(S.jsx)("p",{children:"Apart from that, I enjoy hiking when the weather is warm and skiing when it's not. Traveling and sightseeing are another source of enjoyment whenever I get the chance. Cooking is a recent hobby of mine, though it's still in the very early stages (read: beware anything I make - for now!)."}),Object(S.jsxs)("p",{children:["Check out ",Object(S.jsx)("a",{href:"https://github.com/mbpolan",children:"my GitHub"})," to see what I've been up to. I also used to be active on"," ",Object(S.jsx)("a",{href:"https://sourceforge.net/u/kanadakid/profile/",children:"SourceForge"})," back in the day. Since then I've migrated most of my older, inactive projects over to GitHub instead. Even though I don't really plan on continuing said projects, they might still be useful as a reference for myself and others."]}),Object(S.jsx)("h2",{children:"Blog"}),Object(S.jsxs)("p",{children:[Object(S.jsx)("span",{children:"These are mostly random, off the cuff thoughts and ideas I figured I'd share.\xa0"}),Object(S.jsx)("span",{children:Object(S.jsx)("a",{href:"#blog",children:"More here!"})})]}),Object(S.jsx)(Z,{limit:3})]})},le=n(651),be=n(180),je=n.n(be),de=n(181),ue=n.n(de),he=n(71),Oe=n(189),me=n(649),ge=n(646),xe=n(186),fe=function(e){var t=e.className,n=e.children,c=e.inline,r=Object(Oe.a)(e,["className","children","inline"]),a=D(),o=/language-(\w+)/.exec(t||"");return!c&&o?Object(S.jsx)(me.a,Object(he.a)({style:"dark"===a?ge.a:xe.a,language:o[1],PreTag:"div",children:String(n).replace(/\n$/,"")},r)):Object(S.jsx)("code",Object(he.a)(Object(he.a)({className:t},r),{},{children:n}))},pe=n(187),ve=n.n(pe),Ce=N.c.div(u||(u=Object(L.a)(["\n  margin-bottom: 20px;\n"]))),ke=function(e){var t=e.entry;return Object(S.jsxs)(H,{children:[Object(S.jsxs)(Ce,{children:[Object(S.jsx)("h1",{children:t.title}),Object(S.jsx)("h4",{children:new Date(t.publishedDate).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})]}),Object(S.jsx)(je.a,{components:{code:fe},remarkPlugins:[ue.a],rehypePlugins:[ve.a],children:t.content})]})},ye=function(){var e=Object(p.h)().slug,t=Object(O.useState)({content_type:"blogPost","fields.slug":e}),n=function(e){var t=B(e),n=Object(f.a)(t,3),c=n[0],r=n[1],a=n[2];return[c[0],r,a]}(Object(f.a)(t,1)[0]),c=Object(f.a)(n,3),r=c[0],a=c[1],o=c[2];return Object(S.jsxs)(H,{children:[Object(S.jsxs)(le.a,{children:[Object(S.jsx)(le.a.Item,{href:"#blog",children:"Blog"}),!o&&r&&Object(S.jsx)(le.a.Item,{active:!0,children:r.title})]}),a&&Object(S.jsx)(R,{message:a}),o&&Object(S.jsx)(K,{message:"Fetching post content"}),!o&&!r&&Object(S.jsx)(Y,{message:"Could not find blog post"}),!o&&r&&Object(S.jsx)(ke,{entry:r})]})},we=n(66),Fe=n.n(we),Se={body:{backgroundColor:"#191B1C",textColor:"#CECAC4"},a:{textColor:"#519AEC"},breadcrumb:{backgroundColor:"#333B3F",active:{textColor:"#CECAC4"}},card:{backgroundColor:"#333B3F"}},Ie={body:{backgroundColor:"#FFFFFF",textColor:"#000000"},a:{textColor:"#007BFF"},breadcrumb:{backgroundColor:"#E9ECEF",active:{textColor:""}},card:{backgroundColor:"#FFFFFF"}},Pe=Object(N.b)(h||(h=Object(L.a)(["\n    body {\n        color: ",";\n        background-color: ","\n    }\n\n    a {\n        color: ",";\n    }\n\n    .breadcrumb {\n        background-color: ",";\n    }\n\n    .breadcrumb-item.active {\n        color: ",";\n    }\n\n    .breadcrumb-item+.breadcrumb-item::before {\n        color: ",";\n    }\n\n    .card {\n        background-color: ",";\n    }\n"])),(function(e){return e.theme.body.textColor}),(function(e){return e.theme.body.backgroundColor}),(function(e){return e.theme.a.textColor}),(function(e){return e.theme.breadcrumb.backgroundColor}),(function(e){return e.theme.breadcrumb.active.textColor}),(function(e){return e.theme.breadcrumb.active.textColor}),(function(e){return e.theme.card.backgroundColor})),Te=function(e){var t=e.onChangeTheme,n=Object(p.g)().search,c=Object(O.useState)(!0),r=Object(f.a)(c,2),a=r[0],o=r[1];return Object(O.useEffect)((function(){Fe.a.parse(n,{ignoreQueryPrefix:!0}).preview&&o(!1)}),[n]),Object(S.jsxs)(I,{liveMode:a,children:[Object(S.jsx)(oe,{onChangeTheme:t}),Object(S.jsxs)(p.c,{children:[Object(S.jsx)(p.a,{path:"/blog/:slug",component:ye}),Object(S.jsx)(p.a,{path:"/blog",component:ie}),Object(S.jsx)(p.a,{component:se})]})]})},Ee=function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,t=Object(O.useState)(e?"dark":"light"),n=Object(f.a)(t,2),c=n[0],r=n[1];return Object(S.jsx)(E,{mode:c,children:Object(S.jsxs)(N.a,{theme:"dark"===c?Se:Ie,children:[Object(S.jsx)(Pe,{}),Object(S.jsx)(v.a,{children:Object(S.jsx)(Te,{onChangeTheme:r})})]})})},Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,652)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};x.a.render(Object(S.jsx)(m.a.StrictMode,{children:Object(S.jsx)(Ee,{})}),document.getElementById("root")),Be()}},[[636,1,2]]]);
//# sourceMappingURL=main.cf94e7df.chunk.js.map