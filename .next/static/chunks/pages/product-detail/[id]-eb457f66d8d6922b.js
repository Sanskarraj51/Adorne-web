(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{4278:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product-detail/[id]",function(){return t(6926)}])},5235:function(e,i,t){},6926:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return w}});var l=t(5893),s=t(1163),o=t(7294);t(5235);var n=t(251);let d=e=>{var i,t;let{item:o,mediaUrl:n,i:d}=e,c=(0,s.useRouter)();return(0,l.jsxs)("div",{onClick:()=>c.push("/product-detail/".concat(null==o?void 0:o.id)),className:"featured-products",children:[(0,l.jsx)("img",{src:(null==o?void 0:null===(i=o.ProductImageEntities)||void 0===i?void 0:i.length)?"".concat(n).concat(null===(t=null==o?void 0:o.ProductImageEntities[0])||void 0===t?void 0:t.key):"/images/featured-".concat(d||1,".png"),className:"img-fluid",alt:""}),(0,l.jsx)("p",{children:(null==o?void 0:o.name)||"Wireless X-15"}),(0,l.jsxs)("h4",{children:["€",null==o?void 0:o.price]})]})};var c=t(9755),a=t.n(c),r=t(9878),u=t(3021),v=t(1664),h=t.n(v),m=t(1233),f=t(4644),p=t(518),x=t(1649),j=t(6501),g=t(5715);t(8648);let N=()=>{var e,i,t,c,v,N,w,b,k,_,y,E,P;let[C,W]=(0,o.useState)({}),[X,S]=(0,o.useState)(""),[H,z]=(0,o.useState)(""),[q,A]=(0,o.useState)(1),[Y,I]=(0,o.useState)(!1),D=(0,s.useRouter)(),{user:F}=(0,g.a)(),{id:O}=D.query,R=(0,m.v9)(e=>e.product),Z=(0,x.I0)(),{productDetail:T}=(0,m.v9)(e=>e.product),U=null==T?void 0:T.products,V=null==T?void 0:T.mediaUrl,K=(null==U?void 0:U.description)?JSON.parse(null==U?void 0:U.description):[],M=async()=>{I(!0),await Z((0,p.y)(O)),I(!1)};async function J(){let e={user_id:F.id,product_id:O};await (0,u.K2)("/wishlist/add-wishlist",e,"Product Added to Your Wishlist")&&D.push("/cart")}async function B(){let e=await (0,u.K2)("/productvariation/get-variant",{size:X,color:H,product_id:O},null);e&&W(null==e?void 0:e.data)}async function G(){var e;if((null==U?void 0:null===(e=U.ProductvariantEntities)||void 0===e?void 0:e.length)&&!(null==C?void 0:C.sku)){j.ZP.error("Please Select a Variant");return}let i={product_id:O,sku:(null==C?void 0:C.sku)||(null==U?void 0:U.sku_id),quantity:q};Z((0,p.Xq)(i)).then(e=>{D.push("/cart")})}return(0,o.useEffect)(()=>{O&&M()},[O]),(0,o.useEffect)(()=>{a()(".zoom").mousemove(function(e){var i,t,l;l=e.currentTarget,offsetX=e.offsetX?e.offsetX:e.touches[0].pageX,e.offsetY?offsetY=e.offsetY:offsetX=e.touches[0].pageX,i=offsetX/l.offsetWidth*100,t=offsetY/l.offsetHeight*100,l.style.backgroundPosition=i+"% "+t+"%"}),a()(document).mousemove(function(e){var i,t,l=e.clientX,s=e.clientY,l=e.clientX,s=e.clientY,o=null===(i=a()(".slideshow-items.active").offset())||void 0===i?void 0:i.left,n=a()(".slideshow-items.active").outerWidth()+o,d=null===(t=a()(".slideshow-items.active").offset())||void 0===t?void 0:t.top,c=a()(".slideshow-items.active").outerHeight()+d;l>o&&l<n&&s>d&&s<c?(a()("#lens").show(),a()("#result").show(),function(e,i,t){i.width(e.innerWidth()),i.height(e.innerHeight()),t.width(e.innerWidth()/2),t.height(e.innerHeight()/2),i.offset({top:e.offset().top,left:e.offset().left+e.outerWidth()+10});var l=e.innerWidth()/t.innerWidth(),s=e.innerHeight()/t.innerHeight();function o(o){var n=o.clientX-t.outerWidth()/2,d=o.clientY-t.outerHeight()/2;n>e.outerWidth()+e.offset().left-t.outerWidth()&&(n=e.outerWidth()+e.offset().left-t.outerWidth()),n<e.offset().left&&(n=e.offset().left),d>e.outerHeight()+e.offset().top-t.outerHeight()&&(d=e.outerHeight()+e.offset().top-t.outerHeight()),d<e.offset().top&&(d=e.offset().top),t.offset({top:d,left:n}),i.css("backgroundPosition","-"+(n-e.offset().left)*l+"px -"+(d-e.offset().top)*s+"px")}i.css("backgroundImage","url("+e.attr("src")+")"),i.css("backgroundSize",e.width()*l+"px "+e.height()*s+"px"),t.mousemove(function(e){o(e)}),e.mousemove(function(e){o(e)}),t.on("touchmove",function(){o()}),e.on("touchmove",function(){o()})}(a()(".slideshow-items.active"),a()("#result"),a()("#lens"))):(a()("#lens").hide(),a()("#result").hide())})},[]),((0,o.useEffect)(()=>{(H||X)&&B()},[H,X]),(0,o.useEffect)(()=>{var e,i,t;if((null==U?void 0:null===(e=U.ProductvariantEntities)||void 0===e?void 0:e.length)>0){let e=null==U?void 0:U.ProductvariantEntities[0];z(null==e?void 0:null===(i=e.ColorsEntity)||void 0===i?void 0:i.id),S(null==e?void 0:null===(t=e.SizeEntity)||void 0===t?void 0:t.id)}},[null==U?void 0:U.ProductvariantEntities]),Y)?(0,l.jsx)(f.Z,{}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.Z,{path:"Product Detail"}),(0,l.jsx)("section",{children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-6 col-md-4 col-sm-12",children:(0,l.jsxs)("div",{className:"product_image",children:[(0,l.jsx)("div",{id:"lens"}),(0,l.jsx)("div",{id:"slideshow-items-container",className:"zoom-container",children:null==U?void 0:null===(e=U.ProductImageEntities)||void 0===e?void 0:e.map((e,i)=>(0,l.jsx)("img",{className:"slideshow-items ".concat(0===i?"active":""),src:(null==e?void 0:e.key)?V+(null==e?void 0:e.key):"/images/1.png",alt:""},i))}),(0,l.jsx)("div",{id:"result"}),(0,l.jsx)("div",{className:"row justify-content-center",children:null==U?void 0:null===(i=U.ProductImageEntities)||void 0===i?void 0:i.map((e,i)=>(0,l.jsx)("img",{onMouseOver:e=>{a()(".slideshow-items").removeClass("active"),a()(".slideshow-items").eq(i).addClass("active"),a()(".slideshow-thumbnails").removeClass("active"),a()(".slideshow-thumbnails").eq(i).addClass("active")},className:"slideshow-thumbnails ".concat(0===i?"active":""),src:(null==e?void 0:e.key)?V+(null==e?void 0:e.key):"/images/1.png",alt:""},i))})]})}),(0,l.jsx)("div",{className:"col-lg-6 col-md-8 col-sm-12",children:(0,l.jsxs)("div",{className:"product-detailing-corner",children:[(0,l.jsxs)("div",{className:"name-code",children:[(0,l.jsx)("h4",{children:(null==U?void 0:U.name)||""}),(0,l.jsx)("p",{children:null==U?void 0:U.shortDescription}),(0,l.jsxs)("p",{children:["Product Code: ",(0,l.jsx)("span",{className:"product-codes color_blue",children:null==U?void 0:U.sku_id})]})]}),(0,l.jsxs)("div",{className:"price-taxas",children:[(0,l.jsxs)("h4",{children:["€",null==U?void 0:U.price]}),(0,l.jsx)("span",{children:"Inclusive of all taxes"})]}),(0,l.jsxs)("div",{className:"description",children:[(0,l.jsx)("h3",{children:"Description"}),(0,l.jsx)("ul",{className:"ps-3",children:null==K?void 0:K.map((e,i)=>(0,l.jsx)("li",{children:null==e?void 0:e.value},i))})]}),(0,l.jsxs)("div",{className:"option-wrapper",children:[(null==T?void 0:null===(t=T.productAttribute)||void 0===t?void 0:null===(c=t.size)||void 0===c?void 0:c.length)?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{children:"Select Size"}),(0,l.jsx)("div",{className:"size_number",children:(0,l.jsx)("form",{children:(0,l.jsx)("div",{className:"form-check",children:null==T?void 0:null===(v=T.productAttribute)||void 0===v?void 0:null===(N=v.size)||void 0===N?void 0:N.map((e,i)=>(0,l.jsxs)(o.Fragment,{children:[(0,l.jsx)("input",{className:"form-check-input",type:"radio",checked:X===(null==e?void 0:e.id),name:"flexRadioDefault",id:"flexRadioDefault"+(i+1)}),(0,l.jsx)("label",{onClick:()=>S(null==e?void 0:e.id),className:"form-check-label",for:"flexRadioDefault"+(i+1),children:null==e?void 0:e.name})]},i))})})})]}):null,(null==T?void 0:null===(w=T.productAttribute)||void 0===w?void 0:null===(b=w.color)||void 0===b?void 0:b.length)>0?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{children:"Select Color"}),(0,l.jsx)("ul",{className:"color_choice",children:null==T?void 0:null===(k=T.productAttribute)||void 0===k?void 0:null===(_=k.color)||void 0===_?void 0:_.map((e,i)=>(0,l.jsx)("li",{onClick:()=>z(null==e?void 0:e.id),className:H===(null==e?void 0:e.id)?"selected":"",style:{background:null==e?void 0:e.code},children:(0,l.jsx)("a",{role:"button",className:"choice_color_one"})},i))})]}):null]}),(null==C?void 0:C.sku)===null?(0,l.jsx)("p",{className:"text-danger",children:" This Variant is Out of stock"}):null,(0,l.jsxs)("div",{className:"quantity-via-wishlist",children:[(0,l.jsx)("div",{className:"quantity",children:(0,l.jsx)("form",{children:(0,l.jsxs)("div",{className:"input-group align-items-center justify-content-center qty_input",children:[(0,l.jsx)("button",{onClick:function(){q>1&&A(q-1)},className:"btn minus ",type:"button"}),(0,l.jsx)("input",{type:"text",value:q,disabled:!0,className:"form-control add_input text_cart",placeholder:"","aria-label":"Example text with two button addons"}),(0,l.jsx)("button",{onClick:function(){q<5?A(q+1):j.ZP.error("Max 5 products Allowed")},className:"btn pluse",type:"button"})]})})}),(0,l.jsx)("div",{className:"wishlist",children:(0,l.jsxs)("a",{role:"button",onClick:J,className:"wishlist-link",children:[(0,l.jsx)("span",{className:"material-symbols-rounded",children:(0,l.jsx)(r.Z,{icon:"mdi:heart-outline"})})," ","Add to Wishlist"]})})]}),(0,l.jsx)("div",{className:"checkout btn_group",children:(0,l.jsx)("a",{role:"button",onClick:G,className:"btn gradiant_button",children:"Add to Cart"})})]})})]})})}),(0,l.jsx)("div",{className:"featured-items",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:"featured-title",children:[(0,l.jsx)("h3",{children:"Featured Products"}),(0,l.jsx)(h(),{href:"/search/all",className:"view-all",children:"View all"})]}),(0,l.jsx)("div",{className:"row",children:null===(y=null==R?void 0:null===(E=R.data)||void 0===E?void 0:null===(P=E.products)||void 0===P?void 0:P.slice(0,4))||void 0===y?void 0:y.map((e,i)=>{var t;if((null==e?void 0:e.id)!=O)return(0,l.jsx)("div",{className:"col-md-3",children:(0,l.jsx)(d,{i:i,mediaUrl:null==R?void 0:null===(t=R.data)||void 0===t?void 0:t.mediaUrl,item:e})},i)})})]})})]})};var w=N}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4278)}),_N_E=e.O()}]);