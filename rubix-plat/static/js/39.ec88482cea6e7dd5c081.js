(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"2SyR":function(t,e,r){"use strict";var n={name:"icon-button",props:["icon","on-click","title","color","size","disabled","loading"]},a=r("psIG"),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",["small"==t.size?r("v-btn",{staticClass:"pa-2",attrs:{small:"",text:"",color:t.color,loading:t.loading,disabled:t.disabled},on:{click:t.onClick}},[t.icon?r("v-icon",[t._v(t._s(t.icon))]):t._e(),t._v(" "),t.title?r("span",{staticClass:"text"},[t._v(" "+t._s(t.title))]):t._e()],1):r("v-btn",{staticClass:"pa-2",attrs:{text:"",loading:t.loading,disabled:t.disabled,color:t.color,"x-small":""},on:{click:t.onClick}},[t.icon?r("v-icon",[t._v(t._s(t.icon))]):t._e(),t._v(" "),t.title?r("span",{staticClass:"text"},[t._v(" "+t._s(t.title))]):t._e()],1)],1)}),[],!1,null,null,null);e.a=i.exports},DeKB:function(t,e,r){"use strict";var n=r("Zv/C"),a=r.n(n),i=r("uzYq"),s=r("NWgQ"),o=r.n(s),u=r("PWxN"),c=r.n(u),l=function(){var t=this;this.uri="",this.evaluateUri=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return"function"==typeof t.uri?t.uri(e):uri},this.fetch=function(e){var r=t.evaluateUri(),n=null;return e&&e.hasOwnProperty("id")?(n=e.id,e=c()(e,"id")):e&&e.hasOwnProperty("uuid")&&(n=e.uuid,e=c()(e,"uuid")),e&&(r=r+"?"+o.a.stringify(e)),n?t.fetchById(n,e):i.a.get(r)},this.fetchById=function(e,r){var n=t.evaluateUri(e);return r&&(n=n+"?"+o.a.stringify(r)),i.a.get(n)},this.remove=function(){var e=t.evaluateUri();return i.a.delete(e)},this.removeById=function(e){var r=t.evaluateUri(e);return i.a.delete(r)},this.create=function(e){var r=t.evaluateUri();return i.a.post(r,e)},this.patch=function(e,r){var n=t.evaluateUri(e);return i.a.patch(n,r)},this.update=function(e,r){var n=t.evaluateUri(e);return i.a.put(n,r)}};e.a=function t(e){a()(this,t),l.call(this),this.uri=e}},DiwG:function(t,e,r){"use strict";r.r(e);var n=r("Kz1y"),a=r.n(n),i=r("edSL"),s=r.n(i),o=r("2SyR"),u=r("Oj90"),c=r("CfmX"),l=r("qIMa"),d={name:"rf-command-group-grid",components:{GenericGrid:c.a,CommandGroupForm:u.a},props:["params","getDataCb"],data:function(){return{service:l.a,toolbarTitle:"Command Group",gridHeaders:[{text:"Name",align:"center",value:"name",sortable:!0},{text:"Actions",align:"center",value:"actions",sortable:!0}]}},computed:{stream:function(){return{uuid:this.params.uuid}}}},f=r("psIG"),m=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("generic-grid",{attrs:{params:t.params,service:t.service,headers:t.gridHeaders,toolbarTitle:t.toolbarTitle,getDataCb:t.getDataCb},scopedSlots:t._u([{key:"createForm",fn:function(e){var n=e.onSave,a=e.onClose,i=e.isOpen,s=e.isSaving;return[i?r("command-group-form",{attrs:{isEdit:!1,stream:t.stream,onSave:n,onCancel:a,isSaving:s}}):t._e()]}},{key:"editForm",fn:function(e){var n=e.onSave,a=e.item,i=e.onClose,s=e.isOpen,o=e.isSaving;return[s?r("command-group-form",{attrs:{item:a,isEdit:!0,onSave:n,onCancel:i,isSaving:o}}):t._e()]}}])})],1)}),[],!1,null,null,null).exports,v=r("oGAK"),p=r("VNy9"),h=r("Ui9F"),b={text:"Streams",disabled:!1,link:v.a.rfStreamsRoot},g={name:"command-group",components:{IconButton:o.a,CommandGroupGrid:m,TooltipIconButton:h.a,Breadcrumbs:p.a},data:function(){return{params:{uuid:null,with_command_groups:!0},gridData:{},breadcrumbItems:[b]}},mounted:function(){this.params=a()({},this.params,{uuid:this.$route.params.streamId})},methods:{onBack:function(){this.$router.go(-1)},getDataCb:function(t){this.gridData=t,this.updateBreadCrumbs()},updateBreadCrumbs:function(){this.breadcrumbItems.push(b);var t=s()(this.gridData,"extraData.name","");t&&this.breadcrumbItems.push({text:t,align:"center",disabled:!0})}}},_=Object(f.a)(g,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[r("v-btn",{staticClass:"mr-1",attrs:{icon:"",medium:""},on:{click:t.onBack}},[r("v-icon",{attrs:{medium:""}},[t._v(" fa-angle-left ")])],1),t._v("\n    Command Group\n  ")],1),t._v(" "),r("v-card-text",[r("breadcrumbs",{attrs:{items:t.breadcrumbItems}}),t._v(" "),r("v-row",{attrs:{"no-gutter":""}},[r("v-col",{attrs:{cols:"12",lg:"12",xl:"12",md:"12",sm:"12",xs:"12"}},[t.params.uuid?r("command-group-grid",{attrs:{params:t.params,getDataCb:t.getDataCb}}):t._e()],1)],1)],1)],1)}),[],!1,null,null,null);e.default=_.exports},Oj90:function(t,e,r){"use strict";var n=r("Kz1y"),a=r.n(n),i={name:"rf-command-group-form",props:["isEdit","onCancel","onSave","item","isSaving","stream"],data:function(){return{rules:{required:function(t){return!!t||"Required."},numberRule:function(t){return!isNaN(parseFloat(t))||"Required."}},valid:!1,formValues:a()({},{name:null,is_remote:!0,rubix_uuid:null,remote_rubix_uuid:null})}},computed:{lowerCaseTitle:function(){return"command group"},titleCase:function(){return"Command Group"},title:function(){return this.isEdit?"Edit "+this.titleCase:"Create "+this.titleCase},saveTitle:function(){return this.isEdit?"Save":"Create"}},mounted:function(){this.isEdit&&this.item&&(this.formValues=a()({},this.formValues,this.item)),!this.isEdit&&this.stream&&(this.formValues=a()({},this.formValues,{stream_uuid:this.stream.uuid}))},methods:{cleanUp:function(){this.formValues={},"function"==typeof this.onCancel&&this.onCancel()},onSubmit:function(){var t=this;if(this.$refs.form.validate()){if("function"!=typeof this.onSave)throw new Error(this.lowerCaseTitle+" form onSave function not passed");return this.onSave(this.formValues).then((function(){t.$toasted.show("Successfully "+(t.isEdit?"updated":"created")+" "+t.lowerCaseTitle+"."),t.cleanUp(!0)})).catch((function(){t.$toasted.show("Failed to "+(t.isEdit?"update":"create")+" "+t.lowerCaseTitle+".",{type:"error"})}))}}}},s=r("psIG"),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[t._v(t._s(t.title))])]),t._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{required:"",label:"Name",rules:[t.rules.required]},model:{value:t.formValues.name,callback:function(e){t.$set(t.formValues,"name",e)},expression:"formValues.name"}})],1)],1)],1)],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-card-actions",{staticClass:"align-end justify-end"},[r("v-btn",{attrs:{color:"darken-1",text:""},on:{click:t.onCancel}},[t._v(" Cancel ")]),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",loading:t.isSaving,text:""},on:{click:function(e){return t.onSubmit(t.formValues)}}},[t._v(" "+t._s(t.saveTitle)+" ")])],1)],1)}),[],!1,null,null,null);e.a=o.exports},VNy9:function(t,e,r){"use strict";var n={name:"breadcrumbs",props:["items"]},a=r("psIG"),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-breadcrumbs",{staticClass:"breadcrumbs",attrs:{items:t.items},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[r("v-breadcrumbs-item",{staticClass:"breadcrumbs-item-text",attrs:{to:n.link,exact:""}},[t._v(" "+t._s(n.text)+" ")])]}}])})}),[],!1,null,"04244946",null);e.a=i.exports},oCli:function(t,e,r){"use strict";function n(t,e){return t?e+"/"+t:e}e.a={rfPing:function(t){return n(t,"rf-ping")},rfFNCStreams:function(t){return n(t,"rf-fnc")},rfCommands:function(t){return n(t,"/rf-commands")},rfSchedules:function(t){return n(t,"/rf-schedules")},rfFlowNetwork:function(t){return n(t,"/rf-flow-network")},rfFlowNetworkClone:function(t){return n(t,"/rf-flow-network-clone")},rfJobs:function(t){return n(t,"/rf-jobs")},rfNetworks:function(t){return n(t,"/rf-networks")},rfPoints:function(t){return n(t,"/rf-points")},rfProducers:function(t){return n(t,"/rf-producers")},rfConsumers:function(t){return n(t,"/rf-consumers")},rfWriters:function(t){return n(t,"/rf-writers")},rfWriterClones:function(t){return n(t,"/rf-writer-clones")},rfStreams:function(t){return n(t,"/rf-streams")},rfStreamsClone:function(t){return n(t,"/rf-streams-clone")},rfDevices:function(t){return n(t,"/rf-devices")},rfWriterActions:function(t){return n(t,"/rf-writer-actions")}}},qIMa:function(t,e,r){"use strict";r.d(e,"a",(function(){return x}));var n=r("tZmG"),a=r.n(n),i=r("YUSd"),s=r.n(i),o=r("Zv/C"),u=r.n(o),c=r("2lBV"),l=r.n(c),d=r("Dkg+"),f=r.n(d),m=r("Gjrs"),v=r.n(m),p=r("DeKB"),h=r("oCli"),b=r("uzYq"),g=r("PWxN"),_=r.n(g),C=r("NWgQ"),w=r.n(C),x=new(function(t){function e(){u()(this,e);var t=f()(this,(e.__proto__||s()(e)).call(this,h.a.rfCommands));return t.fetch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.uuid||t.id;if(!e)throw new Error("Stream Id is required for fetching commands of streams");var r=h.a.rfStreams(e);return(t=_()(t,["uuid","id"]))&&a()(t).length>0&&(r=r+"?"+w.a.stringify(t)),b.a.get(r).then((function(t){return{dataItems:t.command_groups,extraData:_()(t,["command_groups"])}}))},t}return v()(e,t),l()(e,[{key:"fetchAll",value:function(){var t=h.a.rfProducers();return b.a.get(t)}}]),e}(p.a))}}]);
//# sourceMappingURL=39.ec88482cea6e7dd5c081.js.map