import{S as ne}from"./sortable.esm.a99254e8.js";import{_ as oe}from"./icon-button.e30c79ea.js";import{g as se}from"./i18n.2d8b30eb.js";import{u as ie}from"./main.d8c6ef59.js";import{E as de}from"./index.14993118.js";import{E as ue}from"./index.4c9af567.js";import{b as re}from"./index.0a83bb10.js";import{E as ce,a as fe}from"./index.bc06171b.js";import{d as he,g as k,c as ve,i as R,h as ge,J as me,o as u,a as $,j as T,u as I,k as w,r as p,b as W,w as X,n as be,f as ye}from"./url.8f5ec20c.js";const ke={class:"shadow-s-10 rounded-normal overflow-hidden bg-fff dark:bg-[#303030]"},pe={key:0,class:"h-72px px-15px flex items-center bg-fff dark:bg-[#303030]","data-cy":"table-check-all"},Ce=ye("div",{class:"flex-1"},null,-1),xe={key:0,class:"flex items-center justify-center !w-full"},Se={key:1},De={key:1,class:"text-center"},Ke=he({props:{data:null,showCheck:{type:Boolean},customCheck:{type:Boolean},selectedData:null,isRadio:{type:Boolean},pagination:null,rowClassName:null,rowKey:null,draggable:{type:[Boolean,String]},hideDelete:{type:Boolean},hideHeader:{type:Boolean},sort:null,order:null,spanMethod:null,border:{type:Boolean},permission:null,maxHeight:null,isSpanArrTable:{type:Boolean},isMultiTreeTable:{type:Boolean}},emits:["delete","change","update:selectedData","rowClick","sorted","sort-change"],setup(t,{expose:Y,emit:C}){const s=t,a=k([]),Z=ie(),z=k(0);function L(e){e.forEach(l=>{l.children&&l.children.length?L(l.children):z.value+=1})}function _(){z.value=0}const A=ve(()=>{var e,l;if(s.isSpanArrTable){let n=new Map;return(e=s.data)==null?void 0:e.filter(d=>!n.has(d.id)&&n.set(d.id,1)).length}else return s.isMultiTreeTable?(_(),L(s.data),z.value):(l=s.data)==null?void 0:l.length}),{t:N}=se();function H(e){let l=[];return e.forEach(n=>{n.children?l.push(...H(n.children)):l.push(n)}),l}const ee=e=>{if(e){if(a.value=H(s.data).filter(l=>l.$DisabledSelect!==!0),s.isSpanArrTable){let l=new Map;a.value=a.value.filter(n=>!l.has(n.id)&&l.set(n.id,1))}}else a.value=[]},b=k(!1),x=k(!1),M=k(-1),j=({key:e})=>{b.value||e!=="Shift"||(b.value=!0)},V=({key:e})=>{!b.value||e!=="Shift"||(b.value=!1)},ae=e=>{var d,y,v,g,c,S,D,o,E,B,U,q,F,J,G;b.value||(M.value=(v=(y=(d=r.value)==null?void 0:d.store)==null?void 0:y.states)==null?void 0:v.data.value.findIndex(i=>i===e)),M.value===-1&&(M.value=(S=(c=(g=r.value)==null?void 0:g.store)==null?void 0:c.states)==null?void 0:S.data.value.findIndex(i=>i===e));let[l,n]=[M.value,(E=(o=(D=r.value)==null?void 0:D.store)==null?void 0:o.states)==null?void 0:E.data.value.findIndex(i=>i===e)];if(l>n&&([l,n]=[n,l]),b.value)if(x.value)for(let i=l;i<=n;i++){const m=(G=(J=(F=r.value)==null?void 0:F.store)==null?void 0:J.states)==null?void 0:G.data.value[i];a.value.find(f=>f===m)&&(a.value=a.value.filter(f=>f!==m),x.value=!0)}else{a.value.forEach(i=>{var f,O,Q;((Q=(O=(f=r.value)==null?void 0:f.store)==null?void 0:O.states)==null?void 0:Q.data.value.findIndex(K=>K===i))>n&&(a.value=a.value.filter(K=>K!==i))});for(let i=l;i<=n;i++){const m=(q=(U=(B=r.value)==null?void 0:B.store)==null?void 0:U.states)==null?void 0:q.data.value[i];!a.value.find(f=>f===m)&&!m.$DisabledSelect&&(a.value.push(m),x.value=!1)}}else a.value.find(i=>i===e)?(a.value=a.value.filter(i=>i!==e),x.value=!0):(a.value.push(e),x.value=!1)},te=e=>{C("rowClick",e)};R(()=>s.data,()=>a.value=[]),R(()=>s.selectedData,e=>{e&&(a.value=e)},{deep:!0}),R(a,e=>{C("update:selectedData",e)});const r=k();ge(()=>{s.draggable&&P(),document.addEventListener("keydown",j),document.addEventListener("keyup",V)});let h=null;me(()=>{h&&(h.destroy(),h=null),document.removeEventListener("keydown",j),document.removeEventListener("keyup",V)});function P(){var n;s.rowKey||console.error("draggable table should set row-key");const e=(n=r.value)==null?void 0:n.$el.querySelector(".el-table__body > tbody"),l={handle:".js-sortable",setData(d){d.setData("Text","")},onEnd(d){var v,g,c;const y=(v=s.data)==null?void 0:v.splice(d.oldIndex,1)[0];(g=s.data)==null||g.splice(d.newIndex,0,y),C("sorted",(c=s.data)!=null?c:[],d)}};typeof s.draggable=="string"&&(l.draggable=s.draggable),h&&(h.destroy(),h=null),h=ne.create(e,l)}const le=e=>{s.permission&&!Z.hasAccess(s.permission.feature,s.permission.action)||C("delete",e)};return R(()=>s.draggable,P),Y({table:r,selected:a}),(e,l)=>{var c,S,D;const n=ue,d=re,y=ce,v=fe,g=de;return u(),$("div",ke,[t.showCheck&&!t.hideHeader?(u(),$("div",pe,[t.isRadio?w("",!0):(u(),T(n,{key:0,label:I(N)("common.countSelected",{count:a.value.length}),"model-value":!!a.value.length&&a.value.length===I(A),indeterminate:!!a.value.length&&a.value.length!==I(A),size:"large",class:"w-30",onChange:ee},null,8,["label","model-value","indeterminate"])),p(e.$slots,"leftBar",{selected:a.value}),Ce,p(e.$slots,"bar",{selected:a.value}),a.value.length&&!Boolean(t.hideDelete)?(u(),T(oe,{key:1,permission:t.permission,class:"!text-orange",icon:"icon-delete",tip:I(N)("common.delete"),circle:"","data-cy":"delete",onClick:l[0]||(l[0]=o=>le(a.value))},null,8,["permission","tip"])):w("",!0),p(e.$slots,"rightBar",{selected:a.value})])):w("",!0),p(e.$slots,"tableTopContent"),W(v,{ref_key:"table",ref:r,data:t.data,class:be(((c=t.pagination)==null?void 0:c.pageCount)>1||((S=t.pagination)==null?void 0:S.totalCount)>((D=t.pagination)==null?void 0:D.pageSize)?"":"mb-40px"),"row-class-name":t.rowClassName,"row-key":t.rowKey,"default-sort":t.sort&&t.order?{prop:t.sort,order:t.order}:void 0,"span-method":t.spanMethod,border:!!t.border,"max-height":t.maxHeight,onRowClick:te,onSortChange:l[1]||(l[1]=o=>e.$emit("sort-change",o))},{default:X(()=>[t.showCheck&&!t.customCheck?(u(),T(y,{key:0,type:"selection",width:t.isRadio?40:50,"class-name":t.isRadio?"kradio":""},{default:X(({row:o})=>{var E;return[!o.children&&t.rowKey||!t.rowKey?(u(),$("div",xe,[t.isRadio?(u(),T(d,{key:1,disabled:o==null?void 0:o.$DisabledSelect,"model-value":(E=a.value[0])==null?void 0:E.id,label:o==null?void 0:o.id,"data-cy":"radio-label",onChange:()=>a.value[0]=o},null,8,["disabled","model-value","label","onChange"])):(u(),T(n,{key:0,size:"large",class:"el-table-checkbox",disabled:o==null?void 0:o.$DisabledSelect,"model-value":a.value.some(B=>B===o),"data-cy":"checkbox-label",onChange:B=>ae(o)},null,8,["disabled","model-value","onChange"]))])):(u(),$("div",Se))]}),_:1},8,["width","class-name"])):w("",!0),p(e.$slots,"default")]),_:3},8,["data","class","row-class-name","row-key","default-sort","span-method","border","max-height"]),p(e.$slots,"defaultData"),t.pagination?(u(),$("div",De,[W(g,{class:"py-8",layout:"prev, pager, next","hide-on-single-page":"","page-size":t.pagination.pageSize,"page-count":t.pagination.pageCount,"current-page":t.pagination.currentPage,total:t.pagination.totalCount,onCurrentChange:l[2]||(l[2]=o=>C("change",o))},null,8,["page-size","page-count","current-page","total"])])):w("",!0)])}}});export{Ke as _};