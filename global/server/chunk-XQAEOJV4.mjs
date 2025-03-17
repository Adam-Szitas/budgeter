import './polyfills.server.mjs';
import{c as G}from"./chunk-AEAVVCXL.mjs";import{a as N,b as g,c as _,d as D,f as E,g as P,h as B,i as k,j as T,k as q,l as J,m as V,n as z,o as U,p as K,q as Q,r as W,s as X}from"./chunk-YT7Z7ZJJ.mjs";import{a as H,c as L,d as j,e as O,f}from"./chunk-DQ7ZYDNY.mjs";import{k as Z,l as $,m as Y,o as tt}from"./chunk-3ZZDTXYS.mjs";import{Ka as a,Kb as S,Oa as i,Pa as r,Qa as s,Sb as F,Ta as b,Tb as w,Ub as R,W as h,Yb as A,Z as c,_b as I,ab as p,db as d,ec as x,ob as y,xa as m,ya as u,yb as M}from"./chunk-HYHJ4R7R.mjs";var C=class t{title="Budgeter";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=c({type:t,selectors:[["app-root"]],standalone:!0,features:[d],decls:1,vars:0,template:function(e,o){e&1&&s(0,"router-outlet")},dependencies:[f,H],styles:["div.wrapper[_ngcontent-%COMP%]{width:100%}"]})};var v=class t{constructor(n,e,o){this.fb=n;this.authService=e;this.router=o}formGroup;ngOnInit(){this.formGroup=this.fb.group({name:["",[g.required]],password:["",[g.required,g.minLength(6)]]})}onLogin(){this.authService.login(this.formGroup.value).subscribe({next:()=>{this.router.navigateByUrl("/home")},error:console.error})}static \u0275fac=function(e){return new(e||t)(u(k),u(tt),u(L))};static \u0275cmp=c({type:t,selectors:[["app-login"]],standalone:!0,features:[d],decls:19,vars:4,consts:[[1,"form"],[3,"ngSubmit","formGroup"],["appearance","outline"],["formControlName","name","matInput","","placeholder","Enter your name",3,"formGroup"],["formControlName","password","matInput","","type","password","placeholder","Enter your password",3,"formGroup"],[1,"buttons"],["mat-stroked-button","","type","button","color","primary",3,"routerLink"],["mat-raised-button","","color","primary"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"mat-card")(2,"mat-card-title"),p(3,"Login"),r(),i(4,"form",1),b("ngSubmit",function(){return o.onLogin()}),i(5,"mat-card-content")(6,"mat-form-field",2)(7,"mat-label"),p(8,"Name"),r(),s(9,"input",3),r(),i(10,"mat-form-field",2)(11,"mat-label"),p(12,"Password"),r(),s(13,"input",4),r(),i(14,"div",5)(15,"button",6),p(16,"Register"),r(),i(17,"button",7),p(18,"Submit"),r()()()()()()),e&2&&(m(4),a("formGroup",o.formGroup),m(5),a("formGroup",o.formGroup),m(4),a("formGroup",o.formGroup),m(2),a("routerLink","register"))},dependencies:[S,T,E,N,_,D,P,B,U,z,J,q,V,$,Z,X,K,W,Q,f,j],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;margin:100px 0}mat-form-field[_ngcontent-%COMP%]{width:100%;min-width:300px}mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center}mat-card-content[_ngcontent-%COMP%]{align-items:center;flex-direction:column}div.buttons[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between;align-items:center}"],changeDetection:0})};var et=[{path:"",component:v},{path:"home",loadChildren:()=>import("./chunk-NIHDG7TO.mjs").then(t=>t.homeRoutes)},{path:"register",loadChildren:()=>import("./chunk-27JOEVFU.mjs").then(t=>t.registerRoutes)}];var ot=(t,n)=>{let o=h(Y).getToken();if(o){let l=t.clone({setHeaders:{Authorization:`Bearer ${o}`,"Content-Type":"application/json",Accept:"application/json"}});return n(l)}else{let l=t.clone({setHeaders:{"Content-Type":"application/json",Accept:"application/json"}});return n(l)}};var rt={providers:[y({eventCoalescing:!0}),O(et),I(),x(),F(w([ot]),R())]};var at={providers:[G()]},nt=M(rt,at);var st=()=>A(C,nt),Wt=st;export{Wt as a};
