(this.webpackJsonpshazu=this.webpackJsonpshazu||[]).push([[17],{1138:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return J}));var i=a(28),c=a(50),s=a(0),n=a(946),r=a(926),l=a(939),o=a(288),d=a(896),j=a(924),m=a(941),b=a(1141),h=a(953),u=a.n(h),p=a(954),O=a(121),g=a(955),x=a(1028),f=a(1029),y=a(1030),v=a(1026),S=a(1027),w=a(1031),D=a(1120),N=a(969),C=a(948),B=a(949),A=a(950),k=a(951),I=a(1);const U={loop:!1,autoplay:!0,animationData:B,background:"transparent"},E={loop:!1,autoplay:!0,animationData:A,background:"transparent"},F=[{id:"nft",label:"NFT",minWidth:150,width:"20%"},{id:"seller",label:"Seller",minWidth:80,width:"15%"},{id:"price",label:"Price",minWidth:100,align:"right",width:"10%"},{id:"buy",label:" ",minWidth:150,align:"right",width:"22%"}];function P(e){let{items:t,index:a}=e;const[i,{stopPopDingSound:c}]=Object(p.a)(k.a),[n,r]=Object(s.useState)({open:!1,success:!1}),[j,h]=Object(s.useState)(""),[g,x]=Object(s.useState)(""),[f,y]=Object(s.useState)(""),w=e=>{const t=JSON.parse(e.target.value);var a,c;a="Buy NFT Successful",c="id: ".concat(t.nftId),i(),h(a),x(c),r({open:!0,success:!0})};return Object(I.jsxs)(I.Fragment,{children:[t.map(((e,t)=>Object(I.jsx)(v.a,{hover:!0,role:"checkbox",tabIndex:-1,children:F.map(((t,a)=>{const i=e[t.id];if("nft"===t.id){let c="";return"Common"===i.rarity?c="2px solid var(--shazu-yellow)":"Rare"===i.rarity?c="2px solid var(--shazu-blue)":"Super Rare"===i.rarity?c="2px solid var(--shazu-green)":"Ultimate Rare"===i.rarity&&(c="2px solid var(--shazu-purple)"),Object(I.jsx)(S.a,{align:t.align,style:{fontSize:"1rem"},children:Object(I.jsxs)(d.a,{direction:"row",spacing:1,alignItems:"center",style:{justifyContent:t.align},children:[Object(I.jsx)("img",{src:i.smallThumbnail,alt:"",style:{width:"2rem",height:"2rem",borderRadius:"0.3rem",marginRight:"0.4rem",border:c}}),Object(I.jsx)("div",{className:"bold",children:e.nftId})]})},"".concat(a))}return"seller"===t.id?Object(I.jsx)(S.a,{align:t.align,style:{fontWeight:"500"},children:Object(I.jsx)("a",{href:"https://bscscan.com/address/".concat(i),target:"_blank",rel:"noreferrer",style:{color:"white",fontSize:"0.9rem"},children:Object(b.a)(i)})},"".concat(a)):"price"===t.id?Object(I.jsx)(S.a,{align:t.align,style:{fontWeight:"500",fontSize:"0.9rem"},children:Object(I.jsxs)(d.a,{direction:"row",alignItem:"center",justifyContent:"end",children:[Object(I.jsxs)("div",{children:[Object(C.a)(e.saleData.price)," ",e.saleData.currency]}),"BNB"===e.saleData.currency&&Object(I.jsx)("img",{src:"/static/SHAZU/icons/ic_bnb.svg",alt:"",style:{width:"1.2rem",height:"1.2rem",marginLeft:"0.2rem",marginTop:"0.1rem"}}),"SHAZU"===e.saleData.currency&&Object(I.jsx)("img",{src:"/static/SHAZU/icons/ic_shazu.png",alt:"",style:{width:"1.2rem",height:"1.2rem",marginLeft:"0.2rem",marginTop:"0.1rem"}})]})},"".concat(a)):"buy"===t.id&&Object(I.jsx)(S.a,{align:t.align,style:{fontWeight:"500",fontSize:"0.9rem"},children:Object(I.jsx)(l.a,{value:JSON.stringify(e),variant:"contained",color:"success",onClick:w,children:"Buy"})},"".concat(a))}))},"".concat(t)))),Object(I.jsx)(O.b,{open:n.open,maxWidth:"xs",animate:O.j,scroll:"paper",onClose:()=>{r({...n,open:!1}),h(""),y("")},children:Object(I.jsxs)(m.a,{style:{textAlign:"center"},children:[n.success?Object(I.jsx)("div",{className:"successCheck-lottie-container",children:Object(I.jsx)(u.a,{options:U,isClickToPauseDisabled:!0})}):Object(I.jsx)("div",{className:"successCheck-lottie-container",children:Object(I.jsx)(u.a,{options:E,isClickToPauseDisabled:!0})}),Object(I.jsx)(o.a,{variant:"h3",children:j}),n.success?Object(I.jsx)("div",{className:"elevate-card",children:Object(I.jsx)(o.a,{variant:"h5",children:g})}):Object(I.jsx)("div",{children:f})]})})]})}var T=a(377);const H=[{id:"nft",label:"NFT",minWidth:150,width:"20%"},{id:"seller",label:"Seller",minWidth:80,width:"15%"},{id:"price",label:"Price",minWidth:100,align:"right",width:"10%"},{id:"buy",label:" ",minWidth:150,align:"right",width:"22%"}],R={common:{name:"Orange Ninja",rarity:"Common",video:"/static/SHAZU/nft/ORANGE_NINJA.mp4",smallThumbnail:"/static/SHAZU/nft/thumbnail/nft_thumbnail_orange.jpg"},rare:{name:"Blue Ninja",rarity:"Rare",video:"/static/SHAZU/nft/BLUE_NINJA.mp4",smallThumbnail:"/static/SHAZU/nft/thumbnail/nft_thumbnail_blue.jpg"},superrare:{name:"Green Ninja",rarity:"Super Rare",video:"/static/SHAZU/nft/GREEN_NINJA.mp4",smallThumbnail:"/static/SHAZU/nft/thumbnail/nft_thumbnail_green.jpg"},ultimaterare:{name:"Purple Ninja",rarity:"Ultimate Rare",video:"/static/SHAZU/nft/PURPLE_NINJA.mp4",smallThumbnail:"/static/SHAZU/nft/thumbnail/nft_thumbnail_purple.jpg"}},Z=[{nft:R.ultimaterare,nftId:"id25125",seller:"0xEF0274E31810C9Df02F98FAFDe0f841F4E66a1Cd",saleData:{saleId:"ID22910492829",price:"3",currency:"BNB"},marketData:{floorPrice:"1500",currency:"SHAZU"}},{nft:R.ultimaterare,nftId:"id25125",seller:"0xEF0274E31810C9Df02F98FAFDe0f841F4E66a1Cd",saleData:{saleId:"ID22910492829",price:"3",currency:"BNB"},marketData:{floorPrice:"1500",currency:"SHAZU"}},{nft:R.ultimaterare,nftId:"id25125",seller:"0xEF0274E31810C9Df02F98FAFDe0f841F4E66a1Cd",saleData:{saleId:"ID22910492829",price:"3",currency:"BNB"},marketData:{floorPrice:"1500",currency:"SHAZU"}},{nft:R.ultimaterare,nftId:"id25125",seller:"0xEF0274E31810C9Df02F98FAFDe0f841F4E66a1Cd",saleData:{saleId:"ID22910492829",price:"3",currency:"BNB"},marketData:{floorPrice:"1500",currency:"SHAZU"}},{nft:R.ultimaterare,nftId:"id25125",seller:"0xEF0274E31810C9Df02F98FAFDe0f841F4E66a1Cd",saleData:{saleId:"ID22910492829",price:"3",currency:"BNB"},marketData:{floorPrice:"1500",currency:"SHAZU"}},{nft:R.ultimaterare,nftId:"id25125",seller:"0xEF0274E31810C9Df02F98FAFDe0f841F4E66a1Cd",saleData:{saleId:"ID22910492829",price:"3",currency:"BNB"},marketData:{floorPrice:"1500",currency:"SHAZU"}}];function z(){const{Component:e,nextPage:t,prevPage:a,setPageIndex:i,totalPages:c}=Object(N.a)({PageComponent:P,maxPerPage:4,data:Z}),[n,r]=Object(s.useState)(1);return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(T.a,{children:Object(I.jsxs)(x.a,{sx:{minWidth:"700px",width:"100%",backgroundColor:"#1C1C1C",border:"solid 1px #3B3B3B",borderRadius:"8px",padding:"1rem",marginTop:"1rem"},style:{marginLeft:"auto",marginRight:"auto"},children:[Object(I.jsx)(o.a,{variant:"h5",style:{marginBottom:"0.4rem"},children:"Listings"}),Object(I.jsxs)(f.a,{children:[Object(I.jsx)(y.a,{sx:{backgroundColor:"#1C1C1C",borderRadius:"12px"},children:Object(I.jsx)(v.a,{children:H.map((e=>Object(I.jsx)(S.a,{align:e.align,style:{minWidth:e.minWidth,width:e.width,boxShadow:"none"},sx:{background:"#272727",fontSize:"1rem",color:"white"},children:e.label},e.id)))})}),Object(I.jsx)(w.a,{children:Object(I.jsx)(e,{})})]})]})}),Object(I.jsx)(d.a,{style:{width:"100%",marginTop:"1rem"},alignItems:"center",children:Object(I.jsx)(D.a,{color:"yellow",count:c,page:n,onChange:(e,t)=>{r(t),i(t)}})})]})}const W={loop:!1,autoplay:!0,animationData:B,background:"transparent"},L={loop:!1,autoplay:!0,animationData:A,background:"transparent"},_={nft:{name:"Purple Ninja",rarity:"Ultimate Rare",video:"/static/SHAZU/nft/PURPLE_NINJA.mp4",smallThumbnail:"/static/SHAZU/nft/thumbnail/nft_thumbnail_purple.jpg"},nftId:"id22925",status:"listed",description:"Lorem ipsum dolor sit amet, consectetur",owner:"0x29a97C6EfFB8A411DABc6aDEEfaa84f5067C8bbe",saleData:{saleId:"ID29282637361",price:"6000",currency:"SHAZU"},marketData:{floorPrice:"1500",currency:"SHAZU"}};function J(){const{nftId:e}=Object(i.i)(),[t,a]=Object(s.useState)(!1),[h,x]=Object(s.useState)(!1),[f,y]=Object(s.useState)("");Object(s.useEffect)((()=>{var t;t=e,console.info("nftId: ".concat(t)),y(_),x(!0)}),[]);const[v,{stopPopDingSound:S}]=Object(p.a)(k.a),[w,D]=Object(s.useState)({open:!1,success:!1}),[N,C]=Object(s.useState)(""),[B,A]=Object(s.useState)(""),[U,E]=Object(s.useState)("");return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(n.a,{maxWidth:"xl",children:[Object(I.jsxs)(O.d,{variants:O.h,children:[Object(I.jsx)(r.a,{className:"no-hover-line",to:"/marketplace",component:c.c,children:Object(I.jsx)(l.a,{variant:"contained",color:"purple",children:"Back to Marketplace"})}),Object(I.jsx)(o.a,{variant:"h3",style:{marginTop:"2rem"},children:"Listing Detail"})]}),Object(I.jsxs)(d.a,{children:[h&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(O.d,{variants:O.h,children:Object(I.jsxs)(j.a,{container:!0,spacing:4,alignItems:"stretch",direction:"row",justifyContent:"flex-start",style:{paddingTop:"2rem",paddingBottom:"2rem"},children:[Object(I.jsx)(j.a,{item:!0,xs:12,md:12,lg:4,xl:4,children:Object(I.jsx)(g.a,{collection:f,big:!0})}),Object(I.jsx)(j.a,{item:!0,xs:12,md:12,lg:8,xl:8,children:Object(I.jsxs)(d.a,{spacing:3,children:[Object(I.jsxs)("div",{className:"elevate-card-sm",style:{padding:"1rem"},children:["Owner: "," ",Object(I.jsx)("a",{href:"https://bscscan.com/address/".concat(f.owner),target:"_blank",rel:"noreferrer",className:"bold",children:Object(b.a)(f.owner)})]}),Object(I.jsx)("div",{className:"elevate-card-sm",style:{padding:"1rem"},children:Object(I.jsxs)(d.a,{children:[Object(I.jsx)("div",{children:"Listed Price:"}),Object(I.jsxs)(d.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(I.jsxs)(o.a,{variant:"h4",children:[f.saleData.price," ",f.saleData.currency]}),"BNB"===f.saleData.currency&&Object(I.jsx)("img",{src:"/static/SHAZU/icons/ic_bnb.svg",alt:"",style:{width:"1.5rem",height:"1.5rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}}),"SHAZU"===f.saleData.currency&&Object(I.jsx)("img",{src:"/static/SHAZU/icons/ic_shazu.png",alt:"",style:{width:"1.5rem",height:"1.5rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}})]}),Object(I.jsx)(d.a,{direction:"column",justifyContent:"space-between",style:{marginBottom:"0.8rem",marginTop:"0.4rem"},children:Object(I.jsxs)("div",{className:"elevate-card-sm",style:{fontSize:"1rem",width:"fit-content"},children:["Floor Price: "," ",Object(I.jsxs)(d.a,{direction:"row",alignItems:"center",children:[Object(I.jsxs)("span",{style:{fontWeight:"700"},children:[f.marketData.floorPrice," ",f.marketData.currency]}),"BNB"===f.marketData.currency&&Object(I.jsx)("img",{src:"/static/SHAZU/icons/ic_bnb.svg",alt:"",style:{width:"1.2rem",height:"1.2rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}}),"SHAZU"===f.marketData.currency&&Object(I.jsx)("img",{src:"/static/SHAZU/icons/ic_shazu.png",alt:"",style:{width:"1.2rem",height:"1.2rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}})]})]})}),Object(I.jsx)(d.a,{direction:"row",spacing:2,style:{marginTop:"0.4rem",marginBottom:"1rem"},children:Object(I.jsx)(l.a,{value:JSON.stringify(f),onClick:e=>{const t=JSON.parse(e.target.value);var a,i;a="Buy NFT Successful",i="id: ".concat(t.nftId),v(),C(a),A(i),D({open:!0,success:!0})},size:"large",variant:"contained",color:"success",children:"Buy Now"})}),Object(I.jsx)(z,{})]})})]})})]})}),Object(I.jsx)(O.b,{open:w.open,maxWidth:"xs",animate:O.j,scroll:"paper",onClose:()=>{D({...w,open:!1}),C(""),E("")},children:Object(I.jsxs)(m.a,{style:{textAlign:"center"},children:[w.success?Object(I.jsx)("div",{className:"successCheck-lottie-container",children:Object(I.jsx)(u.a,{options:W,isClickToPauseDisabled:!0})}):Object(I.jsx)("div",{className:"successCheck-lottie-container",children:Object(I.jsx)(u.a,{options:L,isClickToPauseDisabled:!0})}),Object(I.jsx)(o.a,{variant:"h3",children:N}),w.success?Object(I.jsx)("div",{className:"elevate-card",children:Object(I.jsx)(o.a,{variant:"h5",children:B})}):Object(I.jsx)("div",{children:U})]})})]}),t&&Object(I.jsx)(O.d,{variants:O.h,children:Object(I.jsx)(o.a,{variant:"h5",style:{fontWeight:"500"},children:"The NFT with this ID isn't listed."})})]})]})})}},955:function(e,t,a){"use strict";a.d(t,"a",(function(){return R}));var i=a(9),c=a(61),s=a(0),n=a(226),r=a(953),l=a.n(r),o=a(916),d=a(542),j=a(288),m=a(896),b=a(939),h=a(937),u=a(941),p=a(954),O=a(1141),g=a(948),x=a(121),f=a(949),y=a(950),v=a(951),S=a(847),w=a(1125),D=a(1136),N=a(947),C=a(1139),B=a(1);var A=e=>{const[t,a]=Object(s.useState)(!0),[i,c]=Object(s.useState)(!1),[r,l]=Object(s.useState)("BUY"),{state:o,send:d}=Object(D.a)(N.o,"fillOffer",{transactionName:"Fill Offer"}),{account:j}=Object(S.a)(),m=Object(C.a)(j);Object(s.useEffect)((()=>{"Exception"!==o.status&&"Fail"!==o.status||(a(!1),c(!1),l("BUY")),o.status,"Success"===o.status&&l("BOUGHT"),"Mining"===o.status&&(a(!0),c(!0),l("BUYING.."))}),[o]);return Object(s.useEffect)((()=>{j&&j.toLowerCase()!==e.seller.toLowerCase()&&j&&m&&m.gte(n.utils.parseEther(e.price))?i||a(!1):i||a(!0)}),[j,e.seller,m]),Object(B.jsx)(b.a,{onClick:()=>{a(!0),c(!0),d(e.tokenId,{value:n.utils.parseEther(e.price)})},variant:"contained",color:"success",style:{width:"100%"},disabled:t,children:r})},k=a(1124);var I=e=>{const[t,a]=Object(s.useState)(!0),[i,c]=Object(s.useState)(!1),[r,l]=Object(s.useState)("APPROVE SHAZU"),{state:o,send:d}=Object(D.a)(N.m,"approve",{transactionName:"Approve SHAZU"}),{account:j}=Object(S.a)(),m=n.constants.MaxUint256,h=Object(k.a)(N.h,j);Object(s.useEffect)((()=>{"Exception"!==o.status&&"Fail"!==o.status||(a(!1),c(!1),l("APPROVE SHAZU")),o.status,"Success"===o.status&&l("APPROVED"),"Mining"===o.status&&(a(!0),c(!0),l("APPROVING.."))}),[o]);return Object(s.useEffect)((()=>{j&&j.toLowerCase()!==e.seller.toLowerCase()&&j&&h&&h.gte(n.utils.parseEther(e.price))?i||a(!1):i||a(!0)}),[j,e.seller,h]),Object(B.jsx)(b.a,{onClick:()=>{a(!0),c(!0),d(N.n,m)},variant:"contained",color:"success",style:{width:"100%"},disabled:t,children:r})};var U=e=>{const[t,a]=Object(s.useState)(!0),[i,c]=Object(s.useState)(!1),[r,l]=Object(s.useState)("BUY"),{state:o,send:d}=Object(D.a)(N.o,"fillOffer",{transactionName:"Fill Offer"}),{account:j}=Object(S.a)(),m=(n.constants.MaxUint256,Object(k.a)(N.h,j));Object(s.useEffect)((()=>{"Exception"!==o.status&&"Fail"!==o.status||(a(!1),c(!1),l("BUY")),o.status,"Success"===o.status&&l("BOUGHT"),"Mining"===o.status&&(a(!0),c(!0),l("BUYING.."))}),[o]);return Object(s.useEffect)((()=>{j&&j.toLowerCase()!==e.seller.toLowerCase()&&j&&m&&m.gte(n.utils.parseEther(e.price))?i||a(!1):i||a(!0)}),[j,e.seller,m]),Object(B.jsx)(b.a,{onClick:()=>{a(!0),c(!0),d(e.tokenId)},variant:"contained",color:"success",style:{width:"100%"},disabled:t,children:r})};const E={loop:!1,autoplay:!0,animationData:f,background:"transparent"},F={loop:!1,autoplay:!0,animationData:y,background:"transparent"},P={padding:"0.25rem",borderRadius:"10rem",width:"2.4rem",height:"2.4rem",minWidth:"unset"},T={padding:"0.4rem",borderRadius:"8px",width:"2.2rem",height:"2.2rem",minWidth:"unset"},H=Object(i.a)(o.a)({"& label.Mui-focused":{color:"white"},"& .MuiInput-underline:after":{borderBottomColor:"white"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#3B3B3B"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"white"}}});function R(e){const{account:t}=Object(S.a)(),a=Object(w.a)(N.h,t,N.n),{state:i,send:r}=Object(D.a)(N.q,"transferFrom",{transactionName:"Transfer SHAZU NFT"}),[o,f]=Object(s.useState)(!1),[y,C]=Object(s.useState)(!1);Object(s.useEffect)((()=>{"Exception"===i.status&&f(!1),"Fail"===i.status&&f(!1),i.status,"Success"===i.status&&(f(!0),C(!0))}),[i,t]);const k=Object(c.a)(),R={borderRadius:k.shape.borderRadiusMd,backgroundColor:"#1C1C1C",border:"solid 1px",borderColor:"#3B3B3B",padding:"0.5rem 0.8rem",transition:"border-color 0.3s",maxWidth:e.big?"25rem":"17rem",marginLeft:"auto",marginRight:"auto",textAlign:"left"};function Z(){return"Common"===e.collection.nft.rarity?"gradient-border-yellow":"Rare"===e.collection.nft.rarity?"gradient-border-blue":"Super Rare"===e.collection.nft.rarity?"gradient-border-green":"Ultimate Rare"===e.collection.nft.rarity?"gradient-border-purple":void 0}const z={position:"absolute",padding:"0.1rem 0.5rem",borderRadius:"4px",background:"Common"===e.collection.nft.rarity?"var(--shazu-yellow)":"Rare"===e.collection.nft.rarity?"var(--shazu-blue)":"Super Rare"===e.collection.nft.rarity?"var(--shazu-green)":"Ultimate Rare"===e.collection.nft.rarity?"linear-gradient(90deg, rgba(236,35,255,1) 0%, rgba(166,37,255,1) 34%, rgba(173,0,255,1) 100%)":void 0,color:"Ultimate Rare"!==e.collection.nft.rarity?"black":"white",fontSize:"0.8rem",top:"-3rem",left:"-0.5rem",transform:"rotate(-12deg)",width:"max-content"},[W,L]=Object(s.useState)(null),[_,{stopPopDingSound:J}]=Object(p.a)(v.a),[M,G]=Object(s.useState)(!1),[Y,V]=Object(s.useState)(!1),[q,K]=Object(s.useState)(""),[Q,X]=Object(s.useState)(""),[$,ee]=Object(s.useState)(!1);Object(s.useEffect)((()=>{ee((()=>{try{return Object(O.a)(Q),!0}catch(e){return!1}})())}),[Q]);const[te,ae]=Object(s.useState)(null),[ie,ce]=Object(s.useState)({open:!1,success:!1}),[se,ne]=Object(s.useState)(""),[re,le]=Object(s.useState)(""),[oe,de]=Object(s.useState)("");return e.unknown?Object(B.jsx)("div",{style:{height:"100%"},children:Object(B.jsxs)(d.a,{className:"gradient-border p-relative ".concat(Z()),style:R,children:[Object(B.jsxs)("div",{style:{visibility:"hidden"},children:[Object(B.jsx)("div",{style:{width:"100%",borderRadius:k.shape.borderRadiusMd,marginTop:"0.5rem",marginBottom:"0.5em"},children:Object(B.jsx)("video",{className:"vid",playsInline:!0,muted:!0,autoPlay:!0,loop:!0,style:{width:"100%",borderRadius:"8px",aspectRatio:"1"},children:Object(B.jsx)("source",{src:e.collection.nft.video,type:"video/mp4"})})}),Object(B.jsx)("div",{style:{position:"relative",height:"0",width:"0"},children:Object(B.jsx)("div",{style:z,children:e.collection.nft.rarity})}),Object(B.jsx)(j.a,{variant:"h6",style:{fontWeight:"700",marginBottom:"0.8rem"},children:e.collection.nft.name}),(e.amount||0!==e.amount||null!==e.amount)&&Object(B.jsx)("div",{className:"p-relative w-100",children:Object(B.jsxs)("div",{className:"nft-card-amount",children:["x",e.amount]})})]}),Object(B.jsxs)("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",opacity:"0.2"},children:[Object(B.jsx)(j.a,{style:{fontSize:"4rem"},children:"?"}),Object(B.jsx)(j.a,{children:"Not owned yet"})]})]})}):e.sold?Object(B.jsx)("div",{children:Object(B.jsxs)(d.a,{className:"gradient-border ".concat(Z()),style:{...R,position:"relative"},children:[Object(B.jsx)("div",{style:{width:"100%",borderRadius:k.shape.borderRadiusMd,marginTop:"0.5rem",marginBottom:"0.5em"},children:Object(B.jsx)("video",{className:"vid",playsInline:!0,muted:!0,autoPlay:!0,loop:!0,style:{width:"100%",borderRadius:"8px",aspectRatio:"1"},children:Object(B.jsx)("source",{src:e.collection.nft.video,type:"video/mp4"})})}),Object(B.jsx)("div",{style:{position:"relative",height:"0",width:"0"},children:Object(B.jsx)("div",{style:z,children:e.collection.nft.rarity})}),Object(B.jsxs)(m.a,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"0.8rem"},children:[Object(B.jsxs)(m.a,{children:[Object(B.jsx)(j.a,{variant:"h6",style:{fontWeight:"700",marginBottom:"0.8rem"},children:e.collection.nft.name}),"undefined"!==typeof e.collection.id&&Object(B.jsxs)(j.a,{style:{opacity:"0.5",fontSize:"0.8rem",marginTop:"-1rem"},children:["id: ",e.collection.id]})]}),"undefined"!==typeof e.collection.description&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(b.a,{variant:"container",style:P,onClick:e=>L(e.currentTarget),children:Object(B.jsx)("img",{src:"/static/SHAZU/icons/info.svg",className:"pe-none",alt:"",style:{width:"100%",opacity:"0.5"}})}),Object(B.jsx)(h.a,{open:Boolean(W),anchorEl:W,onClose:()=>L(null),anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"center"},PaperProps:{sx:{p:1,maxWidth:200}},children:e.collection.description})]})]}),"undefined"!==typeof e.amount&&Object(B.jsx)("div",{className:"p-relative w-100",children:Object(B.jsxs)("div",{className:"nft-card-amount",children:["x",e.amount]})}),Object(B.jsx)("div",{className:"sold-overlay",children:Object(B.jsx)("img",{src:"/static/SHAZU/misc/sold-tape.png",alt:""})})]})}):Object(B.jsxs)("div",{children:[Object(B.jsx)(x.b,{open:M,maxWidth:"xs",animate:x.j,scroll:"paper",onClose:()=>{G(!1),X("")},children:Object(B.jsxs)(u.a,{style:{textAlign:"center"},children:[Object(B.jsx)("div",{className:"successCheck-lottie-container",children:Object(B.jsx)(l.a,{options:E,isClickToPauseDisabled:!0})}),Object(B.jsx)(j.a,{variant:"h3",children:"Transfer Successful!"}),Object(B.jsx)("div",{className:"elevate-card",children:Object(B.jsxs)(j.a,{variant:"h6",children:["Transferred to: ",Object(B.jsx)("br",{}),Object(B.jsx)("a",{href:"https://bscscan.com/address/".concat(Q),rel:"noreferrer",target:"_blank",children:q})]})})]})}),Object(B.jsx)(x.b,{open:Y,maxWidth:"xs",animate:x.j,scroll:"paper",onClose:()=>{V(!1)},children:Object(B.jsxs)(u.a,{style:{textAlign:"center"},children:[Object(B.jsx)("div",{className:"successCheck-lottie-container",children:Object(B.jsx)(l.a,{options:F,isClickToPauseDisabled:!0})}),Object(B.jsx)(j.a,{variant:"h3",children:"Transfer Failed"})]})}),Object(B.jsxs)(d.a,{className:"gradient-border ".concat(Z()),style:R,children:["undefined"!==typeof e.collection.saleData&&e.editListingAction&&Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("div",{className:"p-relative w-100",children:Object(B.jsx)("img",{src:"/static/SHAZU/misc/sale-sticker.svg",alt:"",className:"swing-rotate-normal",style:{position:"absolute",width:"6rem",right:"-2.4rem",top:"-2.4rem"}})})}),Object(B.jsx)("div",{style:{width:"100%",borderRadius:k.shape.borderRadiusMd,marginTop:"0.5rem",marginBottom:"0.5em"},children:Object(B.jsx)("video",{className:"vid",playsInline:!0,muted:!0,autoPlay:!0,loop:!0,style:{width:"100%",borderRadius:"8px",aspectRatio:"1"},children:Object(B.jsx)("source",{src:e.collection.nft.video,type:"video/mp4"})})}),Object(B.jsx)("div",{style:{position:"relative",height:"0",width:"0"},children:Object(B.jsx)("div",{style:z,children:e.collection.nft.rarity})}),Object(B.jsxs)(m.a,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"0.8rem"},children:[Object(B.jsxs)(m.a,{children:[Object(B.jsx)(j.a,{variant:"h6",style:{fontWeight:"700",marginBottom:"0.8rem"},children:e.collection.nft.name}),"undefined"!==typeof e.collection.id&&Object(B.jsxs)(j.a,{style:{opacity:"0.5",fontSize:"0.8rem",marginTop:"-1rem"},children:["id: ",e.collection.id]})]}),"undefined"!==typeof e.collection.description&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(b.a,{variant:"container",style:P,onClick:e=>L(e.currentTarget),children:Object(B.jsx)("img",{src:"/static/SHAZU/icons/info.svg",className:"pe-none",alt:"",style:{width:"100%",opacity:"0.5"}})}),Object(B.jsx)(h.a,{open:Boolean(W),anchorEl:W,onClose:()=>L(null),anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"center"},PaperProps:{sx:{p:1,maxWidth:200}},children:e.collection.description})]})]}),e.ownedAction&&!y&&Object(B.jsx)("div",{className:"nft-owned-action shadow-sm",children:Object(B.jsx)(m.a,{direction:"row",spacing:2,justifyContent:"space-between",alignItems:"center",children:Object(B.jsxs)(m.a,{direction:"row",spacing:1,style:{width:"100%"},children:[Object(B.jsx)(b.a,{onClick:e=>{ae(e.currentTarget)},variant:"contained",color:"yellow",className:"nft-owned-action-btn",children:"Transfer"}),Object(B.jsx)(h.a,{open:Boolean(te),anchorEl:te,onClose:()=>{ae(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(B.jsxs)(d.a,{sx:{p:2,maxWidth:"30rem",width:"90vw"},children:[Object(B.jsx)(j.a,{variant:"subtitle1",gutterBottom:!0,children:"Destination Address"}),Object(B.jsx)(H,{fullWidth:!0,type:"search",size:"small",onChange:e=>{X(e.target.value)}}),Object(B.jsxs)(j.a,{variant:"body2",sx:{color:"text.secondary",marginTop:"0.2rem"},children:[e.collection.nft.name," (",e.collection.id,")"]}),Object(B.jsx)(b.a,{disabled:!$||o,variant:"contained",color:"yellow",onClick:()=>""===Q||null===Q?(alert("Fill the Destination Address first!"),!1):Q===t?(alert("You cannot send token to yourself!"),!1):(r(t,Q,e.collection.id),K(Object(O.a)(Q)),void f(!0)),style:{marginTop:"2rem",width:"100%"},children:o?"Transferring...":"Transfer"})]})}),Object(B.jsx)(b.a,{onClick:t=>{const a=JSON.parse(t.target.value);console.info(a),e.handleOpenListingDialog(a)},value:JSON.stringify(e.collection),variant:"contained",color:"success",className:"nft-owned-action-btn",children:"List"})]})})}),"undefined"!==typeof e.amount&&Object(B.jsx)("div",{className:"p-relative w-100",children:Object(B.jsxs)("div",{className:"nft-card-amount",children:["x",e.amount]})}),"undefined"!==typeof e.collection.saleData&&e.editListingAction&&Object(B.jsx)("div",{className:"p-relative w-100",children:Object(B.jsx)("div",{className:"nft-sale-info shadow-sm",children:Object(B.jsxs)(m.a,{direction:"row",spacing:2,justifyContent:"space-between",alignItems:"center",children:[Object(B.jsxs)(m.a,{children:[Object(B.jsx)("div",{className:"nft-sale-caption",children:"Listing price"}),Object(B.jsxs)(m.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(B.jsxs)("div",{children:[n.utils.parseEther(e.collection.saleData.price).gt(n.utils.parseEther("1"))?Object(g.a)(e.collection.saleData.price):e.collection.saleData.price," ",e.collection.saleData.currency]}),"BNB"===e.collection.saleData.currency&&Object(B.jsx)("img",{src:"/static/SHAZU/icons/ic_bnb.svg",alt:"",style:{width:"1rem",height:"1rem",marginLeft:"0.2rem",marginBottom:"0.2rem"}}),"SHAZU"===e.collection.saleData.currency&&Object(B.jsx)("img",{src:"/static/SHAZU/icons/ic_shazu.png",alt:"",style:{width:"1rem",height:"1rem",marginLeft:"0.2rem",marginBottom:"0.2rem"}})]})]}),Object(B.jsx)(b.a,{variant:"container",value:JSON.stringify(e.collection),style:T,onClick:t=>{const a=JSON.parse(t.target.value);e.handleOpenEditListingDialog(a)},children:Object(B.jsx)("img",{src:"/static/SHAZU/icons/edit.svg",className:"pe-none",alt:"",style:{width:"100%",opacity:"0.5"}})})]})})}),"undefined"!==typeof e.collection.marketData&&e.marketplaceListing&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{className:"elevate-card-sm",style:{marginBottom:"1rem"},children:Object(B.jsxs)(m.a,{direction:"column",justifyContent:"space-between",children:[Object(B.jsx)("div",{style:{fontSize:"0.8rem"},children:"Price:"}),Object(B.jsxs)(m.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(B.jsxs)("div",{style:{fontSize:"1rem",fontWeight:"700"},children:[n.utils.parseEther(e.collection.saleData.price).gt(n.utils.parseEther("1"))?Object(g.a)(e.collection.saleData.price):e.collection.saleData.price," ",e.collection.saleData.currency]}),"BNB"===e.collection.saleData.currency&&Object(B.jsx)("img",{src:"/static/SHAZU/icons/ic_bnb.svg",alt:"",style:{width:"1.2rem",height:"1.2rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}}),"SHAZU"===e.collection.saleData.currency&&Object(B.jsx)("img",{src:"/static/SHAZU/icons/ic_shazu.png",alt:"",style:{width:"1.2rem",height:"1.2rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}})]})]})}),Object(B.jsx)(m.a,{direction:"row",spacing:1,children:"SHAZU"==e.collection.saleData.currency?a&&a.gte(n.utils.parseEther(e.collection.saleData.price))?Object(B.jsx)(U,{tokenId:e.collection.saleData.saleId,price:e.collection.saleData.price,seller:e.collection.saleData.seller}):Object(B.jsx)(I,{price:e.collection.saleData.price,seller:e.collection.saleData.seller}):Object(B.jsx)(A,{tokenId:e.collection.saleData.saleId,price:e.collection.saleData.price,seller:e.collection.saleData.seller})}),Object(B.jsx)(x.b,{open:ie.open,maxWidth:"xs",animate:x.j,scroll:"paper",onClose:()=>{ce({...ie,open:!1}),ne(""),de("")},children:Object(B.jsxs)(u.a,{style:{textAlign:"center"},children:[ie.success?Object(B.jsx)("div",{className:"successCheck-lottie-container",children:Object(B.jsx)(l.a,{options:E,isClickToPauseDisabled:!0})}):Object(B.jsx)("div",{className:"successCheck-lottie-container",children:Object(B.jsx)(l.a,{options:F,isClickToPauseDisabled:!0})}),Object(B.jsx)(j.a,{variant:"h3",children:se}),ie.success?Object(B.jsx)("div",{className:"elevate-card",children:Object(B.jsx)(j.a,{variant:"h5",children:re})}):Object(B.jsx)("div",{children:oe})]})})]}),"undefined"!==typeof e.collection.topSaleData&&e.topSale&&Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("div",{className:"elevate-card",style:{marginBottom:"0.4rem",marginTop:"-0.4rem"},children:Object(B.jsx)(m.a,{alignItems:"center",children:Object(B.jsxs)("div",{style:{fontSize:"1.2rem",fontWeight:"700"},children:[n.utils.parseEther(e.collection.topSaleData.price).gt(n.utils.parseEther("1"))?Object(g.a)(e.collection.topSaleData.price):e.collection.topSaleData.price," ",e.collection.topSaleData.currency]})})})})]})]})}}}]);
//# sourceMappingURL=17.e3842697.chunk.js.map