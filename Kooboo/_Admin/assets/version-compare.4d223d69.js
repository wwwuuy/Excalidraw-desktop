import{_ as h}from"./diff.4c6f6b54.js";import{l as v}from"./index.68d24a68.js";import{d as p,o as i,j as u,w as x,f as t,b3 as b,b1 as k,g as I,c as w,x as m,a as y,t as a,u as f,aH as _,l as S,k as $}from"./url.8f5ec20c.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import{E as j}from"./index.593106e3.js";import{g as B}from"./i18n.2d8b30eb.js";import"./userWorker.b3a6730b.js";import"./editor.main.d2800f63.js";import"./preload-helper.13a99eb0.js";import"./guid.c1a40312.js";import"./config.589cc0cd.js";import"./main.d8c6ef59.js";import"./index.50c16ae5.js";import"./windi.bf752d69.js";import"./replace-all.dd6016f2.js";import"./dark.7c26a0d3.js";import"./style.ad574a57.js";import"./toNumber.6efebd6a.js";import"./_baseIsEqual.2f38f7c3.js";import"./error.7e8331f1.js";var g=(e=>(e[e.String=0]="String",e[e.Image=1]="Image",e))(g||{});const E=e=>(b("data-v-2e508864"),e=e(),k(),e),N={class:"image-compare flex justify-center space-x-16 p-32 bg-[#fff] dark:bg-[#1e1e1e] overflow-auto h-full"},H={class:"flex justify-center flex-1"},Q=["src","alt"],q=E(()=>t("div",{class:"w-1px bg-[#ebeef5] dark:bg-[#555] h-auto"},null,-1)),z={class:"flex justify-center flex-1"},A=["src","alt"],D=p({props:{original:null,modified:null},setup(e){return(l,o)=>{const r=j;return i(),u(r,{"max-height":"100%","view-class":"h-full"},{default:x(()=>[t("div",N,[t("div",H,[t("img",{src:e.original,alt:e.original},null,8,Q)]),q,t("div",z,[t("img",{src:e.modified,alt:e.modified},null,8,A)])])]),_:1})}}});var F=C(D,[["__scopeId","data-v-2e508864"]]);const G={class:"flex flex-col h-full"},J={class:"py-16 px-32 bg-fff dark:bg-[#333] dark:text-[#fffa] border-b border-solid border-line dark:border-[#555] flex items-center"},K={class:"text-2l pr-16"},L={class:"flex-1 flex items-center overflow-hidden leading-7"},M={class:"truncate mr-2"},O=t("span",{class:"text-2l m-4"},":",-1),P={class:"flex-1 overflow-hidden"},_e=p({setup(e){const{t:l}=B(),o=I(),r=w(()=>{var s;return((s=o.value)==null?void 0:s.dataType)===g.Image?F:h});return v(m("left"),m("right")).then(s=>{o.value=s}),(s,R)=>{var c,n,d;return i(),y("div",G,[t("div",J,[t("span",K,a(f(l)("common.compare")),1),t("div",L,[t("span",M,a((c=o.value)==null?void 0:c.title1),1),t("span",null,[_(a((n=o.value)==null?void 0:n.id1)+" ",1),O,_(a((d=o.value)==null?void 0:d.id2),1)])])]),t("div",P,[o.value?(i(),u(S(f(r)),{key:0,class:"w-full",original:o.value.source1,modified:o.value.source2},null,8,["original","modified"])):$("",!0)])])}}});export{_e as default};