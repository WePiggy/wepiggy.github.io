(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{MFJg:function(e,a,t){e.exports=t.p+"static/placeholder.d54a0ccc.png"},S27E:function(e,a,t){e.exports={title:"_2PBmhbB_",overview:"_1DPSvJUf",cardContainer:"_3HYGKpM2",card:"_3rxzFwC8",imgBackground:"sNg0tK30",iconFont:"tcEDMQZA",right:"_1YtkCe_u",describe:"_385Ifexn",value:"_1wipL7E4",supply:"nbMXswB_",borrow:"_3Wb6b-uG",limit:"_3gG3IYFm",rightLine:"_29AXOvCU",percent:"dK75K1nv",label1:"_1ZZ6GoTZ",label2:"oAeWD4ao",overlay:"_2JPhg1rZ",overlayTitle:"_31HLsFNp",overlayContent:"_3GYqNGAt",buttonContainer:"_29LSlxQo",button:"_-9__Fs18",init:"_3T8BBo3E",lowRisk:"_3tgTrOzu",mediumRisk:"_2UdaZ3Qh",highRisk:"_3TXVhw96",pending:"_3jCRHDpS",wrap:"_1tJE6nv_",top:"_3mcSdqU6",icon:"_2QrjGHjV",bottom:"slLTQUgC",claim:"wtWjmGYy"}},UqUe:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),s=t("x3vz"),c=(t("Q9mQ"),t("diRs")),l=(t("MXD1"),t("CFYs")),o=(t("+L6B"),t("2/Rp")),i=t("d6i3"),d=t.n(i),m=t("1l/V"),u=t.n(m),b=t("qIgq"),p=t.n(b),v=t("TSYQ"),h=t.n(v),f=t("9mkV"),k=t("F0Tj"),E=t("BN5G"),y=t("aZgT"),g=t("CqnD"),x=t("xpdS"),N=t("qG63"),w=t("K2Zd"),C=t("OOd1"),_=t("biOr");function j(e){var a=e.address,t=e.chainId,n=Object(w["a"])(),r=n.allMarkets,s=Object(C["a"])({address:a}),c=s.loanTotal,l=s.supplyAssets,o=s.borrowAssets,i=s.liquidity,d=s.refreshAssets,m=Object(_["a"])({chainId:t}),u=m.comptroller;return Object(N["d"])({loanTotal:c,supplyAssets:l,borrowAssets:o,liquidity:i,refreshAssets:d,comptroller:u,markets:r})}var O=Object(N["a"])(j),S=O,M=t("sWgL"),L=t.n(M),T=t("wpUL"),A=t.n(T),B=t("0DOo"),P=t.n(B),F=t("joNU"),I=t.n(F),q=t("H0ml"),U=t("yo/t"),z=t("QiQL"),Z=t("ei41"),D=t("hUNb");function W(e){var a=e.children,t=e.modal,n=e.onConfirm,s=r.a.useState(!1),c=p()(s,2),l=c[0],o=c[1],i=r.a.useCallback((function(){o(!0)}),[]),d=r.a.useCallback((function(){o(!1)}),[]),m=r.a.useCallback((function(){o(!1),Object(D["e"])(n)&&n()}),[n]);return r.a.createElement(r.a.Fragment,null,r.a.Children.map(a,(function(e){return r.a.cloneElement(e,{onClick:i})})),r.a.cloneElement(t,{visible:l,onClose:d,onConfirm:m}))}W.defaultProps={};var R=r.a.memo(W),G=(t("sRBo"),t("kaz8")),K=t("4UEI"),Q=t("dZI8"),H=t.n(Q);function J(e){var a=e.visible,t=e.onConfirm,n=x["a"].useContext(),s=n.localizedMessage,c=Z["a"].useContext(),l=c.address,i=r.a.useState(a),m=p()(i,2),b=m[0],v=m[1],h=[{label:s({id:"page.modal.checkbox.risk.know"}),value:"true"}],f=r.a.useState(!0),y=p()(f,2),g=y[0],N=y[1],w=r.a.useState([]),C=p()(w,2),_=C[0],j=C[1],O=r.a.useCallback((function(e){j(e),Object(D["c"])(e)&&1===e.length&&"true"===e[0]?N(!1):N(!0)}),[]),S=r.a.useCallback(u()(d.a.mark((function e(){return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(k["s"])(l,!0);case 2:v(!1),t();case 4:case"end":return e.stop()}}),e)}))),[l,t]),M=r.a.useCallback(u()(d.a.mark((function e(){var n;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(k["e"])(l);case 2:n=e.sent,a&&n&&t(),v(a&&!n),j([]),N(!0);case 7:case"end":return e.stop()}}),e)}))),[a,l,t]);return r.a.useEffect((function(){M()}),[M]),r.a.createElement(K["a"],{className:H.a.modal,visible:b,title:null,width:560,closable:!1},r.a.createElement("div",{className:H.a.content},r.a.createElement("div",null,r.a.createElement(E["a"],{className:H.a.icon,type:"iconweixian"}),r.a.createElement("span",{className:H.a.title},s({id:"page.modal.security"}))),r.a.createElement("div",{className:H.a.describe},s({id:"page.modal.risk.content"})),r.a.createElement("div",{className:H.a.bottomContainer},r.a.createElement(G["a"].Group,{className:H.a.checkbox,options:h,value:_,onChange:O}),r.a.createElement(o["a"],{className:H.a.button,onClick:S,disabled:g},s({id:"page.modal.action.continue"})))))}J.defaultProps={};var X=r.a.memo(J),Y=t("yf0d"),V=t("nbK7"),$=t("p7r+"),ee=t.n($),ae=t("NhvM"),te=t.n(ae),ne=t("C4dM"),re=t.n(ne),se=t("zdW3"),ce=t.n(se);function le(){var e=Z["a"].useContext(),a=e.network,t=e.address,n=e.piggyClaim,s=e.pendingWpcAccrued,c=e.enablePiggyClaim,l=Y["a"].useContext(),o=l.addTransaction,i=x["a"].useContext(),m=i.language,b=i.localizedMessage,v=Object(N["c"])(),h=r.a.useState({}),f=p()(h,2),k=f[0],E=f[1],y=r.a.useCallback(u()(d.a.mark((function e(){var n,r,l,o,i;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!v.current){e.next=2;break}return e.abrupt("return");case 2:if(Object(D["j"])(t)){e.next=4;break}return e.abrupt("return");case 4:if(Object(D["j"])(null===a||void 0===a?void 0:a.chainId)){e.next=6;break}return e.abrupt("return");case 6:return e.prev=6,n=Object(z["q"])(null===a||void 0===a?void 0:a.chainId),r=n.platformToken,l=n.distribution,e.next=10,s(r.address,l);case 10:return o=e.sent,e.next=13,c(l);case 13:if(i=e.sent,!v.current){e.next=16;break}return e.abrupt("return");case 16:E({total:Object(q["l"])(o,1e3),enable:i}),e.next=24;break;case 19:if(e.prev=19,e.t0=e["catch"](6),!v.current){e.next=23;break}return e.abrupt("return");case 23:E({});case 24:case"end":return e.stop()}}),e,null,[[6,19]])}))),[v,t,a,s,c]);Object(z["w"])(y);var g=r.a.useCallback(u()(d.a.mark((function e(){var t,n,r,l,o;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Object(z["q"])(null===a||void 0===a?void 0:a.chainId),n=t.platformToken,r=t.distribution,e.prev=1,e.next=4,s(n.address,r);case 4:return l=e.sent,e.next=7,c(r);case 7:o=e.sent,E({total:Object(q["l"])(l,1e3),enable:o}),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),E({});case 14:case"end":return e.stop()}}),e,null,[[1,11]])}))),[a,s,c]),w=r.a.useState(),C=p()(w,2),_=C[0],j=C[1],O=r.a.useState({visible:!1}),S=p()(O,2),M=S[0],L=S[1],T=r.a.useRef(null),A=r.a.useCallback((function(e){var t=e.status,n=e.transaction,r=e.error,s=e.token,c={visible:!0,imgSrc:null,onClose:function(){L({visible:!1}),T.current=null},onClick:null,token:Object(z["s"])(null===s||void 0===s?void 0:s.address)?null:s};switch(n&&(T.current=n),T.current&&(c.onClick=function(){var e=Object(z["m"])("/tx/".concat(T.current.hash),m,null===a||void 0===a?void 0:a.chainId);window.open(e)}),t){case"Pending":c.imgSrc=ce.a,c.status=b({id:"page.modal.transaction.committing"});break;case"Success":g(),j(!1),c.imgSrc=re.a,c.status=b({id:"page.modal.transaction.done"});break;case"Failed":j(!1),c.imgSrc=ee.a,"MetaMask Tx Signature: User denied transaction signature."===r.message?(c.imgSrc=te.a,c.status=b({id:"page.modal.transaction.cancel"})):c.status=b({id:"page.modal.transaction.fail"});break;default:c.visible=!1;break}L(c)}),[m,b,a,g]),B=r.a.useCallback(u()(d.a.mark((function e(){var r,s,c,l;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return j(!0),r=Object(z["q"])(null===a||void 0===a?void 0:a.chainId),s=r.platformToken,c=r.distribution,e.prev=2,e.next=5,n(t,c);case 5:return l=e.sent,A({status:"Pending",transaction:l,token:{symbol:s.symbol,address:s.address,decimals:s.decimals}}),e.next=9,l.wait(z["d"]);case 9:o(l.hash,V["a"].claim,{symbol:s.symbol}),A({status:"Success",transaction:l,token:{symbol:s.symbol,address:s.address,decimals:s.decimals}}),e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](2),console.log(e.t0),A({status:"Failed",error:e.t0,token:{symbol:s.symbol,address:s.address,decimals:s.decimals}});case 17:case"end":return e.stop()}}),e,null,[[2,13]])}))),[a,t,n,o,A]);return Object(N["d"])({claim:B,loading:_,data:k,transactionStatus:M})}var oe=le,ie=t("TONj"),de=t("S27E"),me=t.n(de),ue=r.a.memo((function(e){var a=e.type,t=e.describe,n=e.value;return r.a.createElement("div",{className:me.a.card},r.a.createElement("div",{className:me.a.imgBackground},r.a.createElement(E["a"],{type:a,className:me.a.iconFont})),r.a.createElement("div",{className:me.a.right},r.a.createElement("div",{className:me.a.describe},t),r.a.createElement("div",{className:me.a.value},n)))})),be=r.a.memo((function(e){var a=e.value,t=x["a"].useContext(),n=t.localizedMessage;return r.a.createElement("div",{className:me.a.supply},r.a.createElement(ue,{type:"iconcunru",describe:n({id:"dashboard.my.asset.supply"}),value:Object(f["d"])(a,f["a"])}))})),pe=r.a.memo((function(e){var a=e.value,t=x["a"].useContext(),n=t.localizedMessage;return r.a.createElement("div",{className:me.a.borrow},r.a.createElement(ue,{type:"iconjiedai",describe:n({id:"dashboard.my.asset.borrow"}),value:Object(f["d"])(a,f["a"])}))})),ve=r.a.memo((function(e){var a,t=e.borrow,n=e.borrowCap;a=Object(q["o"])(n,"0")?"0":Object(q["n"])(t,n);var s=L.a,i=me.a.init,m="#00b388";Object(q["d"])(a,"1")?(s=I.a,i=me.a.highRisk,m="#e34a4a"):Object(q["c"])(a,"0.8")?(s=P.a,i=me.a.highRisk,m="#e34a4a"):Object(q["c"])(a,"0.6")?(s=A.a,i=me.a.mediumRisk,m="#ff8801"):(s=L.a,i=me.a.lowRisk,m="#00b388"),Object(q["o"])(n,"0")&&(i=me.a.init);var b=r.a.useState(!1),v=p()(b,2),E=v[0],N=v[1],w=r.a.useRef(!1);r.a.useEffect((function(){u()(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(w.current){e.next=4;break}w.current=!0,e.next=29;break;case 4:if(!Object(q["d"])(a,"1")){e.next=8;break}N(!0),e.next=27;break;case 8:if(!Object(q["c"])(a,"0.8")){e.next=26;break}return e.next=11,Object(k["b"])();case 11:if(t=e.sent,!Object(q["f"])(t,"0.8")){e.next=16;break}N(!0),e.next=24;break;case 16:if(!Object(q["d"])(Object(q["m"])(Object(q["u"])(a,t)),"0.05")){e.next=20;break}N(!0),e.next=24;break;case 20:return e.next=22,Object(k["d"])();case 22:n=e.sent,N(!0!==n);case 24:e.next=27;break;case 26:N(!1);case 27:return e.next=29,Object(k["p"])(a);case 29:case"end":return e.stop()}}),e)})))()}),[a]);var C=r.a.useCallback(u()(d.a.mark((function e(){return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(k["r"])(!0);case 2:N(!1);case 3:case"end":return e.stop()}}),e)}))),[]),_=x["a"].useContext(),j=_.localizedMessage,O=r.a.createElement("div",null,r.a.createElement("h5",{className:me.a.overlayTitle},j({id:"dashboard.popover.risk.title"})),r.a.createElement("p",{className:me.a.overlayContent},Object(q["d"])(a,"1")?j({id:"dashboard.popover.risk.liquidation.content"}):j({id:"dashboard.popover.risk.content"},{percent:Object(f["i"])(a,f["c"])})),r.a.createElement("div",{className:me.a.buttonContainer},r.a.createElement(o["a"],{className:me.a.button,onClick:C},j({id:"dashboard.popover.risk.confirm"})))),S=r.a.useCallback((function(){g["a"].info({message:j({id:"dashboard.notification.message.used"}),description:j({id:"dashboard.notification.description.used"})})}),[j]),M=r.a.useCallback((function(){g["a"].info({message:j({id:"dashboard.notification.message.max"}),description:j({id:"dashboard.notification.description.max"})})}),[j]);return r.a.createElement("div",{className:me.a.limit},r.a.createElement(y["a"],{className:me.a.imgBackground,src:s}),r.a.createElement("div",{className:me.a.right},r.a.createElement("div",{className:me.a.rightLine},r.a.createElement("div",{className:me.a.describe,onClick:S},j({id:"dashboard.my.asset.used"})),r.a.createElement("div",{className:h()(me.a.percent,i)},Object(f["i"])(a,f["c"]))),r.a.createElement(l["a"],{percent:100*a,showInfo:!1,strokeWidth:8,strokeColor:m}),r.a.createElement("div",{className:me.a.rightLine},r.a.createElement("div",{className:me.a.label1,onClick:M},j({id:"dashboard.my.asset.limit"})),r.a.createElement(c["a"],{placement:"bottomRight",content:O,overlayClassName:me.a.overlay,visible:E},r.a.createElement("div",{className:me.a.label2},Object(f["d"])(n,f["a"]))))))})),he=r.a.memo((function(e){var a,t=x["a"].useContext(),n=t.localizedMessage,s=Z["a"].useContext(),c=s.network,l=Object(z["q"])(null===c||void 0===c?void 0:c.chainId),i=l.platformToken,d=oe(),m=d.claim,u=d.loading,b=d.data,p=d.transactionStatus;return r.a.createElement("div",{className:me.a.pending},r.a.createElement("div",{className:me.a.wrap},r.a.createElement("div",{className:me.a.top},r.a.createElement(U["a"],{className:me.a.icon,name:i.symbol}),r.a.createElement("span",{className:me.a.describe},n({id:"dashboard.mint.earn.label"},{token:null!==(a=i.symbol)&&void 0!==a?a:q["a"]}))),r.a.createElement("div",{className:me.a.bottom},r.a.createElement("div",{className:me.a.value},Object(f["g"])(null===b||void 0===b?void 0:b.total,{places:2,thousands:!0,segment:{value:1,places:8}})),r.a.createElement(R,{modal:r.a.createElement(X,null),onConfirm:m},r.a.createElement(o["a"],{className:me.a.claim,loading:u,disabled:!(null===b||void 0===b?void 0:b.enable)||!Object(q["k"])(null===b||void 0===b?void 0:b.total)||Object(q["f"])(null===b||void 0===b?void 0:b.total,0)},n({id:"dashboard.claim"}))),r.a.createElement(ie["a"],p))))}));function fe(e){var a=e.className,t=x["a"].useContext(),n=t.localizedMessage,s=S.useContext(),c=s.loanTotal,l=void 0===c?{}:c;return r.a.createElement("div",{className:h()(me.a.container,a)},r.a.createElement("span",{className:me.a.title},n({id:"dashboard.my.asset"})),r.a.createElement("div",{className:me.a.overview},r.a.createElement("div",{className:me.a.cardContainer},r.a.createElement(be,{value:l.totalSupply}),r.a.createElement(pe,{value:l.totalBorrow}),r.a.createElement(ve,{borrow:l.totalBorrow,borrowCap:l.borrowCap})),r.a.createElement(he,null)))}fe.defaultProps={};var ke=r.a.memo(fe),Ee=(t("Znn+"),t("ZTPi")),ye=(t("miYZ"),t("tsqr")),ge=(t("BoS7"),t("Sdc0")),xe=t("p0pE"),Ne=t.n(xe),we=(t("5Dmo"),t("3S7+")),Ce=t("J2m7"),_e=t.n(Ce),je=t("3WF5"),Oe=t.n(je),Se=t("ArA+"),Me=t("xfM4"),Le=t.n(Me),Te=t("MFJg"),Ae=t.n(Te),Be=r.a.memo((function(e){var a=e.collateral,t=e.title,n=x["a"].useContext(),s=n.localizedMessage,c=r.a.useCallback((function(){g["a"].info({message:s({id:"dashboard.notification.message.collateral"}),description:s({id:"dashboard.notification.description.collateral"})})}),[s]);return r.a.createElement("div",{className:Le.a.tableHeader},r.a.createElement("div",{className:Le.a.headerFirst},s({id:"dashboard.table.col.asset"})),r.a.createElement("div",{className:Le.a.headerSecond},r.a.createElement(we["a"],{overlayClassName:Le.a.toolTip,arrowPointAtCenter:!0,title:s({id:"dashboard.table.col.".concat(t,".apy.total.tooltip")})},r.a.createElement("span",null,s({id:"dashboard.table.col.".concat(t,".apy.total")})))),r.a.createElement("div",{className:Le.a.headerCommon},s({id:"dashboard.table.col.".concat(t)})),r.a.createElement("div",{className:Le.a.headerCommon2},s({id:"dashboard.table.col.balance"})),a?r.a.createElement("div",{className:Le.a.headerSecondLast,onClick:c},s({id:"dashboard.table.col.collateral"}),r.a.createElement(E["a"],{className:Le.a.iconFont,type:"iconinfo-circle"})):r.a.createElement("div",{className:Le.a.headerSecondLast}),r.a.createElement("div",{className:Le.a.headerLast},s({id:"dashboard.table.col.action"})))})),Pe=r.a.memo((function(e){var a,t=null!==(a=e)&&void 0!==a?a:{},n=t.data,s=x["a"].useContext(),c=s.localizedMessage,l=S.useContext(),i=l.liquidity,m=l.comptroller,b=Ne()({},n),v=b.userSupply,h=b.userBorrow,k=b.underlyingSymbol,E=b.underlyingName,y=b.underlyingAddress,w=b.pTokenAddress,C=b.underlyingPrice,_=b.collateralFactor,j=b.isListed,O=b.isMembership,M=b.apy,L=b.apyDetail,T=b.amount,A=b.collateral,B=b.path,P=b.buttonId1,F=b.buttonId2,I=b.isBanned,D=j&&Object(q["c"])(_,"0"),W=Y["a"].useContext(),R=W.addTransaction,G=Z["a"].useContext(),K=G.getBalance,Q=G.checkMembership,H=G.enterMarkets,J=G.exitMarket,X=r.a.useState(q["a"]),$=p()(X,2),ee=$[0],ae=$[1],te=Object(N["c"])(),ne=r.a.useCallback(u()(d.a.mark((function e(){var a;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,K(y);case 2:if(a=e.sent,!te.current){e.next=5;break}return e.abrupt("return");case 5:ae(a);case 6:case"end":return e.stop()}}),e)}))),[K,te,y]);Object(z["w"])(ne);var re=r.a.useState(O),se=p()(re,2),ce=se[0],le=se[1],oe=r.a.useState(!1),ie=p()(oe,2),de=ie[0],me=ie[1],ue=r.a.useCallback(function(){var e=u()(d.a.mark((function e(a,t){var n,r;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(me(!0),e.prev=1,!0!==a){e.next=9;break}return e.next=5,H([w],m);case 5:n=e.sent,R(n.hash,V["a"].enterMarket,{symbol:k}),e.next=20;break;case 9:if(!Object(q["o"])(h,"0")||!Object(q["d"])(Object(q["u"])(i,Object(f["g"])(Object(q["r"])(Object(q["r"])(v,C),_),{places:18})),"0")){e.next=16;break}return e.next=12,J(w,m);case 12:n=e.sent,R(n.hash,V["a"].exitMarket,{symbol:k}),e.next=20;break;case 16:return g["a"].info({message:c({id:"dashboard.collateral.close.title"}),description:c({id:"dashboard.collateral.close.content"})}),le(!0),me(!1),e.abrupt("return");case 20:return e.next=22,n.wait(z["d"]);case 22:return e.next=24,Q(w,m);case 24:r=e.sent,le(r),e.next=30;break;case 28:e.prev=28,e.t0=e["catch"](1);case 30:me(!1);case 31:case"end":return e.stop()}}),e,null,[[1,28]])})));return function(a,t){return e.apply(this,arguments)}}(),[Q,w,m,H,R,k,h,i,v,C,_,J,c]);return r.a.createElement("div",{className:Le.a.row},r.a.createElement("div",{className:Le.a.itemFirst},r.a.createElement(U["a"],{className:Le.a.coin,name:k}),r.a.createElement("div",null,r.a.createElement("div",{className:Le.a.symbolWrap},r.a.createElement("div",null,k||q["a"]),I?r.a.createElement("div",{className:Le.a.status},c({id:"markets.disabled"})):null),r.a.createElement("div",{className:Le.a.name},E||q["a"]))),r.a.createElement("div",{className:Le.a.itemSecond},r.a.createElement("div",null,M),r.a.createElement("div",{className:Le.a.apyDetail},L)),r.a.createElement("div",{className:Le.a.itemCommon},Object(f["g"])(T,f["b"])),r.a.createElement("div",{className:Le.a.itemCommon2},Object(f["g"])(ee,f["b"])),r.a.createElement("div",{className:Le.a.itemSecondLast},A&&D?r.a.createElement(ge["a"],{checked:ce,onClick:ue,loading:de}):r.a.createElement("div",null)),r.a.createElement("div",{className:Le.a.itemLast},r.a.createElement(o["a"],{className:Le.a.button1,onClick:function(){I?ye["a"].info(c({id:"error.markets.disabled"})):Se["router"].push("/".concat(B,"?tab=0&symbol=").concat(k))}},c({id:P})),r.a.createElement(o["a"],{className:Le.a.button2,onClick:function(){return Se["router"].push("/".concat(B,"?tab=1&symbol=").concat(k))}},c({id:F}))))})),Fe=r.a.memo((function(e){var a=e.className,t=e.path,n=e.msg,s=x["a"].useContext(),c=s.localizedMessage;return r.a.createElement("div",{className:Le.a.placeholder},r.a.createElement(y["a"],{className:Le.a.icon,src:Ae.a}),r.a.createElement("div",{className:Le.a.text},c({id:"dashboard.table.empty.".concat(n)})," "),r.a.createElement(o["a"],{className:h()(Le.a.button,a),onClick:function(){return Se["router"].push("/".concat(t,"?tab=0"))}},c({id:"dashboard.table.empty.action.".concat(n)})))})),Ie=r.a.memo((function(e){var a=e.className,t=S.useContext(),n=t.supplyAssets,s=t.markets,c=Oe()(n,(function(e,a){var t=_e()(s,(function(a){return a.symbol===e.symbol})),n={userSupply:e.userSupply,userBorrow:e.userBorrow,underlyingSymbol:e.symbol,underlyingName:e.name,underlyingAddress:e.underlyingAddress,pTokenAddress:e.pTokenAddress,underlyingPrice:e.usdPrice,collateralFactor:e.collateralFactor,isListed:e.isListed,isMembership:e.isMembership,apy:Object(f["i"])(null===t||void 0===t?void 0:t.supplySumApy),apyDetail:null===t||void 0===t?void 0:t.supplySumApyExp,amount:e.userSupplyNew,collateral:!0,path:"access",buttonId1:"dashboard.table.action.supply",buttonId2:"dashboard.table.action.redeem",isBanned:null===t||void 0===t?void 0:t.isBanned};return r.a.createElement(Pe,{key:a,data:n})}));return r.a.createElement("div",{className:a},r.a.createElement(Be,{collateral:!0,title:"supply"}),r.a.createElement("div",null,Object(D["c"])(n)?c:r.a.createElement(Fe,{className:Le.a.supply,path:"access",msg:"supply"})))})),qe=r.a.memo((function(e){var a=e.className,t=S.useContext(),n=t.borrowAssets,s=t.markets,c=Oe()(n,(function(e,a){var t=_e()(s,(function(a){return a.symbol===e.symbol})),n={userSupply:e.userSupply,userBorrow:e.userBorrow,underlyingSymbol:e.symbol,underlyingName:e.name,underlyingAddress:e.underlyingAddress,pTokenAddress:e.pTokenAddress,underlyingPrice:e.usdPrice,collateralFactor:e.collateralFactor,isListed:e.isListed,isMembership:e.isMembership,apy:Object(f["i"])(null===t||void 0===t?void 0:t.borrowSumApy),apyDetail:null===t||void 0===t?void 0:t.borrowSumApyExp,amount:e.userBorrowNew,collateral:!1,path:"borrow",buttonId1:"dashboard.table.action.borrow",buttonId2:"dashboard.table.action.repay",isBanned:null===t||void 0===t?void 0:t.isBanned};return r.a.createElement(Pe,{key:a,data:n})}));return r.a.createElement("div",{className:a},r.a.createElement(Be,{collateral:!1,title:"borrow"}),r.a.createElement("div",null,Object(D["c"])(n)?c:r.a.createElement(Fe,{className:Le.a.borrow,path:"borrow",msg:"borrow"})))}));function Ue(e){var a=e.className,t=x["a"].useContext(),n=t.localizedMessage,s=r.a.useState(),c=p()(s,2),l=c[0],o=c[1];r.a.useEffect((function(){o(Le.a.tab1)}),[]);var i=r.a.useCallback((function(e){o("1"===e?Le.a.tab1:Le.a.tab2)}),[]);return r.a.createElement("div",{className:h()(Le.a.container,a)},r.a.createElement(Ee["a"],{className:h()(Le.a.tabs,l),onChange:i},r.a.createElement(Ee["a"].TabPane,{tab:n({id:"dashboard.tab.supply"}),key:"1"},r.a.createElement(Ie,{className:Le.a.tabPane1})),r.a.createElement(Ee["a"].TabPane,{tab:n({id:"dashboard.tab.borrow"}),key:"2"},r.a.createElement(qe,{className:Le.a.tabPane2}))))}Ue.defaultProps={};var ze=r.a.memo(Ue),Ze=t("y/q7"),De=t.n(Ze);function We(e){var a=Z["a"].useContext(),t=a.address,n=a.network;return Object(D["i"])(t)?r.a.createElement("div",{className:De.a.container},r.a.createElement(S.Provider,{address:t,chainId:null===n||void 0===n?void 0:n.chainId},r.a.createElement(ke,{className:De.a.info}),r.a.createElement(ze,{className:De.a.table}))):r.a.createElement(s["a"],null)}We.defaultProps={};a["default"]=r.a.memo(We)},dZI8:function(e,a,t){e.exports={modal:"_2uhoXVux",content:"_2ILGa1W7",icon:"lfPBUhTe",title:"_1zSIfbQB",strong:"_2k-Ztvra",describe:"_2p2eLkL0",describe2:"_3b_m9UU1",bottomContainer:"WpJ1yRg_",checkbox:"_15g3Ysvl",button:"hvWatlJP"}},xfM4:function(e,a,t){e.exports={container:"_16a8_q_Z",warning:"_3dYmeXG-",icon:"_10Mqs-ko",label:"_3oH1mW7E",tableHeader:"_1Lmc7kHn",headerFirst:"_2IqZD-P1",headerSecond:"_1UFYqSdH",headerCommon:"_2KCVZMSa",headerCommon2:"WuAxLtSw",headerSecondLast:"_3bLf252a",headerLast:"_32AB3cGX",iconFont:"_3_tzbxf-",row:"_1wmUqIBj",itemFirst:"_1DnohsPI",coin:"_1EQQ7Lri",symbolWrap:"UcIFF0VS",status:"_3xKzLAXK",name:"_1KsHqi46",itemSecond:"n5LiYPPD",itemCommon:"_1SJ1vXma",itemCommon2:"_3r9D8nm1",itemSecondLast:"_2UdVZXTM",itemLast:"_2Ls-_EWZ",button1:"_3qLSm4m1",button2:"XMth0Fta",tabs:"_3W2OVNvx",tab1:"_2SHbRe95",tab2:"_4grX6sLD",tabPane1:"_1MgcnnBn",tabPane2:"DJKV2wvb",placeholder:"_28KE9ZJT",text:"_2MsuSz-x",button:"_3iUOSuMP",supply:"ByM8XEW5",borrow:"_3avsKHgn",toolTip:"_1-ujniyx",apyDetail:"_2dKUf2Ko"}},"y/q7":function(e,a,t){e.exports={container:"_1S8GC-7Q",info:"_3nQE_TWE",table:"_3qVFoy6N"}}}]);