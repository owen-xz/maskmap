(function(t){function e(e){for(var r,s,a=e[0],i=e[1],l=e[2],b=0,d=[];b<a.length;b++)s=a[b],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),c()}function c(){for(var t,e=0;e<o.length;e++){for(var c=o[e],r=!0,a=1;a<c.length;a++){var i=c[a];0!==n[i]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=c[0]))}return t}var r={},n={app:0},o=[];function s(e){if(r[e])return r[e].exports;var c=r[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=t,s.c=r,s.d=function(t,e,c){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(c,r,function(e){return t[e]}.bind(null,r));return c},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=i;o.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"16c5":function(t,e,c){},3223:function(t,e,c){},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var r=c("7a23"),n={class:"container-fluid"},o={class:"row"},s={class:"col-lg-4"},a={class:"col-lg-8"};function i(t,e,c,i,l,u){var b=Object(r["m"])("Sidebar"),d=Object(r["m"])("Map"),f=Object(r["m"])("Lightbox");return Object(r["h"])(),Object(r["c"])("div",n,[Object(r["f"])("div",o,[Object(r["f"])("div",s,[Object(r["f"])(b,{onChooseStore:u.openPopup},null,8,["onChooseStore"])]),Object(r["f"])("div",a,[Object(r["f"])(d,{ref:"map"},null,512)])]),Object(r["f"])(f)])}var l=c("5530"),u=(c("d81d"),c("5502")),b=(c("b0c0"),{class:"sidebar border"}),d={class:"row g-0"},f={class:"col-sm-6 col-lg-12"},O={class:"selectbox p-3 border-bottom bg-light h-100"},p={class:"row"},j={class:"col-6 col-sm-12"},m={class:"form-group row align-items-center mb-sm-3 g-0"},h=Object(r["f"])("div",{class:"col-5 col-sm-4"},[Object(r["f"])("label",{for:"city"},"縣市")],-1),v={class:"col-7 col-sm-8"},g={class:"col-6 col-sm-12"},y={class:"form-group row align-items-center g-0"},S=Object(r["f"])("div",{class:"col-5 col-sm-4"},[Object(r["f"])("label",{for:"district"},"行政區")],-1),k={class:"col-7 col-sm-8"},w={class:"col-sm-6 col-lg-12"},T={class:"searchbox p-3 border-bottom bg-light h-100"},C=Object(r["f"])("h3",{class:"d-none d-sm-block"},"關鍵字搜尋：",-1),R={class:"resultbox"},E={class:"row g-0"},L={class:"mb-1"},I={class:"mb-1"},M={class:"mb-0"},x=Object(r["e"])("最後更新時間: "),D=Object(r["f"])("br",null,null,-1);function _(t,e,c,n,o,s){return Object(r["h"])(),Object(r["c"])("div",b,[Object(r["f"])("div",d,[Object(r["f"])("div",f,[Object(r["f"])("div",O,[Object(r["f"])("div",p,[Object(r["f"])("div",j,[Object(r["f"])("div",m,[h,Object(r["f"])("div",v,[Object(r["r"])(Object(r["f"])("select",{name:"city",id:"city",class:"form-select","onUpdate:modelValue":e[1]||(e[1]=function(t){return s.currCity=t})},[(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["l"])(t.cityList,(function(t){return Object(r["h"])(),Object(r["c"])("option",{key:t.id,value:t},Object(r["n"])(t),9,["value"])})),128))],512),[[r["o"],s.currCity]])])])]),Object(r["f"])("div",g,[Object(r["f"])("div",y,[S,Object(r["f"])("div",k,[Object(r["r"])(Object(r["f"])("select",{name:"district",id:"district",class:"form-select","onUpdate:modelValue":e[2]||(e[2]=function(t){return s.currDistrict=t})},[(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["l"])(t.districtList,(function(t){return Object(r["h"])(),Object(r["c"])("option",{key:t.id,value:t.name},Object(r["n"])(t.name),9,["value"])})),128))],512),[[r["o"],s.currDistrict]])])])])])])]),Object(r["f"])("div",w,[Object(r["f"])("div",T,[C,Object(r["r"])(Object(r["f"])("input",{type:"text",class:"form-control",placeholder:"請輸入關鍵字","onUpdate:modelValue":e[3]||(e[3]=function(t){return s.keywords=t})},null,512),[[r["p"],s.keywords]])])])]),Object(r["f"])("div",R,[Object(r["f"])("div",E,[(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["l"])(t.filterStores,(function(e){return Object(r["h"])(),Object(r["c"])("div",{class:"result p-3 border col-6 col-md-4 col-lg-12 col-xl-6",key:e.id,onClick:function(c){return t.$emit("chooseStore",e.id)}},[Object(r["f"])("h3",{innerHTML:s.keywordsHighlight(e.name)},null,8,["innerHTML"]),Object(r["f"])("p",L,"大人口罩: "+Object(r["n"])(e.mask_adult)+" 個",1),Object(r["f"])("p",I,"小孩口罩: "+Object(r["n"])(e.mask_child)+" 個",1),Object(r["f"])("button",{class:"btn btn-success mb-3","data-bs-toggle":"modal","data-bs-target":"#storeModal",onClick:function(t){return s.setCurrStoreId(e.id)}},"詳細資料",8,["onClick"]),Object(r["f"])("p",M,[x,D,Object(r["e"])(Object(r["n"])(e.updated),1)])],8,["onClick"])})),128))])])])}var P=c("3835"),$=(c("5319"),c("ac1f"),c("4d63"),c("25f0"),{computed:Object(l["a"])({currCity:{get:function(){return this.$store.state.currCity},set:function(t){this.$store.commit("SETCURRCITY",t)}},currDistrict:{get:function(){return this.$store.state.currDistrict},set:function(t){this.$store.commit("SETCURRDISTRICT",t)}},keywords:{get:function(){return this.$store.state.keywords},set:function(t){this.$store.commit("SETKEYWORDS",t)}}},Object(u["c"])(["cityList","districtList","filterStores"])),methods:{keywordsHighlight:function(t){return t.replace(new RegExp(this.keywords,"g"),'<span class="highlight">'.concat(this.keywords,"</span>"))},setCurrStoreId:function(t){this.$store.commit("SETCURRSTOREID",t)}},watch:{districtList:function(t){var e=Object(P["a"])(t,1),c=e[0];this.currDistrict=c.name}}});c("8cb6");$.render=_;var U=$,A=Object(r["s"])("data-v-64930e90");Object(r["j"])("data-v-64930e90");var Y={class:"modal fade",id:"storeModal",tabindex:"-1","aria-labelledby":"storeModalLabel","aria-hidden":"true"},H={class:"modal-dialog"},V={key:0,class:"modal-content"},z={class:"modal-header"},J={class:"modal-title",id:"storeModalLabel"},K=Object(r["f"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),W={class:"modal-body"},N=Object(r["f"])("h2",null,"營業時間",-1),X={class:"table"},Z=Object(r["f"])("thead",null,[Object(r["f"])("th"),Object(r["f"])("th",{class:"p-2",scope:"col"},"一"),Object(r["f"])("th",{class:"p-2",scope:"col"},"二"),Object(r["f"])("th",{class:"p-2",scope:"col"},"三"),Object(r["f"])("th",{class:"p-2",scope:"col"},"四"),Object(r["f"])("th",{class:"p-2",scope:"col"},"五"),Object(r["f"])("th",{class:"p-2",scope:"col"},"六"),Object(r["f"])("th",{class:"p-2",scope:"col"},"日")],-1),q=Object(r["f"])("th",{scope:"col"},"早上",-1),B=Object(r["f"])("th",{scope:"col"},"中午",-1),F=Object(r["f"])("th",{scope:"col"},"下午",-1);Object(r["i"])();var G=A((function(t,e,c,n,o,s){return Object(r["h"])(),Object(r["c"])("div",Y,[Object(r["f"])("div",H,[s.currStore?(Object(r["h"])(),Object(r["c"])("div",V,[Object(r["f"])("div",z,[Object(r["f"])("h1",J,Object(r["n"])(s.currStore.name),1),K]),Object(r["f"])("div",W,[N,Object(r["f"])("table",X,[Z,Object(r["f"])("tbody",null,[Object(r["f"])("tr",null,[q,(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["l"])(s.serviceTimes[0],(function(t,e){return Object(r["h"])(),Object(r["c"])("td",{key:e},Object(r["n"])(t),1)})),128))]),Object(r["f"])("tr",null,[B,(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["l"])(s.serviceTimes[1],(function(t,e){return Object(r["h"])(),Object(r["c"])("td",{key:e},Object(r["n"])(t),1)})),128))]),Object(r["f"])("tr",null,[F,(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["l"])(s.serviceTimes[2],(function(t,e){return Object(r["h"])(),Object(r["c"])("td",{key:e},Object(r["n"])(t),1)})),128))])])]),Object(r["f"])("h2",null,"地址: "+Object(r["n"])(s.currStore.address),1),Object(r["f"])("h2",null,"電話: "+Object(r["n"])(s.currStore.phone),1),Object(r["f"])("h2",null,"備註: "+Object(r["n"])(s.currStore.note),1)])])):Object(r["d"])("",!0)])])})),Q=(c("7db0"),c("1276"),c("fb6a"),{computed:{currStore:function(){var t=this;return this.$store.state.stores.find((function(e){return e.id===t.$store.state.currStoreId}))},serviceTimes:function(){var t=this.currStore.service_periods;return t=t.replace(/N/g,"O").replace(/Y/g,"X"),[t.slice(0,7).split(""),t.slice(7,14).split(""),t.slice(14,21).split("")]}}});c("bae7");Q.render=G,Q.__scopeId="data-v-64930e90";var tt=Q,et=Object(r["s"])("data-v-3c4fb4da"),ct=et((function(t,e,c,n,o,s){return Object(r["h"])(),Object(r["c"])("div",{class:"map",id:"mask-map",onClick:e[1]||(e[1]=function(t){return s.clickmap(t)})})})),rt=(c("99af"),c("159b"),c("e11e")),nt=c.n(rt),ot={data:function(){return{map:{},markers:[]}},computed:Object(l["a"])(Object(l["a"])({},Object(u["d"])(["currDistrict"])),Object(u["c"])(["filterStores"])),methods:{addMarker:function(t){var e=nt.a.marker([t.longitude,t.latitude]).addTo(this.map).bindPopup("\n        <h5>".concat(t.name,'</h5>\n        <p class="m-0 mb-1">大人口罩: ').concat(t.mask_adult,' 個</p>\n        <p class="m-0 mb-2">小孩口罩: ').concat(t.mask_child,' 個</p>\n        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#storeModal" data-id="').concat(t.id,'">詳細資料</button>\n      '));e.id=t.id,e.lng=t.longitude,e.lat=t.latitude,this.markers.push(e)},clearMarkers:function(){var t=this;this.map.eachLayer((function(e){e instanceof nt.a.Marker&&t.map.removeLayer(e),t.markers.length=0}))},openPopup:function(t){var e=this.markers.find((function(e){return e.id===t}));this.map.flyTo(new nt.a.LatLng(e.lng,e.lat),15),e.openPopup(),this.setCurrStoreId(e.id)},setCurrStoreId:function(t){this.$store.commit("SETCURRSTOREID",t)},clickmap:function(t){var e=t.target.dataset.id;e&&this.setCurrStoreId(e)}},watch:{currDistrict:function(t){var e=this.$store.getters.districtList.find((function(e){return e.name===t}));this.map.panTo(new nt.a.LatLng(e.latitude,e.longitude))},filterStores:function(){var t=this;this.clearMarkers(),this.filterStores.forEach((function(e){return t.addMarker(e)}))}},mounted:function(){this.map=nt.a.map("mask-map",{center:[25.044214,121.524725],zoom:14}),nt.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',maxZoom:18}).addTo(this.map)}};c("c80d");ot.render=ct,ot.__scopeId="data-v-3c4fb4da";var st=ot,at={name:"App",components:{Sidebar:U,Lightbox:tt,Map:st},methods:Object(l["a"])(Object(l["a"])({},Object(u["b"])(["getArea","getStores"])),{},{openPopup:function(t){this.$refs.map.openPopup(t)}}),mounted:function(){this.getArea(),this.getStores()}};at.render=i;var it=at,lt=(c("4de4"),c("caad"),c("2532"),c("bc3a")),ut=c.n(lt),bt=Object(u["a"])({state:{area:[],stores:[],currCity:"臺北市",currDistrict:"中正區",keywords:"",currStoreId:""},mutations:{SETAREA:function(t,e){t.area=e},SETSTORES:function(t,e){t.stores=e},SETCURRCITY:function(t,e){t.currCity=e},SETCURRDISTRICT:function(t,e){t.currDistrict=e},SETKEYWORDS:function(t,e){t.keywords=e},SETCURRSTOREID:function(t,e){t.currStoreId=e}},actions:{getArea:function(t){ut.a.get("https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json").then((function(e){t.commit("SETAREA",e.data)}))},getStores:function(t){ut.a.get("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json").then((function(e){var c=e.data.features.map((function(t){return Object(l["a"])(Object(l["a"])({},t.properties),{},{latitude:t.geometry.coordinates[0],longitude:t.geometry.coordinates[1]})}));t.commit("SETSTORES",c)}))}},getters:{cityList:function(t){return t.area.map((function(t){return t.name}))},districtList:function(t){var e;return(null===(e=t.area.find((function(e){return e.name===t.currCity})))||void 0===e?void 0:e.districts)||[]},filterStores:function(t){var e=t.stores.filter((function(e){return e.county===t.currCity&&e.town===t.currDistrict}));return t.keywords?e.filter((function(e){return e.name.includes(t.keywords)})):e}},modules:{}}),dt=c("2106"),ft=c.n(dt);Object(r["b"])(it).use(bt).use(ft.a,ut.a).mount("#app")},"8cb6":function(t,e,c){"use strict";c("e585")},bae7:function(t,e,c){"use strict";c("3223")},c80d:function(t,e,c){"use strict";c("16c5")},e585:function(t,e,c){}});
//# sourceMappingURL=app.62bbefe0.js.map