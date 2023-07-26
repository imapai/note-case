import{_ as w,r as R,o as a,c as u,b as L,f as S,i as P,j as h,F as I,k as A,l as y,m as pe,a as b,t as T,n as W,p as J,q as C,w as B,s as de,h as p,v as $,d as j,x as Y,y as Be,z as Ne,A as He,B as Q,C as Z,D as q,E as he,G as me,H as E,u as fe,g as H,T as be,I as z,J as ge,K as G,L as X,M as Ie,N as Me,O as ee,P as ke,Q as $e,e as De,R as te,S as Pe,U as K,V as ae,W as Ee,X as Re,Y as Ae,Z as Oe,$ as Fe,a0 as ze,a1 as We}from"./app.fdaa301a.js";const Ue={},Ve={class:"theme-default-content"};function Ke(v,t){const e=R("Content");return a(),u("div",Ve,[L(e)])}var je=w(Ue,[["render",Ke],["__file","HomeContent.vue"]]);const qe={key:0,class:"features"},Ge=S({__name:"HomeFeatures",setup(v){const t=P(),e=h(()=>pe(t.value.features)?t.value.features:[]);return(l,n)=>e.value.length?(a(),u("div",qe,[(a(!0),u(I,null,A(e.value,d=>(a(),u("div",{key:d.title,class:"feature"},[b("h2",null,T(d.title),1),b("p",null,T(d.details),1)]))),128))])):y("",!0)}});var Xe=w(Ge,[["__file","HomeFeatures.vue"]]);const Ye=["innerHTML"],Je=["textContent"],Qe=S({__name:"HomeFooter",setup(v){const t=P(),e=h(()=>t.value.footer),l=h(()=>t.value.footerHtml);return(n,d)=>e.value?(a(),u(I,{key:0},[l.value?(a(),u("div",{key:0,class:"footer",innerHTML:e.value},null,8,Ye)):(a(),u("div",{key:1,class:"footer",textContent:T(e.value)},null,8,Je))],64)):y("",!0)}});var Ze=w(Qe,[["__file","HomeFooter.vue"]]);const et=["href","rel","target","aria-label"],tt=S({inheritAttrs:!1}),at=S({...tt,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(v){const t=v,e=W(),l=He(),{item:n}=J(t),d=h(()=>Y(n.value.link)),f=h(()=>Be(n.value.link)||Ne(n.value.link)),i=h(()=>{if(!f.value){if(n.value.target)return n.value.target;if(d.value)return"_blank"}}),o=h(()=>i.value==="_blank"),r=h(()=>!d.value&&!f.value&&!o.value),s=h(()=>{if(!f.value){if(n.value.rel)return n.value.rel;if(o.value)return"noopener noreferrer"}}),_=h(()=>n.value.ariaLabel||n.value.text),c=h(()=>{const k=Object.keys(l.value.locales);return k.length?!k.some(m=>m===n.value.link):n.value.link!=="/"}),g=h(()=>c.value?e.path.startsWith(n.value.link):!1),x=h(()=>r.value?n.value.activeMatch?new RegExp(n.value.activeMatch).test(e.path):g.value:!1);return(k,m)=>{const N=R("RouterLink"),M=R("AutoLinkExternalIcon");return r.value?(a(),C(N,de({key:0,class:{"router-link-active":x.value},to:p(n).link,"aria-label":_.value},k.$attrs),{default:B(()=>[$(k.$slots,"before"),j(" "+T(p(n).text)+" ",1),$(k.$slots,"after")]),_:3},16,["class","to","aria-label"])):(a(),u("a",de({key:1,class:"external-link",href:p(n).link,rel:s.value,target:i.value,"aria-label":_.value},k.$attrs),[$(k.$slots,"before"),j(" "+T(p(n).text)+" ",1),o.value?(a(),C(M,{key:0})):y("",!0),$(k.$slots,"after")],16,et))}}});var D=w(at,[["__file","AutoLink.vue"]]);const nt={class:"hero"},ot={key:0,id:"main-title"},rt={key:1,class:"description"},st={key:2,class:"actions"},lt=S({__name:"HomeHero",setup(v){const t=P(),e=Q(),l=Z(),n=h(()=>l.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),d=h(()=>t.value.heroText===null?null:t.value.heroText||e.value.title||"Hello"),f=h(()=>t.value.heroAlt||d.value||"hero"),i=h(()=>t.value.tagline===null?null:t.value.tagline||e.value.description||"Welcome to your VuePress site"),o=h(()=>pe(t.value.actions)?t.value.actions.map(({text:s,link:_,type:c="primary"})=>({text:s,link:_,type:c})):[]),r=()=>{if(!n.value)return null;const s=q("img",{src:he(n.value),alt:f.value});return t.value.heroImageDark===void 0?s:q(me,()=>s)};return(s,_)=>(a(),u("header",nt,[L(r),d.value?(a(),u("h1",ot,T(d.value),1)):y("",!0),i.value?(a(),u("p",rt,T(i.value),1)):y("",!0),o.value.length?(a(),u("p",st,[(a(!0),u(I,null,A(o.value,c=>(a(),C(D,{key:c.text,class:E(["action-button",[c.type]]),item:c},null,8,["class","item"]))),128))])):y("",!0)]))}});var ut=w(lt,[["__file","HomeHero.vue"]]);const it={class:"home"},ct=S({__name:"Home",setup(v){return(t,e)=>(a(),u("main",it,[L(ut),L(Xe),L(je),L(Ze)]))}});var vt=w(ct,[["__file","Home.vue"]]);const dt=S({__name:"NavbarBrand",setup(v){const t=fe(),e=Q(),l=H(),n=Z(),d=h(()=>l.value.home||t.value),f=h(()=>e.value.title),i=h(()=>n.value&&l.value.logoDark!==void 0?l.value.logoDark:l.value.logo),o=()=>{if(!i.value)return null;const r=q("img",{class:"logo",src:he(i.value),alt:f.value});return l.value.logoDark===void 0?r:q(me,()=>r)};return(r,s)=>{const _=R("RouterLink");return a(),C(_,{to:d.value},{default:B(()=>[L(o),f.value?(a(),u("span",{key:0,class:E(["site-name",{"can-hide":i.value}])},T(f.value),3)):y("",!0)]),_:1},8,["to"])}}});var _t=w(dt,[["__file","NavbarBrand.vue"]]);const pt=S({__name:"DropdownTransition",setup(v){const t=l=>{l.style.height=l.scrollHeight+"px"},e=l=>{l.style.height=""};return(l,n)=>(a(),C(be,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:B(()=>[$(l.$slots,"default")]),_:3}))}});var Le=w(pt,[["__file","DropdownTransition.vue"]]);const ht=["aria-label"],mt={class:"title"},ft=b("span",{class:"arrow down"},null,-1),bt=["aria-label"],gt={class:"title"},kt={class:"navbar-dropdown"},$t={class:"navbar-dropdown-subtitle"},Lt={key:1},yt={class:"navbar-dropdown-subitem-wrapper"},wt=S({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(v){const t=v,{item:e}=J(t),l=h(()=>e.value.ariaLabel||e.value.text),n=z(!1),d=W();ge(()=>d.path,()=>{n.value=!1});const f=o=>{o.detail===0?n.value=!n.value:n.value=!1},i=(o,r)=>r[r.length-1]===o;return(o,r)=>(a(),u("div",{class:E(["navbar-dropdown-wrapper",{open:n.value}])},[b("button",{class:"navbar-dropdown-title",type:"button","aria-label":l.value,onClick:f},[b("span",mt,T(p(e).text),1),ft],8,ht),b("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":l.value,onClick:r[0]||(r[0]=s=>n.value=!n.value)},[b("span",gt,T(p(e).text),1),b("span",{class:E(["arrow",n.value?"down":"right"])},null,2)],8,bt),L(Le,null,{default:B(()=>[G(b("ul",kt,[(a(!0),u(I,null,A(p(e).children,s=>(a(),u("li",{key:s.text,class:"navbar-dropdown-item"},[s.children?(a(),u(I,{key:0},[b("h4",$t,[s.link?(a(),C(D,{key:0,item:s,onFocusout:_=>i(s,p(e).children)&&s.children.length===0&&(n.value=!1)},null,8,["item","onFocusout"])):(a(),u("span",Lt,T(s.text),1))]),b("ul",yt,[(a(!0),u(I,null,A(s.children,_=>(a(),u("li",{key:_.link,class:"navbar-dropdown-subitem"},[L(D,{item:_,onFocusout:c=>i(_,s.children)&&i(s,p(e).children)&&(n.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(a(),C(D,{key:1,item:s,onFocusout:_=>i(s,p(e).children)&&(n.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[X,n.value]])]),_:1})],2))}});var St=w(wt,[["__file","NavbarDropdown.vue"]]);const _e=v=>decodeURI(v).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Ct=(v,t)=>{if(t.hash===v)return!0;const e=_e(t.path),l=_e(v);return e===l},ye=(v,t)=>v.link&&Ct(v.link,t)?!0:v.children?v.children.some(e=>ye(e,t)):!1,we=v=>!Y(v)||/github\.com/.test(v)?"GitHub":/bitbucket\.org/.test(v)?"Bitbucket":/gitlab\.com/.test(v)?"GitLab":/gitee\.com/.test(v)?"Gitee":null,Tt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},xt=({docsRepo:v,editLinkPattern:t})=>{if(t)return t;const e=we(v);return e!==null?Tt[e]:null},Bt=({docsRepo:v,docsBranch:t,docsDir:e,filePathRelative:l,editLinkPattern:n})=>{if(!l)return null;const d=xt({docsRepo:v,editLinkPattern:n});return d?d.replace(/:repo/,Y(v)?v:`https://github.com/${v}`).replace(/:branch/,t).replace(/:path/,Ie(`${Me(e)}/${l}`)):null},Nt={key:0,class:"navbar-items"},Ht=S({__name:"NavbarItems",setup(v){const t=()=>{const r=ee(),s=fe(),_=Q(),c=H();return h(()=>{var M,O,F;const g=Object.keys(_.value.locales);if(g.length<2)return[];const x=r.currentRoute.value.path,k=r.currentRoute.value.fullPath,m=r.currentRoute.value.hash;return[{text:(M=c.value.selectLanguageText)!=null?M:"unknown language",ariaLabel:(F=(O=c.value.selectLanguageAriaLabel)!=null?O:c.value.selectLanguageText)!=null?F:"unknown language",children:g.map(U=>{var re,se,le,ue,ie,ce;const Ce=(se=(re=_.value.locales)==null?void 0:re[U])!=null?se:{},ne=(ue=(le=c.value.locales)==null?void 0:le[U])!=null?ue:{},oe=`${Ce.lang}`,Te=(ie=ne.selectLanguageName)!=null?ie:oe;let V;if(oe===_.value.lang)V=k;else{const ve=x.replace(s.value,U);r.getRoutes().some(xe=>xe.path===ve)?V=`${ve}${m}`:V=(ce=ne.home)!=null?ce:U}return{text:Te,link:V}})}]})},e=()=>{const r=H(),s=h(()=>r.value.repo),_=h(()=>s.value?we(s.value):null),c=h(()=>s.value&&!Y(s.value)?`https://github.com/${s.value}`:s.value),g=h(()=>c.value?r.value.repoLabel?r.value.repoLabel:_.value===null?"Source":_.value:null);return h(()=>!c.value||!g.value?[]:[{text:g.value,link:c.value}])},l=r=>ke(r)?$e(r):r.children?{...r,children:r.children.map(l)}:r,d=(()=>{const r=H();return h(()=>(r.value.navbar||[]).map(l))})(),f=t(),i=e(),o=h(()=>[...d.value,...f.value,...i.value]);return(r,s)=>o.value.length?(a(),u("nav",Nt,[(a(!0),u(I,null,A(o.value,_=>(a(),u("div",{key:_.text,class:"navbar-item"},[_.children?(a(),C(St,{key:0,item:_},null,8,["item"])):(a(),C(D,{key:1,item:_},null,8,["item"]))]))),128))])):y("",!0)}});var Se=w(Ht,[["__file","NavbarItems.vue"]]);const It=["title"],Mt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Dt=De('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Pt=[Dt],Et={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Rt=b("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),At=[Rt],Ot=S({__name:"ToggleColorModeButton",setup(v){const t=H(),e=Z(),l=()=>{e.value=!e.value};return(n,d)=>(a(),u("button",{class:"toggle-color-mode-button",title:p(t).toggleColorMode,onClick:l},[G((a(),u("svg",Mt,Pt,512)),[[X,!p(e)]]),G((a(),u("svg",Et,At,512)),[[X,p(e)]])],8,It))}});var Ft=w(Ot,[["__file","ToggleColorModeButton.vue"]]);const zt=["title"],Wt=b("div",{class:"icon","aria-hidden":"true"},[b("span"),b("span"),b("span")],-1),Ut=[Wt],Vt=S({__name:"ToggleSidebarButton",emits:["toggle"],setup(v){const t=H();return(e,l)=>(a(),u("div",{class:"toggle-sidebar-button",title:p(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:l[0]||(l[0]=n=>e.$emit("toggle"))},Ut,8,zt))}});var Kt=w(Vt,[["__file","ToggleSidebarButton.vue"]]);const jt=S({__name:"Navbar",emits:["toggle-sidebar"],setup(v){const t=H(),e=z(null),l=z(null),n=z(0),d=h(()=>n.value?{maxWidth:n.value+"px"}:{});te(()=>{const o=f(e.value,"paddingLeft")+f(e.value,"paddingRight"),r=()=>{var s;window.innerWidth<=719?n.value=0:n.value=e.value.offsetWidth-o-(((s=l.value)==null?void 0:s.offsetWidth)||0)};r(),window.addEventListener("resize",r,!1),window.addEventListener("orientationchange",r,!1)});function f(i,o){var _,c,g;const r=(g=(c=(_=i==null?void 0:i.ownerDocument)==null?void 0:_.defaultView)==null?void 0:c.getComputedStyle(i,null))==null?void 0:g[o],s=Number.parseInt(r,10);return Number.isNaN(s)?0:s}return(i,o)=>{const r=R("NavbarSearch");return a(),u("header",{ref_key:"navbar",ref:e,class:"navbar"},[L(Kt,{onToggle:o[0]||(o[0]=s=>i.$emit("toggle-sidebar"))}),b("span",{ref_key:"navbarBrand",ref:l},[L(_t)],512),b("div",{class:"navbar-items-wrapper",style:Pe(d.value)},[$(i.$slots,"before"),L(Se,{class:"can-hide"}),$(i.$slots,"after"),p(t).colorModeSwitch?(a(),C(Ft,{key:0})):y("",!0),L(r)],4)],512)}}});var qt=w(jt,[["__file","Navbar.vue"]]);const Gt={class:"page-meta"},Xt={key:0,class:"meta-item edit-link"},Yt={key:1,class:"meta-item last-updated"},Jt={class:"meta-item-label"},Qt={class:"meta-item-info"},Zt={key:2,class:"meta-item contributors"},ea={class:"meta-item-label"},ta={class:"meta-item-info"},aa=["title"],na=S({__name:"PageMeta",setup(v){const t=()=>{const o=H(),r=K(),s=P();return h(()=>{var M,O,F;if(!((O=(M=s.value.editLink)!=null?M:o.value.editLink)!=null?O:!0))return null;const{repo:c,docsRepo:g=c,docsBranch:x="main",docsDir:k="",editLinkText:m}=o.value;if(!g)return null;const N=Bt({docsRepo:g,docsBranch:x,docsDir:k,filePathRelative:r.value.filePathRelative,editLinkPattern:(F=s.value.editLinkPattern)!=null?F:o.value.editLinkPattern});return N?{text:m!=null?m:"Edit this page",link:N}:null})},e=()=>{const o=H(),r=K(),s=P();return h(()=>{var g,x,k,m;return!((x=(g=s.value.lastUpdated)!=null?g:o.value.lastUpdated)!=null?x:!0)||!((k=r.value.git)!=null&&k.updatedTime)?null:new Date((m=r.value.git)==null?void 0:m.updatedTime).toLocaleString()})},l=()=>{const o=H(),r=K(),s=P();return h(()=>{var c,g,x,k;return((g=(c=s.value.contributors)!=null?c:o.value.contributors)!=null?g:!0)&&(k=(x=r.value.git)==null?void 0:x.contributors)!=null?k:null})},n=H(),d=t(),f=e(),i=l();return(o,r)=>{const s=R("ClientOnly");return a(),u("footer",Gt,[p(d)?(a(),u("div",Xt,[L(D,{class:"meta-item-label",item:p(d)},null,8,["item"])])):y("",!0),p(f)?(a(),u("div",Yt,[b("span",Jt,T(p(n).lastUpdatedText)+": ",1),L(s,null,{default:B(()=>[b("span",Qt,T(p(f)),1)]),_:1})])):y("",!0),p(i)&&p(i).length?(a(),u("div",Zt,[b("span",ea,T(p(n).contributorsText)+": ",1),b("span",ta,[(a(!0),u(I,null,A(p(i),(_,c)=>(a(),u(I,{key:c},[b("span",{class:"contributor",title:`email: ${_.email}`},T(_.name),9,aa),c!==p(i).length-1?(a(),u(I,{key:0},[j(", ")],64)):y("",!0)],64))),128))])])):y("",!0)])}}});var oa=w(na,[["__file","PageMeta.vue"]]);const ra={key:0,class:"page-nav"},sa={class:"inner"},la={key:0,class:"prev"},ua={key:1,class:"next"},ia=S({__name:"PageNav",setup(v){const t=o=>o===!1?null:ke(o)?$e(o):Ee(o)?o:!1,e=(o,r,s)=>{const _=o.findIndex(c=>c.link===r);if(_!==-1){const c=o[_+s];return c!=null&&c.link?c:null}for(const c of o)if(c.children){const g=e(c.children,r,s);if(g)return g}return null},l=P(),n=ae(),d=W(),f=h(()=>{const o=t(l.value.prev);return o!==!1?o:e(n.value,d.path,-1)}),i=h(()=>{const o=t(l.value.next);return o!==!1?o:e(n.value,d.path,1)});return(o,r)=>f.value||i.value?(a(),u("nav",ra,[b("p",sa,[f.value?(a(),u("span",la,[L(D,{item:f.value},null,8,["item"])])):y("",!0),i.value?(a(),u("span",ua,[L(D,{item:i.value},null,8,["item"])])):y("",!0)])])):y("",!0)}});var ca=w(ia,[["__file","PageNav.vue"]]);const va={class:"page"},da={class:"theme-default-content"},_a=S({__name:"Page",setup(v){return(t,e)=>{const l=R("Content");return a(),u("main",va,[$(t.$slots,"top"),b("div",da,[$(t.$slots,"content-top"),L(l),$(t.$slots,"content-bottom")]),L(oa),L(ca),$(t.$slots,"bottom")])}}});var pa=w(_a,[["__file","Page.vue"]]);const ha=["onKeydown"],ma={class:"sidebar-item-children"},fa=S({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(v){const t=v,{item:e,depth:l}=J(t),n=W(),d=ee(),f=h(()=>ye(e.value,n)),i=h(()=>({"sidebar-item":!0,"sidebar-heading":l.value===0,active:f.value,collapsible:e.value.collapsible})),[o,r]=Re(f.value),s=c=>{e.value.collapsible&&(c.preventDefault(),r())},_=d.afterEach(c=>{Ae(()=>{o.value=e.value.collapsible?f.value:!0})});return Oe(()=>{_()}),(c,g)=>{var k;const x=R("SidebarItem",!0);return a(),u("li",null,[p(e).link?(a(),C(D,{key:0,class:E(i.value),item:p(e)},null,8,["class","item"])):(a(),u("p",{key:1,tabindex:"0",class:E(i.value),onClick:s,onKeydown:Fe(s,["enter"])},[j(T(p(e).text)+" ",1),p(e).collapsible?(a(),u("span",{key:0,class:E(["arrow",p(o)?"down":"right"])},null,2)):y("",!0)],42,ha)),(k=p(e).children)!=null&&k.length?(a(),C(Le,{key:2},{default:B(()=>[G(b("ul",ma,[(a(!0),u(I,null,A(p(e).children,m=>(a(),C(x,{key:`${p(l)}${m.text}${m.link}`,item:m,depth:p(l)+1},null,8,["item","depth"]))),128))],512),[[X,p(o)]])]),_:1})):y("",!0)])}}});var ba=w(fa,[["__file","SidebarItem.vue"]]);const ga={key:0,class:"sidebar-items"},ka=S({__name:"SidebarItems",setup(v){const t=W(),e=ae();return te(()=>{ge(()=>t.hash,l=>{const n=document.querySelector(".sidebar");if(!n)return;const d=document.querySelector(`.sidebar a.sidebar-item[href="${t.path}${l}"]`);if(!d)return;const{top:f,height:i}=n.getBoundingClientRect(),{top:o,height:r}=d.getBoundingClientRect();o<f?d.scrollIntoView(!0):o+r>f+i&&d.scrollIntoView(!1)})}),(l,n)=>p(e).length?(a(),u("ul",ga,[(a(!0),u(I,null,A(p(e),d=>(a(),C(ba,{key:`${d.text}${d.link}`,item:d},null,8,["item"]))),128))])):y("",!0)}});var $a=w(ka,[["__file","SidebarItems.vue"]]);const La={class:"sidebar"},ya=S({__name:"Sidebar",setup(v){return(t,e)=>(a(),u("aside",La,[L(Se),$(t.$slots,"top"),L($a),$(t.$slots,"bottom")]))}});var wa=w(ya,[["__file","Sidebar.vue"]]);const Sa=S({__name:"Layout",setup(v){const t=K(),e=P(),l=H(),n=h(()=>e.value.navbar!==!1&&l.value.navbar!==!1),d=ae(),f=z(!1),i=m=>{f.value=typeof m=="boolean"?m:!f.value},o={x:0,y:0},r=m=>{o.x=m.changedTouches[0].clientX,o.y=m.changedTouches[0].clientY},s=m=>{const N=m.changedTouches[0].clientX-o.x,M=m.changedTouches[0].clientY-o.y;Math.abs(N)>Math.abs(M)&&Math.abs(N)>40&&(N>0&&o.x<=80?i(!0):i(!1))},_=h(()=>[{"no-navbar":!n.value,"no-sidebar":!d.value.length,"sidebar-open":f.value},e.value.pageClass]);let c;te(()=>{c=ee().afterEach(()=>{i(!1)})}),ze(()=>{c()});const g=We(),x=g.resolve,k=g.pending;return(m,N)=>(a(),u("div",{class:E(["theme-container",_.value]),onTouchstart:r,onTouchend:s},[$(m.$slots,"navbar",{},()=>[n.value?(a(),C(qt,{key:0,onToggleSidebar:i},{before:B(()=>[$(m.$slots,"navbar-before")]),after:B(()=>[$(m.$slots,"navbar-after")]),_:3})):y("",!0)]),b("div",{class:"sidebar-mask",onClick:N[0]||(N[0]=M=>i(!1))}),$(m.$slots,"sidebar",{},()=>[L(wa,null,{top:B(()=>[$(m.$slots,"sidebar-top")]),bottom:B(()=>[$(m.$slots,"sidebar-bottom")]),_:3})]),$(m.$slots,"page",{},()=>[p(e).home?(a(),C(vt,{key:0})):(a(),C(be,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:p(x),onBeforeLeave:p(k)},{default:B(()=>[(a(),C(pa,{key:p(t).path},{top:B(()=>[$(m.$slots,"page-top")]),"content-top":B(()=>[$(m.$slots,"page-content-top")]),"content-bottom":B(()=>[$(m.$slots,"page-content-bottom")]),bottom:B(()=>[$(m.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var Ta=w(Sa,[["__file","Layout.vue"]]);export{Ta as default};
