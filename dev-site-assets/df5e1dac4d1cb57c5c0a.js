(self.webpackChunkdev_site=self.webpackChunkdev_site||[]).push([[505],{8300:function(e,t,n){"use strict";n.d(t,{o:function(){return V}});var r=n(18),i=n(2137),s=n(7757),a=n.n(s),o=n(5007),c=n(6508),u=n(2275),l=n(465),m=n(7197),d=n(7851),f=n(2390),p=n(5900),h=n.n(p),g=n(5961),v=n(755);var y="688px",b="keywords",w=function(e){return e.replace(/[\u00A0-\u9999<>\&]/g,(function(e){return"&#"+e.charCodeAt(0)+";"})).replace(/&#60;mark&#62;/g,"<mark>").replace(/&#60;em&#62;/g,"<em>").replace(/&#60;\/mark&#62;/g,"</mark>").replace(/&#60;\/em&#62;/g,"</em>")},Z=function(e,t){var n=new URLSearchParams(window.location.search);n.set(e,t),window.history.replaceState({},"",window.location.pathname+"?"+n)},x=function(e){return e.map((function(e){return Object.keys(e)[0]}))},k=function(){var e=(0,i.Z)(a().mark((function e(t,n,i,s){var o,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],"all"===Object.keys(i[0])[0]?i=s:(c=x(i).filter((function(e){return"all"!==e})),i=[].concat((0,r.Z)(c),(0,r.Z)(s.filter((function(e){return!c.includes(e)}))))),i.forEach((function(e){o.push({indexName:e,query:n,params:{hitsPerPage:Math.ceil(50/i.length),attributesToRetrieve:["objectID","url","title","description"]}})})),e.next=5,t.multipleQueries(o);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,i){return e.apply(this,arguments)}}(),z=function(){var e=(0,i.Z)(a().mark((function e(t,n,r,i,s){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],(r="all"===r?i:[r]).forEach((function(e){o.push({indexName:e,query:n,params:{facets:[b],attributesToRetrieve:["objectID","url"],hitsPerPage:Math.ceil(100/r.length),filters:s.map((function(e){return'keywords:"'+e+'"'})).join(" AND ")}})})),e.next=5,t.multipleQueries(o);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,i,s){return e.apply(this,arguments)}}(),S=function(e,t){e.forEach((function(e){var n=e.objectID,r=e.url,i=e._highlightResult;(0,f.Bm)(r)||t.find((function(e){return e.url===r}))||t.push({objectID:n,url:r,_highlightResult:i})}))},A=function(e,t){e.keywords&&Object.keys(e.keywords).forEach((function(n){var r,i=t.find((function(e){return Object.keys(e)[0]===n}));i?i[n]+=e.keywords[n]:t.push(((r={})[n]=e.keywords[n],r))}))},E={name:"wciztf",styles:"position:fixed;z-index:1;top:calc(var(--spectrum-global-dimension-size-1200) + var(--spectrum-global-dimension-size-800));bottom:0;left:0;right:0;background-color:rgba(0, 0, 0, 0.4);pointer-events:none"},j={name:"5fn1g1",styles:"margin-top:var(--spectrum-global-dimension-size-100)"},R={name:"pcg0ds",styles:"width:var(--spectrum-global-dimension-size-2400);height:var(--spectrum-global-dimension-size-1200);margin-bottom:var(--spectrum-global-dimension-size-300);fill:var(--spectrum-global-color-static-gray-500)"},N={name:"rwu85d",styles:"margin:var(--spectrum-global-dimension-size-100) 0"},q={name:"1jwcxx3",styles:"font-style:italic"},_={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},H={name:"1hctma0",styles:"margin:var(--spectrum-global-dimension-size-300);mark,em{background-color:transparent;color:inherit;font-weight:700;font-style:inherit;}"},L={name:"13udsys",styles:"height:100%"},M={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},B={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},I={name:"11en623",styles:"display:flex;flex-direction:column;align-items:center;justify-content:center"},C={name:"14gwd3k",styles:"margin-top:var(--spectrum-global-dimension-size-800);margin-bottom:var(--spectrum-global-dimension-size-800)"},D={name:"1ef11wo",styles:"font-style:italic;margin:var(--spectrum-global-dimension-size-50) 0"},T={name:"pgkztz",styles:"mark,em{background-color:transparent;color:inherit;font-weight:inherit;font-style:inherit;text-decoration:underline;}"},P={name:"a4hmbt",styles:"position:absolute"},Q={name:"11qpleq",styles:"min-width:auto;width:100%"},O={name:"1d3w5wq",styles:"width:100%"},V=function(e){var t=e.algolia,n=e.searchIndex,s=e.indexAll,p=e.showSearch,b=e.setShowSearch,V=e.searchButtonId,F=(0,o.useState)(""),U=F[0],K=F[1],X=(0,o.useState)(x(n)[0]),J=X[0],G=X[1],W=(0,o.useState)([]),Y=W[0],$=W[1],ee=(0,o.useState)(!1),te=ee[0],ne=ee[1],re=(0,o.useState)(!1),ie=re[0],se=re[1],ae=(0,o.useState)(!1),oe=ae[0],ce=ae[1],ue=(0,o.useRef)(null),le=(0,o.useRef)(null),me=(0,o.useRef)(null),de=(0,o.useRef)(null),fe=(0,o.useState)([]),pe=fe[0],he=fe[1],ge=(0,o.useState)([]),ve=ge[0],ye=ge[1],be=(0,o.useState)([]),we=be[0],Ze=be[1],xe=(0,o.useState)(!1),ke=xe[0],ze=xe[1],Se=(0,o.useState)(!1),Ae=Se[0],Ee=Se[1],je=(0,o.useRef)(null),Re=(0,o.useState)(!1),Ne=Re[0],qe=Re[1],_e=function(e){var t;void 0===e&&(e=n[x(n).indexOf(J)].tabRef),te&&null!==(t=e)&&void 0!==t&&t.current&&((0,l.Rp)(je,Ne),(0,l.BA)(je,e))},He=function(){var e=(0,i.Z)(a().mark((function e(){var n,r,i,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!U.length){e.next=15;break}return ze(!1),Z(f.AQ.query,U),Z(f.AQ.keywords,Y),Z(f.AQ.index,J),_e(),ne(!0),e.next=9,z(t,U,J,s,Y);case 9:r=e.sent,i=[],o=[],null!=r&&null!==(n=r.results)&&void 0!==n&&n.length&&r.results.forEach((function(e){var t=e.hits,n=e.facets;S(t,i),A(n,o)})),ye(i),Ze(o);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){if(p){var e=new URL(window.location).searchParams,t=e.get(f.AQ.query),n=e.get(f.AQ.keywords),r=e.get(f.AQ.index);r&&G(r),n&&$(n.split(",")),null!=t&&t.length&&(K(t),ce(!0),Ee(!0)),null!=me&&me.current&&me.current.focus()}}),[p]),(0,o.useEffect)((function(){He()}),[J,Y]),(0,o.useEffect)((function(){Ae&&(Ee(!1),He())}),[Ae,Ee]),(0,o.useEffect)((function(){null!=de&&de.current&&(de.current.scrollTop=0)}),[ve]),(0,o.useEffect)((function(){te?(_e(),qe(!0)):qe(!1)}),[te]),(0,o.useEffect)((function(){var e=function(e){var t=e.target;ze(!1),ue.current&&!ue.current.contains(t)&&t.id!==V&&b(!1)};return document.addEventListener("click",e,!0),function(){document.removeEventListener("click",e,!0)}}),[ze,te,b,ue]),(0,o.useEffect)((function(){var e=function(e){"Escape"===e.key&&b(!1)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[b]),(0,c.tZ)(o.default.Fragment,null,(0,c.tZ)("div",{ref:ue,css:(0,c.iv)("position:fixed;top:var(--spectrum-global-dimension-size-800);left:0;right:0;",te&&"bottom: 0;"," background-color:var(--spectrum-global-color-static-white);z-index:10;@media screen and (max-width: ",f.q9,"){top:var(--spectrum-global-dimension-size-1200);}","")},(0,c.tZ)("div",{css:(0,c.iv)("position:relative;margin:var(--spectrum-global-dimension-size-400) auto;max-width:",y,";@media screen and (max-width: ",f.q9,"){max-width:calc(100vw - var(--spectrum-global-dimension-size-800));}","")},(0,c.tZ)("form",{css:O,className:"spectrum-Search",onSubmit:function(){var e=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,He();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},(0,c.tZ)("div",{className:h()("spectrum-Textfield",{"is-focused":ie}),css:Q},(0,c.tZ)(g.Magnify,{className:"spectrum-Textfield-icon"}),(0,c.tZ)("input",{ref:me,value:U,onFocus:function(){se(!0)},onBlur:function(){se(!1)},onKeyDown:function(e){var t=e.key;null!=le&&le.current&&("ArrowDown"===t?le.current.querySelector('[tabindex="0"]').focus():"ArrowUp"===t&&le.current.querySelector('[tabindex="0"]:last-of-type').focus())},onChange:function(){var e=(0,i.Z)(a().mark((function e(r){var i,o,c,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.target.value,K(i),!i.length||ve.length){e.next=11;break}return ce(!0),e.next=6,k(t,i,n,s);case 6:null!=(c=e.sent)&&null!==(o=c.results)&&void 0!==o&&o.length?(u=[],c.results.forEach((function(e){var t=e.hits;S(t,u)})),he(u),ve.length||ne(!1)):he([]),ze(!0),e.next=13;break;case 11:ce(!1),ze(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"aria-label":"Search",type:"search",placeholder:"Search",className:"spectrum-Textfield-input spectrum-Search-input",autoComplete:"off"})),oe&&(0,c.tZ)("button",{css:P,tabIndex:"-1","aria-label":"Clear Search",type:"reset",className:"spectrum-ClearButton spectrum-Search-clearButton",onClick:function(){K(""),me.current.focus()}},(0,c.tZ)(g.Cross,null))),(0,c.tZ)(d.J,{isOpen:ke,css:(0,c.iv)("position:absolute;top:var(--spectrum-global-dimension-size-400);width:",y,";@media screen and (max-width: ",f.q9,"){max-width:calc(100vw - var(--spectrum-global-dimension-size-800));}","")},pe.length>0?(0,c.tZ)(m.v2,{ref:le,onKeyDown:function(e){var t=e.key;if(null!=le&&le.current&&le.current.contains(document.activeElement))if("ArrowDown"===t){var n=document.activeElement.nextElementSibling;n?n.focus():le.current.querySelector('[tabindex="0"]').focus()}else if("ArrowUp"===t){var r=document.activeElement.previousElementSibling;r?r.focus():le.current.querySelector('[tabindex="0"]:last-of-type').focus()}}},pe.map((function(e){var t=""+location.origin+e.url;return(0,c.tZ)(m.ck,{key:e.objectID,href:t},(0,c.tZ)("div",{css:T},(0,c.tZ)("strong",{dangerouslySetInnerHTML:{__html:w(e._highlightResult.title.value)}}),(0,c.tZ)("div",{css:D},t),(0,c.tZ)("div",{dangerouslySetInnerHTML:{__html:w(e._highlightResult.content.value)}})))}))):(0,c.tZ)("div",{css:C},(0,c.tZ)("div",{css:I},(0,c.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeS",css:B},"No Results Found"),(0,c.tZ)("em",null,"Try another search term"))))),te&&(0,c.tZ)("div",{css:(0,c.iv)("display:flex;max-width:",f.Av,";margin:auto;height:100%;@media screen and (max-width: ",f.q9,"){overflow:auto;flex-wrap:wrap;}","")},(0,c.tZ)("div",{css:(0,c.iv)("display:flex;align-items:flex-start;flex-direction:column;box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);min-width:",f.dP,";","")},(0,c.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:M},"Filter by"),(0,c.tZ)("div",{css:(0,c.iv)("margin-top:var(--spectrum-global-dimension-size-100);margin-bottom:var(--spectrum-global-dimension-size-1200);display:flex;flex-direction:column;overflow:auto;@media screen and (max-width: ",f.q9,"){margin-bottom:0;}","")},we.length>0?we.map((function(e,t){var n=Object.keys(e)[0];return(0,c.tZ)(v.X,{key:t,isSelected:Y.includes(n),value:n,onChange:function(e){$(e?function(e){return[].concat((0,r.Z)(e),[n])}:Y.filter((function(e){return e!==n})))}},(0,c.tZ)("span",null,n),(0,c.tZ)("em",null," (",e[n],")"))})):(0,c.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeS"},"No filter options available"))),(0,c.tZ)("div",{css:L},(0,c.tZ)(l.mQ,{onFontsReady:function(){_e()}},n.map((function(e,t){var n=Object.keys(e)[0],r=e[n];return(0,c.tZ)(l.ck,{key:t,ref:function(t){e.tabRef={current:t}},selected:J===n,tabIndex:0,onClick:(0,i.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:$([]),G(n);case 2:case"end":return e.stop()}}),e)})))},(0,c.tZ)(l.__,null,r))})),(0,c.tZ)(l.NN,{ref:je})),ve.length>0?(0,c.tZ)("div",{ref:de,css:(0,c.iv)("height:calc(\n                      100% - var(--spectrum-global-dimension-size-800) - var(--spectrum-global-dimension-size-800) -\n                        var(--spectrum-global-dimension-size-200)\n                    );overflow:auto;@media screen and (max-width: ",f.q9,"){height:auto;overflow:inherit;}","")},ve.map((function(e){var t=""+location.origin+e.url;return(0,c.tZ)("div",{css:H},(0,c.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeM",css:_},(0,c.tZ)(u.P,{to:t},(0,c.tZ)("span",{dangerouslySetInnerHTML:{__html:w(e._highlightResult.title.value)}}))),(0,c.tZ)("div",{css:q},(0,c.tZ)(u.P,{variant:"secondary",to:t},t)),(0,c.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeS",css:N,dangerouslySetInnerHTML:{__html:w(e._highlightResult.content.value)}}))}))):(0,c.tZ)("div",{css:(0,c.iv)("position:absolute;top:var(--spectrum-global-dimension-size-3600);height:calc(2 * var(--spectrum-global-dimension-size-1250));margin-top:calc(-1 * var(--spectrum-global-dimension-size-1250));text-align:center;right:0;left:0;padding:0 var(--spectrum-global-dimension-size-200);@media screen and (max-width: ",f.q9,"){position:static;margin:var(--spectrum-global-dimension-size-800) 0;height:auto;}","")},(0,c.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 104 90",css:R},(0,c.tZ)("g",null,(0,c.tZ)("g",null,(0,c.tZ)("path",{d:"M37.5,69A24.54,24.54,0,1,0,17,57.92l0,0L1.46,73.52A5,5,0,0,0,5,82.05H5a5,5,0,0,0,3.54-1.47L24.06,65l0,0A24.33,24.33,0,0,0,37.5,69Zm0-46A21.5,21.5,0,1,1,16,44.5,21.52,21.52,0,0,1,37.5,23ZM6.41,78.46A2,2,0,0,1,5,79.05H5a2,2,0,0,1-1.42-3.42L18.83,60.34a25.21,25.21,0,0,0,2.83,2.83Z"}),(0,c.tZ)("path",{d:"M28.67,53.33a1.51,1.51,0,0,0,1.06.44,1.49,1.49,0,0,0,1.06-.44l6.71-6.71,6.71,6.71a1.5,1.5,0,0,0,2.12,0,1.49,1.49,0,0,0,0-2.12L39.62,44.5l6.71-6.71a1.49,1.49,0,0,0,0-2.12,1.51,1.51,0,0,0-2.12,0L37.5,42.38l-6.71-6.71a1.5,1.5,0,0,0-2.12,2.12l6.71,6.71-6.71,6.71A1.51,1.51,0,0,0,28.67,53.33Z"}),(0,c.tZ)("path",{d:"M102.5,31a1.5,1.5,0,0,0-1.5,1.5V86.17a.83.83,0,0,1-.83.83H38.83a.83.83,0,0,1-.83-.83V73.5a1.5,1.5,0,0,0-3,0V86.17A3.84,3.84,0,0,0,38.83,90h61.34A3.84,3.84,0,0,0,104,86.17V32.5A1.5,1.5,0,0,0,102.5,31Z"}),(0,c.tZ)("path",{d:"M37.5,17A1.5,1.5,0,0,0,39,15.5V3.83A.83.83,0,0,1,39.83,3H75V26.5A1.5,1.5,0,0,0,76.5,28h25.55a1.5,1.5,0,0,0,1-2.57L77.55.43a1.43,1.43,0,0,0-.49-.32A1.41,1.41,0,0,0,76.52,0H39.83A3.84,3.84,0,0,0,36,3.83V15.5A1.5,1.5,0,0,0,37.5,17ZM78,5.07,98.37,25H78Z"})))),(0,c.tZ)("h3",{className:"spectrum-Heading spectrum-Heading--light spectrum-Heading--sizeM"},"Sorry, we couldn't find any results for ",(0,c.tZ)("strong",null,U)),(0,c.tZ)("p",{className:"spectrum-Body spectrum-Body--S",css:j},"Make sure all the words are spelled correctly or try to refine your keywords."))))),!te&&(0,c.tZ)("div",{css:E}))}}}]);
//# sourceMappingURL=df5e1dac4d1cb57c5c0a.js.map