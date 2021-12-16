(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2kAK":function(e,t,i){"use strict";var n=i("Ui9F"),a=i("Kz1y"),s=i.n(a),l=i("juCZ"),o=i("BHGY"),r=i("ypiT"),d={name:"headerSelectorDialog",props:["tableName","fieldKeys","closeDialog","gridConfigChange"],components:{Draggable:i.n(r).a},data:function(){return{fields:[],isFormFieldCreated:!1,valid:!1,availableFields:[],selectedFields:[]}},mounted:function(){this.fetchHeadersConfig()},methods:{fetchHeadersConfig:function(){var e=this;return o.a(this.tableName).then((function(t){return e.mapsHeadersToFormFields(t),t}))},mapsHeadersToFormFields:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e&&e.hasOwnProperty("headers")&&e.headers&&e.headers.length>0&&e.headers.reduce((function(e,t){return e[t.name]=t,e}),{})||{};this.fields=(this.fieldKeys||[]).map((function(e){return{name:e,isEnabled:t&&t[e]&&t[e].isEnabled||!1,displayName:t&&t[e]&&t[e].displayName||l.b(e),isEditMode:!1}})),this.availableFields=this.fields.filter((function(e){return!e.isEnabled})),this.selectedFields=this.fields.filter((function(e){return e.isEnabled})),this.isFormFieldCreated=!0},onItemDeselect:function(e){this.selectedFields=this.selectedFields.filter((function(t){return t.name!=e.name})),this.availableFields=this.availableFields.concat(e)},onItemSelect:function(e){this.selectedFields=this.selectedFields.concat(e),this.availableFields=this.availableFields.filter((function(t){return t.name!=e.name}))},toggleEditMode:function(e,t){e&&(e.isEditMode=t)},saveConfig:function(){var e=this;this.selectedFields=this.selectedFields.map((function(e){return s()({},e,{isEnabled:!0})})),o.b(this.tableName,this.selectedFields).then((function(){e.$toasted.show("Grid configuration saved"),e.gridConfigChange(),e.fetchHeadersConfig(),e.closeDialog()})).catch((function(t){e.$toasted.show("Grid configuration could not be saved",{type:"error"})}))}}},c=i("psIG"),m=Object(c.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{attrs:{dense:""}},[i("v-card-title",[e._v("Header Selector")]),e._v(" "),i("v-card-text",{attrs:{dense:""}},[i("v-row",{attrs:{dense:""}},[i("v-col",{attrs:{cols:"6"}},[i("v-card",{staticClass:"full-height",attrs:{dense:"",outlined:""}},[i("v-card-text",{staticClass:"full-height"},[i("v-list",{staticClass:"full-height",attrs:{dense:"",subheader:"","two-line":""}},[i("v-subheader",[e._v(" Available columns ")]),e._v(" "),i("draggable",{staticStyle:{"min-height":"10px",height:"100%"},attrs:{options:{group:"name"}},model:{value:e.availableFields,callback:function(t){e.availableFields=t},expression:"availableFields"}},[e._l(e.availableFields,(function(t,n){return[i("v-list-item",{key:t.name,staticClass:"text-left header-selector-list-item",attrs:{dense:"",selectable:""},on:{dblclick:function(){return e.onItemSelect(t)}}},[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:e._s(n+1+". "+t.displayName)}}),e._v(" "),i("v-list-item-subtitle",{domProps:{textContent:e._s(t.name)}})],1)],1)]}))],2)],1)],1)],1)],1),e._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-card",{staticClass:"full-height",attrs:{dense:"",outlined:""}},[i("v-card-text",{staticClass:"full-height"},[i("v-list",{staticClass:"full-height",attrs:{dense:"","two-line":"",subheader:""}},[i("v-subheader",[e._v(" Selected columns ")]),e._v(" "),i("draggable",{staticStyle:{"min-height":"10px",height:"100%"},attrs:{options:{group:"name"}},model:{value:e.selectedFields,callback:function(t){e.selectedFields=t},expression:"selectedFields"}},[e._l(e.selectedFields,(function(t,n){return[t.isEditMode?e._e():i("v-list-item",{key:t.name,staticClass:"text-left header-selector-list-item",attrs:{dense:"",selectable:""}},[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:e._s(n+1+". "+t.displayName)}}),e._v(" "),i("v-list-item-subtitle",{domProps:{textContent:e._s(t.name)}})],1),e._v(" "),i("v-list-item-action",[i("span",[i("v-btn",{attrs:{icon:"","x-small":"",color:"green"},on:{click:function(){return e.toggleEditMode(t,!0)}}},[i("v-icon",[e._v("mdi-pencil")])],1),e._v(" "),i("v-btn",{attrs:{icon:"","x-small":"",color:"red"},on:{click:function(i){return e.onItemDeselect(t)}}},[i("v-icon",[e._v("mdi-close")])],1)],1)])],1),e._v(" "),t.isEditMode?i("v-list-item",{key:t.name,staticClass:"text-left header-selector-list-item",attrs:{dense:""}},[i("div",{staticClass:"text-right pb-2 pt-2"},[i("v-text-field",{attrs:{dense:"",label:"Display Name","single-line":""},model:{value:t.displayName,callback:function(i){e.$set(t,"displayName",i)},expression:"item.displayName"}}),e._v(" "),i("v-btn",{attrs:{icon:"",small:"",color:"green"},on:{click:function(){return e.toggleEditMode(t,!1)}}},[i("v-icon",[e._v("mdi-check")])],1)],1)]):e._e()]}))],2)],1)],1)],1)],1)],1)],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"darken-1",text:""},on:{click:e.closeDialog}},[e._v(" Cancel ")]),e._v(" "),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.saveConfig}},[e._v("Save Config")])],1)],1)}),[],!1,null,null,null).exports,u={components:{TooltipIconButton:n.a,HeaderSelectorDialog:m},props:["fieldKeys","tableName","gridConfigChange"],data:function(){return{isOpen:!1}},methods:{closeDialog:function(){this.isOpen=!1},openDialog:function(){this.isOpen=!0}}},g=Object(c.a)(u,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",[i("tooltip-icon-button",{attrs:{buttonSize:"medium",btnIcon:"mdi-table-column",btnTooltip:"Configure table columns",onClick:function(){return e.openDialog()}}}),e._v(" "),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[e.isOpen?i("header-selector-dialog",{attrs:{"grid-config-change":e.gridConfigChange,closeDialog:e.closeDialog,"field-keys":e.fieldKeys,tableName:e.tableName}}):e._e()],1)],1)}),[],!1,null,null,null);t.a=g.exports},"97BG":function(e,t,i){"use strict";i.d(t,"p",(function(){return d})),i.d(t,"f",(function(){return c})),i.d(t,"n",(function(){return m})),i.d(t,"m",(function(){return u})),i.d(t,"g",(function(){return g})),i.d(t,"r",(function(){return h})),i.d(t,"i",(function(){return f})),i.d(t,"q",(function(){return v})),i.d(t,"l",(function(){return p})),i.d(t,"o",(function(){return _})),i.d(t,"b",(function(){return b})),i.d(t,"j",(function(){return y})),i.d(t,"k",(function(){return N})),i.d(t,"h",(function(){return C})),i.d(t,"d",(function(){return I})),i.d(t,"e",(function(){return D})),i.d(t,"a",(function(){return E})),i.d(t,"c",(function(){return S}));var n,a,s=i("Kz1y"),l=i.n(s),o=i("TcPG"),r=i.n(o),d="RF_WRITER",c="RF_CONSUMERS",m="RF_PRODUCERS",u="RF_POINTS_GRID",g="RF_DEVICES_GRID",h="SLAVE_APPS_GRID",f="RF_FLOW_NETWORK",v="RF_WRITER_CLONES",p="RF_NETWORKS_GRID",_="RF_STREAM_CLONES",b="DISCOVER_SLAVE_GRID",y="RF_FLOW_NETWORK_CLONES",N="RF_FLOW_NETWORK_STREAMS",C="RF_FLOW_FRAMEWORK_UPGRADE",I="RF_ALL_NETWORK_DEVICES_GRID",D="RF_ALL_NETWORK_DEVICES_POINTS_GRID",E=(n={},r()(n,C,[{name:"name",isEnabled:!0},{name:"version",isEnabled:!0},{name:"is_installed",isEnabled:!0},{name:"created_at",isEnabled:!0}]),r()(n,b,[{name:"device_name",isEnabled:!0},{name:"site_name",isEnabled:!0},{name:"site_lat",isEnabled:!0},{name:"site_lon",isEnabled:!0}]),r()(n,h,[{name:"client_name",isEnabled:!0},{displayName:"Status",name:"is_online"},{displayName:"Device Name",name:"device_name"},{displayName:"Site Name",name:"site_name"},{displayName:"Latitude",name:"site_lat"},{displayName:"Longitude",name:"site_lon"}]),r()(n,I,[{displayName:"Device Name",name:"name"},{displayName:"Network Name",name:"network_name"},{displayName:"Thing Class",name:"thing_class"},{displayName:"Enabled",name:"enable"}]),r()(n,D,[{displayName:"Device Name",name:"name"},{displayName:"Enabled",name:"enable"}]),r()(n,f,[{displayName:"Site Id",name:"site_id"},{displayName:"Device Id",name:"device_id"},{displayName:"Is Remote",name:"is_remote"},{displayName:"Is Master",name:"is_master_slave"},{displayName:"Is Error",name:"is_error"}]),r()(n,N,[{displayName:"Enable",name:"enable"}]),r()(n,m,[{displayName:"Enable",name:"enable"},{displayName:"Producer Thing Class",name:"producer_thing_class"},{displayName:"Producer Thing Name",name:"producer_thing_name"}]),r()(n,v,[{displayName:"Writer Thing Class",name:"writer_thing_class"},{displayName:"Writer Thing Type",name:"writer_thing_name"}]),r()(n,y,[{displayName:"Site Id",name:"site_id"},{displayName:"Device Id",name:"device_id"},{displayName:"Is Remote",name:"is_remote"},{displayName:"Is Master",name:"is_master_slave"},{displayName:"Is Error",name:"is_error"}]),r()(n,_,[{displayName:"Enable",name:"enable"}]),r()(n,c,[{displayName:"Enable",name:"enable"},{displayName:"Producer Thing Class",name:"producer_thing_class"},{displayName:"Producer Thing Name",name:"producer_thing_name"}]),r()(n,d,[{displayName:"Writer Thing Class",name:"writer_thing_class"},{displayName:"Writer Thing Name",name:"writer_thing_name"}]),r()(n,p,[{displayName:"Enable",name:"enable"},{displayName:"Plugin Name",name:"plugin_name"},{displayName:"Transport Type",name:"transport_type"}]),r()(n,g,[{displayName:"Enable",name:"enable"}]),r()(n,u,[{displayName:"Enable",name:"enable"},{displayName:"Point Name",name:"name"},{displayName:"Present Value",name:"present_value"}]),n),F={name:"gridItemActions",sortable:!1,always:!0,displayName:"Grid Actions"},x={name:"routeLinkName",sortable:!0,always:!0,displayName:"Name",appendFirst:!0},S=(a={},r()(a,b,[]),r()(a,f,[l()({},x),l()({},F)]),r()(a,N,[l()({},x),l()({},F)]),r()(a,m,[l()({},x)]),r()(a,y,[l()({},x)]),r()(a,_,[l()({},x)]),r()(a,c,[l()({},x)]),r()(a,p,[l()({},x)]),r()(a,g,[l()({},x)]),r()(a,h,[{name:"faliureRate",displayName:"Failure Rate (%)",isEnabled:!0}]),a)},BHGY:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return l}));var n=i("uzYq"),a="/grid-table-headers";function s(e){return n.a.get(a+"/"+e)}function l(e,t){return n.a.put(a+"/"+e,t)}},CfmX:function(e,t,i){"use strict";var n=i("OBCi"),a=i.n(n),s=i("tZmG"),l=i.n(s),o=i("TcPG"),r=i.n(o),d=i("Kz1y"),c=i.n(d),m=i("lkCm"),u=i("jVPF"),g=i("A5Vd"),h=i("Ui9F"),f=i("2kAK"),v=i("97BG"),p=i("BHGY"),_=i("juCZ"),b={editDialog:"editDialog",removeDialog:"removeDialog",createDialog:"createDialog",removeAllDialog:"removeAllDialog"},y={name:"grid",props:["headers","service","toolbarTitle","itemKey","storeMutationKey","params","getDataCb","creatable","deletable","gridName","hideActions","isHeaderConfigurable","isCreateAllowableFn"],components:{ConfirmDialog:m.a,HeaderSelector:f.a,TooltipIconButton:h.a,GridItemsCounter:u.a},data:function(){var e;return{dialogNames:c()({},b),dialog:(e={},r()(e,b.editDialog,!1),r()(e,b.removeDialog,!1),r()(e,b.createDialog,!1),r()(e,b.removeAllDialog,!1),e),selectedItems:[],search:"",isFetchingItems:!1,isCreatingItem:!1,isEditingItem:!1,isDeletingItem:!1,isRemovingSelected:!1,items:[],selectedItem:null,tableProps:c()({},g.d),queryOrConfig:{},newHeaders:[],fieldKeys:[]}},mounted:function(){this.params&&l()(this.params).length>0&&(this.queryOrConfig=c()({},this.queryOrConfig,this.params)),this.fetch(),this.fetchSetGridHeaders()},watch:{params:function(e,t){this.params&&e!=t&&(this.queryOrConfig=c()({},this.queryOrConfig,this.params))}},computed:{defaultItemKey:function(){return this.itemKey?this.itemKey:"uuid"},gridHeaders:function(){return this.newHeaders&&0!==this.newHeaders.length&&this.gridName&&this.isHeaderConfigurable&&this.fieldKeys.length>0?this.newHeaders:this.headers},atleastOneGridItemSelected:function(){return this.selectedItems.length>0},deleteAllTitle:function(){return"Are you sure to delete "+this.selectedItems.length+" item(s)?"},refreshToolTipTitle:function(){return"Refresh "+this.toolbarTitle},isCreatable:function(){return void 0===this.creatable||this.creatable},isDeletable:function(){return void 0===this.deletable||this.deletable}},methods:{refreshGrid:function(){this.fetch()},toggleDialog:function(e,t){this.selectedItem=t,this.dialog[e]=!this.dialog[e],this.dialog[e]?this.selectedItem=t:this.selectedItem=null},setFieldKeys:function(e){Array.isArray(e)&&e.length>0&&e[0]&&(this.fieldKeys=l()(e[0]))},fetch:function(){var e=this;return this.isFetchingItems=!0,this.service.fetch(this.queryOrConfig).then((function(t){"function"==typeof e.getDataCb&&e.getDataCb(t);var i=t;return!Array.isArray(t)&&t.hasOwnProperty("dataItems")&&(i=t.dataItems),e.setFieldKeys(i),e.storeMutationKey&&e.$store.commit(e.storeMutationKey,i),e.items=i,i})).catch((function(t){return e.$toasted.show("Error fetching grid items",{type:"error"}),t})).finally((function(){e.isFetchingItems=!1}))},onEdit:function(e){var t=this;return this.isEditingItem=!0,this.service.patch(this.selectedItem.uuid,e,this.queryOrConfig).then((function(e){return t.fetch(),e})).finally((function(){t.isEditingItem=!1}))},onCreate:function(e){var t=this;return this.isCreatingItem=!0,this.service.create(e,this.queryOrConfig).then((function(e){return t.fetch(),e})).finally((function(){t.isCreatingItem=!1}))},onRemove:function(){var e=this;return this.isDeletingItem=!0,this.service.removeById(this.selectedItem.uuid,this.queryOrConfig).then((function(t){return e.fetch(),e.$toasted.show("Deletion successful"),e.closeDialog(e.dialogNames.removeDialog),t})).finally((function(){e.isDeletingItem=!1,e.selectedItems=[]}))},fetchSetGridHeaders:function(){var e=this;this.gridName&&this.isHeaderConfigurable?p.a(this.gridName).then((function(t){var i=_.c(e.gridName,t);e.newHeaders=_.a()(i)})).catch((function(t){e.newHeaders=e.headers||v.a[e.gridName]})):this.newHeaders=this.headers},onCreateDialogOpen:function(){var e=!0;"function"==typeof this.isCreateAllowableFn&&(e=this.isCreateAllowableFn()),e&&this.toggleDialog(this.dialogNames.createDialog)},closeDialog:function(e){this.dialog[e]=!1,this.selectedApp={}},onDeleteSelected:function(){this.toggleDialog(this.dialogNames.removeAllDialog)},clearSelectedItems:function(){this.selectedItems=[]},onRemoveAll:function(){var e=this;return this.isRemovingSelected=!0,a.a.all(this.selectedItems.map((function(t){return e.service.removeById(t.uuid,e.queryOrConfig)}))).then((function(t){return e.$toasted.show("Deletion of selected item(s) successful"),e.fetch(),e.closeDialog(e.dialogNames.removeAllDialog),t}))}}},N=i("psIG"),C=Object(N.a)(y,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",{staticClass:"mr-6"},[i("span",[e._v(e._s(e.toolbarTitle))]),e._v(" "),i("tooltip-icon-button",{attrs:{btnColor:"default",btnIcon:"mdi-sync",btnTooltip:e.refreshToolTipTitle,buttonSize:"medium",onClick:function(){return e.refreshGrid()}}})],1),e._v(" "),i("grid-items-counter",{attrs:{num:e.selectedItems.length}}),e._v(" "),e.isHeaderConfigurable?i("header-selector",{attrs:{"grid-config-change":e.fetchSetGridHeaders,fieldKeys:e.fieldKeys,tableName:e.gridName}}):e._e(),e._v(" "),e.isCreatable?i("v-btn",{staticClass:"mr-2 btn-height-22 white-text",attrs:{"x-small":"",color:"green"},on:{click:e.onCreateDialogOpen}},[i("span",[e._v("Create")]),e._v(" "),i("v-icon",{attrs:{"x-small":"",right:""}},[e._v(" mdi-plus")])],1):e._e(),e._v(" "),e.isDeletable?i("v-btn",{staticClass:"mr-2 btn-height-22 white-text",attrs:{"x-small":"",color:"error",disabled:!e.atleastOneGridItemSelected},on:{click:e.onDeleteSelected}},[i("span",[e._v("Delete")]),e._v(" "),i("v-icon",{attrs:{"x-small":"",right:""}},[e._v(" mdi-delete")])],1):e._e(),e._v(" "),e._t("toolbarButtons",null,{refreshGrid:e.refreshGrid,selectedItems:e.selectedItems,clearSelectedItems:e.clearSelectedItems}),e._v(" "),i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],2),e._v(" "),i("v-data-table",{attrs:{dense:"","show-select":"",items:e.items,search:e.search,"item-key":e.itemKey,headers:e.newHeaders,loading:e.isFetchingItems,"footer-props":e.tableProps.FOOTER_PROPS,itemsPerPage:e.tableProps.ITEMS_PER_PAGE},scopedSlots:e._u([{key:"item.routeLinkName",fn:function(t){var i=t.item;return[e._t("routeLinkName",null,{item:i})]}},{key:"item.gridItemActions",fn:function(t){var i=t.item;return[e._t("gridItemActions",null,{item:i,refreshGrid:e.refreshGrid})]}},{key:"item.gridItemActionsTwo",fn:function(t){var i=t.item;return[e._t("gridItemActionsTwo",null,{item:i,refreshGrid:e.refreshGrid})]}},e.hideActions?null:{key:"item.actions",fn:function(t){var n=t.item;return[e.onEdit?i("tooltip-icon-button",{attrs:{btnTooltip:"Edit",btnIcon:"mdi-pencil",btnColor:"blue darken",onClick:function(){return e.toggleDialog(e.dialogNames.editDialog,n)}}}):e._e(),e._v(" "),e.onRemove?i("tooltip-icon-button",{attrs:{btnTooltip:"Delete",btnIcon:"mdi-delete",btnColor:"error darken",onClick:function(){return e.toggleDialog(e.dialogNames.removeDialog,n)}}}):e._e(),e._v(" "),e._t("afterActions",null,{item:{item:n},refreshGrid:e.refreshGrid})]}}],null,!0),model:{value:e.selectedItems,callback:function(t){e.selectedItems=t},expression:"selectedItems"}}),e._v(" "),i("confirm-dialog",{attrs:{loading:e.isDeletingItem,"dialog-text":"Are you sure?","is-open":e.dialog[e.dialogNames.removeDialog],"on-close":function(){return e.closeDialog(e.dialogNames.removeDialog)},"on-confirm":function(){return e.onRemove()}}}),e._v(" "),i("confirm-dialog",{attrs:{loading:e.isDeletingItem,"dialog-text":e.deleteAllTitle,"is-open":e.dialog[e.dialogNames.removeAllDialog],"on-close":function(){return e.closeDialog(e.dialogNames.removeAllDialog)},"on-confirm":function(){return e.onRemoveAll()}}}),e._v(" "),i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:e.dialog[e.dialogNames.createDialog],callback:function(t){e.$set(e.dialog,e.dialogNames.createDialog,t)},expression:"dialog[dialogNames.createDialog]"}},[e._t("createForm",null,{onSave:e.onCreate,isSaving:e.isCreatingItem,isOpen:e.dialog[e.dialogNames.createDialog],onClose:function(){return e.closeDialog(e.dialogNames.createDialog)}})],2),e._v(" "),i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:e.dialog[e.dialogNames.editDialog],callback:function(t){e.$set(e.dialog,e.dialogNames.editDialog,t)},expression:"dialog[dialogNames.editDialog]"}},[e._t("editForm",null,{isEdit:!0,onSave:e.onEdit,item:e.selectedItem,isSaving:e.isEditingItem,isOpen:e.dialog[e.dialogNames.editDialog],onClose:function(){return e.closeDialog(e.dialogNames.editDialog)}})],2)],1)}),[],!1,null,null,null);t.a=C.exports},Ui9F:function(e,t,i){"use strict";var n={name:"tooltip-icon-button",props:["btnIcon","btnTooltip","onClick","btnColor","buttonSize","disabled"]},a=i("psIG"),s=Object(a.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return["medium"==e.buttonSize?i("v-btn",e._g(e._b({attrs:{disabled:e.disabled,icon:"",medium:"",color:e.btnColor},on:{click:e.onClick}},"v-btn",a,!1),n),[i("v-icon",{attrs:{medium:"",dark:""}},[e._v(" "+e._s(e.btnIcon)+" ")])],1):i("v-btn",e._g(e._b({attrs:{disabled:e.disabled,icon:"",small:"",color:e.btnColor},on:{click:e.onClick}},"v-btn",a,!1),n),[i("v-icon",{attrs:{small:"",dark:""}},[e._v(" "+e._s(e.btnIcon)+" ")])],1)]}}])},[e._v(" "),i("span",{staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:e._s(e.btnTooltip)}})])}),[],!1,null,null,null);t.a=s.exports},jVPF:function(e,t,i){"use strict";var n={name:"grid-items-counter",props:["num"]},a=i("psIG"),s=Object(a.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"text-left mr-5 grid-item-counter"},[i("span",{staticClass:"grey--text caption"},[e._v("Selected Apps: ")]),e._v(" "),i("span",[e._v(e._s(e.num))])])}),[],!1,null,"39bb1989",null);t.a=s.exports},juCZ:function(e,t,i){"use strict";i.d(t,"b",(function(){return l})),i.d(t,"a",(function(){return o})),i.d(t,"c",(function(){return r}));var n=i("97BG"),a={hasActions:!0,hasSerialNumber:!0,actionValue:"actions",snValue:"sn"},s=function(e){var t=e.text,i=void 0===t?"":t,n=e.align,a=void 0===n?"center":n,s=e.sortable,l=void 0===s||s,o=e.value,r=void 0===o?null:o;return{text:i,align:a,sortable:l,name:r,value:r}},l=function(e){return e.split("_").map((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.toLowerCase();return e.charAt(0).toUpperCase()+t.slice(1)}(e)})).join(" ")},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=[];return t.forEach((function(e){e.displayName?i.push(s({text:l(e.displayName),value:e.name})):e.always&&i.push({text:e.displayName,value:e.name})})),e.hasActions&&i.push(s({text:"Actions",value:e.actionValue})),i}},r=function(e,t){var i=n.a[e],a=i;t&&0==(a=t.headers.filter((function(e){return e.isEnabled}))).length&&(a=i);var s=a.map((function(e){return{name:e.name,displayName:e.displayName||e.name}}));return(n.c[e]||[]).forEach((function(e){e.appendFirst?s.unshift(e):s.push(e)})),s}},lkCm:function(e,t,i){"use strict";var n={name:"confirm-dialog",props:["on-close","on-confirm","dialog-text","is-open","loading"]},a=i("psIG"),s=Object(a.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[i("v-card",[i("v-card-title",[i("v-icon",{attrs:{color:"warning"}},[e._v(" mdi-alert-outline ")]),e._v(" Confirm ")],1),e._v(" "),i("v-card-text",[i("v-container",[i("v-row",[e._v(e._s(e.dialogText))])],1)],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{text:""},on:{click:e.onClose}},[e._v(" No ")]),e._v(" "),i("v-btn",{attrs:{color:"red darken-1",loading:e.loading,text:""},on:{click:e.onConfirm}},[e._v(" Yes ")])],1)],1)],1)}),[],!1,null,null,null);t.a=s.exports}}]);
//# sourceMappingURL=2.4d444a28dd9c1405429f.js.map