(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+SqX":function(e,t,n){"use strict";var i={name:"page-title",props:["title"]},a=n("psIG"),s=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"text-h5 text-left py-3"},[n("span",[e._v(e._s(e.title))]),e._t("titleActions"),e._v(" "),e._t("spinner")],2)}),[],!1,null,null,null);t.a=s.exports},0:function(e,t){},"0iKi":function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"b",(function(){return v}));var i=n("OBCi"),a=n.n(i),s=n("uzYq"),r="/slave-devices",l=function(e){var t={global_uuid:e.global_uuid};return s.a.post(r,t)},o=function(e){return a.a.all(e.map((function(e){return l(e)})))},c=function(){return s.a.get(r)},u=function(){return s.a.get(r+"/discover")},d=function(e){var t=e.global_uuid;return s.a.delete(r+"/"+t)},v=function(e){return a.a.all(e.map((function(e){return d(e)})))}},1:function(e,t){},2:function(e,t){},"2kAK":function(e,t,n){"use strict";var i=n("Ui9F"),a=n("Kz1y"),s=n.n(a),r=n("juCZ"),l=n("BHGY"),o=n("ypiT"),c={name:"headerSelectorDialog",props:["tableName","fieldKeys","closeDialog","gridConfigChange"],components:{Draggable:n.n(o).a},data:function(){return{fields:[],isFormFieldCreated:!1,valid:!1,availableFields:[],selectedFields:[]}},mounted:function(){this.fetchHeadersConfig()},methods:{fetchHeadersConfig:function(){var e=this;return l.a(this.tableName).then((function(t){return e.mapsHeadersToFormFields(t),t}))},mapsHeadersToFormFields:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e&&e.hasOwnProperty("headers")&&e.headers&&e.headers.length>0&&e.headers.reduce((function(e,t){return e[t.name]=t,e}),{})||{};this.fields=(this.fieldKeys||[]).map((function(e){return{name:e,isEnabled:t&&t[e]&&t[e].isEnabled||!1,displayName:t&&t[e]&&t[e].displayName||r.b(e),isEditMode:!1}})),this.availableFields=this.fields.filter((function(e){return!e.isEnabled})),this.selectedFields=this.fields.filter((function(e){return e.isEnabled})),this.isFormFieldCreated=!0},onItemDeselect:function(e){this.selectedFields=this.selectedFields.filter((function(t){return t.name!=e.name})),this.availableFields=this.availableFields.concat(e)},onItemSelect:function(e){this.selectedFields=this.selectedFields.concat(e),this.availableFields=this.availableFields.filter((function(t){return t.name!=e.name}))},toggleEditMode:function(e,t){e&&(e.isEditMode=t)},saveConfig:function(){var e=this;this.selectedFields=this.selectedFields.map((function(e){return s()({},e,{isEnabled:!0})})),l.b(this.tableName,this.selectedFields).then((function(){e.$toasted.show("Grid configuration saved"),e.gridConfigChange(),e.fetchHeadersConfig(),e.closeDialog()})).catch((function(t){e.$toasted.show("Grid configuration could not be saved",{type:"error"})}))}}},u=n("psIG"),d=Object(u.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{dense:""}},[n("v-card-title",[e._v("Header Selector")]),e._v(" "),n("v-card-text",{attrs:{dense:""}},[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"6"}},[n("v-card",{staticClass:"full-height",attrs:{dense:"",outlined:""}},[n("v-card-text",{staticClass:"full-height"},[n("v-list",{staticClass:"full-height",attrs:{dense:"",subheader:"","two-line":""}},[n("v-subheader",[e._v(" Available columns ")]),e._v(" "),n("draggable",{staticStyle:{"min-height":"10px",height:"100%"},attrs:{options:{group:"name"}},model:{value:e.availableFields,callback:function(t){e.availableFields=t},expression:"availableFields"}},[e._l(e.availableFields,(function(t,i){return[n("v-list-item",{key:t.name,staticClass:"text-left header-selector-list-item",attrs:{dense:"",selectable:""},on:{dblclick:function(){return e.onItemSelect(t)}}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(i+1+". "+t.displayName)}}),e._v(" "),n("v-list-item-subtitle",{domProps:{textContent:e._s(t.name)}})],1)],1)]}))],2)],1)],1)],1)],1),e._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-card",{staticClass:"full-height",attrs:{dense:"",outlined:""}},[n("v-card-text",{staticClass:"full-height"},[n("v-list",{staticClass:"full-height",attrs:{dense:"","two-line":"",subheader:""}},[n("v-subheader",[e._v(" Selected columns ")]),e._v(" "),n("draggable",{staticStyle:{"min-height":"10px",height:"100%"},attrs:{options:{group:"name"}},model:{value:e.selectedFields,callback:function(t){e.selectedFields=t},expression:"selectedFields"}},[e._l(e.selectedFields,(function(t,i){return[t.isEditMode?e._e():n("v-list-item",{key:t.name,staticClass:"text-left header-selector-list-item",attrs:{dense:"",selectable:""}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(i+1+". "+t.displayName)}}),e._v(" "),n("v-list-item-subtitle",{domProps:{textContent:e._s(t.name)}})],1),e._v(" "),n("v-list-item-action",[n("span",[n("v-btn",{attrs:{icon:"","x-small":"",color:"green"},on:{click:function(){return e.toggleEditMode(t,!0)}}},[n("v-icon",[e._v("mdi-pencil")])],1),e._v(" "),n("v-btn",{attrs:{icon:"","x-small":"",color:"red"},on:{click:function(n){return e.onItemDeselect(t)}}},[n("v-icon",[e._v("mdi-close")])],1)],1)])],1),e._v(" "),t.isEditMode?n("v-list-item",{key:t.name,staticClass:"text-left header-selector-list-item",attrs:{dense:""}},[n("div",{staticClass:"text-right pb-2 pt-2"},[n("v-text-field",{attrs:{dense:"",label:"Display Name","single-line":""},model:{value:t.displayName,callback:function(n){e.$set(t,"displayName",n)},expression:"item.displayName"}}),e._v(" "),n("v-btn",{attrs:{icon:"",small:"",color:"green"},on:{click:function(){return e.toggleEditMode(t,!1)}}},[n("v-icon",[e._v("mdi-check")])],1)],1)]):e._e()]}))],2)],1)],1)],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"darken-1",text:""},on:{click:e.closeDialog}},[e._v(" Cancel ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.saveConfig}},[e._v("Save Config")])],1)],1)}),[],!1,null,null,null).exports,v={components:{TooltipIconButton:i.a,HeaderSelectorDialog:d},props:["fieldKeys","tableName","gridConfigChange"],data:function(){return{isOpen:!1}},methods:{closeDialog:function(){this.isOpen=!1},openDialog:function(){this.isOpen=!0}}},m=Object(u.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("tooltip-icon-button",{attrs:{buttonSize:"medium",btnIcon:"mdi-table-column",btnTooltip:"Configure table columns",onClick:function(){return e.openDialog()}}}),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[e.isOpen?n("header-selector-dialog",{attrs:{"grid-config-change":e.gridConfigChange,closeDialog:e.closeDialog,"field-keys":e.fieldKeys,tableName:e.tableName}}):e._e()],1)],1)}),[],!1,null,null,null);t.a=m.exports},"3saC":function(e,t,n){"use strict";var i={props:["on-copy"],methods:{copyToClipboard:function(e){var t=this;this.$copyText(e,this.$refs.copyClipboard).then((function(){t.$toasted.show("Copied to clipboard!",{type:"success"})}),(function(){t.$toasted.show("Cannot copy to clipboard.",{type:"error"})}))}}},a=n("psIG"),s=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{ref:"copyClipboard"},[n("v-btn",{staticClass:"mr-1 btn-height-22 white--text",attrs:{"x-small":"",color:"exportColor"},on:{click:function(){return e.onCopy(e.copyToClipboard)}}},[e._v("\n    Export"),n("v-icon",{attrs:{"x-small":"",right:""}},[e._v("mdi-export")])],1)],1)}),[],!1,null,null,null);t.a=s.exports},"7Ipj":function(e,t,n){"use strict";var i=n("Q12t"),a=n("3saC"),s=n("Isj4"),r={name:"import-dialog",props:["receiveDataRows"],data:function(){return{file:null,dialogImportExcel:!1,dialogImportJSON:!1,dataImport:""}},methods:{importFile:function(){var e=new FileReader;e.readAsBinaryString(this.file),e.onload=this.handleFileLoad},handleFileLoad:function(e){var t=e.target.result,n=s.read(t,{type:"binary"}),i=Array.isArray(n.SheetNames)&&n.SheetNames.length>0&&n.SheetNames[0];if(!i)return this.$toasted.show("Invalid Excel File. Please reupload.",{type:"error"});var a=s.utils.sheet_to_row_object_array(n.Sheets[i]);this.receiveDataRows(a),this.dialogImportExcel=!1},closeDialog:function(){this.dialogImportJSON=!1},importJson:function(){try{var e=JSON.parse(this.dataImport);this.receiveDataRows(e),this.dialogImportJSON=!1}catch(e){return this.$toasted.show("Invalid JSON",{type:"error"})}}}},l=n("psIG"),o=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mr-2 btn-height-22 white--text",attrs:{"x-small":"",color:"primary"}},"v-btn",a,!1),i),[e._v("Import"),n("v-icon",{attrs:{"x-small":"",right:""}},[e._v("mdi-import")])],1)]}}])},[e._v(" "),n("v-list",[n("v-list-item",{on:{click:function(t){e.dialogImportJSON=!0,e.dataImport=""}}},[n("v-list-item-title",[e._v("JSON")])],1),e._v(" "),n("v-list-item",{on:{click:function(t){e.dialogImportExcel=!0,e.file=null}}},[n("v-list-item-title",[e._v("Excel")])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{width:"500px"},model:{value:e.dialogImportExcel,callback:function(t){e.dialogImportExcel=t},expression:"dialogImportExcel"}},[n("v-card",[n("v-card-title",[e._v("Choose excel file")]),e._v(" "),n("v-card-text",[n("v-file-input",{attrs:{outlined:"",dense:"",label:"File input",accept:".xls,.xlsx"},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"darken-1",text:""},on:{click:function(t){e.dialogImportExcel=!1}}},[e._v("Close")]),e._v(" "),n("v-btn",{attrs:{color:"primary darken-1",text:"",disabled:!e.file},on:{click:e.importFile}},[e._v("Import")])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{width:"500px"},model:{value:e.dialogImportJSON,callback:function(t){e.dialogImportJSON=t},expression:"dialogImportJSON"}},[n("v-card",[n("v-card-title",[e._v("Import via JSON")]),e._v(" "),n("v-card-text",[n("v-textarea",{attrs:{outlined:"",name:"input-7-4",label:"import data"},model:{value:e.dataImport,callback:function(t){e.dataImport=t},expression:"dataImport"}})],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"darken-1",text:""},on:{click:e.closeDialog}},[e._v(" Cancel ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!e.dataImport},on:{click:e.importJson}},[e._v("Import")])],1)],1)],1)],1)}),[],!1,null,null,null).exports,c={name:"grid-toolbar",props:["toolbarTitle","onCopy","items","fileName","formatDataService","receiveDataRows","onDelete","isDeleteEnabled","onSearch","hideExportData"],components:{ExportData:i.a,CopyClipboard:a.a,ImportDialog:o}},u=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",{staticClass:"mr-6"},[e._v(e._s(e.toolbarTitle))]),e._v(" "),e._t("gridCounter"),e._v(" "),e.onCopy?n("copy-clipboard",{attrs:{"on-copy":e.onCopy}}):e._e(),e._v(" "),e.items&&e.items.length>0&&!e.hideExportData?n("export-data",{attrs:{data:e.items,"file-name":e.fileName,"format-data-service":e.formatDataService}}):e._e(),e._v(" "),e.receiveDataRows?n("import-dialog",{attrs:{receiveDataRows:e.receiveDataRows}}):e._e(),e._v(" "),e.onDelete?n("v-btn",{staticClass:"mr-2 btn-height-22 white--text",attrs:{"x-small":"",color:"error",disabled:!e.isDeleteEnabled},on:{click:e.onDelete}},[e._v("Delete"),n("v-icon",{attrs:{"x-small":"",right:""}},[e._v(" mdi-delete")])],1):e._e(),e._v(" "),e._t("customAction"),e._v(" "),e._t("search")],2)}),[],!1,null,null,null);t.a=u.exports},"97BG":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"n",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return v})),n.d(t,"g",(function(){return m})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return p})),n.d(t,"m",(function(){return h})),n.d(t,"h",(function(){return _})),n.d(t,"k",(function(){return b})),n.d(t,"f",(function(){return g})),n.d(t,"l",(function(){return y})),n.d(t,"a",(function(){return S})),n.d(t,"c",(function(){return I}));var i,a,s=n("Kz1y"),r=n.n(s),l=n("TcPG"),o=n.n(l),c="DISCOVER_SLAVE_GRID",u="SLAVE_APPS_GRID",d="RF_ALL_NETWORK_DEVICES_GRID",v="RF_ALL_NETWORK_DEVICES_POINTS_GRID",m="RF_FLOW_NETWORK",f="RF_FLOW_NETWORK_STREAMS",p="RF_PRODUCERS",h="RF_WRITER_CLONES",_="RF_FLOW_NETWORK_CLONES",b="RF_STREAM_CLONES",g="RF_CONSUMERS",y="RF_WRITER",S=(i={},o()(i,c,[{name:"device_name",isEnabled:!0},{name:"site_name",isEnabled:!0},{name:"site_lat",isEnabled:!0},{name:"site_lon",isEnabled:!0}]),o()(i,u,[{name:"client_name",isEnabled:!0},{displayName:"Status",name:"is_online"},{displayName:"Device Name",name:"device_name"},{displayName:"Site Name",name:"site_name"},{displayName:"Latitude",name:"site_lat"},{displayName:"Longitude",name:"site_lon"}]),o()(i,d,[{displayName:"Device Name",name:"name"},{displayName:"Network Name",name:"network_name"},{displayName:"Thing Class",name:"thing_class"},{displayName:"Enabled",name:"enable"}]),o()(i,v,[{displayName:"Device Name",name:"name"},{displayName:"Enabled",name:"enable"}]),o()(i,m,[{displayName:"Name",name:"name"}]),o()(i,f,[{displayName:"Name",name:"name"}]),o()(i,p,[{displayName:"Name",name:"name"}]),o()(i,h,[{displayName:"Thing class",name:"thing_class"},{displayName:"Thing type",name:"thing_type"}]),o()(i,_,[{displayName:"Name",name:"name"}]),o()(i,b,[{displayName:"Name",name:"name"}]),o()(i,g,[{displayName:"Name",name:"name"}]),o()(i,y,[{displayName:"Writer Thing Class",name:"writer_thing_class"},{displayName:"Thing Type",name:"writer_thing_type"}]),i),C={name:"gridItemActions",sortable:!1,always:!0,displayName:"Grid Actions"},x={name:"routeLinkName",sortable:!0,always:!0,displayName:"Name",appendFirst:!0},I=(a={},o()(a,c,[]),o()(a,m,[r()({},x),r()({},C)]),o()(a,f,[r()({},x),r()({},C)]),o()(a,p,[r()({},x)]),o()(a,_,[r()({},x)]),o()(a,b,[r()({},x)]),o()(a,g,[r()({},x)]),o()(a,u,[{name:"faliureRate",displayName:"Failure Rate (%)",isEnabled:!0}]),a)},BHGY:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r}));var i=n("uzYq"),a="/grid-table-headers";function s(e){return i.a.get(a+"/"+e)}function r(e,t){return i.a.put(a+"/"+e,t)}},HeMS:function(e,t,n){"use strict";n.d(t,"g",(function(){return m})),n.d(t,"f",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"e",(function(){return _})),n.d(t,"a",(function(){return g})),n.d(t,"d",(function(){return y}));var i=n("/9Wh"),a=n.n(i),s=n("snOE"),r=n.n(s),l=n("tZmG"),o=n.n(l),c=n("yEOx"),u=n.n(c),d=n("VleD"),v=n("M1ki"),m=function(e){var t=function(e,t){return o()(e).reduce((function(n,i){var a=o()(e[i]).reduce((function(n,a){return t[i]&&t[i].includes(a)&&n.push(e[i][a]),n}),[]);return n[i]=a,n}),{})}(e.releaseMap,function(e){return o()(e).reduce((function(t,n){return t[n]=(e[n]||[]).map((function(e){return e&&e.slaveId})).filter((function(e){return e})),t}),{})}(e.selectedItems));return o()(t).reduce((function(e,n){var i=t[n].map((function(e){return e&&e.length||1/0})),a=i.indexOf(Math.min.apply(Math,r()(i)));return e[n]=t[n][a]||[],e}),{})},f=function(e,t){d.d(v.a.SLAVE_ID,e),d.d(v.a.SLAVE_DEVICE_INFO,a()(t))},p=function(){return d.b(v.a.SLAVE_ID)},h=function(){var e=d.b(v.a.SLAVE_DEVICE_INFO);try{return JSON.parse(e)}catch(e){return null}},_=function(){d.c(v.a.SLAVE_ID),d.c(v.a.SLAVE_DEVICE_INFO)};function b(e){return e.reduce((function(e,t){var n=t.toLowerCase().split("v")[1].split(".").map((function(e){return isNaN(+e)&&e.indexOf("rc")?+e.split("-")[0]-.5/+e.split("-rc")[1]:+e})),i=n.reduce((function(e,t,i){var a;return e+=(a=n.length-i,Math.pow(10,a-1)*t)}),0);return e[i]=t,e}),{})}function g(e){var t=b(e);return t[Math.max.apply(Math,r()(o()(t)))]}function y(e,t){var n,i=u()(t),a=u()(e),s=(n=b(i),Math.max.apply(Math,r()(o()(n)))),l=b(a);return function(e){var t=b(e);return o()(t).sort((function(e,t){return t-e})).map((function(e){return t[e]}))}(o()(l).reduce((function(e,t){return+t>=s&&e.push(l[t]),e}),[]))}},OvPX:function(e,t,n){"use strict";n.r(t);var i,a=n("Kz1y"),s=n.n(a),r=n("tZmG"),l=n.n(r),o=n("06Hw"),c=n.n(o),u=n("YYXh"),d=n.n(u),v=n("+SqX"),m=n("TcPG"),f=n.n(m),p=n("7Ipj"),h=n("A5Vd"),_=n("asQ9"),b=n("Ui9F"),g=n("jVPF"),y=n("2kAK"),S=n("juCZ"),C=n("BHGY"),x=n("97BG"),I={name:"slave-devices",components:{GridToolbar:p.a,MasterStarIndicator:_.a,TooltipIconButton:b.a,GridItemsCounter:g.a,HeaderSelector:y.a},props:["items","removeSlaves","isFetching","switchToSlave","removeAppSlaveId","appSlaveId","itemKeys"],data:function(){return{search:"",fileName:"slave-devices",selectedItems:[],tableName:x.n,headers:[],tableProps:s()({},h.d),filters:{isOnline:!1}}},mounted:function(){this.fetchSetGridHeaders()},computed:(i={dataItems:function(){var e=this;return this.items.map((function(e,t){return s()({},e,{sn:t+1,faliureRate:(e.failure_count/e.total_count*100).toFixed(2),client_name:e.is_master?"   "+e.client_name:e.client_name})})).filter((function(t){return!(e.filters.isOnline&&!t.is_online||e.filters.isOffline&&t.is_online)}))},appliedFilterCount:function(){var e=this;return l()(this.filters).reduce((function(t,n){return e.filters[n]&&t++,t}),0)}},f()(i,"appliedFilterCount",(function(){var e=this;return l()(this.filters).reduce((function(t,n){return e.filters[n]&&t++,t}),0)})),f()(i,"totalCount",(function(){return this.items.length})),f()(i,"onlineCount",(function(){return this.items.reduce((function(e,t){return t.is_online&&(e+=1),e}),0)})),f()(i,"offlineCount",(function(){return this.items.reduce((function(e,t){return t.is_online||(e+=1),e}),0)})),f()(i,"tableHeight",(function(){return this.items&&this.items.length>20?"75vh":void 0})),i),methods:{gridConfigChange:function(){this.fetchSetGridHeaders()},fetchSetGridHeaders:function(){var e=this;C.a(x.n).then((function(t){var n=S.c(x.n,t);e.headers=S.a()(n)})).catch((function(t){e.headers=x.a[x.n]}))},formatDataService:function(e){return e}}},D=n("psIG"),N=Object(D.a)(I,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("grid-toolbar",{attrs:{toolbarTitle:"Slave Devices","file-name":e.fileName,items:e.dataItems,"format-data-service":e.formatDataService},scopedSlots:e._u([{key:"gridCounter",fn:function(){return[n("header-selector",{attrs:{"grid-config-change":e.gridConfigChange,fieldKeys:e.itemKeys,tableName:e.tableName}}),e._v(" "),n("grid-items-counter",{attrs:{num:e.selectedItems.length}})]},proxy:!0},{key:"search",fn:function(){return[n("v-menu",{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{dark:"",icon:""}},"v-btn",a,!1),i),[n("v-icon",{attrs:{color:e.appliedFilterCount>0?"blue":"white"}},[e._v("mdi-filter")])],1)]}}])},[e._v(" "),n("v-list",{attrs:{dense:""}},[n("v-subheader",[e._v("Filters")]),e._v(" "),n("v-list-item",[n("v-list-item-title",[n("v-checkbox",{staticClass:"mt-0",attrs:{"hide-details":"",label:"Online Devices"},model:{value:e.filters.isOnline,callback:function(t){e.$set(e.filters,"isOnline",t)},expression:"filters.isOnline"}})],1)],1),e._v(" "),n("v-list-item",[n("v-list-item-title",[n("v-checkbox",{staticClass:"mt-0",attrs:{"hide-details":"",label:"Offline Devices"},model:{value:e.filters.isOffline,callback:function(t){e.$set(e.filters,"isOffline",t)},expression:"filters.isOffline"}})],1)],1)],1)],1),e._v(" "),n("v-text-field",{staticClass:"pl-10",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),n("p",{staticClass:"count-wrapper"},[n("span",{staticClass:"count-container"},[n("span",{staticClass:"count-circle lightGrey"}),e._v(" "),n("span",{staticClass:"grey--text"},[e._v("Total")]),e._v(" "),n("span",{staticClass:"number"},[e._v(e._s(e.totalCount))])]),e._v(" "),n("span",{staticClass:"count-container"},[n("span",{staticClass:"count-circle nubeGreen"}),e._v(" "),n("span",{staticClass:"grey--text"},[e._v("Online")]),e._v(" "),n("span",{staticClass:"number"},[e._v(e._s(e.onlineCount))])]),e._v(" "),n("span",{staticClass:"count-container"},[n("span",{staticClass:"count-circle nubeYellow"}),e._v(" "),n("span",{staticClass:"grey--text"},[e._v("Offline")]),e._v(" "),n("span",{staticClass:"number"},[e._v(e._s(e.offlineCount))])])])]},proxy:!0},{key:"actions",fn:function(){return[n("v-btn",{staticClass:"btn-height-22 white--text",attrs:{"x-small":"",color:"pink",disabled:0==e.selectedItems.length},on:{click:function(){return e.removeSlaves(e.selectedItems)}}},[e._v("\n        Remove as slave\n        "),n("v-icon",{attrs:{"x-small":"",right:""}},[e._v(" mdi-delete ")])],1)]},proxy:!0}])}),e._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{"item-key":"global_uuid","show-select":"",height:e.tableHeight,loading:e.isFetching,search:e.search,"fixed-header":"",headers:e.headers,items:e.dataItems,"sort-by":"calories","footer-props":e.tableProps.FOOTER_PROPS,itemsPerPage:e.tableProps.ITEMS_PER_PAGE},scopedSlots:e._u([{key:"item.client_name",fn:function(t){var i=t.item;return[n("span",[n("master-star-indicator",{attrs:{"is-master":i.is_master}}),e._v(" "),n("span",[e._v(e._s(i.client_name))])],1)]}},{key:"item.is_online",fn:function(t){return[t.item.is_online?n("div",[n("span",{staticClass:"font-weight-medium"},[n("v-chip",{attrs:{outlined:"",color:"nubeGreen"}},[e._v("Online")])],1)]):n("div",[n("span",{staticClass:"font-weight-medium"},[n("v-chip",{attrs:{outlined:"",color:"nubeYellow"}},[e._v("Offline")])],1)])]}},{key:"item.faliureRate",fn:function(t){var i=t.item;return[i.faliureRate<10?n("span",{staticClass:"nubeGreen--text font-weight-bold"},[e._v(e._s(i.faliureRate))]):e._e(),e._v(" "),i.faliureRate>=10?n("span",{staticClass:"orange--text font-weight-bold"},[e._v(e._s(i.faliureRate))]):e._e()]}},{key:"item.actions",fn:function(t){var i=t.item;return[n("div",[e.appSlaveId===i.global_uuid&&e.appSlaveId?e._e():n("tooltip-icon-button",{attrs:{btnColor:"blue",buttonSize:"medium",btnIcon:"mdi-toggle-switch-off-outline",btnTooltip:"Switch to slave mode",onClick:function(){return e.switchToSlave(i)}}}),e._v(" "),e.appSlaveId===i.global_uuid&&e.appSlaveId?n("tooltip-icon-button",{attrs:{btnColor:"orange",buttonSize:"medium",btnIcon:"mdi-toggle-switch-outline",btnTooltip:"Revert to master mode",onClick:function(){return e.removeAppSlaveId()}}}):e._e(),e._v(" "),n("tooltip-icon-button",{attrs:{btnColor:"red",btnIcon:"mdi-delete",btnTooltip:"Remove as slave",onClick:function(){return e.removeSlaves(i)},loading:i.isDeleting}})],1)]}}],null,!0),model:{value:e.selectedItems,callback:function(t){e.selectedItems=t},expression:"selectedItems"}})],1)}),[],!1,null,"6d3e748d",null).exports,k={name:"discover-devices",components:{GridToolbar:p.a,MasterStarIndicator:_.a,GridItemsCounter:g.a,HeaderSelector:y.a},props:["items","createSlaves","isFetching","itemKeys"],data:function(){return{search:"",dialog:!1,tableName:x.b,isFetchingDevices:!1,selectedItems:[],headers:[],tableProps:s()({},h.d)}},mounted:function(){this.fetchSetGridHeaders()},computed:{dataItems:function(){return this.items.map((function(e,t){return s()({},e,{sn:t+1,client_name:e.is_master?"   "+e.client_name:e.client_name})}))},fieldKeys:function(){return this.itemKeys},tableHeight:function(){return this.items&&this.items.length>20?"75vh":void 0}},methods:{gridConfigChange:function(){this.fetchSetGridHeaders()},fetchSetGridHeaders:function(){var e=this;C.a(x.b).then((function(t){var n=S.c(x.b,t);e.headers=S.a()(n)})).catch((function(t){e.headers=x.a[x.b]}))}}},E=Object(D.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("grid-toolbar",{attrs:{toolbarTitle:"Discover Devices"},scopedSlots:e._u([{key:"gridCounter",fn:function(){return[n("header-selector",{attrs:{"grid-config-change":e.gridConfigChange,fieldKeys:e.fieldKeys,tableName:e.tableName}}),e._v(" "),n("grid-items-counter",{attrs:{num:e.selectedItems.length}})]},proxy:!0},{key:"search",fn:function(){return[n("v-text-field",{staticClass:"pl-10",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]},proxy:!0},{key:"customAction",fn:function(){return[n("v-btn",{staticClass:"mr-1 btn-height-22 white--text",attrs:{"x-small":"",color:"nubeGreen",disabled:0==e.selectedItems.length},on:{click:function(){return e.createSlaves(e.selectedItems)}}},[e._v("Add as slave"),n("v-icon",{attrs:{"x-small":"",right:""}},[e._v("mdi-plus")])],1)]},proxy:!0}])}),e._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{"item-key":"global_uuid","show-select":"",loading:e.isFetching,search:e.search,"fixed-header":"",height:e.tableHeight,headers:e.headers,items:e.dataItems,"sort-by":"calories","footer-props":e.tableProps.FOOTER_PROPS,itemsPerPage:e.tableProps.ITEMS_PER_PAGE},scopedSlots:e._u([{key:"item.client_name",fn:function(t){var i=t.item;return[n("span",[n("master-star-indicator",{attrs:{"is-master":i.is_master}}),e._v(" "),n("span",[e._v(e._s(i.client_name))])],1)]}},{key:"item.actions",fn:function(t){var i=t.item;return[i.isAddToSlaveVisible?n("v-btn",{staticClass:"btn-height-22 white--text",attrs:{"x-small":"",color:"nubeGreen",loading:i.isUpdating},on:{click:function(){return e.createSlaves(i)}}},[e._v("\n        Add as slave\n      ")]):n("div",[e._v("No actions available")])]}}],null,!0),model:{value:e.selectedItems,callback:function(t){e.selectedItems=t},expression:"selectedItems"}})],1)}),[],!1,null,null,null).exports,w=n("0iKi"),F=n("HeMS"),O={name:"master-slave-page",components:{PageTitle:v.a,DiscoverDevices:E,SlaveDevices:N},watch:{"$route.query.tab":function(e){this.tab=this.tabs.indexOf(e)},tab:function(e,t){var n=this.$route.query.tab;if(n!==this.tabs[e]){var i=this.tabs[e];this.$router.push({path:"master-slaves",query:{tab:i}})}}},computed:{isItemKeysSet:function(){return this.slaveDevicesItemKeys.length>0&&this.slaveDevicesItemKeys.length>0}},data:function(){return{tab:0,appSlaveId:null,tabs:["discover-devices","slave-devices"],slaveDevices:[],discoveredDevicesItemKeys:[],slaveDevicesItemKeys:[],devicesMap:{},slaveDevicesMap:{},discoveredDevices:[],isFetchingSlaveDevices:!1,isFetchingDevices:!1,timeout:null}},mounted:function(){var e=this.$route.query.tab;this.tab=this.tabs.indexOf(e),this.getAppSlaveId()},created:function(){this.syncDevices(),this.getAppSlaveId()},destroyed:function(){clearTimeout(this.timeout)},methods:{formatAddress:function(e){var t="";return e.site_address&&(t+=e.site_address),e.site_city&&(t+=", "+e.site_city),e.site_country&&(t+=", "+e.site_country),t},syncDevices:function(){var e=this;return d()(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isFetchingSlaveDevices=!0,e.isFetchingDevices=!0,t.next=4,e.fetchSlaveDevices();case 4:return t.next=6,e.fetchDevices();case 6:e.getAppSlaveId();case 7:case"end":return t.stop()}}),t,e)})))()},fetchSlaveDevices:function(){var e=this;return w.e().then((function(t){e.slaveDevicesMap=t;var n=l()(t);e.setSlaveItemKeys(t,n),e.slaveDevices=n.map((function(n){return s()({},e.slaveDevicesMap[n],{isDeleting:!1,site_address:e.formatAddress(t[n])})}))})).catch((function(e){})).finally((function(){e.isFetchingSlaveDevices=!1}))},setDiscoveredItemKeys:function(e,t){this.discoveredDevicesItemKeys=l()(Array.isArray(t)&&t.length>0&&e[t[0]]||{}),this.discoveredDevicesItemKeys.unshift("sn")},setSlaveItemKeys:function(e,t){this.slaveDevicesItemKeys=l()(Array.isArray(t)&&t.length>0&&e[t[0]]||{}),this.slaveDevicesItemKeys.unshift("sn")},fetchDevices:function(){var e=this;return w.d().then((function(t){e.devicesMap=t;var n=l()(e.devicesMap);e.setDiscoveredItemKeys(t,n),e.discoveredDevices=n.map((function(t){return s()({},e.devicesMap[t],{isUpdating:!1,isAddToSlaveVisible:!e.slaveDevicesMap[t],site_address:e.formatAddress(e.devicesMap[t])})}))})).catch((function(t){e.$toasted.show("Error fetching remote devices",{type:"error"})})).finally((function(){e.isFetchingDevices=!1}))},createSlaves:function(e){var t=this;e.isUpdating=!0;return(Array.isArray(e)&&e.length>0?w.a:w.c)(e).then((function(){t.$toasted.show("Successfully updated the device status."),t.syncDevices()})).catch((function(){t.$toasted.show("Error occured while updating the device status",{type:"error"})})).finally((function(){e.isUpdating=!1}))},removeSlaves:function(e){var t=this;e.isDeleting=!0;return(Array.isArray(e)&&e.length>0?w.b:w.f)(e).then((function(){t.$toasted.show("Successfully remove the device as slave."),t.syncDevices()})).catch((function(){t.$toasted.show("Error occured while updating the device status",{type:"error"})})).finally((function(){e.isDeleting=!1}))},switchToSlave:function(e){var t=this;this.$store.commit("changeSwitchedSlaveState",!1),this.timeout=setTimeout((function(){F.f(e.global_uuid,e),t.$store.commit("changeSwitchedSlaveState",!0),t.appSlaveId=e.global_uuid,t.$store.commit("changeAppRerenderCount")}),100)},getAppSlaveId:function(){this.appSlaveId=F.c()},removeAppSlaveId:function(){this.appSlaveId=null,this.$store.commit("changeSwitchedSlaveState",!1),F.e(),this.$store.commit("changeAppRerenderCount")}}},A=Object(D.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("page-title",{attrs:{title:"Master Slave Mapping"},scopedSlots:e._u([{key:"spinner",fn:function(){return[e.isFetchingDevices||e.isFetchingSlaveDevices?n("v-progress-circular",{attrs:{indeterminate:"",size:"20"}}):e._e()]},proxy:!0}])}),e._v(" "),n("v-tabs",{attrs:{right:"",color:e.$vuetify.theme.dark?"":"nubeGreen"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab",{key:0},[e._v("Discover Devices ")]),e._v(" "),n("v-tab",{key:1},[e._v("Slave Devices ")])],1),e._v(" "),n("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab-item",{key:0},[n("discover-devices",{attrs:{items:e.discoveredDevices,"item-keys":e.discoveredDevicesItemKeys,"create-slaves":e.createSlaves,"is-fetching":e.isFetchingDevices}})],1),e._v(" "),n("v-tab-item",{key:1},[n("slave-devices",{attrs:{items:e.slaveDevices,"item-keys":e.slaveDevicesItemKeys,removeSlaves:e.removeSlaves,"is-fetching":e.isFetchingSlaveDevices,"switch-to-slave":e.switchToSlave,"app-slave-id":e.appSlaveId,"remove-app-slave-id":e.removeAppSlaveId}})],1)],1)],1)}),[],!1,null,null,null);t.default=A.exports},Q12t:function(e,t,n){"use strict";var i=n("/9Wh"),a=n.n(i),s=n("+n12"),r={name:"export-data",props:["data","fileName","formatDataService"],methods:{clickDownload:function(e,t){var n=e;switch("function"==typeof this.formatDataService&&(n=this.formatDataService(e)),t){case"csv":return Object(s.e)(this.fileName,n);case"excel":return Object(s.g)(this.fileName,n);case"json":return Object(s.h)(this.fileName,a()(n))}}}},l=n("psIG"),o=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mr-2 btn-height-22 white--text",attrs:{"x-small":"",color:"downloadColor"}},"v-btn",a,!1),i),[e._v("\n      Download"),n("v-icon",{attrs:{"x-small":"",right:""}},[e._v("mdi-download")])],1)]}}])},[e._v(" "),n("v-list",[n("v-list-item",{on:{click:function(t){return e.clickDownload(e.data,"json")}}},[e._v(" JSON ")]),e._v(" "),n("v-list-item",{on:{click:function(t){return e.clickDownload(e.data,"excel")}}},[e._v(" Excel ")]),e._v(" "),n("v-list-item",{on:{click:function(t){return e.clickDownload(e.data,"csv")}}},[e._v(" CSV ")])],1)],1)}),[],!1,null,null,null);t.a=o.exports},Ui9F:function(e,t,n){"use strict";var i={name:"tooltip-icon-button",props:["btnIcon","btnTooltip","onClick","btnColor","buttonSize","disabled"]},a=n("psIG"),s=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return["medium"==e.buttonSize?n("v-btn",e._g(e._b({attrs:{disabled:e.disabled,icon:"",medium:"",color:e.btnColor},on:{click:e.onClick}},"v-btn",a,!1),i),[n("v-icon",{attrs:{medium:"",dark:""}},[e._v(" "+e._s(e.btnIcon)+" ")])],1):n("v-btn",e._g(e._b({attrs:{disabled:e.disabled,icon:"",small:"",color:e.btnColor},on:{click:e.onClick}},"v-btn",a,!1),i),[n("v-icon",{attrs:{small:"",dark:""}},[e._v(" "+e._s(e.btnIcon)+" ")])],1)]}}])},[e._v(" "),n("span",[e._v(e._s(e.btnTooltip))])])}),[],!1,null,null,null);t.a=s.exports},asQ9:function(e,t,n){"use strict";var i={name:"master-star-indicator",props:["isMaster"]},a=n("psIG"),s=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return[e.isMaster?n("v-icon",e._g(e._b({staticClass:"mt-n1",attrs:{medium:"",color:"nubeYellow"}},"v-icon",a,!1),i),[e._v("mdi-star")]):e._e()]}}])},[e._v(" "),n("span",[e._v("Master device")])])}),[],!1,null,null,null);t.a=s.exports},jVPF:function(e,t,n){"use strict";var i={name:"grid-items-counter",props:["num"]},a=n("psIG"),s=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"text-left mr-5 grid-item-counter"},[n("span",{staticClass:"grey--text caption"},[e._v("Selected Apps: ")]),e._v(" "),n("span",[e._v(e._s(e.num))])])}),[],!1,null,"39bb1989",null);t.a=s.exports},juCZ:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return o}));var i=n("97BG"),a={hasActions:!0,hasSerialNumber:!0,actionValue:"actions",snValue:"sn"},s=function(e){var t=e.text,n=void 0===t?"":t,i=e.align,a=void 0===i?"center":i,s=e.sortable,r=void 0===s||s,l=e.value,o=void 0===l?null:l;return{text:n,align:a,sortable:r,name:o,value:o}},r=function(e){return e.split("_").map((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.toLowerCase();return e.charAt(0).toUpperCase()+t.slice(1)}(e)})).join(" ")},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=[];return t.forEach((function(e){e.displayName?n.push(s({text:r(e.displayName),value:e.name})):e.always&&n.push({text:e.displayName,value:e.name})})),e.hasActions&&n.push(s({text:"Actions",value:e.actionValue})),n}},o=function(e,t){var n=i.a[e],a=n;t&&0==(a=t.headers.filter((function(e){return e.isEnabled}))).length&&(a=n);var s=a.map((function(e){return{name:e.name,displayName:e.displayName||e.name}}));return(i.c[e]||[]).forEach((function(e){e.appendFirst?s.unshift(e):s.push(e)})),s}}}]);
//# sourceMappingURL=8.4b66794159aa8f9ba80a.js.map