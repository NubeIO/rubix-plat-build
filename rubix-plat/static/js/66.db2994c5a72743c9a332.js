(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{CY4P:function(e,t,n){"use strict";n.r(t);var i=n("/9Wh"),a=n.n(i),r=n("t3kO"),o=n.n(r),l=n("OBCi"),s=n.n(l),c=n("06Hw"),u=n.n(c),d=n("YYXh"),v=n.n(d),p=n("PSh9"),m=n.n(p),f=n("TcPG"),_=n.n(f),h=n("tZmG"),b=n.n(h),y=n("snOE"),x=n.n(y),g=n("Kz1y"),k=n.n(g),I=n("uzYq"),w=n("yEOx"),E=n.n(w),$=n("8q1a"),T=n("2vBj"),C=n("lkCm"),P=n("Tv0g"),D=n("lCQ+"),A=(n("8kd7"),n("YFGR")),S=n("iYCm"),F=n("A5Vd"),O=n("sJl1"),V=n("+n12"),M={components:{MqttConsole:$.a,RightSidebar:T.a,ConfirmDialog:C.a,RdPointTags:A.a,SystemStatusTable:P.a,BreadcrumbsDirection:D.a},data:function(){return{toUpperTextKey:V.r,conventionNaming:V.a,tableProps:k()({},F.d),topic:O.l,rules:k()({},O.k),pointHeaders:[].concat(x()(O.j)),advancedHeaders:[].concat(x()(O.g)),editAll:k()({},O.i),dialog:!1,dialogDelete:!1,dialogMassEdit:!1,tab:0,action:"",network:{},valid:!1,selected:[],editedItem:{},search:"",editField:"",intervalId:null,pointsOfDevice:[],dataTable:{},dirs:[{text:"NETWORKS",link:"/rubix-driver/networks",disabled:!1},{text:"POINTS VIEW",disabled:!0}],advancedView:!1,networks:[],tags:[],panel:[0],typeNames:Object(S.a)(),loadingData:!1}},computed:{debugSubscriptions:function(){var e=this.$store.state.mqttConfig.debugSubscriptions;return e.driverRubix},setting:function(){return this.$store.state.setting},networksData:function(){return this.$store.state.rdNetworks}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()},"$route.params.id":function(e,t){e!=t&&this.getAllPoints()},tags:function(e){this.onChangeTag(e)}},beforeRouteLeave:function(e,t,n){var i=this;clearInterval(this.intervalId),this.$store.commit("showOverlay"),I.a.post("mqtt/unsubscribe",{topic:this.topic}).finally((function(){i.$store.commit("hideOverlay"),n()}))},mounted:function(){var e=this;this.getAllPoints(),this.setting.refreshTime&&this.setting.enableAutoRefresh&&(this.intervalId=setInterval((function(){e.getAllPoints(),e.setting.toastAutoRefresh&&e.$toasted.show("Automatically refresh every "+e.setting.refreshTime+"ms",{type:"info"})}),this.setting.refreshTime))},methods:{getAllPoints:function(){var e=this;this.loadingData=!0,I.a.get("point-server/generic/network?with_children=true&points=true").then((function(t){e.networks=t,e.getDataTable(t)})).finally((function(){e.loadingData=!1}))},getDataTable:function(e){var t=this;this.dataTable={},e.forEach((function(e){t.dataTable[e.name]=[],e.devices.forEach((function(n){if(n.points.length>0){var i=n.points.map((function(t){var i=b()(t.point_store);return i&&i.length>0&&i.forEach((function(i){var a;t=k()({},t,(a={},_()(a,i,t.point_store[i]),_()(a,"category","DEVICE: "+n.name),_()(a,"network_name",e.name),a))})),delete t.point_store,delete t.point_uuid,t}));t.dataTable[e.name]=t.dataTable[e.name].concat(i)}}))}))},editItem:function(e){this.editedIndex=this.dataTable[e.network_name].findIndex((function(t){return t.uuid==e.uuid})),this.pointsOfDevice=this.dataTable[e.network_name].filter((function(t){return t.device_uuid===e.device_uuid})),this.editedItem=m()({},e);var t=[];if(e.tags){var n=JSON.parse(e.tags);for(var i in n)t.push({key:i,value:n[i]})}this.tags=t,this.dialog=!0},clickDelete:function(e){var t=this;return v()(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.action="deleteSingle",t.dialogDelete=!0,t.editedItem=e;case 3:case"end":return n.stop()}}),n,t)})))()},clickDeleteMulti:function(){var e=this;return v()(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.dialogDelete=!0,e.action="deleteSelected";case 2:case"end":return t.stop()}}),t,e)})))()},deleteSingle:function(){var e=this;return v()(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.editedIndex=e.dataTable[e.editedItem.network_name].indexOf(e.editedItem),e.dataTable[e.editedItem.network_name].splice(e.editedIndex,1),e.dataTable[e.editedItem.network_name]=[].concat(x()(e.dataTable[e.editedItem.network_name])),t.next=5,I.a.delete("point-server/generic/point/"+e.editedItem.uuid);case 5:e.closeDelete();case 6:case"end":return t.stop()}}),t,e)})))()},deleteSelected:function(){var e=this;return v()(u.a.mark((function t(){var n,i,a,r,l,c,d;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=[],i=!0,a=!1,r=void 0,t.prev=4,l=o()(e.selected);!(i=(c=l.next()).done);i=!0)d=c.value,e.editedItem=d,n.push(e.deleteSingle());t.next=12;break;case 8:t.prev=8,t.t0=t.catch(4),a=!0,r=t.t0;case 12:t.prev=12,t.prev=13,!i&&l.return&&l.return();case 15:if(t.prev=15,!a){t.next=18;break}throw r;case 18:return t.finish(15);case 19:return t.finish(12);case 20:return t.next=22,s.a.all(n);case 22:e.selected=[];case 23:case"end":return t.stop()}}),t,e,[[4,8,12,20],[13,,15,19]])})))()},confirm:function(){var e=this;return v()(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e[e.action]();case 2:e.dialog=!1,e.action="";case 4:case"end":return t.stop()}}),t,e)})))()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem={},e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem={},e.editedIndex=-1}))},isExistingvalue:function(e,t,n){var i=E()(this.pointsOfDevice),a=i.findIndex((function(e){return e.uuid==n.uuid}));return i.splice(a,1),null!=i.find((function(n){return n[t]==e}))},updatePoint:function(e,t,n){var i=this;return v()(u.a.mark((function a(){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:try{i.$refs.comboBox&&i.$refs.comboBox.blur(),i.$nextTick(v()(u.a.mark((function n(){var a,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.fallback_value=isNaN(parseFloat(e.fallback_value))?null:parseFloat(e.fallback_value),n.next=3,I.a.put("point-server/generic/point/"+e.uuid,e);case 3:a=n.sent,r=i.dataTable[e.network_name].findIndex((function(e){return e.uuid==a.uuid})),m()(i.dataTable[e.network_name][r],a),i.$toasted.show("update success"),i.close(),t&&t();case 9:case"end":return n.stop()}}),n,i)}))))}catch(e){n&&n()}case 1:case"end":return a.stop()}}),a,i)})))()},backgroundColor:function(e){return e.fault?"nubeYellow":e.enable?"":"nubeLightGrey"},saveMassEdit:function(e,t){var n=this;return v()(u.a.mark((function i(){var a,r,l,c,d,v,p,m;return u.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:for(i.prev=0,a=[],r=function(i){i[t]=e,a.push(new s.a((function(e,t){return n.updatePoint(i,e,t)})))},l=!0,c=!1,d=void 0,i.prev=6,v=o()(n.selected);!(l=(p=v.next()).done);l=!0)m=p.value,r(m);i.next=14;break;case 10:i.prev=10,i.t0=i.catch(6),c=!0,d=i.t0;case 14:i.prev=14,i.prev=15,!l&&v.return&&v.return();case 17:if(i.prev=17,!c){i.next=20;break}throw d;case 20:return i.finish(17);case 21:return i.finish(14);case 22:return i.next=24,s.a.all(a);case 24:n.dialogMassEdit=!1,i.next=29;break;case 27:i.prev=27,i.t1=i.catch(0);case 29:case"end":return i.stop()}}),i,n,[[0,27],[6,10,14,22],[15,,17,21]])})))()},openMassEditDialog:function(e){var t=this;return v()(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(t.selected.length<1)){n.next=2;break}return n.abrupt("return",t.$toasted.show("Please select item first!",{type:"error"}));case 2:t.dialogMassEdit=!0,t.editField=e,t.editAll=k()({},O.i),t.tags=[];case 6:case"end":return n.stop()}}),n,t)})))()},numberChange:function(){if(!this.editAll[this.editField]&&"fallback_value"!==this.editField)return this.editAll[this.editField]=0},cancelEdit:function(){},openEdit:function(e){this.editedIndex=this.dataTable[e.network_name].indexOf(e),this.editedItem=m()({},e)},closeEdit:function(){this.editedIndex=-1,this.editedItem={}},onClickRefresh:function(){this.getAllPoints(),this.$toasted.show("successfully refresh",{type:"success"})},check:function(e,t){this.selected=e?[].concat(x()(this.selected)).concat(t):[].concat(x()(this.selected)).filter((function(e){return e.device_uuid!=t[0].device_uuid}))},onChangeTag:function(e){if(0!=e.length){var t="";if(Array.isArray(e)){var n={},i=!0,r=!1,l=void 0;try{for(var s,c=o()(e);!(i=(s=c.next()).done);i=!0){var u=s.value;u.key&&u.value&&(n[u.key]=u.value)}}catch(e){r=!0,l=e}finally{try{!i&&c.return&&c.return()}finally{if(r)throw l}}t=a()(k()({},n))}else t=a()(e);this.editAll[this.editField]=t,this.editedItem.tags=t}},onChangeTypeName:function(e){if(this.typeNames.includes(e)){var t=this.tags=[],n=Object(S.b)(e),i=!0,a=!1,r=void 0;try{for(var l,s=o()(n);!(i=(l=s.next()).done);i=!0){var c=l.value;t.push({key:c,value:c})}}catch(e){a=!0,r=e}finally{try{!i&&s.return&&s.return()}finally{if(a)throw r}}this.tags=t}else this.tags=[]}}},N=n("psIG"),K=Object(N.a)(M,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("right-sidebar",{attrs:{menuItems:e.networksData,serverRoute:"rubix-driver"}}),e._v(" "),n("v-main",[n("div",{staticClass:"table-styling"},[n("v-tabs",{attrs:{right:"",color:e.$vuetify.theme.dark?"":"nubeGreen"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("breadcrumbs-direction",{attrs:{items:e.dirs}}),e._v(" "),n("v-tab",{key:0,staticStyle:{"margin-left":"auto"}},[e._v(" Data ")]),e._v(" "),n("v-tab",{key:1},[e._v(" Debug Messages ")]),e._v(" "),n("v-tab",{key:2},[e._v(" System Status ")])],1),e._v(" "),n("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab-item",{key:0},[n("v-expansion-panels",{attrs:{multiple:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},e._l(e.networks,(function(t,i){return n("v-expansion-panel",{key:i},[n("v-expansion-panel-header",{attrs:{"hide-actions":""},scopedSlots:e._u([{key:"default",fn:function(i){var a=i.open;return[n("b",[e._v("NETWORK: "+e._s(t.name))]),e._v(" "),n("v-icon",{staticStyle:{"text-align":"end",display:"block"}},[e._v("\n                    "+e._s(a?"mdi-chevron-down":"mdi-chevron-right")+"\n                  ")])]}}],null,!0)}),e._v(" "),n("v-expansion-panel-content",[e.dataTable[t.name].length>0?n("v-data-table",{staticClass:"elevation-1 text-left",attrs:{headers:e.advancedView?e.advancedHeaders:e.pointHeaders,items:e.dataTable[t.name],"item-key":"uuid","show-select":"","item-class":e.backgroundColor,"footer-props":e.tableProps.FOOTER_PROPS,itemsPerPage:e.tableProps.ITEMS_PER_PAGE,search:e.search,"sort-by":"uuid","group-by":"category","show-group-by":""},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[e._v("Rubix Points View")]),e._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),n("div",{staticClass:"text-left pa-2"},[n("v-btn",{staticClass:"mr-1 btn-height-22 white--text",attrs:{"x-small":"",color:"primary"},on:{click:e.onClickRefresh}},[e._v("Refresh"),n("v-icon",{attrs:{"x-small":"",right:""}},[e._v("mdi-refresh")])],1),e._v(" "),n("v-btn",{staticClass:"mr-1 btn-height-22 white--text",attrs:{"x-small":"",color:"error",disabled:0===e.selected.length},on:{click:e.clickDeleteMulti}},[e._v("Delete"),n("v-icon",{attrs:{"x-small":"",right:""}},[e._v("mdi-delete")])],1),e._v(" "),n("v-btn",{staticClass:"mr-1 btn-height-22 white--text",attrs:{"x-small":"",color:"purple"},on:{click:function(t){e.advancedView=!e.advancedView}}},[e._v(e._s(e.advancedView?"Simple":"Advanced")+" View")])],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]},proxy:!0},{key:"group.header",fn:function(t){var i=t.group,a=t.headers,r=t.toggle,o=t.isOpen,l=t.items;return[n("td",{attrs:{colspan:a.length}},[n("div",{staticClass:"row",staticStyle:{"align-items":"center"}},[n("v-btn",{ref:i,refInFor:!0,attrs:{"x-small":"",icon:""},on:{click:r}},[n("v-icon",[e._v(e._s(o?"mdi-chevron-double-down":"mdi-chevron-double-right"))])],1),e._v("    \n                        "),n("v-checkbox",{attrs:{value:e.selected.filter((function(e){return e.device_uuid===l[0].device_uuid})).length==l.length},on:{change:function(t){return e.check(t,l)}}}),e._v(" "),n("router-link",{staticClass:"font-weight-bold text-style",attrs:{to:"/rubix-driver/devices/"+l[0].device_uuid+"/points"}},[e._v(" "+e._s(i)+" ")])],1)])]}},{key:"item.created_on",fn:function(t){var n=t.item;return[e._v("\n                    "+e._s(e._f("timezone")(n.created_on))+"\n                  ")]}},{key:"item.updated_on",fn:function(t){var n=t.item;return[e._v("\n                    "+e._s(e._f("timezone")(n.updated_on))+"\n                  ")]}},{key:"item.ts_value",fn:function(t){var n=t.item;return[e._v("\n                    "+e._s(e._f("timezone")(n.ts_value))+"\n                  ")]}},{key:"item.enable",fn:function(t){var i=t.item;return[n("v-checkbox",{on:{click:function(t){return e.updatePoint(i)}},model:{value:i.enable,callback:function(t){e.$set(i,"enable",t)},expression:"item.enable"}})]}},{key:"item.cov_threshold",fn:function(t){var i=t.item;return[n("v-edit-dialog",{attrs:{"return-value":i.cov_threshold,large:""},on:{"update:returnValue":function(t){return e.$set(i,"cov_threshold",t)},"update:return-value":function(t){return e.$set(i,"cov_threshold",t)},save:function(t){return e.updatePoint(i)},cancel:e.cancelEdit,open:function(t){return e.openEdit(i)},close:e.closeEdit},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{"single-line":"",type:"number",min:"0"},on:{input:function(t){return e.numberChange()}},model:{value:i.cov_threshold,callback:function(t){e.$set(i,"cov_threshold",t)},expression:"item.cov_threshold"}})]},proxy:!0}],null,!0)},[n("b",[e._v(e._s(i.cov_threshold))])])]}},{key:"item.history_enable",fn:function(t){var i=t.item;return[n("v-checkbox",{on:{click:function(t){return e.updatePoint(i)}},model:{value:i.history_enable,callback:function(t){e.$set(i,"history_enable",t)},expression:"item.history_enable"}})]}},{key:"item.history_interval",fn:function(t){var i=t.item;return[n("v-edit-dialog",{attrs:{"return-value":i.history_interval,large:""},on:{"update:returnValue":function(t){return e.$set(i,"history_interval",t)},"update:return-value":function(t){return e.$set(i,"history_interval",t)},save:function(t){return e.updatePoint(i)},cancel:e.cancelEdit,open:function(t){return e.openEdit(i)},close:e.closeEdit},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{"single-line":"",type:"number",min:"0"},on:{input:function(t){return e.numberChange()}},model:{value:i.history_interval,callback:function(t){e.$set(i,"history_interval",t)},expression:"item.history_interval"}})]},proxy:!0}],null,!0)},[n("b",[e._v(e._s(i.history_interval))])])]}},{key:"item.history_type",fn:function(t){var i=t.item;return[n("v-edit-dialog",{attrs:{"return-value":i.history_type,large:""},on:{"update:returnValue":function(t){return e.$set(i,"history_type",t)},"update:return-value":function(t){return e.$set(i,"history_type",t)},save:function(t){return e.updatePoint(i)},cancel:e.cancelEdit,open:function(t){return e.openEdit(i)},close:e.closeEdit},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-select",{attrs:{items:["COV","INTERVAL","COV_AND_INTERVAL"]},model:{value:i.history_type,callback:function(t){e.$set(i,"history_type",t)},expression:"item.history_type"}})]},proxy:!0}],null,!0)},[n("b",[e._v(e._s(i.history_type))])])]}},{key:"item.input_min",fn:function(t){var i=t.item;return[n("v-edit-dialog",{attrs:{"return-value":i.input_min,large:""},on:{"update:returnValue":function(t){return e.$set(i,"input_min",t)},"update:return-value":function(t){return e.$set(i,"input_min",t)},save:function(t){return e.updatePoint(i)},cancel:e.cancelEdit,open:function(t){return e.openEdit(i)},close:e.closeEdit},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{"single-line":"",type:"number",min:"0"},on:{input:function(t){return e.numberChange()}},model:{value:i.input_min,callback:function(t){e.$set(i,"input_min",t)},expression:"item.input_min"}})]},proxy:!0}],null,!0)},[n("b",[e._v(e._s(i.input_min))])])]}},{key:"item.input_max",fn:function(t){var i=t.item;return[n("v-edit-dialog",{attrs:{"return-value":i.input_max,large:""},on:{"update:returnValue":function(t){return e.$set(i,"input_max",t)},"update:return-value":function(t){return e.$set(i,"input_max",t)},save:function(t){return e.updatePoint(i)},cancel:e.cancelEdit,open:function(t){return e.openEdit(i)},close:e.closeEdit},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{"single-line":"",type:"number",min:"0"},on:{input:function(t){return e.numberChange()}},model:{value:i.input_max,callback:function(t){e.$set(i,"input_max",t)},expression:"item.input_max"}})]},proxy:!0}],null,!0)},[n("b",[e._v(e._s(i.input_max))])])]}},{key:"item.scale_min",fn:function(t){var i=t.item;return[n("v-edit-dialog",{attrs:{"return-value":i.scale_min,large:""},on:{"update:returnValue":function(t){return e.$set(i,"scale_min",t)},"update:return-value":function(t){return e.$set(i,"scale_min",t)},save:function(t){return e.updatePoint(i)},cancel:e.cancelEdit,open:function(t){return e.openEdit(i)},close:e.closeEdit},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{"single-line":"",type:"number",min:"0"},on:{input:function(t){return e.numberChange()}},model:{value:i.scale_min,callback:function(t){e.$set(i,"scale_min",t)},expression:"item.scale_min"}})]},proxy:!0}],null,!0)},[n("b",[e._v(e._s(i.scale_min))])])]}},{key:"item.scale_max",fn:function(t){var i=t.item;return[n("v-edit-dialog",{attrs:{"return-value":i.scale_max,large:""},on:{"update:returnValue":function(t){return e.$set(i,"scale_max",t)},"update:return-value":function(t){return e.$set(i,"scale_max",t)},save:function(t){return e.updatePoint(i)},cancel:e.cancelEdit,open:function(t){return e.openEdit(i)},close:e.closeEdit},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{"single-line":"",type:"number",min:"0"},on:{input:function(t){return e.numberChange()}},model:{value:i.scale_max,callback:function(t){e.$set(i,"scale_max",t)},expression:"item.scale_max"}})]},proxy:!0}],null,!0)},[n("b",[e._v(e._s(i.scale_max))])])]}},{key:"item.value_round",fn:function(t){var i=t.item;return[n("v-edit-dialog",{attrs:{"return-value":i.value_round,large:""},on:{"update:returnValue":function(t){return e.$set(i,"value_round",t)},"update:return-value":function(t){return e.$set(i,"value_round",t)},save:function(t){return e.updatePoint(i)},cancel:e.cancelEdit,open:function(t){return e.openEdit(i)},close:e.closeEdit},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{"single-line":"",type:"number",min:"0"},on:{input:function(t){return e.numberChange()}},model:{value:i.value_round,callback:function(t){e.$set(i,"value_round",t)},expression:"item.value_round"}})]},proxy:!0}],null,!0)},[n("b",[e._v(e._s(i.value_round))])])]}},{key:"item.value_operation",fn:function(t){var i=t.item;return[n("v-edit-dialog",{attrs:{"return-value":i.value_operation,large:""},on:{"update:returnValue":function(t){return e.$set(i,"value_operation",t)},"update:return-value":function(t){return e.$set(i,"value_operation",t)},save:function(t){return e.updatePoint(i)},cancel:e.cancelEdit,open:function(t){return e.openEdit(i)},close:e.closeEdit},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{"single-line":"",type:"string"},model:{value:i.value_operation,callback:function(t){e.$set(i,"value_operation",t)},expression:"item.value_operation"}})]},proxy:!0}],null,!0)},[n("b",[e._v(e._s(i.value_operation))])])]}},{key:"item.writable",fn:function(t){var i=t.item;return[n("v-checkbox",{on:{click:function(t){return e.updatePoint(i)}},model:{value:i.writable,callback:function(t){e.$set(i,"writable",t)},expression:"item.writable"}})]}},{key:"item.tags",fn:function(t){var i=t.item;return[n("ul",{staticClass:"overflow-td",staticStyle:{cursor:"pointer"},on:{click:function(t){return e.editItem(i)}}},e._l(i.tags?Object.keys(JSON.parse(i.tags)):[],(function(t,a){return n("li",{key:a},[e._v("\n                        "+e._s(t)+" : "+e._s(JSON.parse(i.tags)[t])+"\n                      ")])})),0)]}},{key:"item.priority_array_write",fn:function(t){var i=t.item;return[n("div",{staticClass:"overflow-td"},e._l(i.priority_array_write?Object.keys(i.priority_array_write):[],(function(t,a){return n("span",{key:a},[e._v("\n                        "+e._s(t)+": "),n("span",{staticClass:"value"},[e._v(e._s(i.priority_array_write[t]||0==i.priority_array_write[t]?i.priority_array_write[t]:"null"))]),e._v(", \n                      ")])})),0)]}},{key:"item.disable_mqtt",fn:function(t){var i=t.item;return[n("v-checkbox",{on:{click:function(t){return e.updatePoint(i)}},model:{value:i.disable_mqtt,callback:function(t){e.$set(i,"disable_mqtt",t)},expression:"item.disable_mqtt"}})]}},{key:"item.actions",fn:function(t){var i=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"primary"},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-pencil ")]),e._v(" "),n("v-icon",{attrs:{small:"",color:"error"},on:{click:function(t){return e.clickDelete(i)}}},[e._v(" mdi-delete ")])]}},{key:"header.enable",fn:function(){return[e._v("\n                    "+e._s(e.toUpperTextKey("enable"))+" \n                    "),n("v-icon",{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.openMassEditDialog("enable"),t.stopPropagation()}}},[e._v("mdi-pencil")]),e._v(" \n                  ")]},proxy:!0},{key:"header.history_enable",fn:function(){return[e._v("\n                    "+e._s(e.toUpperTextKey("history_enable"))+" \n                    "),n("v-icon",{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.openMassEditDialog("history_enable"),t.stopPropagation()}}},[e._v("mdi-pencil")]),e._v(" \n                  ")]},proxy:!0},{key:"header.history_interval",fn:function(){return[e._v("\n                    "+e._s(e.toUpperTextKey("history_interval"))+" \n                    "),n("v-icon",{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.openMassEditDialog("history_interval"),t.stopPropagation()}}},[e._v("mdi-pencil")]),e._v(" \n                  ")]},proxy:!0},{key:"header.history_type",fn:function(){return[e._v("\n                    "+e._s(e.toUpperTextKey("history_type"))+" \n                    "),n("v-icon",{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.openMassEditDialog("history_type"),t.stopPropagation()}}},[e._v("mdi-pencil")]),e._v(" \n                  ")]},proxy:!0},{key:"header.cov_threshold",fn:function(){return[e._v("\n                    "+e._s(e.toUpperTextKey("cov_threshold"))+" \n                    "),n("v-icon",{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.openMassEditDialog("cov_threshold"),t.stopPropagation()}}},[e._v("mdi-pencil")]),e._v(" \n                  ")]},proxy:!0},{key:"header.input_min",fn:function(){return[e._v("\n                    "+e._s(e.toUpperTextKey("input_min"))+" \n                    "),n("v-icon",{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.openMassEditDialog("input_min"),t.stopPropagation()}}},[e._v("mdi-pencil")]),e._v(" \n                  ")]},proxy:!0},{key:"header.input_max",fn:function(){return[e._v("\n                    "+e._s(e.toUpperTextKey("input_max"))+" \n                    "),n("v-icon",{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.openMassEditDialog("input_max"),t.stopPropagation()}}},[e._v("mdi-pencil")]),e._v(" \n                  ")]},proxy:!0},{key:"header.scale_min",fn:function(){return[e._v("\n                    "+e._s(e.toUpperTextKey("scale_min"))+" \n                    "),n("v-icon",{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.openMassEditDialog("scale_min"),t.stopPropagation()}}},[e._v("mdi-pencil")]),e._v(" \n                  ")]},proxy:!0},{key:"header.scale_max",fn:function(){return[e._v("\n                    "+e._s(e.toUpperTextKey("scale_max"))+" \n                    "),n("v-icon",{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.openMassEditDialog("scale_max"),t.stopPropagation()}}},[e._v("mdi-pencil")]),e._v(" \n                  ")]},proxy:!0},{key:"header.value_operation",fn:function(){return[e._v("\n                    "+e._s(e.toUpperTextKey("value_operation"))+" \n                    "),n("v-icon",{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.openMassEditDialog("value_operation"),t.stopPropagation()}}},[e._v("mdi-pencil")]),e._v(" \n                  ")]},proxy:!0},{key:"header.value_round",fn:function(){return[e._v("\n                    "+e._s(e.toUpperTextKey("value_round"))+" \n                    "),n("v-icon",{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.openMassEditDialog("value_round"),t.stopPropagation()}}},[e._v("mdi-pencil")]),e._v(" \n                  ")]},proxy:!0},{key:"header.writable",fn:function(){return[e._v("\n                    "+e._s(e.toUpperTextKey("writable"))+" \n                    "),n("v-icon",{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.openMassEditDialog("writable"),t.stopPropagation()}}},[e._v("mdi-pencil")]),e._v(" \n                  ")]},proxy:!0},{key:"header.tags",fn:function(){return[e._v("\n                    "+e._s(e.toUpperTextKey("tags"))+" \n                    "),n("v-icon",{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.openMassEditDialog("tags"),t.stopPropagation()}}},[e._v("mdi-pencil")]),e._v(" \n                  ")]},proxy:!0},{key:"header.disable_mqtt",fn:function(){return[e._v("\n                    "+e._s(e.toUpperTextKey("disable_mqtt"))+" \n                    "),n("v-icon",{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.openMassEditDialog("disable_mqtt"),t.stopPropagation()}}},[e._v("mdi-pencil")]),e._v(" \n                  ")]},proxy:!0},{key:"header.fallback_value",fn:function(){return[e._v("\n                    "+e._s(e.toUpperTextKey("fallback_value"))+" \n                    "),n("v-icon",{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.openMassEditDialog("fallback_value"),t.stopPropagation()}}},[e._v("mdi-pencil")]),e._v(" \n                  ")]},proxy:!0}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}):n("div",[e._v("No data")])],1)],1)})),1),e._v(" "),n("v-overlay",{attrs:{value:e.loadingData}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64",color:"primary"}})],1)],1),e._v(" "),n("v-tab-item",{key:1},[n("mqtt-console",{attrs:{editable:!1,subscriptions:e.debugSubscriptions}})],1),e._v(" "),n("v-tab-item",{key:2},[n("system-status-table",{attrs:{server:"modbus"}})],1)],1)],1)]),e._v(" "),n("v-dialog",{attrs:{"max-width":"700px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Edit Point")])]),e._v(" "),n("v-card-text",[n("v-container",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-combobox",{ref:"comboBox",attrs:{label:"Point name",items:e.typeNames,required:"",rules:[function(){return!e.isExistingvalue(e.editedItem.name,"name",e.editedItem)||"Name Existed"},e.rules.required]},on:{change:e.onChangeTypeName,input:function(t){return e.editedItem.name=e.conventionNaming(t,e.setting)}},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[n("v-checkbox",{attrs:{label:"Enable"},model:{value:e.editedItem.enable,callback:function(t){e.$set(e.editedItem,"enable",t)},expression:"editedItem.enable"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[n("v-checkbox",{attrs:{label:"History enable"},model:{value:e.editedItem.history_enable,callback:function(t){e.$set(e.editedItem,"history_enable",t)},expression:"editedItem.history_enable"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[n("v-checkbox",{attrs:{label:"Writable"},model:{value:e.editedItem.writable,callback:function(t){e.$set(e.editedItem,"writable",t)},expression:"editedItem.writable"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[n("v-checkbox",{attrs:{label:"disable mqtt"},model:{value:e.editedItem.disable_mqtt,callback:function(t){e.$set(e.editedItem,"disable_mqtt",t)},expression:"editedItem.disable_mqtt"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[n("v-select",{attrs:{items:["COV","INTERVAL","COV_AND_INTERVAL"],label:"History type"},model:{value:e.editedItem.history_type,callback:function(t){e.$set(e.editedItem,"history_type",t)},expression:"editedItem.history_type"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[n("v-text-field",{attrs:{label:"History interval",type:"number",min:"0"},on:{input:function(t){return e.numberChange()}},model:{value:e.editedItem.history_interval,callback:function(t){e.$set(e.editedItem,"history_interval",t)},expression:"editedItem.history_interval"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[n("v-text-field",{attrs:{label:"Cov threshold",type:"number",min:"0"},on:{input:function(t){return e.numberChange()}},model:{value:e.editedItem.cov_threshold,callback:function(t){e.$set(e.editedItem,"cov_threshold",t)},expression:"editedItem.cov_threshold"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[n("v-text-field",{attrs:{label:"math operation"},model:{value:e.editedItem.value_operation,callback:function(t){e.$set(e.editedItem,"value_operation",t)},expression:"editedItem.value_operation"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[n("v-text-field",{attrs:{label:"Input min",type:"number",min:"0"},on:{input:function(t){return e.numberChange()}},model:{value:e.editedItem.input_min,callback:function(t){e.$set(e.editedItem,"input_min",t)},expression:"editedItem.input_min"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[n("v-text-field",{attrs:{label:"Input max",type:"number",min:"0"},on:{input:function(t){return e.numberChange()}},model:{value:e.editedItem.input_max,callback:function(t){e.$set(e.editedItem,"input_max",t)},expression:"editedItem.input_max"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[n("v-text-field",{attrs:{label:"Scale min",type:"number",min:"0"},on:{input:function(t){return e.numberChange()}},model:{value:e.editedItem.scale_min,callback:function(t){e.$set(e.editedItem,"scale_min",t)},expression:"editedItem.scale_min"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[n("v-text-field",{attrs:{label:"Scale max",type:"number",min:"0"},on:{input:function(t){return e.numberChange()}},model:{value:e.editedItem.scale_max,callback:function(t){e.$set(e.editedItem,"scale_max",t)},expression:"editedItem.scale_max"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[n("v-text-field",{attrs:{label:"Value round",type:"number",min:"0"},on:{input:function(t){return e.numberChange()}},model:{value:e.editedItem.value_round,callback:function(t){e.$set(e.editedItem,"value_round",t)},expression:"editedItem.value_round"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Fallback Value",type:"number",hint:"The empty value will return null"},model:{value:e.editedItem.fallback_value,callback:function(t){e.$set(e.editedItem,"fallback_value",t)},expression:"editedItem.fallback_value"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{staticClass:"centered-input",attrs:{value:"Tags",disabled:""}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("rd-point-tags",{attrs:{"on-change":e.onChangeTag,items:e.tags}})],1)],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!e.valid},on:{click:function(t){return e.updatePoint(e.editedItem)}}},[e._v(" Save ")])],1)],1)],1),e._v(" "),n("confirm-dialog",{attrs:{"is-open":e.dialogDelete,"on-close":e.closeDelete,"on-confirm":e.confirm,"dialog-text":"Do you want to delete ?"}}),e._v(" "),n("v-dialog",{attrs:{width:"300px"},model:{value:e.dialogMassEdit,callback:function(t){e.dialogMassEdit=t},expression:"dialogMassEdit"}},[n("v-card",[n("v-card-title",[e._v("Mass Edit")]),e._v(" "),n("v-card-text",["tags"===e.editField?n("rd-point-tags",{attrs:{"on-change":e.onChangeTag,items:e.tags}}):e._e(),e._v(" "),"history_type"===e.editField?n("v-select",{attrs:{items:["COV","INTERVAL","COV_AND_INTERVAL"],label:e.toUpperTextKey(e.editField)},model:{value:e.editAll[e.editField],callback:function(t){e.$set(e.editAll,e.editField,t)},expression:"editAll[editField]"}}):e._e(),e._v(" "),"boolean"==typeof e.editAll[e.editField]?n("v-checkbox",{attrs:{label:e.toUpperTextKey(e.editField)},model:{value:e.editAll[e.editField],callback:function(t){e.$set(e.editAll,e.editField,t)},expression:"editAll[editField]"}}):e._e(),e._v(" "),"number"==typeof e.editAll[e.editField]?n("v-text-field",{attrs:{min:"0",label:e.toUpperTextKey(e.editField),type:"number"},on:{input:function(t){return e.numberChange()}},model:{value:e.editAll[e.editField],callback:function(t){e.$set(e.editAll,e.editField,e._n(t))},expression:"editAll[editField]"}}):e._e(),e._v(" "),"string"==typeof e.editAll[e.editField]&&"history_type"!==e.editField&&"tags"!==e.editField?n("v-text-field",{attrs:{label:e.toUpperTextKey(e.editField)},model:{value:e.editAll[e.editField],callback:function(t){e.$set(e.editAll,e.editField,t)},expression:"editAll[editField]"}}):e._e()],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"darken-1",text:""},on:{click:function(t){e.dialogMassEdit=!1}}},[e._v("Close")]),e._v(" "),n("v-btn",{attrs:{color:"primary darken-1",text:""},on:{click:function(t){return e.saveMassEdit(e.editAll[e.editField],e.editField)}}},[e._v("Save")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=K.exports},"lCQ+":function(e,t,n){"use strict";var i={name:"breadcrumbs-direction",props:["items"]},a=n("psIG"),r=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-breadcrumbs",{attrs:{items:e.items},scopedSlots:e._u([{key:"item",fn:function(t){var i=t.item;return[n("v-breadcrumbs-item",{attrs:{to:i.link,disabled:i.disabled,exact:""}},[e._v("\n      "+e._s(i.text)+"\n    ")])]}}])})}),[],!1,null,null,null);t.a=r.exports}}]);
//# sourceMappingURL=66.db2994c5a72743c9a332.js.map