(function(t){function e(e){for(var r,a,o=e[0],c=e[1],i=e[2],l=0,p=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(p.length)p.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==s[o]&&(r=!1)}r&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},s={app:0},u=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-16c2c591":"121c2296","chunk-2d21a3d2":"02a6ae37","chunk-40da29af":"11e1bba8","chunk-52107579":"8486d68d","chunk-703770df":"d884213e","chunk-bc111aa0":"4c91a0f8"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-16c2c591":1,"chunk-40da29af":1,"chunk-52107579":1,"chunk-703770df":1,"chunk-bc111aa0":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-16c2c591":"bbe58940","chunk-2d21a3d2":"31d6cfe0","chunk-40da29af":"d1b61f5b","chunk-52107579":"a2be1ce3","chunk-703770df":"b77cd19a","chunk-bc111aa0":"c912a28e"}[t]+".css",s=c.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var i=u[o],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===s))return e()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){i=p[o],l=i.getAttribute("data-href");if(l===r||l===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||s,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[t],f.parentNode.removeChild(f),n(u)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=s[t]=[e,n]}));e.push(r[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var p=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}s[t]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var p=0;p<i.length;p++)e(i[p]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavbarCompany"),n("NavbarInventory"),n("router-view")],1)},s=[],u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"navbar"}},[r("div",{staticClass:"nav-item"},[r("router-link",{attrs:{to:{name:"Home"}}},[r("div",{staticClass:"nav-items"},[r("img",{staticClass:"company-logo nav-item",attrs:{src:n("f6c9"),alt:"logo"}}),r("span",{staticClass:"company-title nav-item"},[t._v("Plant Store")])])])],1),r("div",{staticClass:"nav-items"},[t.isLoggedIn?t._e():r("div",{staticClass:"nav-item"},[r("router-link",{attrs:{to:{name:"Register"}}},[t._v("Register")])],1),t.isLoggedIn?t._e():r("div",{staticClass:"nav-item"},[r("router-link",{attrs:{to:{name:"Login"}}},[t._v("Login")])],1),t.isLoggedIn?r("div",{staticClass:"nav-item",on:{click:t.logoutUser}},[r("span",[t._v("Log Out")])]):t._e(),t.numItemsInCart?r("div",{staticClass:"nav-item cart"},[r("router-link",{attrs:{to:{name:"Cart"}}},[r("span",{staticClass:"material-icons"},[t._v(" shopping_cart ")]),t._v(t._s(t.numItemsInCart))])],1):t._e()])])},o=[],c=(n("96cf"),n("1da1")),i=n("5530"),l=n("2f62"),p={name:"navbar",data:function(){return{}},computed:Object(i["a"])({},Object(l["c"])(["isLoggedIn","numItemsInCart"])),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(l["d"])(["updateCartQuantity"])),Object(l["b"])(["logout"])),{},{logoutUser:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.logout();case 2:t.updateCartQuantity();case 3:case"end":return e.stop()}}),e)})))()}}),created:function(){this.updateCartQuantity()}},f=p,m=(n("64e4"),n("2877")),d=Object(m["a"])(f,u,o,!1,null,"2bed3ff4",null),g=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-inventory"},[n("div",{staticClass:"nav-items"},[n("router-link",{attrs:{to:{name:"PlantsInventory",params:{genus:"all"}}}},[t._v("All")]),t._l(t.genuses,(function(e,r){return n("router-link",{key:r,attrs:{to:{name:"PlantsInventory",params:{genus:r}}}},[t._v(" "+t._s(e)+" ")])}))],2)])},h=[],b={data:function(){return{genuses:{Alocasia:"Alocasia",Calathea:"Calathea",Ficus:"Ficus",Hoya:"Hoya",Monstera:"Monstera"}}}},k=b,y=(n("89b1"),Object(m["a"])(k,v,h,!1,null,"47c78512",null)),w=y.exports,C={components:{NavbarCompany:g,NavbarInventory:w}},S=C,I=(n("034f"),Object(m["a"])(S,a,s,!1,null,null,null)),O=I.exports,_=(n("d3b7"),n("8c4f"));r["a"].use(_["a"]);var x=[{path:"/register",name:"Register",component:function(){return n.e("chunk-16c2c591").then(n.bind(null,"73cf"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-703770df").then(n.bind(null,"a55b"))}},{path:"/",name:"Home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/plants/:genus",name:"PlantsInventory",component:function(){return n.e("chunk-bc111aa0").then(n.bind(null,"7cb5"))}},{path:"/cart",name:"Cart",component:function(){return n.e("chunk-40da29af").then(n.bind(null,"b789"))}},{path:"/checkout-success",name:"CheckoutSuccess",component:function(){return n.e("chunk-52107579").then(n.bind(null,"4625"))}}],R=new _["a"]({mode:"history",base:"/",routes:x}),j=R,E=n("bc3a"),P=n.n(E),q={token:localStorage.getItem("token")||"",user:null,status:"",error:null},L={isLoggedIn:function(t){return!!t.token},authState:function(t){return t.status},user:function(t){return t.user},error:function(t){return t.error}},N={authRequest:function(t){t.status="loading"},authSuccess:function(t,e){t.token=e.token,t.user=e.user,t.status="success"},authError:function(t,e){t.error=e.response.data.message},registerRequest:function(t){t.status="loading"},registerSuccess:function(t){t.status="success"},registerError:function(t,e){t.error=e.response.data.message},profileRequest:function(t){t.status="loading"},profileError:function(t,e){t.error=e.response.data.message},profileSuccess:function(t,e){t.user=e},logout:function(t){t.status="",t.token="",t.user=""}},A={login:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,s,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.prev=1,r("authRequest"),n.next=5,P.a.post("/api/v1/users/login",e);case 5:return a=n.sent,a.data.success&&(s=a.data.token,u=a.data.user,localStorage.setItem("token",s),P.a.defaults.headers.common["Authorization"]=s,r("authSuccess",{token:s,user:u})),n.abrupt("return",a);case 10:return n.prev=10,n.t0=n["catch"](1),r("authError",n.t0),n.abrupt("return",n.t0.response);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))()},register:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.prev=1,r("registerRequest"),n.next=5,P.a.post("/api/v1/users/register",e);case 5:return a=n.sent,void 0!==a.data.success&&r("registerSuccess"),n.abrupt("return",a);case 10:return n.prev=10,n.t0=n["catch"](1),r("registerError",n.t0),n.abrupt("return",n.t0.response);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))()},getProfile:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,n("profileRequest"),e.next=5,P.a.get("/api/v1/users/profile");case 5:return r=e.sent,n("profileSuccess",r.data.user),e.abrupt("return",r);case 10:return e.prev=10,e.t0=e["catch"](1),n("profileError",e.t0),e.abrupt("return",e.t0.response);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))()},logout:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,localStorage.removeItem("token");case 3:return e.next=5,localStorage.removeItem("cart");case 5:return n("logout"),delete P.a.defaults.headers.common["Authorization"],j.push({name:"Login"}),e.abrupt("return");case 9:case"end":return e.stop()}}),e)})))()}},T={state:q,getters:L,actions:A,mutations:N},J=n("92be"),M=(n("07ac"),{status:"",numItemsInCart:0,cart:{}}),H={numItemsInCart:function(t){return t.numItemsInCart}},B={addToCart:function(t,e){if(localStorage.cart){var n=JSON.parse(localStorage.cart);t.cart=n}else t.cart={};t.cart[e.plant._id]?t.cart[e.plant._id]+=e.quantity:t.cart[e.plant._id]=e.quantity,localStorage.setItem("cart",JSON.stringify(t.cart))},updateCart:function(t,e){var n=e.plant,r=e.quantity,a=JSON.parse(localStorage.cart);a[n]=r,localStorage.setItem("cart",a),t.cart=a},updateCartQuantity:function(t){if(localStorage.cart){var e=JSON.parse(localStorage.cart),n=Object.values(e),r=0;for(var a in n)r+=n[a];t.numItemsInCart=r}else t.numItemsInCart=0}},Q={},$={state:M,getters:H,mutations:B,actions:Q};r["a"].use(l["a"]);var F=new l["a"].Store({state:{},mutations:{},actions:{},modules:{Auth:T,Plant:J["a"],Checkout:$}});r["a"].config.productionTip=!1,new r["a"]({router:j,store:F,render:function(t){return t(O)}}).$mount("#app")},"64e4":function(t,e,n){"use strict";var r=n("7605"),a=n.n(r);a.a},7605:function(t,e,n){},"7f1f":function(t,e,n){},"85ec":function(t,e,n){},"89b1":function(t,e,n){"use strict";var r=n("7f1f"),a=n.n(r);a.a},"92be":function(t,e,n){"use strict";(function(t){n("d3b7"),n("25f0"),n("96cf");var r=n("1da1"),a=n("bc3a"),s=n.n(a),u={plants:[],plant:null},o={plants:function(t){return t.plants}},c={plantsRequest:function(t){t.status="loading"},plantsSuccess:function(t,e){t.status="success",t.plants=e.data.plants},plantsError:function(t,e){t.status=e.response.data.message},plantRequest:function(t){t.status="loading"},plantSuccess:function(t,e){t.status="success",t.plant=e.data.plant},plantError:function(t,e){t.status=e.response.data.message},plantImageRequest:function(t){t.status="loading"},plantImageSuccess:function(t){t.status="success"},plantImageError:function(t,e){t.status=e.response.data.message}},i={getPlants:function(t,e){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,a,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.prev=1,r("plantsRequest"),a={genus:e.genus},n.next=6,s.a.get("/api/v1/plants",{params:a});case 6:u=n.sent,r("plantsSuccess",u),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](1),r("plantsError",n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})))()},getPlant:function(t,e){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.prev=1,r("plantRequest"),n.next=5,s.a.get("/api/v1/plants/".concat(e));case 5:a=n.sent,r("plantSuccess",a),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),r("plantError",n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},getPlantImage:function(e,n){return Object(r["a"])(regeneratorRuntime.mark((function r(){var a,u,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,r.prev=1,a("plantImageRequest"),r.next=5,s.a.get("/api/v1/plants/images/".concat(n.image_name),{responseType:"arraybuffer"});case 5:u=r.sent,o=t.from(u.data,"binary").toString("base64"),a("plantImageSuccess",o),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](1),a("plantImageError",r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()}};e["a"]={state:u,getters:o,mutations:c,actions:i}}).call(this,n("b639").Buffer)},f6c9:function(t,e,n){t.exports=n.p+"img/company-logo.a929a020.svg"}});
//# sourceMappingURL=app.ec4e3866.js.map