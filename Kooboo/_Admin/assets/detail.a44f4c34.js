var D=(A,y,g)=>new Promise((l,f)=>{var u=r=>{try{x(g.next(r))}catch(e){f(e)}},V=r=>{try{x(g.throw(r))}catch(e){f(e)}},x=r=>r.done?l(r.value):Promise.resolve(r.value).then(u,V);x((g=g.apply(A,y)).next())});import{_ as Z}from"./index.026f772c.js";import{_ as ee}from"./country.62830abf.js";import{d as U,g as I,o as p,j as c,w as o,b as t,u as a,k as _,f as b,aH as d,x as oe,cd as le,a as B,t as i,F as T,b6 as Q}from"./url.8f5ec20c.js";import{B as te}from"./breadcrumb.79da4f07.js";import{g as w}from"./i18n.2d8b30eb.js";import{u as ae}from"./replace-all.dd6016f2.js";import{b as ne,e as re,p as me,f as ie}from"./order.e22fd260.js";import{u as W}from"./use-date.28e9a8a3.js";import{b as ue}from"./product-variant.08b1c2e8.js";import{_ as J}from"./property-item.c5caa906.js";import{_ as P}from"./index.ed88cf90.js";import{E as M}from"./index.bb5499e2.js";import{E as z,a as q}from"./index.a141884f.js";import{E as j}from"./index.a4ff385c.js";import{b as se,a as de}from"./index.0a83bb10.js";import{_ as pe}from"./index.4eb69dec.js";import{u as ce}from"./useFields.e93629df.js";import{_ as S}from"./currency-amount.301371db.js";import{c as fe}from"./index.ab4ed870.js";import{E as _e,a as ve}from"./index.22cf2ea3.js";import{a as be}from"./index.bc06171b.js";import{E as ye}from"./index.96970839.js";import"./main.d8c6ef59.js";import"./index.50c16ae5.js";import"./windi.bf752d69.js";import"./preload-helper.13a99eb0.js";/* empty css                                                               */import"./plugin-vue_export-helper.21dcd24c.js";import"./plugin-vue_export-helper.41ffa612.js";import"./index.593106e3.js";import"./error.7e8331f1.js";import"./date.b676181c.js";import"./dayjs.min.35b12e7a.js";import"./guid.c1a40312.js";import"./event.776e7e11.js";import"./index.a595fe6d.js";import"./isNil.98bb3b88.js";import"./_baseClone.29a8cd97.js";import"./_baseIsEqual.2f38f7c3.js";import"./isEqual.c3e9e9f4.js";import"./index.bf8ed8c6.js";import"./scroll.54c27fbd.js";import"./index.0535d5fe.js";import"./focus-trap.3f074800.js";import"./refs.d2253dd4.js";import"./search-provider.e244950c.js";import"./toNumber.6efebd6a.js";import"./last.e7aa49db.js";import"./_baseIndexOf.4d7985be.js";import"./style.ad574a57.js";import"./_baseUniq.2c27addc.js";import"./use-operation-dialog.fbfa9343.js";import"./media-list.vue_vue_type_style_index_0_scoped_true_lang.a31db113.js";import"./file.52d8e05a.js";import"./validate.348f94d6.js";import"./index.37979027.js";import"./index.3dc39d21.js";import"./index.832f2769.js";import"./index.b3e4ff8e.js";import"./index.5af167df.js";import"./folder.8308bb9d.js";import"./relations-tag.b9c377a2.js";import"./icon-button.e30c79ea.js";import"./index.ec785feb.js";import"./event.53b2ad83.js";import"./index.e87fdc52.js";import"./page.c26fc024.js";import"./index.80a4dc1a.js";import"./aria.75ec5909.js";import"./validator.1bcd6e6a.js";import"./use-copy-text.67d6617b.js";import"./index.e483320a.js";import"./browser.8b21f9f4.js";import"./throttle.3f3ee457.js";import"./debounce.730e1961.js";import"./index.4c9af567.js";import"./index.14993118.js";import"./search-input.770da843.js";/* empty css                                                                 */import"./_createCompounder.2027fb34.js";import"./color-picker.2e8324a7.js";import"./index.9444b94a.js";import"./position.edbf0f94.js";import"./index.b68af8a1.js";import"./image-cover.a0855dc0.js";import"./media-dialog.c90392a5.js";import"./media.152ad1ab.js";import"./index.e56d78c4.js";/* empty css                                                          *//* empty css                                                          */import"./layout.4bc43a3b.js";import"./index.47676836.js";import"./utils.cd1dfe22.js";import"./confirm.617d359f.js";import"./logo-transparent.1566007e.js";import"./index.8bd72af8.js";import"./use-file-upload.1cd07d1f.js";import"./index.06224119.js";import"./index.14aabd47.js";import"./index.fcc918d5.js";import"./index.3f972c9e.js";import"./file.8273cb50.js";/* empty css                                                         */import"./image-editor.vue_vue_type_style_index_0_scoped_true_lang.7c6ede25.js";import"./string.75b81683.js";import"./useLabels.937424e3.js";import"./commerce.0424f5f4.js";import"./isEmpty.11c614d1.js";const ge=U({props:{modelValue:{type:Boolean},id:null},emits:["update:modelValue","reload"],setup(A,{emit:y}){const g=A,{t:l}=w(),f=I(!0),u=I({id:g.id,reason:""});function V(){return D(this,null,function*(){yield ne(u.value),y("reload"),f.value=!1})}return(x,r)=>{const e=M,E=z,$=q,h=P,v=j;return p(),c(v,{"model-value":f.value,width:"600px",title:a(l)("commerce.cancelOrder"),"close-on-click-modal":!1,onClosed:r[2]||(r[2]=s=>y("update:modelValue",!1))},{footer:o(()=>[t(h,{onConfirm:V,onCancel:r[1]||(r[1]=s=>f.value=!1)})]),default:o(()=>[u.value?(p(),c($,{key:0,"label-position":"top"},{default:o(()=>[t(E,{label:a(l)("common.cancelReason")},{default:o(()=>[t(e,{modelValue:u.value.reason,"onUpdate:modelValue":r[0]||(r[0]=s=>u.value.reason=s),type:"textarea"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})):_("",!0)]),_:1},8,["model-value","title"])}}}),Ve=U({props:{modelValue:{type:Boolean},id:null},emits:["update:modelValue","reload"],setup(A,{emit:y}){const g=A,{t:l}=w(),f=I(!0),u=I({id:g.id,shippingCarrier:"",trackingNumber:""});function V(){return D(this,null,function*(){yield re(u.value),y("reload"),f.value=!1})}return(x,r)=>{const e=M,E=z,$=q,h=P,v=j;return p(),c(v,{"model-value":f.value,width:"600px",title:a(l)("commerce.delivery"),"close-on-click-modal":!1,onClosed:r[3]||(r[3]=s=>y("update:modelValue",!1))},{footer:o(()=>[t(h,{onConfirm:V,onCancel:r[2]||(r[2]=s=>f.value=!1)})]),default:o(()=>[u.value?(p(),c($,{key:0,"label-position":"top"},{default:o(()=>[t(E,{label:a(l)("commerce.shippingCarrier")},{default:o(()=>[t(e,{modelValue:u.value.shippingCarrier,"onUpdate:modelValue":r[0]||(r[0]=s=>u.value.shippingCarrier=s)},null,8,["modelValue"])]),_:1},8,["label"]),t(E,{label:a(l)("commerce.trackingNumber")},{default:o(()=>[t(e,{modelValue:u.value.trackingNumber,"onUpdate:modelValue":r[1]||(r[1]=s=>u.value.trackingNumber=s)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})):_("",!0)]),_:1},8,["model-value","title"])}}}),ke={class:"space-y-8"},Ce=d("Credit card"),xe=d("Cash"),Ee={class:"grid grid-cols-2 gap-8"},$e=U({props:{modelValue:{type:Boolean},id:null},emits:["update:modelValue","reload"],setup(A,{emit:y}){const g=A,{t:l}=w(),f=I(!0),u=I({orderId:g.id,method:"CreditCard",cardNumber:"",expirationDate:"",cvc:"",nameOnCard:""});function V(){return D(this,null,function*(){yield me(u.value),y("reload"),f.value=!1})}return(x,r)=>{const e=se,E=de,$=M,h=z,v=q,s=P,k=j;return p(),c(k,{"model-value":f.value,width:"600px",title:a(l)("common.pay"),"close-on-click-modal":!1,onClosed:r[6]||(r[6]=m=>y("update:modelValue",!1))},{footer:o(()=>[t(s,{"confirm-label":a(l)("common.pay"),onConfirm:V,onCancel:r[5]||(r[5]=m=>f.value=!1)},null,8,["confirm-label"])]),default:o(()=>[b("div",ke,[t(E,{modelValue:u.value.method,"onUpdate:modelValue":r[0]||(r[0]=m=>u.value.method=m)},{default:o(()=>[t(e,{label:"CreditCard"},{default:o(()=>[Ce]),_:1}),t(e,{label:"Cash"},{default:o(()=>[xe]),_:1})]),_:1},8,["modelValue"]),u.value.method=="CreditCard"?(p(),c(v,{key:0,"label-position":"top"},{default:o(()=>[t(h,{label:a(l)("common.cardNumber")},{default:o(()=>[t($,{modelValue:u.value.cardNumber,"onUpdate:modelValue":r[1]||(r[1]=m=>u.value.cardNumber=m)},null,8,["modelValue"])]),_:1},8,["label"]),b("div",Ee,[t(h,{label:a(l)("common.expirationDate")},{default:o(()=>[t($,{modelValue:u.value.expirationDate,"onUpdate:modelValue":r[2]||(r[2]=m=>u.value.expirationDate=m)},null,8,["modelValue"])]),_:1},8,["label"]),t(h,{label:a(l)("common.cvc")},{default:o(()=>[t($,{modelValue:u.value.cvc,"onUpdate:modelValue":r[3]||(r[3]=m=>u.value.cvc=m)},null,8,["modelValue"])]),_:1},8,["label"])]),t(h,{label:a(l)("common.nameOnCard")},{default:o(()=>[t($,{modelValue:u.value.nameOnCard,"onUpdate:modelValue":r[4]||(r[4]=m=>u.value.nameOnCard=m)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})):_("",!0)])]),_:1},8,["model-value","title"])}}}),he={key:0,class:"px-24 pt-0 pb-84px space-y-12"},Ie={class:"bg-fff dark:bg-[#252526] px-24 py-16 rounded-normal"},Ae={key:0,class:"text-s inline-flex space-x-4 items-center"},Ne=["title"],Be={key:0},De={class:"text-s"},Fe={class:"inline-flex flex-wrap gap-4"},Oe={class:"text-s mt-12"},Ue={class:"flex gap-4"},we={class:"bg-fff dark:bg-[#252526] px-24 py-16 rounded-normal"},Re={class:"bg-fff dark:bg-[#252526] px-24 py-16 rounded-normal"},Te=b("div",null,null,-1),Se={class:"text-m text-999"},zl=U({setup(A){const{getColumns:y}=ce(),g=oe("id"),{t:l}=w(),f=le(),u=I(!1),V=I(!1),x=I(!1),r=y([{name:"featuredImage",prop:"image",attrs:{width:80,align:"center"}},{name:"title"},{name:"quantity",displayName:l("common.quantity"),attrs:{align:"center"}},{name:"price",displayName:l("common.price")},{name:"totalAmount",displayName:l("common.totalAmount")},{name:"discounts",displayName:l("common.discounts"),attrs:{align:"center"}}]),e=I();function E(){return D(this,null,function*(){e.value=yield ie(g)})}function $(v){var s,k,m,F,N;return`${v.clientInfo.os||""} ${((s=v.clientInfo)==null?void 0:s.platform)||""} ${((m=(k=v.clientInfo)==null?void 0:k.application)==null?void 0:m.name)||""} ${((N=(F=v.clientInfo)==null?void 0:F.application)==null?void 0:N.version)||""} ${(v==null?void 0:v.userAgent)||""}`}E();function h(){f.goBackOrTo(ae({name:"orders"}))}return(v,s)=>{const k=fe,m=_e,F=ee,N=ve,X=be,R=ye,Y=Z;return p(),B(T,null,[t(te,{class:"p-24","crumb-path":[{name:a(l)("common.orders"),route:{name:"orders"}},{name:a(l)("common.orderDetail")}]},null,8,["crumb-path"]),e.value?(p(),B("div",he,[b("div",Ie,[t(N,{title:a(l)("common.basicInfo")},{default:o(()=>[t(m,{label:a(l)("commerce.orderNumber")},{default:o(()=>[d(i(e.value.id)+" ",1),e.value.canceled?(p(),c(k,{key:0,type:"danger",size:"small"},{default:o(()=>[d(i(a(l)("commerce.canceled")),1)]),_:1})):_("",!0)]),_:1},8,["label"]),t(m,{label:a(l)("common.createTime")},{default:o(()=>[d(i(a(W)(e.value.createdAt)),1)]),_:1},8,["label"]),t(m,{label:a(l)("common.lastModified")},{default:o(()=>[d(i(a(W)(e.value.updatedAt)),1)]),_:1},8,["label"]),t(m,{label:a(l)("common.contact")},{default:o(()=>[d(i(e.value.customer.firstName)+" "+i(e.value.customer.lastName),1)]),_:1},8,["label"]),t(m,{label:a(l)("common.email")},{default:o(()=>[d(i(e.value.customer.email),1)]),_:1},8,["label"]),t(m,{label:a(l)("common.phone")},{default:o(()=>[d(i(e.value.customer.phone),1)]),_:1},8,["label"]),t(m,{label:"IP"},{default:o(()=>[d(i(e.value.ip),1)]),_:1}),t(m,{label:a(l)("common.country")},{default:o(()=>[t(F,{"name-or-code":e.value.country},null,8,["name-or-code"])]),_:1},8,["label"]),t(m,{label:a(l)("common.source")},{default:o(()=>[d(i(e.value.source),1)]),_:1},8,["label"]),t(m,{label:a(l)("common.clientInfo")},{default:o(()=>{var n,C;return[e.value.clientInfo?(p(),B("div",Ae,[(C=(n=e.value.clientInfo)==null?void 0:n.application)!=null&&C.isWebBrowser?(p(),c(k,{key:0,round:"",size:"small"},{default:o(()=>[d(i(a(l)("common.webBrowser")),1)]),_:1})):_("",!0),b("div",{class:"ellipsis",title:$(e.value)},i($(e.value)),9,Ne)])):_("",!0)]}),_:1},8,["label"]),t(m,{label:a(l)("common.paymentMethod")},{default:o(()=>[e.value.paid?(p(),c(k,{key:0,round:"",type:"success"},{default:o(()=>[d(i(e.value.paymentMethod),1)]),_:1})):(p(),c(k,{key:1,round:"",type:"info"},{default:o(()=>[d(i(a(l)("common.notPaid")),1)]),_:1}))]),_:1},8,["label"]),t(m,{label:a(l)("commerce.deliveryMethod")},{default:o(()=>[e.value.delivered?(p(),B("span",Be,i(e.value.shippingCarrier)+" "+i(e.value.trackingNumber),1)):(p(),c(k,{key:1,round:"",type:"info"},{default:o(()=>[d(i(a(l)("commerce.unshipped")),1)]),_:1}))]),_:1},8,["label"])]),_:1},8,["title"]),t(X,{data:e.value.lines,class:"el-table--gray"},{default:o(()=>[t(pe,{columns:a(r)},{title:o(({row:n})=>[b("div",null,[b("div",null,i(n.title),1),b("div",De,i(a(ue)(n.options)),1)])]),price:o(({row:n})=>[t(S,{currency:e.value.currency,original:n.originalPrice,amount:n.price},null,8,["currency","original","amount"])]),totalAmount:o(({row:n})=>[t(S,{currency:e.value.currency,amount:n.totalAmount},null,8,["currency","amount"])]),discounts:o(({row:n})=>[b("div",Fe,[(p(!0),B(T,null,Q(n.discountAllocations,(C,O)=>(p(),c(k,{key:O},{default:o(()=>[d(i(C.title),1)]),_:2},1024))),128))])]),_:1},8,["columns"])]),_:1},8,["data"]),b("div",Oe,[e.value.discountAllocations.length?(p(),c(J,{key:0,name:a(l)("common.discounts")},{default:o(()=>[b("div",Ue,[(p(!0),B(T,null,Q(e.value.discountAllocations,(n,C)=>(p(),c(k,{key:C},{default:o(()=>[d(i(n.title),1)]),_:2},1024))),128))])]),_:1},8,["name"])):_("",!0),t(J,{name:a(l)("common.totalAmount")},{default:o(()=>[t(S,{currency:e.value.currency,amount:e.value.totalAmount,original:e.value.originalAmount},null,8,["currency","amount","original"])]),_:1},8,["name"])])]),b("div",we,[t(N,{title:a(l)("commerce.shippingAddress")},{default:o(()=>[t(m,{label:a(l)("common.country")},{default:o(()=>{var n;return[d(i((n=e.value.shippingAddress)==null?void 0:n.country),1)]}),_:1},8,["label"]),t(m,{label:a(l)("common.contact")},{default:o(()=>{var n,C;return[d(i((n=e.value.shippingAddress)==null?void 0:n.firstName)+" "+i((C=e.value.shippingAddress)==null?void 0:C.lastName),1)]}),_:1},8,["label"]),t(m,{label:a(l)("common.phone")},{default:o(()=>{var n;return[d(i((n=e.value.shippingAddress)==null?void 0:n.phone),1)]}),_:1},8,["label"]),t(m,{label:a(l)("common.province")},{default:o(()=>{var n;return[d(i((n=e.value.shippingAddress)==null?void 0:n.province),1)]}),_:1},8,["label"]),t(m,{label:a(l)("common.city")},{default:o(()=>{var n;return[d(i((n=e.value.shippingAddress)==null?void 0:n.city),1)]}),_:1},8,["label"]),t(m,{label:a(l)("common.postalCode")},{default:o(()=>{var n;return[d(i((n=e.value.shippingAddress)==null?void 0:n.zip),1)]}),_:1},8,["label"]),t(m,{label:a(l)("common.address"),span:3},{default:o(()=>{var n;return[d(i((n=e.value.shippingAddress)==null?void 0:n.address1),1)]}),_:1},8,["label"])]),_:1},8,["title"])]),b("div",Re,[t(N,{title:a(l)("commerce.note")},{default:o(()=>[Te]),_:1},8,["title"]),b("div",Se,i(e.value.note),1)]),u.value?(p(),c(ge,{key:0,id:e.value.id,modelValue:u.value,"onUpdate:modelValue":s[0]||(s[0]=n=>u.value=n),onReload:E},null,8,["id","modelValue"])):_("",!0),V.value?(p(),c(Ve,{key:1,id:e.value.id,modelValue:V.value,"onUpdate:modelValue":s[1]||(s[1]=n=>V.value=n),onReload:E},null,8,["id","modelValue"])):_("",!0),x.value?(p(),c($e,{key:2,id:e.value.id,modelValue:x.value,"onUpdate:modelValue":s[2]||(s[2]=n=>x.value=n),onReload:E},null,8,["id","modelValue"])):_("",!0)])):_("",!0),e.value?(p(),c(Y,{key:1,permission:{feature:"orders",action:"edit"},back:"","hidden-confirm":"",onCancel:h},{"extra-buttons":o(()=>{var n,C,O,G,H,K;return[!((n=e.value)!=null&&n.paid)&&!((C=e.value)!=null&&C.canceled)?(p(),c(R,{key:0,round:"",type:"primary",onClick:s[3]||(s[3]=L=>x.value=!0)},{default:o(()=>[d(i(a(l)("common.pay")),1)]),_:1})):_("",!0),((O=e.value)==null?void 0:O.paid)&&!((G=e.value)!=null&&G.canceled)&&!((H=e.value)!=null&&H.delivered)?(p(),c(R,{key:1,round:"",type:"primary",onClick:s[4]||(s[4]=L=>V.value=!0)},{default:o(()=>[d(i(a(l)("commerce.delivery")),1)]),_:1})):_("",!0),(K=e.value)!=null&&K.canceled?_("",!0):(p(),c(R,{key:2,round:"",type:"danger",onClick:s[5]||(s[5]=L=>u.value=!0)},{default:o(()=>[d(i(a(l)("common.cancel")),1)]),_:1}))]}),_:1})):_("",!0)],64)}}});export{zl as default};