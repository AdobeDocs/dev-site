"use strict";(self.webpackChunkdev_site=self.webpackChunkdev_site||[]).push([[206],{91515:function(e,t,n){var l=n(15785),i=n(64572),r=n(15007),o=n(1597),a=n(64983),s=n(95223),d=n(26777),u=n(158),p=n(42075),c=n(23576),v=n(69679),m=n(56013),h=n(24149),f=n(48261),g=n(31160),b=n(21183),y=n(45553),x=n(47029),Z=n(60325),w=n(1931),P=n(1474);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const C=e=>{let{childrenArray:t,query:n,hasSideNav:l}=e;const i=[];let o=null,a=null;for(;t.length;){const e=t[0];let s=0;Object.keys(P.a).forEach((d=>{var p;if((null==e||null===(p=e.props)||void 0===p?void 0:p.mdxType)===d){s++;let d=[];if(e.props.slots||e.props.repeat){const n=Math.max(parseInt(e.props.repeat)||1,1);for(let l=0;l<n;l++)d=d.concat((e.props.slots||"element").split(",").map(((e,i)=>[""+e.trim()+(1===n?"":l),t[d.length+i+1]])))}if(d.length){s+=d.length;const t=Object.fromEntries(d);"Variant"===e.props.mdxType&&(t.query=n),"Hero"===e.props.mdxType&&l&&(t.width="calc("+u.Av+" - "+u.dP+");");const p=(0,r.cloneElement)(e,j({},t));"Hero"===e.props.mdxType?o=o||p:"Resources"===e.props.mdxType?a=a||p:i.push(p)}else i.push(e)}})),0===s&&(s++,i.push(e)),t=t.splice(s)}return{filteredChildren:i,heroChild:o,resourcesChild:a}};var q={name:"13fp5r9",styles:"display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:var(--spectrum-global-dimension-size-200)"},A={name:"4zleql",styles:"display:block"},D={name:"1ggp1wf",styles:"margin-right:var(--spectrum-global-dimension-size-400)"},k={name:"zjik7",styles:"display:flex"},z={name:"7wiue4",styles:"align-items:center;justify-content:center;display:flex;flex-direction:column"};t.Z=e=>{var t;let{children:n,pageContext:i,query:O}=e;const{hasSideNav:S,siteMetadata:M,location:N,allSitePage:E,allMdx:T,allGithub:L,allGithubContributors:_}=(0,r.useContext)(d.Z),B=void 0===i;let X=r.Children.toArray(n);if(B||"none"===(null==i||null===(t=i.frontmatter)||void 0===t?void 0:t.layout)){const{filteredChildren:e}=C({childrenArray:(0,Z.L)(X),query:O,hasSideNav:S});return B?(0,s.tZ)(a.MDXProvider,null,e):(0,s.tZ)(a.MDXProvider,{components:j(j({},w.t),P.a)},e,(0,s.tZ)(p.$,{hasSideNav:S}))}{var G,H,Y,J,K,R,$,I,V,F,Q,U,W,ee,te,ne,le,ie,re;const e=(0,u.kR)(null==N?void 0:N.pathname,null==M?void 0:M.subPages),t=(0,u.P4)(null==N?void 0:N.pathname,null==M?void 0:M.subPages),{nextPage:n,previousPage:r}=(0,u.sl)(null==N?void 0:N.pathname,null==M?void 0:M.subPages),d=null==i||null===(G=i.frontmatter)||void 0===G?void 0:G.contributor_name,O=null==i||null===(H=i.frontmatter)||void 0===H?void 0:H.contributor_link,B=null==i||null===(Y=i.frontmatter)||void 0===Y?void 0:Y.edition,oe=null==E?void 0:E.nodes.find((e=>{let{path:t}=e;return(0,o.dq)(t)===(null==N?void 0:N.pathname)})),ae=null!==(J=null==oe?void 0:oe.component)&&void 0!==J?J:"",se=null==T?void 0:T.nodes.find((e=>{let{fileAbsolutePath:t}=e;return t===ae})),de=null!==(K=null==se?void 0:se.tableOfContents)&&void 0!==K?K:{},{repository:ue,default_branch:pe,root:ce}=null==L?void 0:L.nodes[0],ve=null==_?void 0:_.nodes.find((e=>{let{path:t}=e;return t===ae})),me=null!==(R=null==ve?void 0:ve.contributors)&&void 0!==R?R:[],he=ae.replace(/.*\/src\/pages\//g,""),fe=void 0!==(null==i||null===($=i.frontmatter)||void 0===$?void 0:$.hideBreadcrumbNav)&&i.frontmatter.hideBreadcrumbNav;if("boolean"!=typeof fe)throw new Error("hideBreadcrumbNav is not a boolean. Correct use hideBreadcrumbNav: true");const{home:ge}=M,be=(0,u.A6)(N.pathname),ye=(0,u.Gh)(null==M?void 0:M.pages),xe=(0,u.Yx)(be,ye),Ze=(0,u.xH)(be,xe),we=(0,u.Lh)(null==N?void 0:N.pathname,null==M?void 0:M.subPages);let Pe=[];if(we.length){const e=we[we.length-1].level+1;for(let t=0;t<e;t++){const e=we.filter((e=>e.level===t));e.length&&Pe.push(e.pop())}}let Oe=!1;null!=i&&null!==(I=i.frontmatter)&&void 0!==I&&I.jsDoc&&(Oe=!0,X=(0,Z.L)(X));const{filteredChildren:je,heroChild:Ce,resourcesChild:qe}=C({childrenArray:X,hasSideNav:S}),Ae=null===Ce,De=null!==Ce&&(!Ce.props.variant||"default"===Ce.props.variant),ke=null!==Ce&&Ce.props.variant&&"default"!==Ce.props.variant,ze=null==de||null===(V=de.items)||void 0===V||null===(F=V[0])||void 0===F?void 0:F.items,Se=!Ce&&(S||Oe)&&ze&&(ze.length>1||1===ze.length&&(null===(Q=ze[0])||void 0===Q||null===(U=Q.items)||void 0===U?void 0:U.length)>1||(null===(W=ze[0])||void 0===W?void 0:W.title)),Me=(null==e?void 0:e.pathname)===(null==t||null===(ee=t[0])||void 0===ee?void 0:ee.pathname),Ne=12,Ee=[];return Se&&Ee.push((0,u.MY)(2)+" - var(--spectrum-global-dimension-size-400)"),S&&Ee.push(u.dP),(0,s.tZ)(a.MDXProvider,{components:j(j({},w.t),P.a)},(0,s.tZ)("main",{css:z},Ce&&Ce,(0,s.tZ)("div",{css:(0,s.iv)(ke?"width: var(--spectrum-global-dimension-static-grid-fluid-width);":"\n                max-width: "+u.Av+";\n                margin: 0 var(--spectrum-global-dimension-size-800);\n                "," ",De&&"\n                h2:first-of-type {\n                  margin-top: 0 !important;\n                }\n              ","@media screen and (max-width: ",u.Av,"){max-width:none;margin:0 var(--spectrum-global-dimension-size-400);}")},(0,s.tZ)("div",{css:k},(0,s.tZ)("div",{css:(0,s.iv)("width:",ke?"\n                      var(--spectrum-global-dimension-static-grid-fluid-width);\n                      text-align: center;\n                      ":(0,u.MY)(Ne,Ee),";@media screen and (max-width: ",u.Av,"){width:100%;}")},Ae&&(0,s.tZ)("div",{css:(0,s.iv)("display:flex;margin-top:var(--spectrum-global-dimension-size-500);margin-bottom:var(--spectrum-global-dimension-size-500);@media screen and (max-width: ",u.Av,"){flex-direction:column;}")},!fe&&xe&&(0,s.tZ)("div",{css:D},!0!==(null==ge?void 0:ge.hidden)&&null!=ge&&ge.title&&null!=ge&&ge.href?(0,s.tZ)(h.O,{pages:[u.JK,ge,j(j({},xe),{},{href:(0,o.dq)(xe.href)}),Ze&&j(j({},Ze),{},{href:(0,o.dq)(Ze.href)})].concat((0,l.Z)(Pe.map((e=>j(j({},e),{},{href:(0,o.dq)((0,u.Mi)(e.href))})))))}):(0,s.tZ)(h.O,{pages:[u.JK,(null==M||null===(te=M.pages)||void 0===te?void 0:te.length)>1?j(j({},null==M||null===(ne=M.pages)||void 0===ne?void 0:ne[0]),{},{href:(0,o.dq)(null==M||null===(le=M.pages)||void 0===le||null===(ie=le[0])||void 0===ie?void 0:ie.href)}):null,j(j({},xe),{},{href:(0,o.dq)(xe.href)}),Ze&&j(j({},Ze),{},{href:(0,o.dq)(Ze.href)})].concat((0,l.Z)(Pe.map((e=>e.title===(null==xe?void 0:xe.title)&&e.href===(null==xe?void 0:xe.href)?null:j(j({},e),{},{href:(0,o.dq)((0,u.Mi)(e.href))})))))})),(0,s.tZ)("div",{css:(0,s.iv)("margin-left:auto;display:flex;align-items:center;@media screen and (max-width: ",u.Av,"){margin-left:0;margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.tZ)(m.X,{repository:ue,branch:pe,root:ce,pagePath:he}))),(0,s.tZ)("div",{css:A},B&&(0,s.tZ)(g.c,{name:B}),O&&(0,s.tZ)(f.x,{name:d,link:O})),je,Ae&&Me&&(0,s.tZ)(y.x,{pages:t}),Ae&&(0,s.tZ)(x.m,{nextPage:n,previousPage:r}),!ke&&(0,s.tZ)("div",{css:q},(0,s.tZ)("div",null,(0,s.tZ)(c.T,{repository:ue,branch:pe,root:ce,pagePath:he,contributors:me,externalContributors:null==i||null===(re=i.frontmatter)||void 0===re?void 0:re.contributors,date:me[0]?new Date(me[0].date).toLocaleDateString():(new Date).toLocaleDateString()})),(0,s.tZ)("div",{css:(0,s.iv)("@media screen and (max-width: ",u.Av,"){margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.tZ)(v.x,null)))),Se&&(0,s.tZ)(b.m,{tableOfContents:de}),qe&&qe)),(0,s.tZ)(p.$,{hasSideNav:S})))}}}}]);
//# sourceMappingURL=f0220df2980e69cea161.js.map