(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+n12":function(e,n,t){"use strict";t.d(n,"p",(function(){return f})),t.d(n,"l",(function(){return g})),t.d(n,"c",(function(){return h})),t.d(n,"d",(function(){return v})),t.d(n,"i",(function(){return b})),t.d(n,"k",(function(){return P})),t.d(n,"j",(function(){return j})),t.d(n,"m",(function(){return w})),t.d(n,"o",(function(){return k})),t.d(n,"n",(function(){return y})),t.d(n,"h",(function(){return S})),t.d(n,"f",(function(){return E})),t.d(n,"e",(function(){return M})),t.d(n,"g",(function(){return R})),t.d(n,"q",(function(){return D})),t.d(n,"b",(function(){return A})),t.d(n,"a",(function(){return I}));var r=t("/9Wh"),i=t.n(r),s=t("Kz1y"),o=t.n(s),a=t("PSh9"),l=t.n(a),u=t("08eb"),c=t.n(u),m=t("tZmG"),d=t.n(m),p=(t("idCO"),t("Rjnq"));function f(e,n){if(e===n)return[];if("#"===n)return[e];for(var t=[],r=String(e).split("/"),i=String(n).split("/"),s=0,o=r.length;s<o;s++)if("+"===i[s])t.push(r[s]);else{if("#"===i[s])return t.push(r.slice(s).join("/")),t;if(i[s]!==r[s])return null}return"#"===i[s]&&(s+=1),s===i.length?t:null}function g(e){return!!e.match("~[^ -~\t\r\n]~")}function h(e,n){var t=document.createElement("textarea");t.textContent=e,t.style.position="fixed";var r=n?document.getElementsByClassName(n)[0]:document.body;r.appendChild(t),t.select();try{return document.execCommand("copy")}catch(e){return!1}finally{r.removeChild(t)}}function v(e){for(var n=d()(e),t={},r=c()(e),i=0;i<r.length;i++)if(!n[i].includes("_id")){var s=new Object;s[n[i]]=r[i],l()(t,s)}return t}function b(){return"http://"+window.location.hostname+":"+window.location.port}function P(){return"ws://"+window.location.hostname+":"+window.location.port}function j(e,n){n||(n=[]);var t=e.indexOf("${"),r="";if(t>-1){var i=e.substring(t+2,e.length).indexOf("}");if(!(i>0))return n;r=e.substring(t+2,t+i+2),e=e.substring(t+i+3,e.length),n.push(r)}return""!==r&&e.length>3&&j(e,n),n}function w(e){try{JSON.parse(e)}catch(e){return!1}return!0}function k(e,n){var t=!0;return w(e)?d()(JSON.parse(e)).forEach((function(e){if(!n.includes(e))return t=!1})):t=!1,t}function y(e,n){var t=!0;return w(e)&&Array.isArray(JSON.parse(e))?JSON.parse(e).forEach((function(e){d()(e).forEach((function(e){if(!n.includes(e))return t=!1}))})):t=!1,t}function S(e,n){var t=new Blob([n],{type:"text/plain"}),r=document.createEvent("MouseEvents"),i=document.createElement("a");i.download=e+".json",i.href=window.URL.createObjectURL(t),r.initEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),i.dispatchEvent(r)}function E(e,n){var t=document.createElement("a"),r=new Blob([n],{type:"data:text/plain;charset=utf-8"});t.href=URL.createObjectURL(r),t.setAttribute("download",e+".env"),t.click()}function M(e,n){var t=function(e){var n="data:text/csv;charset=utf-8,",t={};e.forEach((function(n,r){for(var i in n)(t=o()({},t,{key:i}))[i]||(t[i]=Array(e.length).fill("")),n[i]&&(t[i][r]=n[i])})),delete t.key,n+=d()(t).join(",")+"\n";var r=d()(t).length;return e.forEach((function(e,i){var s=0;for(var o in t){var a=++s===r?"":",";n+=t[o][i]+a}n+="\n"})),n}(n),r=encodeURI(t),i=document.createElement("a");i.setAttribute("href",r),i.setAttribute("download",e+".csv"),i.click()}function R(e,n,t){var r=function(e){var n="data:text/csv;charset=utf-8,",t={};e.forEach((function(n,r){for(var i in n)(t=o()({},t,{key:i}))[i]||(t[i]=Array(e.length).fill("")),n[i]&&(t[i][r]=n[i])})),delete t.key,n+=d()(t).join(" \t")+"\n";var r=d()(t).length;return e.forEach((function(e,i){var s=0;for(var o in t){var a=++s===r?"":"\t";n+=t[o][i]+a}n+="\n"})),n}(n),i=encodeURI(r),s=document.createElement("a");s.setAttribute("href",i),s.setAttribute("download",e+".xlsx"),s.click()}function D(e){return e.toLowerCase().split("_").map((function(e){return e[0].toUpperCase()+e.substr(1)})).join(" ")}function A(e){return JSON.parse(i()(e)).map((function(e){return d()(e).map((function(n){("boolean"==typeof e[n]||e[n]&&"string"!=typeof e[n])&&(e[n]=i()(e[n]))})),e}))}function I(e,n){return p[n](e)}},A5Vd:function(e,n,t){"use strict";t.d(n,"l",(function(){return o})),t.d(n,"k",(function(){return a})),t.d(n,"m",(function(){return l})),t.d(n,"g",(function(){return u})),t.d(n,"h",(function(){return c})),t.d(n,"e",(function(){return m})),t.d(n,"b",(function(){return d})),t.d(n,"a",(function(){return p})),t.d(n,"i",(function(){return f})),t.d(n,"f",(function(){return g})),t.d(n,"c",(function(){return h})),t.d(n,"d",(function(){return v})),t.d(n,"j",(function(){return b}));var r,i=t("TcPG"),s=t.n(i),o=[{title:"Apps > Services",link:"/services",key:"services",icon:"mdi-hammer-screwdriver"},{title:"Apps > Rubix",link:"/rubix-apps",key:"rubixApps",icon:"mdi-apps"},{title:"Config > IO 10",link:"/io-10-config",key:"io10Config",icon:"mdi-chemical-weapon"},{title:"Config > Point Mapping",link:"/service-mapping",key:"serviceMapping",icon:"mdi-map"},{title:"Console > MQTT",link:"/mqtt",key:"mqtt",icon:"mdi-protocol"},{title:"Console > REST",link:"/api-client",key:"apiClient",icon:"mdi-api"},{title:"Console > Logging",link:"/logging",key:"logging",icon:"mdi-history"},{title:"Console > Ip Scan",link:"/ip-scanning",key:"ipScanning",icon:"mdi-magnify-scan"},{title:"Master/Slaves",link:"/master-slaves",key:"masterSlaves",icon:"mdi-account-child-outline"},{title:"Driver > Rubix",link:"/rubix-driver",key:"cloudNetworks",icon:"mdi-cloud"},{title:"Driver > Modbus Master",link:"/modbus",key:"modbus",icon:"mdi-table"},{title:"Driver > Bacnet Master",link:"/bacnet-master",key:"bacnetMaster",icon:"mdi-source-fork"},{title:"Driver > BACnet Server",link:"/bacnet-server",key:"bacnetServer",icon:"mdi-server"},{title:"Driver > LoRa Network",link:"/lora-network",key:"lora",icon:"mdi-motion-sensor"},{title:"Schedules",link:"/schedules",key:"schedules",icon:"mdi-calendar-plus"},{title:"Host > File Manager",link:"/file",key:"fileManager",icon:"mdi-file"},{title:"User Management",link:"/user-management",key:"userManagement",icon:"mdi-account"},{title:"Host > Backup/Restore",link:"/app-manager",key:"appManager",icon:"mdi-application"}],a=[{id:"BACNET_SERVER",name:"rubix-bacnet-server",fileName:"nubeio-bacnet-server.service"},{id:"LORA_RAW",name:"lora-raw",fileName:"nubeio-lora-raw.service"},{id:"POINT_SERVER",name:"rubix-point-server",fileName:"nubeio-point-server.service"},{id:"RUBIX_PLAT",name:"rubix-plat-build",fileName:"rubix"},{id:"WIRES",name:"wires-builds",fileName:"nubeio-rubix-wires.service"}],l=["metersPerSecondPerSecond","squareMeters","squareCentimeters","squareFeet","squareInches","currency1","currency2","currency3","currency4","currency5","currency6","currency7","currency8","currency9","currency10","milliamperes","amperes","amperesPerMeter","amperesPerSquareMeter","ampereSquareMeters","decibels","decibelsMillivolt","decibelsVolt","farads","henrys","ohms","ohmMeters","ohmMeterPerSquareMeter","milliohms","kilohms","megohms","microSiemens","millisiemens","siemens","siemensPerMeter","teslas","volts","millivolts","kilovolts","megavolts","voltAmperes","kilovoltAmperes","megavoltAmperes","ampereSeconds","ampereSquareHours","voltAmpereHours","kilovoltAmpereHours","megavoltAmpereHours","voltAmperesReactive","kilovoltAmperesReactive","megavoltAmperesReactive","voltAmpereHoursReactive","kilovoltAmpereHoursReactive","megavoltAmpereHoursReactive","voltsPerDegreeKelvin","voltsPerMeter","voltsSquareHours","degreesPhase","powerFactor","webers","joules","kilojoules","kilojoulesPerKilogram","megajoules","joulesPerHours","wattHours","kilowattHours","megawattHours","wattHoursReactive","kilowattHoursReactive","megawattHoursReactive","btus","kiloBtus","megaBtus","therms","tonHours","joulesPerKilogramDryAir","kilojoulesPerKilogramDryAir","megajoulesPerKilogramDryAir","btusPerPoundDryAir","btusPerPound","joulesPerDegreeKelvin","kilojoulesPerDegreeKelvin","megajoulesPerDegreeKelvin","joulesPerKilogramDegreeKelvin","newton","cyclesPerHour","cyclesPerMinute","hertz","kilohertz","megahertz","perHour","gramsOfWaterPerKilogramDryAir","percentRelativeHumidity","micrometers","millimeters","centimeters","kilometers","meters","inches","feet","candelas","candelasPerSquareMeter","wattsPerSquareFoot","wattsPerSquareMeter","lumens","luxes","footCandles","milligrams","grams","kilograms","poundsMass","tons","gramsPerSecond","gramsPerMinute","kilogramsPerSecond","kilogramsPerMinute","kilogramsPerHour","poundsMassPerSecond","poundsMassPerMinute","poundsMassPerHour","tonsPerHour","milliwatts","watts","kilowatts","megawatts","btusPerHour","kiloBtusPerHour","horsepower","tonsRefrigeration","pascals","hectopascals","kilopascals","pascalSeconds","millibars","bars","poundsForcePerSquareInch","millimetersOfWater","centimetersOfWater","inchesOfWater","millimetersOfMercury","centimetersOfMercury","inchesOfMercury","degreesCelsius","degreesKelvin","degreesKelvinPerHour","degreesKelvinPerMinute","degreesFahrenheit","degreeDaysCelsius","degreeDaysFahrenheit","deltaDegreesFahrenheit","deltaDegreesKelvin","years","months","weeks","days","hours","minutes","seconds","hundredthsSeconds","milliseconds","newtonMeters","millimetersPerSecond","millimetersPerMinute","metersPerSecond","metersPerMinute","metersPerHour","kilometersPerHour","feetPerSecond","feetPerMinute","milesPerHour","cubicFeet","cubicFeetPerDay","cubicMeters","cubicMetersPerDay","imperialGallons","milliliters","liters","usGallons","cubicFeetPerSecond","cubicFeetPerMinute","cubicFeetPerHour","cubicMetersPerSecond","cubicMetersPerMinute","cubicMetersPerHour","imperialGallonsPerMinute","millilitersPerSecond","litersPerSecond","litersPerMinute","litersPerHour","usGallonsPerMinute","usGallonsPerHour","degreesAngular","degreesCelsiusPerHour","degreesCelsiusPerMinute","degreesFahrenheitPerHour","degreesFahrenheitPerMinute","jouleSeconds","kilogramsPerCubicMeter","kilowattHoursPerSquareMeter","kilowattHoursPerSquareFoot","megajoulesPerSquareMeter","megajoulesPerSquareFoot","noUnits","newtonSeconds","newtonsPerMeter","partsPerMillion","partsPerBillion","percent","percentObscurationPerFoot","percentObscurationPerMeter","percentPerSecond","perMinute","perSecond","psiPerDegreeFahrenheit","radians","radiansPerSecond","revolutionsPerMinute","squareMetersPerNewton","wattsPerMeterPerDegreeKelvin","wattsPerSquareMeterDegreeKelvin","perMille","gramsPerGram","kilogramsPerKilogram","gramsPerKilogram","milligramsPerGram","milligramsPerKilogram","gramsPerMilliliter","gramsPerLiter","milligramsPerLiter","microgramsPerLiter","gramsPerCubicMeter","milligramsPerCubicMeter","microgramsPerCubicMeter","nanogramsPerCubicMeter","gramsPerCubicCentimeter","wattHoursPerCubicMeter","joulesPerCubicMeter","becquerels","kilobecquerels","megabecquerels","gray","milligray","microgray","sieverts","millisieverts","microsieverts","microsievertsPerHour","decibelsA","nephelometricTurbidityUnit","pH","gramsPerSquareMeter","minutesPerDegreeKelvin"],u={STOP:"stop",START:"start",RESTART:"restart",REFRESH:"refresh",ENABLE:"enable",DISABLE:"disable"},c={INSTALLER:"Installer",FRONTEND_APP:"FrontendApp",PYTHON_APP:"PythonApp",OTHERS:"Others"},m=".json",d=(r={},s()(r,c.FRONTEND_APP,".env"),s()(r,c.PYTHON_APP,m),r),p={RUBIX_PLAT:"RUBIX_PLAT"},f={RUBIX_BIOS:"rubixBios",RUBIX_SERVICE:"rubixService"},g=["/dev/ttyUSB0","/dev/ttyUSB1","/dev/ttyUSB2","/dev/ttyUSB3","/dev/ttyUSB4"],h={DOWNLOAD_IN_PROGRESS:"DOWNLOAD_IN_PROGRESS",DOWNLOAD_COMPLETE:"DOWNLOAD_COMPLETE"},v={FOOTER_PROPS:{showFirstLastPage:!0,firstIcon:"mdi-chevron-double-left",lastIcon:"mdi-chevron-double-right",prevIcon:"mdi-chevron-left",nextIcon:"mdi-chevron-right",itemsPerPageOptions:[10,25,50,-1]},ITEMS_PER_PAGE:50},b={VERIFIED:"VERIFIED",UNVERIFIED:"UNVERIFIED"}},D9WN:function(e,n,t){var r={"./af":"ggbP","./af.js":"ggbP","./ar":"zaxx","./ar-dz":"fyYX","./ar-dz.js":"fyYX","./ar-kw":"jogf","./ar-kw.js":"jogf","./ar-ly":"zWXE","./ar-ly.js":"zWXE","./ar-ma":"6Nbo","./ar-ma.js":"6Nbo","./ar-sa":"ooRU","./ar-sa.js":"ooRU","./ar-tn":"ZPeb","./ar-tn.js":"ZPeb","./ar.js":"zaxx","./az":"sTnJ","./az.js":"sTnJ","./be":"mOKi","./be.js":"mOKi","./bg":"oaWn","./bg.js":"oaWn","./bm":"TQ38","./bm.js":"TQ38","./bn":"6K5y","./bn-bd":"XdjO","./bn-bd.js":"XdjO","./bn.js":"6K5y","./bo":"vPIy","./bo.js":"vPIy","./br":"afE2","./br.js":"afE2","./bs":"JNFb","./bs.js":"JNFb","./ca":"NQcR","./ca.js":"NQcR","./cs":"0V88","./cs.js":"0V88","./cv":"e/5r","./cv.js":"e/5r","./cy":"HTX9","./cy.js":"HTX9","./da":"oBlQ","./da.js":"oBlQ","./de":"DPpk","./de-at":"7epm","./de-at.js":"7epm","./de-ch":"mq6o","./de-ch.js":"mq6o","./de.js":"DPpk","./dv":"FyKI","./dv.js":"FyKI","./el":"U5Cp","./el.js":"U5Cp","./en-au":"2tm8","./en-au.js":"2tm8","./en-ca":"bxNt","./en-ca.js":"bxNt","./en-gb":"YmdP","./en-gb.js":"YmdP","./en-ie":"gLHG","./en-ie.js":"gLHG","./en-il":"rTiS","./en-il.js":"rTiS","./en-in":"62Az","./en-in.js":"62Az","./en-nz":"Odsn","./en-nz.js":"Odsn","./en-sg":"ww2P","./en-sg.js":"ww2P","./eo":"GjBA","./eo.js":"GjBA","./es":"SKOl","./es-do":"8wa+","./es-do.js":"8wa+","./es-mx":"Vtn2","./es-mx.js":"Vtn2","./es-us":"YL9C","./es-us.js":"YL9C","./es.js":"SKOl","./et":"+JHh","./et.js":"+JHh","./eu":"pAPS","./eu.js":"pAPS","./fa":"zhSd","./fa.js":"zhSd","./fi":"/BTK","./fi.js":"/BTK","./fil":"9G7C","./fil.js":"9G7C","./fo":"K/JZ","./fo.js":"K/JZ","./fr":"wehu","./fr-ca":"UKIa","./fr-ca.js":"UKIa","./fr-ch":"sIcz","./fr-ch.js":"sIcz","./fr.js":"wehu","./fy":"RmWi","./fy.js":"RmWi","./ga":"s5bY","./ga.js":"s5bY","./gd":"BWwv","./gd.js":"BWwv","./gl":"794S","./gl.js":"794S","./gom-deva":"EurX","./gom-deva.js":"EurX","./gom-latn":"jixF","./gom-latn.js":"jixF","./gu":"Uz2K","./gu.js":"Uz2K","./he":"dSB2","./he.js":"dSB2","./hi":"0vPu","./hi.js":"0vPu","./hr":"fnly","./hr.js":"fnly","./hu":"FI+y","./hu.js":"FI+y","./hy-am":"ZxHn","./hy-am.js":"ZxHn","./id":"KxDR","./id.js":"KxDR","./is":"H+sD","./is.js":"H+sD","./it":"GyEJ","./it-ch":"jSwB","./it-ch.js":"jSwB","./it.js":"GyEJ","./ja":"km6H","./ja.js":"km6H","./jv":"WnjQ","./jv.js":"WnjQ","./ka":"WXVf","./ka.js":"WXVf","./kk":"zJNk","./kk.js":"zJNk","./km":"ZuGE","./km.js":"ZuGE","./kn":"VCFo","./kn.js":"VCFo","./ko":"EpfC","./ko.js":"EpfC","./ku":"FvgC","./ku.js":"FvgC","./ky":"Pfmo","./ky.js":"Pfmo","./lb":"wSTE","./lb.js":"wSTE","./lo":"IKWk","./lo.js":"IKWk","./lt":"wUrv","./lt.js":"wUrv","./lv":"xVOH","./lv.js":"xVOH","./me":"riUx","./me.js":"riUx","./mi":"b1YN","./mi.js":"b1YN","./mk":"yPwC","./mk.js":"yPwC","./ml":"dS3T","./ml.js":"dS3T","./mn":"8J7P","./mn.js":"8J7P","./mr":"Cla+","./mr.js":"Cla+","./ms":"Vbbc","./ms-my":"qelJ","./ms-my.js":"qelJ","./ms.js":"Vbbc","./mt":"YkvB","./mt.js":"YkvB","./my":"4lZK","./my.js":"4lZK","./nb":"4dXb","./nb.js":"4dXb","./ne":"dhqa","./ne.js":"dhqa","./nl":"oPI1","./nl-be":"XLIu","./nl-be.js":"XLIu","./nl.js":"oPI1","./nn":"T9ox","./nn.js":"T9ox","./oc-lnc":"7D2V","./oc-lnc.js":"7D2V","./pa-in":"Ly9c","./pa-in.js":"Ly9c","./pl":"MX9p","./pl.js":"MX9p","./pt":"VVP3","./pt-br":"qatJ","./pt-br.js":"qatJ","./pt.js":"VVP3","./ro":"2xJO","./ro.js":"2xJO","./ru":"eqS4","./ru.js":"eqS4","./sd":"6Huv","./sd.js":"6Huv","./se":"opZB","./se.js":"opZB","./si":"Ueyn","./si.js":"Ueyn","./sk":"YIvA","./sk.js":"YIvA","./sl":"s2ex","./sl.js":"s2ex","./sq":"9o/V","./sq.js":"9o/V","./sr":"CZE8","./sr-cyrl":"xXeP","./sr-cyrl.js":"xXeP","./sr.js":"CZE8","./ss":"z3ad","./ss.js":"z3ad","./sv":"AVN5","./sv.js":"AVN5","./sw":"y2+C","./sw.js":"y2+C","./ta":"i/qy","./ta.js":"i/qy","./te":"Zov1","./te.js":"Zov1","./tet":"6ucV","./tet.js":"6ucV","./tg":"cLEX","./tg.js":"cLEX","./th":"cYD4","./th.js":"cYD4","./tk":"SRLO","./tk.js":"SRLO","./tl-ph":"+Ls2","./tl-ph.js":"+Ls2","./tlh":"sCZo","./tlh.js":"sCZo","./tr":"Nx06","./tr.js":"Nx06","./tzl":"x0TR","./tzl.js":"x0TR","./tzm":"eHpI","./tzm-latn":"ceDr","./tzm-latn.js":"ceDr","./tzm.js":"eHpI","./ug-cn":"a1x9","./ug-cn.js":"a1x9","./uk":"jAw7","./uk.js":"jAw7","./ur":"UZ6Q","./ur.js":"UZ6Q","./uz":"eYI/","./uz-latn":"MTcW","./uz-latn.js":"MTcW","./uz.js":"eYI/","./vi":"riLI","./vi.js":"riLI","./x-pseudo":"ESkz","./x-pseudo.js":"ESkz","./yo":"tL86","./yo.js":"tL86","./zh-cn":"/cTU","./zh-cn.js":"/cTU","./zh-hk":"dH0k","./zh-hk.js":"dH0k","./zh-mo":"/jmH","./zh-mo.js":"/jmH","./zh-tw":"0+Cr","./zh-tw.js":"0+Cr"};function i(e){var n=s(e);return t(n)}function s(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=s,e.exports=i,i.id="D9WN"},EwjG:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}));var r="UPDATE_SYSTEM_DEFAULT_APPS",i="UPDATE_RUBIX_SERVICE_VERSION"},VleD:function(e,n,t){"use strict";t.d(n,"d",(function(){return r})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return o}));var r=function(e,n){try{return localStorage.setItem(e,n),!0}catch(e){return console.error(e),!1}},i=function(e){try{return localStorage.getItem(e)}catch(n){throw console.error(n),new Error("Get Item from localstorage "+e+" Unsuccessful")}},s=function(e){try{return localStorage.removeItem(e),!0}catch(e){return console.error(e),!1}},o=function(){localStorage.clear()}},Vtdi:function(e,n,t){"use strict";t.r(n);var r=t("pLV6"),i={name:"App",components:{}},s=t("psIG"),o=Object(s.a)(i,(function(){var e=this.$createElement,n=this._self._c||e;return n("v-app",[n("router-view")],1)}),[],!1,null,null,null).exports,a=t("SvlV");r.default.use(a.a);var l=new a.a({mode:"history",routes:[{path:"/login",name:"login",component:function(){return Promise.all([t.e(0),t.e(46)]).then(t.bind(null,"V4qv"))},meta:{guest:!0}},{path:"",name:"main",component:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"vn8H"))},meta:{auth:!0},children:[{path:"",redirect:"services"},{path:"services",name:"services",component:function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"yu+2"))},meta:{settingKey:"services"}},{path:"file",name:"file",component:function(){return Promise.all([t.e(0),t.e(40)]).then(t.bind(null,"ZAOQ"))},meta:{settingKey:"fileManager"}},{path:"bacnet-server",name:"bacnet-server",component:function(){return Promise.all([t.e(0),t.e(17)]).then(t.bind(null,"sB4z"))},meta:{settingKey:"bacnetServer"}},{path:"modbus",name:"modbus",component:function(){return t.e(48).then(t.bind(null,"CFgp"))},children:[{path:"",redirect:"networks"},{path:"networks",name:"modbus-networks",component:function(){return Promise.all([t.e(0),t.e(15)]).then(t.bind(null,"wj8f"))},meta:{settingKey:"modbus"}},{path:"networks/:id/devices",name:"modbus-devices",component:function(){return Promise.all([t.e(0),t.e(2),t.e(29)]).then(t.bind(null,"I/yX"))},meta:{settingKey:"modbus"}},{path:"devices/:id/points",name:"modbus-points",component:function(){return Promise.all([t.e(0),t.e(2),t.e(32)]).then(t.bind(null,"X9R6"))},meta:{settingKey:"modbus"}},{path:"networks/:id/points-view",name:"modbus-all-point-view",component:function(){return Promise.all([t.e(0),t.e(24)]).then(t.bind(null,"jnha"))},meta:{settingKey:"modbus"}},{path:"networks/devices-view",name:"modbus-all-device-view",component:function(){return Promise.all([t.e(0),t.e(23)]).then(t.bind(null,"oguq"))},meta:{settingKey:"modbus"}},{path:"networks/all-networks-points-view",name:"modbus-all-networks-points-view",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"Q71W"))},meta:{settingKey:"modbus"}}]},{path:"schedules",name:"schedules",component:function(){return t.e(26).then(t.bind(null,"QZPb"))},meta:{settingKey:"schedules"}},{path:"api-client",name:"apiClient",component:function(){return Promise.all([t.e(0),t.e(19)]).then(t.bind(null,"TV0J"))},meta:{settingKey:"apiClient"}},{path:"ip-scanning",name:"ipScanning",component:function(){return Promise.all([t.e(0),t.e(43)]).then(t.bind(null,"sfEO"))},meta:{settingKey:"ipScanning"}},{path:"rubix-driver",name:"rubix-driver",component:function(){return t.e(49).then(t.bind(null,"/sIN"))},children:[{path:"",redirect:"networks"},{path:"networks",name:"rubix-driver-networks",component:function(){return Promise.all([t.e(0),t.e(1),t.e(27)]).then(t.bind(null,"9eyI"))},meta:{settingKey:"cloudNetworks"}},{path:"networks/:id/devices",name:"rubix-driver-devices",component:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(36)]).then(t.bind(null,"XFe0"))},meta:{settingKey:"cloudNetworks"}},{path:"devices/:id/points",name:"rubix-driver-points",component:function(){return Promise.all([t.e(0),t.e(1),t.e(25)]).then(t.bind(null,"Zs/s"))},meta:{settingKey:"cloudNetworks"}},{path:"networks/:id/points-view",name:"rubix-driver-all-point-view",component:function(){return Promise.all([t.e(0),t.e(1),t.e(34)]).then(t.bind(null,"YOUL"))},meta:{settingKey:"cloudNetworks"}},{path:"networks/devices-view",name:"rubix-driver-all-device-view",component:function(){return Promise.all([t.e(0),t.e(1),t.e(33)]).then(t.bind(null,"d0z6"))},meta:{settingKey:"cloudNetworks"}},{path:"networks/all-networks-points-view",name:"rubix-driver-all-networks-points-view",component:function(){return Promise.all([t.e(0),t.e(1),t.e(35)]).then(t.bind(null,"CY4P"))},meta:{settingKey:"cloudNetworks"}}]},{path:"logging",name:"logging",component:function(){return t.e(31).then(t.bind(null,"RPxB"))},meta:{settingKey:"logging"}},{path:"iframe/:id",name:"wires",component:function(){return t.e(41).then(t.bind(null,"m7/C"))}},{path:"update-service/:id",name:"wires",component:function(){return Promise.all([t.e(0),t.e(37)]).then(t.bind(null,"UMWO"))}},{path:"crop-image",name:"Crop Image",component:function(){return Promise.all([t.e(0),t.e(38)]).then(t.bind(null,"Cvoc"))}},{path:"service-mapping",name:"Service Mapping",component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"rRpL"))},meta:{settingKey:"serviceMapping"}},{path:"mqtt",name:"MQTT",component:function(){return Promise.all([t.e(0),t.e(28)]).then(t.bind(null,"d521"))},meta:{settingKey:"mqtt"}},{path:"setting",name:"Setting",component:function(){return Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"rO2P"))}},{path:"exception-403",name:"exception-403",component:function(){return t.e(39).then(t.bind(null,"N67k"))}},{path:"lora-network",name:"lora-network",component:function(){return t.e(47).then(t.bind(null,"+LRK"))},children:[{path:"",redirect:"devices"},{path:"devices",name:"lora-device",component:function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"kdJE"))},meta:{settingKey:"lora"}},{path:"devices/:id/points",name:"lora-points",component:function(){return Promise.all([t.e(0),t.e(30)]).then(t.bind(null,"mfvb"))},meta:{settingKey:"lora"}},{path:"points-view",name:"lora-all-point-view",component:function(){return Promise.all([t.e(0),t.e(42)]).then(t.bind(null,"bvuW"))},meta:{settingKey:"lora"}}]},{path:"app-manager",name:"app-manager",component:function(){return Promise.all([t.e(0),t.e(44)]).then(t.bind(null,"5NNd"))}},{path:"rubix-apps",name:"rubix-apps",component:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"/NG7"))}},{path:"master-slaves",name:"master-slaves",component:function(){return Promise.all([t.e(0),t.e(16)]).then(t.bind(null,"OvPX"))}},{path:"io-10-config",name:"io-10-config",component:function(){return t.e(50).then(t.bind(null,"rSMQ"))}},{path:"user-management",name:"user-mangement",component:function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"3aQG"))}},{path:"bacnet-master",name:"bacnet-master",component:function(){return t.e(45).then(t.bind(null,"C5KM"))},children:[{path:"",redirect:"networks"},{path:"networks",name:"bacnet-networks",component:function(){return Promise.all([t.e(0),t.e(3),t.e(18)]).then(t.bind(null,"vvqG"))},meta:{settingKey:"bacnetMaster"}},{path:"networks/:id/devices",name:"bacnet-devices",component:function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"DBb5"))},meta:{settingKey:"bacnetMaster"}},{path:"devices/:id/points",name:"bacnet-points",component:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"58Lb"))},meta:{settingKey:"bacnetMaster"}},{path:"networks/:id/points-view",name:"bacnet-all-point-view",component:function(){return Promise.all([t.e(0),t.e(21)]).then(t.bind(null,"Xb9B"))},meta:{settingKey:"bacnetMaster"}},{path:"networks/devices-view",name:"bacnet-all-device-view",component:function(){return Promise.all([t.e(0),t.e(20)]).then(t.bind(null,"hwLe"))},meta:{settingKey:"bacnetMaster"}},{path:"networks/all-networks-points-view",name:"bacnet-all-networks-points-view",component:function(){return Promise.all([t.e(0),t.e(22)]).then(t.bind(null,"VRts"))},meta:{settingKey:"bacnetMaster"}}]}]}]}),u=t("sYnG"),c=t.n(u),m=(t("zNBp"),t("Rzdp"));r.default.use(c.a);var d={theme:{dark:!0,themes:{dark:{primary:m.a.blue.darken2,accent:m.a.red.accent2,secondary:m.a.grey.lighten1,info:m.a.blue.lighten1,warning:m.a.amber.darken2,error:m.a.red.accent4,success:m.a.green.lighten2}}},icons:{iconfont:"mdiSvg"}},p=new c.a(d),f=t("TcPG"),g=t.n(f),h=t("Kz1y"),v=t.n(h),b=t("lOrp"),P=t("EwjG"),j={changeSetting:function(e,n){e.setting=v()({},e.setting,n)},changePingData:function(e,n){e.pingData=n},changeLoading:function(e,n){e.loading=n},changeIframes:function(e,n){e.iframes=n},changeAppDetails:function(e,n){e.appDetails=n},changeMqttConfig:function(e,n){e.mqttConfig=v()({},e.mqttConfig,n)},changeMbNetworksData:function(e,n){e.mbNetworks=n},changeRdNetworksData:function(e,n){e.rdNetworks=n},changeAppDetailsStatus:function(e,n){var t=n.service,r=n.isEnabled,i=e.appDetails.findIndex((function(e){return e.service==t}));null==i&&(e.appDetails[i].is_enabled=r)},changeInstalledServices:function(e,n){e.installedServices=n},changeServicesConfigured:function(e,n){e.isServicesConfigured=v()({},e.isServicesConfigured,n)},changeBulkAppDownloadState:function(e,n){e.currentBulkAppDownloadState=n},changeMqttRestBridgeConfig:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.mqttRestBridgeConfig=v()({},n),e.isMaster=n&&n.master||!1},changeBmNetworksData:function(e,n){e.bmNetworks=n}},w=t("11l9"),k=t.n(w),y=t("TiKg"),S=t.n(y),E=t("dJcQ"),M=t.n(E),R=t("czhI"),D=t.n(R),A=t("ne7N"),I=t.n(A),C=t("05qM"),O=t.n(C),x=t("VleD"),K=(t("Bi0q"),t("OLqI"),t("c/kN"),t("uzYq"));window.EventBus=new r.default,K.a.get("setting").then((function(e){r.default.prototype.$http=D.a,r.default.config.productionTip=!1,r.default.use(b.a);var n=function(e){var n;return new b.a.Store({state:{setting:e,pingData:{},iframes:[],mqttConfig:{debugSubscriptions:{}},loading:!1,appDetails:[],isServicesConfigured:{rubixBios:!0,rubixService:!0},rubixAppVersion:{version:""},installedServices:[],systemDefaultApps:[],mqttRestBridgeConfig:{},isFetchingRestBridgeConfig:!0,isMaster:null,currentBulkAppDownloadState:"",mbNetworks:[],rdNetworks:[],bmNetworks:[]},mutations:v()({},j,(n={},g()(n,P.b,(function(e,n){e.systemDefaultApps=n})),g()(n,P.a,(function(e,n){e.rubixAppVersion=n})),n))})}(e);r.default.use(k.a,{duration:5e3,keepOnHover:!0,position:"bottom-right",type:"success"}),l.beforeEach((function(e,t,r){var i=n.state.setting;e.matched.some((function(e){return e.meta.auth}))?x.b("token")?e.meta.settingKey&&!i[e.meta.settingKey]?r({path:"/exception-403"}):r():r({path:"/login",params:{nextUrl:e.fullPath}}):r()})),new r.default({el:"#app",router:l,components:{App:o},template:"<App/>",vuetify:p,store:n}),r.default.filter("formatDate",(function(e){if(e)return S()(String(e)).format("MM/DD/YYYY hh:mm:ss")})),r.default.filter("timezone",(function(n){var t=e.timezone;return e.timezone&&"BaseOnBrowser"!==e.timezone||(t=Intl.DateTimeFormat().resolvedOptions().timeZone),M.a.utc(n).tz(t).format("YYYY-MM-DD HH:mm:ss")})),r.default.use(O.a),r.default.use(I.a)}))},uzYq:function(e,n,t){"use strict";var r=t("/9Wh"),i=t.n(r),s=t("TcPG"),o=t.n(s),a=t("OBCi"),l=t.n(a),u=t("czhI"),c=t.n(u),m=t("+n12"),d=t("VleD"),p=t("A5Vd"),f=c.a.create({headers:{"Content-Type":"application/json"}});f.interceptors.request.use((function(e){var n=d.b("token");return n&&(e.headers.Authorization="Bearer "+n),e.baseURL=Object(m.i)()+"/api",e}),(function(e){return l.a.reject(e)})),f.interceptors.response.use((function(e){return e.data}),(function(e){var n=e.response,t=e.config;if(n){var r=!0,s=n.status,a=n.data;401===s&&a&&"PROXY_UNAUTHORIZED"==a.message&&(d.a(),window.location.href="login"),401===s&&a&&a.message==="SERVICE_UNAUTHORIZED:"+p.i.RUBIX_SERVICE&&(r=!1,window.EventBus.$emit("show-reconfigure-services",o()({},p.i.RUBIX_SERVICE,!1))),401===s&&a&&a.message==="SERVICE_UNAUTHORIZED:"+p.i.RUBIX_BIOS&&(r=!1,window.EventBus.$emit("show-reconfigure-services",o()({},p.i.RUBIX_BIOS,!1))),403===s&&(window.location.href="/exception-403"),!t.restrictToast&&r&&window.EventBus.$emit("show-toast",a.message),window.EventBus.$emit("change-loading",!1);var u=JSON.parse(d.b("logs"))||[],c={time:(new Date).getTime(),message:a.message};a.description&&(c.description=a.description);var m=u.find((function(e){var n=e.message===a.message;return e.description&&(n&=e.description===a.description),n}));return m&&0!==m.length||u.push(c),d.d("logs",i()(u)),l.a.reject(a)}return l.a.reject(e)})),n.a=f}},[["Vtdi",5,0]]]);
//# sourceMappingURL=4.82b7961a32fa9d07b65d.js.map