var A=Object.defineProperty;var k=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var y=(a,o,e)=>o in a?A(a,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[o]=e,x=(a,o)=>{for(var e in o||(o={}))F.call(o,e)&&y(a,e,o[e]);if(k)for(var e of k(o))I.call(o,e)&&y(a,e,o[e]);return a};var E=(a,o,e)=>new Promise((l,n)=>{var p=r=>{try{_(e.next(r))}catch(t){n(t)}},u=r=>{try{_(e.throw(r))}catch(t){n(t)}},_=r=>r.done?l(r.value):Promise.resolve(r.value).then(p,u);_((e=e.apply(a,o)).next())});import{d as M,cd as N,M as O,c as S,o as b,a as C,b as i,w as c,u as g,F as P,b6 as z,j as v,n as D,f as m,t as w,N as L}from"./url.8f5ec20c.js";import{g as V}from"./i18n.2d8b30eb.js";import{b as $}from"./main.d8c6ef59.js";import{E as j}from"./windi.bf752d69.js";import{a as T,b as G}from"./index.4b74c511.js";import{E as q}from"./index.593106e3.js";import{_ as H,a as J}from"./kmail-button.054b3687.js";import{_ as K}from"./site-button.14889ef7.js";import{E as Q}from"./index.084dafc3.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";import"./replace-all.dd6016f2.js";import"./aria.75ec5909.js";import"./index.c70f33ac.js";import"./index.ec785feb.js";import"./focus-trap.3f074800.js";import"./isNil.98bb3b88.js";import"./event.53b2ad83.js";import"./index.a595fe6d.js";import"./index.96970839.js";import"./error.7e8331f1.js";import"./light-switch.0d127fee.js";import"./dark.7c26a0d3.js";import"./plugin-vue_export-helper.41ffa612.js";import"./index.b3e4ff8e.js";import"./index.35ae15db.js";import"./dropdown.d7a15792.js";import"./index.0535d5fe.js";import"./refs.d2253dd4.js";import"./avatar.3578cce6.js";import"./logo-transparent.1566007e.js";import"./index.37979027.js";import"./email.2058242d.js";import"./index.3d9a337f.js";const U={class:"w-202px h-full relative z-10 dark:bg-[#252526] pb-[56px]"},W={class:"dark:text-999"},X=M({setup(a){const o=$(),e=N(),l=O(),{t:n}=V(),p=S(()=>{var s;return((s=l.name)!=null?s:"").toString()}),u=S(()=>{var s,d,h;const t=[{label:n("mail.addresses"),name:"addresses",icon:"icon-a-Emailaddress"},{label:n("common.contacts"),name:"contacts",icon:"icon-a-Contactperson"},{label:n("common.securityReport"),name:"security-report",icon:"icon-dmarcreport"},{label:"IMAP",name:"imap-setting",icon:"icon-imap"},{label:n("common.mailMigration"),name:"mail-migration",icon:"icon-Datacenter"}];return(s=o.currentOrg)!=null&&s.isAdmin&&(t.push({label:n("common.mailModule"),name:"mail-module",icon:"icon-a-Expansionmodule"}),t.push({label:n("common.inboxLogo"),name:"inbox-logo",icon:"icon-trademark1"})),((d=o.currentOrg)==null?void 0:d.isAdmin)&&!((h=o.header)!=null&&h.isOnlineServer)&&t.push({label:"SMTP",name:"smtp-setting",icon:"icon-imap"}),t}),_=t=>E(this,null,function*(){yield e.push({name:t.name,query:x({},e.currentRoute.value.query)})}),r=()=>{var t,s;(t=l.query.oldFolder)!=null&&t.toString()?e.push({name:(s=l.query.oldFolder)==null?void 0:s.toString(),query:x({},e.currentRoute.value.query)}):e.push({name:"inbox"})};return(t,s)=>{const d=j,h=T,B=G,R=q;return b(),C("aside",U,[i(R,null,{default:c(()=>[i(B,{"default-active":g(p),class:"!dark:text-blue","unique-opened":!0},{default:c(()=>[(b(!0),C(P,null,z(g(u),f=>(b(),v(h,{key:f.name,index:f.name,onClick:oe=>_({name:f.name})},{default:c(()=>[i(d,{class:D(["iconfont",f.icon])},null,8,["class"]),m("span",W,w(f.label),1)]),_:2},1032,["index","onClick"]))),128))]),_:1},8,["default-active"])]),_:1}),m("div",{class:"absolute bottom-0 left-0 right-0 h-14 bg-fff flex items-center pl-5 space-x-8 hover:bg-blue/20 cursor-pointer dark:bg-[#252526] text-444 dark:text-999",onClick:r},[i(d,{class:"iconfont icon-fanhui1"}),m("span",null,w(g(n)("common.back")),1)])])}}}),Y={class:"h-full flex flex-col"},Z={class:"flex-1 overflow-hidden relative"},ee={class:"absolute inset-0 left-202px bg-[#f3f5f5] dark:bg-[#121212]"},Pe=M({setup(a){const o=$();return(e,l)=>{const n=L("router-view"),p=q,u=Q;return b(),v(u,{locale:g(o).locale},{default:c(()=>[m("div",Y,[i(g(J),{class:"pl-40px"},{left:c(()=>[i(K),i(H)]),right:c(()=>[]),_:1}),m("div",Z,[i(X),m("div",ee,[i(p,{id:"main-scrollbar",class:"w-full"},{default:c(()=>[(b(),v(n,{key:e.$route.name}))]),_:1})])])])]),_:1},8,["locale"])}}});export{Pe as default};