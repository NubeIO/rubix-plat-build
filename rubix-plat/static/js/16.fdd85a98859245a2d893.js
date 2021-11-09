(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"4z8c":function(e,t,r){"use strict";r.d(t,"a",(function(){return C}));var a=r("tZmG"),i=r.n(a),n=r("YUSd"),s=r.n(n),o=r("Zv/C"),l=r.n(o),u=r("2lBV"),c=r.n(u),d=r("Dkg+"),m=r.n(d),f=r("Gjrs"),v=r.n(f),h=r("DeKB"),p=r("oCli"),w=r("uzYq"),_=r("PWxN"),g=r.n(_),b=r("NWgQ"),k=r.n(b),C=new(function(e){function t(){l()(this,t);var e=m()(this,(t.__proto__||s()(t)).call(this,p.a.rfProducers));return e.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.uuid||e.id;if(!t)throw new Error("Stream Id is required for fetching producers of streams");var r=p.a.rfStreams(t);return(e=g()(e,["uuid","id"]))&&i()(e).length>0&&(r=r+"?"+k.a.stringify(e)),w.a.get(r).then((function(e){return{dataItems:e.producers,extraData:g()(e,["producers"])}}))},e}return v()(t,e),c()(t,[{key:"fetchAll",value:function(){var e=p.a.rfProducers();return w.a.get(e)}}]),t}(h.a))},C4vA:function(e,t,r){"use strict";var a,i=r("Kz1y"),n=r.n(i),s=r("yEOx"),o=r.n(s),l=r("TcPG"),u=r.n(l),c="api",d="network",m="device",f="point",v="point_filter",h="internal_api",p="external_api",w="schedule",_="global_schedule",g="alert",b="mapping",k=(a={},u()(a,c,{displayName:"API",name:c,value:c}),u()(a,d,{displayName:"Network",name:d,value:d}),u()(a,m,{displayName:"Device",name:m,value:m}),u()(a,f,{displayName:"Point",name:f,value:f}),u()(a,v,{displayName:"Point Filter",name:v,value:f}),u()(a,h,{displayName:"InternalAPI",name:h,value:h}),u()(a,p,{displayName:"ExternalAPI",name:p,value:p}),u()(a,w,{displayName:"Schedule",name:w,value:w}),u()(a,_,{displayName:"GlobalSchedule",name:_,value:_}),u()(a,g,{displayName:"Alert",name:g}),a),C=u()({},b,{displayName:"Mapping",name:b}),y=[k.network,k.device,k.point,k.point_filter],N=[C.mapping],x=r("wffz"),I=r("IpYZ"),V={name:"producers-form",props:["isEdit","onCancel","onSave","item","isSaving","stream"],data:function(){return{rules:{required:function(e){return!!e||"Required."},numberRule:function(e){return!isNaN(parseFloat(e))||"Required."}},devices:[],points:[],isFetchingNetworkDevices:!1,isFetchingDevicePoints:!1,selectedNetwork:null,selectedDevice:null,thingTypes:y,thingActions:N,valid:!1,formValues:n()({},{name:"producer",enable:!1,thing_type:"point",enable_history:!1,producer_application:"mapping",stream_uuid:null,producer_thing_uuid:null})}},computed:{lowerCaseTitle:function(){return"producers"},titleCase:function(){return"Producers"},title:function(){return this.isEdit?"Edit "+this.titleCase:"Create "+this.titleCase},saveTitle:function(){return this.isEdit?"Save":"Create"},networks:function(){return this.$store.state.rfNetworks}},mounted:function(){this.isEdit&&this.item&&(this.formValues=n()({},this.formValues,this.item)),!this.isEdit&&this.stream&&(this.formValues=n()({},this.formValues,{stream_uuid:this.stream.uuid}))},methods:{cleanUp:function(){this.formValues={},"function"==typeof this.onCancel&&this.onCancel()},onThingTypeChange:function(){this.formValues.producer_thing_uuid=null},fetchChildDevicesByNetworkId:function(e){var t=this;if(!e)return this.selectedDevice=null,void(this.formValues.producer_thing_uuid=null);this.isFetchingNetworkDevices=!0,x.a.fetchById(e,{with_devices:!0}).then((function(e){t.devices=e.devices})).finally((function(){t.isFetchingNetworkDevices=!1}))},fetchChildPointsByDeviceId:function(e){var t=this;e?(this.isFetchingDevicePoints=!0,I.a.fetchById(e,{with_points:!0}).then((function(e){t.points=e.points})).finally((function(){t.isFetchingDevicePoints=!1}))):this.formValues.producer_thing_uuid=null},transformFormValues:function(e){var t=o()(e);return t.thing_type=k[t.thing_type].value,t},onSubmit:function(){var e=this;if(this.$refs.form.validate()){if("function"!=typeof this.onSave)throw new Error(this.lowerCaseTitle+" form onSave function not passed");return this.onSave(this.transformFormValues(this.formValues)).then((function(){e.$toasted.show("Successfully "+(e.isEdit?"updated":"created")+" "+e.lowerCaseTitle+"."),e.cleanUp(!0)})).catch((function(){e.$toasted.show("Failed to "+(e.isEdit?"update":"create")+" "+e.lowerCaseTitle+".",{type:"error"})}))}}}},S=r("psIG"),D=Object(S.a)(V,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v(e._s(e.title))])]),e._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{required:"",label:"Name",rules:[e.rules.required]},model:{value:e.formValues.name,callback:function(t){e.$set(e.formValues,"name",t)},expression:"formValues.name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-switch",{staticClass:"pr-4",attrs:{inset:"",label:"Enable",color:"primary"},model:{value:e.formValues.enable,callback:function(t){e.$set(e.formValues,"enable",t)},expression:"formValues.enable"}})],1),e._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-switch",{staticClass:"pr-4",attrs:{inset:"",label:"Save History",color:"primary"},model:{value:e.formValues.enable_history,callback:function(t){e.$set(e.formValues,"enable_history",t)},expression:"formValues.enable_history"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-select",{attrs:{label:"Thing Type","item-value":"name",items:e.thingTypes,"item-text":"displayName"},on:{change:e.onThingTypeChange},model:{value:e.formValues.thing_type,callback:function(t){e.$set(e.formValues,"thing_type",t)},expression:"formValues.thing_type"}})],1),e._v(" "),"network"===e.formValues.thing_type?r("v-col",{attrs:{cols:"12"}},[r("v-autocomplete",{attrs:{chips:"",clearable:"","small-chips":"",label:"Network","item-value":"uuid","item-text":"name",items:e.networks,"deletable-chips":"",rules:[e.rules.required]},model:{value:e.formValues.producer_thing_uuid,callback:function(t){e.$set(e.formValues,"producer_thing_uuid",t)},expression:"formValues.producer_thing_uuid"}})],1):e._e(),e._v(" "),"device"===e.formValues.thing_type?r("v-col",{attrs:{cols:"12"}},[r("v-autocomplete",{attrs:{chips:"",clearable:"","small-chips":"",label:"Device","item-value":"uuid","item-text":"name",items:e.devices,rules:[e.rules.required],"deletable-chips":""},model:{value:e.formValues.producer_thing_uuid,callback:function(t){e.$set(e.formValues,"producer_thing_uuid",t)},expression:"formValues.producer_thing_uuid"}})],1):e._e(),e._v(" "),"point"===e.formValues.thing_type?r("v-col",{attrs:{cols:"12"}},[r("v-autocomplete",{attrs:{chips:"",clearable:"","small-chips":"",label:"Point","item-value":"uuid","item-text":"name",items:e.points,rules:[e.rules.required],"deletable-chips":""},model:{value:e.formValues.producer_thing_uuid,callback:function(t){e.$set(e.formValues,"producer_thing_uuid",t)},expression:"formValues.producer_thing_uuid"}})],1):e._e(),e._v(" "),"point_filter"===e.formValues.thing_type?r("v-col",{attrs:{cols:"12"}},[r("v-autocomplete",{attrs:{chips:"",clearable:"","small-chips":"",label:"Network","item-value":"uuid","item-text":"name",items:e.networks,rules:[e.rules.required],"deletable-chips":""},on:{change:e.fetchChildDevicesByNetworkId},model:{value:e.selectedNetwork,callback:function(t){e.selectedNetwork=t},expression:"selectedNetwork"}}),e._v(" "),r("v-autocomplete",{attrs:{disabled:!e.selectedNetwork,chips:"",loading:e.isFetchingNetworkDevices,clearable:"","small-chips":"",label:"Device","item-value":"uuid","item-text":"name",items:e.devices,rules:[e.rules.required],"deletable-chips":""},on:{change:e.fetchChildPointsByDeviceId},model:{value:e.selectedDevice,callback:function(t){e.selectedDevice=t},expression:"selectedDevice"}}),e._v(" "),r("v-autocomplete",{attrs:{chips:"",disabled:!e.selectedDevice,clearable:"",loading:e.isFetchingDevicePoints,"small-chips":"",label:"Point","item-value":"uuid","item-text":"name",items:e.points,rules:[e.rules.required],"deletable-chips":""},model:{value:e.formValues.producer_thing_uuid,callback:function(t){e.$set(e.formValues,"producer_thing_uuid",t)},expression:"formValues.producer_thing_uuid"}})],1):e._e(),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-select",{attrs:{label:"Thing Action",items:e.thingActions,"item-text":"displayName","item-value":"name"},model:{value:e.formValues.producer_application,callback:function(t){e.$set(e.formValues,"producer_application",t)},expression:"formValues.producer_application"}})],1)],1)],1)],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-card-actions",{staticClass:"align-end justify-end"},[r("v-btn",{attrs:{color:"darken-1",text:""},on:{click:e.onCancel}},[e._v(" Cancel ")]),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",loading:e.isSaving,text:""},on:{click:function(t){return e.onSubmit(e.formValues)}}},[e._v(" "+e._s(e.saveTitle)+" ")])],1)],1)}),[],!1,null,null,null);t.a=D.exports},IpYZ:function(e,t,r){"use strict";r.d(t,"a",(function(){return C}));var a=r("tZmG"),i=r.n(a),n=r("YUSd"),s=r.n(n),o=r("Zv/C"),l=r.n(o),u=r("2lBV"),c=r.n(u),d=r("Dkg+"),m=r.n(d),f=r("Gjrs"),v=r.n(f),h=r("DeKB"),p=r("oCli"),w=r("uzYq"),_=r("PWxN"),g=r.n(_),b=r("NWgQ"),k=r.n(b),C=new(function(e){function t(){l()(this,t);var e=m()(this,(t.__proto__||s()(t)).call(this,p.a.rfDevices));return e.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.uuid||e.id;if(!t)throw new Error("UUID is required for fetching devices of network");var r=p.a.rfNetworks(t);return(e=g()(e,["uuid","id"]))&&i()(e).length>0&&(r=r+"?"+k.a.stringify(e)),w.a.get(r).then((function(e){return{dataItems:e.devices,extraData:g()(e,["devices"])}}))},e}return v()(t,e),c()(t,[{key:"fetchAll",value:function(){var e=p.a.rfDevices();return w.a.get(e)}}]),t}(h.a))},QW67:function(e,t,r){"use strict";r.r(t);var a=r("Kz1y"),i=r.n(a),n=r("TcPG"),s=r.n(n),o=r("oGAK"),l=r("2SyR"),u=r("oujF"),c=r("CfmX"),d=r("97BG"),m=r("C4vA"),f={name:"flow-network-streams-form",props:["isEdit","onCancel","onSave","item","isSaving","flowNetworks"],data:function(){return{selectedFlowNetworks:[],rules:{required:function(e){return!!e||"Required."},numberRule:function(e){return!isNaN(parseFloat(e))||"Required."}},valid:!1,formValues:i()({},{name:null,is_remote:!0,rubix_uuid:null,remote_rubix_uuid:null})}},computed:{title:function(){return this.isEdit?"Edit Streams":"Create Streams"},saveTitle:function(){return this.isEdit?"Save":"Create"}},mounted:function(){this.isEdit&&this.item&&(this.formValues=i()({},this.formValues,this.item))},methods:{cleanUp:function(){this.formValues={},"function"==typeof this.onCancel&&this.onCancel()},onSubmit:function(){var e=this;if(this.$refs.form.validate()){if("function"!=typeof this.onSave)throw new Error("Flow network form onSave function not passed");return this.onSave(this.formValues).then((function(){e.$toasted.show("Successfully "+(e.isEdit?"updated":"created")+" streams"),e.cleanUp(!0)})).catch((function(){e.$toasted.show("Failed to "+(e.isEdit?"update":"create")+" streams")}))}}}},v=r("psIG"),h=Object(v.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v(e._s(e.title))])]),e._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{required:"",label:"Stream name",rules:[e.rules.required]},model:{value:e.formValues.name,callback:function(t){e.$set(e.formValues,"name",t)},expression:"formValues.name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-autocomplete",{attrs:{chips:"",multiple:"",clearable:"","small-chips":"",label:"Flow networks","return-object":"","item-value":"uuid","item-text":"name",items:e.flowNetworks,"deletable-chips":""},model:{value:e.formValues.flow_networks,callback:function(t){e.$set(e.formValues,"flow_networks",t)},expression:"formValues.flow_networks"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-switch",{attrs:{label:"Enable Remote"},model:{value:e.formValues.is_remote,callback:function(t){e.$set(e.formValues,"is_remote",t)},expression:"formValues.is_remote"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{required:"",label:"Rubix Point"},model:{value:e.formValues.rubix_uuid,callback:function(t){e.$set(e.formValues,"rubix_uuid",t)},expression:"formValues.rubix_uuid"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[e.formValues.is_remote?r("v-text-field",{attrs:{required:"",label:"Remote Rubix Point"},model:{value:e.formValues.remote_rubix_uuid,callback:function(t){e.$set(e.formValues,"remote_rubix_uuid",t)},expression:"formValues.remote_rubix_uuid"}}):e._e()],1)],1)],1)],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-card-actions",{staticClass:"align-end justify-end"},[r("v-btn",{attrs:{color:"darken-1",text:""},on:{click:e.onCancel}},[e._v(" Cancel ")]),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",loading:e.isSaving,text:""},on:{click:function(t){return e.onSubmit(e.formValues)}}},[e._v(" "+e._s(e.saveTitle)+" ")])],1)],1)}),[],!1,null,null,null).exports,p=r("4z8c"),w=r("tZmG"),_=r.n(w),g=r("YUSd"),b=r.n(g),k=r("Zv/C"),C=r.n(k),y=r("2lBV"),N=r.n(y),x=r("Dkg+"),I=r.n(x),V=r("Gjrs"),S=r.n(V),D=r("DeKB"),F=r("oCli"),P=r("uzYq"),$=r("PWxN"),E=r.n($),G=r("NWgQ"),T=r.n(G),q=new(function(e){function t(){C()(this,t);var e=I()(this,(t.__proto__||b()(t)).call(this,F.a.rfStreams));return e.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.uuid||e.id;if(!t)throw new Error("Flow network Id is required for fetching consumers of streams");var r=F.a.rfFlowNetwork(t);return(e=E()(e,["uuid","id"]))&&_()(e).length>0&&(r=r+"?"+T.a.stringify(e)),P.a.get(r).then((function(e){return{dataItems:e.streams,extraData:E()(e,["streams"])}}))},e}return S()(t,e),N()(t,[{key:"fetchAll",value:function(){var e=F.a.rfStreams();return P.a.get(e)}}]),t}(D.a)),B=r("e1ED"),j=r("ilzx"),z=r("fBuC"),A=r("rIlz"),U={name:"associate-streams-form",props:["streamId","onCancel","refreshGridCb"],components:{AssociateObjectStreams:j.a,FlowMappingForm:B.a},data:function(){return{isLoadingData:!1,currentItems:null,flowNetworks:[]}},mounted:function(){this.fetchCurrentFlowNetworks(),this.fetchAllFLowNetworks()},computed:{flowNetworkId:function(){return this.$route.params.flowNetworkId}},methods:{onSave:function(e){var t=this;return A.a.patch(this.streamId,{flow_networks:e}).then((function(e){return"function"==typeof t.refreshGridCb&&t.refreshGridCb(),e}))},fetchAllFLowNetworks:function(){var e=this;return z.a.fetch().then((function(t){return e.flowNetworks=t,t}))},fetchCurrentFlowNetworks:function(){var e=this;return this.isLoadingData=!0,A.a.fetchById(this.streamId,{with_flow_networks:!0}).then((function(t){return e.currentItems=t.flow_networks||[],t})).finally((function(){e.isLoadingData=!1}))}}},R=Object(v.a)(U,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.currentItems?r("flow-mapping-form",{attrs:{currentItems:e.currentItems,items:e.flowNetworks,onSave:e.onSave,title:"Associate Flow Networks",onCancel:e.onCancel}}):e._e(),e._v(" "),r("v-overlay",{attrs:{value:e.isLoadingData}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"32",color:"primary"}})],1)],1)}),[],!1,null,null,null).exports,K={viewProducers:"viewProducer",createProducers:"createProducers",associateFlowNetwork:"associateFlowNetwork"},O=s()({},K.viewProducers,(function(e,t){return o.a.rfFlowNetworkProducer.replace(":flowNetworkId",e).replace(":streamId",t)})),Y={components:{TextButton:u.a,GenericGrid:c.a,IconButton:l.a,ProducersForm:m.a,AssociateFlowNetwork:R,FlowNetworkStreamsForm:h},name:"flow-network-streams-grid",props:["params"],data:function(){return{selectedItem:{},producerValues:{},toolbarTitle:"Streams",refreshGridCb:function(e){return e},gridName:d.i,service:q,isCreatingProducer:!1,isCreatingConsumer:!1,isCreatingCommandGroup:!1,dialogNames:i()({},K),dialog:s()({},K.createProducers,!1),gridHeaders:[{text:"Name",align:"center",value:"name",sortable:!0},{text:"View",align:"center",value:"gridItemActions",sortable:!1},{text:"Actions",align:"center",value:"actions",sortable:!0}]}},computed:{flowNetworks:function(){return this.$store.state.rfFlowNetworks},flowNetworkId:function(){return this.$route.params.flowNetworkId}},methods:{toggleDialog:function(e,t,r){this.selectedItem=t,this.dialog[e]=!this.dialog[e],this.refreshGridCb=r,this.dialog[e]?this.selectedItem=t:this.selectedItem=null},closeDialog:function(e){this.dialog[e]=!1,this.selectedItem={}},createProducer:function(e){var t=this;return this.isCreatingProducer=!0,p.a.create(e).then((function(e){return t.closeDialog(t.dialogNames.createProducers),e})).finally((function(){t.isCreatingProducer=!1}))},redirectTo:function(e,t){var r=t.uuid;if(r){var a=O[e];"function"==typeof a&&this.$router.push({path:a(this.flowNetworkId,r)})}}}},L=Object(v.a)(Y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("generic-grid",{attrs:{gridName:e.gridName,isHeaderConfigurable:!0,params:e.params,service:e.service,headers:e.gridHeaders,toolbarTitle:e.toolbarTitle},scopedSlots:e._u([{key:"routeLinkName",fn:function(t){var a=t.item;return[r("text-button",{attrs:{text:a.name,onClick:function(){return e.redirectTo(e.dialogNames.viewProducers,a)}}})]}},{key:"gridItemActions",fn:function(t){var a=t.item,i=t.refreshGrid;return[r("icon-button",{attrs:{title:"Associate Flow Network",icon:"mdi-plus",color:"nubeYellow",onClick:function(){return e.toggleDialog(e.dialogNames.associateFlowNetwork,a,i)}}})]}}])}),e._v(" "),e.selectedItem&&e.selectedItem.uuid?r("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:e.dialog[e.dialogNames.associateFlowNetwork],callback:function(t){e.$set(e.dialog,e.dialogNames.associateFlowNetwork,t)},expression:"dialog[dialogNames.associateFlowNetwork]"}},[e.dialog[e.dialogNames.associateFlowNetwork]?r("associate-flow-network",{attrs:{refreshGridCb:e.refreshGridCb,streamId:e.selectedItem&&e.selectedItem.uuid,onCancel:function(){return e.closeDialog(e.dialogNames.associateFlowNetwork)}}}):e._e()],1):e._e()],1)}),[],!1,null,null,null).exports,Z=r("Ui9F"),W=r("VNy9"),H={name:"flow-network-streams",components:{FlowNetworkStreamsGrid:L,TooltipIconButton:Z.a,Breadcrumbs:W.a},data:function(){return{params:{uuid:null,with_streams:!0},gridData:{},breadcrumbItems:[]}},mounted:function(){this.params=i()({},this.params,{uuid:this.$route.params.flowNetworkId}),this.setBreadCrumbs()},methods:{onBack:function(){this.$router.go(-1)},getDataCb:function(e){this.gridData=e},setBreadCrumbs:function(){this.breadcrumbItems=[],this.breadcrumbItems.push({text:"Flow Network",align:"center",disabled:!0,link:o.a.rfFlowNetwork}),this.breadcrumbItems.push({text:this.$route.params.flowNetworkId,align:"center",disabled:!1}),this.breadcrumbItems.push({text:"Streams",align:"center",disabled:!0})}}},M=Object(v.a)(H,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[e._v(" Flow Network Streams ")]),e._v(" "),r("v-card-text",[r("breadcrumbs",{attrs:{items:e.breadcrumbItems}}),e._v(" "),r("v-row",{attrs:{"no-gutter":""}},[r("v-col",{attrs:{cols:"12",lg:"12",xl:"12",md:"12",sm:"12",xs:"12"}},[e.params.uuid?r("flow-network-streams-grid",{attrs:{params:e.params,getDataCb:e.getDataCb}}):e._e()],1)],1)],1)],1)}),[],!1,null,null,null);t.default=M.exports},VNy9:function(e,t,r){"use strict";var a={name:"breadcrumbs",props:["items"]},i=r("psIG"),n=Object(i.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-breadcrumbs",{staticClass:"breadcrumbs",attrs:{items:e.items},scopedSlots:e._u([{key:"item",fn:function(t){var a=t.item;return[r("v-breadcrumbs-item",{staticClass:"breadcrumbs-item-text",attrs:{to:a.link,exact:""}},[e._v(" "+e._s(a.text)+" ")])]}}])})}),[],!1,null,"04244946",null);t.a=n.exports},e1ED:function(e,t,r){"use strict";var a=r("snOE"),i=r.n(a),n={name:"flow-mapping-form",props:["currentItems","items","onSave","onCancel","title"],data:function(){return{selectedItems:[],isSaving:!1,valid:!1}},computed:{lowerCaseTitle:function(){return(this.title||"").toLowerCase()}},mounted:function(){this.currentItems&&this.currentItems.length>0&&(this.selectedItems=[].concat(i()(this.currentItems)))},destroyed:function(){this.cleanUp()},methods:{cleanUp:function(){this.selectedItems=[],"function"==typeof this.onCancel&&this.onCancel()},onSubmit:function(){var e=this;if("function"!=typeof this.onSave)throw new Error(this.lowerCaseTitle+" form onSave function not passed");return this.isSaving=!0,this.onSave(this.selectedItems,this.currentItems).then((function(){e.$toasted.show("Successfully mapped."),e.cleanUp(!0)})).catch((function(){e.$toasted.show("Mapping unsuccessful.",{type:"error"})})).finally((function(){e.isSaving=!1}))}}},s=r("psIG"),o=Object(s.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v(e._s(e.title))])]),e._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-autocomplete",{attrs:{chips:"",multiple:"",clearable:"","small-chips":"","return-object":"","item-value":"uuid","item-text":"name",items:e.items,"deletable-chips":""},model:{value:e.selectedItems,callback:function(t){e.selectedItems=t},expression:"selectedItems"}})],1)],1)],1)],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-card-actions",{staticClass:"align-end justify-end"},[r("v-btn",{attrs:{color:"darken-1",text:""},on:{click:e.onCancel}},[e._v(" Cancel ")]),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",loading:e.isSaving,text:""},on:{click:function(t){return e.onSubmit()}}},[e._v(" Save ")])],1)],1)}),[],!1,null,null,null);t.a=o.exports},fBuC:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var a=r("Kz1y"),i=r.n(a),n=r("YUSd"),s=r.n(n),o=r("Zv/C"),l=r.n(o),u=r("Dkg+"),c=r.n(u),d=r("Gjrs"),m=r.n(d),f=r("uzYq"),v=r("DeKB"),h=r("oCli"),p=new(function(e){function t(){l()(this,t);var e=c()(this,(t.__proto__||s()(t)).call(this,h.a.rfFlowNetwork));return e.getPayloadToRequest=function(e){return i()({},e,{streams:e&&e.streams?e.streams.map((function(e){return{uuid:e.uuid}})):[]})},e.create=function(t){var r=e.evaluateUri();return f.a.post(r,e.getPayloadToRequest(t))},e}return m()(t,e),t}(v.a))},ilzx:function(e,t,r){"use strict";var a=r("Kz1y"),i=r.n(a),n=r("OBCi"),s=r.n(n),o=r("e1ED"),l=r("rIlz"),u={name:"associate-object-stream-form",props:["streamId","apiListKey","onCancel","service","title","items"],components:{FlowMappingForm:o.a},data:function(){return{currentItems:null}},mounted:function(){this.fetchStreamById()},methods:{onSave:function(e){var t=this;return s.a.all(e.map((function(e){return t.service.patch(e.uuid,i()({},e,{stream_uuid:t.streamId}))})))},fetchStreamById:function(){var e=this;return l.a.fetchById(this.streamId).then((function(t){return e.currentItems=t[e.apiListKey]||[],t}))}}},c=r("psIG"),d=Object(c.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.currentItems?r("flow-mapping-form",{attrs:{items:e.items,currentItems:e.currentItems,onSave:e.onSave,title:e.title,onCancel:e.onCancel}}):e._e()}),[],!1,null,null,null);t.a=d.exports},oujF:function(e,t,r){"use strict";var a={name:"text-button",props:["onClick","text"]},i=r("psIG"),n=Object(i.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-btn",{staticClass:"ma-1",attrs:{link:"",color:"nubeGreen",plain:""},on:{click:e.onClick}},[r("span",{staticClass:"btn-text"},[e._v(e._s(e.text))])])}),[],!1,null,null,null);t.a=n.exports},rIlz:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var a=r("Kz1y"),i=r.n(a),n=r("YUSd"),s=r.n(n),o=r("Zv/C"),l=r.n(o),u=r("Dkg+"),c=r.n(u),d=r("Gjrs"),m=r.n(d),f=r("uzYq"),v=r("DeKB"),h=r("oCli"),p=new(function(e){function t(){l()(this,t);var e=c()(this,(t.__proto__||s()(t)).call(this,h.a.rfStreams));return e.getPayloadToRequest=function(e){return i()({},e,{flow_networks:e&&e.flow_networks?e.flow_networks.map((function(e){return{uuid:e.uuid}})):[]})},e.create=function(t){var r=e.evaluateUri();return f.a.post(r,e.getPayloadToRequest(t))},e}return m()(t,e),t}(v.a))},wffz:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r("DeKB"),i=r("oCli"),n=new a.a(i.a.rfNetworks)}}]);
//# sourceMappingURL=16.fdd85a98859245a2d893.js.map