(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"2SyR":function(e,t,n){"use strict";var r={name:"icon-button",props:["icon","on-click","title","color","size","disabled","loading"]},a=n("psIG"),i=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",["small"==e.size?n("v-btn",{staticClass:"pa-2",attrs:{small:"",text:"",color:e.color,loading:e.loading,disabled:e.disabled},on:{click:e.onClick}},[e.icon?n("v-icon",[e._v(e._s(e.icon))]):e._e(),e._v(" "),e.title?n("span",{staticClass:"text"},[e._v(" "+e._s(e.title))]):e._e()],1):n("v-btn",{staticClass:"pa-2",attrs:{text:"",loading:e.loading,disabled:e.disabled,color:e.color,"x-small":""},on:{click:e.onClick}},[e.icon?n("v-icon",[e._v(e._s(e.icon))]):e._e(),e._v(" "),e.title?n("span",{staticClass:"text"},[e._v(" "+e._s(e.title))]):e._e()],1)],1)}),[],!1,null,null,null);t.a=i.exports},DeKB:function(e,t,n){"use strict";var r=n("Zv/C"),a=n.n(r),i=n("uzYq"),s=n("NWgQ"),o=n.n(s),l=n("PWxN"),u=n.n(l),c=function(){var e=this;this.uri="",this.evaluateUri=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return"function"==typeof e.uri?e.uri(t):uri},this.fetch=function(t){var n=e.evaluateUri(),r=null;return t&&t.hasOwnProperty("id")?(r=t.id,t=u()(t,"id")):t&&t.hasOwnProperty("uuid")&&(r=t.uuid,t=u()(t,"uuid")),t&&(n=n+"?"+o.a.stringify(t)),r?e.fetchById(r,t):i.a.get(n)},this.fetchById=function(t,n){var r=e.evaluateUri(t);return n&&(r=r+"?"+o.a.stringify(n)),i.a.get(r)},this.remove=function(){var t=e.evaluateUri();return i.a.delete(t)},this.removeById=function(t){var n=e.evaluateUri(t);return i.a.delete(n)},this.create=function(t){var n=e.evaluateUri();return i.a.post(n,t)},this.patch=function(t,n){var r=e.evaluateUri(t);return i.a.patch(r,n)},this.update=function(t,n){var r=e.evaluateUri(t);return i.a.put(r,n)}};t.a=function e(t){a()(this,e),c.call(this),this.uri=t}},NBOt:function(e,t,n){"use strict";n.r(t);n("edSL");var r=n("2SyR"),a=n("yEOx"),i=n.n(a),s={name:"rf-device-form",props:["isEdit","onCancel","onSave","item"],data:function(){return{valid:!1,formValues:{},rerender:0,isSaving:!1,parentModulePath:null,rules:{required:function(e){return!!e||"Required."},numberRule:function(e){return!isNaN(parseFloat(e))||"Required."}}}},computed:{lowerCaseTitle:function(){return"schedules"},titleCase:function(){return"Schedules"},title:function(){return this.isEdit?"Edit "+this.titleCase:"Create "+this.titleCase},saveTitle:function(){return this.isEdit?"Save":"Create"}},mounted:function(){this.isEdit||this.$refs.form.reset(),this.formValues=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{name:e.name||"",enable:e.enable||!1,is_active:e.is_active||!1,is_global:e.is_global||!1,schedules:e.schedules||{}}}(i()(this.item))},methods:{cleanUp:function(){this.formValues={},"function"==typeof this.onCancel&&this.onCancel()},onSubmit:function(){var e=this;this.isSaving=!0,"function"==typeof this.onSave&&this.onSave(this.formValues).then((function(){e.$toasted.show("Successfully "+(e.isEdit?"updated":"created")+" "+e.title+"."),e.cleanUp()})).catch((function(){e.$toasted.show("Failed to "+(e.isEdit?"update":"create")+" "+e.title+".",{type:"error"})})).finally((function(){e.isSaving=!1}))}}},o=n("psIG"),l=Object(o.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",{staticClass:"mb-5"},[n("span",{staticClass:"headline"},[e._v(e._s(e.title))])]),e._v(" "),n("v-card-text",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{required:"",label:"Name",rules:[e.rules.required]},model:{value:e.formValues.name,callback:function(t){e.$set(e.formValues,"name",t)},expression:"formValues.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-switch",{attrs:{label:"Enable"},model:{value:e.formValues.enable,callback:function(t){e.$set(e.formValues,"enable",t)},expression:"formValues.enable"}})],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-switch",{attrs:{label:"Active"},model:{value:e.formValues.is_active,callback:function(t){e.$set(e.formValues,"is_active",t)},expression:"formValues.is_active"}})],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-switch",{attrs:{label:"Global"},model:{value:e.formValues.is_global,callback:function(t){e.$set(e.formValues,"is_global",t)},expression:"formValues.is_global"}})],1),e._v(" "),n("v-jsoneditor",{attrs:{options:{mode:"code"},plus:!1,height:"400px"},model:{value:e.formValues.schedules,callback:function(t){e.$set(e.formValues,"schedules",t)},expression:"formValues.schedules"}})],1)],1)],1),e._v(" "),n("v-card-actions",[e.onCancel?n("v-btn",{attrs:{color:"darken-1",text:""},on:{click:e.onCancel}},[e._v(" Cancel ")]):e._e(),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.isSaving},on:{click:function(t){return e.onSubmit(e.formValues)}}},[e._v(" Save ")])],1)],1)}),[],!1,null,null,null).exports,u=n("TcPG"),c=n.n(u),f=n("oujF"),d=n("CfmX"),v=n("vJYM"),m=n("oGAK"),h=n("97BG"),b={viewPoints:"viewPoints"},p=(c()({},b.viewPoints,(function(e,t){return m.a.rfPoints.replace(":networkId",e).replace(":deviceId",t)})),{name:"rf-schedules-grid",components:{GenericGrid:d.a,RfSchedulesForm:l,IconButton:r.a,TextButton:f.a},props:["params","getDataCb"],data:function(){return{gridName:h.g,dialogNames:b,service:v.a,toolbarTitle:"Schedules",gridHeaders:[{text:"Name",align:"center",value:"name",sortable:!0},{text:"Actions",align:"center",value:"actions",sortable:!0}]}},methods:{}}),_=Object(o.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("generic-grid",{attrs:{gridName:e.gridName,isHeaderConfigurable:!0,params:e.params,service:e.service,headers:e.gridHeaders,toolbarTitle:e.toolbarTitle,getDataCb:e.getDataCb},scopedSlots:e._u([{key:"createForm",fn:function(t){var r=t.onSave,a=t.onClose,i=t.isOpen,s=t.isSaving;return[i?n("rf-schedules-form",{attrs:{isEdit:!1,onSave:r,onCancel:a,isSaving:s}}):e._e()]}},{key:"editForm",fn:function(t){var r=t.onSave,a=t.item,i=t.onClose,s=t.isOpen,o=t.isSaving;return[s?n("rf-schedules-form",{attrs:{item:a,isEdit:!0,onSave:r,onCancel:i,isSaving:o}}):e._e()]}}])})],1)}),[],!1,null,null,null).exports,g=n("VNy9"),C=n("Ui9F"),k={text:"Schedules",disabled:!1,link:m.a.rfSchedules},S={name:"rf-schedules",components:{IconButton:r.a,RfSchedulesForm:l,rfSchedulesGrid:_,TooltipIconButton:C.a,Breadcrumbs:g.a},data:function(){return{params:{uuid:null},immediateParent:null,renderCount:0,networkName:"",gridData:{},breadcrumbItems:[k]}},mounted:function(){},methods:{onBack:function(){this.$router.go(-1)},getDataCb:function(e){this.gridData=e,this.updateBreadCrumbs()},updateBreadCrumbs:function(){this.breadcrumbItems=[],this.breadcrumbItems.push(k)}}},x=Object(o.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{key:e.renderCount,attrs:{outlined:""}},[n("v-card-title",[n("v-btn",{staticClass:"mr-1",attrs:{icon:"",medium:""},on:{click:e.onBack}},[n("v-icon",{attrs:{medium:""}},[e._v(" mdi-arrow-left ")])],1),e._v(" "),n("span",[e._v("Rf Schedules")])],1),e._v(" "),n("v-card-text",[n("breadcrumbs",{attrs:{items:e.breadcrumbItems}}),e._v(" "),n("v-row",{attrs:{"no-gutter":""}},[n("v-col",{attrs:{cols:"12",lg:"12",xl:"12",md:"12",sm:"12",xs:"12"}},[n("rf-schedules-grid",{attrs:{getDataCb:e.getDataCb}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=x.exports},VNy9:function(e,t,n){"use strict";var r={name:"breadcrumbs",props:["items"]},a=n("psIG"),i=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-breadcrumbs",{staticClass:"breadcrumbs",attrs:{items:e.items},scopedSlots:e._u([{key:"item",fn:function(t){var r=t.item;return[n("v-breadcrumbs-item",{staticClass:"breadcrumbs-item-text",attrs:{to:r.link,exact:""}},[e._v(" "+e._s(r.text)+" ")])]}}])})}),[],!1,null,"04244946",null);t.a=i.exports},oCli:function(e,t,n){"use strict";function r(e,t){return e?t+"/"+e:t}t.a={rfPing:function(e){return r(e,"rf-ping")},rfFNCStreams:function(e){return r(e,"rf-fnc")},rfCommands:function(e){return r(e,"/rf-commands")},rfLogin:function(e){return r(e,"/rf-login")},rfSchedules:function(e){return r(e,"/rf-schedules")},rfFlowNetwork:function(e){return r(e,"/rf-flow-network")},rfFlowNetworkClone:function(e){return r(e,"/rf-flow-network-clone")},rfJobs:function(e){return r(e,"/rf-jobs")},rfNetworks:function(e){return r(e,"/rf-networks")},rfPoints:function(e){return r(e,"/rf-points")},rfProducers:function(e){return r(e,"/rf-producers")},rfConsumers:function(e){return r(e,"/rf-consumers")},rfWriters:function(e){return r(e,"/rf-writers")},rfWriterClones:function(e){return r(e,"/rf-writer-clones")},rfStreams:function(e){return r(e,"/rf-streams")},rfStreamsClone:function(e){return r(e,"/rf-streams-clone")},rfDevices:function(e){return r(e,"/rf-devices")},rfWriterActions:function(e){return r(e,"/rf-writer-actions")}}},oujF:function(e,t,n){"use strict";var r={name:"text-button",props:["onClick","text"]},a=n("psIG"),i=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{staticClass:"ma-1",attrs:{link:"",color:"nubeGreen",plain:""},on:{click:e.onClick}},[n("span",{staticClass:"btn-text"},[e._v(e._s(e.text))])])}),[],!1,null,null,null);t.a=i.exports},vJYM:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("YUSd"),a=n.n(r),i=n("Zv/C"),s=n.n(i),o=n("Dkg+"),l=n.n(o),u=n("Gjrs"),c=n.n(u),f=n("oCli"),d=new(function(e){function t(){return s()(this,t),l()(this,(t.__proto__||a()(t)).call(this,f.a.rfSchedules))}return c()(t,e),t}(n("DeKB").a))}}]);
//# sourceMappingURL=31.b5bcc55495b2986680fe.js.map