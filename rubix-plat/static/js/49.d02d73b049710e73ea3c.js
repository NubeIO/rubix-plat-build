(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"0iKi":function(e,t,s){"use strict";s.d(t,"c",(function(){return o})),s.d(t,"a",(function(){return l})),s.d(t,"e",(function(){return c})),s.d(t,"d",(function(){return u})),s.d(t,"f",(function(){return d})),s.d(t,"b",(function(){return p})),s.d(t,"h",(function(){return v})),s.d(t,"i",(function(){return g})),s.d(t,"g",(function(){return m}));var a=s("OBCi"),n=s.n(a),i=s("uzYq"),r="/slave-devices",o=function(e){var t={global_uuid:e.global_uuid};return i.a.post(r,t)},l=function(e){return n.a.all(e.map((function(e){return o(e)})))},c=function(){return i.a.get(r)},u=function(){return i.a.get(r+"/discover")},d=function(e){var t=e.global_uuid;return i.a.delete(r+"/"+t)},p=function(e){return n.a.all(e.map((function(e){return d(e)})))},v=function(e,t){return i.a.put(r+"/"+e+"/comment",t)},g=function(e,t){return i.a.put(r+"/"+e+"/tags",t)},m=function(){return i.a.get(r+"/sync")}},Zepl:function(e,t,s){"use strict";function a(e){return""===e||isNaN(+e)}t.a={maxLengthValidator:function(e){return function(t){return"string"==typeof t&&t.length<=e||"Value should be of "+e+" length."}},minLengthValidator:function(e){return function(t){return"string"==typeof t&&t.length>=e||"Value should be of at least "+e+" length."}},required:function(e){return!!e||"Required"},number:function(e){return!a(e)||"Value should be a number"},nullableNumber:function(e){return null!==e||!a(e)||"Value should be a number or null"},isIpAddress:function(e){return!(!/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(t=e)&&!/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g.test(t)&&"localhost"!==(""+t).toLowerCase())||"Invalid IP Address";var t},isJsonString:function(e){return function(e){try{JSON.parse(e)}catch(e){return!1}return!0}(e)||"Data should be in a valid JSON format"}}},asQ9:function(e,t,s){"use strict";var a={name:"master-star-indicator",props:["isMaster"]},n=s("psIG"),i=Object(n.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,n=t.attrs;return[e.isMaster?s("v-icon",e._g(e._b({staticClass:"mt-n1",attrs:{medium:"",color:"nubeYellow"}},"v-icon",n,!1),a),[e._v("fa-star")]):e._e()]}}])},[e._v(" "),s("span",[e._v("Master device")])])}),[],!1,null,null,null);t.a=i.exports},qmFP:function(e,t,s){"use strict";s.r(t);var a=s("+SqX"),n=s("6J4u"),i=s.n(n),r=s("OBCi"),o=s.n(r),l=s("snOE"),c=s.n(l),u=s("TcPG"),d=s.n(u),p=s("Kz1y"),v=s.n(p),g=s("edSL"),m=s.n(g),h={name:"icon-menu",props:["title","icon"],data:function(){return{menu:!1}}},f=s("psIG"),b=Object(f.a)(h,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":200,"offset-x":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,n=t.attrs;return[s("v-btn",e._g(e._b({staticClass:"mr-1 btn-height-22",attrs:{color:"orange darken-2","x-small":""}},"v-btn",n,!1),a),[s("span",[e._v(e._s(e.title))]),e._v(" "),s("v-icon",{attrs:{"x-small":"",right:""}},[e._v(" "+e._s(e.icon))])],1)]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),s("v-card",{staticClass:"text-left"},[e._t("content")],2)],1)}),[],!1,null,null,null).exports,_=s("KRMY"),x=s("Ui9F"),k=s("tZmG"),S=s.n(k),C=s("uzYq"),y="/slaves-bios-apps",I=s("0iKi"),A=s("asQ9"),w={name:"upgrade-to-latest",props:["slaveApps","onClose","selectedGridItems","upgradeLatest"],data:function(){return{isLoading:!1,selectedSlaveApps:[]}},created:function(){this.selectedGridItems.length>0&&(this.selectedSlaveApps=[].concat(c()(this.selectedGridItems)))},methods:{upgradeToLatest:function(){var e=this;return this.isLoading=!0,this.upgradeLatest(this.selectedSlaveApps).then((function(t){!t.hasError?e.$toasted.show("Successfully upgraded selected apps"):t.hasError&&t.success.length>0?e.$toasted.show("Partially upgraded for selected apps"):e.$toasted.show("Unsuccessful to upgrade for selected apps"),e.onClose()})).finally((function(){e.isLoading=!1}))}}},T=Object(f.a)(w,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",[s("v-card-title",[e._v("Upgrade to Latest")]),e._v(" "),s("v-card-text",[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-autocomplete",{staticClass:"text-left",attrs:{label:"Select Slave Apps","return-object":"","item-text":"device_name","item-value":"slaveId",items:e.slaveApps,chips:"",clearable:"","deletable-chips":"",multiple:"","small-chips":""},model:{value:e.selectedSlaveApps,callback:function(t){e.selectedSlaveApps=t},expression:"selectedSlaveApps"}})],1)],1)],1),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{staticClass:"mr-1 btn-height-22 white--text",attrs:{"x-small":"",color:"blue darken-1",disabled:0==e.selectedSlaveApps.length,loading:e.isLoading},on:{click:function(){return e.upgradeToLatest()}}},[e._v("Upgrade to latest")]),e._v(" "),s("v-btn",{staticClass:"mr-1 btn-height-22 white--text",attrs:{"x-small":""},on:{click:e.onClose}},[e._v(" Cancel ")])],1)],1)}),[],!1,null,null,null).exports,L=s("Zepl"),N={name:"upgrade-to-latest",props:["slaveApps","onClose","selectedGridItems","updateToken"],data:function(){return{valid:!1,isLoading:!1,selectedSlaveApps:[],token:"",tokenRules:[L.a.required]}},created:function(){this.selectedGridItems.length>0&&(this.selectedSlaveApps=[].concat(c()(this.selectedGridItems)))},methods:{onSave:function(){var e=this;if(this.$refs.form.validate())return this.isLoading=!0,this.updateToken(this.selectedSlaveApps,this.token).then((function(t){!t.hasError?e.$toasted.show("Successfully updated token selected apps"):t.hasError&&t.success.length>0?e.$toasted.show("Partially updated token for selected apps"):e.$toasted.show("Unsuccessful to update token for selected apps"),e.onClose()})).finally((function(){e.isLoading=!1}))}}},R=Object(f.a)(N,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",[s("v-card-title",[e._v("Update Token")]),e._v(" "),s("v-card-text",[s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-row",{attrs:{dense:""}},[s("v-col",{attrs:{cols:"12"}},[s("v-autocomplete",{staticClass:"text-left",attrs:{label:"Select Slave Apps","return-object":"","item-text":"device_name","item-value":"slaveId",items:e.slaveApps,chips:"",clearable:"","deletable-chips":"",multiple:"","small-chips":""},model:{value:e.selectedSlaveApps,callback:function(t){e.selectedSlaveApps=t},expression:"selectedSlaveApps"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Third party token",rules:e.tokenRules},model:{value:e.token,callback:function(t){e.token=t},expression:"token"}})],1)],1)],1)],1),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{staticClass:"mr-1 btn-height-22 white--text",attrs:{"x-small":"",color:"blue darken-1",disabled:0==e.selectedSlaveApps.length,loading:e.isLoading},on:{click:function(){return e.onSave()}}},[e._v("\n      Update Token\n    ")]),e._v(" "),s("v-btn",{staticClass:"mr-1 btn-height-22 white--text",attrs:{"x-small":""},on:{click:e.onClose}},[e._v(" Cancel ")])],1)],1)}),[],!1,null,null,null).exports,D={name:"upgrade-to-latest",props:["slaveApps","onClose","selectedGridItems","restartApps"],data:function(){return{isLoading:!1,selectedSlaveApps:[]}},created:function(){this.selectedGridItems.length>0&&(this.selectedSlaveApps=[].concat(c()(this.selectedGridItems)))},methods:{onSave:function(){var e=this;return this.isLoading=!0,this.restartApps(this.selectedSlaveApps).then((function(t){t.hasError&&(e.$toasted.show("Successfully restarted selected apps"),e.onClose())})).finally((function(){e.isLoading=!1,e.onClose()}))}}},G=Object(f.a)(D,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",[s("v-card-title",[s("v-icon",{attrs:{color:"warning"}},[e._v(" fa-exclamation-circle ")]),e._v(" Restart Selected Apps ")],1),e._v(" "),s("v-card-text",[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-autocomplete",{staticClass:"text-left",attrs:{label:"Select Slave Apps","return-object":"","item-text":"device_name","item-value":"slaveId",items:e.slaveApps,chips:"",clearable:"","deletable-chips":"",multiple:"","small-chips":""},model:{value:e.selectedSlaveApps,callback:function(t){e.selectedSlaveApps=t},expression:"selectedSlaveApps"}})],1)],1)],1),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{staticClass:"mr-1 btn-height-22 white--text",attrs:{"x-small":"",color:"pink darken-1",loading:e.isLoading,disabled:0==e.selectedSlaveApps.length},on:{click:function(){return e.onSave()}}},[e._v("Restart")]),e._v(" "),s("v-btn",{staticClass:"mr-1 btn-height-22 white--text",attrs:{"x-small":""},on:{click:e.onClose}},[e._v("Cancel")])],1)],1)}),[],!1,null,null,null).exports,J=s("MKDl"),z={restart:"fa-repeat",update:"fa-check-circle-o",default:"fa-exclamation-circle",upgrade:"fa-check-circle-o"},O={name:"bulk-apps-operation-status",props:["operationStatuses","title"],computed:{isStatusAvailable:function(){return this.operationStatuses.length>0},items:function(){return this.operationStatuses.map((function(e){return v()({},e,{icon:z[e.action]})}))}}},$=Object(f.a)(O,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.isStatusAvailable?s("v-card",{attrs:{dense:""}},[s("v-card-title",[e._v(e._s(e.title))]),e._v(" "),s("v-card-text",[s("v-list",{attrs:{dense:""}},e._l(e.items,(function(t){return s("v-list-item",{key:t.name,attrs:{"prepend-icon":t.icon,"no-action":""}},[s("v-list-item-icon",[s("v-icon",{attrs:{color:"orange"}},[e._v(" "+e._s(t.icon)+" ")])],1),e._v(" "),s("v-list-item-content",[s("v-list-item-title",{staticClass:"orange--text",domProps:{textContent:e._s(t.name)}}),e._v(" "),s("v-list-item-subtitle",{domProps:{textContent:e._s(t.message)}})],1)],1)})),1)],1)],1):e._e()}),[],!1,null,null,null).exports,V=s("v4FG"),B=s("N4QW"),E=s("8XWa"),F={name:"configure-bios-cron-view",props:["onCancel","sync","selectedService","isBulk"],components:{ConfigureCronForm:V.a},data:function(){return{valid:!1,minutes:0,service:{},error:{message:null},isInitialized:!1,isFetching:!1}},mounted:function(){this.fetchBiosCronDetails()},methods:{fetchBiosCronDetails:function(){this.selectedService&&(this.service=this.selectedService),this.fetchRestartJob()},initializeCronView:function(){if(this.isBulk)return this.minutes=0,this.error.message=null,void(this.isInitialized=!0);this.minutes=m()(this.service,"timer",0),this.error.message=m()(this.service,"error",null),this.isInitialized=!0},getApiService:function(){return this.isBulk?{service:{createRestartJob:E.bulkUpdateSystemRebootJob,deleteRestartJob:E.bulkDeleteSystemRebootJob,fetchRestartJob:function(){return o.a.resolve(!0)}}}:this.selectedService?{service:{createRestartJob:E.updateSystemRebootJob,deleteRestartJob:E.deleteSystemRebootJob,fetchRestartJob:E.fetchSystemRebootJob}}:{service:{createRestartJob:B.updateSystemRebootJob,deleteRestartJob:B.deleteSystemRebootJob,fetchRestartJob:B.fetchSystemRebootJob}}},getSlaveId:function(){return this.isBulk?this.selectedService.map((function(e){return m()(e,"slaveId",null)})).filter((function(e){return e})):m()(this.selectedService,"slaveId",null)},fetchRestartJob:function(){var e=this;this.getApiService().service.fetchRestartJob(this.getSlaveId()).then((function(t){e.service=t,e.initializeCronView()})).finally((function(){e.isFetching=!1}))},onSave:function(){var e=this,t={timer:+this.minutes||0,service:this.service.service};this.getApiService().service.createRestartJob(t,this.getSlaveId()).then((function(){e.$toasted.show("Successfully updated"),e.onCancel(),e.syncDetails()}))},syncDetails:function(){"function"==typeof this.sync&&this.sync()},onDelete:function(){var e=this;this.getApiService().service.deleteRestartJob(this.getSlaveId()).then((function(){e.$toasted.show("Successfully deleted"),e.onCancel(),e.syncDetails()}))}}},U=Object(f.a)(F,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("configure-cron-form",{attrs:{valid:e.valid,error:e.error,onSave:e.onSave,minutes:e.minutes,onCancel:e.onCancel,onDelete:e.onDelete,isInitialized:e.isInitialized,displayName:"BIOS Services Reboot",isFetching:e.isFetching},on:{updateValid:function(t){e.valid=t},updateMinutes:function(t){e.minutes=t}}})}),[],!1,null,null,null).exports,M={upgradeToLatest:"upgradeToLatest",restart:"restart",updateToken:"updateToken",configureCron:"configureCron",bulkConfigureCron:"bulkConfigureCron"},j={name:"slave-bios-apps",components:{IconMenu:b,BulkAppsOperationStatus:$,TooltipIconButton:x.a,UpgradeLatestSlaveBiosApps:T,SlavesUpdateToken:R,MasterStarIndicator:A.a,RestartBiosSlaveApps:G,AppStatusChip:J.a,ConfigureBiosCron:U,ConfigureCronBtn:_.a},data:function(){var e;return{search:"",operationStatuses:[],errMessage:"",isTokenValid:!0,isFetchingLatestVersion:!1,expanded:[],isFixedHeader:!1,isFetchingApps:!1,dataTableHeight:void 0,items:[],selectedGridItems:[],latestVersion:"",dialogNames:v()({},M),dialog:(e={},d()(e,M.upgradeToLatest,!1),d()(e,M.restart,!1),d()(e,M.updateToken,!1),d()(e,M.configureCron,!1),d()(e,M.bulkConfigureCron,!1),e),selectedItem:{},headers:[{text:"S/N",align:"center",value:"sn",sortable:!0},{text:"Site Name",align:"left",value:"site_name"},{text:"Device Name",align:"left",value:"device_name"},{text:"Upgrade Status",align:"center",value:"upgrade_app_state"},{text:"Installed Version",align:"center",sortable:!0,value:"version"},{text:"Token",align:"center",sortable:!0,value:"token"},{text:"Active Since",align:"center",sortable:!0,value:"time_since"},{text:"Action",align:"center",value:"action"},{text:"",value:"data-table-expand"}]}},computed:{selectedServicesCount:function(){return 0},dataItemsMap:function(){return this.dataItems.reduce((function(e,t){return e[t.global_uuid]=v()({},t),e}),{})},dataItems:function(){return this.items.map((function(e,t){return v()({},e,{sn:t+1,site_name:e.is_master?"   "+e.site_name:e.site_name})}))}},created:function(){this.initialize()},methods:{updateOperationStatuses:function(e,t,s){this.operationStatuses=[].concat(c()(this.operationStatuses),c()(this.getOperationStatus(e,t,s)))},getOperationStatus:function(e,t,s){var a=this;if(Array.isArray(e))return e.map((function(e){var n=m()(a.dataItemsMap,e.global_uuid+".site_name",e.global_uuid),i=e.error;return{name:(n||"").trim(),type:s,message:i.message,action:t}}))},initialize:function(){this.fetchLatestVersion(),this.fetchSlaveAppsDevices()},fetchLatestVersion:function(){var e=this;return this.isFetchingLatestVersion=!0,C.a.get("/rubix-bios/latest-version").then((function(t){var s="";t&&(Array.isArray(t)&&t.length>0?s=t[0]:t.version&&(s=t.version)),e.latestVersion=s,e.isTokenValid=!0})).catch((function(t){t&&t.message&&(e.errMessage=t.message),e.isTokenValid=!1}))},fetchSlaveAppsDevices:function(){var e=this;this.isFetchingApps=!0,o.a.all([this.fetchApps(),this.fetchSlaveDevices()]).then((function(t){var s=i()(t,2),a=s[0],n=s[1];e.items=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return S()(e).map((function(s){return v()({slaveId:s},e[s],t[s]?t[s]:{})}))}(a,n)})).catch((function(e){})).finally((function(){e.isFetchingApps=!1,e.selectedGridItems=[]}))},restartApps:function(e){var t,s=this,a=e.map((function(e){return e.slaveId}));return(t=a,C.a.post(y+"/bulk-restart-bios",{uuids:t})).then((function(e){return e.hasError&&s.updateOperationStatuses(e.error,"upgrade","error"),e})).finally((function(){s.$toasted.show("Rubix services are been restarted. It may be unresponsive for a few seconds in all locations.",{type:"info"})}))},upgradeLatest:function(e){var t,s=this,a=e.filter((function(e){return e.version!==s.latestVersion})).map((function(e){return e.slaveId}));return(t=a,C.a.post(y+"/bulk-update-latest",{uuids:t})).then((function(e){return e.hasError&&s.updateOperationStatuses(e.error,"upgrade","error"),e}))},updateToken:function(e,t){var s=this;return function(e,t){return C.a.post(y+"/bulk-update-token",{uuids:e,token:t})}(e.map((function(e){return e.slaveId})),{token:t}).then((function(e){return e.hasError&&s.updateOperationStatuses(e.error,"upgrade","error"),s.fetchSlaveAppsDevices(),s.fetchLatestVersion(),e}))},updateAllToken:function(){this.selectedGridItems=[].concat(c()(this.items)),this.toggleDialog(M.updateToken)},fetchApps:function(){return C.a.get(""+y).then((function(e){return S()(e).reduce((function(t,s){return e[s]&&!e[s].error&&(t[s]=e[s].data),t}),{})}))},fetchSlaveDevices:function(){return I.e()},toggleDialog:function(e,t){this.selectedItem=t,this.dialog[e]=!this.dialog[e],this.dialog[e]?this.selectedItem=t:this.selectedItem=null},closeDialog:function(e){this.dialog[e]=!1},getPageLength:function(e){e.itemsLength<20?this.dataTableHeight=void 0:this.dataTableHeight="80vh"},onSearchChange:function(){this.searchItems=this.search.split(",").map((function(e){return e.trim()}))},filterCriteria:function(e,t,s){return null!=e&&this.searchItems&&Array.isArray(this.searchItems)&&this.searchItems.length>0&&this.searchItems.every((function(e){return"string"==typeof e}))&&this.searchItems.some((function(t){return-1!==e.toString().toLowerCase().indexOf(t.toLowerCase())}))}}},P=Object(f.a)(j,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-card",{attrs:{loading:e.isFetchingApps}},[s("v-toolbar",{attrs:{flat:""}},[s("v-toolbar-title",[s("span",[e._v("BIOS Apps")]),e._v(" "),s("tooltip-icon-button",{attrs:{btnColor:"default",btnIcon:"fa-refresh",btnTooltip:"Refresh BIOS apps detail",buttonSize:"medium",onClick:function(){return e.initialize()}}})],1),e._v(" "),s("v-text-field",{staticClass:"pl-10",attrs:{"append-icon":"fa-search",label:"Search using site or device name","single-line":"","hide-details":""},on:{input:e.onSearchChange},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),s("v-spacer")],1),e._v(" "),s("v-card-text",[s("v-container",{attrs:{fluid:""}},[e.isTokenValid?e._e():s("v-alert",{staticClass:"text-left darken-1",attrs:{border:"right",dismissible:"",dense:"",type:"info",elevation:"2"}},[s("span",{staticClass:"pr-5"},[e._v(e._s(e.errMessage))]),e._v(" "),s("v-btn",{staticClass:"btn-height-22 white--text mr-3",attrs:{disabled:0==e.items.length,"x-small":"",color:"nubeGreen"},on:{click:function(){return e.updateAllToken()}}},[e._v("\n            Update Token\n            "),s("v-icon",{attrs:{small:"",right:"",dark:""}},[e._v(" fa-key ")])],1)],1),e._v(" "),s("v-row",{attrs:{"no-gutter":""}},[s("v-col",{attrs:{cols:"12",lg:"12",xl:"12",md:"12",sm:"12",xs:"12"}},[s("v-card",{attrs:{outlined:""}},[s("v-toolbar",{attrs:{dense:"",flat:""}},[s("v-toolbar-title",{staticClass:"pr-3"},[s("span",[e._v("Rubix Services")])]),e._v(" "),s("span",{staticClass:"text-left mr-5"},[s("span",{staticClass:"grey-text font-weight-medium caption"},[e._v("Selected Apps: ")]),e._v(" "),s("span",{staticClass:"font-weight-medium"},[e._v(e._s(e.selectedGridItems.length))])]),e._v(" "),s("v-btn",{staticClass:"btn-height-22 white--text mr-3",attrs:{disabled:0==e.items.length,"x-small":"",color:"blue"},on:{click:function(){return e.toggleDialog(e.dialogNames.upgradeToLatest)}}},[e._v("\n                  Upgrade to Latest\n                  "),s("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[e._v(" fa-arrow-right ")])],1),e._v(" "),s("v-btn",{staticClass:"btn-height-22 white--text mr-3",attrs:{"x-small":"",color:"orange",disabled:0==e.selectedGridItems.length},on:{click:function(){return e.toggleDialog(e.dialogNames.bulkConfigureCron)}}},[e._v("\n                  Configure Device Reboot\n                  "),s("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[e._v(" fa-clock-o ")])],1),e._v(" "),s("v-btn",{staticClass:"btn-height-22 white--text mr-3",attrs:{disabled:0==e.items.length,"x-small":"",color:"nubeGreen"},on:{click:function(){return e.toggleDialog(e.dialogNames.updateToken)}}},[e._v("\n                  Update Token\n                  "),s("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[e._v(" fa-key ")])],1),e._v(" "),s("v-btn",{staticClass:"btn-height-22 white--text mr-3",attrs:{disabled:0==e.items.length,"x-small":"",color:"pink"},on:{click:function(){return e.toggleDialog(e.dialogNames.restart)}}},[e._v("\n                  Restart\n                  "),s("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[e._v(" fa-repeat ")])],1),e._v(" "),e.operationStatuses.length>0?s("icon-menu",{attrs:{title:"Operation Errors",icon:"fa-warning"},scopedSlots:e._u([{key:"content",fn:function(){return[s("bulk-apps-operation-status",{attrs:{title:"Operation Errors",operationStatuses:e.operationStatuses}})]},proxy:!0}],null,!1,3429031499)}):e._e(),e._v(" "),s("v-spacer"),e._v(" "),e.latestVersion?s("span",[s("span",{staticClass:"grey-text font-weight-medium caption pr-2"},[e._v("Latest Version")]),e._v("\n                  "+e._s(e.latestVersion)+"\n                ")]):e._e()],1),e._v(" "),s("v-data-table",{attrs:{"fixed-header":e.isFixedHeader,"hide-default-footer":"",items:e.dataItems,"single-select":!1,"show-select":"",height:e.dataTableHeight,"items-per-page":1e4,"custom-filter":e.filterCriteria,expanded:e.expanded,"single-expand":"","item-key":"slaveId",search:e.search,headers:e.headers,"show-expand":""},on:{pagination:e.getPageLength,"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"item.site_name",fn:function(t){var a=t.item;return[s("span",[s("master-star-indicator",{attrs:{"is-master":a.is_master}}),e._v(" "),s("span",[e._v(e._s(a.site_name))])],1)]}},{key:"item.action",fn:function(t){var a=t.item;return[s("span",[s("configure-cron-btn",{attrs:{service:a,handleClick:function(){return e.toggleDialog(e.dialogNames.configureCron,a)}}})],1)]}},{key:"item.upgrade_app_state",fn:function(e){var t=e.item;return[s("app-status-chip",{attrs:{chipSize:"small",state:t.upgrade_app_state}})]}},{key:"expanded-item",fn:function(t){var a=t.headers,n=t.item;return[s("td",{class:"expanded-table-row py-2 "+(e.$vuetify.theme.dark?"nubeDarkGrey":"nubeLightBackground"),attrs:{colspan:a.length}},[s("div",{staticClass:"flex pl-15"},[s("span",{staticClass:"table-expanded-item"},[s("span",{staticClass:"grey-text font-weight-medium caption"},[e._v("Timezone")]),e._v(" "),s("span",{staticClass:"text-ellipses"},[e._v(e._s(n.time_zone))])]),e._v(" "),s("span",{staticClass:"table-expanded-item"},[s("span",{staticClass:"grey-text font-weight-medium caption"},[e._v("State")]),e._v(" "),s("span",{staticClass:"font-weight-medium text-ellipses"},[e._v(e._s(n.site_state))])]),e._v(" "),s("span",{staticClass:"table-expanded-item"},[s("span",{staticClass:"grey-text font-weight-medium caption"},[e._v("City")]),e._v(" "),s("span",{staticClass:"font-weight-medium text-ellipses"},[e._v(e._s(n.site_city))])]),e._v(" "),s("span",{staticClass:"table-expanded-item"},[s("span",{staticClass:"grey-text font-weight-medium caption"},[e._v("Zip")]),e._v(" "),s("span",{staticClass:"font-weight-medium text-ellipses"},[e._v(e._s(n.site_zip))])])])])]}}],null,!0),model:{value:e.selectedGridItems,callback:function(t){e.selectedGridItems=t},expression:"selectedGridItems"}})],1)],1)],1)],1)],1)],1),e._v(" "),s("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:e.dialog[e.dialogNames.upgradeToLatest],callback:function(t){e.$set(e.dialog,e.dialogNames.upgradeToLatest,t)},expression:"dialog[dialogNames.upgradeToLatest]"}},[e.dialog[e.dialogNames.upgradeToLatest]?s("upgrade-latest-slave-bios-apps",{attrs:{"slave-apps":e.dataItems,"upgrade-latest":e.upgradeLatest,"selected-grid-items":e.selectedGridItems,"on-close":function(){return e.closeDialog(e.dialogNames.upgradeToLatest)}}}):e._e()],1),e._v(" "),s("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:e.dialog[e.dialogNames.updateToken],callback:function(t){e.$set(e.dialog,e.dialogNames.updateToken,t)},expression:"dialog[dialogNames.updateToken]"}},[e.dialog[e.dialogNames.updateToken]?s("slaves-update-token",{attrs:{"slave-apps":e.dataItems,"update-token":e.updateToken,"selected-grid-items":e.selectedGridItems,"on-close":function(){return e.closeDialog(e.dialogNames.updateToken)}}}):e._e()],1),e._v(" "),s("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:e.dialog[e.dialogNames.restart],callback:function(t){e.$set(e.dialog,e.dialogNames.restart,t)},expression:"dialog[dialogNames.restart]"}},[e.dialog[e.dialogNames.restart]?s("restart-bios-slave-apps",{attrs:{"slave-apps":e.dataItems,"restart-apps":e.restartApps,"selected-grid-items":e.selectedGridItems,"on-close":function(){return e.closeDialog(e.dialogNames.restart)}}}):e._e()],1),e._v(" "),s("v-dialog",{attrs:{presistent:"","max-width":"500px"},model:{value:e.dialog[e.dialogNames.configureCron],callback:function(t){e.$set(e.dialog,e.dialogNames.configureCron,t)},expression:"dialog[dialogNames.configureCron]"}},[e.dialog[e.dialogNames.configureCron]?s("configure-bios-cron",{attrs:{sync:e.initialize,selectedService:e.selectedItem,onCancel:function(){return e.closeDialog(e.dialogNames.configureCron)}}}):e._e()],1),e._v(" "),s("v-dialog",{attrs:{presistent:"","max-width":"500px"},model:{value:e.dialog[e.dialogNames.bulkConfigureCron],callback:function(t){e.$set(e.dialog,e.dialogNames.bulkConfigureCron,t)},expression:"dialog[dialogNames.bulkConfigureCron]"}},[e.dialog[e.dialogNames.bulkConfigureCron]?s("configure-bios-cron",{attrs:{isBulk:!0,sync:e.initialize,selectedService:e.selectedGridItems,onCancel:function(){return e.closeDialog(e.dialogNames.bulkConfigureCron)}}}):e._e()],1)],1)}),[],!1,null,null,null).exports,q={name:"slaves-bios-apps-page",components:{PageTitle:a.a,SlaveBiosApps:P},data:function(){return{isFetchingApps:!1}}},H=Object(f.a)(q,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-row",[s("v-col",{attrs:{cols:"12"}},[e.isFetchingApps?s("v-col",{attrs:{cols:"12"}},[s("v-skeleton-loader",{attrs:{type:"table-heading, list-item-two-line, image, table-tfoot"}})],1):e._e(),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("slave-bios-apps")],1)],1)],1)],1)}),[],!1,null,null,null);t.default=H.exports}}]);
//# sourceMappingURL=49.d02d73b049710e73ea3c.js.map