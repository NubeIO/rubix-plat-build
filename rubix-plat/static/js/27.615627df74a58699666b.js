(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"2SyR":function(t,e,r){"use strict";var n={name:"icon-button",props:["icon","on-click","title","color","size","disabled","loading"]},a=r("psIG"),s=Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",["small"==t.size?r("v-btn",{staticClass:"pa-2",attrs:{small:"",text:"",color:t.color,loading:t.loading,disabled:t.disabled},on:{click:t.onClick}},[t.icon?r("v-icon",[t._v(t._s(t.icon))]):t._e(),t._v(" "),t.title?r("span",{staticClass:"text"},[t._v(" "+t._s(t.title))]):t._e()],1):r("v-btn",{staticClass:"pa-2",attrs:{text:"",loading:t.loading,disabled:t.disabled,color:t.color,"x-small":""},on:{click:t.onClick}},[t.icon?r("v-icon",[t._v(t._s(t.icon))]):t._e(),t._v(" "),t.title?r("span",{staticClass:"text"},[t._v(" "+t._s(t.title))]):t._e()],1)],1)}),[],!1,null,null,null);e.a=s.exports},A8UK:function(t,e,r){"use strict";r.r(e);var n=r("Kz1y"),a=r.n(n),s=r("TcPG"),i=r.n(s),o=r("BgpN"),u=r("oGAK"),c=r("2SyR"),l=r("oujF"),d=r("CfmX"),f=r("97BG"),m=r("ZXQ1"),v=r("uzYq"),p=r("oCli").a.rfFNCStreams(),h={viewWriters:"viewWriters"},b=i()({},h.viewWriters,(function(t,e,r){return u.a.rfWriters.replace(":flowNetworkId",t).replace(":streamId",e).replace(":consumerId",r)})),w={name:"consumers-grid",components:{GenericGrid:d.a,ConsumersForm:o.a,IconButton:c.a,TextButton:l.a},props:["params","getDataCb","streamSourceId"],data:function(){return{producers:[],dialogNames:h,gridName:f.f,service:m.a,toolbarTitle:"Consumers",gridHeaders:[{text:"Name",align:"center",value:"name",sortable:!0},{text:"Actions",align:"center",value:"actions",sortable:!0}]}},mounted:function(){},computed:{streamId:function(){return this.$route.params.streamId},flowNetworkId:function(){return this.$route.params.flowNetworkId}},watch:{streamSourceId:function(t,e){t!=e&&t&&this.fetchAllProducers()}},methods:{fetchAllProducers:function(){var t=this;(function(t,e){var r=p+"/"+t+"/streams/"+e+"/producers";return v.a.get(r)})(this.$route.params.flowNetworkId,this.streamSourceId).then((function(e){t.producers=e.producers||[]}))},redirectTo:function(t,e){var r=e.uuid;if(r){var n=b[t];"function"==typeof n&&this.$router.push({path:n(this.flowNetworkId,this.streamId,r)})}}}},C=r("psIG"),_=Object(C.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("generic-grid",{attrs:{gridName:t.gridName,isHeaderConfigurable:!0,params:t.params,service:t.service,headers:t.gridHeaders,getDataCb:t.getDataCb,toolbarTitle:t.toolbarTitle,navigableName:!0},scopedSlots:t._u([{key:"routeLinkName",fn:function(e){var n=e.item;return[r("text-button",{attrs:{text:n.name,onClick:function(){return t.redirectTo(t.dialogNames.viewWriters,n)}}})]}},{key:"createForm",fn:function(e){var n=e.onSave,a=e.onClose,s=e.isOpen,i=e.isSaving;return[s?r("consumers-form",{attrs:{producers:t.producers,streamId:t.streamId,isEdit:!1,onSave:n,onCancel:a,isSaving:i}}):t._e()]}},{key:"editForm",fn:function(e){var n=e.onSave,a=e.item,s=e.onClose,i=e.isOpen,o=e.isSaving;return[i?r("consumers-form",{attrs:{item:a,streamId:t.streamId,isEdit:!0,onSave:n,onCancel:s,producers:t.producers,isSaving:o}}):t._e()]}}])})],1)}),[],!1,null,null,null).exports,g=r("Ui9F"),k=r("VNy9"),I=r("edSL"),N=r.n(I),x=r("LmcY"),S={name:"consumers",components:{IconButton:c.a,ConsumersGrid:_,TooltipIconButton:g.a,Breadcrumbs:k.a},data:function(){return{params:{uuid:null,with_consumers:!0},gridData:{},breadcrumbItems:[],renderCount:0,streamSourceId:null}},watch:{"$route.params.streamId":function(t,e){t!=e&&(this.renderCount++,this.initialize())},flowNetworkCloneNamesMap:function(){this.setBreadCrumbs()}},computed:{flowNetworkCloneNamesMap:function(){return this.$store.state.flowNetworkCloneNamesMap}},mounted:function(){this.initialize()},methods:{initialize:function(){this.params=a()({},this.params,{uuid:this.$route.params.streamId}),this.setBreadCrumbs()},onBack:function(){this.$router.go(-1)},getDataCb:function(t){this.gridData=t,this.streamSourceId=N()(t,"extraData.source_uuid",null)},setBreadCrumbs:function(){this.breadcrumbItems=[],this.breadcrumbItems.push({text:"All Flow Network Clone",align:"center",disabled:!0,link:u.a.rfFlowNetworkClone}),this.breadcrumbItems.push({text:x.a(this.flowNetworkCloneNamesMap,this.$route.params.flowNetworkId),align:"center",disabled:!0,link:u.a.rfFlowNetworkStreamsClone.replace(":flowNetworkId",this.$route.params.flowNetworkId)}),this.breadcrumbItems.push({text:x.a(this.flowNetworkCloneNamesMap,this.$route.params.streamId),align:"center",disabled:!1})}}},y=Object(C.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{key:t.renderCount,attrs:{outlined:""}},[r("v-card-title",[r("v-btn",{staticClass:"mr-1",attrs:{icon:"",medium:""},on:{click:t.onBack}},[r("v-icon",{attrs:{medium:""}},[t._v(" mdi-arrow-left ")])],1),t._v("\n    Consumers\n  ")],1),t._v(" "),r("v-card-text",[r("breadcrumbs",{attrs:{items:t.breadcrumbItems}}),t._v(" "),r("v-row",{attrs:{"no-gutter":""}},[r("v-col",{attrs:{cols:"12",lg:"12",xl:"12",md:"12",sm:"12",xs:"12"}},[t.params.uuid?r("consumers-grid",{attrs:{streamSourceId:t.streamSourceId,params:t.params,getDataCb:t.getDataCb}}):t._e()],1)],1)],1)],1)}),[],!1,null,null,null);e.default=y.exports},BgpN:function(t,e,r){"use strict";var n=r("Kz1y"),a=r.n(n),s=(r("yEOx"),{name:"flow-consumers-form",props:["isEdit","onCancel","onSave","item","isSaving","streamId","producers"],data:function(){return{rules:{required:function(t){return!!t||"Required."},numberRule:function(t){return!isNaN(parseFloat(t))||"Required."}},valid:!1,formValues:a()({},{name:"consumer",enable:!0,producer_uuid:null,stream_clone_uuid:null})}},computed:{lowerCaseTitle:function(){return"consumers"},titleCase:function(){return"Consumers"},title:function(){return this.isEdit?"Edit "+this.titleCase:"Create "+this.titleCase},saveTitle:function(){return this.isEdit?"Save":"Create"}},mounted:function(){this.isEdit&&this.item&&(this.formValues=a()({},this.formValues,this.item)),!this.isEdit&&this.streamId&&(this.formValues=a()({},this.formValues,{stream_clone_uuid:this.streamId}))},methods:{cleanUp:function(){this.formValues={},"function"==typeof this.onCancel&&this.onCancel()},onSubmit:function(){var t=this;if(this.$refs.form.validate()){if("function"!=typeof this.onSave)throw new Error(this.lowerCaseTitle+" form onSave function not passed");return this.onSave(this.formValues).then((function(){t.$toasted.show("Successfully "+(t.isEdit?"updated":"created")+" "+t.lowerCaseTitle+"."),t.cleanUp(!0)})).catch((function(e){t.$toasted.show("Failed to "+(t.isEdit?"update":"create")+" "+t.lowerCaseTitle+".",{type:"error"})}))}}}}),i=r("psIG"),o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[t._v(t._s(t.title))])]),t._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"8"}},[r("v-text-field",{attrs:{required:"",label:"Name",rules:[t.rules.required]},model:{value:t.formValues.name,callback:function(e){t.$set(t.formValues,"name",e)},expression:"formValues.name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"2"}},[r("v-switch",{attrs:{label:"Enable"},model:{value:t.formValues.enable,callback:function(e){t.$set(t.formValues,"enable",e)},expression:"formValues.enable"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-autocomplete",{attrs:{chips:"",clearable:"","small-chips":"",label:"Producer","item-value":"uuid","item-text":"name",items:t.producers,"deletable-chips":""},model:{value:t.formValues.producer_uuid,callback:function(e){t.$set(t.formValues,"producer_uuid",e)},expression:"formValues.producer_uuid"}})],1)],1)],1)],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-card-actions",{staticClass:"align-end justify-end"},[r("v-btn",{attrs:{color:"darken-1",text:""},on:{click:t.onCancel}},[t._v(" Cancel ")]),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",loading:t.isSaving,text:""},on:{click:function(e){return t.onSubmit(t.formValues)}}},[t._v(" "+t._s(t.saveTitle)+" ")])],1)],1)}),[],!1,null,null,null);e.a=o.exports},DeKB:function(t,e,r){"use strict";var n=r("Zv/C"),a=r.n(n),s=r("uzYq"),i=r("NWgQ"),o=r.n(i),u=r("PWxN"),c=r.n(u),l=function(){var t=this;this.uri="",this.evaluateUri=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return"function"==typeof t.uri?t.uri(e):uri},this.fetch=function(e){var r=t.evaluateUri(),n=null;return e&&e.hasOwnProperty("id")?(n=e.id,e=c()(e,"id")):e&&e.hasOwnProperty("uuid")&&(n=e.uuid,e=c()(e,"uuid")),e&&(r=r+"?"+o.a.stringify(e)),n?t.fetchById(n,e):s.a.get(r)},this.fetchById=function(e,r){var n=t.evaluateUri(e);return r&&(n=n+"?"+o.a.stringify(r)),s.a.get(n)},this.remove=function(){var e=t.evaluateUri();return s.a.delete(e)},this.removeById=function(e){var r=t.evaluateUri(e);return s.a.delete(r)},this.create=function(e){var r=t.evaluateUri();return s.a.post(r,e)},this.patch=function(e,r){var n=t.evaluateUri(e);return s.a.patch(n,r)},this.update=function(e,r){var n=t.evaluateUri(e);return s.a.put(n,r)}};e.a=function t(e){a()(this,t),l.call(this),this.uri=e}},LmcY:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("edSL");var n=function(t,e){var r=t&&t[e];return r||(r=e),r}},VNy9:function(t,e,r){"use strict";var n={name:"breadcrumbs",props:["items"]},a=r("psIG"),s=Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-breadcrumbs",{staticClass:"breadcrumbs",attrs:{items:t.items},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[r("v-breadcrumbs-item",{staticClass:"breadcrumbs-item-text",attrs:{to:n.link,exact:""}},[t._v(" "+t._s(n.text)+" ")])]}}])})}),[],!1,null,"04244946",null);e.a=s.exports},ZXQ1:function(t,e,r){"use strict";r.d(e,"a",(function(){return k}));var n=r("tZmG"),a=r.n(n),s=r("YUSd"),i=r.n(s),o=r("Zv/C"),u=r.n(o),c=r("2lBV"),l=r.n(c),d=r("Dkg+"),f=r.n(d),m=r("Gjrs"),v=r.n(m),p=r("DeKB"),h=r("oCli"),b=r("uzYq"),w=r("PWxN"),C=r.n(w),_=r("NWgQ"),g=r.n(_),k=new(function(t){function e(){u()(this,e);var t=f()(this,(e.__proto__||i()(e)).call(this,h.a.rfConsumers));return t.fetch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.uuid||t.id;if(!e)throw new Error("Stream Id is required for fetching consumers of streams");var r=h.a.rfStreamsClone(e);return(t=C()(t,["uuid","id"]))&&a()(t).length>0&&(r=r+"?"+g.a.stringify(t)),b.a.get(r).then((function(t){return{dataItems:t.consumers,extraData:C()(t,["consumers"])}}))},t}return v()(e,t),l()(e,[{key:"fetchAll",value:function(){var t=h.a.rfConsumers();return b.a.get(t)}}]),e}(p.a))},oCli:function(t,e,r){"use strict";function n(t,e){return t?e+"/"+t:e}e.a={rfPing:function(t){return n(t,"rf-ping")},rfFNCStreams:function(t){return n(t,"rf-fnc")},rfCommands:function(t){return n(t,"/rf-commands")},rfLogin:function(t){return n(t,"/rf-login")},rfSchedules:function(t){return n(t,"/rf-schedules")},rfFlowNetwork:function(t){return n(t,"/rf-flow-network")},rfFlowNetworkClone:function(t){return n(t,"/rf-flow-network-clone")},rfJobs:function(t){return n(t,"/rf-jobs")},rfNetworks:function(t){return n(t,"/rf-networks")},rfPoints:function(t){return n(t,"/rf-points")},rfProducers:function(t){return n(t,"/rf-producers")},rfConsumers:function(t){return n(t,"/rf-consumers")},rfWriters:function(t){return n(t,"/rf-writers")},rfWriterClones:function(t){return n(t,"/rf-writer-clones")},rfStreams:function(t){return n(t,"/rf-streams")},rfStreamsClone:function(t){return n(t,"/rf-streams-clone")},rfDevices:function(t){return n(t,"/rf-devices")},rfWriterActions:function(t){return n(t,"/rf-writer-actions")}}},oujF:function(t,e,r){"use strict";var n={name:"text-button",props:["onClick","text"]},a=r("psIG"),s=Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-btn",{staticClass:"ma-1",attrs:{link:"",color:"nubeGreen",plain:""},on:{click:t.onClick}},[r("span",{staticClass:"btn-text"},[t._v(t._s(t.text))])])}),[],!1,null,null,null);e.a=s.exports}}]);
//# sourceMappingURL=27.615627df74a58699666b.js.map