var x=Object.defineProperty,y=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var d=(r,o,t)=>o in r?x(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,_=(r,o)=>{for(var t in o||(o={}))I.call(o,t)&&d(r,t,o[t]);if(u)for(var t of u(o))E.call(o,t)&&d(r,t,o[t]);return r},g=(r,o)=>y(r,b(o));import{_ as $,a as B}from"./kmail-button.054b3687.js";import{_ as M,a as j,D}from"./code-conflict.b6c1d1fb.js";import{b as V,u as R,c as A,r as L,E as O,i as P}from"./main.d8c6ef59.js";import{d as T,M as q,g as z,i as G,b2 as v,N as H,o as p,j as c,w as l,u as e,cg as J,k as f,a as K,b as s,f as Q}from"./url.8f5ec20c.js";import{g as U}from"./i18n.2d8b30eb.js";import{o as W,a as X}from"./config.589cc0cd.js";import{u as Y}from"./replace-all.dd6016f2.js";import{E as Z}from"./index.084dafc3.js";import"./light-switch.0d127fee.js";import"./dark.7c26a0d3.js";import"./plugin-vue_export-helper.41ffa612.js";import"./windi.bf752d69.js";import"./index.b3e4ff8e.js";import"./index.35ae15db.js";import"./index.96970839.js";import"./index.a595fe6d.js";import"./index.ec785feb.js";import"./focus-trap.3f074800.js";import"./isNil.98bb3b88.js";import"./event.53b2ad83.js";import"./index.593106e3.js";import"./error.7e8331f1.js";import"./dropdown.d7a15792.js";import"./index.0535d5fe.js";import"./refs.d2253dd4.js";import"./avatar.3578cce6.js";import"./logo-transparent.1566007e.js";import"./index.37979027.js";import"./email.2058242d.js";import"./index.3d9a337f.js";import"./dev-mode.e5eea554.js";import"./guid.c1a40312.js";import"./index.8143a7f0.js";import"./classCompletion.a22e38a6.js";import"./userWorker.b3a6730b.js";import"./editor.main.d2800f63.js";import"./preload-helper.13a99eb0.js";import"./vuedraggable.umd.8a5464a3.js";import"./cloneDeep.b77ba92c.js";import"./_baseClone.29a8cd97.js";import"./_baseIsEqual.2f38f7c3.js";import"./page.c26fc024.js";import"./validate.348f94d6.js";import"./index.3dc39d21.js";import"./index.832f2769.js";import"./index.5af167df.js";import"./style.ad574a57.js";import"./toNumber.6efebd6a.js";import"./index.a141884f.js";import"./isEqual.c3e9e9f4.js";import"./index.80a4dc1a.js";import"./index.bb5499e2.js";import"./event.776e7e11.js";import"./index.bf8ed8c6.js";import"./scroll.54c27fbd.js";import"./aria.75ec5909.js";import"./validator.1bcd6e6a.js";import"./use-copy-text.67d6617b.js";import"./index.68d24a68.js";import"./toggleComment.5b29ca87.js";import"./use-save-tip.ee41ca28.js";import"./confirm.617d359f.js";import"./index.ed88cf90.js";import"./index.745dc8e0.js";import"./index.0a83bb10.js";import"./index.ab4ed870.js";import"./debounce.730e1961.js";import"./index.b68af8a1.js";import"./index.a4ff385c.js";import"./icon-button.e30c79ea.js";import"./index.e87fdc52.js";import"./index.b3d1cf25.js";import"./index.4c9af567.js";import"./index.3be79fd5.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./index.5f2a659f.js";import"./index.06224119.js";import"./index.14aabd47.js";import"./alert.8fe5500a.js";import"./index.b4ac73b5.js";/* empty css                                                               */import"./media-list.vue_vue_type_style_index_0_scoped_true_lang.a31db113.js";/* empty css                                                          */import"./file.52d8e05a.js";import"./use-date.28e9a8a3.js";import"./dayjs.min.35b12e7a.js";/* empty css                                                          *//* empty css                                                                 */import"./use-file-upload.1cd07d1f.js";/* empty css                                                         */import"./image-editor.vue_vue_type_style_index_0_scoped_true_lang.7c6ede25.js";import"./image-editor.404a4df5.js";import"./main.esm.f3ac04a5.js";import"./index.a330b59f.js";import"./index.c1ec4d8d.js";import"./diff.4c6f6b54.js";import"./index.50c16ae5.js";const oo={key:1,class:"h-full flex flex-col bg-[#f3f5f5] dark:bg-[#1e1e1e]"},to={class:"flex-1 overflow-hidden"},Kt=T({setup(r){const{t:o}=U(),t=V(),h=R(),S=A(),w=q(),a=z(!1),C=i=>{a.value=i};G(()=>w.query.SiteId,i=>{i&&a.value&&(O({message:o("common.siteChangingSuccess"),type:"success"}),a.value=!1)});const k=i=>{P(o("common.resourceNotFound",{url:i}))};return v(W,i=>{const m=Y({name:`${i.type.toLowerCase()}-edit`,query:g(_({},i.params),{id:i.id})}),{href:n}=L.resolve(m);J(n)}),v(X,k),(i,m)=>{const n=H("router-view"),F=Z;return p(),c(F,{locale:e(t).locale},{default:l(()=>[e(S).show?(p(),c(M,{key:0})):f("",!0),e(h).site?(p(),K("div",oo,[s(e(B),{class:"pl-40px"},{left:l(()=>[s(j,{onChange:m[0]||(m[0]=N=>C(N))}),s(D),s($)]),right:l(()=>[]),_:1}),Q("div",to,[e(t).header?(p(),c(n,{key:0})):f("",!0)])])):f("",!0)]),_:1},8,["locale"])}}});export{Kt as default};