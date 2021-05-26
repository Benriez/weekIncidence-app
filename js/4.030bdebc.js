(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{5485:function(t,e,a){"use strict";var i=a("b815"),s=a.n(i);s.a},"8b24":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex column topSearch",class:t.bgClass},[a("q-banner",{staticClass:"text-white bg-red turn-on-location",attrs:{"inline-actions":""},on:{click:t.TurnOnLocation},scopedSlots:t._u([{key:"action",fn:function(){return[a("q-btn",{attrs:{flat:"",color:"white",label:"Got it"}})]},proxy:!0}])},[t._v("\n    Bitte aktivieren Sie zuerst die Standortfreigabe auf Ihrem Gerät.\n    ")]),a("div",{staticClass:"col q-pt-lg q-px-md"},[a("q-input",{attrs:{"bottom-slots":"",placeholder:"Suche",dark:"",borderless:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getWeatherbySearch(e)}},scopedSlots:t._u([{key:"before",fn:function(){return[a("q-icon",{attrs:{name:"my_location"},on:{click:t.getLocation}})]},proxy:!0},{key:"append",fn:function(){return[a("q-btn",{staticStyle:{"margin-right":"5px"},attrs:{round:"",dense:"",flat:"",icon:"search"},on:{click:t.getWeatherbySearch}}),a("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"more_vert"}},[a("q-menu",[a("div",{staticClass:"row no-wrap q-pa-md side-menu",staticStyle:{"text-align":"end"}},[a("div",{staticClass:"column"},[a("div",{staticClass:"text-h6 q-mb-md",staticStyle:{"margin-bottom":"1.5rem"}},[t._v("Einstellungen")]),a("q-item-section",{staticStyle:{cursor:"pointer"},attrs:{clickable:""},on:{click:t.gotoDatenschutz}},[t._v("\n                   Datenschutz\n                  ")]),a("q-item-section",{staticStyle:{cursor:"pointer"},attrs:{clickable:""},on:{click:t.gotoImpressum}},[t._v("\n                   Impressum\n                  ")]),a("q-toggle",{staticClass:"dbperm",staticStyle:{"margin-top":"0.25rem"},attrs:{id:"#dbpermission",label:"Suche speichern (beta)"},on:{input:t.update_permission},model:{value:t.save_localbase,callback:function(e){t.save_localbase=e},expression:"save_localbase"}})],1)])])],1)]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t.coronaData?[a("div",{staticClass:"col result text-white text-center textData"},[a("div",{staticClass:"text-h4 weatherData-name"},[t._v("\n        "+t._s(t.weatherData.name)+"\n      ")]),a("div",{staticClass:"text-h6 text-weight-light"},[t._v("\n        "+t._s(t.coronaData.data[t.gemeindezahl].county)+"\n      ")]),a("div",{staticClass:"text-h6 text-weight-light"},[t._v("\n        7 Tage Inzidenz\n      ")]),t.coronaData.data[t.gemeindezahl].weekIncidence<35?[a("div",{staticClass:"text-h1 text-weight-light q-my-lg relative-position",staticStyle:{color:"green"}},[a("span",[t._v(t._s(Math.round(t.coronaData.data[t.gemeindezahl].weekIncidence)))])])]:t.coronaData.data[t.gemeindezahl].weekIncidence>50&&t.coronaData.data[t.gemeindezahl].weekIncidence<80?[a("div",{staticClass:"text-h1 text-weight-light q-my-lg relative-position",staticStyle:{color:"orange"}},[a("span",[t._v(t._s(Math.round(t.coronaData.data[t.gemeindezahl].weekIncidence)))])])]:[a("div",{staticClass:"text-h1 text-weight-light q-my-lg relative-position",staticStyle:{color:"red"}},[a("span",[t._v(t._s(Math.round(t.coronaData.data[t.gemeindezahl].weekIncidence)))])])],a("div",{staticClass:"text-h7 text-weight-light"},[t._v("\n        Letzten 3 Tage\n      ")]),t.threedayIncidence?[a("div",{staticClass:"text-h3 text-weight-light q-my-sm relative-position",staticStyle:{color:"red"}},[a("span",[t._v("\n            "+t._s(Math.round(t.threedayIncidence))+"\n            ")])])]:[a("div",{staticClass:"text-h3 text-weight-light q-my-sm relative-position",staticStyle:{color:"red"}},[a("q-icon",{attrs:{name:"help_outline"}})],1)]],2),a("div",{staticClass:"meta-data text-center"},[a("span",[a("a",{staticClass:"meta-data-div meta-data",attrs:{href:"https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Fallzahlen.html"}},[t._v("Source: "+t._s(t.coronaData.meta.source))])]),a("span",[t._v("Last Update: "+t._s(t.coronaData.meta.lastUpdate.split(".")[0]))]),a("span",{staticClass:"meta-data-div"},[a("a",{staticClass:"meta-data-div meta-data",attrs:{href:"https://api.corona-zahlen.org/docs/"}},[t._v(" Data provided by: "+t._s(t.coronaData.meta.contact.split("(")[0]))])]),a("span",{staticClass:"donation"},[a("img",{staticClass:"buymecoffee-img",attrs:{src:"buymeacoffee.svg",height:"23px"}}),a("a",{staticClass:"buymecoffee",attrs:{href:"https://www.buymeacoffee.com/StudioSchmudio"}},[t._v(" Buy us a coffee")])])])]:[a("div",{staticClass:"col column text-center text-white"},[a("div",{staticClass:"col text-h3 text-weight-thin intro"},[t._v("\n        Wie hoch ist meine "),a("br"),t._v(" Inzidenz?\n      ")]),a("q-btn",{staticClass:"col getLocationBtn",attrs:{flat:""},on:{click:t.getLocation}},[a("q-icon",{attrs:{left:"",size:"3em",name:"my_location"}}),a("div",[t._v("Finde meinen Ort")])],1)],1)],a("div",{staticClass:"wrapper"},[a("div",{staticClass:"box"},[a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div")])])],2)},s=[],n=(a("c975"),a("fb6a"),a("4d90"),a("af0d"));let o=new n["a"]("db");var r={name:"PageIndex",data(){return{search:"",weatherData:null,coronaData:null,weekIncidence:"",gemeindezahl:null,threedayIncidence:null,maxItems:null,firstVal:null,secondVal:null,thirdVal:null,dbunique:!1,dbindex:null,lat:null,lon:null,save_localbase:!1,apiURL:"https://api.openweathermap.org/data/2.5/weather",apiCoronaURL:"https://api.corona-zahlen.org/districts/",apiKey:"56bc2a1374eb7daa0e9aa172391c3899"}},computed:{bgClass(){if(this.weatherData)return this.weatherData.weather[0].icon.endsWith("n")?"bg-night":"bg-day"}},methods:{initdb(){o.collection("permissions").get().then(t=>{t.length>0?(console.log("db already initialized"),o.collection("permissions").doc({id:1}).get().then(t=>{this.save_localbase=t.permission})):o.collection("permissions").set([{id:1,permission:!1}])})},checkPermission(){},gotoDatenschutz(){this.$router.push("/datenschutz").then(()=>this.$router.go())},gotoImpressum(){this.$router.push("/impressum").then(()=>this.$router.go())},getLocation(){this.$q.loading.show(),navigator.geolocation?navigator.geolocation.getCurrentPosition(this.showPosition,this.showError):alert("Geolocation is not supported by this browser.")},showPosition(t){this.lat=t.coords.latitude,this.lon=t.coords.longitude,this.getWeatherByCoords()},showError(t){switch(this.$q.loading.hide(),t.code){case t.PERMISSION_DENIED:var e=document.getElementsByClassName("turn-on-location")[0];e.style.display="flex";break;case t.POSITION_UNAVAILABLE:alert("Location information is unavailable.");break;case t.TIMEOUT:alert("The request to get user location timed out.");break;case t.UNKNOWN_ERROR:alert("An unknown error occurred.");break}},getWeatherByCoords(){this.$q.loading.show(),this.$axios(`${this.apiURL}?lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}&units=metric`).then(t=>{this.weatherData=t.data,this.get_ags(),console.log("weather_data::",this.weatherData)}),this.$q.loading.hide()},getWeatherbySearch(){this.$q.loading.show(),this.$axios(`${this.apiURL}?q=${this.search}&appid=${this.apiKey}&units=metric`).then(t=>{this.weatherData=t.data,console.log("weathermap",this.weatherData),this.weatherData.name.includes("Regierungsbezirk")?this.weatherData.name=this.weatherData.name.slice(17):"Wurzburg"==this.weatherData.name?this.weatherData.name="Würzburg":"Cologne"==this.weatherData.name?this.weatherData.name="Köln":"Munich"==this.weatherData.name?this.weatherData.name="München":"Nuremberg"==this.weatherData.name?this.weatherData.name="Nürnberg":"Hanover"==this.weatherData.name?this.weatherData.name="Hannover":"Hamelin"==this.weatherData.name?this.weatherData.name="Hameln":this.weatherData.name.includes("Direktionsbezirk")&&(this.weatherData.name=this.weatherData.name.slice(17)),this.get_ags()}),this.$q.loading.hide()},get_ags(){var t=this.weatherData.name,e="";this.$axios.get("ags.txt").then(a=>{for(let i=0;i<5;i++)e+=a.data.charAt(a.data.indexOf(t)-26+i);this.gemeindezahl=e,console.log("gemeindezahl",this.gemeindezahl),this.getCoronaStats()})},getCoronaStats(){console.log("get c-data",this.gemeindezahl),this.$axios("https://api.corona-zahlen.org/districts/"+this.gemeindezahl).then(t=>{this.coronaData=t.data,this.calcLastThreeDays(),console.log("c-data",this.coronaData)})},localbase(){if(1==this.save_localbase){var t=new Date,e=String(t.getDate()).padStart(2,"0"),a=String(t.getMonth()+1).padStart(2,"0"),i=t.getFullYear();t=a+"/"+e+"/"+i,o.collection("3day"+this.weatherData.name).get().then(e=>{for(let a=0;a<e.length;a++){if(this.maxItems=e.length,e[a].timestamp==t){console.log("item already exists"),this.dbunique=!1;break}this.dbunique=!0,this.dbindex=a}0==e.length&&(this.dbunique=!0,this.dbindex=0),1==this.dbunique&&(o.collection("3day"+this.weatherData.name).add({id:this.dbindex+1,name:this.weatherData.name,incidence:Math.round(this.coronaData),timestamp:t}),this.maxItems++),this.calcLastThreeDays()})}},calcLastThreeDays(){this.$axios(`https://api.corona-zahlen.org/districts/${this.gemeindezahl}/history/incidence/3`).then(t=>{try{this.firstVal=t.data.data[this.gemeindezahl].history[0].weekIncidence}catch(e){}try{this.secondVal=t.data.data[this.gemeindezahl].history[1].weekIncidence}catch(e){}try{this.thirdVal=t.data.data[this.gemeindezahl].history[2].weekIncidence}catch(e){}this.threedayIncidence=(this.firstVal+this.secondVal+this.thirdVal)/3,console.log(t.data.data)})},TurnOnLocation(){var t=document.getElementsByClassName("turn-on-location")[0];t.style.display="none"},closeInfo(){var t=document.getElementById("Info");t.style.display="none"},closeCounter(){var t=document.getElementsByClassName("counterimg")[0];t.style.display="none"},update_permission(){console.log("triggered"),1==this.save_localbase?o.collection("permissions").set([{id:1,permission:!0}]):o.collection("permissions").set([{id:1,permission:!1}])}},created(){this.initdb(),this.checkPermission()}},l=r,c=(a("5485"),a("2877")),h=a("9989"),d=a("54e1"),m=a("9c40"),g=a("27f9"),u=a("0016"),p=a("4e73"),v=a("4074"),w=a("9564"),b=a("eebe"),y=a.n(b),D=Object(c["a"])(l,i,s,!1,null,null,null);e["default"]=D.exports;y()(D,"components",{QPage:h["a"],QBanner:d["a"],QBtn:m["a"],QInput:g["a"],QIcon:u["a"],QMenu:p["a"],QItemSection:v["a"],QToggle:w["a"]})},b815:function(t,e,a){}}]);