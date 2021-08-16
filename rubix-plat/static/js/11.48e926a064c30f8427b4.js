(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+SqX":function(t,e,a){"use strict";var n={name:"page-title",props:["title"]},i=a("psIG"),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"text-h5 text-left py-3"},[a("span",[t._v(t._s(t.title))]),t._t("titleActions"),t._v(" "),t._t("spinner")],2)}),[],!1,null,null,null);e.a=r.exports},0:function(t,e){},"0iKi":function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return l})),a.d(e,"e",(function(){return c})),a.d(e,"d",(function(){return u})),a.d(e,"f",(function(){return v})),a.d(e,"b",(function(){return d}));var n=a("OBCi"),i=a.n(n),r=a("uzYq"),s="/slave-devices",o=function(t){var e={global_uuid:t.global_uuid};return r.a.post(s,e)},l=function(t){return i.a.all(t.map((function(t){return o(t)})))},c=function(){return r.a.get(s)},u=function(){return r.a.get(s+"/discover")},v=function(t){var e=t.global_uuid;return r.a.delete(s+"/"+e)},d=function(t){return i.a.all(t.map((function(t){return v(t)})))}},1:function(t,e){},2:function(t,e){},"3saC":function(t,e,a){"use strict";var n={props:["on-copy"],methods:{copyToClipboard:function(t){var e=this;this.$copyText(t,this.$refs.copyClipboard).then((function(){e.$toasted.show("Copied to clipboard!",{type:"success"})}),(function(){e.$toasted.show("Cannot copy to clipboard.",{type:"error"})}))}}},i=a("psIG"),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{ref:"copyClipboard"},[a("v-btn",{staticClass:"white-text",attrs:{"x-small":"",color:"#009688"},on:{click:function(){return t.onCopy(t.copyToClipboard)}}},[a("span",[t._v("Export  ")]),t._v(" "),a("v-icon",{attrs:{small:""}},[t._v("mdi-export")])],1)],1)}),[],!1,null,null,null);e.a=r.exports},"7Ipj":function(t,e,a){"use strict";var n=a("Q12t"),i=a("3saC"),r=a("Isj4"),s={name:"import-dialog",props:["receiveDataRows"],data:function(){return{file:null,dialogImportExcel:!1,dialogImportJSON:!1,dataImport:""}},methods:{importFile:function(){var t=new FileReader;t.readAsBinaryString(this.file),t.onload=this.handleFileLoad},handleFileLoad:function(t){var e=t.target.result,a=r.read(e,{type:"binary"}),n=Array.isArray(a.SheetNames)&&a.SheetNames.length>0&&a.SheetNames[0];if(!n)return this.$toasted.show("Invalid Excel File. Please reupload.",{type:"error"});var i=r.utils.sheet_to_row_object_array(a.Sheets[n]);this.receiveDataRows(i),this.dialogImportExcel=!1},closeDialog:function(){this.dialogImportJSON=!1},importJson:function(){try{var t=JSON.parse(this.dataImport);this.receiveDataRows(t),this.dialogImportJSON=!1}catch(t){return this.$toasted.show("Invalid JSON",{type:"error"})}}}},o=a("psIG"),l=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"white--text mr-2",attrs:{"x-small":"",color:"primary"}},"v-btn",i,!1),n),[t._v("Import"),a("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[t._v("mdi-import")])],1)]}}])},[t._v(" "),a("v-list",[a("v-list-item",{on:{click:function(e){t.dialogImportJSON=!0,t.dataImport=""}}},[a("v-list-item-title",[t._v("JSON")])],1),t._v(" "),a("v-list-item",{on:{click:function(e){t.dialogImportExcel=!0,t.file=null}}},[a("v-list-item-title",[t._v("Excel")])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{width:"500px"},model:{value:t.dialogImportExcel,callback:function(e){t.dialogImportExcel=e},expression:"dialogImportExcel"}},[a("v-card",[a("v-card-title",[t._v("Choose excel file")]),t._v(" "),a("v-card-text",[a("v-file-input",{attrs:{outlined:"",dense:"",label:"File input",accept:".xls,.xlsx"},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"darken-1",text:""},on:{click:function(e){t.dialogImportExcel=!1}}},[t._v("Close")]),t._v(" "),a("v-btn",{attrs:{color:"primary darken-1",text:"",disabled:!t.file},on:{click:t.importFile}},[t._v("Import")])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{width:"500px"},model:{value:t.dialogImportJSON,callback:function(e){t.dialogImportJSON=e},expression:"dialogImportJSON"}},[a("v-card",[a("v-card-title",[t._v("Import via JSON")]),t._v(" "),a("v-card-text",[a("v-textarea",{attrs:{outlined:"",name:"input-7-4",label:"import data"},model:{value:t.dataImport,callback:function(e){t.dataImport=e},expression:"dataImport"}})],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"darken-1",text:""},on:{click:t.closeDialog}},[t._v(" Cancel ")]),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!t.dataImport},on:{click:t.importJson}},[t._v("Import")])],1)],1)],1)],1)}),[],!1,null,null,null).exports,c={name:"grid-toolbar",props:["toolbarTitle","onCopy","items","fileName","formatDataService","receiveDataRows","onDelete","isDeleteEnabled","onSearch","hideExportData"],components:{ExportData:n.a,CopyClipboard:i.a,ImportDialog:l}},u=Object(o.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",{staticClass:"mr-6"},[t._v(t._s(t.toolbarTitle))]),t._v(" "),t._t("gridCounter"),t._v(" "),t.onCopy?a("copy-clipboard",{staticClass:"mr-2",attrs:{"on-copy":t.onCopy}}):t._e(),t._v(" "),t.items&&t.items.length>0&&!t.hideExportData?a("export-data",{attrs:{data:t.items,"file-name":t.fileName,"format-data-service":t.formatDataService}}):t._e(),t._v(" "),t.receiveDataRows?a("import-dialog",{attrs:{receiveDataRows:t.receiveDataRows}}):t._e(),t._v(" "),t.onDelete?a("v-btn",{staticClass:"white--text",attrs:{disabled:!t.isDeleteEnabled,"x-small":"",color:"error"},on:{click:t.onDelete}},[t._v("\n    Delete\n    "),a("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[t._v(" mdi-delete ")])],1):t._e(),t._v(" "),t._t("customAction"),t._v(" "),t._t("search")],2)}),[],!1,null,null,null);e.a=u.exports},HeMS:function(t,e,a){"use strict";a.d(e,"g",(function(){return p})),a.d(e,"f",(function(){return m})),a.d(e,"c",(function(){return f})),a.d(e,"b",(function(){return h})),a.d(e,"e",(function(){return _})),a.d(e,"a",(function(){return g})),a.d(e,"d",(function(){return S}));var n=a("/9Wh"),i=a.n(n),r=a("snOE"),s=a.n(r),o=a("tZmG"),l=a.n(o),c=a("yEOx"),u=a.n(c),v=a("VleD"),d=a("M1ki"),p=function(t){var e=function(t,e){return l()(t).reduce((function(a,n){var i=l()(t[n]).reduce((function(a,i){return e[n]&&e[n].includes(i)&&a.push(t[n][i]),a}),[]);return a[n]=i,a}),{})}(t.releaseMap,function(t){return l()(t).reduce((function(e,a){return e[a]=(t[a]||[]).map((function(t){return t&&t.slaveId})).filter((function(t){return t})),e}),{})}(t.selectedItems));return l()(e).reduce((function(t,a){var n=e[a].map((function(t){return t&&t.length||1/0})),i=n.indexOf(Math.min.apply(Math,s()(n)));return t[a]=e[a][i]||[],t}),{})},m=function(t,e){v.d(d.a.SLAVE_ID,t),v.d(d.a.SLAVE_DEVICE_INFO,i()(e))},f=function(){return v.b(d.a.SLAVE_ID)},h=function(){var t=v.b(d.a.SLAVE_DEVICE_INFO);try{return JSON.parse(t)}catch(t){return null}},_=function(){v.c(d.a.SLAVE_ID),v.c(d.a.SLAVE_DEVICE_INFO)};function b(t){return t.reduce((function(t,e){var a=e.toLowerCase().split("v")[1].split(".").map((function(t){return isNaN(+t)&&t.indexOf("rc")?+t.split("-")[0]-.5/+t.split("-rc")[1]:+t})),n=a.reduce((function(t,e,n){var i;return t+=(i=a.length-n,Math.pow(10,i-1)*e)}),0);return t[n]=e,t}),{})}function g(t){var e=b(t);return e[Math.max.apply(Math,s()(l()(e)))]}function S(t,e){var a,n=u()(e),i=u()(t),r=(a=b(n),Math.max.apply(Math,s()(l()(a)))),o=b(i);return l()(o).reduce((function(t,e){return+e>=r&&t.push(o[e]),t}),[])}},OvPX:function(t,e,a){"use strict";a.r(e);var n=a("Kz1y"),i=a.n(n),r=a("tZmG"),s=a.n(r),o=a("06Hw"),l=a.n(o),c=a("YYXh"),u=a.n(c),v=a("+SqX"),d=a("7Ipj"),p=a("A5Vd"),m=a("asQ9"),f=a("Ui9F"),h={name:"grid-items-counter",props:["num"]},_=a("psIG"),b=Object(_.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"text-left mr-5 grid-item-counter"},[a("span",{staticClass:"grey--text caption"},[t._v("Selected Apps: ")]),t._v(" "),a("span",{staticClass:"white--text"},[t._v(t._s(t.num))])])}),[],!1,null,"76419ac0",null).exports,g={name:"slave-devices",components:{GridToolbar:d.a,MasterStarIndicator:m.a,TooltipIconButton:f.a,GridItemsCounter:b},props:["items","removeSlaves","isFetching","switchToSlave","removeAppSlaveId","appSlaveId"],data:function(){return{search:"",selectedItems:[],headers:[{text:"S/N",align:"center",sortable:!0,value:"sn"},{text:"Client Name",align:"start",sortable:!0,value:"client_name"},{text:"Status",align:"center",value:"is_online",sortable:!0},{text:"Device Name",align:"center",value:"device_name",sortable:!0},{text:"Site Name",align:"center",value:"site_name",sortable:!0},{text:"Latitude",align:"center",value:"site_lat",sortable:!0},{text:"Longitude",align:"center",value:"site_lon",sortable:!0},{text:"Site Address",align:"center",value:"site_address",sortable:!0},{text:"Failiure Rate (%)",align:"center",value:"faliureRate",sortable:!0},{text:"Actions",align:"center",value:"actions",sortable:!0}],tableProps:i()({},p.d)}},computed:{dataItems:function(){return this.items.map((function(t,e){return i()({},t,{sn:e+1,faliureRate:(t.failure_count/t.total_count*100).toFixed(2),client_name:t.is_master?"   "+t.client_name:t.client_name})}))},tableHeight:function(){return this.items&&this.items.length>20?"75vh":void 0}}},S=Object(_.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("grid-toolbar",{attrs:{toolbarTitle:"Slave Devices"},scopedSlots:t._u([{key:"gridCounter",fn:function(){return[a("grid-items-counter",{attrs:{num:t.selectedItems.length}})]},proxy:!0},{key:"search",fn:function(){return[a("v-text-field",{staticClass:"pl-10",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]},proxy:!0},{key:"customAction",fn:function(){return[a("v-btn",{staticClass:"white--text",attrs:{disabled:0==t.selectedItems.length,"x-small":"",color:"pink"},on:{click:function(){return t.removeSlaves(t.selectedItems)}}},[t._v("\n        Remove as slave\n        "),a("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[t._v(" mdi-delete ")])],1)]},proxy:!0}])}),t._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{"item-key":"global_uuid","show-select":"",height:t.tableHeight,loading:t.isFetching,search:t.search,"fixed-header":"",headers:t.headers,items:t.dataItems,"sort-by":"calories","footer-props":t.tableProps.FOOTER_PROPS,itemsPerPage:t.tableProps.ITEMS_PER_PAGE},scopedSlots:t._u([{key:"item.client_name",fn:function(e){var n=e.item;return[a("span",[a("master-star-indicator",{attrs:{"is-master":n.is_master}}),t._v(" "),a("span",[t._v(t._s(n.client_name))])],1)]}},{key:"item.is_online",fn:function(e){return[e.item.is_online?a("div",[a("span",{staticClass:"font-weight-medium"},[a("v-chip",{attrs:{outlined:"",color:"green"}},[t._v("Online")])],1)]):a("div",[a("span",{staticClass:"font-weight-medium"},[a("v-chip",{attrs:{outlined:"",color:"yellow"}},[t._v("Offline")])],1)])]}},{key:"item.faliureRate",fn:function(e){var n=e.item;return[n.faliureRate<10?a("span",{staticClass:"light-green--text font-weight-bold"},[t._v(t._s(n.faliureRate))]):t._e(),t._v(" "),n.faliureRate>=10?a("span",{staticClass:"orange--text font-weight-bold"},[t._v(t._s(n.faliureRate))]):t._e()]}},{key:"item.actions",fn:function(e){var n=e.item;return[a("div",[t.appSlaveId===n.global_uuid&&t.appSlaveId?t._e():a("tooltip-icon-button",{attrs:{btnColor:"blue",buttonSize:"medium",btnIcon:"mdi-toggle-switch-off-outline",btnTooltip:"Switch to slave mode",onClick:function(){return t.switchToSlave(n)}}}),t._v(" "),t.appSlaveId===n.global_uuid&&t.appSlaveId?a("tooltip-icon-button",{attrs:{btnColor:"orange",buttonSize:"medium",btnIcon:"mdi-toggle-switch-outline",btnTooltip:"Revert to master mode",onClick:function(){return t.removeAppSlaveId()}}}):t._e(),t._v(" "),a("tooltip-icon-button",{attrs:{btnColor:"red",btnIcon:"mdi-delete",btnTooltip:"Remove as slave",onClick:function(){return t.removeSlaves(n)},loading:n.isDeleting}})],1)]}}]),model:{value:t.selectedItems,callback:function(e){t.selectedItems=e},expression:"selectedItems"}})],1)}),[],!1,null,null,null).exports,x={name:"discover-devices",components:{GridToolbar:d.a,MasterStarIndicator:m.a,GridItemsCounter:b},props:["items","createSlaves","isFetching"],data:function(){return{search:"",dialog:!1,isFetchingDevices:!1,selectedItems:[],headers:[{text:"S/N",align:"center",sortable:!0,value:"sn"},{text:"Client Name",align:"start",sortable:!0,value:"client_name"},{text:"Device Name",align:"center",value:"device_name",sortable:!0},{text:"Site Name",align:"center",value:"site_name",sortable:!0},{text:"Latitude",align:"center",value:"site_lat",sortable:!0},{text:"Longitude",align:"center",value:"site_lon",sortable:!0},{text:"Site Address",align:"center",value:"site_address",sortable:!0},{text:"Last Non Failure Ping Count",align:"center",value:"count",sortable:!0},{text:"Actions",align:"center",value:"isAddToSlaveVisible",sortable:!0}],tableProps:i()({},p.d)}},computed:{dataItems:function(){return this.items.map((function(t,e){return i()({},t,{sn:e+1,client_name:t.is_master?"   "+t.client_name:t.client_name})}))},tableHeight:function(){return this.items&&this.items.length>20?"75vh":void 0}}},y=Object(_.a)(x,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("grid-toolbar",{attrs:{toolbarTitle:"Discover Devices"},scopedSlots:t._u([{key:"gridCounter",fn:function(){return[a("grid-items-counter",{attrs:{num:t.selectedItems.length}})]},proxy:!0},{key:"search",fn:function(){return[a("v-text-field",{staticClass:"pl-10",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]},proxy:!0},{key:"customAction",fn:function(){return[a("v-btn",{staticClass:"white--text",attrs:{disabled:0==t.selectedItems.length,"x-small":"",color:"green"},on:{click:function(){return t.createSlaves(t.selectedItems)}}},[t._v("\n        Add as slave\n        "),a("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[t._v(" mdi-plus ")])],1)]},proxy:!0}])}),t._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{"item-key":"global_uuid","show-select":"",loading:t.isFetching,search:t.search,"fixed-header":"",height:t.tableHeight,headers:t.headers,items:t.dataItems,"sort-by":"calories","footer-props":t.tableProps.FOOTER_PROPS,itemsPerPage:t.tableProps.ITEMS_PER_PAGE},scopedSlots:t._u([{key:"item.client_name",fn:function(e){var n=e.item;return[a("span",[a("master-star-indicator",{attrs:{"is-master":n.is_master}}),t._v(" "),a("span",[t._v(t._s(n.client_name))])],1)]}},{key:"item.isAddToSlaveVisible",fn:function(e){var n=e.item;return[n.isAddToSlaveVisible?a("v-btn",{attrs:{color:"green",loading:n.isUpdating},on:{click:function(){return t.createSlaves(n)}}},[t._v("\n        Add as slave\n      ")]):a("div",[t._v("No actions available")])]}}]),model:{value:t.selectedItems,callback:function(e){t.selectedItems=e},expression:"selectedItems"}})],1)}),[],!1,null,null,null).exports,I=a("0iKi"),D=a("HeMS"),k={name:"master-slave-page",components:{PageTitle:v.a,DiscoverDevices:y,SlaveDevices:S},watch:{"$route.query.tab":function(t){this.tab=this.tabs.indexOf(t)},tab:function(t,e){var a=this.$route.query.tab;if(a!==this.tabs[t]){var n=this.tabs[t];this.$router.push({path:"master-slaves",query:{tab:n}})}}},data:function(){return{tab:0,appSlaveId:null,tabs:["discover-devices","slave-devices"],slaveDevices:[],devicesMap:{},slaveDevicesMap:{},discoveredDevices:[],isFetchingSlaveDevices:!1,isFetchingDevices:!1,timeout:null}},mounted:function(){var t=this.$route.query.tab;this.tab=this.tabs.indexOf(t),this.getAppSlaveId()},created:function(){this.syncDevices(),this.getAppSlaveId()},destroyed:function(){clearTimeout(this.timeout)},methods:{formatAddress:function(t){var e="";return t.site_address&&(e+=t.site_address),t.site_city&&(e+=", "+t.site_city),t.site_country&&(e+=", "+t.site_country),e},syncDevices:function(){var t=this;return u()(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isFetchingSlaveDevices=!0,t.isFetchingDevices=!0,e.next=4,t.fetchSlaveDevices();case 4:return e.next=6,t.fetchDevices();case 6:t.getAppSlaveId();case 7:case"end":return e.stop()}}),e,t)})))()},fetchSlaveDevices:function(){var t=this;return I.e().then((function(e){t.slaveDevicesMap=e,t.slaveDevices=s()(e).map((function(a){return i()({},t.slaveDevicesMap[a],{isDeleting:!1,site_address:t.formatAddress(e[a])})}))})).catch((function(t){})).finally((function(){t.isFetchingSlaveDevices=!1}))},fetchDevices:function(){var t=this;return I.d().then((function(e){t.devicesMap=e,t.discoveredDevices=s()(t.devicesMap).map((function(e){return i()({},t.devicesMap[e],{isUpdating:!1,isAddToSlaveVisible:!t.slaveDevicesMap[e],site_address:t.formatAddress(t.devicesMap[e])})}))})).catch((function(e){t.$toasted.show("Error fetching remote devices",{type:"error"})})).finally((function(){t.isFetchingDevices=!1}))},createSlaves:function(t){var e=this;t.isUpdating=!0;return(Array.isArray(t)&&t.length>0?I.a:I.c)(t).then((function(){e.$toasted.show("Successfully updated the device status."),e.syncDevices()})).catch((function(){e.$toasted.show("Error occured while updating the device status",{type:"error"})})).finally((function(){t.isUpdating=!1}))},removeSlaves:function(t){var e=this;t.isDeleting=!0;return(Array.isArray(t)&&t.length>0?I.b:I.f)(t).then((function(){e.$toasted.show("Successfully remove the device as slave."),e.syncDevices()})).catch((function(){e.$toasted.show("Error occured while updating the device status",{type:"error"})})).finally((function(){t.isDeleting=!1}))},switchToSlave:function(t){var e=this;this.$store.commit("changeSwitchedSlaveState",!1),this.timeout=setTimeout((function(){D.f(t.global_uuid,t),e.$store.commit("changeSwitchedSlaveState",!0),e.appSlaveId=t.global_uuid,e.$store.commit("changeAppRerenderCount")}),100)},getAppSlaveId:function(){this.appSlaveId=D.c()},removeAppSlaveId:function(){this.appSlaveId=null,this.$store.commit("changeSwitchedSlaveState",!1),D.e(),this.$store.commit("changeAppRerenderCount")}}},w=Object(_.a)(k,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-title",{attrs:{title:"Master Slave Mapping"}}),t._v(" "),a("v-tabs",{attrs:{dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab",{key:0},[t._v("Discover Devices ")]),t._v(" "),a("v-tab",{key:1},[t._v("Slave Devices ")])],1),t._v(" "),a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab-item",{key:0},[a("discover-devices",{attrs:{items:t.discoveredDevices,"create-slaves":t.createSlaves,"is-fetching":t.isFetchingDevices}})],1),t._v(" "),a("v-tab-item",{key:1},[a("slave-devices",{attrs:{items:t.slaveDevices,removeSlaves:t.removeSlaves,"is-fetching":t.isFetchingSlaveDevices,"switch-to-slave":t.switchToSlave,"app-slave-id":t.appSlaveId,"remove-app-slave-id":t.removeAppSlaveId}})],1)],1)],1)}),[],!1,null,null,null);e.default=w.exports},Q12t:function(t,e,a){"use strict";var n=a("/9Wh"),i=a.n(n),r=a("+n12"),s={name:"export-data",props:["data","fileName","formatDataService"],methods:{clickDownload:function(t,e){var a=t;switch("function"==typeof this.formatDataService&&(a=this.formatDataService(t)),e){case"csv":return Object(r.e)(this.fileName,a);case"excel":return Object(r.g)(this.fileName,a);case"json":return Object(r.h)(this.fileName,i()(a))}}}},o=a("psIG"),l=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"white--text mr-2",attrs:{"x-small":"",color:"#009688",dark:""}},"v-btn",i,!1),n),[a("span",[t._v("Download")]),t._v(" "),a("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[t._v("mdi-download")])],1)]}}])},[t._v(" "),a("v-list",[a("v-list-item",{on:{click:function(e){return t.clickDownload(t.data,"json")}}},[t._v("\n        JSON\n      ")]),t._v(" "),a("v-list-item",{on:{click:function(e){return t.clickDownload(t.data,"excel")}}},[t._v("\n        Excel\n      ")]),t._v(" "),a("v-list-item",{on:{click:function(e){return t.clickDownload(t.data,"csv")}}},[t._v("\n        CSV\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.a=l.exports},Ui9F:function(t,e,a){"use strict";var n={name:"tooltip-icon-button",props:["btnIcon","btnTooltip","onClick","btnColor","buttonSize","disabled"]},i=a("psIG"),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return["medium"==t.buttonSize?a("v-btn",t._g(t._b({staticClass:"white--text",attrs:{disabled:t.disabled,icon:"",medium:"",color:t.btnColor},on:{click:t.onClick}},"v-btn",i,!1),n),[a("v-icon",{attrs:{medium:"",dark:""}},[t._v(" "+t._s(t.btnIcon)+" ")])],1):a("v-btn",t._g(t._b({staticClass:"white--text",attrs:{disabled:t.disabled,icon:"",small:"",color:t.btnColor},on:{click:t.onClick}},"v-btn",i,!1),n),[a("v-icon",{attrs:{small:"",dark:""}},[t._v(" "+t._s(t.btnIcon)+" ")])],1)]}}])},[t._v(" "),a("span",[t._v(t._s(t.btnTooltip))])])}),[],!1,null,null,null);e.a=r.exports},asQ9:function(t,e,a){"use strict";var n={name:"master-star-indicator",props:["isMaster"]},i=a("psIG"),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[t.isMaster?a("v-icon",t._g(t._b({staticClass:"mt-n1",attrs:{medium:"",color:"yellow"}},"v-icon",i,!1),n),[t._v("mdi-star")]):t._e()]}}])},[t._v(" "),a("span",[t._v("Master device")])])}),[],!1,null,null,null);e.a=r.exports}}]);
//# sourceMappingURL=11.48e926a064c30f8427b4.js.map