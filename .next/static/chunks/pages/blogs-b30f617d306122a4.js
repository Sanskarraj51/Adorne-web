(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{836:function(l,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs",function(){return e(4763)}])},4763:function(l,s,e){"use strict";e.r(s);var a=e(5893),n=e(7294),i=e(251),t=e(4644),c=e(3021),d=e(3906),r=e(1674);let o=()=>{var l;let[s,e]=(0,n.useState)([]),[o,u]=(0,n.useState)(!1);async function m(){u(!0);let l=await (0,c.Xr)(r.Z.blog);l&&e(null==l?void 0:l.data),u(!1)}return((0,n.useEffect)(()=>{m()},[]),o)?(0,a.jsx)(t.Z,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{path:"Blogs"}),(0,a.jsx)("div",{className:"container mt-4 mb-5",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"latest-blog",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:null==s?void 0:null===(l=s.posts)||void 0===l?void 0:l.map(l=>(0,a.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-12",children:(0,a.jsx)(d.Z,{mediaUrl:null==s?void 0:s.mediaUrl,item:l})},l))})})})})})]})};s.default=o},3906:function(l,s,e){"use strict";var a=e(5893),n=e(381),i=e.n(n),t=e(1163);e(7294);let c=l=>{let{item:s,mediaUrl:e}=l,n=(0,t.useRouter)();return(0,a.jsxs)("div",{className:"blog_card",onClick:()=>n.push("/blogs/".concat(null==s?void 0:s.id)),children:[(0,a.jsx)("img",{loading:"lazy",src:(null==s?void 0:s.postImage)?"".concat(e).concat(null==s?void 0:s.postImage):"/images/latest-blog-1.png",className:"img-fluid",alt:""}),(0,a.jsx)("ul",{children:(0,a.jsxs)("li",{children:[(0,a.jsxs)("span",{children:[(0,a.jsx)("img",{src:"/images/Frame 1250.png",className:"img-fluid",alt:""}),(0,a.jsxs)("p",{className:"date_container",children:[(0,a.jsx)("span",{className:"date",children:i()(null==s?void 0:s.createdAt).format("DD")})," ",(0,a.jsx)("span",{className:"month",children:i()(null==s?void 0:s.createdAt).format("MMM")})]})]}),(0,a.jsxs)("figure",{children:[(0,a.jsx)("a",{href:"blog-detail.html",children:null==s?void 0:s.title}),(0,a.jsx)("p",{dangerouslySetInnerHTML:{__html:null==s?void 0:s.post}})]})]})})]})};s.Z=c}},function(l){l.O(0,[885,774,888,179],function(){return l(l.s=836)}),_N_E=l.O()}]);