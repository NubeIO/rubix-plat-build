(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+SqX":function(e,t,a){"use strict";var n={name:"page-title",props:["title"]},i=a("psIG"),s=Object(i.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"text-h5 text-left py-3"},[a("span",[e._v(e._s(e.title))]),e._t("titleActions"),e._v(" "),e._t("spinner")],2)}),[],!1,null,null,null);t.a=s.exports},0:function(e,t){},"0iKi":function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return c})),a.d(t,"d",(function(){return u})),a.d(t,"f",(function(){return v})),a.d(t,"b",(function(){return d}));var n=a("OBCi"),i=a.n(n),s=a("uzYq"),r="/slave-devices",o=function(e){var t={global_uuid:e.global_uuid};return s.a.post(r,t)},l=function(e){return i.a.all(e.map((function(e){return o(e)})))},c=function(){return s.a.get(r)},u=function(){return s.a.get(r+"/discover")},v=function(e){var t=e.global_uuid;return s.a.delete(r+"/"+t)},d=function(e){return i.a.all(e.map((function(e){return v(e)})))}},1:function(e,t){},2:function(e,t){},"3saC":function(e,t,a){"use strict";var n={props:["on-copy"],methods:{copyToClipboard:function(e){var t=this;this.$copyText(e,this.$refs.copyClipboard).then((function(){t.$toasted.show("Copied to clipboard!",{type:"success"})}),(function(){t.$toasted.show("Cannot copy to clipboard.",{type:"error"})}))}}},i=a("psIG"),s=Object(i.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{ref:"copyClipboard"},[a("v-btn",{staticClass:"white-text",attrs:{"x-small":"",color:"#009688"},on:{click:function(){return e.onCopy(e.copyToClipboard)}}},[a("span",[e._v("Export  ")]),e._v(" "),a("v-icon",{attrs:{small:""}},[e._v("mdi-export")])],1)],1)}),[],!1,null,null,null);t.a=s.exports},"7Ipj":function(e,t,a){"use strict";var n=a("Q12t"),i=a("3saC"),s=a("Isj4"),r={name:"import-dialog",props:["receiveDataRows"],data:function(){return{file:null,dialogImportExcel:!1,dialogImportJSON:!1,dataImport:""}},methods:{importFile:function(){var e=new FileReader;e.readAsBinaryString(this.file),e.onload=this.handleFileLoad},handleFileLoad:function(e){var t=e.target.result,a=s.read(t,{type:"binary"}),n=Array.isArray(a.SheetNames)&&a.SheetNames.length>0&&a.SheetNames[0];if(!n)return this.$toasted.show("Invalid Excel File. Please reupload.",{type:"error"});var i=s.utils.sheet_to_row_object_array(a.Sheets[n]);this.receiveDataRows(i),this.dialogImportExcel=!1},closeDialog:function(){this.dialogImportJSON=!1},importJson:function(){try{var e=JSON.parse(this.dataImport);this.receiveDataRows(e),this.dialogImportJSON=!1}catch(e){return this.$toasted.show("Invalid JSON",{type:"error"})}}}},o=a("psIG"),l=Object(o.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"white--text mr-2",attrs:{"x-small":"",color:"primary"}},"v-btn",i,!1),n),[e._v("Import"),a("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[e._v("mdi-import")])],1)]}}])},[e._v(" "),a("v-list",[a("v-list-item",{on:{click:function(t){e.dialogImportJSON=!0,e.dataImport=""}}},[a("v-list-item-title",[e._v("JSON")])],1),e._v(" "),a("v-list-item",{on:{click:function(t){e.dialogImportExcel=!0,e.file=null}}},[a("v-list-item-title",[e._v("Excel")])],1)],1)],1),e._v(" "),a("v-dialog",{attrs:{width:"500px"},model:{value:e.dialogImportExcel,callback:function(t){e.dialogImportExcel=t},expression:"dialogImportExcel"}},[a("v-card",[a("v-card-title",[e._v("Choose excel file")]),e._v(" "),a("v-card-text",[a("v-file-input",{attrs:{outlined:"",dense:"",label:"File input",accept:".xls,.xlsx"},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"darken-1",text:""},on:{click:function(t){e.dialogImportExcel=!1}}},[e._v("Close")]),e._v(" "),a("v-btn",{attrs:{color:"primary darken-1",text:"",disabled:!e.file},on:{click:e.importFile}},[e._v("Import")])],1)],1)],1),e._v(" "),a("v-dialog",{attrs:{width:"500px"},model:{value:e.dialogImportJSON,callback:function(t){e.dialogImportJSON=t},expression:"dialogImportJSON"}},[a("v-card",[a("v-card-title",[e._v("Import via JSON")]),e._v(" "),a("v-card-text",[a("v-textarea",{attrs:{outlined:"",name:"input-7-4",label:"import data"},model:{value:e.dataImport,callback:function(t){e.dataImport=t},expression:"dataImport"}})],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"darken-1",text:""},on:{click:e.closeDialog}},[e._v(" Cancel ")]),e._v(" "),a("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!e.dataImport},on:{click:e.importJson}},[e._v("Import")])],1)],1)],1)],1)}),[],!1,null,null,null).exports,c={name:"grid-toolbar",props:["toolbarTitle","onCopy","items","fileName","formatDataService","receiveDataRows","onDelete","isDeleteEnabled","onSearch","hideExportData"],components:{ExportData:n.a,CopyClipboard:i.a,ImportDialog:l}},u=Object(o.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",{staticClass:"mr-6"},[e._v(e._s(e.toolbarTitle))]),e._v(" "),e.onCopy?a("copy-clipboard",{staticClass:"mr-2",attrs:{"on-copy":e.onCopy}}):e._e(),e._v(" "),e.items&&e.items.length>0&&!e.hideExportData?a("export-data",{attrs:{data:e.items,"file-name":e.fileName,"format-data-service":e.formatDataService}}):e._e(),e._v(" "),e.receiveDataRows?a("import-dialog",{attrs:{receiveDataRows:e.receiveDataRows}}):e._e(),e._v(" "),e.onDelete?a("v-btn",{staticClass:"white--text",attrs:{disabled:!e.isDeleteEnabled,"x-small":"",color:"error"},on:{click:e.onDelete}},[e._v("\n    Delete\n    "),a("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[e._v(" mdi-delete ")])],1):e._e(),e._v(" "),e._t("customAction"),e._v(" "),e._t("search")],2)}),[],!1,null,null,null);t.a=u.exports},HeMS:function(e,t,a){"use strict";a.d(t,"e",(function(){return v})),a.d(t,"d",(function(){return d})),a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return m})),a.d(t,"c",(function(){return f}));var n=a("/9Wh"),i=a.n(n),s=a("snOE"),r=a.n(s),o=a("tZmG"),l=a.n(o),c=a("VleD"),u=a("M1ki"),v=function(e){var t=function(e,t){return l()(e).reduce((function(a,n){var i=l()(e[n]).reduce((function(a,i){return t[n]&&t[n].includes(i)&&a.push(e[n][i]),a}),[]);return a[n]=i,a}),{})}(e.releaseMap,function(e){return l()(e).reduce((function(t,a){return t[a]=(e[a]||[]).map((function(e){return e&&e.slaveId})).filter((function(e){return e})),t}),{})}(e.selectedItems));return l()(t).reduce((function(e,a){var n=t[a].map((function(e){return e&&e.length||1/0})),i=n.indexOf(Math.min.apply(Math,r()(n)));return e[a]=t[a][i]||[],e}),{})},d=function(e,t){c.d(u.a.SLAVE_ID,e),c.d(u.a.SLAVE_DEVICE_INFO,i()(t))},p=function(){return c.b(u.a.SLAVE_ID)},m=function(){var e=c.b(u.a.SLAVE_DEVICE_INFO);try{return JSON.parse(e)}catch(e){return null}},f=function(){c.c(u.a.SLAVE_ID),c.c(u.a.SLAVE_DEVICE_INFO)}},OvPX:function(e,t,a){"use strict";a.r(t);var n=a("Kz1y"),i=a.n(n),s=a("tZmG"),r=a.n(s),o=a("06Hw"),l=a.n(o),c=a("YYXh"),u=a.n(c),v=a("+SqX"),d=a("7Ipj"),p=a("A5Vd"),m=a("asQ9"),f=a("Ui9F"),h={name:"slave-devices",components:{GridToolbar:d.a,MasterStarIndicator:m.a,TooltipIconButton:f.a},props:["items","removeSlaves","isFetching","switchToSlave","removeAppSlaveId","appSlaveId"],data:function(){return{search:"",selectedItems:[],headers:[{text:"Client Name",align:"start",sortable:!0,value:"client_name"},{text:"Status",align:"center",value:"is_online",sortable:!0},{text:"Device Name",align:"center",value:"device_name",sortable:!0},{text:"Site Name",align:"center",value:"site_name",sortable:!0},{text:"Latitude",align:"center",value:"site_lat",sortable:!0},{text:"Longitude",align:"center",value:"site_lon",sortable:!0},{text:"Site Address",align:"center",value:"site_address",sortable:!0},{text:"Actions",align:"center",value:"actions",sortable:!0}],tableProps:i()({},p.d)}},computed:{dataItems:function(){return this.items.map((function(e){return i()({},e,{client_name:e.is_master?"   "+e.client_name:e.client_name})}))}}},_=a("psIG"),b=Object(_.a)(h,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("grid-toolbar",{attrs:{toolbarTitle:"Slave Devices"},scopedSlots:e._u([{key:"search",fn:function(){return[a("v-text-field",{staticClass:"pl-10",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]},proxy:!0},{key:"customAction",fn:function(){return[a("v-btn",{staticClass:"white--text",attrs:{disabled:0==e.selectedItems.length,"x-small":"",color:"pink"},on:{click:function(){return e.removeSlaves(e.selectedItems)}}},[e._v("\n        Remove as slave\n        "),a("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[e._v(" mdi-delete ")])],1)]},proxy:!0}])}),e._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{"item-key":"global_uuid","show-select":"",loading:e.isFetching,search:e.search,headers:e.headers,items:e.dataItems,"sort-by":"calories","footer-props":e.tableProps.FOOTER_PROPS,itemsPerPage:e.tableProps.ITEMS_PER_PAGE},scopedSlots:e._u([{key:"item.client_name",fn:function(t){var n=t.item;return[a("span",[a("master-star-indicator",{attrs:{"is-master":n.is_master}}),e._v(" "),a("span",[e._v(e._s(n.client_name))])],1)]}},{key:"item.is_online",fn:function(t){return[t.item.is_online?a("div",[a("span",{staticClass:"font-weight-medium"},[a("v-chip",{attrs:{outlined:"",color:"green"}},[e._v("Online")])],1)]):a("div",[a("span",{staticClass:"font-weight-medium"},[a("v-chip",{attrs:{outlined:"",color:"yellow"}},[e._v("Offline")])],1)])]}},{key:"item.actions",fn:function(t){var n=t.item;return[a("div",[e.appSlaveId===n.global_uuid&&e.appSlaveId?e._e():a("tooltip-icon-button",{attrs:{btnColor:"blue",buttonSize:"medium",btnIcon:"mdi-toggle-switch-off-outline",btnTooltip:"Switch to slave mode",onClick:function(){return e.switchToSlave(n)}}}),e._v(" "),e.appSlaveId===n.global_uuid&&e.appSlaveId?a("tooltip-icon-button",{attrs:{btnColor:"orange",buttonSize:"medium",btnIcon:"mdi-toggle-switch-outline",btnTooltip:"Revert to master mode",onClick:function(){return e.removeAppSlaveId()}}}):e._e(),e._v(" "),a("tooltip-icon-button",{attrs:{btnColor:"red",btnIcon:"mdi-delete",btnTooltip:"Remove as slave",onClick:function(){return e.removeSlaves(n)},loading:n.isDeleting}})],1)]}}]),model:{value:e.selectedItems,callback:function(t){e.selectedItems=t},expression:"selectedItems"}})],1)}),[],!1,null,null,null).exports,g={name:"discover-devices",components:{GridToolbar:d.a,MasterStarIndicator:m.a},props:["items","createSlaves","isFetching"],data:function(){return{search:"",dialog:!1,isFetchingDevices:!1,selectedItems:[],headers:[{text:"Client Name",align:"start",sortable:!0,value:"client_name"},{text:"Device Name",align:"center",value:"device_name",sortable:!0},{text:"Site Name",align:"center",value:"site_name",sortable:!0},{text:"Latitude",align:"center",value:"site_lat",sortable:!0},{text:"Longitude",align:"center",value:"site_lon",sortable:!0},{text:"Site Address",align:"center",value:"site_address",sortable:!0},{text:"Actions",align:"center",value:"isAddToSlaveVisible",sortable:!0}],tableProps:i()({},p.d)}},computed:{dataItems:function(){return this.items.map((function(e){return i()({},e,{client_name:e.is_master?"   "+e.client_name:e.client_name})}))}}},S=Object(_.a)(g,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("grid-toolbar",{attrs:{toolbarTitle:"Discover Devices"},scopedSlots:e._u([{key:"search",fn:function(){return[a("v-text-field",{staticClass:"pl-10",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]},proxy:!0},{key:"customAction",fn:function(){return[a("v-btn",{staticClass:"white--text",attrs:{disabled:0==e.selectedItems.length,"x-small":"",color:"green"},on:{click:function(){return e.createSlaves(e.selectedItems)}}},[e._v("\n        Add as slave\n        "),a("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[e._v(" mdi-plus ")])],1)]},proxy:!0}])}),e._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{"item-key":"global_uuid","show-select":"",loading:e.isFetching,search:e.search,headers:e.headers,items:e.dataItems,"sort-by":"calories","footer-props":e.tableProps.FOOTER_PROPS,itemsPerPage:e.tableProps.ITEMS_PER_PAGE},scopedSlots:e._u([{key:"item.client_name",fn:function(t){var n=t.item;return[a("span",[a("master-star-indicator",{attrs:{"is-master":n.is_master}}),e._v(" "),a("span",[e._v(e._s(n.client_name))])],1)]}},{key:"item.isAddToSlaveVisible",fn:function(t){var n=t.item;return[n.isAddToSlaveVisible?a("v-btn",{attrs:{color:"green",loading:n.isUpdating},on:{click:function(){return e.createSlaves(n)}}},[e._v("\n        Add as slave\n      ")]):a("div",[e._v("No actions available")])]}}]),model:{value:e.selectedItems,callback:function(t){e.selectedItems=t},expression:"selectedItems"}})],1)}),[],!1,null,null,null).exports,x=a("0iKi"),I=a("HeMS"),y={name:"master-slave-page",components:{PageTitle:v.a,DiscoverDevices:S,SlaveDevices:b},watch:{"$route.query.tab":function(e){this.tab=this.tabs.indexOf(e)},tab:function(e,t){var a=this.$route.query.tab;if(a!==this.tabs[e]){var n=this.tabs[e];this.$router.push({path:"master-slaves",query:{tab:n}})}}},data:function(){return{tab:0,appSlaveId:null,tabs:["discover-devices","slave-devices"],slaveDevices:[],devicesMap:{},slaveDevicesMap:{},discoveredDevices:[],isFetchingSlaveDevices:!1,isFetchingDevices:!1,timeout:null}},mounted:function(){var e=this.$route.query.tab;this.tab=this.tabs.indexOf(e),this.getAppSlaveId()},created:function(){this.syncDevices(),this.getAppSlaveId()},destroyed:function(){clearTimeout(this.timeout)},methods:{formatAddress:function(e){var t="";return e.site_address&&(t+=e.site_address),e.site_city&&(t+=", "+e.site_city),e.site_country&&(t+=", "+e.site_country),t},syncDevices:function(){var e=this;return u()(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isFetchingSlaveDevices=!0,e.isFetchingDevices=!0,t.next=4,e.fetchSlaveDevices();case 4:return t.next=6,e.fetchDevices();case 6:e.getAppSlaveId();case 7:case"end":return t.stop()}}),t,e)})))()},fetchSlaveDevices:function(){var e=this;return x.e().then((function(t){e.slaveDevicesMap=t,e.slaveDevices=r()(t).map((function(a){return i()({},e.slaveDevicesMap[a],{isDeleting:!1,site_address:e.formatAddress(t[a])})}))})).catch((function(e){})).finally((function(){e.isFetchingSlaveDevices=!1}))},fetchDevices:function(){var e=this;return x.d().then((function(t){e.devicesMap=t,e.discoveredDevices=r()(e.devicesMap).map((function(t){return i()({},e.devicesMap[t],{isUpdating:!1,isAddToSlaveVisible:!e.slaveDevicesMap[t],site_address:e.formatAddress(e.devicesMap[t])})}))})).catch((function(t){e.$toasted.show("Error fetching remote devices",{type:"error"})})).finally((function(){e.isFetchingDevices=!1}))},createSlaves:function(e){var t=this;e.isUpdating=!0;return(Array.isArray(e)&&e.length>0?x.a:x.c)(e).then((function(){t.$toasted.show("Successfully updated the device status."),t.syncDevices()})).catch((function(){t.$toasted.show("Error occured while updating the device status",{type:"error"})})).finally((function(){e.isUpdating=!1}))},removeSlaves:function(e){var t=this;e.isDeleting=!0;return(Array.isArray(e)&&e.length>0?x.b:x.f)(e).then((function(){t.$toasted.show("Successfully remove the device as slave."),t.syncDevices()})).catch((function(){t.$toasted.show("Error occured while updating the device status",{type:"error"})})).finally((function(){e.isDeleting=!1}))},switchToSlave:function(e){var t=this;this.$store.commit("changeSwitchedSlaveState",!1),this.timeout=setTimeout((function(){I.d(e.global_uuid,e),t.$store.commit("changeSwitchedSlaveState",!0),t.appSlaveId=e.global_uuid,t.$store.commit("changeAppRerenderCount")}),100)},getAppSlaveId:function(){this.appSlaveId=I.b()},removeAppSlaveId:function(){this.appSlaveId=null,this.$store.commit("changeSwitchedSlaveState",!1),I.c(),this.$store.commit("changeAppRerenderCount")}}},D=Object(_.a)(y,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("page-title",{attrs:{title:"Master Slave Mapping"}}),e._v(" "),a("v-tabs",{attrs:{dark:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tab",{key:0},[e._v("Discover Devices ")]),e._v(" "),a("v-tab",{key:1},[e._v("Slave Devices ")])],1),e._v(" "),a("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tab-item",{key:0},[a("discover-devices",{attrs:{items:e.discoveredDevices,"create-slaves":e.createSlaves,"is-fetching":e.isFetchingDevices}})],1),e._v(" "),a("v-tab-item",{key:1},[a("slave-devices",{attrs:{items:e.slaveDevices,removeSlaves:e.removeSlaves,"is-fetching":e.isFetchingSlaveDevices,"switch-to-slave":e.switchToSlave,"app-slave-id":e.appSlaveId,"remove-app-slave-id":e.removeAppSlaveId}})],1)],1)],1)}),[],!1,null,null,null);t.default=D.exports},Q12t:function(e,t,a){"use strict";var n=a("/9Wh"),i=a.n(n),s=a("+n12"),r={name:"export-data",props:["data","fileName","formatDataService"],methods:{clickDownload:function(e,t){var a=e;switch("function"==typeof this.formatDataService&&(a=this.formatDataService(e)),t){case"csv":return Object(s.e)(this.fileName,a);case"excel":return Object(s.g)(this.fileName,a);case"json":return Object(s.h)(this.fileName,i()(a))}}}},o=a("psIG"),l=Object(o.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"white--text mr-2",attrs:{"x-small":"",color:"#009688",dark:""}},"v-btn",i,!1),n),[a("span",[e._v("Download")]),e._v(" "),a("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[e._v("mdi-download")])],1)]}}])},[e._v(" "),a("v-list",[a("v-list-item",{on:{click:function(t){return e.clickDownload(e.data,"json")}}},[e._v("\n        JSON\n      ")]),e._v(" "),a("v-list-item",{on:{click:function(t){return e.clickDownload(e.data,"excel")}}},[e._v("\n        Excel\n      ")]),e._v(" "),a("v-list-item",{on:{click:function(t){return e.clickDownload(e.data,"csv")}}},[e._v("\n        CSV\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.a=l.exports},Ui9F:function(e,t,a){"use strict";var n={name:"tooltip-icon-button",props:["btnIcon","btnTooltip","onClick","btnColor","buttonSize"]},i=a("psIG"),s=Object(i.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return["medium"==e.buttonSize?a("v-btn",e._g(e._b({staticClass:"white--text",attrs:{icon:"",medium:"",color:e.btnColor},on:{click:e.onClick}},"v-btn",i,!1),n),[a("v-icon",{attrs:{medium:"",dark:""}},[e._v(" "+e._s(e.btnIcon)+" ")])],1):a("v-btn",e._g(e._b({staticClass:"white--text",attrs:{icon:"",small:"",color:e.btnColor},on:{click:e.onClick}},"v-btn",i,!1),n),[a("v-icon",{attrs:{small:"",dark:""}},[e._v(" "+e._s(e.btnIcon)+" ")])],1)]}}])},[e._v(" "),a("span",[e._v(e._s(e.btnTooltip))])])}),[],!1,null,null,null);t.a=s.exports},asQ9:function(e,t,a){"use strict";var n={name:"master-star-indicator",props:["isMaster"]},i=a("psIG"),s=Object(i.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[e.isMaster?a("v-icon",e._g(e._b({staticClass:"mt-n1",attrs:{medium:"",color:"yellow"}},"v-icon",i,!1),n),[e._v("mdi-star")]):e._e()]}}])},[e._v(" "),a("span",[e._v("Master device")])])}),[],!1,null,null,null);t.a=s.exports}}]);
//# sourceMappingURL=12.36d7041e1e2764c5eb9c.js.map