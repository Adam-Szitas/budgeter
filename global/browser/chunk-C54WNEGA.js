import{Ea as u,Fa as l,Ja as f,Nb as h,Ob as g,P as p,Qb as m,Rb as b,Sa as c,U as n,Va as v,Y as a,pa as s,rb as d}from"./chunk-IK7WNSSI.js";var i=class e{constructor(t,o){this.http=t;this.authService=o}getDocument(){return this.http.get(`${m.core}api/firestore/get/${m.token}?collection=budgeter`)}static \u0275fac=function(o){return new(o||e)(n(d),n(b))};static \u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})};var r=class e{constructor(t){this.urlService=t}getDocuments(){this.urlService.getDocument().subscribe({next:t=>{console.log(t)}})}static \u0275fac=function(o){return new(o||e)(s(i))};static \u0275cmp=a({type:e,selectors:[["app-home"]],standalone:!0,features:[v],decls:3,vars:0,consts:[["mat-raised-button","","color","primary",3,"click"]],template:function(o,C){o&1&&(c(0,"Home "),u(1,"button",0),f("click",function(){return C.getDocuments()}),c(2,"Get Documents"),l())},dependencies:[g,h],changeDetection:0})};var R=[{path:"",component:r}];export{R as homeRoutes};
