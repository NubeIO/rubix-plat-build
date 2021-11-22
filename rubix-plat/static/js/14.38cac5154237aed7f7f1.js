(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"2kAK":function(e,t,n){"use strict";var i=n("Ui9F"),a=n("Kz1y"),r=n.n(a),s=n("juCZ"),l=n("BHGY"),o=n("ypiT"),c={name:"headerSelectorDialog",props:["tableName","fieldKeys","closeDialog","gridConfigChange"],components:{Draggable:n.n(o).a},data:function(){return{fields:[],isFormFieldCreated:!1,valid:!1,availableFields:[],selectedFields:[]}},mounted:function(){this.fetchHeadersConfig()},methods:{fetchHeadersConfig:function(){var e=this;return l.a(this.tableName).then((function(t){return e.mapsHeadersToFormFields(t),t}))},mapsHeadersToFormFields:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e&&e.hasOwnProperty("headers")&&e.headers&&e.headers.length>0&&e.headers.reduce((function(e,t){return e[t.name]=t,e}),{})||{};this.fields=(this.fieldKeys||[]).map((function(e){return{name:e,isEnabled:t&&t[e]&&t[e].isEnabled||!1,displayName:t&&t[e]&&t[e].displayName||s.b(e),isEditMode:!1}})),this.availableFields=this.fields.filter((function(e){return!e.isEnabled})),this.selectedFields=this.fields.filter((function(e){return e.isEnabled})),this.isFormFieldCreated=!0},onItemDeselect:function(e){this.selectedFields=this.selectedFields.filter((function(t){return t.name!=e.name})),this.availableFields=this.availableFields.concat(e)},onItemSelect:function(e){this.selectedFields=this.selectedFields.concat(e),this.availableFields=this.availableFields.filter((function(t){return t.name!=e.name}))},toggleEditMode:function(e,t){e&&(e.isEditMode=t)},saveConfig:function(){var e=this;this.selectedFields=this.selectedFields.map((function(e){return r()({},e,{isEnabled:!0})})),l.b(this.tableName,this.selectedFields).then((function(){e.$toasted.show("Grid configuration saved"),e.gridConfigChange(),e.fetchHeadersConfig(),e.closeDialog()})).catch((function(t){e.$toasted.show("Grid configuration could not be saved",{type:"error"})}))}}},u=n("psIG"),d=Object(u.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{dense:""}},[n("v-card-title",[e._v("Header Selector")]),e._v(" "),n("v-card-text",{attrs:{dense:""}},[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"6"}},[n("v-card",{staticClass:"full-height",attrs:{dense:"",outlined:""}},[n("v-card-text",{staticClass:"full-height"},[n("v-list",{staticClass:"full-height",attrs:{dense:"",subheader:"","two-line":""}},[n("v-subheader",[e._v(" Available columns ")]),e._v(" "),n("draggable",{staticStyle:{"min-height":"10px",height:"100%"},attrs:{options:{group:"name"}},model:{value:e.availableFields,callback:function(t){e.availableFields=t},expression:"availableFields"}},[e._l(e.availableFields,(function(t,i){return[n("v-list-item",{key:t.name,staticClass:"text-left header-selector-list-item",attrs:{dense:"",selectable:""},on:{dblclick:function(){return e.onItemSelect(t)}}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(i+1+". "+t.displayName)}}),e._v(" "),n("v-list-item-subtitle",{domProps:{textContent:e._s(t.name)}})],1)],1)]}))],2)],1)],1)],1)],1),e._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-card",{staticClass:"full-height",attrs:{dense:"",outlined:""}},[n("v-card-text",{staticClass:"full-height"},[n("v-list",{staticClass:"full-height",attrs:{dense:"","two-line":"",subheader:""}},[n("v-subheader",[e._v(" Selected columns ")]),e._v(" "),n("draggable",{staticStyle:{"min-height":"10px",height:"100%"},attrs:{options:{group:"name"}},model:{value:e.selectedFields,callback:function(t){e.selectedFields=t},expression:"selectedFields"}},[e._l(e.selectedFields,(function(t,i){return[t.isEditMode?e._e():n("v-list-item",{key:t.name,staticClass:"text-left header-selector-list-item",attrs:{dense:"",selectable:""}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(i+1+". "+t.displayName)}}),e._v(" "),n("v-list-item-subtitle",{domProps:{textContent:e._s(t.name)}})],1),e._v(" "),n("v-list-item-action",[n("span",[n("v-btn",{attrs:{icon:"","x-small":"",color:"green"},on:{click:function(){return e.toggleEditMode(t,!0)}}},[n("v-icon",[e._v("mdi-pencil")])],1),e._v(" "),n("v-btn",{attrs:{icon:"","x-small":"",color:"red"},on:{click:function(n){return e.onItemDeselect(t)}}},[n("v-icon",[e._v("mdi-close")])],1)],1)])],1),e._v(" "),t.isEditMode?n("v-list-item",{key:t.name,staticClass:"text-left header-selector-list-item",attrs:{dense:""}},[n("div",{staticClass:"text-right pb-2 pt-2"},[n("v-text-field",{attrs:{dense:"",label:"Display Name","single-line":""},model:{value:t.displayName,callback:function(n){e.$set(t,"displayName",n)},expression:"item.displayName"}}),e._v(" "),n("v-btn",{attrs:{icon:"",small:"",color:"green"},on:{click:function(){return e.toggleEditMode(t,!1)}}},[n("v-icon",[e._v("mdi-check")])],1)],1)]):e._e()]}))],2)],1)],1)],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"darken-1",text:""},on:{click:e.closeDialog}},[e._v(" Cancel ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.saveConfig}},[e._v("Save Config")])],1)],1)}),[],!1,null,null,null).exports,m={components:{TooltipIconButton:i.a,HeaderSelectorDialog:d},props:["fieldKeys","tableName","gridConfigChange"],data:function(){return{isOpen:!1}},methods:{closeDialog:function(){this.isOpen=!1},openDialog:function(){this.isOpen=!0}}},f=Object(u.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("tooltip-icon-button",{attrs:{buttonSize:"medium",btnIcon:"mdi-table-column",btnTooltip:"Configure table columns",onClick:function(){return e.openDialog()}}}),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[e.isOpen?n("header-selector-dialog",{attrs:{"grid-config-change":e.gridConfigChange,closeDialog:e.closeDialog,"field-keys":e.fieldKeys,tableName:e.tableName}}):e._e()],1)],1)}),[],!1,null,null,null);t.a=f.exports},"97BG":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"q",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return m})),n.d(t,"h",(function(){return f})),n.d(t,"j",(function(){return v})),n.d(t,"m",(function(){return h})),n.d(t,"p",(function(){return p})),n.d(t,"k",(function(){return b})),n.d(t,"g",(function(){return _})),n.d(t,"l",(function(){return g})),n.d(t,"i",(function(){return N})),n.d(t,"n",(function(){return y})),n.d(t,"f",(function(){return k})),n.d(t,"o",(function(){return w})),n.d(t,"a",(function(){return C})),n.d(t,"c",(function(){return I}));var i,a,r=n("Kz1y"),s=n.n(r),l=n("TcPG"),o=n.n(l),c="DISCOVER_SLAVE_GRID",u="SLAVE_APPS_GRID",d="RF_ALL_NETWORK_DEVICES_GRID",m="RF_ALL_NETWORK_DEVICES_POINTS_GRID",f="RF_FLOW_NETWORK",v="RF_FLOW_NETWORK_STREAMS",h="RF_PRODUCERS",p="RF_WRITER_CLONES",b="RF_NETWORKS_GRID",_="RF_DEVICES_GRID",g="RF_POINTS_GRID",N="RF_FLOW_NETWORK_CLONES",y="RF_STREAM_CLONES",k="RF_CONSUMERS",w="RF_WRITER",C=(i={},o()(i,c,[{name:"device_name",isEnabled:!0},{name:"site_name",isEnabled:!0},{name:"site_lat",isEnabled:!0},{name:"site_lon",isEnabled:!0}]),o()(i,u,[{name:"client_name",isEnabled:!0},{displayName:"Status",name:"is_online"},{displayName:"Device Name",name:"device_name"},{displayName:"Site Name",name:"site_name"},{displayName:"Latitude",name:"site_lat"},{displayName:"Longitude",name:"site_lon"}]),o()(i,d,[{displayName:"Device Name",name:"name"},{displayName:"Network Name",name:"network_name"},{displayName:"Thing Class",name:"thing_class"},{displayName:"Enabled",name:"enable"}]),o()(i,m,[{displayName:"Device Name",name:"name"},{displayName:"Enabled",name:"enable"}]),o()(i,f,[{displayName:"Site Id",name:"site_id"},{displayName:"Device Id",name:"device_id"},{displayName:"Is Remote",name:"is_remote"},{displayName:"Is Master",name:"is_master_slave"},{displayName:"Is Error",name:"is_error"}]),o()(i,v,[{displayName:"Enable",name:"enable"}]),o()(i,h,[{displayName:"Enable",name:"enable"},{displayName:"Producer Thing Class",name:"producer_thing_class"},{displayName:"Producer Thing Name",name:"producer_thing_name"}]),o()(i,p,[{displayName:"Writer Thing Class",name:"writer_thing_class"},{displayName:"Writer Thing Type",name:"writer_thing_name"}]),o()(i,N,[{displayName:"Site Id",name:"site_id"},{displayName:"Device Id",name:"device_id"},{displayName:"Is Remote",name:"is_remote"},{displayName:"Is Master",name:"is_master_slave"},{displayName:"Is Error",name:"is_error"}]),o()(i,y,[{displayName:"Enable",name:"enable"}]),o()(i,k,[{displayName:"Enable",name:"enable"},{displayName:"Producer Thing Class",name:"producer_thing_class"},{displayName:"Producer Thing Name",name:"producer_thing_name"}]),o()(i,w,[{displayName:"Writer Thing Class",name:"writer_thing_class"},{displayName:"Writer Thing Name",name:"writer_thing_name"}]),o()(i,b,[{displayName:"Enable",name:"enable"},{displayName:"Plugin Name",name:"plugin_name"},{displayName:"Transport Type",name:"transport_type"}]),o()(i,_,[{displayName:"Enable",name:"enable"}]),o()(i,g,[{displayName:"Enable",name:"enable"},{displayName:"Point Name",name:"name"},{displayName:"Present Value",name:"present_value"}]),i),x={name:"gridItemActions",sortable:!1,always:!0,displayName:"Grid Actions"},E={name:"routeLinkName",sortable:!0,always:!0,displayName:"Name",appendFirst:!0},I=(a={},o()(a,c,[]),o()(a,f,[s()({},E),s()({},x)]),o()(a,v,[s()({},E),s()({},x)]),o()(a,h,[s()({},E)]),o()(a,N,[s()({},E)]),o()(a,y,[s()({},E)]),o()(a,k,[s()({},E)]),o()(a,b,[s()({},E)]),o()(a,_,[s()({},E)]),o()(a,u,[{name:"faliureRate",displayName:"Failure Rate (%)",isEnabled:!0}]),a)},BHGY:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));var i=n("uzYq"),a="/grid-table-headers";function r(e){return i.a.get(a+"/"+e)}function s(e,t){return i.a.put(a+"/"+e,t)}},DeKB:function(e,t,n){"use strict";var i=n("Zv/C"),a=n.n(i),r=n("uzYq"),s=n("NWgQ"),l=n.n(s),o=n("PWxN"),c=n.n(o),u=function(){var e=this;this.uri="",this.evaluateUri=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return"function"==typeof e.uri?e.uri(t):uri},this.fetch=function(t){var n=e.evaluateUri(),i=null;return t&&t.hasOwnProperty("id")?(i=t.id,t=c()(t,"id")):t&&t.hasOwnProperty("uuid")&&(i=t.uuid,t=c()(t,"uuid")),t&&(n=n+"?"+l.a.stringify(t)),i?e.fetchById(i,t):r.a.get(n)},this.fetchById=function(t,n){var i=e.evaluateUri(t);return n&&(i=i+"?"+l.a.stringify(n)),r.a.get(i)},this.remove=function(){var t=e.evaluateUri();return r.a.delete(t)},this.removeById=function(t){var n=e.evaluateUri(t);return r.a.delete(n)},this.create=function(t){var n=e.evaluateUri();return r.a.post(n,t)},this.patch=function(t,n){var i=e.evaluateUri(t);return r.a.patch(i,n)},this.update=function(t,n){var i=e.evaluateUri(t);return r.a.put(i,n)}};t.a=function e(t){a()(this,e),u.call(this),this.uri=t}},Ui9F:function(e,t,n){"use strict";var i={name:"tooltip-icon-button",props:["btnIcon","btnTooltip","onClick","btnColor","buttonSize","disabled"]},a=n("psIG"),r=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return["medium"==e.buttonSize?n("v-btn",e._g(e._b({attrs:{disabled:e.disabled,icon:"",medium:"",color:e.btnColor},on:{click:e.onClick}},"v-btn",a,!1),i),[n("v-icon",{attrs:{medium:"",dark:""}},[e._v(" "+e._s(e.btnIcon)+" ")])],1):n("v-btn",e._g(e._b({attrs:{disabled:e.disabled,icon:"",small:"",color:e.btnColor},on:{click:e.onClick}},"v-btn",a,!1),i),[n("v-icon",{attrs:{small:"",dark:""}},[e._v(" "+e._s(e.btnIcon)+" ")])],1)]}}])},[e._v(" "),n("span",[e._v(e._s(e.btnTooltip))])])}),[],!1,null,null,null);t.a=r.exports},VNy9:function(e,t,n){"use strict";var i={name:"breadcrumbs",props:["items"]},a=n("psIG"),r=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-breadcrumbs",{staticClass:"breadcrumbs",attrs:{items:e.items},scopedSlots:e._u([{key:"item",fn:function(t){var i=t.item;return[n("v-breadcrumbs-item",{staticClass:"breadcrumbs-item-text",attrs:{to:i.link,exact:""}},[e._v(" "+e._s(i.text)+" ")])]}}])})}),[],!1,null,"04244946",null);t.a=r.exports},jVPF:function(e,t,n){"use strict";var i={name:"grid-items-counter",props:["num"]},a=n("psIG"),r=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"text-left mr-5 grid-item-counter"},[n("span",{staticClass:"grey--text caption"},[e._v("Selected Apps: ")]),e._v(" "),n("span",[e._v(e._s(e.num))])])}),[],!1,null,"39bb1989",null);t.a=r.exports},juCZ:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return o}));var i=n("97BG"),a={hasActions:!0,hasSerialNumber:!0,actionValue:"actions",snValue:"sn"},r=function(e){var t=e.text,n=void 0===t?"":t,i=e.align,a=void 0===i?"center":i,r=e.sortable,s=void 0===r||r,l=e.value,o=void 0===l?null:l;return{text:n,align:a,sortable:s,name:o,value:o}},s=function(e){return e.split("_").map((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.toLowerCase();return e.charAt(0).toUpperCase()+t.slice(1)}(e)})).join(" ")},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=[];return t.forEach((function(e){e.displayName?n.push(r({text:s(e.displayName),value:e.name})):e.always&&n.push({text:e.displayName,value:e.name})})),e.hasActions&&n.push(r({text:"Actions",value:e.actionValue})),n}},o=function(e,t){var n=i.a[e],a=n;t&&0==(a=t.headers.filter((function(e){return e.isEnabled}))).length&&(a=n);var r=a.map((function(e){return{name:e.name,displayName:e.displayName||e.name}}));return(i.c[e]||[]).forEach((function(e){e.appendFirst?r.unshift(e):r.push(e)})),r}},oCli:function(e,t,n){"use strict";function i(e,t){return e?t+"/"+e:t}t.a={rfFNCStreams:function(e){return i(e,"rf-fnc")},rfCommands:function(e){return i(e,"/rf-commands")},rfLogin:function(e){return i(e,"/rf-login")},rfSchedules:function(e){return i(e,"/rf-schedules")},rfFlowNetwork:function(e){return i(e,"/rf-flow-network")},rfFlowNetworkClone:function(e){return i(e,"/rf-flow-network-clone")},rfJobs:function(e){return i(e,"/rf-jobs")},rfNetworks:function(e){return i(e,"/rf-networks")},rfPoints:function(e){return i(e,"/rf-points")},rfProducers:function(e){return i(e,"/rf-producers")},rfConsumers:function(e){return i(e,"/rf-consumers")},rfWriters:function(e){return i(e,"/rf-writers")},rfWriterClones:function(e){return i(e,"/rf-writer-clones")},rfStreams:function(e){return i(e,"/rf-streams")},rfStreamsClone:function(e){return i(e,"/rf-streams-clone")},rfDevices:function(e){return i(e,"/rf-devices")},rfWriterActions:function(e){return i(e,"/rf-writer-actions")}}},oujF:function(e,t,n){"use strict";var i={name:"text-button",props:["onClick","text"]},a=n("psIG"),r=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{staticClass:"ma-1",attrs:{link:"",color:"nubeGreen",plain:""},on:{click:e.onClick}},[n("span",{staticClass:"btn-text"},[e._v(e._s(e.text))])])}),[],!1,null,null,null);t.a=r.exports},wffz:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("DeKB"),a=n("oCli"),r=new i.a(a.a.rfNetworks)},z31d:function(e,t,n){"use strict";n.r(t);var i,a=n("oGAK"),r=n("VNy9"),s=n("snOE"),l=n.n(s),o=n("tZmG"),c=n.n(o),u=n("Kz1y"),d=n.n(u),m=n("TcPG"),f=n.n(m),v=n("oujF"),h=n("jVPF"),p=n("Ui9F"),b=n("wffz"),_=n("2kAK"),g=n("juCZ"),N=n("BHGY"),y=n("97BG"),k={devices:"devices",points:"points"},w=(i={},f()(i,k.devices,(function(e){return a.a.rfDevices.replace(":networkId",e)})),f()(i,k.points,(function(e,t){return a.a.rfPoints.replace(":networkId",e).replace(":deviceId",t)})),i),C={name:"rf-all-network-devices-grid",components:{GridItemsCounter:h.a,TooltipIconButton:p.a,TextButton:v.a,HeaderSelector:_.a},data:function(){var e;return e={selectedItems:[],tableName:y.d,viewNames:k,search:"",networks:[],networkModel:{},toolbarTitle:"All Network Devices"},f()(e,"networks",[]),f()(e,"headers",[]),e},computed:{atleastOneGridItemSelected:function(){return this.selectedItems.length>0},deleteAllTitle:function(){return"Are you sure to delete "+this.selectedItems.length+" item(s)?"},refreshToolTipTitle:function(){return"Refresh "+this.toolbarTitle},isCreatable:function(){return void 0===this.creatable||this.creatable},isDeletable:function(){return void 0===this.deletable||this.deletable},items:function(){return this.networks.reduce((function(e,t){if(!Array.isArray(t.devices))return e;var n=t.devices.map((function(e){return d()({},e,c()(t).reduce((function(e,n){return e["network_"+n]=t[n],e}),{}))}));return e.push.apply(e,l()(n)),e}),[])},itemKeys:function(){return Array.isArray(this.networks)&&this.networks.length>0&&c()(this.networks[0])}},mounted:function(){this.fetchSetGridHeaders(),this.fetchNetworkDevices()},methods:{refreshGrid:function(){this.search="",this.networks=[],this.networkModel={},this.selectedItems=[],this.fetchNetworkDevices()},fetchNetworkDevices:function(){var e=this;this.isFetchingData=!0,b.a.fetch({with_devices:!0}).then((function(t){e.networks=t,e.createNetworkModel(e.networks)})).finally((function(){e.isFetchingData=!1}))},getDivider:function(){return{divider:!0,isHeader:!1}},createNetworkModel:function(e){this.networkModel=e.reduce((function(e,t){return e[t.uuid]=d()({},t,{isSelected:!1}),e}),{})},onDeleteSelected:function(){},onCreateDialogOpen:function(){},selectNetwork:function(){},onNetworkSelection:function(e){if(this.networkModel[e].isSelected){var t=this.items.map((function(t){return t.network_uuid===e?d()({},t):null})).filter((function(e){return e}));this.selectedItems=[].concat(l()(this.selectedItems),l()(t))}else this.selectedItems=this.selectedItems.filter((function(t){return t.network_uuid!==e}))},onSelectAll:function(e){var t=this,n=e.value;c()(this.networkModel).forEach((function(e){t.networkModel[e].isSelected=n}))},getTableHeaders:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return{name:e,key:t,uuid:n.uuid,level:i,selected:!1,isHeader:!0}},redirectTo:function(e,t,n){if(t){var i=w[e];"function"==typeof i&&this.$router.push({path:i(t,n)})}},fetchSetGridHeaders:function(){var e=this;N.a(this.tableName).then((function(t){var n=g.c(e.tableName,t);e.headers=g.a()(n)})).catch((function(t){e.headers=y.a[e.tableName]}))}}},x=n("psIG"),E=Object(x.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-left"},[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",{staticClass:"mr-6"},[n("span",[e._v(e._s(e.toolbarTitle))]),e._v(" "),n("header-selector",{attrs:{"grid-config-change":e.fetchSetGridHeaders,fieldKeys:e.itemKeys,tableName:e.tableName}}),e._v(" "),n("tooltip-icon-button",{attrs:{btnColor:"default",btnIcon:"mdi-sync",btnTooltip:e.refreshToolTipTitle,buttonSize:"medium",onClick:function(){return e.refreshGrid()}}})],1),e._v(" "),n("grid-items-counter",{attrs:{num:e.selectedItems.length}}),e._v(" "),e.isCreatable?n("v-btn",{staticClass:"mr-2 btn-height-22 white-text",attrs:{"x-small":"",color:"green"},on:{click:e.onCreateDialogOpen}},[n("span",[e._v("Create")]),e._v(" "),n("v-icon",{attrs:{"x-small":"",right:""}},[e._v(" mdi-plus")])],1):e._e(),e._v(" "),e.isDeletable?n("v-btn",{staticClass:"mr-2 btn-height-22 white-text",attrs:{"x-small":"",color:"error",disabled:!e.atleastOneGridItemSelected},on:{click:e.onDeleteSelected}},[n("span",[e._v("Delete")]),e._v(" "),n("v-icon",{attrs:{"x-small":"",right:""}},[e._v(" mdi-delete")])],1):e._e(),e._v(" "),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),n("v-data-table",{staticClass:"text-left elevation-1",attrs:{headers:e.headers,search:e.search,items:e.items,"item-key":"name","sort-by":"name","group-by":"network_uuid","show-select":""},on:{"toggle-select-all":function(t){return e.onSelectAll(t)}},scopedSlots:e._u([{key:"item.name",fn:function(t){var i=t.item;return[n("text-button",{attrs:{text:""+i.name,onClick:function(){return e.redirectTo(e.viewNames.points,i.network_uuid,i.uuid)}}})]}},{key:"group.header",fn:function(t){var i=t.headers,a=(t.items,t.toggle),r=t.group,s=t.isOpen;return[n("td",{attrs:{colspan:i.length}},[n("div",{staticClass:"network-group-wrapper"},[e.networkModel[r]?n("v-checkbox",{staticClass:"mt-0",attrs:{color:"nubeAqua darken-3",value:e.networkModel[r].isSelected,"hide-details":""},on:{click:function(t){return e.onNetworkSelection(r,t)}},model:{value:e.networkModel[r].isSelected,callback:function(t){e.$set(e.networkModel[r],"isSelected",t)},expression:"networkModel[group].isSelected"}}):e._e(),e._v(" "),n("v-btn",{attrs:{"x-small":"",icon:""},on:{click:a}},[n("v-icon",[e._v(e._s(s?"mdi-chevron-double-down":"mdi-chevron-double-right"))])],1),e._v(" "),e.networkModel[r]?n("div",{staticClass:"subtitle-2"},[n("text-button",{attrs:{text:"Network: "+e.networkModel[r].name,onClick:function(){return e.redirectTo(e.viewNames.devices,r)}}})],1):e._e()],1)])]}}]),model:{value:e.selectedItems,callback:function(t){e.selectedItems=t},expression:"selectedItems"}})],1)}),[],!1,null,null,null).exports,I={text:"All Devices",disabled:!1,link:a.a.rfAllNetworkDevices},S={name:"rf-all-devices",components:{Breadcrumbs:r.a,RfAllNetworkDevicesGrid:E},data:function(){return{breadcrumbItems:[I],dataItems:[],isFetchingData:!1}}},F=Object(x.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{loading:e.isFetchingData}},[n("v-card-title",[e._v("All Networks and Devices")]),e._v(" "),n("v-card-text",[n("v-row",{attrs:{"no-gutter":""}},[n("v-col",{attrs:{cols:"12",lg:"12",xl:"12",md:"12",sm:"12",xs:"12"}},[n("rf-all-network-devices-grid")],1)],1)],1)],1)}),[],!1,null,null,null);t.default=F.exports}}]);
//# sourceMappingURL=14.38cac5154237aed7f7f1.js.map