(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"2SyR":function(e,t,r){"use strict";var n={name:"icon-button",props:["icon","on-click","title","color","size","disabled","loading"]},i=r("psIG"),s=Object(i.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",["small"==e.size?r("v-btn",{staticClass:"pa-2",attrs:{small:"",text:"",color:e.color,loading:e.loading,disabled:e.disabled},on:{click:e.onClick}},[e.icon?r("v-icon",[e._v(e._s(e.icon))]):e._e(),e._v(" "),e.title?r("span",{staticClass:"text"},[e._v(" "+e._s(e.title))]):e._e()],1):r("v-btn",{staticClass:"pa-2",attrs:{text:"",loading:e.loading,disabled:e.disabled,color:e.color,"x-small":""},on:{click:e.onClick}},[e.icon?r("v-icon",[e._v(e._s(e.icon))]):e._e(),e._v(" "),e.title?r("span",{staticClass:"text"},[e._v(" "+e._s(e.title))]):e._e()],1)],1)}),[],!1,null,null,null);t.a=s.exports},"4z8c":function(e,t,r){"use strict";r.d(t,"a",(function(){return C}));var n=r("tZmG"),i=r.n(n),s=r("YUSd"),a=r.n(s),o=r("Zv/C"),l=r.n(o),u=r("2lBV"),c=r.n(u),d=r("Dkg+"),f=r.n(d),m=r("Gjrs"),v=r.n(m),h=r("DeKB"),p=r("oCli"),w=r("uzYq"),_=r("PWxN"),g=r.n(_),b=r("NWgQ"),k=r.n(b),C=new(function(e){function t(){l()(this,t);var e=f()(this,(t.__proto__||a()(t)).call(this,p.a.rfProducers));return e.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.uuid||e.id;if(!t)throw new Error("Stream Id is required for fetching producers of streams");var r=p.a.rfStreams(t);return(e=g()(e,["uuid","id"]))&&i()(e).length>0&&(r=r+"?"+k.a.stringify(e)),w.a.get(r).then((function(e){return{dataItems:e.producers,extraData:g()(e,["producers"])}}))},e}return v()(t,e),c()(t,[{key:"fetchAll",value:function(){var e=p.a.rfProducers();return w.a.get(e)}}]),t}(h.a))},C4vA:function(e,t,r){"use strict";var n=r("Kz1y"),i=r.n(n),s=r("yEOx"),a=r.n(s),o=r("L9C3"),l=r("wffz"),u=r("IpYZ"),c={name:"producers-form",props:["isEdit","onCancel","onSave","item","isSaving","stream","schedules","allPoints"],data:function(){return{isFetchingAllDevices:!1,rules:{required:function(e){return!!e||"Required."},numberRule:function(e){return!isNaN(parseFloat(e))||"Required."}},devices:[],points:[],isFetchingNetworkDevices:!1,isFetchingDevicePoints:!1,isFetchingSchedules:!1,selectedNetwork:null,selectedDevice:null,thingTypes:o.c,thingActions:o.b,valid:!1,formValues:i()({},{name:"producer",enable:!1,producer_thing_class:"point",enable_history:!1,producer_application:"mapping",stream_uuid:null,producer_thing_uuid:null})}},computed:{lowerCaseTitle:function(){return"producers"},titleCase:function(){return"Producers"},title:function(){return this.isEdit?"Edit "+this.titleCase:"Create "+this.titleCase},saveTitle:function(){return this.isEdit?"Save":"Create"},networks:function(){return this.$store.state.rfNetworks}},mounted:function(){this.isEdit&&this.item&&(this.formValues=i()({},this.formValues,this.item)),!this.isEdit&&this.stream&&(this.formValues=i()({},this.formValues,{stream_uuid:this.stream.uuid}))},methods:{cleanUp:function(){this.formValues={},"function"==typeof this.onCancel&&this.onCancel()},onThingTypeChange:function(){this.formValues.producer_thing_uuid=null},fetchChildDevicesByNetworkId:function(e){var t=this;if(!e)return this.selectedDevice=null,void(this.formValues.producer_thing_uuid=null);this.isFetchingNetworkDevices=!0,l.a.fetchById(e,{with_devices:!0}).then((function(e){t.devices=e.devices})).finally((function(){t.isFetchingNetworkDevices=!1}))},fetchChildPointsByDeviceId:function(e){var t=this;e?(this.isFetchingDevicePoints=!0,u.a.fetchById(e,{with_points:!0}).then((function(e){t.points=e.points})).finally((function(){t.isFetchingDevicePoints=!1}))):this.formValues.producer_thing_uuid=null},transformFormValues:function(e){var t=a()(e);return t.producer_thing_class=o.a[t.producer_thing_class].value,t},onSubmit:function(){var e=this;if(this.$refs.form.validate()){if("function"!=typeof this.onSave)throw new Error(this.lowerCaseTitle+" form onSave function not passed");return this.onSave(this.transformFormValues(this.formValues)).then((function(){e.$toasted.show("Successfully "+(e.isEdit?"updated":"created")+" "+e.lowerCaseTitle+"."),e.cleanUp(!0)})).catch((function(){e.$toasted.show("Failed to "+(e.isEdit?"update":"create")+" "+e.lowerCaseTitle+".",{type:"error"})}))}}}},d=r("psIG"),f=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v(e._s(e.title))])]),e._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{required:"",label:"Name",rules:[e.rules.required]},model:{value:e.formValues.name,callback:function(t){e.$set(e.formValues,"name",t)},expression:"formValues.name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-switch",{staticClass:"pr-4",attrs:{inset:"",label:"Enable",color:"primary"},model:{value:e.formValues.enable,callback:function(t){e.$set(e.formValues,"enable",t)},expression:"formValues.enable"}})],1),e._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-switch",{staticClass:"pr-4",attrs:{inset:"",label:"Save History",color:"primary"},model:{value:e.formValues.enable_history,callback:function(t){e.$set(e.formValues,"enable_history",t)},expression:"formValues.enable_history"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-select",{attrs:{label:"Thing Class","item-value":"name",items:e.thingTypes,"item-text":"displayName"},on:{change:e.onThingTypeChange},model:{value:e.formValues.producer_thing_class,callback:function(t){e.$set(e.formValues,"producer_thing_class",t)},expression:"formValues.producer_thing_class"}})],1),e._v(" "),"network"===e.formValues.producer_thing_class?r("v-col",{attrs:{cols:"12"}},[r("v-autocomplete",{attrs:{chips:"",clearable:"","small-chips":"",label:"Network","item-value":"uuid","item-text":"name",items:e.networks,"deletable-chips":"",rules:[e.rules.required]},model:{value:e.formValues.producer_thing_uuid,callback:function(t){e.$set(e.formValues,"producer_thing_uuid",t)},expression:"formValues.producer_thing_uuid"}})],1):e._e(),e._v(" "),"device"===e.formValues.producer_thing_class?r("v-col",{attrs:{cols:"12"}},[r("v-autocomplete",{attrs:{chips:"",clearable:"","small-chips":"",label:"Device","item-value":"uuid","item-text":"name",items:e.devices,rules:[e.rules.required],"deletable-chips":""},model:{value:e.formValues.producer_thing_uuid,callback:function(t){e.$set(e.formValues,"producer_thing_uuid",t)},expression:"formValues.producer_thing_uuid"}})],1):e._e(),e._v(" "),"point"===e.formValues.producer_thing_class?r("v-col",{attrs:{cols:"12"}},[r("v-autocomplete",{attrs:{chips:"",clearable:"","small-chips":"",label:"Point","item-value":"uuid","item-text":"displayName",items:e.allPoints,loading:e.isFetchingAllDevices,rules:[e.rules.required],"deletable-chips":""},model:{value:e.formValues.producer_thing_uuid,callback:function(t){e.$set(e.formValues,"producer_thing_uuid",t)},expression:"formValues.producer_thing_uuid"}})],1):e._e(),e._v(" "),"schedule"===e.formValues.producer_thing_class?r("v-col",{attrs:{cols:"12"}},[r("v-autocomplete",{attrs:{chips:"",clearable:"","small-chips":"",label:"Scheulde","item-value":"uuid","item-text":"name",items:e.schedules,loading:e.isFetchingSchedules,rules:[e.rules.required],"deletable-chips":""},model:{value:e.formValues.producer_thing_uuid,callback:function(t){e.$set(e.formValues,"producer_thing_uuid",t)},expression:"formValues.producer_thing_uuid"}})],1):e._e(),e._v(" "),"point_filter"===e.formValues.producer_thing_class?r("v-col",{attrs:{cols:"12"}},[r("v-autocomplete",{attrs:{chips:"",clearable:"","small-chips":"",label:"Network","item-value":"uuid","item-text":"name",items:e.networks,rules:[e.rules.required],"deletable-chips":""},on:{change:e.fetchChildDevicesByNetworkId},model:{value:e.selectedNetwork,callback:function(t){e.selectedNetwork=t},expression:"selectedNetwork"}}),e._v(" "),r("v-autocomplete",{attrs:{disabled:!e.selectedNetwork,chips:"",loading:e.isFetchingNetworkDevices,clearable:"","small-chips":"",label:"Device","item-value":"uuid","item-text":"name",items:e.devices,rules:[e.rules.required],"deletable-chips":""},on:{change:e.fetchChildPointsByDeviceId},model:{value:e.selectedDevice,callback:function(t){e.selectedDevice=t},expression:"selectedDevice"}}),e._v(" "),r("v-autocomplete",{attrs:{chips:"",disabled:!e.selectedDevice,clearable:"",loading:e.isFetchingDevicePoints,"small-chips":"",label:"Point","item-value":"uuid","item-text":"name",items:e.points,rules:[e.rules.required],"deletable-chips":""},model:{value:e.formValues.producer_thing_uuid,callback:function(t){e.$set(e.formValues,"producer_thing_uuid",t)},expression:"formValues.producer_thing_uuid"}})],1):e._e(),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-select",{attrs:{label:"Thing Action",items:e.thingActions,"item-text":"displayName","item-value":"name"},model:{value:e.formValues.producer_application,callback:function(t){e.$set(e.formValues,"producer_application",t)},expression:"formValues.producer_application"}})],1)],1)],1)],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-card-actions",{staticClass:"align-end justify-end"},[r("v-btn",{attrs:{color:"darken-1",text:""},on:{click:e.onCancel}},[e._v(" Cancel ")]),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",loading:e.isSaving,text:""},on:{click:function(t){return e.onSubmit(e.formValues)}}},[e._v(" "+e._s(e.saveTitle)+" ")])],1)],1)}),[],!1,null,null,null);t.a=f.exports},DeKB:function(e,t,r){"use strict";var n=r("Zv/C"),i=r.n(n),s=r("uzYq"),a=r("NWgQ"),o=r.n(a),l=r("PWxN"),u=r.n(l),c=function(){var e=this;this.uri="",this.evaluateUri=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return"function"==typeof e.uri?e.uri(t):uri},this.fetch=function(t){var r=e.evaluateUri(),n=null;return t&&t.hasOwnProperty("id")?(n=t.id,t=u()(t,"id")):t&&t.hasOwnProperty("uuid")&&(n=t.uuid,t=u()(t,"uuid")),t&&(r=r+"?"+o.a.stringify(t)),n?e.fetchById(n,t):s.a.get(r)},this.fetchById=function(t,r){var n=e.evaluateUri(t);return r&&(n=n+"?"+o.a.stringify(r)),s.a.get(n)},this.remove=function(){var t=e.evaluateUri();return s.a.delete(t)},this.removeById=function(t){var r=e.evaluateUri(t);return s.a.delete(r)},this.create=function(t){var r=e.evaluateUri();return s.a.post(r,t)},this.patch=function(t,r){var n=e.evaluateUri(t);return s.a.patch(n,r)},this.update=function(t,r){var n=e.evaluateUri(t);return s.a.put(n,r)}};t.a=function e(t){i()(this,e),c.call(this),this.uri=t}},IpYZ:function(e,t,r){"use strict";r.d(t,"a",(function(){return C}));var n=r("tZmG"),i=r.n(n),s=r("YUSd"),a=r.n(s),o=r("Zv/C"),l=r.n(o),u=r("2lBV"),c=r.n(u),d=r("Dkg+"),f=r.n(d),m=r("Gjrs"),v=r.n(m),h=r("DeKB"),p=r("oCli"),w=r("uzYq"),_=r("PWxN"),g=r.n(_),b=r("NWgQ"),k=r.n(b),C=new(function(e){function t(){l()(this,t);var e=f()(this,(t.__proto__||a()(t)).call(this,p.a.rfDevices));return e.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.uuid||e.id;if(!t)throw new Error("UUID is required for fetching devices of network");var r=p.a.rfNetworks(t);return(e=g()(e,["uuid","id"]))&&i()(e).length>0&&(r=r+"?"+k.a.stringify(e)),w.a.get(r).then((function(e){return{dataItems:e.devices,extraData:g()(e,["devices"])}}))},e}return v()(t,e),c()(t,[{key:"fetchAll",value:function(){var e=p.a.rfDevices();return w.a.get(e)}}]),t}(h.a))},L9C3:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"c",(function(){return w})),r.d(t,"b",(function(){return _}));var n,i=r("TcPG"),s=r.n(i),a="api",o="point",l="point_filter",u="internal_api",c="external_api",d="schedule",f="global_schedule",m="alert",v="mapping",h=(n={},s()(n,a,{displayName:"API",name:a,value:a}),s()(n,o,{displayName:"Point",name:o,value:o}),s()(n,l,{displayName:"Point Filter",name:l,value:o}),s()(n,u,{displayName:"InternalAPI",name:u,value:u}),s()(n,c,{displayName:"ExternalAPI",name:c,value:c}),s()(n,d,{displayName:"Schedule",name:d,value:d}),s()(n,f,{displayName:"GlobalSchedule",name:f,value:f}),s()(n,m,{displayName:"Alert",name:m}),n),p=s()({},v,{displayName:"Mapping",name:v}),w=[h.point,h.schedule],_=[p.mapping]},QW67:function(e,t,r){"use strict";r.r(t);var n=r("Kz1y"),i=r.n(n),s=r("TcPG"),a=r.n(s),o=r("oGAK"),l=r("2SyR"),u=r("oujF"),c=r("CfmX"),d=r("97BG"),f=r("C4vA"),m={name:"flow-network-streams-form",props:["isEdit","onCancel","onSave","item","isSaving","flowNetworks"],data:function(){return{selectedFlowNetworks:[],rules:{required:function(e){return!!e||"Required."},numberRule:function(e){return!isNaN(parseFloat(e))||"Required."}},valid:!1,formValues:i()({},{name:null,enable:!0})}},computed:{title:function(){return this.isEdit?"Edit Streams":"Create Streams"},saveTitle:function(){return this.isEdit?"Save":"Create"},flowNetworkId:function(){return this.$route.params.flowNetworkId}},mounted:function(){this.isEdit&&this.item&&(this.formValues=i()({},this.formValues,this.item))},methods:{cleanUp:function(){this.formValues={},"function"==typeof this.onCancel&&this.onCancel()},onSubmit:function(){var e=this;if(this.$refs.form.validate()){if("function"!=typeof this.onSave)throw new Error("Flow network form onSave function not passed");return this.formValues=i()({},this.formValues,{flow_networks:[{uuid:this.flowNetworkId}]}),this.onSave(this.formValues).then((function(){e.$toasted.show("Successfully "+(e.isEdit?"updated":"created")+" streams"),e.cleanUp(!0)})).catch((function(){e.$toasted.show("Failed to "+(e.isEdit?"update":"create")+" streams")}))}}}},v=r("psIG"),h=Object(v.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v(e._s(e.title))])]),e._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"8"}},[r("v-text-field",{attrs:{required:"",label:"Stream name",rules:[e.rules.required]},model:{value:e.formValues.name,callback:function(t){e.$set(e.formValues,"name",t)},expression:"formValues.name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"2"}},[r("v-switch",{attrs:{label:"Enable"},model:{value:e.formValues.enable,callback:function(t){e.$set(e.formValues,"enable",t)},expression:"formValues.enable"}})],1)],1)],1)],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-card-actions",{staticClass:"align-end justify-end"},[r("v-btn",{attrs:{color:"darken-1",text:""},on:{click:e.onCancel}},[e._v(" Cancel ")]),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",loading:e.isSaving,text:""},on:{click:function(t){return e.onSubmit(e.formValues)}}},[e._v(" "+e._s(e.saveTitle)+" ")])],1)],1)}),[],!1,null,null,null).exports,p=r("4z8c"),w=r("tZmG"),_=r.n(w),g=r("YUSd"),b=r.n(g),k=r("Zv/C"),C=r.n(k),N=r("2lBV"),y=r.n(N),I=r("Dkg+"),x=r.n(I),S=r("Gjrs"),V=r.n(S),F=r("DeKB"),D=r("oCli"),P=r("uzYq"),E=r("PWxN"),$=r.n(E),B=r("NWgQ"),G=r.n(B),T=new(function(e){function t(){C()(this,t);var e=x()(this,(t.__proto__||b()(t)).call(this,D.a.rfStreams));return e.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.uuid||e.id;if(!t)throw new Error("Flow network Id is required for fetching consumers of streams");var r=D.a.rfFlowNetwork(t);return(e=$()(e,["uuid","id"]))&&_()(e).length>0&&(r=r+"?"+G.a.stringify(e)),P.a.get(r).then((function(e){return{dataItems:e.streams,extraData:$()(e,["streams"])}}))},e}return V()(t,e),y()(t,[{key:"fetchAll",value:function(){var e=D.a.rfStreams();return P.a.get(e)}}]),t}(F.a)),q=r("e1ED"),z=r("ilzx"),A=r("fBuC"),U=r("rIlz"),j={name:"associate-streams-form",props:["streamId","onCancel","refreshGridCb"],components:{AssociateObjectStreams:z.a,FlowMappingForm:q.a},data:function(){return{isLoadingData:!1,currentItems:null,flowNetworks:[]}},mounted:function(){this.fetchCurrentFlowNetworks(),this.fetchAllFLowNetworks()},computed:{flowNetworkId:function(){return this.$route.params.flowNetworkId}},methods:{onSave:function(e){var t=this;return U.a.patch(this.streamId,{flow_networks:e}).then((function(e){return"function"==typeof t.refreshGridCb&&t.refreshGridCb(),e}))},fetchAllFLowNetworks:function(){var e=this;return A.a.fetch().then((function(t){return e.flowNetworks=t,t}))},fetchCurrentFlowNetworks:function(){var e=this;return this.isLoadingData=!0,U.a.fetchById(this.streamId,{with_flow_networks:!0}).then((function(t){return e.currentItems=t.flow_networks||[],t})).finally((function(){e.isLoadingData=!1}))}}},O=Object(v.a)(j,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.currentItems?r("flow-mapping-form",{attrs:{currentItems:e.currentItems,items:e.flowNetworks,onSave:e.onSave,title:"Associate Flow Networks",onCancel:e.onCancel}}):e._e(),e._v(" "),r("v-overlay",{attrs:{value:e.isLoadingData}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"32",color:"primary"}})],1)],1)}),[],!1,null,null,null).exports,K={viewProducers:"viewProducer",createProducers:"createProducers",associateFlowNetwork:"associateFlowNetwork"},Y=a()({},K.viewProducers,(function(e,t){return o.a.rfFlowNetworkProducer.replace(":flowNetworkId",e).replace(":streamId",t)})),L={components:{TextButton:u.a,GenericGrid:c.a,IconButton:l.a,ProducersForm:f.a,AssociateFlowNetwork:O,FlowNetworkStreamsForm:h},name:"flow-network-streams-grid",props:["params"],data:function(){return{selectedItem:{},producerValues:{},toolbarTitle:"Streams",refreshGridCb:function(e){return e},gridName:d.k,service:T,isCreatingProducer:!1,isCreatingConsumer:!1,isCreatingCommandGroup:!1,dialogNames:i()({},K),dialog:a()({},K.createProducers,!1),gridHeaders:[{text:"Name",align:"center",value:"name",sortable:!0},{text:"View",align:"center",value:"gridItemActions",sortable:!1},{text:"Actions",align:"center",value:"actions",sortable:!0}]}},computed:{flowNetworks:function(){return this.$store.state.rfFlowNetworks},flowNetworkId:function(){return this.$route.params.flowNetworkId}},methods:{toggleDialog:function(e,t,r){this.selectedItem=t,this.dialog[e]=!this.dialog[e],this.refreshGridCb=r,this.dialog[e]?this.selectedItem=t:this.selectedItem=null},closeDialog:function(e){this.dialog[e]=!1,this.selectedItem={}},createProducer:function(e){var t=this;return this.isCreatingProducer=!0,p.a.create(e).then((function(e){return t.closeDialog(t.dialogNames.createProducers),e})).finally((function(){t.isCreatingProducer=!1}))},redirectTo:function(e,t){var r=t.uuid;if(r){var n=Y[e];"function"==typeof n&&this.$router.push({path:n(this.flowNetworkId,r)})}}}},R=Object(v.a)(L,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("generic-grid",{attrs:{gridName:e.gridName,isHeaderConfigurable:!0,params:e.params,service:e.service,headers:e.gridHeaders,toolbarTitle:e.toolbarTitle},scopedSlots:e._u([{key:"routeLinkName",fn:function(t){var n=t.item;return[r("text-button",{attrs:{text:n.name,onClick:function(){return e.redirectTo(e.dialogNames.viewProducers,n)}}})]}},{key:"createForm",fn:function(t){var n=t.onSave,i=t.onClose,s=t.isOpen,a=t.isSaving;return[s?r("flow-network-streams-form",{attrs:{isEdit:!1,onSave:n,onCancel:i,isSaving:a,flowNetworks:e.flowNetworks}}):e._e()]}},{key:"editForm",fn:function(t){var n=t.onSave,i=t.item,s=t.onClose,a=t.isOpen,o=t.isSaving;return[a?r("flow-network-streams-form",{attrs:{item:i,isEdit:!0,onSave:n,onCancel:s,isSaving:o,flowNetworks:e.flowNetworks}}):e._e()]}},{key:"gridItemActions",fn:function(t){var n=t.item,i=t.refreshGrid;return[r("icon-button",{attrs:{title:"Associate Flow Network",icon:"mdi-plus",color:"nubeYellow",onClick:function(){return e.toggleDialog(e.dialogNames.associateFlowNetwork,n,i)}}})]}}])}),e._v(" "),e.selectedItem&&e.selectedItem.uuid?r("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:e.dialog[e.dialogNames.associateFlowNetwork],callback:function(t){e.$set(e.dialog,e.dialogNames.associateFlowNetwork,t)},expression:"dialog[dialogNames.associateFlowNetwork]"}},[e.dialog[e.dialogNames.associateFlowNetwork]?r("associate-flow-network",{attrs:{refreshGridCb:e.refreshGridCb,streamId:e.selectedItem&&e.selectedItem.uuid,onCancel:function(){return e.closeDialog(e.dialogNames.associateFlowNetwork)}}}):e._e()],1):e._e()],1)}),[],!1,null,null,null).exports,W=r("Ui9F"),Z=r("VNy9"),Q={name:"flow-network-streams",components:{FlowNetworkStreamsGrid:R,TooltipIconButton:W.a,Breadcrumbs:Z.a},data:function(){return{params:{uuid:null,with_streams:!0},renderCount:0,gridData:{},breadcrumbItems:[]}},watch:{"$route.params.flowNetworkId":function(e,t){e!=t&&(this.renderCount++,this.initialize())}},mounted:function(){this.initialize()},methods:{initialize:function(){this.params=i()({},this.params,{uuid:this.$route.params.flowNetworkId}),this.setBreadCrumbs()},onBack:function(){this.$router.go(-1)},getDataCb:function(e){this.gridData=e},setBreadCrumbs:function(){this.breadcrumbItems=[],this.breadcrumbItems.push({text:"Flow Network",align:"center",disabled:!0,link:o.a.rfFlowNetwork}),this.breadcrumbItems.push({text:this.$route.params.flowNetworkId,align:"center",disabled:!1}),this.breadcrumbItems.push({text:"Streams",align:"center",disabled:!0})}}},H=Object(v.a)(Q,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{key:e.renderCount,attrs:{outlined:""}},[r("v-card-title",[e._v(" Flow Network Streams ")]),e._v(" "),r("v-card-text",[r("breadcrumbs",{attrs:{items:e.breadcrumbItems}}),e._v(" "),r("v-row",{attrs:{"no-gutter":""}},[r("v-col",{attrs:{cols:"12",lg:"12",xl:"12",md:"12",sm:"12",xs:"12"}},[e.params.uuid?r("flow-network-streams-grid",{attrs:{params:e.params,getDataCb:e.getDataCb}}):e._e()],1)],1)],1)],1)}),[],!1,null,null,null);t.default=H.exports},VNy9:function(e,t,r){"use strict";var n={name:"breadcrumbs",props:["items"]},i=r("psIG"),s=Object(i.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-breadcrumbs",{staticClass:"breadcrumbs",attrs:{items:e.items},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[r("v-breadcrumbs-item",{staticClass:"breadcrumbs-item-text",attrs:{to:n.link,exact:""}},[e._v(" "+e._s(n.text)+" ")])]}}])})}),[],!1,null,"04244946",null);t.a=s.exports},e1ED:function(e,t,r){"use strict";var n=r("snOE"),i=r.n(n),s={name:"flow-mapping-form",props:["currentItems","items","onSave","onCancel","title"],data:function(){return{selectedItems:[],isSaving:!1,valid:!1}},computed:{lowerCaseTitle:function(){return(this.title||"").toLowerCase()}},mounted:function(){this.currentItems&&this.currentItems.length>0&&(this.selectedItems=[].concat(i()(this.currentItems)))},destroyed:function(){this.cleanUp()},methods:{cleanUp:function(){this.selectedItems=[],"function"==typeof this.onCancel&&this.onCancel()},onSubmit:function(){var e=this;if("function"!=typeof this.onSave)throw new Error(this.lowerCaseTitle+" form onSave function not passed");return this.isSaving=!0,this.onSave(this.selectedItems,this.currentItems).then((function(){e.$toasted.show("Successfully mapped."),e.cleanUp(!0)})).catch((function(){e.$toasted.show("Mapping unsuccessful.",{type:"error"})})).finally((function(){e.isSaving=!1}))}}},a=r("psIG"),o=Object(a.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v(e._s(e.title))])]),e._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-autocomplete",{attrs:{chips:"",multiple:"",clearable:"","small-chips":"","return-object":"","item-value":"uuid","item-text":"name",items:e.items,"deletable-chips":""},model:{value:e.selectedItems,callback:function(t){e.selectedItems=t},expression:"selectedItems"}})],1)],1)],1)],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-card-actions",{staticClass:"align-end justify-end"},[r("v-btn",{attrs:{color:"darken-1",text:""},on:{click:e.onCancel}},[e._v(" Cancel ")]),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",loading:e.isSaving,text:""},on:{click:function(t){return e.onSubmit()}}},[e._v(" Save ")])],1)],1)}),[],!1,null,null,null);t.a=o.exports},fBuC:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("Kz1y"),i=r.n(n),s=r("YUSd"),a=r.n(s),o=r("Zv/C"),l=r.n(o),u=r("Dkg+"),c=r.n(u),d=r("Gjrs"),f=r.n(d),m=r("uzYq"),v=r("DeKB"),h=r("oCli"),p=new(function(e){function t(){l()(this,t);var e=c()(this,(t.__proto__||a()(t)).call(this,h.a.rfFlowNetwork));return e.getPayloadToRequest=function(e){return i()({},e,{streams:e&&e.streams?e.streams.map((function(e){return{uuid:e.uuid}})):[]})},e.create=function(t){var r=e.evaluateUri();return m.a.post(r,e.getPayloadToRequest(t))},e}return f()(t,e),t}(v.a))},ilzx:function(e,t,r){"use strict";var n=r("Kz1y"),i=r.n(n),s=r("OBCi"),a=r.n(s),o=r("e1ED"),l=r("rIlz"),u={name:"associate-object-stream-form",props:["streamId","apiListKey","onCancel","service","title","items"],components:{FlowMappingForm:o.a},data:function(){return{currentItems:null}},mounted:function(){this.fetchStreamById()},methods:{onSave:function(e){var t=this;return a.a.all(e.map((function(e){return t.service.patch(e.uuid,i()({},e,{stream_uuid:t.streamId}))})))},fetchStreamById:function(){var e=this;return l.a.fetchById(this.streamId).then((function(t){return e.currentItems=t[e.apiListKey]||[],t}))}}},c=r("psIG"),d=Object(c.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.currentItems?r("flow-mapping-form",{attrs:{items:e.items,currentItems:e.currentItems,onSave:e.onSave,title:e.title,onCancel:e.onCancel}}):e._e()}),[],!1,null,null,null);t.a=d.exports},oCli:function(e,t,r){"use strict";function n(e,t){return e?t+"/"+e:t}t.a={rfFNCStreams:function(e){return n(e,"rf-fnc")},rfCommands:function(e){return n(e,"/rf-commands")},rfLogin:function(e){return n(e,"/rf-login")},rfSchedules:function(e){return n(e,"/rf-schedules")},rfFlowNetwork:function(e){return n(e,"/rf-flow-network")},rfFlowNetworkClone:function(e){return n(e,"/rf-flow-network-clone")},rfJobs:function(e){return n(e,"/rf-jobs")},rfNetworks:function(e){return n(e,"/rf-networks")},rfPoints:function(e){return n(e,"/rf-points")},rfProducers:function(e){return n(e,"/rf-producers")},rfConsumers:function(e){return n(e,"/rf-consumers")},rfWriters:function(e){return n(e,"/rf-writers")},rfWriterClones:function(e){return n(e,"/rf-writer-clones")},rfStreams:function(e){return n(e,"/rf-streams")},rfStreamsClone:function(e){return n(e,"/rf-streams-clone")},rfDevices:function(e){return n(e,"/rf-devices")},rfWriterActions:function(e){return n(e,"/rf-writer-actions")}}},oujF:function(e,t,r){"use strict";var n={name:"text-button",props:["onClick","text"]},i=r("psIG"),s=Object(i.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-btn",{staticClass:"ma-1",attrs:{link:"",color:"nubeGreen",plain:""},on:{click:e.onClick}},[r("span",{staticClass:"btn-text"},[e._v(e._s(e.text))])])}),[],!1,null,null,null);t.a=s.exports},rIlz:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("Kz1y"),i=r.n(n),s=r("YUSd"),a=r.n(s),o=r("Zv/C"),l=r.n(o),u=r("Dkg+"),c=r.n(u),d=r("Gjrs"),f=r.n(d),m=r("uzYq"),v=r("DeKB"),h=r("oCli"),p=new(function(e){function t(){l()(this,t);var e=c()(this,(t.__proto__||a()(t)).call(this,h.a.rfStreams));return e.getPayloadToRequest=function(e){return i()({},e,{flow_networks:e&&e.flow_networks?e.flow_networks.map((function(e){return{uuid:e.uuid}})):[]})},e.create=function(t){var r=e.evaluateUri();return m.a.post(r,e.getPayloadToRequest(t))},e}return f()(t,e),t}(v.a))},wffz:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("DeKB"),i=r("oCli"),s=new n.a(i.a.rfNetworks)}}]);
//# sourceMappingURL=14.766f25e58c57b8aa445e.js.map