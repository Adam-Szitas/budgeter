import './polyfills.server.mjs';
import{c as G}from"./chunk-KTYSPMZU.mjs";import{a as O,b as g,c as N,d as _,f as D,g as E,h as P,i as B,j as k,k as T,l as q,m as J,n as V,o as z,p as $,q as K,r as Q,s as W,t as X,u as Y}from"./chunk-7NDJFHJM.mjs";import{a as x,c as H,d as L,e as j,f}from"./chunk-KMFYZL7R.mjs";import{k as U,l as Z}from"./chunk-PXDRA6TY.mjs";import{Ka as a,Kb as S,Oa as i,Pa as n,Qa as s,Sb as F,Ta as b,Tb as w,W as h,Xb as R,Z as c,Zb as A,ab as p,db as d,dc as I,ob as y,xa as m,ya as u,yb as M}from"./chunk-KGD56N57.mjs";var C=class t{title="Budgeter";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=c({type:t,selectors:[["app-root"]],standalone:!0,features:[d],decls:1,vars:0,template:function(e,o){e&1&&s(0,"router-outlet")},dependencies:[f,x],styles:["div.wrapper[_ngcontent-%COMP%]{width:100%}"]})};var v=class t{constructor(r,e,o){this.fb=r;this.authService=e;this.router=o}formGroup;ngOnInit(){this.formGroup=this.fb.group({name:["",[g.required]],password:["",[g.required,g.minLength(6)]]})}onLogin(){this.authService.login(this.formGroup.value).subscribe({next:()=>{this.router.navigateByUrl("/home")},error:console.error})}static \u0275fac=function(e){return new(e||t)(u(B),u(Y),u(H))};static \u0275cmp=c({type:t,selectors:[["app-login"]],standalone:!0,features:[d],decls:19,vars:4,consts:[[1,"form"],[3,"ngSubmit","formGroup"],["appearance","outline"],["formControlName","name","matInput","","placeholder","Enter your name",3,"formGroup"],["formControlName","password","matInput","","type","password","placeholder","Enter your password",3,"formGroup"],[1,"buttons"],["mat-stroked-button","","type","button","color","primary",3,"routerLink"],["mat-raised-button","","color","primary"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"mat-card")(2,"mat-card-title"),p(3,"Login"),n(),i(4,"form",1),b("ngSubmit",function(){return o.onLogin()}),i(5,"mat-card-content")(6,"mat-form-field",2)(7,"mat-label"),p(8,"Name"),n(),s(9,"input",3),n(),i(10,"mat-form-field",2)(11,"mat-label"),p(12,"Password"),n(),s(13,"input",4),n(),i(14,"div",5)(15,"button",6),p(16,"Register"),n(),i(17,"button",7),p(18,"Submit"),n()()()()()()),e&2&&(m(4),a("formGroup",o.formGroup),m(5),a("formGroup",o.formGroup),m(4),a("formGroup",o.formGroup),m(2),a("routerLink","register"))},dependencies:[S,k,D,O,N,_,E,P,z,V,q,T,J,Z,U,W,$,Q,K,f,L],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;margin:100px 0}mat-form-field[_ngcontent-%COMP%]{width:100%;min-width:300px}mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center}mat-card-content[_ngcontent-%COMP%]{align-items:center;flex-direction:column}div.buttons[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between;align-items:center}"],changeDetection:0})};var tt=[{path:"",component:v},{path:"home",loadChildren:()=>import("./chunk-32PMSFPV.mjs").then(t=>t.homeRoutes)},{path:"register",loadChildren:()=>import("./chunk-ZEMO2PTT.mjs").then(t=>t.registerRoutes)}];var et=(t,r)=>{let o=h(X).getToken();if(o){let l=t.clone({setHeaders:{Authorization:`Bearer ${o}`,"Content-Type":"application/json",Accept:"application/json"}});return r(l)}else{let l=t.clone({setHeaders:{"Content-Type":"application/json",Accept:"application/json"}});return r(l)}return r(t)};var ot={providers:[y({eventCoalescing:!0}),j(tt),A(),I(),F(w([et]))]};var mt={providers:[G()]},rt=M(ot,mt);var at=()=>R(C,rt),Qt=at;export{Qt as a};
