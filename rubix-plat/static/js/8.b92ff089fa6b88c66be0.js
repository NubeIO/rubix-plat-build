(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+SqX":function(t,e,a){"use strict";var n={name:"page-title",props:["title"]},r=a("psIG"),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"text-h5 text-left py-3"},[a("span",[t._v(t._s(t.title))]),t._t("titleActions"),t._v(" "),t._t("spinner")],2)}),[],!1,null,null,null);e.a=i.exports},"5Bfd":function(t,e,a){"use strict";var n={name:"icon-button",props:["icon-key","on-click","button-title","color","btnSize","disabled","loading"]},r=a("psIG"),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",["small"==t.btnSize?a("v-btn",{staticClass:"pa-2",attrs:{loading:t.loading,disabled:t.disabled,color:t.color,small:"",text:""},on:{click:t.onClick}},[a("v-icon",[t._v(t._s(t.iconKey))]),t._v(" "),t.buttonTitle?a("span",[t._v(" "+t._s(t.buttonTitle))]):t._e()],1):a("v-btn",{staticClass:"pa-2",attrs:{loading:t.loading,disabled:t.disabled,color:t.color,"x-small":"",text:""},on:{click:t.onClick}},[a("v-icon",[t._v(t._s(t.iconKey))]),t._v(" "),t.buttonTitle?a("span",[t._v(" "+t._s(t.buttonTitle))]):t._e()],1)],1)}),[],!1,null,null,null);e.a=i.exports},"7Vew":function(t,e,a){"use strict";var n={name:"text-field-display",props:["label","value"]},r=a("psIG"),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.label?a("div",{staticClass:"grey--text caption mb-2"},[a("span",[t._v(t._s(t.label))])]):t._e(),t._v(" "),t.value?a("div",{staticClass:"font-weight-medium text-ellipses"},[a("span",{staticClass:"field-display-value",attrs:{title:t.value}},[t._v(t._s(t.value))])]):t._e()])}),[],!1,null,null,null);e.a=i.exports},E8PC:function(t,e,a){"use strict";e.a=a.p+"static/img/nube-frog-green.489e567.png"},MKDl:function(t,e,a){"use strict";var n={active:{name:"active",displayName:"Running",outlined:!0,color:"success"},reloading:{name:"reloading",outlined:!0,displayName:"Reloading",color:"yellow"},failed:{name:"failed",outlined:!0,displayName:"Failed",color:"red"},activating:{name:"activating",outlined:!0,displayName:"Activating",color:"yellow"},deactivating:{outlined:!0,name:"deactivating",displayName:"Deactivating",color:"yellow"},maintenance:{name:"maintenance",outlined:!0,displayName:"Maintenance",color:"yellow"},STARTED:{name:"STARTED",outlined:!0,displayName:"Started",color:"blue"},RUNNING:{name:"RUNNING",outlined:!0,displayName:"Running",color:"yellow"},FINISHED:{name:"FINISHED",outlined:!0,displayName:"Finished",color:"green"},BROKEN:{name:"BROKEN",outlined:!0,displayName:"Broken",color:"red"},MAPPED:{name:"MAPPED",outlined:!0,displayName:"Mapped",color:"green"}},r={name:"app-status-chip",props:["status","state","chipSize"],computed:{currentStatus:function(){var t=n[this.state];return t||{name:"default",displayName:this.capitalize(this.state),color:"yellow"}},defaultStatus:function(){return this.capitalize(this.state)}},methods:{capitalize:function(t){return t||(t=""),(t=String(t)).charAt(0).toUpperCase()+t.slice(1)}}},i=a("psIG"),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.state?a("div",[a("span",{staticClass:"font-weight-medium"},[t.chipSize&&"small"===t.chipSize?a("v-chip",{attrs:{small:"",outlined:"",color:t.currentStatus.color}},[t._v(t._s(t.currentStatus.displayName))]):a("v-chip",{attrs:{outlined:"",color:t.currentStatus.color}},[t._v(t._s(t.currentStatus.displayName))])],1)]):a("div",[a("span",{staticClass:"font-weight-medium"},[t.chipSize&&"small"===t.chipSize?a("v-chip",{attrs:{small:"",outlined:"",color:"yellow"}},[t._v(t._s(t.defaultStatus))]):a("v-chip",{attrs:{outlined:"",color:"yellow"}},[t._v(t._s(t.defaultStatus))])],1)])])}),[],!1,null,null,null);e.a=s.exports},N4QW:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"d",(function(){return s})),a.d(e,"h",(function(){return o})),a.d(e,"g",(function(){return c})),a.d(e,"c",(function(){return l})),a.d(e,"f",(function(){return u})),a.d(e,"e",(function(){return d})),a.d(e,"i",(function(){return v})),a.d(e,"a",(function(){return f}));var n=a("uzYq"),r="/rubix-service",i=function(){return n.a.get(r+"/plat")},s=function(){return n.a.get(r+"/status")},o=function(){return n.a.put(r+"/upgrade",{version:"latest"})},c=function(t){return n.a.put(r+"/upgrade",{version:t})},l=function(){return n.a.get(r+"/releases")},u=function(t){return n.a.post(r+"/token",{token:t})},d=function(){return n.a.get(r+"/token-hint")},v=function(t,e){var a=new FormData;return a.append("upgradeFile",e),a.append("version",t),n.a.post(r+"/upload-upgrade",a,{headers:{"Content-Type":"multipart/form-data"}})},f=function(){return n.a.get(r+"/app-url")}},Tv0g:function(t,e,a){"use strict";var n=a("06Hw"),r=a.n(n),i=a("tZmG"),s=a.n(i),o=a("YYXh"),c=a.n(o),l=a("uzYq"),u=a("+n12"),d={props:["server"],data:function(){return{toUpperTextKey:u.q,headers:[{text:"Name",value:"name",width:"200px"},{text:"Value",value:"value",sortable:!1}],dataTable:[],loading:!1}},mounted:function(){this.getSystemStatus()},methods:{getUrlApi:function(){switch(this.server){case"modbus":return"point-server";case"bac-net":return"bac-net";case"lora":return"lora";case"bacnet-master":return"bacnet_master";case"rubix-service":return"rubix-service"}},getSystemStatus:function(){var t=this;return c()(r.a.mark((function e(){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,a=t.getUrlApi(),e.next=5,l.a.get(a+"/system/ping");case 5:n=e.sent,t.dataTable=s()(n).map((function(t){return{name:Object(u.q)(t),value:n[t]}})),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,t,[[0,9,11,14]])})))()}}},v=a("psIG"),f=Object(v.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-start mt-2"},[a("v-data-table",{staticClass:"elevation-1",attrs:{loading:t.loading,headers:t.headers,items:t.dataTable,"items-per-page-all-text":"","hide-default-footer":""},scopedSlots:t._u([{key:"item.value",fn:function(e){var n=e.item;return["object"==typeof n.value?a("div",{staticClass:"pa-1"},t._l(Object.keys(n.value),(function(e,r){return a("span",{key:r,staticClass:"font-weight-medium mr-2"},["boolean"==typeof n.value[e]?a("span",[n.value[e]?a("v-chip",{attrs:{dark:"",color:"green",small:""}},[t._v(t._s(t.toUpperTextKey(e)))]):a("v-chip",{attrs:{dark:"",color:"grey",small:""}},[t._v(t._s(t.toUpperTextKey(e)))])],1):"object"==typeof n.value[e]?a("span",t._l(Object.keys(n.value[e]),(function(r,i){return a("span",{key:i,staticClass:"font-weight-medium mr-2"},["boolean"==typeof n.value[e][r]?a("span",[n.value[e][r]?a("v-chip",{staticClass:"mt-2",attrs:{dark:"",color:"green",small:""}},[t._v(t._s(t.toUpperTextKey(e))+" : "+t._s(t.toUpperTextKey(r)))]):a("v-chip",{staticClass:"mt-2",attrs:{dark:"",color:"grey",small:""}},[t._v(t._s(t.toUpperTextKey(e))+" : "+t._s(t.toUpperTextKey(r)))])],1):a("span",[a("br"),t._v(t._s(t.toUpperTextKey(r))+" : "+t._s(n.value[e][r]))])])})),0):a("span",[a("br"),t._v(t._s(t.toUpperTextKey(e))+" : "+t._s(n.value[e]))])])})),0):a("div",{staticClass:"pa-1"},[t._v(t._s(n.value))])]}}])})],1)}),[],!1,null,"2caf14d1",null);e.a=f.exports},"Wgf/":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return s}));var n=a("uzYq"),r="/system-service",i=function(){return n.a.get(r)},s=function(t,e){return n.a.post(r+"/control",[{action:t,service:e}])}},lkCm:function(t,e,a){"use strict";var n={name:"confirm-dialog",props:["on-close","on-confirm","dialog-text","is-open","loading"]},r=a("psIG"),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[a("v-card",[a("v-card-title",[a("v-icon",{attrs:{color:"warning"}},[t._v(" mdi-alert-outline ")]),t._v(" Confirm ")],1),t._v(" "),a("v-card-text",[a("v-container",[a("v-row",[t._v(t._s(t.dialogText))])],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{text:""},on:{click:t.onClose}},[t._v(" No ")]),t._v(" "),a("v-btn",{attrs:{color:"red darken-1",loading:t.loading,text:""},on:{click:t.onConfirm}},[t._v(" Yes ")])],1)],1)],1)}),[],!1,null,null,null);e.a=i.exports},nz6T:function(t,e,a){"use strict";a.r(e),a.d(e,"fetchApps",(function(){return y})),a.d(e,"fetchAllApps",(function(){return x})),a.d(e,"fetchAllInstalledApps",(function(){return w})),a.d(e,"fetchSystemDefaultApps",(function(){return D})),a.d(e,"fetchAppReleases",(function(){return k})),a.d(e,"fetchAppsReleases",(function(){return S})),a.d(e,"fetchAppStatus",(function(){return C})),a.d(e,"uninstallApp",(function(){return A})),a.d(e,"installApp",(function(){return T})),a.d(e,"downloadApp",(function(){return N})),a.d(e,"changeServiceStatus",(function(){return E})),a.d(e,"uploadApp",(function(){return z})),a.d(e,"deleteAppData",(function(){return R})),a.d(e,"deleteAppDataService",(function(){return O})),a.d(e,"downloadAppData",(function(){return I})),a.d(e,"fetchJSONConfig",(function(){return $})),a.d(e,"fetchEnvConfig",(function(){return P})),a.d(e,"fetchAppConfig",(function(){return j})),a.d(e,"saveJSONConfig",(function(){return B})),a.d(e,"saveENVConfig",(function(){return q})),a.d(e,"saveAppConfig",(function(){return K})),a.d(e,"deleteJSONConfig",(function(){return U})),a.d(e,"deleteENVConfig",(function(){return F})),a.d(e,"deleteAppConfig",(function(){return Y})),a.d(e,"downloadAppConfig",(function(){return M})),a.d(e,"bulkAppControl",(function(){return H})),a.d(e,"bulkInstallApps",(function(){return L})),a.d(e,"bulkDownloadApps",(function(){return G})),a.d(e,"fetchDownloadState",(function(){return V})),a.d(e,"deleteDownloadState",(function(){return W}));var n,r=a("/9Wh"),i=a.n(r),s=a("06Hw"),o=a.n(s),c=a("YYXh"),l=a.n(c),u=a("OBCi"),d=a.n(u),v=a("uzYq"),f=a("NWgQ"),p=a.n(f),m=a("N4QW"),h=a("A5Vd"),g=a("Wgf/"),_=a("+n12"),b="/rubix-app",y=function(){var t=p.a.stringify({browser_download_url:!0,latest_version:!0});return v.a.get(b+"?"+t)},x=function(){return g.b()},w=function(){return v.a.get(""+b).then((function(t){return t.filter((function(t){return t&&t.is_installed}))}))},D=function(){return g.b().then((function(t){return t.filter((function(t){return t&&t.is_installed}))}))},k=function(t){return v.a.get(b+"/releases/"+t)},S=function(t){return d.a.all(t.map((function(t){return k(t).catch((function(t){return[]}))})))},C=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v.a.get(b+"/stats/"+t,e)},A=function(t){return v.a.post(b+"/uninstall",{service:t})},T=function(t){return v.a.post(b+"/install",[t])},N=function(t){return v.a.post(b+"/download",[t])},E=function(t,e){return v.a.post(b+"/control",[{action:t,service:e}])},z=function(t,e,a){var n=new FormData;return n.append("file",t),n.append("service",e),n.append("version",a),v.a.post(b+"/app-upload",n,{headers:{"Content-Type":"multipart/form-data"}})},R=function(t){return v.a.post(b+"/delete-app-data",[{service:t}])},O=function(t){return R(t)},I=(n=l()(o.a.mark((function t(e){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a();case 2:return a=t.sent,n=a.data+"api/app/download_data?service="+e,t.abrupt("return",v.a.get(n,{headers:{"Content-Type":"application/zip"},responseType:"arraybuffer"}));case 5:case"end":return t.stop()}}),t,void 0)}))),function(t){return n.apply(this,arguments)}),$=function(t,e){return v.a.get(b+"/json-config/"+t,e)},P=function(t,e){return v.a.get(b+"/env/"+t,e)},j=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e===h.i.PYTHON_APP)return $(t,a).then((function(t){return t.data}));if(e===h.i.FRONTEND_APP)return P(t,a).then((function(t){return t.data}));throw new Error("App type not supported for editing config")},B=function(t,e){return v.a.put(b+"/json-config",{service:t,data:e})},q=function(t,e){return v.a.put(b+"/env",{service:t,data:e})},K=function(t,e,a){if(e===h.i.PYTHON_APP)return B(t,a||{});if(e===h.i.FRONTEND_APP)return q(t,a||"");throw new Error("App type not supported for editing config")},U=function(t){return v.a.delete(b+"/json-config",{data:{service:t}})},F=function(t){return v.a.delete(b+"/env",{data:{service:t}})},Y=function(t,e){if(e===h.i.PYTHON_APP)return U(t);if(e===h.i.FRONTEND_APP)return F(t);throw new Error("App type not supported for deletion")},M=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e===h.i.PYTHON_APP)return $(t,a).then((function(e){var a=e.data;Object(_.h)(t+"-config",i()(a))}));if(e===h.i.FRONTEND_APP)return P(t,a).then((function(e){var a=e.data;Object(_.f)(""+t,a)}));throw new Error("App type not supported for download config")},H=function(t){return v.a.post(b+"/control",t)},L=function(t){return v.a.post(b+"/install",t)},G=function(t){return v.a.post(b+"/download",t)},V=function(){return v.a.get(b+"/download-state",{restrictToast:!0})},W=function(){return v.a.delete(b+"/download-state")}},vQiG:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"f",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"g",(function(){return o})),a.d(e,"d",(function(){return c})),a.d(e,"e",(function(){return l}));var n={success:"Successfully updated status change.",error:"Status change unsuccessful."},r={success:"Successfully updated setting.",error:"Status change unsucessful."},i={success:"Upgrade successful.",error:"Upgrade unsuccessful."},s={success:"Successfully created mapping.",error:"Mapping could not be created."},o={success:"Successfully updated mapping.",error:"Mapping could not be updated."},c={success:"Successfully deleted mapping",error:"Mapping could not be deleted"},l={success:"Successfully deleted mapping(s)",error:"Mapping(s) could not be deleted"}},"yu+2":function(t,e,a){"use strict";a.r(e);var n,r=a("TcPG"),i=a.n(r),s=a("+SqX"),o=a("Kz1y"),c=a.n(o),l=a("5Bfd"),u=a("lkCm"),d=a("MKDl"),v=a("7Vew"),f=a("A5Vd"),p=a("vQiG"),m={name:"app-details-view",props:["app-detail","sync-app-details","change-service-status"],components:{AppStatusChip:d.a,IconButton:l.a,ConfirmDialog:u.a,TextFieldDisplay:v.a},data:function(){var t,e,a={startBtn:"startBtn",restartBtn:"restartBtn",stopBtn:"stopBtn",enableBtn:"enableBtn",disableBtn:"disableBtn"},n=(t={},i()(t,a.startBtn,{name:a.startBtn,title:"Start",color:"blue darken-2",iconKey:"mdi-play-circle-outline",action:f.h.START}),i()(t,a.restartBtn,{name:a.restartBtn,title:"Restart",color:"green darken-2",iconKey:"mdi-restart",action:f.h.RESTART}),i()(t,a.stopBtn,{name:a.stopBtn,title:"Stop",onClick:this.onStart,iconKey:"mdi-stop-circle-outline",action:f.h.STOP}),t),r={enable:f.h.ENABLE,disable:f.h.DISABLE},s=[a.startBtn,a.stopBtn,a.restartBtn];return{appActions:c()({},f.h),cardLoading:!1,dialog:(e={},i()(e,f.h.STOP,!1),i()(e,f.h.RESTART,!1),e),btnNames:a,toggleConfig:r,status:this.appDetail.status,isEnabled:this.appDetail.is_enabled,state:this.appDetail.state,version:this.appDetail.version||"-",serviceName:this.appDetail.service||"-",message:this.appDetail.msg||"",displayName:this.appDetail.display_name,activeSince:this.appDetail.time_since||"N/A",actionButtons:s.map((function(t){return n[t]}))}},methods:{handleControlAction:function(t){switch(t){case f.h.START:case f.h.ENABLE:case f.h.DISABLE:this.updateServiceStatus(t);break;case f.h.STOP:case f.h.RESTART:this.dialog[t]=!0}},closeDialog:function(t){this.dialog[t]=!1},handleDialogConfirm:function(t){var e=this;this.updateServiceStatus(t,(function(){return e.closeDialog(t)}))},updateServiceStatus:function(t,e){var a=this;this.cardLoading=!0;var n=t===this.toggleConfig.enable||t===this.toggleConfig.disable;this.changeServiceStatus(t,this.appDetail.service).then((function(t){n||"function"==typeof a.syncAppDetails&&a.syncAppDetails(),a.$toasted.show(p.a.success)})).catch((function(t){console.error(t),a.$toasted.show(p.a.error,{type:"error"})})).finally((function(){a.cardLoading=!1,n&&a.$store.commit("changeAppDetailsStatus",{service:a.appDetail.service,isEnabled:a.isEnabled}),"function"==typeof e&&e()}))}}},h=a("psIG"),g=Object(h.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{attrs:{elevation:"2",outlined:"",loading:t.cardLoading}},[a("v-card-text",[a("v-row",{staticClass:"mb-n2",attrs:{dense:""}},[a("v-col",{staticClass:"text-left",attrs:{cols:"12"}},[a("text-field-display",{attrs:{value:t.displayName}})],1)],1),t._v(" "),a("v-row",{staticClass:"mb-n2",attrs:{dense:""}},[a("v-col",{staticClass:"text-left justify-flex-start app-status-chip-wrapper",attrs:{cols:"6"}},[a("app-status-chip",{attrs:{state:t.state}})],1),t._v(" "),a("v-col",{staticClass:"app-detail-switch-wrapper",attrs:{cols:"6"}},[a("div",{staticClass:"mr-n3"},[a("span",{staticClass:"grey--text caption"},[t._v("Enable")]),t._v(" "),a("v-switch",{attrs:{inset:"",disabled:t.cardLoading,color:"success"},on:{change:function(e){return t.handleControlAction(t.isEnabled?t.toggleConfig.enable:t.toggleConfig.disable)}},model:{value:t.isEnabled,callback:function(e){t.isEnabled=e},expression:"isEnabled"}})],1)])],1),t._v(" "),a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"text-left",attrs:{cols:"5"}},[a("text-field-display",{attrs:{label:"Service Name",value:t.serviceName}})],1),t._v(" "),a("v-col",{staticClass:"text-left",attrs:{cols:"3"}},[a("text-field-display",{attrs:{label:"Version",value:t.version}})],1),t._v(" "),a("v-col",{staticClass:"text-right",attrs:{cols:"4"}},[a("text-field-display",{attrs:{label:"Active",value:t.activeSince}})],1)],1)],1),t._v(" "),t.appDetail.service?a("div",{staticClass:"mb-3"},[a("span",{staticClass:"flex-box justify-space-between px-2"},t._l(t.actionButtons,(function(e){return a("icon-button",{key:e.name,attrs:{"on-click":function(){return t.handleControlAction(e.action)},"button-title":e.title,"icon-key":e.iconKey,color:e.color}})})),1)]):t._e()],1),t._v(" "),a("confirm-dialog",{attrs:{"is-open":t.dialog.stop,loading:t.cardLoading,"on-close":function(){return t.closeDialog(t.appActions.STOP)},"on-confirm":function(){return t.handleDialogConfirm(t.appActions.STOP)},"dialog-text":"Do you want to stop the app?"}}),t._v(" "),a("confirm-dialog",{attrs:{"is-open":t.dialog.restart,loading:t.cardLoading,"on-close":function(){return t.closeDialog(t.appActions.RESTART)},"on-confirm":function(){return t.handleDialogConfirm(t.appActions.RESTART)},"dialog-text":"Do you want to restart the app?"}})],1)}),[],!1,null,null,null).exports,_=a("nz6T"),b=a("EwjG"),y=a("Wgf/"),x={components:{AppDetailsView:g,PageTitle:s.a},data:function(){return{isLoadingData:!1,recompute:0}},computed:{systemDefaultApps:function(){return this.$store.state.systemDefaultApps}},methods:{fetchSystemDefaultApps:function(){var t=this;return _.fetchSystemDefaultApps().then((function(e){t.$store.commit(b.b,e),t.recompute++})).catch((function(t){console.error(t)})).finally((function(){t.isLoadingData=!1}))},changeServiceStatus:y.a}},w=Object(h.a)(x,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card-text",{attrs:{loading:t.isLoadingData}},[a("page-title",{attrs:{title:"Services"}}),t._v(" "),a("v-spacer"),t._v(" "),a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{"no-gutter":""}},t._l(t.systemDefaultApps,(function(e){return a("v-col",{key:e.service,attrs:{cols:"12",lg:"4",md:"6",sm:"12",xs:"12"}},[a("app-details-view",{key:t.recompute+"-"+e.service,attrs:{"app-detail":e,"sync-app-details":t.fetchSystemDefaultApps,"change-service-status":t.changeServiceStatus}})],1)})),1)],1)],1)}),[],!1,null,null,null).exports,D=a("E8PC"),k={components:{AppDetailsView:g,PageTitle:s.a},data:function(){return{logo:D.a,action:"",valid:!1,isLoadingData:!1,recompute:0}},computed:{services:function(){return this.$store.state.installedServices}},mounted:function(){this.fetchAllServices()},methods:{fetchAllServices:function(){var t=this;return this.isLoadingData=!0,_.fetchAllInstalledApps().then((function(e){t.$store.commit("changeInstalledServices",e),t.recompute++})).catch((function(t){console.error(t)})).finally((function(){t.isLoadingData=!1}))},changeServiceStatus:_.changeServiceStatus}},S=Object(h.a)(k,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card-text",[a("page-title",{attrs:{title:"Installed Apps"},scopedSlots:t._u([{key:"spinner",fn:function(){return[t.isLoadingData?a("v-progress-circular",{attrs:{indeterminate:"",size:"20"}}):t._e()]},proxy:!0}])}),t._v(" "),a("v-spacer"),t._v(" "),a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{"no-gutter":""}},t._l(t.services,(function(e){return a("v-col",{key:e.service,attrs:{cols:"12",lg:"4",md:"6",sm:"12",xs:"12"}},[a("app-details-view",{key:t.recompute+"-"+e.service,attrs:{"app-detail":e,"sync-app-details":t.fetchAllServices,"change-service-status":t.changeServiceStatus}})],1)})),1)],1)],1)}),[],!1,null,"753077d4",null).exports,C=a("tZmG"),A=a.n(C),T=a("06Hw"),N=a.n(T),E=a("YYXh"),z=a.n(E),R=a("uzYq"),O={props:["item","cancel","save"],data:function(){return{rules:{required:function(t){return!!t||"Required."}},confirmDialog:!1}},computed:{formData:function(){return this.item}},methods:{onConfirm:function(){this.confirmDialog=!1,this.save(this.formData)}}},I={name:"networking",components:{UpdateNetworking:Object(h.a)(O,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-switch",{attrs:{label:"DHCP?"},model:{value:t.formData.isDhcp,callback:function(e){t.$set(t.formData,"isDhcp",e)},expression:"formData.isDhcp"}}),t._v(" "),a("v-row",[t.formData.interface?a("v-col",[a("v-text-field",{attrs:{readonly:"",label:"Interface",required:""},model:{value:t.formData.interface,callback:function(e){t.$set(t.formData,"interface",e)},expression:"formData.interface"}})],1):t._e(),t._v(" "),t.formData.network_reset?a("v-col",[a("v-switch",{attrs:{label:"Reset Network?",rules:[t.rules.required]},model:{value:t.formData.network_reset,callback:function(e){t.$set(t.formData,"network_reset",e)},expression:"formData.network_reset"}})],1):t._e()],1),t._v(" "),a("v-row",[t.formData.address?a("v-col",[t.formData.isDhcp?t._e():a("v-text-field",{attrs:{label:"IP Address",required:"",rules:[t.rules.required]},model:{value:t.formData.address,callback:function(e){t.$set(t.formData,"address",e)},expression:"formData.address"}})],1):t._e(),t._v(" "),t.formData.gateway?a("v-col",[t.formData.isDhcp?t._e():a("v-text-field",{attrs:{label:"Gateway",required:"",rules:[t.rules.required]},model:{value:t.formData.gateway,callback:function(e){t.$set(t.formData,"gateway",e)},expression:"formData.gateway"}})],1):t._e()],1),t._v(" "),a("v-row",[t.formData.domain_name_server?a("v-col",[t.formData.isDhcp?t._e():a("v-text-field",{attrs:{label:"Domain Name",required:"",rules:[t.rules.required]},model:{value:t.formData.domain_name_server,callback:function(e){t.$set(t.formData,"domain_name_server",e)},expression:"formData.domain_name_server"}})],1):t._e(),t._v(" "),t.formData.netmask?a("v-col",[t.formData.isDhcp?t._e():a("v-text-field",{attrs:{label:"Netmask",required:"",rules:[t.rules.required]},model:{value:t.formData.netmask,callback:function(e){t.$set(t.formData,"netmask",e)},expression:"formData.netmask"}})],1):t._e()],1),t._v(" "),a("v-card-actions",[a("v-btn",{attrs:{color:"darken-1",text:""},on:{click:t.cancel}},[t._v(" Cancel ")]),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.confirmDialog=!0}}},[t._v(" Save ")])],1)],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.confirmDialog,callback:function(e){t.confirmDialog=e},expression:"confirmDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("\n        Confirm?\n      ")]),t._v(" "),a("v-card-text",[t._v("Are you sure?")]),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.confirmDialog=!1}}},[t._v("\n          No\n        ")]),t._v(" "),a("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:t.onConfirm}},[t._v("\n          Yes\n        ")])],1)],1)],1)],1)}),[],!1,null,"3943fde8",null).exports},data:function(){return{logo:D.a,dialog:!1,portRules:[],fireWallStatus:!1,headers:[],currentItem:{},data:[]}},computed:{interfaceValues:function(){return this.$store.state.setting.interfaceValues}},mounted:function(){this.getData(),this.getFirewallData(),this.getPortRules()},methods:{displayInterface:function(t){var e=t,a=this.interfaceValues.find((function(e){return e.value===t}));return a&&(e=a.displayValue),e},getPortRules:function(){var t=this;R.a.get("rubix-service/networking/ufw/rules").then((function(e){t.portRules=e}))},enableFirewall:function(t){var e=this;return z()(N.a.mark((function a(){var n;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=t?"enable":"disable",a.next=3,R.a.post("rubix-service/networking/ufw/enable",{enable:n}).then((function(t){e.$toasted.show(t.toString()),e.getFirewallData()}));case 3:case"end":return a.stop()}}),a,e)})))()},getFirewallData:function(){var t=this;R.a.get("rubix-service/networking/ufw/status").then((function(e){t.fireWallStatus=e}))},onCancelUpdate:function(){this.dialog=!1},onSave:function(t){var e=this;return z()(N.a.mark((function a(){var n;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=void 0,n=t.isDhcp?{interface:t.interface,network_reset:!!t.network_reset}:{interface:t.interface,network_reset:!!t.network_reset,ip_address:t.address,routers:t.gateway,domain_name_server:t.domain_name_server,netmask:t.netmask},R.a.post("rubix-service/networking/"+(t.isDhcp?"dhcp":"static"),n).then((function(t){e.$toasted.show("Success!"),e.dialog=!1,e.getData()})).catch((function(t){var a=t.message;e.$toasted.show(a,{type:"error"})}));case 3:case"end":return a.stop()}}),a,e)})))()},onClickEdit:function(t){this.dialog=!0,this.currentItem=c()({},t),this.currentItem=c()({},this.currentItem,{isDhcp:!0,domain_name_server:this.currentItem.domain_name_server||"8.8.8.8"}),"static"===this.currentItem.interface_usage&&(this.currentItem=c()({},this.currentItem,{isDhcp:!1}))},getData:function(){var t=this;return z()(N.a.mark((function e(){var a,n,r,i,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("rubix-service/networking");case 2:for(i in a=e.sent,n=[],r=[{text:"",value:"name"}],a)n.push(c()({},a[i],{name:i}));for(s in a[A()(a)[0]])r.push({text:s,value:s});r.push({text:"Tools",value:"tools"}),t.headers=r,t.data=n;case 11:case"end":return e.stop()}}),e,t)})))()}}},$=Object(h.a)(I,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("H3",{attrs:{align:"left"}},[t._v(" Network Inferface ")]),t._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.data,"item-key":"uuid","show-select":"","disable-sort":""},scopedSlots:t._u([{key:"no-data",fn:function(){return[t._v(" No data ")]},proxy:!0},{key:"item.tools",fn:function(e){var n=e.item;return[a("v-btn",{staticClass:"white--text",attrs:{icon:"",small:""}},[a("v-icon",{attrs:{small:"",dark:""},on:{click:function(){return t.onClickEdit(n)}}},[t._v("\n          mdi-square-edit-outline\n        ")])],1)]}},{key:"item.interface",fn:function(e){var a=e.item;return[t._v("\n      "+t._s(t.displayInterface(a.interface))+"\n    ")]}}])}),t._v(" "),a("H3",{attrs:{align:"left"}},[t._v(" Firewall ")]),t._v(" "),a("v-row",{staticStyle:{"margin-bottom":"20px"}},[a("v-col",[a("v-card",{staticClass:"card-height",attrs:{elevation:"2",outlined:"",tile:""}},[a("v-card-title",[a("h5",[t._v("Firewall")]),t._v(" "),a("v-row",{attrs:{align:"center",justify:"end"}},[a("v-avatar",{attrs:{size:"35"}},[a("img",{attrs:{alt:"logo",src:t.logo}})])],1)],1),t._v(" "),a("v-card-text",{staticClass:"card-text-height text-left"},[a("div",[a("span",{staticClass:"value-style"},[t._v("Firewall status: "+t._s(t.fireWallStatus))])]),t._v(" "),a("div",[a("span",{staticClass:"value-style"},[a("v-switch",{attrs:{label:"Enable Firewall"},on:{change:t.enableFirewall},model:{value:t.fireWallStatus,callback:function(e){t.fireWallStatus=e},expression:"fireWallStatus"}})],1)])])],1)],1),t._v(" "),a("v-col",[a("v-card",{staticClass:"card-height",attrs:{elevation:"2",outlined:"",tile:""}},[a("v-card-title",[a("h5",[t._v("Rule list")]),t._v(" "),a("v-row",{attrs:{align:"center",justify:"end"}},[a("v-avatar",{attrs:{size:"35"}},[a("img",{attrs:{alt:"logo",src:t.logo}})])],1)],1),t._v(" "),a("v-card-text",{staticClass:"card-text-height"},t._l(t.portRules,(function(e){return a("div",{staticClass:"text-left"},[a("span",{staticClass:"value-style"},[t._v(t._s(e.index)+" | "+t._s(e.port)+" | "+t._s(e.action))])])})),0)],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"400px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Update")])]),t._v(" "),a("v-card-text",[a("update-networking",{attrs:{save:t.onSave,cancel:t.onCancelUpdate,item:t.currentItem}})],1)],1)],1)],1)}),[],!1,null,"2e651370",null).exports,P=a("+n12"),j={components:{PageTitle:s.a},data:function(){return{toUpperTextKey:P.q,logo:D.a,freeDisc:{},action:"",timezone:"",timezones:[],time:{},memory:{},confirmDialog:!1,objectKey:A.a}},mounted:function(){var t=this;return z()(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.freeDiscFunc(),t.getSystemTime(),t.getSystemMemory(),t.getTimezones();case 4:case"end":return e.stop()}}),e,t)})))()},computed:{setting:function(){return this.$store.state.setting}},methods:{onChangeTimezone:function(){this.confirmDialog=!0,this.action="changeTimezone"},changeTimezone:function(){var t=this;R.a.post("timezones",{timezone:this.timezone}).then((function(e){t.$toasted.show("success")})).catch((function(e){var a=e.message;t.$toasted.show(a,{type:"error"})}))},getTimezones:function(){var t=this;R.a.get("timezones").then((function(e){t.timezones=e}))},onCancelConfirm:function(){this.confirmDialog=!1,this.timezone="",this.action=""},restartHost:function(){var t=this;return z()(N.a.mark((function e(){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.post("rubix-service/system/host/restart",{action:"restart"});case 2:a=e.sent,t.$toasted.show(a.toString());case 4:case"end":return e.stop()}}),e,t)})))()},onConfirm:function(){this.confirmDialog=!1,this[this.action]()},switchReboot:function(t){t&&(this.action="restartHost",this.confirmDialog=!0)},freeDiscFunc:function(){var t=this;R.a.get("rubix-service/disc").then((function(e){t.freeDisc=e}))},getSystemTime:function(){var t=this;R.a.get("rubix-service/time").then((function(e){e.tz_local&&(e.tz_local.forEach((function(t,a){var n="tz_local_["+a+"]";e=c()({},e,i()({},n,t))})),delete e.tz_local),t.time=e}))},getSystemMemory:function(){var t=this;R.a.get("rubix-service/memory").then((function(e){t.memory=e}))}}},B=(n={name:"services",components:{SystemDefaultServices:w,Networking:$,InstalledServices:S,HostInfo:Object(h.a)(j,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card-text",[a("page-title",{attrs:{title:"Host Info"}}),t._v(" "),a("div",{staticStyle:{"text-align":"start"}},[a("v-row",[a("v-col",[a("v-card",{staticClass:"card-height",attrs:{elevation:"2",outlined:"",tile:""}},[a("v-card-title",[a("h5",[t._v("Reboot Host")]),t._v(" "),a("v-row",{attrs:{align:"center",justify:"end"}},[a("v-avatar",{attrs:{size:"35"}},[a("img",{attrs:{alt:"logo",src:t.logo}})])],1)],1),t._v(" "),a("v-card-text",{staticClass:"card-text-height"},[a("v-switch",{attrs:{label:"Reboot"},on:{change:t.switchReboot}})],1)],1)],1),t._v(" "),a("v-col",[a("v-card",{staticClass:"card-height",attrs:{elevation:"2",outlined:"",tile:""}},[a("v-card-title",[a("h5",[t._v("SYSTEM DISC USAGE")]),t._v(" "),a("v-row",{attrs:{align:"center",justify:"end"}},[a("v-avatar",{attrs:{size:"35"}},[a("img",{attrs:{alt:"logo",src:t.logo}})])],1)],1),t._v(" "),a("v-card-text",{staticClass:"card-text-height"},t._l(t.objectKey(t.freeDisc),(function(e,n){return a("div",{key:n},[t._v("\n                "+t._s(t.toUpperTextKey(e))+": "),a("span",{staticClass:"value-style"},[t._v(t._s(t.freeDisc[e]))])])})),0),t._v(" "),a("v-card-actions",[a("v-btn",{attrs:{"x-small":"",color:"pink darken-2",text:""},on:{click:function(e){return t.freeDiscFunc()}}},[a("v-icon",[t._v("mdi-refresh")]),t._v(" Refresh")],1)],1)],1)],1),t._v(" "),a("v-col",[a("v-card",{staticClass:"card-height",attrs:{elevation:"2",outlined:"",tile:""}},[a("v-card-title",[a("h5",[t._v("SYSTEM TIME")]),t._v(" "),a("v-row",{attrs:{align:"center",justify:"end"}},[a("v-avatar",{attrs:{size:"35"}},[a("img",{attrs:{alt:"logo",src:t.logo}})])],1)],1),t._v(" "),a("v-card-text",{staticClass:"card-text-height"},[t._l(t.objectKey(t.time),(function(e,n){return a("div",{key:n},[t._v("\n                "+t._s(t.toUpperTextKey(e))+": \n                "),"time_utc"==e||"time_local"==e?a("span",{staticClass:"value-style"},[t._v(t._s(t.time[e]))]):t._e(),t._v(" "),"time_utc"!=e&&"time_local"!=e?a("span",{staticClass:"value-style"},[t._v(t._s(t.time[e]))]):t._e()])})),t._v(" "),a("v-autocomplete",{attrs:{items:t.timezones,label:"Timezones","persistent-hint":""},on:{change:t.onChangeTimezone},model:{value:t.timezone,callback:function(e){t.timezone=e},expression:"timezone"}})],2),t._v(" "),a("v-card-actions",[a("v-btn",{attrs:{"x-small":"",color:"pink darken-2",text:""},on:{click:function(e){return t.getSystemTime()}}},[a("v-icon",[t._v("mdi-refresh")]),t._v(" Refresh")],1)],1)],1)],1),t._v(" "),a("v-col",[a("v-card",{staticClass:"card-height",attrs:{elevation:"2",outlined:"",tile:""}},[a("v-card-title",[a("h5",[t._v("SYSTEM MEMORY")]),t._v(" "),a("v-row",{attrs:{align:"center",justify:"end"}},[a("v-avatar",{attrs:{size:"35"}},[a("img",{attrs:{alt:"logo",src:t.logo}})])],1)],1),t._v(" "),a("v-card-text",{staticClass:"card-text-height"},t._l(t.objectKey(t.memory),(function(e,n){return a("div",{key:n},[t._v("\n                "+t._s(t.toUpperTextKey(e))+": "),a("span",{staticClass:"value-style"},[t._v(t._s(t.memory[e]))])])})),0),t._v(" "),a("v-card-actions",[a("v-btn",{attrs:{"x-small":"",color:"pink darken-2",text:""},on:{click:function(e){return t.getSystemMemory()}}},[a("v-icon",[t._v("mdi-refresh")]),t._v(" Refresh")],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.confirmDialog,callback:function(e){t.confirmDialog=e},expression:"confirmDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("\n        Confirm?\n      ")]),t._v(" "),a("v-card-text",[t._v("Are you sure?")]),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.onCancelConfirm}},[t._v("\n          No\n        ")]),t._v(" "),a("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.onConfirm()}}},[t._v("\n          Yes\n        ")])],1)],1)],1)],1)}),[],!1,null,"95b21346",null).exports,SystemStatusTable:a("Tv0g").a},data:function(){return{tab:0,tabs:["installed-services","items","rubix-service","networking","host-info"],isDisabled:!1}},mounted:function(){this.setTab()},watch:{"$route.query.tab":function(t){this.tab=this.tabs.indexOf(t)},tab:function(t,e){var a=this.$route.query.tab;if(a!==this.tabs[t]){var n=this.tabs[t];this.$router.push({path:"services",query:{tab:n}})}}}},i()(n,"mounted",(function(){var t=this.$route.query.tab;this.tab=this.tabs.indexOf(t)})),i()(n,"methods",{setTab:function(){var t=this.$route.query.tab;this.tab=t?this.tabs.indexOf(t):0}}),i()(n,"computed",{setting:function(){return this.$store.state.setting}}),n),q=Object(h.a)(B,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-tabs",{attrs:{"fixed-tabs":"",dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab",{key:0},[t._v(" Installed Apps ")]),t._v(" "),a("v-tab",{key:1},[t._v(" Services ")]),t._v(" "),a("v-tab",{key:2},[t._v(" Rubix Service ")]),t._v(" "),a("v-tab",{key:3},[t._v(" Networking ")]),t._v(" "),a("v-tab",{key:4},[t._v(" Host Info ")])],1),t._v(" "),a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab-item",{key:0},[a("installed-services")],1),t._v(" "),a("v-tab-item",{key:1},[a("system-default-services")],1),t._v(" "),a("v-tab-item",{key:2},[a("system-status-table",{attrs:{server:"rubix-service"}})],1),t._v(" "),a("v-tab-item",{key:3},[a("networking")],1),t._v(" "),a("v-tab-item",{key:4},[a("host-info")],1)],1)],1)}),[],!1,null,null,null);e.default=q.exports}}]);
//# sourceMappingURL=8.b92ff089fa6b88c66be0.js.map