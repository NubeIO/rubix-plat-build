(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{oUVV:function(t,e,n){"use strict";n.r(e);n("edSL");var r=n("2SyR"),i=n("TcPG"),a=n.n(i),o=n("oGAK"),s=n("Kz1y"),c=n.n(s),l={components:{DynamicForm:n("K3Z4").a},name:"rf-network-form",props:["isEdit","onCancel","onSave","item","isSaving"],data:function(){return{formValues:{},rerender:0}},computed:{lowerCaseTitle:function(){return"network"},titleCase:function(){return"Network"},title:function(){return this.isEdit?"Edit "+this.titleCase:"Create "+this.titleCase},saveTitle:function(){return this.isEdit?"Save":"Create"}},mounted:function(){this.isEdit&&this.item&&(this.formValues=c()({},this.item),this.rerender++)}},u=n("psIG"),m=Object(u.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("dynamic-form",{key:t.rerender,attrs:{item:t.item,title:t.title,isEdit:t.isEdit,onSave:t.onSave,onCancel:t.onCancel,moduleName:"network",initialFormValues:t.formValues}})}),[],!1,null,null,null).exports,d=n("oujF"),f=n("CfmX"),v=n("wffz"),k=n("97BG"),p={viewDevices:"viewDevices"},w=a()({},p.viewDevices,(function(t){return o.a.rfDevices.replace(":networkId",t)})),b={name:"rf-network-grid",components:{GenericGrid:f.a,RfNetworkForm:m,IconButton:r.a,TextButton:d.a},props:["params","getDataCb"],data:function(){return{gridName:k.k,service:v.a,toolbarTitle:"Network",dialogNames:p,gridHeaders:[{text:"Name",align:"center",value:"routeLinkName",sortable:!0},{text:"Actions",align:"center",value:"actions",sortable:!0}]}},methods:{redirectTo:function(t,e){var n=e.uuid;if(n){var r=w[t];"function"==typeof r&&this.$router.push({path:r(n)})}}}},g=Object(u.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("generic-grid",{attrs:{gridName:t.gridName,params:t.params,isHeaderConfigurable:!0,service:t.service,headers:t.gridHeaders,toolbarTitle:t.toolbarTitle,getDataCb:t.getDataCb},scopedSlots:t._u([{key:"routeLinkName",fn:function(e){var r=e.item;return[n("text-button",{attrs:{text:r.name,onClick:function(){return t.redirectTo(t.dialogNames.viewDevices,r)}}})]}},{key:"createForm",fn:function(e){var r=e.onSave,i=e.onClose,a=e.isOpen,o=e.isSaving;return[a?n("rf-network-form",{attrs:{isEdit:!1,onSave:r,onCancel:i,isSaving:o}}):t._e()]}},{key:"editForm",fn:function(e){var r=e.onSave,i=e.item,a=e.onClose,o=e.isOpen,s=e.isSaving;return[o?n("rf-network-form",{attrs:{item:i,isEdit:!0,onSave:r,onCancel:a,isSaving:s}}):t._e()]}}])})],1)}),[],!1,null,null,null).exports,C=n("VNy9"),h=n("Ui9F"),N={text:"Networks",disabled:!1,link:o.a.rfNetworkDevicePoint},x={name:"rf-networks",components:{IconButton:r.a,RfNetworkGrid:g,TooltipIconButton:h.a,Breadcrumbs:C.a},data:function(){return{gridData:{},breadcrumbItems:[N]}},methods:{onBack:function(){this.$router.go(-1)},getDataCb:function(t){this.gridData=t}}},_=Object(u.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{outlined:""}},[n("v-card-title",[n("v-btn",{staticClass:"mr-1",attrs:{icon:"",medium:""},on:{click:t.onBack}},[n("v-icon",{attrs:{medium:""}},[t._v(" mdi-arrow-left ")])],1),t._v("\n    Network\n  ")],1),t._v(" "),n("v-card-text",[n("breadcrumbs",{attrs:{items:t.breadcrumbItems}}),t._v(" "),n("v-row",{attrs:{"no-gutter":""}},[n("v-col",{attrs:{cols:"12",lg:"12",xl:"12",md:"12",sm:"12",xs:"12"}},[n("rf-network-grid",{attrs:{getDataCb:t.getDataCb}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=_.exports},oujF:function(t,e,n){"use strict";var r={name:"text-button",props:["onClick","text"]},i=n("psIG"),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"ma-1",attrs:{link:"",color:"nubeGreen",plain:""},on:{click:t.onClick}},[n("span",{staticClass:"btn-text"},[t._v(t._s(t.text))])])}),[],!1,null,null,null);e.a=a.exports},wffz:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("DeKB"),i=n("oCli"),a=new r.a(i.a.rfNetworks)}}]);
//# sourceMappingURL=54.7c417fc83c094e9d18cb.js.map