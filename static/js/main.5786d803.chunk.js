(this["webpackJsonpweb-game"]=this["webpackJsonpweb-game"]||[]).push([[0],{80:function(e,t,c){},82:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(27),i=c.n(s),j=(c(80),c(81),c(82),c(83),c(5)),o=c(117),a=c(122),l=c(6),d=c(14),b=c(25),O=c(9),u=c(121),x=c(23),h=c(0),f=["className"],m=Object(O.a)((function(e){var t=e.className,c=Object(b.a)(e,f);return Object(h.jsx)(u.a,Object(d.a)(Object(d.a)({},c),{},{classes:{popper:t}}))}))((function(e){var t=e.theme;return Object(l.a)({},"& .".concat(x.a.tooltip),{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:400,fontSize:t.typography.pxToRem(15),border:"1px solid #dadde9"})})),v=Object(n.createContext)();function E(e){var t=Object(n.useState)(0),c=Object(j.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(1),o=Object(j.a)(i,2),a=o[0],l=o[1],d=Object(n.useMemo)((function(){return{bottleAmount:r,setBottleAmount:s,productionEfficiency:a,setProductionEfficiency:l}}),[r,s,a,l]);return Object(h.jsx)(v.Provider,{value:d,children:e.children})}var S=function(){return Object(n.useContext)(v)},p=Object(n.createContext)();function C(e){var t=Object(n.useState)(0),c=Object(j.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(1),o=Object(j.a)(i,2),a=o[0],l=o[1],d=Object(n.useMemo)((function(){return{capitalAmount:r,setCapitalAmount:s,salesEfficiency:a,setSalesEfficiency:l}}),[r,s,a,l]);return Object(h.jsx)(p.Provider,{value:d,children:e.children})}var g=function(){return Object(n.useContext)(p)},A=Object(n.createContext)();function T(e){var t=Object(n.useState)(0),c=Object(j.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(1),o=Object(j.a)(i,2),a=o[0],l=o[1],d=Object(n.useMemo)((function(){return{workerAmount:r,setWorkerAmount:s,workerEfficiency:a,setWorkerEfficiency:l}}),[r,s,a,l]);return Object(h.jsx)(A.Provider,{value:d,children:e.children})}var N=function(){return Object(n.useContext)(A)},y=Object(n.createContext)();function P(e){var t=Object(n.useState)(0),c=Object(j.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(1),o=Object(j.a)(i,2),a=o[0],l=o[1],d=Object(n.useMemo)((function(){return{salesPersonAmount:r,setSalesPersonAmount:s,salesPersonEfficiency:a,setSalesPersonEfficiency:l}}),[r,s,a,l]);return Object(h.jsx)(y.Provider,{value:d,children:e.children})}var w=function(){return Object(n.useContext)(y)};function R(e){var t=Object(n.useState)(!1),c=Object(j.a)(t,2),r=c[0],s=c[1],i=S(),l=i.bottleAmount,d=i.setBottleAmount,b=i.productionEfficiency,O=g(),u=(O.capitalAmount,O.setCapitalAmount),x=O.salesEfficiency,f=N(),v=f.workerAmount,E=f.setWorkerAmount,p=(f.workerEfficiency,w()),C=p.salesPersonAmount,A=p.setSalesPersonAmount,T=p.salesPersonEfficiency;Object(n.useEffect)((function(){var e=setInterval((function(){console.log("start"),d((function(e){return e+v})),l-T>=0&&(d((function(e){return e-T*C})),u((function(e){return e+T*C}))),s((function(e){return!e}))}),1e3);return function(){return window.clearInterval(e)}}),[r]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(o.a,{mb:5,mt:3,p:2,spacing:12,direction:"row",justifyContent:"center",children:[Object(h.jsx)(m,{title:Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{children:["PRODUCE ",b," BOTTLES"]})}),followCursor:!0,children:Object(h.jsx)(a.a,{onClick:function(){d((function(e){return e+b}))},variant:"contained",children:"PRODUCE BOTTLE"})}),Object(h.jsx)(m,{title:Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{children:["SELL ",x," BOTTLES"]})}),followCursor:!0,children:Object(h.jsx)(a.a,{onClick:function(){l-x>=0&&(d((function(e){return e-x})),u((function(e){return e+x})))},variant:"contained",color:"success",children:"SELL BOTTLE"})})]}),Object(h.jsx)("h4",{children:"EMPLOYEES"}),Object(h.jsxs)(o.a,{p:2,spacing:5,direction:"row",justifyContent:"center",children:[Object(h.jsxs)(o.a,{spacing:3,direction:"column",justifyContent:"center",children:[Object(h.jsx)(m,{title:Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{children:"hire (hireWorkerEfficiency) workers"})}),followCursor:!0,children:Object(h.jsx)(a.a,{onClick:function(){E((function(e){return e+1}))},variant:"contained",children:"HIRE WORKER"})}),Object(h.jsx)(m,{title:Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{children:"hire (hireWorkerManagerEfficiency) production managers"})}),followCursor:!0,children:Object(h.jsx)(a.a,{variant:"contained",children:"HIRE PRODUCTION MANAGER"})})]}),Object(h.jsxs)(o.a,{spacing:3,direction:"column",justifyContent:"center",children:[Object(h.jsx)(m,{title:Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{children:"hire (hireSalesPersonEfficiency) sales people"})}),followCursor:!0,children:Object(h.jsx)(a.a,{onClick:function(){A((function(e){return e+1}))},color:"success",variant:"contained",children:"HIRE SALESPERSON"})}),Object(h.jsx)(m,{title:Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{children:"hire (hireSalesPersonManagerEfficiency) sales managers"})}),followCursor:!0,children:Object(h.jsx)(a.a,{color:"success",variant:"contained",children:"HIRE SALES MANAGER"})})]})]})]})}var I=c(125);function F(e){var t=S().bottleAmount,c=g().capitalAmount,n=N(),r=n.workerAmount,s=n.workerEfficiency,i=w(),j=i.salesPersonAmount,l=i.salesPersonEfficiency;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(o.a,{mb:5,p:2,spacing:8,direction:"row",justifyContent:"center",children:[Object(h.jsxs)(I.a,{children:[Object(h.jsx)("div",{className:"statTitle",children:"WATER BOTTLES"}),Object(h.jsx)("div",{className:"statText",children:t})]}),Object(h.jsxs)(I.a,{children:[Object(h.jsx)("div",{className:"statTitle",children:"CAPITAL"}),Object(h.jsxs)("div",{className:"statText",children:["$ ",c]})]})]}),Object(h.jsx)("h4",{children:"EMPLOYEES"}),Object(h.jsxs)(o.a,{p:2,spacing:2,direction:"row",justifyContent:"center",children:[Object(h.jsx)(m,{title:Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{children:["produces ",s," bottle(s) every second"]})}),followCursor:!0,children:Object(h.jsxs)(I.a,{className:"box",children:[Object(h.jsx)("div",{className:"boxTitle",children:"WORKERS"}),Object(h.jsx)("div",{className:"boxText",children:r})]})}),Object(h.jsx)(m,{title:Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{children:["sells ",l," bottle(s) every second"]})}),followCursor:!0,children:Object(h.jsxs)(I.a,{className:"box",children:[Object(h.jsx)("div",{className:"boxTitle",children:"SALESPEOPLE"}),Object(h.jsx)("div",{className:"boxText",children:j})]})})]}),Object(h.jsxs)(o.a,{p:2,spacing:2,direction:"row",justifyContent:"center",children:[Object(h.jsx)(m,{title:Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{children:"hires (production manager efficiency) workers every second"})}),followCursor:!0,children:Object(h.jsxs)(I.a,{className:"box",children:[Object(h.jsx)("div",{className:"boxTitle",children:"PRODUCTION MANAGERS"}),Object(h.jsx)("div",{className:"boxText",children:"(number of production managers)"}),Object(h.jsx)(a.a,{variant:"contained",size:"small",children:"STOP HIRING"})]})}),Object(h.jsx)(m,{title:Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{children:"hires (sales manager efficiency) salespeople every second"})}),followCursor:!0,children:Object(h.jsxs)(I.a,{className:"box",children:[Object(h.jsx)("div",{className:"boxTitle",children:"SALES MANAGERS"}),Object(h.jsx)("div",{className:"boxText",children:"(number of sales managers)"}),Object(h.jsx)(a.a,{color:"success",variant:"contained",size:"small",children:"STOP HIRING"})]})})]})]})}function k(e){return Object(h.jsx)(h.Fragment,{children:"info"})}var L=c(58),M=c.n(L),G=c(59),W=c.n(G);function D(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(o.a,{p:2,spacing:2,direction:"row",justifyContent:"center",children:[Object(h.jsx)(m,{title:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h5",{children:"COST: \u20ac800"}),Object(h.jsx)("div",{children:"Workers produce (workerEfficiency) bottles per second"})]}),followCursor:!0,children:Object(h.jsx)(a.a,{variant:"contained",startIcon:Object(h.jsx)(M.a,{sx:{fontSize:50}}),children:"WORKER"})}),Object(h.jsx)(m,{title:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h5",{children:"COST: \u20ac100.000"}),Object(h.jsx)("div",{children:"Production managers hire (productionManagerEfficiency) workers per second"})]}),followCursor:!0,children:Object(h.jsx)(a.a,{variant:"contained",startIcon:Object(h.jsx)(W.a,{sx:{fontSize:50}}),children:"PRODUCTION MANAGER"})})]}),Object(h.jsxs)(o.a,{p:2,spacing:2,direction:"row",justifyContent:"center",children:[Object(h.jsx)(m,{title:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h5",{children:"COST: \u20ac800"}),Object(h.jsx)("div",{children:"Sales people sell (salesEfficiency) bottles per second"})]}),followCursor:!0,children:Object(h.jsx)(a.a,{color:"success",variant:"contained",startIcon:Object(h.jsx)(M.a,{sx:{fontSize:50}}),children:"SALESPERSON"})}),Object(h.jsx)(m,{title:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h5",{children:"COST: \u20ac100.000"}),Object(h.jsx)("div",{children:"Sales managers hire (SalesManagerEfficiency) sales people per second"})]}),followCursor:!0,children:Object(h.jsx)(a.a,{color:"success",variant:"contained",startIcon:Object(h.jsx)(W.a,{sx:{fontSize:50}}),children:"SALES MANAGER"})})]})]})}var B=c(123),U=c(124);function z(e){var t=e.title;return Object(h.jsxs)(B.a,{className:"Panel",children:[Object(h.jsx)(U.a,{title:t,sx:{backgroundColor:"rgba(75,75,212,0.85)"}}),Object(h.jsx)(H,{title:t})]})}function H(e){var t=e.title;return"STATISTICS"===t?Object(h.jsx)(F,{}):"INFO"===t?Object(h.jsx)(k,{}):"UPGRADES"===t?Object(h.jsx)(D,{}):"PRODUCTION / MANAGEMENT"===t?Object(h.jsx)(R,{}):Object(h.jsx)(h.Fragment,{})}var K=c(118),J=c(119),Y=c(120);function $(e){return Object(h.jsx)(K.a,{fluid:!0,children:Object(h.jsxs)(J.a,{children:[Object(h.jsx)(Y.a,{sm:4,children:Object(h.jsx)(z,{title:"STATISTICS"})}),Object(h.jsxs)(Y.a,{sm:4,children:[Object(h.jsx)(z,{title:"INFO"}),Object(h.jsx)(z,{title:"PRODUCTION / MANAGEMENT"})]}),Object(h.jsx)(Y.a,{sm:4,children:Object(h.jsx)(z,{title:"UPGRADES"})})]})})}function q(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)($,{})})}var Q=function(){return Object(h.jsx)(E,{children:Object(h.jsx)(C,{children:Object(h.jsx)(T,{children:Object(h.jsx)(P,{children:Object(h.jsx)(q,{})})})})})},V=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,126)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(Q,{})}),document.getElementById("root")),V()}},[[90,1,2]]]);
//# sourceMappingURL=main.5786d803.chunk.js.map