(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+SqX":function(t,n,e){"use strict";var r={name:"page-title",props:["title"]},i=e("psIG"),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h1",{staticClass:"text-h5 text-left py-3"},[e("span",[t._v(t._s(t.title))]),t._t("titleActions"),t._v(" "),t._t("spinner")],2)}),[],!1,null,null,null);n.a=o.exports},"5Bfd":function(t,n,e){"use strict";var r={name:"icon-button",props:["icon-key","on-click","button-title","color","btnSize","disabled","loading"]},i=e("psIG"),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",["small"==t.btnSize?e("v-btn",{staticClass:"pa-2",attrs:{loading:t.loading,disabled:t.disabled,color:t.color,small:"",text:""},on:{click:t.onClick}},[e("v-icon",[t._v(t._s(t.iconKey))]),t._v(" "),t.buttonTitle?e("span",[t._v(" "+t._s(t.buttonTitle))]):t._e()],1):e("v-btn",{staticClass:"pa-2",attrs:{loading:t.loading,disabled:t.disabled,color:t.color,"x-small":"",text:""},on:{click:t.onClick}},[e("v-icon",[t._v(t._s(t.iconKey))]),t._v(" "),t.buttonTitle?e("span",[t._v(" "+t._s(t.buttonTitle))]):t._e()],1)],1)}),[],!1,null,null,null);n.a=o.exports},"7Vew":function(t,n,e){"use strict";var r={name:"text-field-display",props:["label","value"]},i=e("psIG"),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.label?e("div",{staticClass:"grey--text caption mb-2"},[e("span",[t._v(t._s(t.label)+" "),t._t("afterLabel")],2)]):t._e(),t._v(" "),t.value?e("div",{staticClass:"font-weight-medium text-ellipses"},[e("span",{attrs:{title:t.value}},[t._v(t._s(t.value)),t._t("afterLabel")],2)]):t._e()])}),[],!1,null,null,null);n.a=o.exports},"8XWa":function(t,n,e){"use strict";e.r(n),e.d(n,"fetch",(function(){return m})),e.d(n,"deleteSlaveAppsDownloadState",(function(){return g})),e.d(n,"bulkControlApps",(function(){return A})),e.d(n,"bulkDownloadSlaveApps",(function(){return y})),e.d(n,"bulkInstallSlaveApps",(function(){return C})),e.d(n,"fetchDownloadState",(function(){return N})),e.d(n,"clearDownloadState",(function(){return k})),e.d(n,"fetchAppReleases",(function(){return w})),e.d(n,"fetchAppsReleases",(function(){return P})),e.d(n,"downloadAppData",(function(){return S})),e.d(n,"deleteAppData",(function(){return T})),e.d(n,"fetchJSONConfig",(function(){return I})),e.d(n,"fetchOpenVPNConfig",(function(){return O})),e.d(n,"fetchEnvConfig",(function(){return E})),e.d(n,"saveJSONConfig",(function(){return x})),e.d(n,"saveENVConfig",(function(){return D})),e.d(n,"saveOpenVPNConfig",(function(){return R})),e.d(n,"fetchAppConfig",(function(){return z})),e.d(n,"saveAppConfig",(function(){return j})),e.d(n,"downloadAppConfig",(function(){return Y})),e.d(n,"deleteJSONConfig",(function(){return F})),e.d(n,"deleteENVConfig",(function(){return G})),e.d(n,"deleteOpenVPNConfig",(function(){return H})),e.d(n,"deleteAppConfig",(function(){return M})),e.d(n,"uninstallApp",(function(){return J})),e.d(n,"changeServiceStatus",(function(){return V})),e.d(n,"createRestartJob",(function(){return $})),e.d(n,"deleteRestartJob",(function(){return W})),e.d(n,"uploadApp",(function(){return B})),e.d(n,"installApp",(function(){return U})),e.d(n,"fetchAppStatus",(function(){return X})),e.d(n,"fetchLatestAppVersion",(function(){return K}));var r=e("/9Wh"),i=e.n(r),o=e("06Hw"),a=e.n(o),u=e("YYXh"),s=e.n(u),c=e("OBCi"),l=e.n(c),d=e("uzYq"),f=(e("NWgQ"),e("N4QW")),p=e("A5Vd"),v=e("+n12"),h="/slave-apps",m=function(){return d.a.get(""+h,{restrictToast:!0})},g=function(){};function b(t){return t.reduce((function(t,n){return t[n.slaveId]||(t[n.slaveId]=[]),t[n.slaveId].push({service:n.service,version:n.version}),t}),{})}var _,A=function(t,n){return d.a.post(h+"/control",function(t,n){return t.reduce((function(t,e){return t[e.slaveId]||(t[e.slaveId]=[]),t[e.slaveId].push({service:e.service,action:n}),t}),{})}(t,n))},y=function(t){return d.a.post(h+"/download",b(t))},C=function(t){return d.a.post(h+"/install",b(t))},N=function(){return d.a.get(h+"/download-state",{restrictToast:!0})},k=function(t){return d.a.post(h+"/remove-download-state",t)},w=function(t){return d.a.get(h+"/releases/"+t+"?all=true")},P=function(t){return l.a.all(t.map((function(t){return w(t).catch((function(t){return[]}))})))},S=(_=s()(a.a.mark((function t(n,e){var r,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.fetchAppUrl();case 2:return r=t.sent,i=r.data+"slave/"+e+"/api/app/download_data?service="+n,t.abrupt("return",d.a.get(i,{headers:{"Content-Type":"application/zip"},responseType:"blob"}));case 5:case"end":return t.stop()}}),t,void 0)}))),function(t,n){return _.apply(this,arguments)}),T=function(t,n){return d.a.post(h+"/delete-app-data",{service:t,slaveId:n})},I=function(t,n,e){return d.a.get(h+"/slaves/"+n+"/json-config/"+t,e)},O=function(t,n,e){return d.a.get(h+"/slaves/"+n+"/open-vpn-config/"+t,e)},E=function(t,n,e){return d.a.get(h+"/slaves/"+n+"/env/"+t,e)},x=function(t,n,e){return d.a.put(h+"/slaves/"+n+"/json-config",{service:t,data:e})},D=function(t,n,e){return d.a.put(h+"/slaves/"+n+"/env",{service:t,data:e})},R=function(t,n,e){return d.a.put(h+"/slaves/"+n+"/open-vpn-config",{service:t,data:e})},z=function(t,n,e){var r=e.slaveId;if(n===p.k.PYTHON_APP)return I(t,r,e).then((function(t){return t.data}));if(n===p.k.FRONTEND_APP)return E(t,r,e).then((function(t){return t.data}));if(n===p.k.APT_APP)return O(t,r,e).then((function(t){return t.data}));throw new Error("App type not supported for editing config")},j=function(t,n,e,r){if(n===p.k.PYTHON_APP)return x(t,r,e||{});if(n===p.k.FRONTEND_APP)return D(t,r,e||"");if(n===p.k.APT_APP)return R(t,r,e||"");throw new Error("App type not supported for editing config")},Y=function(t,n,e,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};if(r===p.k.PYTHON_APP)return I(t,n,o).then((function(n){var r=n.data;Object(v.h)(t+"-"+e+"-config",i()(r))}));if(r===p.k.FRONTEND_APP)return E(t,n,o).then((function(n){var r=n.data;Object(v.f)(t+"-"+e,r)}));if(r===p.k.APT_APP)return O(t,n,o).then((function(n){var r=n.data;Object(v.i)(t+"-"+e,r)}));throw new Error("App type not supported for download config")},F=function(t,n){return d.a.delete(h+"/slaves/"+t+"/json-config",{data:{service:n}})},G=function(t,n){return d.a.delete(h+"/slaves/"+t+"/env",{data:{service:n}})},H=function(t,n){return d.a.delete(h+"/slaves/"+t+"/open-vpn-config",{data:{service:n}})},M=function(t,n,e){if(e===p.k.PYTHON_APP)return F(t,n);if(e===p.k.FRONTEND_APP)return G(t,n);if(e===p.k.APT_APP)return H(t,n);throw new Error("App type not supported for deletion")},J=function(t,n){return d.a.post(h+"/uninstall",{service:n,slaveId:t})},V=function(t,n,e){return d.a.post(h+"/slaves/"+e+"/control",[{action:t,service:n}])},$=function(t,n){return d.a.post(h+"/slaves/"+n+"/restart-job",[t])},W=function(t,n){return d.a.delete(h+"/slaves/"+n+"/restart-job",{data:[t]})},B=function(t,n,e,r){var i=new FormData;return i.append("file",t),i.append("service",n),i.append("version",e),d.a.post(h+"/slaves/"+r+"/app-upload",i,{headers:{"Content-Type":"multipart/form-data"}})},U=function(t,n){return d.a.post(h+"/slaves/"+n+"/install",[t])},X=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments[2];return d.a.get(h+"/slaves/"+e+"/stats/"+t,n)},K=function(){return d.a.get(h+"/latest-version")}},Jkoc:function(t,n,e){"use strict";var r=e("edSL"),i=e.n(r),o=e("zEfX"),a=e("nz6T"),u=e("N4QW"),s=1440,c={name:"service-cron-picker-field",props:["value"],data:function(){return{day:0,hour:0,minute:0}},computed:{_value:{get:function(){return this.value},set:function(t){return t}}},mounted:function(){this.updateModel(this.value)},methods:{updateModel:function(t){var n=this.splitMinutes(t),e=n.day,r=n.hour,i=n.minute;this.day=e,this.hour=r,this.minute=i},splitMinutes:function(t){return{day:this.getDay(t),hour:this.getHour(t),minute:this.getMinutes(t)}},getDay:function(t){return t=+t||0,Math.floor(+t/s)||0},getHour:function(t){return t=+t||0,t-=this.getDay(t)*s,Math.floor(t/60)||0},getMinutes:function(t){return t=+t||0,t-=this.getDay(t)*s,t-=60*this.getHour(t)},convertToMinutes:function(){var t=+this.day,n=+this.hour,e=+this.minute;return t*s+60*n+e},onInput:function(){this.$emit("input",this.convertToMinutes())}}},l=e("psIG"),d=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"service-cron-picker-wrapper"},[e("v-subheader",{staticClass:"pl-0 pb-5",attrs:{dense:""}},[t._v(" Day(s) ")]),t._v(" "),e("v-slider",{attrs:{dense:"",min:"0",max:"30","thumb-size":20,"thumb-label":"always","track-color":"grey"},on:{input:function(){return t.onInput()}},model:{value:t.day,callback:function(n){t.day=n},expression:"day"}}),t._v(" "),e("v-subheader",{staticClass:"pl-0 pb-5",attrs:{dense:""}},[t._v(" Hour(s) ")]),t._v(" "),e("v-slider",{attrs:{dense:"",min:"0","thumb-size":20,max:"23","thumb-label":"always","track-color":"grey"},on:{input:function(){return t.onInput()}},model:{value:t.hour,callback:function(n){t.hour=n},expression:"hour"}}),t._v(" "),e("v-subheader",{staticClass:"pl-0 pb-5",attrs:{dense:""}},[t._v(" Minute(s) ")]),t._v(" "),e("v-slider",{attrs:{dense:"",min:"0",max:"59","thumb-size":20,"thumb-label":"always","track-color":"grey"},on:{input:function(){return t.onInput()}},model:{value:t.minute,callback:function(n){t.minute=n},expression:"minute"}})],1)}),[],!1,null,null,null).exports,f=e("8XWa"),p={name:"configure-cron-view",props:["service","onCancel","sync","slaveId","isSystemService"],components:{ServiceCronPicker:d,FormError:o.a},data:function(){return{valid:!1,minutes:0,error:{message:null},isInitialized:!1}},mounted:function(){this.minutes=i()(this.service,"restart_job.timer",0),this.error.message=i()(this.service,"restart_job.error",null),this.isInitialized=!0},methods:{getApiService:function(){return this.service.slaveId?{service:f,slaveId:this.service.slaveId}:this.isSystemService?{service:u,slaveId:null}:{service:a,slaveId:null}},onSave:function(){var t=this,n={timer:+this.minutes||0,service:this.service.service},e=this.getApiService(),r=e.service,i=e.slaveId;r.createRestartJob(n,i).then((function(){t.$toasted.show("Successfully updated"),t.onCancel(),t.syncDetails()}))},syncDetails:function(){"function"==typeof this.sync&&this.sync()},onDelete:function(){var t=this,n={service:this.service.service},e=this.getApiService(),r=e.service,i=e.slaveId;r.deleteRestartJob(n,i).then((function(){t.$toasted.show("Successfully deleted"),t.onCancel(),t.syncDetails()}))}}},v=Object(l.a)(p,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",[e("v-card-title",{staticClass:"mb-5"},[e("span",[t._v(t._s(t.service.display_name))]),t._v(" "),e("span",[t._v(" | ")]),t._v(" "),e("span",{staticClass:"subtitle-2"},[t._v("Restart Timer Configure")])]),t._v(" "),e("v-card-text",[e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(n){t.valid=n},expression:"valid"}},[e("v-row",{attrs:{dense:""}},[t.isInitialized?e("service-cron-picker",{model:{value:t.minutes,callback:function(n){t.minutes=n},expression:"minutes"}}):t._e()],1)],1)],1),t._v(" "),e("v-card-actions",[e("form-error",{attrs:{error:t.error}}),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{text:""},on:{click:t.onCancel}},[t._v("Cancel")]),t._v(" "),e("v-btn",{attrs:{color:"primary",text:""},on:{click:t.onSave}},[t._v("Save")]),t._v(" "),e("v-btn",{attrs:{color:"red",text:""},on:{click:t.onDelete}},[t._v("Delete")])],1)],1)}),[],!1,null,null,null);n.a=v.exports},KRMY:function(t,n,e){"use strict";var r={name:"configure-cron-btn",props:["service","handleClick","btnSize"],components:{TooltipIconButton:e("Ui9F").a},data:function(){return{btnIcon:"mdi-timer"}},computed:{buttonSize:function(){return this.btnSize?this.btnSize:"small"},isTimerConfigure:function(){return!!(this.service&&this.service.restart_job&&this.service.restart_job.timer)},timerBtnColor:function(){return this.isTimerConfigure?"yellow darken-2":"nubeGreen"},timerBtnText:function(){return this.isTimerConfigure?"SET | Configure restart schedule":"UNSET | Configure restart schedule"}}},i=e("psIG"),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("tooltip-icon-button",{attrs:{buttonSize:t.buttonSize,btnIcon:t.btnIcon,onClick:t.handleClick,btnColor:t.timerBtnColor,btnTooltip:t.timerBtnText}})}),[],!1,null,null,null);n.a=o.exports},MKDl:function(t,n,e){"use strict";var r={active:{name:"active",displayName:"Running",outlined:!0,color:"exportColor"},reloading:{name:"reloading",outlined:!0,displayName:"Reloading",color:"nubeYellow"},failed:{name:"failed",outlined:!0,displayName:"Failed",color:"red"},activating:{name:"activating",outlined:!0,displayName:"Activating",color:"nubeYellow"},deactivating:{outlined:!0,name:"deactivating",displayName:"Deactivating",color:"nubeYellow"},maintenance:{name:"maintenance",outlined:!0,displayName:"Maintenance",color:"nubeYellow"},STARTED:{name:"STARTED",outlined:!0,displayName:"Started",color:"blue"},RUNNING:{name:"RUNNING",outlined:!0,displayName:"Running",color:"nubeYellow"},FINISHED:{name:"FINISHED",outlined:!0,displayName:"Finished",color:"nubeGreen"},BROKEN:{name:"BROKEN",outlined:!0,displayName:"Broken",color:"red"},MAPPED:{name:"MAPPED",outlined:!0,displayName:"Mapped",color:"nubeGreen"},INTEGRATED:{name:"INTEGRATED",outlined:!1,displayName:"Integrated",color:"nubeGreen"},UNINTEGRATED:{name:"UNINTEGRATED",outlined:!1,displayName:"Not Integrated",color:"red"}},i={name:"app-status-chip",props:["status","state","chipSize"],computed:{currentStatus:function(){var t=r[this.state];return t||{name:"default",displayName:this.capitalize(this.state),color:"nubeYellow"}},defaultStatus:function(){return this.capitalize(this.state)}},methods:{capitalize:function(t){return t||(t=""),(t=String(t)).charAt(0).toUpperCase()+t.slice(1)}}},o=e("psIG"),a=Object(o.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.state?e("div",[e("span",{staticClass:"font-weight-medium"},[t.chipSize&&"small"===t.chipSize?e("v-chip",{attrs:{small:"",outlined:"",color:t.currentStatus.color}},[t._v(t._s(t.currentStatus.displayName))]):e("v-chip",{attrs:{outlined:"",color:t.currentStatus.color}},[t._v(t._s(t.currentStatus.displayName))])],1)]):e("div",[e("span",{staticClass:"font-weight-medium"},[t.chipSize&&"small"===t.chipSize?e("v-chip",{attrs:{small:"",outlined:"",color:t.currentStatus.color}},[t._v(t._s(t.defaultStatus))]):e("v-chip",{attrs:{outlined:"",color:t.currentStatus.color}},[t._v(t._s(t.defaultStatus))])],1)])])}),[],!1,null,null,null);n.a=a.exports},N4QW:function(t,n,e){"use strict";e.r(n),e.d(n,"fetchPlatInfo",(function(){return o})),e.d(n,"fetchStatus",(function(){return a})),e.d(n,"upgradeLatest",(function(){return u})),e.d(n,"upgrade",(function(){return s})),e.d(n,"fetchReleases",(function(){return c})),e.d(n,"updateToken",(function(){return l})),e.d(n,"fetchTokenHint",(function(){return d})),e.d(n,"upgradeViaFile",(function(){return f})),e.d(n,"fetchAppUrl",(function(){return p})),e.d(n,"createRestartJob",(function(){return v})),e.d(n,"deleteRestartJob",(function(){return h}));var r=e("uzYq"),i="/rubix-service",o=function(){return r.a.get(i+"/plat")},a=function(){return r.a.get(i+"/status")},u=function(){return r.a.put(i+"/upgrade",{version:"latest"})},s=function(t){return r.a.put(i+"/upgrade",{version:t})},c=function(){return r.a.get(i+"/releases")},l=function(t){return r.a.post(i+"/token",{token:t})},d=function(){return r.a.get(i+"/token-hint")},f=function(t,n){var e=new FormData;return e.append("upgradeFile",n),e.append("version",t),r.a.post(i+"/upload-upgrade",e,{headers:{"Content-Type":"multipart/form-data"}})},p=function(){return r.a.get(i+"/app-url")},v=function(t){return r.a.post(i+"/restart-job",[t])},h=function(t){return r.a.delete(i+"/restart-job",{data:[t]})}},Ui9F:function(t,n,e){"use strict";var r={name:"tooltip-icon-button",props:["btnIcon","btnTooltip","onClick","btnColor","buttonSize","disabled"]},i=e("psIG"),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,i=n.attrs;return["medium"==t.buttonSize?e("v-btn",t._g(t._b({attrs:{disabled:t.disabled,icon:"",medium:"",color:t.btnColor},on:{click:t.onClick}},"v-btn",i,!1),r),[e("v-icon",{attrs:{medium:"",dark:""}},[t._v(" "+t._s(t.btnIcon)+" ")])],1):e("v-btn",t._g(t._b({attrs:{disabled:t.disabled,icon:"",small:"",color:t.btnColor},on:{click:t.onClick}},"v-btn",i,!1),r),[e("v-icon",{attrs:{small:"",dark:""}},[t._v(" "+t._s(t.btnIcon)+" ")])],1)]}}])},[t._v(" "),e("span",{staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:t._s(t.btnTooltip)}})])}),[],!1,null,null,null);n.a=o.exports},"Wgf/":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return a}));var r=e("uzYq"),i="/system-service",o=function(){return r.a.get(i)},a=function(t,n){return r.a.post(i+"/control",[{action:t,service:n}])}},lkCm:function(t,n,e){"use strict";var r={name:"confirm-dialog",props:["on-close","on-confirm","dialog-text","is-open","loading"]},i=e("psIG"),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.isOpen,callback:function(n){t.isOpen=n},expression:"isOpen"}},[e("v-card",[e("v-card-title",[e("v-icon",{attrs:{color:"warning"}},[t._v(" mdi-alert-outline ")]),t._v(" Confirm ")],1),t._v(" "),e("v-card-text",[e("v-container",[e("v-row",[t._v(t._s(t.dialogText))])],1)],1),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{text:""},on:{click:t.onClose}},[t._v(" No ")]),t._v(" "),e("v-btn",{attrs:{color:"red darken-1",loading:t.loading,text:""},on:{click:t.onConfirm}},[t._v(" Yes ")])],1)],1)],1)}),[],!1,null,null,null);n.a=o.exports},nz6T:function(t,n,e){"use strict";e.r(n),e.d(n,"fetchApps",(function(){return A})),e.d(n,"fetchAllApps",(function(){return y})),e.d(n,"fetchAllInstalledApps",(function(){return C})),e.d(n,"fetchSystemDefaultApps",(function(){return N})),e.d(n,"fetchAppReleases",(function(){return k})),e.d(n,"fetchAppsReleases",(function(){return w})),e.d(n,"fetchAppStatus",(function(){return P})),e.d(n,"uninstallApp",(function(){return S})),e.d(n,"installApp",(function(){return T})),e.d(n,"downloadApp",(function(){return I})),e.d(n,"changeServiceStatus",(function(){return O})),e.d(n,"uploadApp",(function(){return E})),e.d(n,"deleteAppData",(function(){return x})),e.d(n,"deleteAppDataService",(function(){return D})),e.d(n,"downloadAppData",(function(){return R})),e.d(n,"fetchJSONConfig",(function(){return z})),e.d(n,"fetchOpenVPNConfig",(function(){return j})),e.d(n,"fetchEnvConfig",(function(){return Y})),e.d(n,"fetchAppConfig",(function(){return F})),e.d(n,"saveJSONConfig",(function(){return G})),e.d(n,"saveENVConfig",(function(){return H})),e.d(n,"saveOpenVPNConfig",(function(){return M})),e.d(n,"saveAppConfig",(function(){return J})),e.d(n,"deleteJSONConfig",(function(){return V})),e.d(n,"deleteENVConfig",(function(){return $})),e.d(n,"deleteOpenVPNConfig",(function(){return W})),e.d(n,"deleteAppConfig",(function(){return B})),e.d(n,"downloadAppConfig",(function(){return U})),e.d(n,"bulkAppControl",(function(){return X})),e.d(n,"bulkInstallApps",(function(){return K})),e.d(n,"bulkDownloadApps",(function(){return L})),e.d(n,"fetchDownloadState",(function(){return Q})),e.d(n,"deleteDownloadState",(function(){return q})),e.d(n,"createRestartJob",(function(){return Z})),e.d(n,"deleteRestartJob",(function(){return tt}));var r,i=e("/9Wh"),o=e.n(i),a=e("06Hw"),u=e.n(a),s=e("YYXh"),c=e.n(s),l=e("OBCi"),d=e.n(l),f=e("uzYq"),p=e("NWgQ"),v=e.n(p),h=e("N4QW"),m=e("A5Vd"),g=e("Wgf/"),b=e("+n12"),_="/rubix-app",A=function(){var t=v.a.stringify({browser_download_url:!0,latest_version:!0});return f.a.get(_+"?"+t)},y=function(){return g.b()},C=function(){return f.a.get(""+_).then((function(t){return t.filter((function(t){return t&&t.is_installed}))}))},N=function(){return g.b().then((function(t){return t.filter((function(t){return t&&t.is_installed}))}))},k=function(t){return f.a.get(_+"/releases/"+t)},w=function(t){return d.a.all(t.map((function(t){return k(t).catch((function(t){return[]}))})))},P=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return f.a.get(_+"/stats/"+t,n)},S=function(t){return f.a.post(_+"/uninstall",{service:t})},T=function(t){return f.a.post(_+"/install",[t])},I=function(t){return f.a.post(_+"/download",[t])},O=function(t,n){return f.a.post(_+"/control",[{action:t,service:n}])},E=function(t,n,e){var r=new FormData;return r.append("file",t),r.append("service",n),r.append("version",e),f.a.post(_+"/app-upload",r,{headers:{"Content-Type":"multipart/form-data"}})},x=function(t){return f.a.post(_+"/delete-app-data",[{service:t}])},D=function(t){return x(t)},R=(r=c()(u.a.mark((function t(n){var e,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.fetchAppUrl();case 2:return e=t.sent,r=e.data+"api/app/download_data?service="+n,t.abrupt("return",f.a.get(r,{headers:{"Content-Type":"application/zip"},responseType:"arraybuffer"}));case 5:case"end":return t.stop()}}),t,void 0)}))),function(t){return r.apply(this,arguments)}),z=function(t,n){return f.a.get(_+"/json-config/"+t,n)},j=function(t,n){return f.a.get(_+"/open-vpn-config/"+t,n)},Y=function(t,n){return f.a.get(_+"/env/"+t,n)},F=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(n===m.k.PYTHON_APP)return z(t,e).then((function(t){return t.data}));if(n===m.k.FRONTEND_APP)return Y(t,e).then((function(t){return t.data}));if(n===m.k.APT_APP)return j(t,e).then((function(t){return t.data}));throw new Error("App type not supported for editing config")},G=function(t,n){return f.a.put(_+"/json-config",{service:t,data:n})},H=function(t,n){return f.a.put(_+"/env",{service:t,data:n})},M=function(t,n){return f.a.put(_+"/open-vpn-config",{service:t,data:n})},J=function(t,n,e){if(n===m.k.PYTHON_APP)return G(t,e||{});if(n===m.k.FRONTEND_APP)return H(t,e||"");if(n===m.k.APT_APP)return M(t,e);throw new Error("App type not supported for editing config")},V=function(t){return f.a.delete(_+"/json-config",{data:{service:t}})},$=function(t){return f.a.delete(_+"/env",{data:{service:t}})},W=function(t){return f.a.delete(_+"/open-vpn-config",{data:{service:t}})},B=function(t,n){if(n===m.k.PYTHON_APP)return V(t);if(n===m.k.FRONTEND_APP)return $(t);if(n===m.k.APT_APP)return W(t);throw new Error("App type not supported for deletion")},U=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(n===m.k.PYTHON_APP)return z(t,e).then((function(n){var e=n.data;Object(b.h)(t+"-config",o()(e))}));if(n===m.k.FRONTEND_APP)return Y(t,e).then((function(n){var e=n.data;Object(b.f)(""+t,e)}));if(n===m.k.APT_APP)return j(t,e).then((function(n){var e=n.data;Object(b.i)(""+t,e)}));throw new Error("App type not supported for download config")},X=function(t){return f.a.post(_+"/control",t)},K=function(t){return f.a.post(_+"/install",t)},L=function(t){return f.a.post(_+"/download",t)},Q=function(){return f.a.get(_+"/download-state",{restrictToast:!0})},q=function(){return f.a.delete(_+"/download-state")},Z=function(t){return f.a.post(_+"/restart-job",[t])},tt=function(t){return f.a.delete(_+"/restart-job",{data:[t]})}},zEfX:function(t,n,e){"use strict";var r={name:"form-error",props:["errors","error"],computed:{isArray:function(){return Array.isArray(this.errors)&&this.errors.length>0||!1},isObject:function(){return this.error&&this.error.hasOwnProperty("message")}}},i=e("psIG"),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-left ma-5"},[t.isArray?e("div",t._l(t.errors,(function(n){return e("v-alert",{key:n.index,attrs:{dense:"",outlined:"",type:"error"}},[e("span",[t._v(t._s(n.message))])])})),1):t._e(),t._v(" "),t.isObject&&t.error.message?e("div",[e("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e("span",[t._v(t._s(t.error.message))])])],1):t._e()])}),[],!1,null,null,null);n.a=o.exports}}]);
//# sourceMappingURL=6.db764fa76f53e932eda1.js.map