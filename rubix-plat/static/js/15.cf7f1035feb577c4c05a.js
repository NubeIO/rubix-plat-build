(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2kAK":function(e,t,n){"use strict";var i=n("Ui9F"),a=n("Kz1y"),s=n.n(a),r=n("juCZ"),o=n("BHGY"),l=n("ypiT"),c={name:"headerSelectorDialog",props:["tableName","fieldKeys","closeDialog","gridConfigChange"],components:{Draggable:n.n(l).a},data:function(){return{fields:[],isFormFieldCreated:!1,valid:!1,availableFields:[],selectedFields:[]}},mounted:function(){this.fetchHeadersConfig()},methods:{fetchHeadersConfig:function(){var e=this;return o.a(this.tableName).then((function(t){return e.mapsHeadersToFormFields(t),t}))},mapsHeadersToFormFields:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e&&e.hasOwnProperty("headers")&&e.headers&&e.headers.length>0&&e.headers.reduce((function(e,t){return e[t.name]=t,e}),{})||{};this.fields=(this.fieldKeys||[]).map((function(e){return{name:e,isEnabled:t&&t[e]&&t[e].isEnabled||!1,displayName:t&&t[e]&&t[e].displayName||r.b(e),isEditMode:!1}})),this.availableFields=this.fields.filter((function(e){return!e.isEnabled})),this.selectedFields=this.fields.filter((function(e){return e.isEnabled})),this.isFormFieldCreated=!0},onItemDeselect:function(e){this.selectedFields=this.selectedFields.filter((function(t){return t.name!=e.name})),this.availableFields=this.availableFields.concat(e)},onItemSelect:function(e){this.selectedFields=this.selectedFields.concat(e),this.availableFields=this.availableFields.filter((function(t){return t.name!=e.name}))},toggleEditMode:function(e,t){e&&(e.isEditMode=t)},saveConfig:function(){var e=this;this.selectedFields=this.selectedFields.map((function(e){return s()({},e,{isEnabled:!0})})),o.b(this.tableName,this.selectedFields).then((function(){e.$toasted.show("Grid configuration saved"),e.gridConfigChange(),e.fetchHeadersConfig(),e.closeDialog()})).catch((function(t){e.$toasted.show("Grid configuration could not be saved",{type:"error"})}))}}},u=n("psIG"),d=Object(u.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{dense:""}},[n("v-card-title",[e._v("Header Selector")]),e._v(" "),n("v-card-text",{attrs:{dense:""}},[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"6"}},[n("v-card",{staticClass:"full-height",attrs:{dense:"",outlined:""}},[n("v-card-text",{staticClass:"full-height"},[n("v-list",{staticClass:"full-height",attrs:{dense:"",subheader:"","two-line":""}},[n("v-subheader",[e._v(" Available columns ")]),e._v(" "),n("draggable",{staticStyle:{"min-height":"10px",height:"100%"},attrs:{options:{group:"name"}},model:{value:e.availableFields,callback:function(t){e.availableFields=t},expression:"availableFields"}},[e._l(e.availableFields,(function(t,i){return[n("v-list-item",{key:t.name,staticClass:"text-left header-selector-list-item",attrs:{dense:"",selectable:""},on:{dblclick:function(){return e.onItemSelect(t)}}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(i+1+". "+t.displayName)}}),e._v(" "),n("v-list-item-subtitle",{domProps:{textContent:e._s(t.name)}})],1)],1)]}))],2)],1)],1)],1)],1),e._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-card",{staticClass:"full-height",attrs:{dense:"",outlined:""}},[n("v-card-text",{staticClass:"full-height"},[n("v-list",{staticClass:"full-height",attrs:{dense:"","two-line":"",subheader:""}},[n("v-subheader",[e._v(" Selected columns ")]),e._v(" "),n("draggable",{staticStyle:{"min-height":"10px",height:"100%"},attrs:{options:{group:"name"}},model:{value:e.selectedFields,callback:function(t){e.selectedFields=t},expression:"selectedFields"}},[e._l(e.selectedFields,(function(t,i){return[t.isEditMode?e._e():n("v-list-item",{key:t.name,staticClass:"text-left header-selector-list-item",attrs:{dense:"",selectable:""}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(i+1+". "+t.displayName)}}),e._v(" "),n("v-list-item-subtitle",{domProps:{textContent:e._s(t.name)}})],1),e._v(" "),n("v-list-item-action",[n("span",[n("v-btn",{attrs:{icon:"","x-small":"",color:"green"},on:{click:function(){return e.toggleEditMode(t,!0)}}},[n("v-icon",[e._v("mdi-pencil")])],1),e._v(" "),n("v-btn",{attrs:{icon:"","x-small":"",color:"red"},on:{click:function(n){return e.onItemDeselect(t)}}},[n("v-icon",[e._v("mdi-close")])],1)],1)])],1),e._v(" "),t.isEditMode?n("v-list-item",{key:t.name,staticClass:"text-left header-selector-list-item",attrs:{dense:""}},[n("div",{staticClass:"text-right pb-2 pt-2"},[n("v-text-field",{attrs:{dense:"",label:"Display Name","single-line":""},model:{value:t.displayName,callback:function(n){e.$set(t,"displayName",n)},expression:"item.displayName"}}),e._v(" "),n("v-btn",{attrs:{icon:"",small:"",color:"green"},on:{click:function(){return e.toggleEditMode(t,!1)}}},[n("v-icon",[e._v("mdi-check")])],1)],1)]):e._e()]}))],2)],1)],1)],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"darken-1",text:""},on:{click:e.closeDialog}},[e._v(" Cancel ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.saveConfig}},[e._v("Save Config")])],1)],1)}),[],!1,null,null,null).exports,m={components:{TooltipIconButton:i.a,HeaderSelectorDialog:d},props:["fieldKeys","tableName","gridConfigChange"],data:function(){return{isOpen:!1}},methods:{closeDialog:function(){this.isOpen=!1},openDialog:function(){this.isOpen=!0}}},f=Object(u.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("tooltip-icon-button",{attrs:{buttonSize:"medium",btnIcon:"mdi-table-column",btnTooltip:"Configure table columns",onClick:function(){return e.openDialog()}}}),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[e.isOpen?n("header-selector-dialog",{attrs:{"grid-config-change":e.gridConfigChange,closeDialog:e.closeDialog,"field-keys":e.fieldKeys,tableName:e.tableName}}):e._e()],1)],1)}),[],!1,null,null,null);t.a=f.exports},"97BG":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"n",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return m})),n.d(t,"g",(function(){return f})),n.d(t,"i",(function(){return v})),n.d(t,"j",(function(){return h})),n.d(t,"m",(function(){return p})),n.d(t,"h",(function(){return b})),n.d(t,"k",(function(){return _})),n.d(t,"f",(function(){return g})),n.d(t,"l",(function(){return k})),n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return C}));var i,a,s=n("Kz1y"),r=n.n(s),o=n("TcPG"),l=n.n(o),c="DISCOVER_SLAVE_GRID",u="SLAVE_APPS_GRID",d="RF_ALL_NETWORK_DEVICES_GRID",m="RF_ALL_NETWORK_DEVICES_POINTS_GRID",f="RF_FLOW_NETWORK",v="RF_FLOW_NETWORK_STREAMS",h="RF_PRODUCERS",p="RF_WRITER_CLONES",b="RF_FLOW_NETWORK_CLONES",_="RF_STREAM_CLONES",g="RF_CONSUMERS",k="RF_WRITER",y=(i={},l()(i,c,[{name:"device_name",isEnabled:!0},{name:"site_name",isEnabled:!0},{name:"site_lat",isEnabled:!0},{name:"site_lon",isEnabled:!0}]),l()(i,u,[{name:"client_name",isEnabled:!0},{displayName:"Status",name:"is_online"},{displayName:"Device Name",name:"device_name"},{displayName:"Site Name",name:"site_name"},{displayName:"Latitude",name:"site_lat"},{displayName:"Longitude",name:"site_lon"}]),l()(i,d,[{displayName:"Device Name",name:"name"},{displayName:"Network Name",name:"network_name"},{displayName:"Thing Class",name:"thing_class"},{displayName:"Enabled",name:"enable"}]),l()(i,m,[{displayName:"Device Name",name:"name"},{displayName:"Enabled",name:"enable"}]),l()(i,f,[{displayName:"Name",name:"name"}]),l()(i,v,[{displayName:"Name",name:"name"}]),l()(i,h,[{displayName:"Name",name:"name"}]),l()(i,p,[{displayName:"Thing class",name:"thing_class"},{displayName:"Thing type",name:"thing_type"}]),l()(i,b,[{displayName:"Name",name:"name"}]),l()(i,_,[{displayName:"Name",name:"name"}]),l()(i,g,[{displayName:"Name",name:"name"}]),l()(i,k,[{displayName:"Writer Thing Class",name:"writer_thing_class"},{displayName:"Thing Type",name:"writer_thing_type"}]),i),w={name:"gridItemActions",sortable:!1,always:!0,displayName:"Grid Actions"},N={name:"routeLinkName",sortable:!0,always:!0,displayName:"Name",appendFirst:!0},C=(a={},l()(a,c,[]),l()(a,f,[r()({},N),r()({},w)]),l()(a,v,[r()({},N),r()({},w)]),l()(a,h,[r()({},N)]),l()(a,b,[r()({},N)]),l()(a,_,[r()({},N)]),l()(a,g,[r()({},N)]),l()(a,u,[{name:"faliureRate",displayName:"Failure Rate (%)",isEnabled:!0}]),a)},BHGY:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r}));var i=n("uzYq"),a="/grid-table-headers";function s(e){return i.a.get(a+"/"+e)}function r(e,t){return i.a.put(a+"/"+e,t)}},DeKB:function(e,t,n){"use strict";var i=n("Zv/C"),a=n.n(i),s=n("uzYq"),r=n("NWgQ"),o=n.n(r),l=n("PWxN"),c=n.n(l),u=function(){var e=this;this.uri="",this.evaluateUri=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return"function"==typeof e.uri?e.uri(t):uri},this.fetch=function(t){var n=e.evaluateUri(),i=null;return t&&t.hasOwnProperty("id")?(i=t.id,t=c()(t,"id")):t&&t.hasOwnProperty("uuid")&&(i=t.uuid,t=c()(t,"uuid")),t&&(n=n+"?"+o.a.stringify(t)),i?e.fetchById(i,t):s.a.get(n)},this.fetchById=function(t,n){var i=e.evaluateUri(t);return n&&(i=i+"?"+o.a.stringify(n)),s.a.get(i)},this.remove=function(){var t=e.evaluateUri();return s.a.delete(t)},this.removeById=function(t){var n=e.evaluateUri(t);return s.a.delete(n)},this.create=function(t){var n=e.evaluateUri();return s.a.post(n,t)},this.patch=function(t,n){var i=e.evaluateUri(t);return s.a.patch(i,n)},this.update=function(t,n){var i=e.evaluateUri(t);return s.a.put(i,n)}};t.a=function e(t){a()(this,e),u.call(this),this.uri=t}},Ui9F:function(e,t,n){"use strict";var i={name:"tooltip-icon-button",props:["btnIcon","btnTooltip","onClick","btnColor","buttonSize","disabled"]},a=n("psIG"),s=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return["medium"==e.buttonSize?n("v-btn",e._g(e._b({attrs:{disabled:e.disabled,icon:"",medium:"",color:e.btnColor},on:{click:e.onClick}},"v-btn",a,!1),i),[n("v-icon",{attrs:{medium:"",dark:""}},[e._v(" "+e._s(e.btnIcon)+" ")])],1):n("v-btn",e._g(e._b({attrs:{disabled:e.disabled,icon:"",small:"",color:e.btnColor},on:{click:e.onClick}},"v-btn",a,!1),i),[n("v-icon",{attrs:{small:"",dark:""}},[e._v(" "+e._s(e.btnIcon)+" ")])],1)]}}])},[e._v(" "),n("span",[e._v(e._s(e.btnTooltip))])])}),[],!1,null,null,null);t.a=s.exports},d6pI:function(e,t,n){"use strict";n.r(t);var i,a=n("snOE"),s=n.n(a),r=n("Kz1y"),o=n.n(r),l=n("tZmG"),c=n.n(l),u=n("TcPG"),d=n.n(u),m=n("oGAK"),f=n("oujF"),v=n("jVPF"),h=n("Ui9F"),p=n("wffz"),b=n("2kAK"),_=n("juCZ"),g=n("BHGY"),k=n("97BG"),y=":=",w={devices:"devices",points:"points"},N=(i={},d()(i,w.devices,(function(e){return m.a.rfDevices.replace(":networkId",e)})),d()(i,w.points,(function(e,t){return m.a.rfPoints.replace(":networkId",e).replace(":deviceId",t)})),i),C={name:"rf-all-network-devices-grid",components:{GridItemsCounter:v.a,TooltipIconButton:h.a,TextButton:f.a,HeaderSelector:b.a},data:function(){return{selectedItems:{},panel:null,tableName:k.e,viewNames:w,search:"",items:[],networks:[],networkDevicesModel:{},toolbarTitle:"All Points",headers:[]}},computed:{refreshToolTipTitle:function(){return"Refresh "+this.toolbarTitle},itemKeys:function(){return Array.isArray(this.networks)&&this.networks.length>0&&Array.isArray(this.networks[0].items)&&this.networks[0].items.length>0&&c()(this.networks[0].items[0])||[]}},mounted:function(){this.fetchSetGridHeaders(),this.fetchNetworkDevices()},methods:{refreshGrid:function(){this.search="",this.networks=[],this.selectedItems={},this.fetchNetworkDevices()},fetchNetworkDevices:function(){var e=this;this.isFetchingData=!0,p.a.fetch({with_points:!0}).then((function(t){e.networks=t,e.createSelectedItemsModel(e.networks),e.createNetworkDevicesModel(e.networks),e.setItems(e.networks)})).finally((function(){e.isFetchingData=!1}))},setItems:function(){var e=this;this.networks=(this.networks||[]).map((function(t){var n=(t.devices||[]).reduce((function(n,i){if(!Array.isArray(i.points))return n;var a=(i.points||[]).map((function(n){return o()({},n,c()(i).reduce((function(e,t){return e["device_"+t]=i[t],e}),{}),{network_device_key:e.getNetworkDeviceKey(t.uuid,i.uuid)})}));return n.push.apply(n,s()(a)),n}),[]);return delete t.devices,o()({},t,{items:n})}))},createSelectedItemsModel:function(){this.selectedItems=(this.networks||[]).reduce((function(e,t){return e[t.uuid]=[],e}),{})},getNetworkDeviceKey:function(e,t){return""+e+y+t},createNetworkDevicesModel:function(e){var t=this;this.networkDevicesModel={},e.forEach((function(e){e.devices.forEach((function(n){t.networkDevicesModel[t.getNetworkDeviceKey(e.uuid,n.uuid)]={network_uuid:e.uuid,device_uuid:n.uuid,network_name:e.name,device_name:n.name,isSelected:!1}}))}))},onDeleteSelected:function(){},onCreateDialogOpen:function(){},selectNetwork:function(){},getDeviceIdFromKey:function(e){return e.split(y)[1]},getNetworkIdFromKey:function(e){return e.split(y)[0]},onDeviceSelection:function(e,t){var n=this,i=this.networkDevicesModel[e].isSelected,a=this.getNetworkIdFromKey(e),r=this.getDeviceIdFromKey(e);i?this.networks.forEach((function(e){var t=e.items.map((function(e){return e.device_uuid===r?o()({},e):null})).filter((function(e){return e}));n.selectedItems[a]=[].concat(s()(n.selectedItems[a]),s()(t))})):this.selectedItems[a]=this.selectedItems[a].filter((function(e){return e.device_uuid!==r}))},onSelectAll:function(e,t){var n=this,i=e.value;c()(this.networkDevicesModel).forEach((function(e){var a=n.getNetworkIdFromKey(e);t==a&&(n.networkDevicesModel[e].isSelected=i)}))},getTableHeaders:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return{name:e,key:t,uuid:n.uuid,level:i,selected:!1,isHeader:!0}},redirectToDevice:function(e,t){var n=this.getNetworkIdFromKey(t);this.redirectTo(e,n)},redirectTo:function(e,t,n){if(t){var i=N[e];"function"==typeof i&&this.$router.push({path:i(t,n)})}},fetchSetGridHeaders:function(){var e=this;g.a(this.tableName).then((function(t){var n=_.c(e.tableName,t);e.headers=_.a()(n)})).catch((function(t){e.headers=k.a[e.tableName]}))}}},F=n("psIG"),x=Object(F.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-left"},[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",{staticClass:"mr-6"},[n("span",[e._v(e._s(e.toolbarTitle))]),e._v(" "),n("header-selector",{attrs:{"grid-config-change":e.fetchSetGridHeaders,fieldKeys:e.itemKeys,tableName:e.tableName}}),e._v(" "),n("tooltip-icon-button",{attrs:{btnColor:"default",btnIcon:"mdi-sync",btnTooltip:e.refreshToolTipTitle,buttonSize:"medium",onClick:function(){return e.refreshGrid()}}})],1),e._v(" "),n("grid-items-counter",{attrs:{num:e.selectedItems.length}}),e._v(" "),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),n("v-expansion-panels",{attrs:{dense:"",multiple:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},e._l(e.networks,(function(t,i){return n("v-expansion-panel",{key:i,attrs:{dense:""}},[n("v-expansion-panel-header",{attrs:{dense:"","hide-actions":""},scopedSlots:e._u([{key:"default",fn:function(i){var a=i.open;return[n("b",[e._v("NETWORK: "+e._s(t.name))]),e._v(" "),n("v-icon",{staticStyle:{"text-align":"end",display:"block"}},[e._v("\n            "+e._s(a?"mdi-chevron-down":"mdi-chevron-right")+"\n          ")])]}}],null,!0)}),e._v(" "),n("v-expansion-panel-content",{attrs:{dense:""}},[n("v-data-table",{staticClass:"text-left elevation-1",attrs:{dense:"",headers:e.headers,search:e.search,items:t.items,"item-key":"name","sort-by":"name","group-by":"network_device_key","show-select":""},on:{"toggle-select-all":function(n){return e.onSelectAll(n,t.uuid)}},scopedSlots:e._u([{key:"item.name",fn:function(i){var a=i.item;return[n("text-button",{attrs:{text:""+a.name,onClick:function(){return e.redirectTo(e.viewNames.points,t.uuid,a.device_uuid)}}})]}},{key:"group.header",fn:function(t){var a=t.headers,s=t.items,r=t.toggle,o=t.group,l=t.isOpen;return[n("td",{attrs:{colspan:a.length}},[n("div",{staticClass:"network-group-wrapper"},[e.networkDevicesModel[o]?n("v-checkbox",{staticClass:"mt-0",attrs:{color:"nubeAqua darken-3",value:e.networkDevicesModel[o].isSelected,"hide-details":""},on:{click:function(t){return e.onDeviceSelection(o,i)},change:function(t){return e.check(t,s)}},model:{value:e.networkDevicesModel[o].isSelected,callback:function(t){e.$set(e.networkDevicesModel[o],"isSelected",t)},expression:"networkDevicesModel[group].isSelected"}}):e._e(),e._v(" "),n("v-btn",{attrs:{"x-small":"",icon:""},on:{click:r}},[n("v-icon",[e._v(e._s(l?"mdi-chevron-double-down":"mdi-chevron-double-right"))])],1),e._v(" "),e.networkDevicesModel[o]?n("div",{staticClass:"subtitle-2"},[n("text-button",{attrs:{text:"Device: "+e.networkDevicesModel[o].device_name,onClick:function(){return e.redirectToDevice(e.viewNames.devices,o)}}})],1):e._e()],1)])]}}],null,!0),model:{value:e.selectedItems[t.uuid],callback:function(n){e.$set(e.selectedItems,t.uuid,n)},expression:"selectedItems[network.uuid]"}})],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=x.exports},jVPF:function(e,t,n){"use strict";var i={name:"grid-items-counter",props:["num"]},a=n("psIG"),s=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"text-left mr-5 grid-item-counter"},[n("span",{staticClass:"grey--text caption"},[e._v("Selected Apps: ")]),e._v(" "),n("span",[e._v(e._s(e.num))])])}),[],!1,null,"39bb1989",null);t.a=s.exports},juCZ:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return l}));var i=n("97BG"),a={hasActions:!0,hasSerialNumber:!0,actionValue:"actions",snValue:"sn"},s=function(e){var t=e.text,n=void 0===t?"":t,i=e.align,a=void 0===i?"center":i,s=e.sortable,r=void 0===s||s,o=e.value,l=void 0===o?null:o;return{text:n,align:a,sortable:r,name:l,value:l}},r=function(e){return e.split("_").map((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.toLowerCase();return e.charAt(0).toUpperCase()+t.slice(1)}(e)})).join(" ")},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=[];return t.forEach((function(e){e.displayName?n.push(s({text:r(e.displayName),value:e.name})):e.always&&n.push({text:e.displayName,value:e.name})})),e.hasActions&&n.push(s({text:"Actions",value:e.actionValue})),n}},l=function(e,t){var n=i.a[e],a=n;t&&0==(a=t.headers.filter((function(e){return e.isEnabled}))).length&&(a=n);var s=a.map((function(e){return{name:e.name,displayName:e.displayName||e.name}}));return(i.c[e]||[]).forEach((function(e){e.appendFirst?s.unshift(e):s.push(e)})),s}},oCli:function(e,t,n){"use strict";function i(e,t){return e?t+"/"+e:t}t.a={rfCommands:function(e){return i(e,"/rf-commands")},rfFlowNetwork:function(e){return i(e,"/rf-flow-network")},rfFlowNetworkClone:function(e){return i(e,"/rf-flow-network-clone")},rfJobs:function(e){return i(e,"/rf-jobs")},rfNetworks:function(e){return i(e,"/rf-networks")},rfPoints:function(e){return i(e,"/rf-points")},rfProducers:function(e){return i(e,"/rf-producers")},rfConsumers:function(e){return i(e,"/rf-consumers")},rfWriters:function(e){return i(e,"/rf-writers")},rfWriterClones:function(e){return i(e,"/rf-writers-clones")},rfStreams:function(e){return i(e,"/rf-streams")},rfStreamsClone:function(e){return i(e,"/rf-streams-clone")},rfDevices:function(e){return i(e,"/rf-devices")},rfWriterActions:function(e){return i(e,"/rf-writer-actions")}}},oujF:function(e,t,n){"use strict";var i={name:"text-button",props:["onClick","text"]},a=n("psIG"),s=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{staticClass:"ma-1",attrs:{link:"",color:"nubeGreen",plain:""},on:{click:e.onClick}},[n("span",{staticClass:"btn-text"},[e._v(e._s(e.text))])])}),[],!1,null,null,null);t.a=s.exports},wffz:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("DeKB"),a=n("oCli"),s=new i.a(a.a.rfNetworks)}}]);
//# sourceMappingURL=15.cf7f1035feb577c4c05a.js.map