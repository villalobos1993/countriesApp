import{A as S,B as O,C as _,D as a,E as C,F as I,G as V,H as ie,I as oe,J as L,K as re,L as E,M as h,N as ae,O as se,P as ce,T as le,V as pe,W as me,Y as G,Z as ue,a as W,b as z,c as X,d as J,e as Y,f as Z,g as v,h as ee,i as T,j as te,k as w,l as N,m as ne,n as K,o as D,p as s,q as u,r as p,s as M,t as m,u as l,v as o,w as i,x as c,y as F,z as y}from"./chunk-6ZWZ4TPP.js";var d=class n{constructor(t){this.httpClient=t;this.loadToLocalStorage()}apiUrl="https://restcountries.com/v3.1";cacheStore={byCapital:{term:"",countries:[]},byCountry:{term:"",countries:[]},byRegion:{region:"",countries:[]}};saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadToLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(t){return this.httpClient.get(t).pipe(J(()=>z([])))}searchCountryByAlphaCode(t){let e=`${this.apiUrl}/alpha/${t}`;return this.httpClient.get(e).pipe(X(r=>r.length>0?r[0]:null),J(()=>z(null)))}searchCapital(t){let e=`${this.apiUrl}/capital/${t}`;return this.getCountriesRequest(e).pipe(v(r=>this.cacheStore.byCapital={term:t,countries:r}),v(()=>this.saveToLocalStorage()))}searchRegion(t){let e=`${this.apiUrl}/region/${t}`;return this.getCountriesRequest(e).pipe(v(r=>this.cacheStore.byRegion={region:t,countries:r}),v(()=>this.saveToLocalStorage()))}searchCountry(t){let e=`${this.apiUrl}/name/${t}`;return this.getCountriesRequest(e).pipe(v(r=>this.cacheStore.byCountry={term:t,countries:r}),v(()=>this.saveToLocalStorage()))}static \u0275fac=function(e){return new(e||n)(te(ce))};static \u0275prov=ee({token:n,factory:n.\u0275fac,providedIn:"root"})};var P=class n{debouncer=new W;debouncerSubscription;placeholder="";initialValue="";onValue=new K;onDebounce=new K;ngOnInit(){this.debouncerSubscription=this.debouncer.pipe(Y(300)).subscribe(t=>{this.onDebounce.emit(t)})}ngOnDestroy(){this.debouncerSubscription?.unsubscribe()}sendEmitter(t){this.onValue.emit(t)}onKeyPress(t){this.debouncer.next(t)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder",initialValue:"initialValue"},outputs:{onValue:"onValue",onDebounce:"onDebounce"},standalone:!1,decls:2,vars:2,consts:[["txtSearchInput",""],["type","text",1,"form-control",3,"keyup","placeholder","value"]],template:function(e,r){if(e&1){let g=F();o(0,"input",1,0),y("keyup",function(){w(g);let ye=_(1);return N(r.onKeyPress(ye.value))}),i()}e&2&&l("placeholder",r.placeholder)("value",r.initialValue)},encapsulation:2})};var B=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["shared-loading-spinner"]],standalone:!1,decls:15,vars:0,consts:[[1,"spinner-container","bg-dark"],["width","30","height","30","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(e,r){e&1&&(o(0,"div",0)(1,"span"),a(2,"Buscando"),i(),ne(),o(3,"svg",1)(4,"g",2)(5,"circle",3),c(6,"animate",4)(7,"animate",5)(8,"animate",6),i(),o(9,"circle",3),c(10,"animate",7)(11,"animate",8)(12,"animate",9),i(),o(13,"circle",10),c(14,"animate",11),i()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{position:fixed;bottom:15px;right:15px;background-color:#000;color:#fff;padding:5px 10px;border-radius:20px;display:flex;align-items:center;box-shadow:0 0 5px #000}span[_ngcontent-%COMP%]{margin-left:5px}"]})};var he=n=>["/countries/by",n];function be(n,t){n&1&&(o(0,"div",2),a(1,` No hay paises que mostrar
`),i())}function ve(n,t){if(n&1&&(o(0,"tr")(1,"td"),a(2),i(),o(3,"td"),a(4),i(),o(5,"td"),c(6,"img",5),i(),o(7,"td"),a(8),i(),o(9,"td"),a(10),i(),o(11,"td"),a(12),ie(13,"number"),i(),o(14,"td")(15,"a",6),a(16,"Ver mas"),i()()()),n&2){let e=t.$implicit,r=t.index;s(2),C(r+1),s(2),C(e.flag),s(2),O("src",e.flags.svg,D),O("alt",e.flags.alt),s(2),C(e.name.common),s(2),C(e.capital),s(2),C(oe(13,8,e.population)),s(3),l("routerLink",V(10,he,e.cca3))}}function Se(n,t){if(n&1&&(o(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),i(),o(5,"th"),a(6,"Icono"),i(),o(7,"th"),a(8,"Bandera"),i(),o(9,"th"),a(10,"Nombre"),i(),o(11,"th"),a(12,"Capital"),i(),o(13,"th"),a(14,"Poblaci\xF3n"),i(),c(15,"th"),i()(),m(16,ve,17,12,"tr",4),i()),n&2){let e=S();s(16),l("ngForOf",e.countries)}}var b=class n{countries=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["countries-table"]],inputs:{countries:"countries"},standalone:!1,decls:3,vars:2,consts:[["table",""],["class","alert alert-warning",4,"ngIf","ngIfElse"],[1,"alert","alert-warning"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(e,r){if(e&1&&m(0,be,2,0,"div",1)(1,Se,17,1,"ng-template",null,0,L),e&2){let g=_(2);l("ngIf",r.countries.length===0)("ngIfElse",g)}},dependencies:[E,h,me,ae],styles:["img[_ngcontent-%COMP%]{width:35px}"]})};function xe(n,t){n&1&&c(0,"shared-loading-spinner")}var $=class n{constructor(t){this.countriesServices=t}isLoading=!1;countries=[];initialValue="";ngOnInit(){this.countries=this.countriesServices.cacheStore.byCapital.countries,this.initialValue=this.countriesServices.cacheStore.byCapital.term}searchByCapital(t){this.isLoading=!0,this.countriesServices.searchCapital(t).subscribe(e=>{this.countries=e,this.isLoading=!1})}static \u0275fac=function(e){return new(e||n)(u(d))};static \u0275cmp=p({type:n,selectors:[["app-by-capital-page"]],standalone:!1,decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por Capital",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(e,r){e&1&&(o(0,"h2"),a(1,"Por Capital"),i(),c(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),y("onDebounce",function(x){return r.searchByCapital(x)}),i()()(),o(6,"div",0)(7,"div",1),c(8,"hr"),m(9,xe,1,0,"shared-loading-spinner",3),c(10,"countries-table",4),i()()),e&2&&(s(5),l("initialValue",r.initialValue),s(4),l("ngIf",r.isLoading),s(),l("countries",r.countries))},dependencies:[h,P,B,b],encapsulation:2})};var _e=n=>({"btn-outline-primary":n});function Ie(n,t){if(n&1){let e=F();o(0,"button",5),y("click",function(){let g=w(e).$implicit,x=S();return N(x.searchByRegion(g))}),a(1),i()}if(n&2){let e=t.$implicit,r=S();l("ngClass",V(2,_e,r.selectedRegion===e)),s(),I(" ",e," ")}}var A=class n{constructor(t){this.countriesServices=t}countries=[];regions=["Africa","America","Asia","Europe","Oceania"];selectedRegion;ngOnInit(){this.selectedRegion=this.countriesServices.cacheStore.byRegion.region,this.countries=this.countriesServices.cacheStore.byRegion.countries}searchByRegion(t){this.selectedRegion=t,this.countriesServices.searchRegion(t).subscribe(e=>{this.countries=e})}static \u0275fac=function(e){return new(e||n)(u(d))};static \u0275cmp=p({type:n,selectors:[["app-by-region-page"]],standalone:!1,decls:10,vars:2,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","mx-2",3,"click","ngClass"]],template:function(e,r){e&1&&(o(0,"h2"),a(1,"Por Region"),i(),c(2,"hr"),o(3,"div",0)(4,"div",1),m(5,Ie,2,4,"button",2),i()(),o(6,"div",0)(7,"div",3),c(8,"hr")(9,"countries-table",4),i()()),e&2&&(s(5),l("ngForOf",r.regions),s(4),l("countries",r.countries))},dependencies:[re,E,b],encapsulation:2})};function Ee(n,t){n&1&&c(0,"shared-loading-spinner")}var U=class n{constructor(t){this.countriesServices=t}isLoading=!1;countries=[];initialValue="";ngOnInit(){this.countries=this.countriesServices.cacheStore.byCountry.countries,this.initialValue=this.countriesServices.cacheStore.byCountry.term}searchByPais(t){this.isLoading=!0,this.countriesServices.searchCountry(t).subscribe(e=>{this.countries=e,this.isLoading=!1})}static \u0275fac=function(e){return new(e||n)(u(d))};static \u0275cmp=p({type:n,selectors:[["app-by-country-page"]],standalone:!1,decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por Pais",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(e,r){e&1&&(o(0,"h2"),a(1,"Por Pais"),i(),c(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),y("onDebounce",function(x){return r.searchByPais(x)}),i()()(),o(6,"div",0)(7,"div",1),c(8,"hr"),m(9,Ee,1,0,"shared-loading-spinner",3),c(10,"countries-table",4),i()()),e&2&&(s(5),l("initialValue",r.initialValue),s(4),l("ngIf",r.isLoading),s(),l("countries",r.countries))},dependencies:[h,P,B,b],encapsulation:2})};function Pe(n,t){n&1&&(o(0,"div",11),a(1," Espere por favor "),i())}function Re(n,t){if(n&1&&(o(0,"div")(1,"div",2)(2,"div",12)(3,"h2"),a(4," Pa\xEDs: "),o(5,"strong"),a(6),i()()()()()),n&2){let e=S();s(6),C(e.country.name.common)}}function Be(n,t){if(n&1&&(o(0,"span",13),a(1),i()),n&2){let e=t.$implicit;s(),I(" ",e.common," ")}}var q=class n{constructor(t,e,r){this.activatedRoute=t;this.countriesService=e;this.router=r}country;bre;get translations(){return Object.values(this.country.translations)}ngOnInit(){this.activatedRoute.params.pipe(Z(({id:t})=>this.countriesService.searchCountryByAlphaCode(t))).subscribe(t=>t?this.country=t:this.router.navigateByUrl(""))}static \u0275fac=function(e){return new(e||n)(u(le),u(d),u(pe))};static \u0275cmp=p({type:n,selectors:[["app-country-page"]],standalone:!1,decls:26,vars:6,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"row"],[1,"col-4"],["alt","country.name.common",1,"img-thumbnail",3,"src"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],["class","badge bg-primary m-1",4,"ngFor","ngForOf"],[1,"alert","alert-info","text-center"],[1,"col-12"],[1,"badge","bg-primary","m-1"]],template:function(e,r){if(e&1&&(m(0,Pe,2,0,"ng-template",null,0,L)(2,Re,7,1,"div",1),o(3,"div",2)(4,"div",3)(5,"h3"),a(6," Bandera "),i(),c(7,"img",4),i(),o(8,"div",5)(9,"h3"),a(10,"Informaci\xF3n"),i(),o(11,"ul",6)(12,"li",7)(13,"strong"),a(14,"Poblacion:"),i(),a(15),i(),o(16,"li",7)(17,"strong"),a(18,"Codigo:"),i(),a(19),i()()(),o(20,"div",8)(21,"div",5)(22,"h3"),a(23,"Traducciones"),i(),o(24,"div",9),m(25,Be,2,1,"span",10),i()()()()),e&2){let g=_(1);s(2),l("ngIf",r.country)("ngIfElse",g),s(5),O("src",r.country==null||r.country.flags==null?null:r.country.flags.svg,D),s(8),I(" ",r.country==null?null:r.country.population," "),s(4),I(" ",r.country==null?null:r.country.cca3," "),s(6),l("ngForOf",r.translations)}},dependencies:[E,h],encapsulation:2})};var Oe=[{path:"by-capital",component:$},{path:"by-region",component:A},{path:"by-country",component:U},{path:"by/:id",component:q},{path:"**",redirectTo:"by-capital"}],H=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=M({type:n});static \u0275inj=T({imports:[G.forChild(Oe),G]})};var fe=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=M({type:n});static \u0275inj=T({imports:[se,H,ue]})};export{fe as CountriesModule};
