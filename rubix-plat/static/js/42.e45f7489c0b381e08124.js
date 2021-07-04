(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{oguq:function(e,t,i){"use strict";i.r(t);var n=i("t3kO"),a=i.n(n),r=i("OBCi"),s=i.n(r),l=i("06Hw"),o=i.n(l),c=i("YYXh"),d=i.n(c),u=i("PSh9"),p=i.n(u),v=i("snOE"),f=i.n(v),m=i("Kz1y"),_=i.n(m),b=i("uzYq"),h=i("yEOx"),x=i.n(h),g=i("8q1a"),k=i("2dfr"),y=i("lkCm"),w=i("Tv0g"),I=i("A5Vd"),E=i("RnRM"),D=i("+n12"),$={components:{MqttConsole:g.a,MbRightSidebar:k.a,ConfirmDialog:y.a,SystemStatusTable:w.a},data:function(){return{toUpperTextKey:D.q,topic:E.r,rules:_()({},E.q),deviceHeaders:[].concat(f()(E.c)),editAll:_()({},E.b),tableProps:_()({},I.d),dialog:!1,dialogDelete:!1,dialogMassEdit:!1,tab:0,action:"",valid:!1,selected:[],editedItem:{},search:"",editField:"",intervalId:null,devicesOfNW:[],dataTable:[],dirs:[{text:"NETWORKS",link:"/modbus/networks"},{text:"DEVICES VIEW",disabled:!0}],networks:[],network:{},loadingData:!1}},computed:{debugSubscriptions:function(){var e=this.$store.state.mqttConfig.debugSubscriptions;return e.modbus},setting:function(){return this.$store.state.setting}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()},"$route.params.id":function(e,t){e!=t&&this.getAllDevices()}},beforeRouteLeave:function(e,t,i){clearInterval(this.intervalId),b.a.post("mqtt/unsubscribe",{topic:this.topic}).finally((function(){i()}))},mounted:function(){var e=this;this.getAllDevices(),this.setting.refreshTime&&this.setting.enableAutoRefresh&&(this.intervalId=setInterval((function(){e.getAllDevices(),e.setting.toastAutoRefresh&&e.$toasted.show("Automatically refresh every "+e.setting.refreshTime+"ms",{type:"info"})}),this.setting.refreshTime))},methods:{getAllDevices:function(){var e=this;this.loadingData=!0,b.a.get("point-server/network/?with_children=true").then((function(t){e.networks=t,e.getDataTable(t),e.loadingData=!1}))},getDataTable:function(e){var t=this;this.dataTable=[],e.forEach((function(e){if(e.devices.length>0){var i=e.devices.map((function(t){return _()({},t,{category:e.name})}));t.dataTable=t.dataTable.concat(i)}}))},editItem:function(e){this.editedIndex=this.dataTable.findIndex((function(t){return t.uuid==e.uuid})),this.devicesOfNW=this.dataTable.filter((function(t){return t.network_uuid===e.network_uuid})),this.editedItem=p()({},e),this.network=this.networks.find((function(t){return t.uuid===e.network_uuid})),this.dialog=!0},clickDelete:function(e){var t=this;return d()(o.a.mark((function i(){return o.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t.action="deleteSingle",t.dialogDelete=!0,t.editedItem=e;case 3:case"end":return i.stop()}}),i,t)})))()},clickDeleteMulti:function(){var e=this;return d()(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.dialogDelete=!0,e.action="deleteSelected";case 2:case"end":return t.stop()}}),t,e)})))()},deleteSingle:function(){var e=this;return d()(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.editedIndex=e.dataTable.indexOf(e.editedItem),e.dataTable.splice(e.editedIndex,1),t.next=4,b.a.delete("point-server/device/"+e.editedItem.uuid);case 4:e.closeDelete();case 5:case"end":return t.stop()}}),t,e)})))()},deleteSelected:function(){var e=this;return d()(o.a.mark((function t(){var i,n,r,l,c,d,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i=[],n=!0,r=!1,l=void 0,t.prev=4,c=a()(e.selected);!(n=(d=c.next()).done);n=!0)u=d.value,e.editedItem=u,i.push(e.deleteSingle());t.next=12;break;case 8:t.prev=8,t.t0=t.catch(4),r=!0,l=t.t0;case 12:t.prev=12,t.prev=13,!n&&c.return&&c.return();case 15:if(t.prev=15,!r){t.next=18;break}throw l;case 18:return t.finish(15);case 19:return t.finish(12);case 20:return t.next=22,s.a.all(i);case 22:e.selected=[];case 23:case"end":return t.stop()}}),t,e,[[4,8,12,20],[13,,15,19]])})))()},confirm:function(){var e=this;return d()(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e[e.action]();case 2:e.dialog=!1,e.action="";case 4:case"end":return t.stop()}}),t,e)})))()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem={},e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem={},e.editedIndex=-1}))},isExistingvalue:function(e,t,i){var n=x()(this.devicesOfNW),a=n.findIndex((function(e){return e.uuid==i.uuid}));return n.splice(a,1),"address"!==t&&"tcp_port"!==t||(e=Number(e)),null!=n.find((function(i){return i[t]==e}))},updateDevice:function(e){var t=this;b.a.put("point-server/device/"+e.uuid,e).then((function(e){var i=t.dataTable.findIndex((function(t){return t.uuid==e.uuid}));p()(t.dataTable[i],e),t.close(),t.$toasted.show("update success")}))},backgroundColor:function(e){return e.fault?"background-fault-true":e.enable?"":"background-enable-false"},saveMassEdit:function(e,t){var i=!0,n=!1,r=void 0;try{for(var s,l=a()(this.selected);!(i=(s=l.next()).done);i=!0){var o=s.value;o[t]=e,this.updateDevice(o)}}catch(e){n=!0,r=e}finally{try{!i&&l.return&&l.return()}finally{if(n)throw r}}this.dialogMassEdit=!1},openMassEditDialog:function(e){var t=this;return d()(o.a.mark((function i(){return o.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!(t.selected.length<1)){i.next=2;break}return i.abrupt("return",t.$toasted.show("Please select item first!",{type:"error"}));case 2:t.dialogMassEdit=!0,t.editField=e,t.editAll=_()({},E.b);case 5:case"end":return i.stop()}}),i,t)})))()},numberChange:function(){if(!this.editAll[this.editField])return this.editAll[this.editField]=0},cancelEdit:function(){},openEdit:function(e){this.editedIndex=this.dataTable.indexOf(e),this.editedItem=p()({},e)},closeEdit:function(){this.editedIndex=-1,this.editedItem={}},onClickRefresh:function(){this.getAllDevices(),this.$toasted.show("successfully refresh",{type:"success"})},check:function(e,t){this.selected=e?[].concat(f()(this.selected)).concat(t):[].concat(f()(this.selected)).filter((function(e){return e.network_uuid!=t[0].network_uuid}))},changeName:function(e){this.editedItem.name=Object(D.a)(e,this.setting)}}},C=i("psIG"),T=Object(C.a)($,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-main",[i("div",{staticClass:"table-styling"},[i("v-tabs",{attrs:{right:"",dark:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[i("v-breadcrumbs",{staticClass:"breadcrumbs",attrs:{items:e.dirs},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[i("v-breadcrumbs-item",{staticClass:"breadcrumbs-item-text",attrs:{to:n.link,exact:""}},[e._v(" "+e._s(n.text)+" ")])]}}])}),e._v(" "),i("v-tab",{key:0,staticStyle:{"margin-left":"auto"}},[e._v(" Data ")]),e._v(" "),i("v-tab",{key:1},[e._v(" Debug Messages ")]),e._v(" "),i("v-tab",{key:2},[e._v(" System Status ")])],1),e._v(" "),i("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[i("v-tab-item",{key:0},[i("v-data-table",{staticClass:"elevation-1 text-left",attrs:{headers:e.deviceHeaders,items:e.dataTable,"item-key":"uuid","show-select":"","item-class":e.backgroundColor,"footer-props":e.tableProps.FOOTER_PROPS,itemsPerPage:e.tableProps.ITEMS_PER_PAGE,search:e.search,"sort-by":"uuid","group-by":"category","show-group-by":"",loading:e.loadingData},scopedSlots:e._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[e._v("Devices View")]),e._v(" "),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),i("div",{staticClass:"text-left pa-2"},[i("v-btn",{staticClass:"white--text",attrs:{"x-small":"",color:"primary"},on:{click:e.onClickRefresh}},[e._v(" Refresh"),i("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[e._v(" mdi-refresh ")])],1),e._v(" \n                  "),i("v-btn",{staticClass:"white--text",attrs:{disabled:0===e.selected.length,"x-small":"",color:"error"},on:{click:e.clickDeleteMulti}},[e._v("Delete"),i("v-icon",{attrs:{"x-small":"",right:"",dark:""}},[e._v(" mdi-delete ")])],1),e._v(" \n                ")],1),e._v(" "),i("v-spacer"),e._v(" "),i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]},proxy:!0},{key:"group.header",fn:function(t){var n=t.group,a=t.headers,r=t.toggle,s=t.isOpen,l=t.items;return[i("td",{attrs:{colspan:a.length}},[i("div",{staticClass:"row",staticStyle:{"align-items":"center"}},[i("v-btn",{ref:n,attrs:{"x-small":"",icon:""},on:{click:r}},[i("v-icon",[e._v(e._s(s?"mdi-chevron-double-down":"mdi-chevron-double-right"))])],1),e._v("    \n                    "),i("v-checkbox",{attrs:{value:e.selected.filter((function(e){return e.network_uuid===l[0].network_uuid})).length==l.length},on:{change:function(t){return e.check(t,l)}}}),e._v(" "),i("router-link",{staticClass:"font-weight-bold text-style",attrs:{to:"/modbus/networks/"+l[0].network_uuid+"/devices"}},[e._v(" "+e._s(n)+" ")])],1)])]}},{key:"item.enable",fn:function(t){var n=t.item;return[i("v-checkbox",{on:{click:function(t){return e.updateDevice(n)}},model:{value:n.enable,callback:function(t){e.$set(n,"enable",t)},expression:"item.enable"}})]}},{key:"item.supports_multiple_rw",fn:function(t){var n=t.item;return[i("v-checkbox",{on:{click:function(t){return e.updateDevice(n)}},model:{value:n.supports_multiple_rw,callback:function(t){e.$set(n,"supports_multiple_rw",t)},expression:"item.supports_multiple_rw"}})]}},{key:"item.address",fn:function(t){var n=t.item;return[i("v-edit-dialog",{attrs:{"return-value":n.address,large:""},on:{"update:returnValue":function(t){return e.$set(n,"address",t)},"update:return-value":function(t){return e.$set(n,"address",t)},save:function(t){return e.updateDevice(n)},cancel:e.cancelEdit,open:function(t){return e.openEdit(n)},close:e.closeEdit},scopedSlots:e._u([{key:"input",fn:function(){return[i("v-text-field",{attrs:{"single-line":"",type:"number",min:"0",rules:[function(){return!e.isExistingvalue(n.address,"address",n)||"Address Existed"}]},on:{input:function(t){return e.numberChange()}},model:{value:n.address,callback:function(t){e.$set(n,"address",t)},expression:"item.address"}})]},proxy:!0}],null,!0)},[i("b",[e._v(e._s(n.address))])])]}},{key:"item.tcp_ip",fn:function(t){var n=t.item;return[i("v-edit-dialog",{attrs:{"return-value":n.tcp_ip,large:""},on:{"update:returnValue":function(t){return e.$set(n,"tcp_ip",t)},"update:return-value":function(t){return e.$set(n,"tcp_ip",t)},save:function(t){return e.updateDevice(n)},cancel:e.cancelEdit,open:function(t){return e.openEdit(n)},close:e.closeEdit},scopedSlots:e._u([{key:"input",fn:function(){return[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-text-field",{attrs:{"single-line":"",rules:[function(){return!e.isExistingvalue(n.tcp_ip,"tcp_ip",n)||"IP Existed"}]},model:{value:n.tcp_ip,callback:function(t){e.$set(n,"tcp_ip",t)},expression:"item.tcp_ip"}})],1)]},proxy:!0}],null,!0)},[i("b",[e._v(e._s(n.tcp_ip))])])]}},{key:"item.tcp_port",fn:function(t){var n=t.item;return[i("v-edit-dialog",{attrs:{"return-value":n.tcp_port,large:""},on:{"update:returnValue":function(t){return e.$set(n,"tcp_port",t)},"update:return-value":function(t){return e.$set(n,"tcp_port",t)},save:function(t){return e.updateDevice(n)},cancel:e.cancelEdit,open:e.openEdit,close:e.closeEdit},scopedSlots:e._u([{key:"input",fn:function(){return[i("v-text-field",{attrs:{"single-line":"",type:"number",min:"0"},on:{input:function(t){return e.numberChange()}},model:{value:n.tcp_port,callback:function(t){e.$set(n,"tcp_port",t)},expression:"item.tcp_port"}})]},proxy:!0}],null,!0)},[i("b",[e._v(e._s(n.tcp_port))])])]}},{key:"item.ping_point",fn:function(t){var n=t.item;return[i("v-edit-dialog",{attrs:{"return-value":n.ping_point,large:""},on:{"update:returnValue":function(t){return e.$set(n,"ping_point",t)},"update:return-value":function(t){return e.$set(n,"ping_point",t)},save:function(t){return e.updateDevice(n)},cancel:e.cancelEdit,open:e.openEdit,close:e.closeEdit},scopedSlots:e._u([{key:"input",fn:function(){return[i("v-text-field",{attrs:{"single-line":""},model:{value:n.ping_point,callback:function(t){e.$set(n,"ping_point",t)},expression:"item.ping_point"}})]},proxy:!0}],null,!0)},[i("b",[e._v(e._s(n.ping_point))])])]}},{key:"item.actions",fn:function(t){var n=t.item;return[i("v-icon",{attrs:{small:"",color:"primary"},on:{click:function(t){return e.editItem(n)}}},[e._v("mdi-pencil")]),e._v(" \n              "),i("v-icon",{attrs:{small:"",color:"error"},on:{click:function(t){return e.clickDelete(n)}}},[e._v("mdi-delete")]),e._v(" \n            ")]}},{key:"header.enable",fn:function(t){t.item;return[i("div",{staticClass:"d-flex"},[i("span",[e._v(e._s(e.toUpperTextKey("enable")))]),e._v("  \n                "),i("v-icon",{attrs:{"x-small":"",color:"primary"},on:{click:function(t){return e.openMassEditDialog("enable")}}},[e._v("mdi-pencil")])],1)]}},{key:"header.supports_multiple_rw",fn:function(t){t.item;return[i("div",{staticClass:"d-flex"},[i("span",[e._v(e._s(e.toUpperTextKey("supports_multiple_rw")))]),e._v("  \n                "),i("v-icon",{attrs:{"x-small":"",color:"primary"},on:{click:function(t){return e.openMassEditDialog("supports_multiple_rw")}}},[e._v("mdi-pencil")])],1)]}},{key:"header.tcp_port",fn:function(t){t.item;return[i("div",{staticClass:"d-flex"},[i("span",[e._v(e._s(e.toUpperTextKey("port")))]),e._v("  \n                "),i("v-icon",{attrs:{"x-small":"",color:"primary"},on:{click:function(t){return e.openMassEditDialog("tcp_port")}}},[e._v("mdi-pencil")])],1)]}},{key:"header.ping_point",fn:function(t){t.item;return[i("div",{staticClass:"d-flex"},[i("span",[e._v(e._s(e.toUpperTextKey("ping_point")))]),e._v("  \n                "),i("v-icon",{attrs:{"x-small":"",color:"primary"},on:{click:function(t){return e.openMassEditDialog("ping_point")}}},[e._v("mdi-pencil")])],1)]}},{key:"no-data",fn:function(){return[e._v(" No data ")]},proxy:!0}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),i("v-tab-item",{key:1},[i("mqtt-console",{attrs:{editable:!1,subscriptions:e.debugSubscriptions}})],1),e._v(" "),i("v-tab-item",{key:2},[i("system-status-table",{attrs:{server:"modbus"}})],1)],1)],1)]),e._v(" "),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[e._v("Edit Device")])]),e._v(" "),i("v-card-text",[i("v-container",[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("v-text-field",{staticClass:"centered-input",attrs:{disabled:""},model:{value:e.network.name,callback:function(t){e.$set(e.network,"name",t)},expression:"network.name"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"device name",required:"",rules:[function(){return!e.isExistingvalue(e.editedItem.name,"name",e.editedItem)||"Name Existed"},e.rules.required]},on:{input:e.changeName},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-checkbox",{attrs:{label:"enable"},model:{value:e.editedItem.enable,callback:function(t){e.$set(e.editedItem,"enable",t)},expression:"editedItem.enable"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-checkbox",{attrs:{label:"supports multiple r/w"},model:{value:e.editedItem.supports_multiple_rw,callback:function(t){e.$set(e.editedItem,"supports_multiple_rw",t)},expression:"editedItem.supports_multiple_rw"}})],1),e._v(" "),"TCP"==e.network.type?i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"IP",rules:[function(){return!e.isExistingvalue(e.editedItem.tcp_ip,"tcp_ip",e.editedItem)||"IP Existed"}]},model:{value:e.editedItem.tcp_ip,callback:function(t){e.$set(e.editedItem,"tcp_ip",t)},expression:"editedItem.tcp_ip"}})],1):e._e(),e._v(" "),"TCP"==e.network.type?i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"Port",type:"number"},model:{value:e.editedItem.tcp_port,callback:function(t){e.$set(e.editedItem,"tcp_port",t)},expression:"editedItem.tcp_port"}})],1):e._e(),e._v(" "),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-checkbox",{attrs:{label:"zero mode"},model:{value:e.editedItem.zero_mode,callback:function(t){e.$set(e.editedItem,"zero_mode",t)},expression:"editedItem.zero_mode"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",sm:"6",md:"8"}},[i("v-text-field",{attrs:{label:"ping point (Func:Addr:Len 1:1:1)"},model:{value:e.editedItem.ping_point,callback:function(t){e.$set(e.editedItem,"ping_point",t)},expression:"editedItem.ping_point"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"address",type:"number",rules:[function(){return!e.isExistingvalue(e.editedItem.address,"address",e.editedItem)||"Address Existed"}]},model:{value:e.editedItem.address,callback:function(t){e.$set(e.editedItem,"address",t)},expression:"editedItem.address"}})],1)],1)],1)],1)],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),e._v(" "),i("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!e.valid},on:{click:function(t){return e.updateDevice(e.editedItem)}}},[e._v("Save")])],1)],1)],1),e._v(" "),i("confirm-dialog",{attrs:{"is-open":e.dialogDelete,"on-close":e.closeDelete,"on-confirm":e.confirm,"dialog-text":"Do you want to delete ?"}}),e._v(" "),i("v-dialog",{attrs:{width:"300px"},model:{value:e.dialogMassEdit,callback:function(t){e.dialogMassEdit=t},expression:"dialogMassEdit"}},[i("v-card",[i("v-card-title",[e._v("Mass Edit")]),e._v(" "),i("v-card-text",["boolean"==typeof e.editAll[e.editField]?i("v-checkbox",{attrs:{label:e.toUpperTextKey(e.editField)},model:{value:e.editAll[e.editField],callback:function(t){e.$set(e.editAll,e.editField,t)},expression:"editAll[editField]"}}):e._e(),e._v(" "),"number"==typeof e.editAll[e.editField]?i("v-text-field",{attrs:{min:"0",label:e.toUpperTextKey(e.editField),type:"number"},on:{input:function(t){return e.numberChange()}},model:{value:e.editAll[e.editField],callback:function(t){e.$set(e.editAll,e.editField,e._n(t))},expression:"editAll[editField]"}}):e._e(),e._v(" "),"string"==typeof e.editAll[e.editField]?i("v-text-field",{attrs:{label:e.toUpperTextKey(e.editField)},model:{value:e.editAll[e.editField],callback:function(t){e.$set(e.editAll,e.editField,t)},expression:"editAll[editField]"}}):e._e()],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"darken-1",text:""},on:{click:function(t){e.dialogMassEdit=!1}}},[e._v("Close")]),e._v(" "),i("v-btn",{attrs:{color:"primary darken-1",text:""},on:{click:function(t){return e.saveMassEdit(e.editAll[e.editField],e.editField)}}},[e._v("Save")])],1)],1)],1)],1)}),[],!1,null,"66e94bcc",null);t.default=T.exports}}]);
//# sourceMappingURL=42.e45f7489c0b381e08124.js.map