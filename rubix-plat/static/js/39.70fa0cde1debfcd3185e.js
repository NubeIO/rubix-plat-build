(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"2SyR":function(t,r,e){"use strict";var n={name:"icon-button",props:["icon","on-click","title","color","size","disabled","loading"]},i=e("psIG"),s=Object(i.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("span",["small"==t.size?e("v-btn",{staticClass:"pa-2",attrs:{small:"",text:"",color:t.color,loading:t.loading,disabled:t.disabled},on:{click:t.onClick}},[t.icon?e("v-icon",[t._v(t._s(t.icon))]):t._e(),t._v(" "),t.title?e("span",{staticClass:"text"},[t._v(" "+t._s(t.title))]):t._e()],1):e("v-btn",{staticClass:"pa-2",attrs:{text:"",loading:t.loading,disabled:t.disabled,color:t.color,"x-small":""},on:{click:t.onClick}},[t.icon?e("v-icon",[t._v(t._s(t.icon))]):t._e(),t._v(" "),t.title?e("span",{staticClass:"text"},[t._v(" "+t._s(t.title))]):t._e()],1)],1)}),[],!1,null,null,null);r.a=s.exports},DeKB:function(t,r,e){"use strict";var n=e("Zv/C"),i=e.n(n),s=e("uzYq"),a=e("NWgQ"),u=e.n(a),o=e("PWxN"),c=e.n(o),l=function(){var t=this;this.uri="",this.evaluateUri=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return"function"==typeof t.uri?t.uri(r):uri},this.fetch=function(r){var e=t.evaluateUri(),n=null;return r&&r.hasOwnProperty("id")?(n=r.id,r=c()(r,"id")):r&&r.hasOwnProperty("uuid")&&(n=r.uuid,r=c()(r,"uuid")),r&&(e=e+"?"+u.a.stringify(r)),n?t.fetchById(n,r):s.a.get(e)},this.fetchById=function(r,e){var n=t.evaluateUri(r);return e&&(n=n+"?"+u.a.stringify(e)),s.a.get(n)},this.remove=function(){var r=t.evaluateUri();return s.a.delete(r)},this.removeById=function(r){var e=t.evaluateUri(r);return s.a.delete(e)},this.create=function(r){var e=t.evaluateUri();return s.a.post(e,r)},this.patch=function(r,e){var n=t.evaluateUri(r);return s.a.patch(n,e)},this.update=function(r,e){var n=t.evaluateUri(r);return s.a.put(n,e)}};r.a=function t(r){i()(this,t),l.call(this),this.uri=r}},TZD0:function(t,r,e){"use strict";e.d(r,"a",(function(){return I}));var n=e("tZmG"),i=e.n(n),s=e("YUSd"),a=e.n(s),u=e("Zv/C"),o=e.n(u),c=e("2lBV"),l=e.n(c),d=e("Dkg+"),f=e.n(d),m=e("Gjrs"),h=e.n(m),v=e("DeKB"),p=e("oCli"),b=e("uzYq"),g=e("PWxN"),w=e.n(g),_=e("NWgQ"),C=e.n(_),I=new(function(t){function r(){o()(this,r);var t=f()(this,(r.__proto__||a()(r)).call(this,p.a.rfWriters));return t.fetch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.uuid||t.id;if(!r)throw new Error("Consumer Id is required for fetching writers of consumers");var e=p.a.rfConsumers(r);return(t=w()(t,["uuid","id"]))&&i()(t).length>0&&(e=e+"?"+C.a.stringify(t)),b.a.get(e).then((function(t){return{dataItems:t.writers,extraData:w()(t,["writers"])}}))},t.createWriter=function(r){var e=t.evaluateUri()+"/wizard";return b.a.post(e,r)},t}return h()(r,t),l()(r,[{key:"fetchAll",value:function(){var t=p.a.rfWriters();return b.a.get(t)}}]),r}(v.a))},VNy9:function(t,r,e){"use strict";var n={name:"breadcrumbs",props:["items"]},i=e("psIG"),s=Object(i.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-breadcrumbs",{staticClass:"breadcrumbs",attrs:{items:t.items},scopedSlots:t._u([{key:"item",fn:function(r){var n=r.item;return[e("v-breadcrumbs-item",{staticClass:"breadcrumbs-item-text",attrs:{to:n.link,exact:""}},[t._v(" "+t._s(n.text)+" ")])]}}])})}),[],!1,null,"04244946",null);r.a=s.exports},Wkmy:function(t,r,e){"use strict";e.r(r);var n=e("Kz1y"),i=e.n(n),s=e("CfmX"),a=e("97BG"),u=e("Ui9F"),o=e("TZD0"),c=e("tZmG"),l=e.n(c),d=e("YUSd"),f=e.n(d),m=e("Zv/C"),h=e.n(m),v=e("2lBV"),p=e.n(v),b=e("Dkg+"),g=e.n(b),w=e("Gjrs"),_=e.n(w),C=e("DeKB"),I=e("oCli"),k=e("uzYq"),x=e("NWgQ"),N=e.n(x),W=e("PWxN"),y=e.n(W),D=new(function(t){function r(){h()(this,r);var t=g()(this,(r.__proto__||f()(r)).call(this,I.a.rfWriterClones));return t.fetch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.uuid||t.id;if(!r)throw new Error("Producer Id is required for fetching writers clones of producers");var e=I.a.rfProducers(r);return(t=y()(t,["uuid","id"]))&&l()(t).length>0&&(e=e+"?"+N.a.stringify(t)),k.a.get(e).then((function(t){return{dataItems:t.writer_clones,extraData:y()(t,["writer_clones"])}}))},t}return _()(r,t),p()(r,[{key:"fetchAll",value:function(){var t=I.a.rfWriterClones();return k.a.get(t)}}]),r}(C.a)),B=e("qhTB"),G={},S={name:"rf-writers-grid",components:{GenericGrid:s.a,TooltipIconButton:u.a},props:["params","getDataCb"],data:function(){return{selectedItem:{},dialogNames:i()({},G),dialog:{},gridName:a.q,service:D,toolbarTitle:"Writers Clones",gridHeaders:[{text:"Producer uuid",align:"center",value:"producer_uuid",sortable:!0},{text:"Source uuid",align:"center",value:"source_uuid",sortable:!0}]}},computed:{producer:function(){return{uuid:this.params.uuid}}},methods:{toggleDialog:function(t,r,e){this.selectedItem=r,this.syncGrid=e,this.dialog[t]=!this.dialog[t],this.dialog[t]?this.selectedItem=r:this.selectedItem=null},closeDialog:function(t){this.dialog[t]=!1,this.selectedItem={}},onAssignWriteAction:function(t){var r=this,e=this.selectedItem.uuid;return B.a(e,t).then((function(t){return"function"==typeof r.syncGrid&&r.syncGrid(),t}))},constructWriterClones:function(t){return{consumer_side_flow_uuid:t.consumer_side_flow_uuid,consumer_side_stream_uuid:t.consumer_side_stream_uuid,remote_producer_uuid:this.producer.uuid}},onCreateWriterClones:function(t){return o.a.createWriter(this.constructWriterClones(t))}}},$=e("psIG"),P=Object($.a)(S,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("generic-grid",{attrs:{gridName:t.gridName,isHeaderConfigurable:!0,params:t.params,service:t.service,headers:t.gridHeaders,toolbarTitle:t.toolbarTitle,getDataCb:t.getDataCb,creatable:!1,deletable:!0}})],1)}),[],!1,null,null,null).exports,U=e("2SyR"),z=e("VNy9"),q=(e("edSL"),e("oGAK")),T={name:"writer-clones",data:function(){return{params:{uuid:null,with_writer_clones:!0},renderCount:0,gridData:{},breadcrumbItems:[]}},components:{IconButton:U.a,WriterClonesGrid:P,TooltipIconButton:u.a,Breadcrumbs:z.a},watch:{"$route.params.producerId":function(t,r){t!=r&&(this.renderCount++,this.initialize())}},mounted:function(){this.initialize()},methods:{initialize:function(){this.params=i()({},this.params,{uuid:this.$route.params.producerId}),this.updateBreadCrumbs()},onBack:function(){this.$router.go(-1)},getDataCb:function(t){this.gridData=t},updateBreadCrumbs:function(){this.breadcrumbItems=[],this.breadcrumbItems.push({text:"Flow Network",align:"center",disabled:!1,link:q.a.rfFlowNetwork}),this.breadcrumbItems.push({text:this.$route.params.flowNetworkId,align:"center",disabled:!1}),this.breadcrumbItems.push({text:"Streams",align:"center",disabled:!0,link:q.a.rfFlowNetworkStreams.replace(":flowNetworkId",this.$route.params.flowNetworkId)}),this.breadcrumbItems.push({text:this.$route.params.streamId,align:"center",disabled:!1}),this.breadcrumbItems.push({text:"Producers",align:"center",disabled:!1,link:q.a.rfFlowNetworkProducer.replace(":flowNetworkId",this.$route.params.flowNetworkId).replace(":streamId",this.$route.params.streamId)}),this.breadcrumbItems.push({text:this.$route.params.producerId,align:"center",disabled:!1}),this.breadcrumbItems.push({text:"Writer Clones",align:"center",disabled:!0})}}},F=Object($.a)(T,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-card",{key:t.renderCount,attrs:{outlined:""}},[e("v-card-title",[e("v-btn",{staticClass:"mr-1",attrs:{icon:"",medium:""},on:{click:t.onBack}},[e("v-icon",{attrs:{medium:""}},[t._v(" mdi-arrow-left ")])],1),t._v("\n    Writer Clones\n  ")],1),t._v(" "),e("v-card-text",[e("breadcrumbs",{attrs:{items:t.breadcrumbItems}}),t._v(" "),e("v-row",{attrs:{"no-gutter":""}},[e("v-col",{attrs:{cols:"12",lg:"12",xl:"12",md:"12",sm:"12",xs:"12"}},[t.params.uuid?e("writer-clones-grid",{attrs:{params:t.params,getDataCb:t.getDataCb}}):t._e()],1)],1)],1)],1)}),[],!1,null,null,null);r.default=F.exports},oCli:function(t,r,e){"use strict";function n(t,r){return t?r+"/"+t:r}r.a={rfFNCStreams:function(t){return n(t,"rf-fnc")},rfCommands:function(t){return n(t,"/rf-commands")},rfLogin:function(t){return n(t,"/rf-login")},rfSchedules:function(t){return n(t,"/rf-schedules")},rfFlowNetwork:function(t){return n(t,"/rf-flow-network")},rfFlowNetworkClone:function(t){return n(t,"/rf-flow-network-clone")},rfJobs:function(t){return n(t,"/rf-jobs")},rfNetworks:function(t){return n(t,"/rf-networks")},rfPoints:function(t){return n(t,"/rf-points")},rfProducers:function(t){return n(t,"/rf-producers")},rfConsumers:function(t){return n(t,"/rf-consumers")},rfWriters:function(t){return n(t,"/rf-writers")},rfWriterClones:function(t){return n(t,"/rf-writer-clones")},rfStreams:function(t){return n(t,"/rf-streams")},rfStreamsClone:function(t){return n(t,"/rf-streams-clone")},rfDevices:function(t){return n(t,"/rf-devices")},rfWriterActions:function(t){return n(t,"/rf-writer-actions")}}},qhTB:function(t,r,e){"use strict";e.d(r,"a",(function(){return s}));var n=e("uzYq"),i=e("oCli").a.rfWriterActions,s=function(t,r){var e=i(t);return n.a.post(e,r)}}}]);
//# sourceMappingURL=39.70fa0cde1debfcd3185e.js.map