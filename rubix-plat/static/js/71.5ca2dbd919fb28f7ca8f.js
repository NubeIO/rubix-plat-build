(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{iHVn:function(t,e,n){"use strict";n.r(e);var a,l=n("TcPG"),o=n.n(l),s=n("Kz1y"),i=n.n(s),r=n("Ui9F"),d={name:"switch",props:["value","enableText","disableText","enableColor","disableColor","disabled"],data:function(){return{}},components:{TooltipIconButton:r.a},computed:{_value:{get:function(){return this.value},set:function(t){return t}},enableTxt:function(){return this.enableText?this.enableText:"Enable"},disableTxt:function(){return this.disableText?this.disableText:"Disable"},enableClr:function(){return this.enableColor?this.enableColor:"green"},disableClr:function(){return this.disableColor?this.disableColor:"orange"}},methods:{onInput:function(t){this.disabled||this.$emit("input",t)}}},c=n("psIG"),u=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._value?t._e():n("tooltip-icon-button",{attrs:{btnColor:t.disableClr,buttonSize:"medium",btnIcon:"mdi-toggle-switch-off-outline",btnTooltip:t.disableTxt,onClick:function(){return t.onInput(!0)}}}),t._v(" "),t._value?n("tooltip-icon-button",{attrs:{btnColor:t.enableClr,buttonSize:"medium",btnIcon:"mdi-toggle-switch-outline",btnTooltip:t.enableTxt,onClick:function(){return t.onInput(!1)}}}):t._e()],1)}),[],!1,null,null,null).exports,p={name:"back-button",methods:{onBack:function(){this.$router.go(-1)}}},w=Object(c.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"mr-1",attrs:{icon:"",medium:""},on:{click:t.onBack}},[n("v-icon",{attrs:{medium:""}},[t._v(" mdi-arrow-left ")])],1)}),[],!1,null,null,null).exports,v=n("06Hw"),h=n.n(v),m=n("YYXh"),g=n.n(m),f="CLEARED",b="DOWNLOADING",D="DOWNLOADED",_={name:"rf-plugin-download",props:["selectedPlugins","startDownload","currentDownloadState","appDownloadStates","clearSelectedApps","clearDownloadStateInterval","deleteDownloadState","closeDialog","installPlugins"],data:function(){return{currentView:1,downloadStarted:!1,successInstallApps:[],failureInstallApps:[],stepsModel:{1:{loader:!1,back:1,forward:2,hasForward:!0,disabled:!1,hasCancel:!0,title:"Download",buttonLabel:"Download"},2:{loader:!1,back:1,forward:3,disabled:!0,hasForward:!0,hasCancel:!0,title:"Downloading",buttonLabel:"Continue"},3:{loader:!1,back:1,forward:3,disabled:!1,hasForward:!0,title:"Install",buttonLabel:"Install",hasCancelInstallation:!0},4:{loader:!1,back:4,forward:4,disabled:!1,hasForward:!0,title:"Complete",buttonLabel:"Close"}}}},updated:function(){this.currentDownloadState===D?this.stepsModel[2].disabled=!1:this.stepsModel[2].disabled=!0},watch:{currentDownloadState:function(t,e){this.showDownloadStateView(t)}},mounted:function(){this.showDownloadStateView(this.currentDownloadState)},computed:{apps:function(){return this.selectedPlugins.map((function(t){return{pluginName:t.name,version:t.version,displayName:t.name,state:t.state}}))},downloadedApps:function(){return(this.appDownloadStates||[]).filter((function(t){return t&&t.download})).map((function(t){return i()({},t,{name:t.plugin,isDownloading:!t.download,pluginName:t.plugin,hasError:!!t.error,errorMessage:t.error})}))}},methods:{next:function(t){var e=this;return g()(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.currentView,t.t0=n,t.next=1===t.t0?4:2===t.t0?6:3===t.t0?8:4===t.t0?10:12;break;case 4:return e.download(),t.abrupt("break",14);case 6:return e.currentView++,t.abrupt("break",14);case 8:return e.install(),t.abrupt("break",14);case 10:return e.resetPluginInstallation(),t.abrupt("break",14);case 12:return e.currentView++,t.abrupt("break",14);case 14:case"end":return t.stop()}}),t,e)})))()},install:function(){var t=this;return this.spinLoader(!0),this.installPlugins(this.downloadedApps).then((function(e){t.successInstallApps=e.filter((function(t){return t.installation})),t.failureInstallApps=e.filter((function(t){return!t.installation})),t.currentView=4})).catch((function(e){t.deleteDownloadState(),t.$toasted.show("Unexpected error occured while bulk installing apps. Please try again")})).finally((function(){t.spinLoader(!1)}))},showDownloadStateView:function(t){switch(t){case f:this.currentView=1,this.stepsModel[2].disabled=!0;break;case b:this.stepsModel[2].disabled=!0,this.currentView=2;break;case D:this.stepsModel[2].disabled=!1,this.currentView=2,this.clearDownloadStateInterval()}},back:function(){this.currentView--},cancel:function(){1==this.currentView&&this.deleteDownloadState(),this.closeDialog(!0)},spinLoader:function(t){this.stepsModel[this.currentView].loader=t},download:function(){var t=this;this.spinLoader(!0),this.startDownload(this.selectedPlugins).then((function(e){e&&"download started"==e.message.toLowerCase()&&(t.downloadStarted=!0),t.stepsModel[2].disabled=!0,t.spinLoader(!1),t.currentView++})).catch((function(){t.spinLoader(!1)}))},cancelInstallation:function(){this.resetPluginInstallation()},resetPluginInstallation:function(){this.currentView=1,this.successInstallApps=[],this.failureInstallApps=[],this.stepsModel={1:{loader:!1,back:1,forward:2,hasForward:!0,disabled:!1,title:"Download",buttonLabel:"Download"},2:{loader:!1,back:1,forward:3,disabled:!1,hasForward:!0,title:"Downloading",buttonLabel:null},3:{loader:!1,back:1,forward:3,disabled:!1,hasForward:!0,title:"Install",buttonLabel:"Install",hasCancelInstallation:!0},4:{loader:!1,back:4,forward:4,disabled:!1,hasForward:!1,title:"Complete",buttonLabel:"Close"}},this.deleteDownloadState(),this.clearSelectedApps(),this.closeDialog(!0,{unmount:!0})}}},S=Object(c.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.stepsModel[t.currentView].title))])]),t._v(" "),n("v-card-text",[n("v-stepper",{model:{value:t.currentView,callback:function(e){t.currentView=e},expression:"currentView"}},[n("v-stepper-header",[n("v-stepper-step",{attrs:{complete:t.currentView>1,step:"1"}},[t._v(" 1 ")]),t._v(" "),n("v-divider"),t._v(" "),n("v-stepper-step",{attrs:{complete:t.currentView>2,step:"2"}},[t._v(" 2 ")]),t._v(" "),n("v-divider"),t._v(" "),n("v-stepper-step",{attrs:{complete:t.currentView>3,step:"3"}},[t._v(" 3 ")]),t._v(" "),n("v-divider"),t._v(" "),n("v-stepper-step",{attrs:{step:"4"}},[t._v(" 4 ")])],1),t._v(" "),n("v-stepper-items",{staticClass:"stepper-container"},[n("v-stepper-content",{staticClass:"pa-0",attrs:{step:"1"}},[n("v-list",{staticClass:"text-left",attrs:{flat:"",subheader:"",dense:""}},[n("v-subheader",[t._v("Selected Apps")]),t._v(" "),t._l(t.apps,(function(e,a){return n("v-list-item",{key:"selected_apps-"+a},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.displayName)}}),t._v(" "),n("v-list-item-subtitle",{domProps:{textContent:t._s(e.version)}})],1)],1)}))],2)],1),t._v(" "),n("v-stepper-content",{staticClass:"pa-0",attrs:{step:"2"}},[n("div",{staticClass:"text-left"},[t.downloadStarted&&"CLEARED"==t.currentDownloadState?n("v-alert",{staticClass:"mb-0",attrs:{dense:"",type:"info"}},[t._v("\n              Fetching download status "),n("strong",[t._v("Please Wait!")])]):t._e(),t._v(" "),"DOWNLOADING"===t.currentDownloadState?n("v-alert",{staticClass:"mb-0",attrs:{dense:"",type:"info"}},[t._v("\n              Downloading Selected App "),n("strong",[t._v("Please Wait!")])]):t._e(),t._v(" "),"DOWNLOADED"===t.currentDownloadState?n("v-alert",{staticClass:"mb-0",attrs:{dense:"",type:"success"}},[t._v("\n              Downloading Completed\n            ")]):t._e()],1)]),t._v(" "),n("v-stepper-content",{staticClass:"pa-0",attrs:{step:"3"}},t._l(t.downloadedApps,(function(e,a){return n("v-list-item",{key:"selected_apps-"+a},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.pluginName)}})],1),t._v(" "),n("v-list-item-icon",[e.isDownloading?n("div",[n("span",{staticClass:"font-weight-medium"},[n("v-chip",{attrs:{outlined:"",color:"downloadColor"}},[t._v("Downloading")])],1)]):e.hasError?n("div",[n("span",{staticClass:"font-weight-medium"},[n("v-chip",{attrs:{outlined:"",color:"red"}},[t._v("Failed")])],1)]):e.isDownloading||e.hasError?t._e():n("div",[n("span",{staticClass:"font-weight-medium"},[n("v-chip",{attrs:{outlined:"",color:"nubeGreen"}},[t._v("Downloaded")])],1)])])],1)})),1),t._v(" "),n("v-stepper-content",{staticClass:"pa-0",attrs:{step:"4"}},["DOWNLOADED"===t.currentDownloadState?n("v-list",{staticClass:"text-left",attrs:{flat:"",subheader:"",dense:""}},[t.successInstallApps.length>0?n("v-list-item-group",[n("v-subheader",[t._v("Installation Completed Apps")]),t._v(" "),t._l(t.successInstallApps,(function(e,a){return n("v-list-item",{key:"install-complete-"+a},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.plugin)}})],1),t._v(" "),n("v-list-item-icon",[n("div",[n("span",{staticClass:"font-weight-medium"},[n("v-chip",{attrs:{outlined:"",color:"blue"}},[t._v("Installed")])],1)])])],1)}))],2):t._e(),t._v(" "),t.failureInstallApps.length>0?n("v-list-item-group",[n("v-subheader",[t._v(" Installation Failed Apps")]),t._v(" "),t._l(t.failureInstallApps,(function(e,a){return n("v-list-item",{key:"installation-failed-"+a},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.plugin)}}),t._v(" "),n("v-list-item-subtitle",{domProps:{textContent:t._s(e.version)}}),t._v(" "),n("v-list-item-subtitle",{domProps:{textContent:t._s(e.error)}})],1),t._v(" "),n("v-list-item-icon",[n("div",[n("span",{staticClass:"font-weight-medium"},[n("v-chip",{attrs:{outlined:"",color:"red"}},[t._v("Failed")])],1)])])],1)}))],2):t._e()],1):t._e()],1)],1)],1)],1),t._v(" "),n("v-card-actions",[t.stepsModel[t.currentView].hasForward?n("v-btn",{staticClass:"btn-height-22 white--text",attrs:{"x-small":"",color:"primary",loading:t.stepsModel[t.currentView].loader,disabled:t.stepsModel[t.currentView].disabled},on:{click:t.next}},[t._v("\n      "+t._s("function"==typeof t.stepsModel[t.currentView].buttonLabel?t.stepsModel[t.currentView].buttonLabel(t.serviceStatus):t.stepsModel[t.currentView].buttonLabel)+"\n    ")]):t._e(),t._v(" "),t.stepsModel[t.currentView].hasCancelInstallation?n("v-btn",{attrs:{small:"",color:"pink",disabled:t.stepsModel[t.currentView].disabled,text:""},on:{click:t.cancelInstallation}},[t._v("\n      Cancel Install\n    ")]):t._e(),t._v(" "),t.stepsModel[t.currentView].hasCancel?n("v-btn",{attrs:{small:"",text:""},on:{click:t.cancel}},[t._v(" Close ")]):t._e()],1)],1)}),[],!1,null,"3d4371a4",null).exports,I=n("CfmX"),C=n("97BG"),x=n("lkCm"),k=n("uzYq"),A={endpoint:a="rf-plugin-upgrade/"+"FLOW_FRAMEWORK",fetch:function(){return k.a.get(a)},download:function(t){var e=a+"/download";return k.a.post(e,t)},install:function(t){var e=a+"/install";return k.a.post(e,t)},uninstall:function(t){var e=a+"/uninstall";return k.a.post(e,t)},fetchDownloadState:function(){var t=a+"/downloadState";return k.a.get(t)},deleteDownloadState:function(){var t=a+"/downloadState";return k.a.delete(t)}},P={multiStepDownloadInstall:"multiStepDownloadInstall",uninstall:"uninstall"},V={name:"flow-framework-upgrade",components:{BackButton:w,RbxSwitch:u,GenericGrid:I.a,TooltipIconButton:r.a,RfPluginDownload:S,ConfirmDialog:x.a},data:function(){var t;return{remount:0,isUninstalling:!1,isUpgradePersistent:!0,currentDownloadState:null,downloadStateInterval:null,clearSelectedItems:null,service:A,gridName:C.h,toolbarTitle:"Plugins",selectedItem:null,isDeletingDownloadState:!1,appDownloadStates:[],dialogNames:i()({},P),dialog:(t={},o()(t,P.multiStepDownloadInstall,!1),o()(t,P.uninstall,!1),t),remountDialog:o()({},P.multiStepDownloadInstall,!0),gridHeaders:[{text:"Name",align:"center",value:"name",sortable:!0},{text:"Current Version",align:"center",value:"version",sortable:!0},{text:"Installed",value:"gridItemActions"}]}},computed:{showCheckDownloadIcon:function(){return this.currentDownloadState===D},showDownloadProgressIcon:function(){return this.currentDownloadState===b}},mounted:function(){this.fetchDownloadState()},destroyed:function(){this.downloadStateInterval=null},methods:{installPlugins:function(t){var e=this,n=t.map((function(t){return{plugin:t.name}}));return A.install(n).then((function(t){return e.remount++,t}))},downloadPlugin:function(t){var e=this,n=t.map((function(t){return{plugin:t.name}}));return A.download(n).then((function(t){return e.startDownloadStateInterval(),t}))},deleteDownloadState:function(){var t=this;return this.isDeletingDownloadState=!0,A.deleteDownloadState().then((function(t){return t})).finally((function(){t.fetchDownloadState(),t.clearDownloadStateInterval(),t.isDeletingDownloadState=!1}))},fetchDownloadState:function(){var t=this;A.fetchDownloadState().then((function(e){var n=e.state,a=e.plugins;switch(t.currentDownloadState=n,n){case f:t.clearDownloadStateInterval();break;case b:t.startDownloadStateInterval(),t.isUpgradePersistent=!1;break;case D:t.isUpgradePersistent=!0}Array.isArray(a)&&(t.appDownloadStates=a)}))},onUninstall:function(){var t=this,e=(this.selectedItem||[]).map((function(t){return{plugin:t.name}}));if(e.length)return this.isUninstalling=!0,A.uninstall(e).then((function(e){return t.$toasted.show("Successfully uninstalled plugins."),t.closeDialog(t.dialogNames.uninstall),t.remount++,e})).catch((function(e){t.$toasted.show("Failed to uninstall plugins.",{type:"error"})})).finally((function(){t.isUninstalling=!1}))},startDownloadStateInterval:function(){var t=this;this.downloadStateInterval||(this.downloadStateInterval=setInterval((function(){t.fetchDownloadState()}),5e3))},clearDownloadStateInterval:function(){clearInterval(this.downloadStateInterval),this.downloadStateInterval=null},closeDialog:function(t,e){var n=this;this.dialog[t]=!1,e&&e.unmount&&this.remountDialog[t]&&(this.remountDialog[t]=!1,setTimeout((function(){n.remountDialog[t]=!0}),500)),this.selectedApp={}},clearSelectedApps:function(){"function"==typeof this.clearSelectedItems&&this.clearSelectedItems()},toggleDialog:function(t,e,n){this.selectedItem=e,this.clearSelectedItems=n,this.dialog[t]=!this.dialog[t],this.dialog[t]?this.selectedItem=e:this.selectedItem=null},onGridItemInstallChange:function(t){t.is_installed?t.is_installed&&this.toggleDialog(this.dialogNames.uninstall,[i()({},t)]):this.toggleDialog(this.dialogNames.multiStepDownloadInstall,[i()({},t)])}}},N=Object(c.a)(V,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",[n("back-button"),t._v(" Plugin Distro ")],1),t._v(" "),n("v-card-text",[n("v-row",{attrs:{"no-gutter":""}},[n("v-col",{attrs:{cols:"12",lg:"12",xl:"12",md:"12",sm:"12",xs:"12"}},[n("generic-grid",{key:t.remount,attrs:{itemKey:"name",service:t.service,creatable:!1,deletable:!1,hideActions:!0,headers:t.gridHeaders,toolbarTitle:t.toolbarTitle},scopedSlots:t._u([{key:"gridItemActions",fn:function(e){var a=e.item;return[n("rbx-switch",{attrs:{value:a.is_installed,enableText:"Installed",disableText:"Not Installed"},on:{input:function(){return t.onGridItemInstallChange(a)}}})]}},{key:"toolbarButtons",fn:function(e){var a=e.selectedItems,l=e.clearSelectedItems;return[n("span",{staticClass:"mr-2"},[n("v-btn",{staticClass:"btn-height-22 white--text",attrs:{disabled:t.isDeletingDownloadState,"x-small":"",color:"downloadColor"},on:{click:function(){return t.toggleDialog(t.dialogNames.multiStepDownloadInstall,a,l)}}},[t._v("\n                Download Apps\n                "),n("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[t._v(" mdi-download ")])],1),t._v(" "),t.showDownloadProgressIcon?n("v-progress-circular",{attrs:{width:2,size:15,color:"white",indeterminate:""}}):t._e(),t._v(" "),t.showCheckDownloadIcon?n("v-icon",{attrs:{"x-medium":"",dark:""}},[t._v(" mdi-check")]):t._e()],1),t._v(" "),n("v-btn",{staticClass:"btn-height-22 white--text mr-2",attrs:{disabled:a&&0==a.length,"x-small":"",color:"error"},on:{click:function(){return t.toggleDialog(t.dialogNames.uninstall,a,l)}}},[t._v("\n              Uninstall Apps\n              "),n("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[t._v(" mdi-delete ")])],1)]}}])})],1)],1)],1),t._v(" "),n("confirm-dialog",{attrs:{"is-open":t.dialog[t.dialogNames.uninstall],"on-close":function(){return t.closeDialog(t.dialogNames.uninstall)},"on-confirm":function(){return t.onUninstall()},loading:t.isUninstalling,"dialog-text":"Do you want to uninstall these apps ?"}}),t._v(" "),n("v-dialog",{attrs:{persistent:t.isUpgradePersistent,"max-width":"500px"},model:{value:t.dialog[t.dialogNames.multiStepDownloadInstall],callback:function(e){t.$set(t.dialog,t.dialogNames.multiStepDownloadInstall,e)},expression:"dialog[dialogNames.multiStepDownloadInstall]"}},[t.remountDialog[t.dialogNames.multiStepDownloadInstall]?n("rf-plugin-download",{attrs:{selectedPlugins:t.selectedItem,startDownload:t.downloadPlugin,installPlugins:t.installPlugins,appDownloadStates:t.appDownloadStates,clearSelectedApps:t.clearSelectedApps,currentDownloadState:t.currentDownloadState,deleteDownloadState:t.deleteDownloadState,clearDownloadStateInterval:t.clearDownloadStateInterval,closeDialog:function(e,n){return t.closeDialog(t.dialogNames.multiStepDownloadInstall,n)}}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=N.exports}}]);
//# sourceMappingURL=71.5ca2dbd919fb28f7ca8f.js.map