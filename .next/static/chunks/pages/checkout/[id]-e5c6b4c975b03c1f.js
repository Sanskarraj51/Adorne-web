(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[696],{175:function(e,l,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout/[id]",function(){return s(3222)}])},3222:function(e,l,s){"use strict";s.r(l);var a=s(5893),i=s(1954),r=s(3946),n=s(1664),t=s.n(n),o=s(1163),d=s(7294),c=s(251),u=s(3021),h=s(1233),m=s(518),p=s(8648),x=s(3933),v=s(9441);let g=()=>{var e,l,s,n,g,j,f;let[b,y]=(0,d.useState)(""),[N,w]=(0,d.useState)({}),[k,C]=(0,d.useState)(""),[_,E]=(0,d.useState)(!1),S=(0,h.I0)(),Z=(0,h.v9)(e=>e.user),D=(0,h.v9)(e=>e.product),T=(0,o.useRouter)(),{id:P}=T.query;async function F(){var e,l;let s={user_id:P,total:null==D?void 0:null===(e=D.cartData)||void 0===e?void 0:e.total,shipping_id:null==N?void 0:N.id},a=await (0,u.K2)("/orders/place-order",s,"Order Placed Successfully");a&&(T.push("/confirm-order/".concat(null==a?void 0:null===(l=a.data)||void 0===l?void 0:l.id)),S((0,m.mB)()))}function O(){E(!_)}return(0,d.useEffect)(()=>{P&&S((0,p.HR)(P))},[S,P]),(0,d.useEffect)(()=>{var e;if((null==Z?void 0:null===(e=Z.address)||void 0===e?void 0:e.length)>0){let e={};for(let l of null==Z?void 0:Z.address)(null==l?void 0:l.isDefault)===1&&(e=l);w(e)}},[null==Z?void 0:Z.address]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{path:"Shipping"}),(0,a.jsx)("div",{className:"container mt-4 mb-5",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-lg-8 col-md-8 col-sm-12",children:[(0,a.jsx)("div",{className:"saved-address",children:(0,a.jsx)("h4",{children:"Delivery address"})}),(0,a.jsxs)("div",{className:"enter-address-detail",children:[(0,a.jsxs)("div",{className:"address",children:[(0,a.jsx)("h6",{children:(null==N?void 0:N.address_type)||"Home"}),(0,a.jsxs)("p",{children:[null==N?void 0:N.address1,", ",null==N?void 0:N.city,", ",null==N?void 0:N.state,", ",null==N?void 0:N.country," M."," ",null==N?void 0:N.phone]})]}),(0,a.jsx)("div",{className:"action-details",children:(0,a.jsx)("a",{role:"button",onClick:O,className:"btn-edited",children:"Change"})})]}),(0,a.jsxs)("div",{className:"select-payment-container",children:[(0,a.jsxs)("div",{className:"saved-address",children:[(0,a.jsx)("h4",{children:"Select Payment option"}),(0,a.jsx)("a",{role:"button",className:"btn gradiant_button using-address",children:"Use This Payment Method"})]}),(0,a.jsxs)("div",{className:"row justify-content-start",children:[(0,a.jsx)("h6",{style:{color:"#86533C"},className:"w-100",children:"Payment is Under Development. Kindly place Order using Whatsapp and Instragram"}),(0,a.jsxs)("div",{className:"d-flex ",children:[(0,a.jsx)("a",{target:"_blank",href:"https://wa.me/+31633386607",children:(0,a.jsx)(r.Z,{sx:{bgcolor:"#0cc144",borderRadius:"4px",marginRight:"5px"},children:(0,a.jsx)(i.JO,{color:"white",icon:"mdi:whatsapp"})})}),(0,a.jsx)("a",{className:"footer-hiring-btn2",target:"_blank",href:"https://www.instagram.com/contact_adorne/",children:(0,a.jsx)(r.Z,{sx:{bgcolor:"white",borderRadius:"4px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"},children:(0,a.jsx)("img",{alt:"",src:"/images/instagram.png"})})})]}),(0,a.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12",children:(0,a.jsx)("div",{className:"choose-payment-method"})})]})]})]}),(0,a.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12",children:(0,a.jsxs)("div",{className:"cart-page-billing",children:[(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Order Summary (2)"})}),(0,a.jsxs)("div",{className:"gift-card-promos",children:[(0,a.jsxs)("div",{className:"subtotal-title",children:[(0,a.jsx)("h4",{children:"Product"}),(0,a.jsx)("h4",{children:"Subtotal"})]}),(0,a.jsx)("div",{className:"subtotal-product-detail",children:(0,a.jsx)("ul",{children:null==D?void 0:null===(e=D.cartData)||void 0===e?void 0:null===(l=e.products)||void 0===l?void 0:l.map((e,l)=>{let s=null==e?void 0:e.ProductEntity;return(0,a.jsxs)("li",{children:[(0,a.jsx)("figure",{children:(null==s?void 0:s.name)||""}),(0,a.jsxs)("span",{children:["$",Number(null==s?void 0:s.price)*(null==e?void 0:e.quantity)]})]},l)})})}),(0,a.jsx)("div",{className:"cart-additional-detail"}),(0,a.jsx)("div",{className:"subtotal-payments",children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("figure",{children:"Subtotal"}),(0,a.jsxs)("span",{children:["$",(null==D?void 0:null===(s=D.cartData)||void 0===s?void 0:s.total)?null==D?void 0:null===(n=D.cartData)||void 0===n?void 0:n.total:0]})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("figure",{children:"Delievery Charges"}),(0,a.jsxs)("span",{children:["$",(null==D?void 0:null===(g=D.cartData)||void 0===g?void 0:g.shippingCharges)||0]})]}),(0,a.jsxs)("li",{className:"final-billing",children:[(0,a.jsx)("figure",{children:"Total"}),(0,a.jsxs)("span",{children:["$",(null==D?void 0:null===(j=D.cartData)||void 0===j?void 0:j.total)?null==D?void 0:null===(f=D.cartData)||void 0===f?void 0:f.total:0]})]})]})}),(0,a.jsxs)("div",{className:"checkout",children:[(0,a.jsx)(t(),{href:"/",className:"btn gradiant_button",children:"Continue Shopping"}),(0,a.jsx)("button",{role:"button",disabled:!0,onClick:F,className:"btn primary-button",children:"Place Order"})]})]})]})})]})}),(0,a.jsx)(x.Z,{size:"md",open:_,closeDialog:()=>E(!1),title:"Select Address",children:(0,a.jsx)(v.Z,{popup:!0,setSelected:C,closeModal:O,selected:k,place:"billing"})})]})};l.default=g},3933:function(e,l,s){"use strict";s.d(l,{Z:function(){return v}});var a=s(5893),i=s(4776),r=s(657),n=s(7357),t=s(5861),o=s(3946),d=s(6514),c=s(7294),u=s(2734),h=s(2563);let m=()=>{let e=(0,u.Z)();return{primaryFilled:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main},primaryLight:{color:e.palette.primary.main,backgroundColor:(0,h.E)(e.palette.primary.main,.12)},secondaryFilled:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main},secondaryLight:{color:e.palette.secondary.main,backgroundColor:(0,h.E)(e.palette.secondary.main,.12)},successFilled:{color:e.palette.success.contrastText,backgroundColor:e.palette.success.main},successLight:{color:e.palette.success.main,backgroundColor:(0,h.E)(e.palette.success.main,.12)},errorFilled:{color:e.palette.error.contrastText,backgroundColor:e.palette.error.main},errorLight:{color:e.palette.error.main,backgroundColor:(0,h.E)(e.palette.error.main,.12)},warningFilled:{color:e.palette.warning.contrastText,backgroundColor:e.palette.warning.main},warningLight:{color:e.palette.warning.main,backgroundColor:(0,h.E)(e.palette.warning.main,.12)},infoFilled:{color:e.palette.info.contrastText,backgroundColor:e.palette.info.main},infoLight:{color:e.palette.info.main,backgroundColor:(0,h.E)(e.palette.info.main,.12)}}};var p=s(9878);let x=c.forwardRef(function(e,l){return(0,a.jsx)(i.Z,{direction:"down",ref:l,...e})});var v=function(e){let{closeDialog:l,children:s,open:i,title:c,size:u,scroll:h,id:v,fullScreen:g,actionComponent:j}=e;return m(),(0,a.jsxs)(r.Z,{fullWidth:!0,fullScreen:g||!1,open:i,maxWidth:u||"sm",scroll:h||"body",onClose:l,onBackdropClick:l,TransitionComponent:x,id:v||"custom_modal",children:[(0,a.jsxs)(n.Z,{className:"modal__titlediv",sx:{background:"#2E2B20"},children:[(0,a.jsx)(t.Z,{variant:"h6",color:"white",sx:{display:"flex",alignItems:"center"},children:c}),(0,a.jsx)(o.Z,{size:"small",onClick:l,children:(0,a.jsx)(p.Z,{icon:"mdi:close",color:"white"})})]}),(0,a.jsx)(d.Z,{sx:{px:{xs:7,sm:10.5},py:{xs:3,sm:4},position:"relative"},children:s}),j]})}}},function(e){e.O(0,[378,849,774,888,179],function(){return e(e.s=175)}),_N_E=e.O()}]);